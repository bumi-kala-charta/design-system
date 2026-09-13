/* Builds _ds_bundle.js from the component, docs, and UI-kit sources.
   Each source file runs in its own try/IIFE so one broken file cannot take down the rest.
   Component exports land in a private scope and are published on the namespace at the end.

   node scripts/build-bundle.mjs           write _ds_bundle.js
   node scripts/build-bundle.mjs --check   exit 1 if _ds_bundle.js is out of date */
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformSync } from '@babel/core';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, '_ds_bundle.js');
const NAMESPACE = 'BumiKalaChartaDesignSystem_5e0b40';

// Order matters: components first (they fill the scope), then docs, then UI kits.
const SOURCE_GROUPS = [
  { dir: 'components', exts: ['.jsx'], exposed: true },
  { dir: 'site', exts: ['.js'], exposed: false },
  { dir: 'ui_kits', exts: ['.jsx'], exposed: false },
];

function walk(dir, exts) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs, { withFileTypes: true })
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .flatMap((entry) => {
      const child = join(dir, entry.name);
      if (entry.isDirectory()) return walk(child, exts);
      return exts.some((ext) => entry.name.endsWith(ext)) ? [child.split(sep).join('/')] : [];
    });
}

/* Removes `import` declarations and unwraps `export` so each file can run as a plain script,
   recording the exported names for the scope assignment. */
function modulesToScript(exportsOut) {
  return {
    visitor: {
      ImportDeclaration(path) {
        path.remove();
      },
      ExportNamedDeclaration(path) {
        const { declaration, specifiers } = path.node;
        if (declaration) {
          if (declaration.id) exportsOut.push(declaration.id.name);
          else for (const d of declaration.declarations || []) exportsOut.push(d.id.name);
          path.replaceWith(declaration);
        } else {
          for (const s of specifiers) exportsOut.push(s.exported.name);
          path.remove();
        }
      },
      ExportDefaultDeclaration(path) {
        throw path.buildCodeFrameError('Default exports are not supported — use a named export.');
      },
    },
  };
}

// Git may check files out with CRLF on Windows; hash and compile the LF form so builds match everywhere.
const readLF = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

function compile(sourcePath) {
  const source = readLF(join(ROOT, sourcePath));
  const exported = [];
  const { code } = transformSync(source, {
    filename: sourcePath,
    babelrc: false,
    configFile: false,
    sourceType: 'module',
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    plugins: [() => modulesToScript(exported)],
  });
  const hash = createHash('sha256').update(source).digest('hex').slice(0, 12);
  return { code, exported, hash };
}

function build() {
  const components = [];
  const sourceHashes = {};
  const sections = [];

  for (const group of SOURCE_GROUPS) {
    for (const sourcePath of walk(group.dir, group.exts)) {
      const { code, exported, hash } = compile(sourcePath);
      sourceHashes[sourcePath] = hash;
      let body = code;
      if (group.exposed && exported.length) {
        for (const name of exported) components.push({ name, sourcePath });
        body += `\nObject.assign(__ds_scope, { ${exported.join(', ')} });`;
      }
      sections.push(
        `// ${sourcePath}\ntry { (() => {\n${body}\n})(); } catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(sourcePath)}, error: String((e && e.message) || e) }); }`
      );
    }
  }

  const sortedHashes = Object.fromEntries(Object.entries(sourceHashes).sort(([a], [b]) => (a < b ? -1 : 1)));
  const meta = { format: 4, namespace: NAMESPACE, components, sourceHashes: sortedHashes, inlinedExternals: [], unexposedExports: [] };

  return [
    `/* @ds-bundle: ${JSON.stringify(meta)} */`,
    '(() => {',
    `const __ds_ns = (window.${NAMESPACE} = window.${NAMESPACE} || {});`,
    'const __ds_scope = {};',
    '(__ds_ns.__errors = __ds_ns.__errors || []);',
    ...sections,
    ...components.map(({ name }) => `__ds_ns.${name} = __ds_scope.${name};`),
    '})();',
  ].join('\n\n') + '\n';
}

const bundle = build();
if (process.argv.includes('--check')) {
  const current = existsSync(OUT) ? readLF(OUT) : '';
  if (current !== bundle) {
    console.error(`${relative(ROOT, OUT)} is out of date — run \`npm run build\`.`);
    process.exit(1);
  }
  console.log(`${relative(ROOT, OUT)} is up to date.`);
} else {
  writeFileSync(OUT, bundle);
  console.log(`Wrote ${relative(ROOT, OUT)} (${(bundle.length / 1024).toFixed(1)} KB).`);
}
