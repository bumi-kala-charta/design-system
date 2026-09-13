/* @ds-bundle: {"format":4,"namespace":"BumiKalaChartaDesignSystem_5e0b40","components":[{"name":"ContourField","sourcePath":"components/brand/ContourField.jsx"},{"name":"CoordinateReadout","sourcePath":"components/brand/CoordinateReadout.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AvatarStack","sourcePath":"components/patterns/AvatarStack.jsx"},{"name":"EventCard","sourcePath":"components/patterns/EventCard.jsx"}],"sourceHashes":{"components/brand/ContourField.jsx":"c139602fb48a","components/brand/CoordinateReadout.jsx":"ce93c1d0049f","components/brand/Icon.jsx":"0d3ae800e014","components/brand/Logo.jsx":"66902c03b20b","components/core/Badge.jsx":"75546160f63a","components/core/Button.jsx":"d3a89e324d56","components/core/Card.jsx":"4d91c5488894","components/core/IconButton.jsx":"dfe9dfdbcef5","components/core/SectionHeading.jsx":"0ea8e29f448d","components/core/Stat.jsx":"ee93c7abd90b","components/core/Tag.jsx":"822796521da0","components/feedback/Dialog.jsx":"5ab51a0279a2","components/feedback/Toast.jsx":"1f1c2e4c4ca1","components/feedback/Tooltip.jsx":"da633d2c1f86","components/forms/Checkbox.jsx":"4683ab88e958","components/forms/Input.jsx":"ef0ef6f01315","components/forms/Radio.jsx":"f29b167e1cbe","components/forms/Select.jsx":"0da49e9779dc","components/forms/Switch.jsx":"a44dd0ecf7c3","components/navigation/NavBar.jsx":"bb6bfda74c7c","components/navigation/Tabs.jsx":"973c3f87af60","components/patterns/AvatarStack.jsx":"52c37e433aab","components/patterns/EventCard.jsx":"70429b29aca0","site/embed.js":"cecec1cb6a1b","ui_kits/dashboard/Chrome.jsx":"afd5aa1d21df","ui_kits/dashboard/Dashboard.jsx":"5e8c104161ee","ui_kits/dashboard/InspectorPanel.jsx":"36101938b95e","ui_kits/dashboard/LayerPanel.jsx":"2d3efbb3a67d","ui_kits/dashboard/MapCanvas.jsx":"3ca07806a88e","ui_kits/dashboard/ProjectTable.jsx":"b885755ea4d7","ui_kits/website/AboutScreen.jsx":"2c9b5aae6206","ui_kits/website/App.jsx":"6162debd2481","ui_kits/website/DiscussionScreen.jsx":"5cadd42c1612","ui_kits/website/HomeScreen.jsx":"ade77f429912","ui_kits/website/ProjectsScreen.jsx":"3eee8a4710ff","ui_kits/website/Shared.jsx":"c228a485dcd6","ui_kits/website/TrainingScreen.jsx":"88cb5c4531dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BumiKalaChartaDesignSystem_5e0b40 = window.BumiKalaChartaDesignSystem_5e0b40 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ContourField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The brand's topographic pattern as a positioned background layer.
   Drop inside any position:relative container, behind content.
   motif: 'contour' | 'ridge' | 'orbit'
   tone:  'on-brand' | 'on-light' | 'on-accent' | 'on-dark' */
function ContourField({
  motif = 'contour',
  tone = 'on-brand',
  density = 'default',
  globeSize = 340,
  opacity,
  style,
  ...rest
}) {
  const toneAttr = tone === 'on-brand' ? undefined : tone.replace('on-', '');
  const densityAttr = density === 'default' ? undefined : density;
  if (motif === 'orbit') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: "bkc-orbit",
      "data-pattern-tone": toneAttr,
      style: {
        '--globe': `${globeSize}px`,
        opacity,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: motif === 'ridge' ? 'bkc-contour bkc-contour--ridge' : 'bkc-contour',
    "data-pattern-tone": toneAttr,
    "data-pattern-density": densityAttr,
    style: {
      opacity,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ContourField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContourField.jsx", error: String((e && e.message) || e) }); }

// components/brand/CoordinateReadout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcReadoutRow = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 'var(--space-3)',
  padding: 'var(--space-2) 0',
  borderBottom: '1px dotted var(--border-default)',
  fontSize: 'var(--text-caption)'
};

/* Machine facts, set in IBM Plex Mono: coordinates, datum, scale, accuracy.
   Use wherever the design should feel measured rather than marketed. */
function CoordinateReadout({
  items = [],
  label,
  dense = false,
  tone = 'default',
  style,
  ...rest
}) {
  const onDark = tone === 'on-dark';
  const rowColor = onDark ? 'var(--text-on-dark)' : 'var(--text-default)';
  const keyColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-data)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: keyColor,
      marginBottom: 'var(--space-2)'
    }
  }, label), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...bkcReadoutRow,
      padding: dense ? '5px 0' : bkcReadoutRow.padding,
      borderBottomColor: onDark ? 'var(--border-on-dark)' : 'var(--border-default)',
      borderBottom: i === items.length - 1 ? 'none' : `1px dotted ${onDark ? 'rgba(255,255,255,.22)' : 'var(--border-default)'}`,
      color: rowColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: onDark ? 'var(--bkc-white)' : 'var(--text-strong)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: it.emphasis ? 'var(--text-accent)' : keyColor,
      letterSpacing: '.02em'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { CoordinateReadout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CoordinateReadout.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wrapper around the Lucide icon set (CDN). BKC's guideline defines no icon system,
   so Lucide is an intentional, documented substitution: 1.6px stroke, rounded caps. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.6,
  color,
  className,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const glyph = document.createElement('i');
    glyph.setAttribute('data-lucide', name);
    host.appendChild(glyph);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': strokeWidth
      },
      nameAttr: 'data-lucide'
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color: color || 'currentColor',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcLogoBox = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-3)',
  textDecoration: 'none'
};

/* The BKC identity lockup: circular emblem (squirrel over three earth strata) + wordmark.
   variant: 'horizontal' | 'vertical' | 'emblem' | 'wordmark'
   tone:    'default' | 'on-dark'  — wordmark colour only; the emblem is never recoloured. */
function Logo({
  variant = 'horizontal',
  size = 40,
  tone = 'default',
  assetBase = '../../assets',
  showTagline = false,
  style,
  ...rest
}) {
  const onDark = tone === 'on-dark';
  const wordColor = onDark ? 'var(--bkc-white)' : 'var(--text-strong)';
  const emblem = /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/logo-emblem.png`,
    alt: "Bumi Kala Charta",
    style: {
      width: size,
      height: size,
      flex: '0 0 auto'
    }
  });
  const wordSize = Math.max(11, Math.round(size * 0.33));
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bkc-wordmark",
    style: {
      color: wordColor,
      fontSize: wordSize,
      lineHeight: 1.15,
      letterSpacing: 'var(--tracking-wordmark)',
      whiteSpace: variant === 'vertical' ? 'pre-line' : 'nowrap'
    }
  }, variant === 'vertical' ? 'Bumi\nKala\nCharta' : 'Bumi Kala Charta'), showTagline && /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow",
    style: {
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)'
    }
  }, "Geospatial Community"));
  if (variant === 'emblem') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...bkcLogoBox,
      ...style
    }
  }, rest), emblem);
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...bkcLogoBox,
      ...style
    }
  }, rest), word);
  if (variant === 'vertical') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...bkcLogoBox,
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: 'center',
      ...style
    }
  }, rest), emblem, word);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...bkcLogoBox,
      ...style
    }
  }, rest), emblem, word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcBadgeTones = {
  brand: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--green-700)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--orange-600)'
  },
  success: {
    background: 'var(--status-success-soft)',
    color: '#0A6B1B'
  },
  warning: {
    background: 'var(--status-warning-soft)',
    color: 'var(--orange-700)'
  },
  danger: {
    background: 'var(--status-danger-soft)',
    color: 'var(--status-danger)'
  },
  neutral: {
    background: 'var(--neutral-150)',
    color: 'var(--text-default)'
  },
  solid: {
    background: 'var(--bkc-orange)',
    color: 'var(--bkc-white)'
  },
  'on-dark': {
    background: 'rgba(255,255,255,.14)',
    color: 'var(--bkc-white)'
  }
};

/* A status marker. Short, uppercase, mono — reads as a data label, not a sticker. */
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: size === 'sm' ? '3px 8px' : '5px 11px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-data)',
      fontSize: size === 'sm' ? 'var(--text-micro)' : 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      ...(bkcBadgeTones[tone] || bkcBadgeTones.brand),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcBtnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-pill)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)'
};
const bkcBtnSizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '14px 24px',
    fontSize: 'var(--text-body)'
  },
  lg: {
    padding: '16px 30px',
    fontSize: 'var(--text-body-lg)'
  }
};
const bkcBtnVariants = {
  primary: {
    rest: {
      background: 'var(--action-primary)',
      color: 'var(--bkc-white)'
    },
    hover: {
      background: 'var(--action-primary-hover)'
    },
    press: {
      background: 'var(--action-primary-press)'
    }
  },
  brand: {
    rest: {
      background: 'var(--action-brand)',
      color: 'var(--bkc-white)'
    },
    hover: {
      background: 'var(--action-brand-hover)'
    },
    press: {
      background: 'var(--action-brand-press)'
    }
  },
  accent: {
    rest: {
      background: 'var(--action-accent)',
      color: 'var(--bkc-white)'
    },
    hover: {
      background: 'var(--action-accent-hover)'
    },
    press: {
      background: 'var(--action-accent-press)'
    }
  },
  secondary: {
    rest: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-default)'
    },
    hover: {
      background: 'var(--action-ghost-hover)'
    },
    press: {
      background: 'var(--neutral-200)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--text-strong)'
    },
    hover: {
      background: 'var(--action-ghost-hover)'
    },
    press: {
      background: 'var(--neutral-200)'
    }
  },
  'on-dark': {
    rest: {
      background: 'transparent',
      color: 'var(--bkc-white)',
      borderColor: 'var(--border-on-dark)'
    },
    hover: {
      background: 'rgba(255,255,255,.12)'
    },
    press: {
      background: 'rgba(255,255,255,.18)'
    }
  }
};

/* The primary action. Pill-shaped at every size — BKC never uses square buttons. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = bkcBtnVariants[variant] || bkcBtnVariants.primary;
  const composed = {
    ...bkcBtnBase,
    ...bkcBtnSizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.press : null),
    width: fullWidth ? '100%' : undefined,
    transform: press && !disabled ? 'scale(.985)' : undefined,
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcCardSurfaces = {
  default: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)'
  },
  muted: {
    background: 'var(--surface-card-muted)',
    border: '1px solid transparent'
  },
  brand: {
    background: 'var(--surface-brand)',
    border: '1px solid transparent',
    color: 'var(--text-on-brand)'
  },
  dark: {
    background: 'var(--surface-dark)',
    border: '1px solid transparent',
    color: 'var(--text-on-dark)'
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--border-default)'
  }
};

/* The workhorse container: 20px radius, hairline border, lift on hover.
   Set pattern to lay the contour motif behind the content. */
function Card({
  children,
  surface = 'default',
  interactive = false,
  pattern = null,
  padding = 'var(--pad-card)',
  radius = 'var(--radius-card)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      padding,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      boxShadow: lift ? 'var(--shadow-card)' : 'none',
      transform: lift ? 'translateY(-3px)' : undefined,
      cursor: interactive ? 'pointer' : undefined,
      ...(bkcCardSurfaces[surface] || bkcCardSurfaces.default),
      ...style
    }
  }, rest), pattern, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcIconBtnSizes = {
  sm: 32,
  md: 38,
  lg: 44
};
const bkcIconBtnVariants = {
  soft: {
    rest: {
      background: 'var(--surface-brand-soft)',
      color: 'var(--bkc-green)'
    },
    hover: {
      background: 'rgba(53,140,103,.18)'
    }
  },
  'soft-accent': {
    rest: {
      background: 'var(--surface-accent-soft)',
      color: 'var(--bkc-orange)'
    },
    hover: {
      background: 'rgba(234,144,18,.2)'
    }
  },
  solid: {
    rest: {
      background: 'var(--action-brand)',
      color: 'var(--bkc-white)'
    },
    hover: {
      background: 'var(--action-brand-hover)'
    }
  },
  outline: {
    rest: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)'
    },
    hover: {
      background: 'var(--action-ghost-hover)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--text-muted)'
    },
    hover: {
      background: 'var(--action-ghost-hover)',
      color: 'var(--text-strong)'
    }
  },
  'on-dark': {
    rest: {
      background: 'rgba(255,255,255,.12)',
      color: 'var(--bkc-white)'
    },
    hover: {
      background: 'rgba(255,255,255,.2)'
    }
  }
};

/* A square-ish action carrying only an icon. Radius follows the container scale, not the pill. */
function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  shape = 'rounded',
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = bkcIconBtnVariants[variant] || bkcIconBtnVariants.soft;
  const px = bkcIconBtnSizes[size] || bkcIconBtnSizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      border: 'none',
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : size === 'sm' ? 'var(--radius-sm)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
      ...v.rest,
      ...(hover && !disabled ? v.hover : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Section opener: eyebrow, heading, optional lead paragraph and trailing action. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
  align = 'left',
  tone = 'default',
  style,
  ...rest
}) {
  const onDark = tone === 'on-dark';
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: centered ? 'center' : 'flex-end',
      justifyContent: centered ? 'center' : 'space-between',
      flexDirection: centered ? 'column' : 'row',
      gap: 'var(--space-4)',
      textAlign: centered ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      marginBottom: 'var(--space-3)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-brand)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-title-1)',
      color: onDark ? 'var(--bkc-white)' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      maxWidth: 'var(--width-prose)',
      fontSize: 'var(--text-body)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-muted)',
      marginInline: centered ? 'auto' : undefined
    }
  }, lead)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A single headline figure. Numerals sit in Plex Sans for marketing surfaces,
   Plex Mono when the number is a measurement (set mono). */
function Stat({
  value,
  label,
  tone = 'default',
  mono = false,
  size = 'md',
  style,
  ...rest
}) {
  const onDark = tone === 'on-dark';
  const sizes = {
    sm: 'var(--text-title-2)',
    md: 'var(--text-display-3)',
    lg: 'var(--text-display-2)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: mono ? 'var(--font-data)' : 'var(--font-sans)',
      fontSize: sizes[size] || sizes.md,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-title)',
      lineHeight: 1.1,
      color: tone === 'accent' ? 'var(--bkc-orange)' : onDark ? 'var(--bkc-white)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 4,
      fontSize: 'var(--text-body-sm)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A selectable/removable pill for topics, filters, and skills.
   Sentence-case sans — the softer sibling of Badge. */
function Tag({
  children,
  selected = false,
  onRemove,
  interactive = false,
  iconLeft,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = interactive || !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--bkc-green)' : 'var(--border-subtle)'}`,
      background: selected ? 'var(--surface-brand-soft)' : hover && clickable ? 'var(--action-ghost-hover)' : 'var(--neutral-100)',
      color: selected ? 'var(--green-700)' : 'var(--text-default)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: selected ? 'var(--weight-medium)' : 'var(--weight-regular)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, rest), iconLeft, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Hapus",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      marginLeft: 2,
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Modal sheet. 24px radius, warm overlay, no entrance bounce. Controlled by `open`. */
function Dialog({
  open = false,
  title,
  description,
  children,
  actions,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-7)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(3px)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-band)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--pad-card-lg)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title-2)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcToastTones = {
  success: {
    accent: 'var(--bkc-green-bright)',
    bg: 'var(--surface-dark)'
  },
  info: {
    accent: 'var(--bkc-stratum)',
    bg: 'var(--surface-dark)'
  },
  warning: {
    accent: 'var(--bkc-orange)',
    bg: 'var(--surface-dark)'
  },
  danger: {
    accent: 'var(--status-danger)',
    bg: 'var(--surface-dark)'
  }
};

/* Transient confirmation on a dark slab, with a single accent dot. No icons, no colour flood. */
function Toast({
  title,
  description,
  tone = 'success',
  action,
  onClose,
  style,
  ...rest
}) {
  const t = bkcToastTones[tone] || bkcToastTones.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: '14px 16px',
      minWidth: 300,
      maxWidth: 420,
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: t.accent,
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--bkc-white)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-on-dark-muted)'
    }
  }, description)), action, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Tutup",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-on-dark-muted)',
      cursor: 'pointer',
      padding: 0,
      fontSize: 15,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hover label on the dark slab. Wraps its trigger; position is fixed per side. */
function Tooltip({
  label,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const offsets = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-dark)',
      color: 'var(--bkc-white)',
      fontSize: 'var(--text-caption)',
      boxShadow: 'var(--shadow-float)',
      ...offsets[side]
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcTickBase = {
  display: 'grid',
  placeItems: 'center',
  width: 20,
  height: 20,
  flex: '0 0 auto',
  border: '1.5px solid var(--border-default)',
  background: 'var(--surface-page)',
  transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
};

/* Square tick box. Green when checked — never orange (orange is reserved for accents). */
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const fieldId = id || React.useId();
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...bkcTickBase,
      borderRadius: 'var(--radius-xs)',
      borderColor: on ? 'var(--bkc-green)' : 'var(--border-default)',
      background: on ? 'var(--bkc-green)' : 'var(--surface-page)',
      marginTop: description ? 2 : 0
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const bkcFieldShell = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-page)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-body)',
  color: 'var(--text-strong)',
  outline: 'none',
  transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)'
};

/* Single-line text field with label, hint and error states. Set multiline for a textarea. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  multiline = false,
  rows = 4,
  id,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const Tag = multiline ? 'textarea' : 'input';
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--bkc-green)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bkc-orange)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      display: 'flex',
      color: 'var(--text-subtle)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...bkcFieldShell,
      borderColor,
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      paddingLeft: iconLeft ? 40 : bkcFieldShell.padding.split(' ')[1],
      resize: multiline ? 'vertical' : undefined,
      lineHeight: multiline ? 'var(--leading-body)' : undefined
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Radio group. Options are {value,label,description} or plain strings. */
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const groupName = name || React.useId();
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-5)' : 'var(--space-3)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    const desc = typeof o === 'string' ? null : o.description;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: desc ? 'flex-start' : 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      checked: on,
      onChange: () => pick(v),
      disabled: disabled,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 20,
        height: 20,
        flex: '0 0 auto',
        marginTop: desc ? 2 : 0,
        borderRadius: 'var(--radius-pill)',
        border: `1.5px solid ${on ? 'var(--bkc-green)' : 'var(--border-default)'}`,
        background: 'var(--surface-page)',
        transition: 'border-color var(--duration-fast) var(--ease-standard)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 999,
        background: 'var(--bkc-green)'
      }
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--text-body)',
        color: 'var(--text-strong)'
      }
    }, text), desc && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 2,
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, desc)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Native select styled to match Input. Options are {value,label} or plain strings. */
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      padding: '12px 38px 12px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--bkc-green)' : 'var(--border-default)'}`,
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 15,
      top: '50%',
      marginTop: -2,
      width: 8,
      height: 8,
      borderRight: '1.5px solid var(--text-subtle)',
      borderBottom: '1.5px solid var(--text-subtle)',
      transform: 'translateY(-50%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Instant on/off. Track goes green; the knob never changes colour. */
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const fieldId = id || React.useId();
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: fieldId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 40,
      height: 23,
      flex: '0 0 auto',
      padding: 0,
      marginTop: description ? 1 : 0,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--bkc-green)' : 'var(--neutral-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 20 : 3,
      width: 17,
      height: 17,
      borderRadius: 999,
      background: 'var(--bkc-white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Site header used on every BKC public surface: emblem lockup, links, one pill action. */
function NavBar({
  items = [],
  active,
  action,
  tone = 'default',
  assetBase = '../../assets',
  onNavigate,
  style,
  ...rest
}) {
  const onBrand = tone === 'on-brand';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px var(--gutter-page)',
      background: onBrand ? 'var(--surface-brand)' : 'var(--surface-page)',
      borderBottom: onBrand ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/logo-emblem.png`,
    alt: "Bumi Kala Charta",
    style: {
      width: 38,
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bkc-wordmark",
    style: {
      fontSize: 14,
      color: onBrand ? 'var(--bkc-white)' : 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, "Bumi Kala Charta")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const on = active === label;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement("a", {
      href: typeof it === 'string' ? '#' : it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        fontSize: 'var(--text-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: onBrand ? on ? 'var(--bkc-white)' : 'rgba(255,255,255,.78)' : on ? 'var(--text-brand)' : 'var(--text-default)'
      }
    }, label));
  }), action && /*#__PURE__*/React.createElement("li", {
    style: {
      marginLeft: 'var(--space-2)'
    }
  }, action)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Horizontal tab strip. Underline for page-level sections, pill for filters inside panels. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  tone = 'default',
  style,
  ...rest
}) {
  const first = items.length ? typeof items[0] === 'string' ? items[0] : items[0].value : undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const onDark = tone === 'on-dark';
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: pill ? 'var(--space-2)' : 'var(--space-6)',
      borderBottom: pill ? 'none' : `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      padding: pill ? 4 : 0,
      background: pill ? 'var(--neutral-100)' : 'transparent',
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const text = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? null : it.count;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: on ? onDark ? 'var(--bkc-white)' : 'var(--text-strong)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        transition: 'color var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)',
        ...(pill ? {
          padding: '8px 16px',
          borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--surface-page)' : 'transparent',
          boxShadow: on ? 'var(--shadow-xs)' : 'none'
        } : {
          padding: '0 0 12px',
          borderBottom: `2px solid ${on ? 'var(--bkc-green)' : 'transparent'}`,
          marginBottom: -1
        })
      }
    }, text, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: 'var(--text-micro)',
        color: 'var(--text-subtle)'
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/AvatarStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Overlapping member initials — the community's shorthand for "people are here".
   Real photos replace initials when available; keep the 2px white ring either way. */
function AvatarStack({
  people = [],
  size = 34,
  max = 5,
  caption,
  style,
  ...rest
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, shown.map((p, i) => {
    const initials = typeof p === 'string' ? p : p.initials;
    const src = typeof p === 'string' ? null : p.src;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      title: typeof p === 'string' ? p : p.name,
      style: {
        width: size,
        height: size,
        borderRadius: 999,
        marginLeft: i === 0 ? 0 : -10,
        border: '2px solid var(--surface-page)',
        background: 'var(--neutral-150)',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        fontSize: Math.round(size * 0.3),
        color: 'var(--text-subtle)',
        fontWeight: 'var(--weight-medium)'
      }
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : initials);
  }), extra > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      marginLeft: -10,
      border: '2px solid var(--surface-page)',
      background: 'var(--surface-brand-soft)',
      display: 'grid',
      placeItems: 'center',
      fontSize: Math.round(size * 0.28),
      color: 'var(--green-700)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "+", extra)), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A training, discussion, or field-trip listing. Date sits in a mono block on the left. */
function EventCard({
  day,
  month,
  title,
  meta,
  format,
  seats,
  tone = 'default',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover && onClick ? 'var(--shadow-card)' : 'none',
      transform: hover && onClick ? 'translateY(-2px)' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      flex: '0 0 auto',
      textAlign: 'center',
      padding: '10px 0',
      borderRadius: 'var(--radius-md)',
      background: tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
      fontFamily: 'var(--font-data)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 24,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      color: tone === 'accent' ? 'var(--orange-600)' : 'var(--green-700)'
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      fontSize: 'var(--text-micro)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: tone === 'accent' ? 'var(--orange-600)' : 'var(--green-700)'
    }
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title-3)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 6,
      flex: '0 0 auto'
    }
  }, format && /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow"
  }, format), seats && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: seats.startsWith('Penuh') ? 'var(--status-danger)' : 'var(--text-accent)'
    }
  }, seats)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventCard.jsx", error: String((e && e.message) || e) }); }

// site/embed.js
try { (() => {
/* <ds-embed src w h label note max> — renders a design-system specimen page in a
   frame scaled to fit the docs column, at its authored viewport. */
class DsEmbed extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');
    const w = +this.getAttribute('w') || 700;
    const h = +this.getAttribute('h') || 300;
    const label = this.getAttribute('label') || src;
    const note = this.getAttribute('note') || '';
    const max = this.hasAttribute('max') ? +this.getAttribute('max') : 1;
    this.innerHTML = '<figure class="sp"><header><span class="mono"></span><span class="sp-note"></span>' + '<a class="sp-open" target="_blank" rel="noopener">buka \u2197</a></header>' + '<div class="sp-body"><iframe loading="lazy" title=""></iframe></div></figure>';
    this.querySelector('.mono').textContent = label;
    this.querySelector('.sp-note').textContent = note;
    const open = this.querySelector('.sp-open');
    open.href = src;
    const body = this.querySelector('.sp-body');
    const fr = this.querySelector('iframe');
    fr.title = label;
    fr.src = src;
    fr.style.width = w + 'px';
    fr.style.height = h + 'px';
    const fit = () => {
      const cw = body.clientWidth;
      if (!cw) return;
      const k = Math.min(cw / w, max);
      fr.style.transform = 'scale(' + k + ')';
      body.style.height = Math.round(h * k) + 'px';
    };
    new ResizeObserver(fit).observe(body);
    fit();
  }
}
customElements.define('ds-embed', DsEmbed);
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/embed.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Chrome.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Tooltip,
  Badge,
  Button
} = window.BumiKalaChartaDesignSystem_5e0b40;
const DASH_ASSETS = '../../assets';

/* Left rail: emblem, section icons, account. 64px wide, ink surface. */
function Rail({
  section,
  onSection
}) {
  const items = [{
    id: 'peta',
    icon: 'map',
    label: 'Peta kerja'
  }, {
    id: 'proyek',
    icon: 'folder-open',
    label: 'Proyek'
  }, {
    id: 'titik',
    icon: 'crosshair',
    label: 'Titik kontrol'
  }, {
    id: 'unggah',
    icon: 'upload',
    label: 'Unggah data'
  }, {
    id: 'laporan',
    icon: 'file-text',
    label: 'Laporan'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 64,
      flex: '0 0 auto',
      background: 'var(--surface-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '14px 0',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${DASH_ASSETS}/logo-emblem.png`,
    alt: "BKC",
    style: {
      width: 36,
      height: 36,
      marginBottom: 'var(--space-4)'
    }
  }), items.map(it => {
    const on = section === it.id;
    return /*#__PURE__*/React.createElement(Tooltip, {
      key: it.id,
      label: it.label,
      side: "right"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onSection(it.id),
      style: {
        width: 42,
        height: 42,
        display: 'grid',
        placeItems: 'center',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: on ? 'var(--bkc-green)' : 'transparent',
        color: on ? '#fff' : 'rgba(255,255,255,.6)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 19
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'grid',
      gap: 'var(--space-2)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Pengaturan",
    side: "right"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 42,
      height: 42,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'transparent',
      color: 'rgba(255,255,255,.6)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 19
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'var(--surface-brand-soft)',
      color: 'var(--green-200)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontWeight: 500
    }
  }, "FS")));
}

/* Top bar: project breadcrumb, CRS readout, actions. */
function TopBar({
  project,
  onExport
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-5)',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow"
  }, "Proyek"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, project), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "Berjalan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-subtle)'
    }
  }, "WGS 84 / UTM 48S \xB7 EPSG:32748"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bagikan",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Riwayat",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "brand",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }),
    onClick: onExport
  }, "Ekspor")));
}
Object.assign(window, {
  Rail,
  TopBar,
  DASH_ASSETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
const {
  Toast,
  Dialog,
  Button,
  Select,
  Checkbox,
  Input
} = window.BumiKalaChartaDesignSystem_5e0b40;
const POINTS = [{
  id: 'BM-01',
  x: 34,
  y: 41,
  type: 'bm',
  quality: 'Fix',
  order: '2',
  e: '791.482,318 m',
  n: '9.235.106,942 m',
  h: '714,206 m',
  ho: '712,088 m',
  sh: '±6 mm',
  sv: '±11 mm'
}, {
  id: 'BM-02',
  x: 52,
  y: 33,
  type: 'bm',
  quality: 'Fix',
  order: '2',
  e: '792.114,806 m',
  n: '9.235.588,120 m',
  h: '706,441 m',
  ho: '704,318 m',
  sh: '±7 mm',
  sv: '±13 mm'
}, {
  id: 'BM-05',
  x: 44,
  y: 62,
  type: 'bm',
  quality: 'Float',
  order: '3',
  e: '791.860,552 m',
  n: '9.234.402,714 m',
  h: '698,902 m',
  ho: '696,780 m',
  sh: '±14 mm',
  sv: '±26 mm'
}, {
  id: 'CORS-SLM',
  x: 69,
  y: 52,
  type: 'cors',
  quality: 'Fix',
  order: '1',
  e: '793.402,118 m',
  n: '9.235.012,338 m',
  h: '742,014 m',
  ho: '739,896 m',
  sh: '±3 mm',
  sv: '±6 mm'
}, {
  id: 'BM-07',
  x: 26,
  y: 70,
  type: 'bm',
  quality: 'Fix',
  order: '3',
  e: '790.982,244 m',
  n: '9.234.118,506 m',
  h: '689,558 m',
  ho: '687,438 m',
  sh: '±9 mm',
  sv: '±17 mm'
}];

// Floating panel geometry, shared so the map controls clear the panels.
const PANEL_GAP = 16;
const PANEL_LAYER = 288;
const PANEL_INSPECTOR = 340;
const floatingPanel = (side, width) => ({
  position: 'absolute',
  top: PANEL_GAP,
  bottom: PANEL_GAP,
  [side]: PANEL_GAP,
  width,
  zIndex: 5,
  borderRadius: 'var(--radius-card)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
});
Object.assign(window, {
  PANEL_GAP,
  floatingPanel
});
function Dashboard() {
  const [section, setSection] = React.useState('peta');
  const [project, setProject] = React.useState('Topografi Waduk Jatigede');
  const [selected, setSelected] = React.useState('BM-01');
  const [exportOpen, setExportOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [layers, setLayers] = React.useState({
    titik: true,
    kontur: true,
    area: true,
    batas: true,
    graticule: true,
    hillshade: false
  });
  const toggle = id => setLayers(s => ({
    ...s,
    [id]: !s[id]
  }));
  const point = POINTS.find(p => p.id === selected);
  const notify = (title, description) => {
    setToast({
      title,
      description
    });
    window.setTimeout(() => setToast(null), 4000);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Rail, {
    section: section,
    onSection: setSection
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: project,
    onExport: () => setExportOpen(true)
  }), section === 'peta' ?
  /*#__PURE__*/
  /* Map fills the view; layer and inspector panels float over it as frosted glass. */
  React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MapCanvas, {
    layers: layers,
    points: POINTS,
    selected: selected,
    onSelect: setSelected,
    insetLeft: PANEL_LAYER,
    insetRight: PANEL_INSPECTOR
  }), /*#__PURE__*/React.createElement(LayerPanel, {
    layers: layers,
    toggle: toggle
  }), /*#__PURE__*/React.createElement(InspectorPanel, {
    point: point,
    onClose: () => setSelected(null)
  })) : /*#__PURE__*/React.createElement(ProjectTable, {
    onOpen: name => {
      setProject(name);
      setSection('peta');
    }
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: exportOpen,
    onClose: () => setExportOpen(false),
    width: 440,
    title: "Ekspor data proyek",
    description: project,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setExportOpen(false)
    }, "Batal"), /*#__PURE__*/React.createElement(Button, {
      variant: "brand",
      onClick: () => {
        setExportOpen(false);
        notify('Ekspor sedang disiapkan', 'Tautan unduh dikirim ke email kamu.');
      }
    }, "Ekspor"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Format",
    options: ['GeoPackage (.gpkg)', 'Shapefile (.shp)', 'CSV titik kontrol', 'DXF', 'PDF lembar peta']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Sistem koordinat",
    options: ['WGS 84 / UTM 48S — EPSG:32748', 'WGS 84 geografis — EPSG:4326', 'SRGI 2013']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sertakan metadata pengukuran",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sertakan foto dokumentasi titik"
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: toast.title,
    description: toast.description,
    onClose: () => setToast(null)
  })));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/InspectorPanel.jsx
try { (() => {
const {
  Icon,
  Button,
  Badge,
  Tabs,
  CoordinateReadout,
  Stat,
  Card,
  IconButton
} = window.BumiKalaChartaDesignSystem_5e0b40;
function InspectorPanel({
  point,
  onClose
}) {
  const [tab, setTab] = React.useState('Metadata');
  if (!point) {
    return /*#__PURE__*/React.createElement("aside", {
      className: "bkc-glass",
      style: {
        ...floatingPanel('right', 340),
        bottom: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-4) var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mouse-pointer-click",
      size: 20,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "Pilih satu titik kontrol di peta untuk melihat metadatanya."));
  }
  return /*#__PURE__*/React.createElement("aside", {
    className: "bkc-glass",
    style: floatingPanel('right', 340)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow"
  }, point.type === 'cors' ? 'Stasiun CORS' : 'Titik kontrol'), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-title-2)',
      fontFamily: 'var(--font-data)',
      letterSpacing: '.02em'
    }
  }, point.id)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Tutup",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: point.quality === 'Fix' ? 'success' : 'warning',
    dot: true
  }, point.quality), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, "Orde ", point.order))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Metadata', 'Residu', 'Foto'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-5)'
    }
  }, tab === 'Metadata' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CoordinateReadout, {
    label: "Koordinat",
    items: [{
      label: 'Easting',
      value: point.e
    }, {
      label: 'Northing',
      value: point.n
    }, {
      label: 'Tinggi ellipsoid',
      value: point.h
    }, {
      label: 'Tinggi orthometrik',
      value: point.ho
    }]
  }), /*#__PURE__*/React.createElement(CoordinateReadout, {
    style: {
      marginTop: 'var(--space-6)'
    },
    label: "Pengukuran",
    items: [{
      label: 'Metode',
      value: 'GNSS statik'
    }, {
      label: 'Durasi',
      value: '2 j 15 m'
    }, {
      label: 'Alat',
      value: 'Trimble R10'
    }, {
      label: 'Diukur',
      value: '14 Agu 2026'
    }, {
      label: 'Surveyor',
      value: 'Dwi W.'
    }]
  }), /*#__PURE__*/React.createElement(CoordinateReadout, {
    style: {
      marginTop: 'var(--space-6)'
    },
    label: "Ketelitian",
    items: [{
      label: 'σ horizontal',
      value: point.sh,
      emphasis: true
    }, {
      label: 'σ vertikal',
      value: point.sv
    }, {
      label: 'PDOP',
      value: '1,4'
    }]
  })), tab === 'Residu' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: point.sh,
    label: "\u03C3 horizontal",
    mono: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: point.sv,
    label: "\u03C3 vertikal",
    mono: true,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Residu per baseline (mm)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['BM-01 → CORS-SLM', 4.2, 0.42], ['BM-01 → BM-02', 6.8, 0.68], ['BM-01 → BM-05', 3.1, 0.31], ['BM-01 → BM-07', 9.4, 0.94]].map(([l, v, w]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-default)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: v > 8 ? 'var(--bkc-orange)' : 'var(--text-subtle)'
    }
  }, String(v).replace('.', ','))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'var(--neutral-150)',
      borderRadius: 999,
      marginTop: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${w * 100}%`,
      height: '100%',
      background: v > 8 ? 'var(--bkc-orange)' : 'var(--bkc-green)',
      borderRadius: 999
    }
  })))))), tab === 'Foto' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      height: 150,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bkc-paper)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-caption)',
      padding: '0 20px'
    }
  }, "Foto dokumentasi titik \u2014 tampak dekat"), /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      height: 150,
      borderRadius: 'var(--radius-md)',
      background: 'var(--bkc-paper)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-caption)',
      padding: '0 20px'
    }
  }, "Foto dokumentasi titik \u2014 tampak sekitar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 15
    })
  }, "Ubah"), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "sm",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    })
  }, "Setujui")));
}
Object.assign(window, {
  InspectorPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/InspectorPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LayerPanel.jsx
try { (() => {
const {
  Icon,
  Switch,
  Input,
  Tabs,
  Badge,
  Tag
} = window.BumiKalaChartaDesignSystem_5e0b40;
const LAYER_GROUPS = [{
  head: 'Hasil ukur',
  items: [{
    id: 'titik',
    label: 'Titik kontrol',
    meta: '86 titik'
  }, {
    id: 'kontur',
    label: 'Kontur',
    meta: 'Interval 12,5 m'
  }, {
    id: 'area',
    label: 'Area studi',
    meta: '412 ha'
  }]
}, {
  head: 'Referensi',
  items: [{
    id: 'batas',
    label: 'Batas administrasi',
    meta: 'BIG 2025'
  }, {
    id: 'graticule',
    label: 'Grid koordinat',
    meta: 'UTM 48S'
  }, {
    id: 'hillshade',
    label: 'Hillshade DEM',
    meta: 'DEMNAS 8 m'
  }]
}];
function LayerPanel({
  layers,
  toggle
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("aside", {
    className: "bkc-glass",
    style: floatingPanel('left', 288)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Cari lapisan",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15
    }),
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-4)'
    }
  }, LAYER_GROUPS.map(g => {
    const items = g.items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()));
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: g.head,
      style: {
        marginBottom: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bkc-eyebrow",
      style: {
        marginBottom: 'var(--space-3)'
      }
    }, g.head), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-3)'
      }
    }, items.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-strong)'
      }
    }, i.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: 'var(--text-micro)',
        letterSpacing: '.06em',
        color: 'var(--text-subtle)'
      }
    }, i.meta)), /*#__PURE__*/React.createElement(Switch, {
      checked: !!layers[i.id],
      onChange: () => toggle(i.id)
    })))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Simbol"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['Titik kontrol GNSS', 'var(--bkc-green)'], ['Titik terpilih', 'var(--bkc-orange)'], ['Batas area studi', 'var(--bkc-green)']].map(([l, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: c,
      border: '2px solid #fff',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, l)))))));
}
Object.assign(window, {
  LayerPanel,
  LAYER_GROUPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LayerPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/MapCanvas.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Tooltip,
  Badge,
  Tabs
} = window.BumiKalaChartaDesignSystem_5e0b40;

/* Schematic map canvas. No basemap imagery or vector data was supplied with the brand
   materials, so the canvas renders the brand's own contour + graticule layers with
   plotted control points. Swap in a real tile/vector source in production. */
function MapCanvas({
  layers,
  points,
  selected,
  onSelect,
  insetLeft = 0,
  insetRight = 0
}) {
  // Controls sit just inside the floating panels so they never slide under the glass.
  const left = insetLeft ? PANEL_GAP + insetLeft + 12 : 16;
  const right = insetRight ? PANEL_GAP + insetRight + 12 : 16;
  const [tool, setTool] = React.useState('pan');
  const tools = [['pan', 'move', 'Geser'], ['select', 'mouse-pointer-2', 'Pilih'], ['measure', 'ruler', 'Ukur jarak'], ['area', 'shapes', 'Ukur luas'], ['point', 'map-pin', 'Tambah titik']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      overflow: 'hidden',
      background: '#E7E9E4'
    }
  }, layers.hillshade && /*#__PURE__*/React.createElement("span", {
    className: "bkc-contour",
    "data-pattern-tone": "light",
    "data-pattern-density": "loose",
    style: {
      opacity: 0.9
    }
  }), layers.kontur && /*#__PURE__*/React.createElement("span", {
    className: "bkc-contour",
    "data-pattern-tone": "light",
    "data-pattern-density": "dense",
    style: {
      opacity: 0.85
    }
  }), layers.graticule && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to right,rgba(35,40,38,.10) 0 1px,transparent 1px),linear-gradient(to bottom,rgba(35,40,38,.10) 0 1px,transparent 1px),linear-gradient(to right,rgba(35,40,38,.18) 0 1.2px,transparent 1.2px),linear-gradient(to bottom,rgba(35,40,38,.18) 0 1.2px,transparent 1.2px)',
      backgroundSize: '32px 32px,32px 32px,160px 160px,160px 160px'
    }
  }), layers.batas && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '18%',
      top: '16%',
      right: '22%',
      bottom: '20%',
      border: '1.6px dashed rgba(234,144,18,.75)',
      borderRadius: 6
    }
  }), layers.area && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '30%',
      top: '32%',
      width: 280,
      height: 190,
      background: 'rgba(53,140,103,.16)',
      border: '1.6px solid var(--bkc-green)',
      borderRadius: 4
    }
  }), layers.titik && points.map(p => {
    const on = selected === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => onSelect(p.id),
      title: p.id,
      style: {
        position: 'absolute',
        left: `${p.x}%`,
        top: `${p.y}%`,
        transform: 'translate(-50%,-100%)',
        border: 'none',
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'grid',
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: on ? 30 : 24,
        height: on ? 30 : 24,
        borderRadius: 999,
        background: on ? 'var(--bkc-orange)' : 'var(--bkc-green)',
        border: '2.5px solid #fff',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.type === 'cors' ? 'satellite-dish' : 'crosshair',
      size: on ? 15 : 12,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 4,
        fontFamily: 'var(--font-data)',
        fontSize: 9.5,
        letterSpacing: '.04em',
        color: 'var(--neutral-800)',
        background: 'rgba(255,255,255,.82)',
        padding: '1px 5px',
        borderRadius: 3,
        whiteSpace: 'nowrap'
      }
    }, p.id));
  }), /*#__PURE__*/React.createElement("div", {
    className: "bkc-glass",
    style: {
      position: 'absolute',
      left,
      top: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: 5,
      borderRadius: 'var(--radius-md)'
    }
  }, tools.map(([id, icon, label]) => /*#__PURE__*/React.createElement(Tooltip, {
    key: id,
    label: label,
    side: "right"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTool(id),
    style: {
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      background: tool === id ? 'var(--surface-brand-soft)' : 'transparent',
      color: tool === id ? 'var(--bkc-green)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bkc-glass",
    style: {
      position: 'absolute',
      right,
      top: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: 5,
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Perbesar",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Perkecil",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Kompas",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bkc-glass",
    style: {
      position: 'absolute',
      left,
      bottom: 16,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-5)',
      padding: 'var(--space-2) var(--space-4)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      height: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 7,
      background: 'var(--neutral-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 7,
      background: 'var(--bkc-white)',
      border: '1px solid var(--neutral-900)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 122,
      fontFamily: 'var(--font-data)',
      fontSize: 9,
      color: 'var(--neutral-800)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "250"), /*#__PURE__*/React.createElement("span", null, "500 m"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 10.5,
      color: 'var(--neutral-800)',
      paddingBottom: 2
    }
  }, "\u22126.91750, 107.61910 \xB7 712 m")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right,
      bottom: 16,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, "Skala 1:1.000"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, "Interval kontur 12,5 m")));
}
Object.assign(window, {
  MapCanvas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/MapCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ProjectTable.jsx
try { (() => {
const {
  Icon,
  Button,
  Badge,
  Tag,
  Tabs,
  Input,
  Select,
  Stat,
  Card,
  IconButton,
  Checkbox
} = window.BumiKalaChartaDesignSystem_5e0b40;
const DASH_ROWS = [['BKC-2026-014', 'Topografi Waduk Jatigede', 'BBWS Cimanuk', 'Berjalan', 'accent', '412 ha', '1:1.000', '86 / 86', 'Tim Topografi'], ['BKC-2026-011', 'GNSS CORS Kab. Sleman', 'Dinas Pertanahan Sleman', 'Berjalan', 'accent', '6 stasiun', '±8 mm', '6 / 6', 'Tim GNSS'], ['BKC-2026-009', 'Pemetaan Drone Kampus UPI', 'Universitas Pendidikan Indonesia', 'Revisi', 'warning', '38 ha', '1:500', '24 / 26', 'Tim Drone'], ['BKC-2025-042', 'LiDAR Koridor Tol Cisumdawu', 'PT Waskita Karya', 'Selesai', 'success', '12 km²', '1:2.500', '148 / 148', 'Tim LiDAR'], ['BKC-2025-038', 'Batas Desa Partisipatif Garut', 'Pemkab Garut', 'Selesai', 'success', '14 desa', '1:5.000', '212 / 212', 'Tim Kadaster'], ['BKC-2025-031', 'Batimetri Pelabuhan Cirebon', 'Pelindo Regional 2', 'Selesai', 'success', '86 ha', '1:1.000', '64 / 64', 'Tim Hidrografi']];
const TH = {
  textAlign: 'left',
  padding: '0 var(--space-4) var(--space-3)',
  fontFamily: 'var(--font-data)',
  fontSize: 'var(--text-micro)',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--text-subtle)',
  fontWeight: 'var(--weight-regular)',
  whiteSpace: 'nowrap'
};
const TD = {
  padding: 'var(--space-4)',
  fontSize: 'var(--text-body-sm)',
  color: 'var(--text-default)',
  borderTop: '1px solid var(--border-subtle)',
  whiteSpace: 'nowrap'
};
function ProjectTable({
  onOpen
}) {
  const [status, setStatus] = React.useState('semua');
  const [q, setQ] = React.useState('');
  const rows = DASH_ROWS.filter(r => (status === 'semua' || r[3].toLowerCase() === status) && (r[1] + r[2] + r[0]).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    label: "Proyek berjalan",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "30",
    label: "Selesai",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1.204",
    label: "Titik kontrol terukur",
    size: "sm",
    mono: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\xB10,8 cm",
    label: "Akurasi rata-rata",
    size: "sm",
    mono: true,
    tone: "accent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: status,
    onChange: setStatus,
    items: [{
      value: 'semua',
      label: 'Semua',
      count: 48
    }, {
      value: 'berjalan',
      label: 'Berjalan',
      count: 18
    }, {
      value: 'revisi',
      label: 'Revisi',
      count: 3
    }, {
      value: 'selesai',
      label: 'Selesai',
      count: 30
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Cari proyek atau klien",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15
    }),
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Filter",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 17
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "brand",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "Proyek baru"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--neutral-50)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)',
      width: 40
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Kode"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Proyek"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Klien"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Cakupan"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Skala / akurasi"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "Titik"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }, "PIC"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      paddingTop: 'var(--space-4)'
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      cursor: 'pointer'
    },
    onClick: () => onOpen(r[1])
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: ""
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-subtle)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r[4],
    dot: r[3] === 'Berjalan'
  }, r[3])), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)'
    }
  }, r[5]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)'
    }
  }, r[6]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)'
    }
  }, r[7]), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, r[8]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-subtle)"
  }))))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-11)',
      textAlign: 'center',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 28,
    style: {
      margin: '0 auto 10px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "Tidak ada proyek yang cocok.")));
}
Object.assign(window, {
  ProjectTable,
  DASH_ROWS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ProjectTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Stat,
  Badge,
  SectionHeading,
  CoordinateReadout,
  AvatarStack,
  ContourField,
  Input,
  Select
} = window.BumiKalaChartaDesignSystem_5e0b40;
function AboutScreen({
  go,
  onSubmit
}) {
  const values = [{
    icon: 'ruler',
    title: 'Presisi lebih dulu',
    body: 'Angka yang kami serahkan bisa ditelaah ulang: metode, alat, dan residunya ikut dilaporkan.'
  }, {
    icon: 'users',
    title: 'Belajar di depan orang',
    body: 'Kesalahan dibahas terbuka di forum bulanan. Tidak ada pertanyaan yang terlalu dasar.'
  }, {
    icon: 'git-branch',
    title: 'Arsip yang hidup',
    body: 'Setiap proyek meninggalkan catatan teknis yang bisa dipakai anggota berikutnya.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px var(--gutter-page) 0',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-brand)'
    }
  }, "Tentang kami"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-display-2)'
    }
  }, "Peta bukan sekadar gambar \u2014 ia catatan tentang ruang dan waktu."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--width-prose)'
    }
  }, "Bumi Kala Charta berdiri di Bandung pada 2022, dimulai dari lima orang yang tukar cerita soal pengukuran. Sekarang kami komunitas sekaligus konsultan: mengerjakan proyek geospasial, membuka kelas, dan menjaga arsip pengetahuannya tetap terbuka."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-11)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2022",
    label: "Tahun berdiri"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1.204",
    label: "Anggota"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    label: "Provinsi"
  }))), /*#__PURE__*/React.createElement(Photo, {
    note: "Foto tim \u2014 dokumentasi diskusi bulanan di Bandung",
    height: 380
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Cara kami bekerja",
    title: "Tiga hal yang kami pegang"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-card)',
      marginTop: 'var(--space-7)'
    }
  }, values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    surface: "muted"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-page)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 20,
    color: "var(--bkc-green)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pengurus",
    title: "Orang di baliknya"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, [['Ketua', 'Nama pengurus — belum diisi', 'K'], ['Koordinator pelatihan', 'Nama pengurus — belum diisi', 'P'], ['Koordinator proyek', 'Nama pengurus — belum diisi', 'Y'], ['Pengelola arsip & data', 'Nama pengurus — belum diisi', 'A']].map(([name, role, ini]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: 'var(--surface-brand-soft)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--green-700)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-body-sm)',
      flex: '0 0 auto'
    }
  }, ini), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, role))))), /*#__PURE__*/React.createElement(AvatarStack, {
    style: {
      marginTop: 'var(--space-6)'
    },
    people: ['MI', 'HP', 'YS', 'BW', 'TA', 'LK'],
    caption: "dan 1.200 anggota lain di 34 kampus"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      position: 'relative',
      overflow: 'hidden'
    },
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-brand)'
    }
  }, "Hubungi tim"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-title-2)'
    }
  }, "Ceritakan kebutuhan pemetaanmu"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Kami balas dalam dua hari kerja dengan usulan metode dan perkiraan waktu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nama & instansi",
    placeholder: "Nama, instansi atau kampus",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "nama@instansi.go.id",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Jenis pekerjaan",
    placeholder: "Pilih jenis pekerjaan",
    options: ['Survei topografi', 'Jaring kontrol GNSS / CORS', 'Fotogrametri drone', 'Batimetri', 'Analisis spasial', 'Pelatihan internal']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Lokasi & luas perkiraan",
    placeholder: "Contoh: Kab. Garut, \xB1400 ha"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ceritakan singkat",
    multiline: true,
    rows: 3,
    placeholder: "Target, tenggat, dan data yang sudah ada"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    fullWidth: true,
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: onSubmit,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Kirim permintaan"), /*#__PURE__*/React.createElement(CoordinateReadout, {
    style: {
      marginTop: 'var(--space-6)'
    },
    label: "Kantor",
    dense: true,
    items: [{
      label: 'Bandung, Jawa Barat',
      value: '−6.9175, 107.6191'
    }, {
      label: 'Jam kerja',
      value: '09.00–17.00 WIB'
    }]
  }))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  Button,
  Icon,
  Input,
  Select,
  Checkbox,
  Dialog,
  Toast
} = window.BumiKalaChartaDesignSystem_5e0b40;
function App() {
  const [page, setPage] = React.useState('Beranda');
  const [join, setJoin] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const go = p => {
    if (p === 'Gabung') {
      setJoin(true);
      return;
    }
    setPage(p);
    window.scrollTo({
      top: 0
    });
  };
  const notify = (title, description) => {
    setToast({
      title,
      description
    });
    window.setTimeout(() => setToast(null), 4200);
  };
  const screens = {
    Beranda: /*#__PURE__*/React.createElement(HomeScreen, {
      go: go,
      onJoin: () => setJoin(true)
    }),
    Tentang: /*#__PURE__*/React.createElement(AboutScreen, {
      go: go,
      onSubmit: () => notify('Permintaan terkirim', 'Kami balas lewat email dalam 2 hari kerja.')
    }),
    Proyek: /*#__PURE__*/React.createElement(ProjectsScreen, {
      go: go
    }),
    Pelatihan: /*#__PURE__*/React.createElement(TrainingScreen, {
      go: go,
      onEnroll: () => setJoin(true)
    }),
    Diskusi: /*#__PURE__*/React.createElement(DiscussionScreen, {
      go: go
    })
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    page: page === 'Beranda' ? null : page,
    go: go
  }), screens[page], /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(Dialog, {
    open: join,
    onClose: () => setJoin(false),
    width: 460,
    title: "Gabung komunitas",
    description: "Gratis. Kamu dapat akses forum, arsip catatan teknis, dan pengumuman kelas lebih awal.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setJoin(false)
    }, "Nanti"), /*#__PURE__*/React.createElement(Button, {
      variant: "brand",
      onClick: () => {
        setJoin(false);
        notify('Pendaftaran terkirim', 'Cek email untuk tautan konfirmasi.');
      }
    }, "Kirim pendaftaran"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nama lengkap",
    placeholder: "Nama sesuai KTP",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "nama@kampus.ac.id",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Status",
    placeholder: "Pilih status",
    options: ['Mahasiswa', 'Fresh graduate', 'Praktisi', 'Instansi pemerintah', 'Dosen / peneliti']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Kirimi saya jadwal pelatihan",
    defaultChecked: true
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: toast.title,
    description: toast.description,
    onClose: () => setToast(null)
  })));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DiscussionScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag,
  SectionHeading,
  CoordinateReadout,
  ContourField
} = window.BumiKalaChartaDesignSystem_5e0b40;
const BKC_THREADS = [{
  title: 'Kalibrasi total station: kesalahan yang paling sering terlewat',
  author: 'Anggota · Chapter Bandung',
  replies: 34,
  tag: 'Instrumen',
  hot: true
}, {
  title: 'Membaca residu GNSS pasca-pengolahan baseline',
  author: 'Anggota · Chapter Yogyakarta',
  replies: 51,
  tag: 'GNSS',
  hot: true
}, {
  title: 'Bagaimana menentukan interval kontur untuk lahan datar?',
  author: 'Mahasiswa — Geodesi Undip',
  replies: 18,
  tag: 'Kartografi'
}, {
  title: 'Pengalaman sertifikasi kompetensi surveyor 2026',
  author: 'Anggota · Chapter Surabaya',
  replies: 27,
  tag: 'Karier'
}, {
  title: 'Rekomendasi GCP untuk pemetaan drone di kawasan hutan',
  author: 'Anggota · Chapter Semarang',
  replies: 12,
  tag: 'Fotogrametri'
}, {
  title: 'Transformasi datum lokal ke SRGI 2013 — pengalaman kalian?',
  author: 'Pengurus BKC',
  replies: 40,
  tag: 'Datum'
}];
function DiscussionScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-brand)'
    }
  }, "Diskusi"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-display-2)',
      maxWidth: '22em'
    }
  }, "Forum bulanan dan arsip catatan teknis."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--width-prose)'
    }
  }, "Sebulan sekali kami membedah satu studi kasus. Risalahnya diterbitkan sebagai catatan teknis singkat, terbuka untuk semua anggota.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--gutter-page) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Utas terbaru",
    title: "Sedang dibicarakan",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      })
    }, "Buat utas")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)'
    }
  }, BKC_THREADS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: t.hot ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.hot ? 'flame' : 'message-circle',
    size: 17,
    color: t.hot ? 'var(--bkc-orange)' : 'var(--bkc-green)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, t.author)), /*#__PURE__*/React.createElement(Tag, {
    style: {
      padding: '4px 10px',
      fontSize: 'var(--text-caption)',
      flex: '0 0 auto'
    }
  }, t.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-subtle)',
      width: 58,
      textAlign: 'right',
      flex: '0 0 auto'
    }
  }, t.replies, " balas"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "brand",
    pattern: /*#__PURE__*/React.createElement(ContourField, null),
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'rgba(255,255,255,.7)'
    }
  }, "Diskusi #12"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-title-2)',
      color: 'var(--bkc-white)'
    }
  }, "Residu GNSS: apa artinya?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-on-dark)'
    }
  }, "Sabtu, 4 Oktober \xB7 19.30 WIB \xB7 Daring"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    style: {
      marginTop: 'var(--space-5)'
    },
    onClick: () => go('Pelatihan')
  }, "Daftar ikut")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow"
  }, "Arsip catatan teknis"), /*#__PURE__*/React.createElement(CoordinateReadout, {
    style: {
      marginTop: 'var(--space-3)'
    },
    dense: true,
    items: [{
      label: 'Catatan diterbitkan',
      value: '38'
    }, {
      label: 'Diskusi berjalan',
      value: '12 edisi'
    }, {
      label: 'Rata-rata hadir',
      value: '84 orang',
      emphasis: true
    }]
  })))));
}
Object.assign(window, {
  DiscussionScreen,
  BKC_THREADS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DiscussionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Stat,
  Badge,
  Tag,
  SectionHeading,
  ContourField,
  AvatarStack,
  EventCard
} = window.BumiKalaChartaDesignSystem_5e0b40;
function HomeScreen({
  go,
  onJoin
}) {
  const services = [{
    icon: 'map',
    title: 'Proyek Geospasial',
    body: 'Survei dan pemetaan bersama tim lintas kampus — pengalaman lapangan sebelum lulus.',
    cta: 'Lihat proyek',
    page: 'Proyek'
  }, {
    icon: 'graduation-cap',
    title: 'Pelatihan',
    body: 'QGIS, pengolahan GNSS, dan fotogrametri. Materi arsip tetap bisa diakses anggota.',
    cta: 'Lihat jadwal',
    page: 'Pelatihan'
  }, {
    icon: 'messages-square',
    title: 'Diskusi',
    body: 'Ngobrol santai tiap bulan: studi kasus, cerita proyek, dan tanya jawab tanpa sungkan.',
    cta: 'Ikut diskusi',
    page: 'Diskusi'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '34px var(--gutter-page) 0',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: 'var(--bkc-paper)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 14,
    color: "var(--bkc-green)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-default)'
    }
  }, "Komunitas geospasial Indonesia")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-1)'
    }
  }, "Belajar, memetakan, dan ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bkc-green)'
    }
  }, "tumbuh bersama.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: '30em'
    }
  }, "Ruang terbuka bagi mahasiswa dan praktisi geodesi\u2013geomatika untuk berbagi ilmu, mengerjakan proyek nyata, dan saling menemukan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "user-plus",
      size: 17
    }),
    onClick: onJoin
  }, "Jadi anggota"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 17
    }),
    onClick: () => go('Pelatihan')
  }, "Agenda terdekat")), /*#__PURE__*/React.createElement(AvatarStack, {
    style: {
      marginTop: 'var(--space-8)'
    },
    people: ['FS', 'AR', 'DW', 'NR', 'MI', 'HP', 'YS', 'BW'],
    caption: "1.204 anggota dari 34 kampus & 62 instansi"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    note: "Foto kegiatan lapangan \u2014 pengukuran GNSS bersama anggota",
    height: 420
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 24,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      boxShadow: 'var(--shadow-float)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-accent-soft)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 19,
    color: "var(--bkc-orange)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-strong)'
    }
  }, "Kelas Fotogrametri Drone \u2014 Batch 7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Sabtu, 19 September \xB7 Bandung & daring \xB7 12 kursi tersisa"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      margin: 'var(--space-11) var(--gutter-page) 0',
      background: 'var(--neutral-50)',
      borderRadius: 'var(--radius-hero)',
      padding: '36px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1.204",
    label: "Anggota aktif"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "48",
    label: "Proyek dikerjakan bersama"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "26",
    label: "Kelas & pelatihan"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\xB10,8 cm",
    label: "Akurasi horizontal rata-rata",
    mono: true
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Tiga lini kerja",
    title: "Apa yang kami lakukan",
    lead: "Tiga hal, dikerjakan dengan orang-orang yang benar-benar peduli pada peta."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-card)',
      marginTop: 'var(--space-7)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    onClick: () => go(s.page)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-brand-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 21,
    color: "var(--bkc-green)",
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, s.body), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-brand)'
    }
  }, s.cta, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Agenda",
    title: "Yang akan datang",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => go('Pelatihan')
    }, "Semua agenda")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(EventCard, {
    day: "19",
    month: "SEP",
    tone: "accent",
    title: "Kelas Fotogrametri Drone \u2014 Batch 7",
    meta: "09.00\u201316.00 \xB7 Bandung & daring \xB7 Mentor: tim fotogrametri",
    format: "Daring & tatap muka",
    seats: "12 kursi tersisa",
    onClick: () => go('Pelatihan')
  }), /*#__PURE__*/React.createElement(EventCard, {
    day: "04",
    month: "OKT",
    title: "Diskusi Bulanan: Membaca Residu GNSS",
    meta: "19.30\u201321.00 \xB7 Daring",
    format: "Gratis",
    seats: "86 terdaftar",
    onClick: () => go('Diskusi')
  }), /*#__PURE__*/React.createElement(EventCard, {
    day: "18",
    month: "OKT",
    title: "Workshop QGIS untuk Pemetaan Partisipatif",
    meta: "09.00\u201315.00 \xB7 Yogyakarta",
    format: "Tatap muka",
    seats: "Penuh \u2014 daftar tunggu",
    onClick: () => go('Pelatihan')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-hero)',
      background: 'var(--surface-brand)',
      padding: '46px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(ContourField, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'rgba(255,255,255,.7)'
    }
  }, "Punya kebutuhan pemetaan?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-display-3)',
      color: 'var(--bkc-white)',
      maxWidth: '20em'
    }
  }, "Ceritakan wilayah dan targetnya \u2014 kami susun metodenya bersama.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => go('Tentang')
  }, "Hubungi tim")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag,
  Tabs,
  SectionHeading,
  CoordinateReadout,
  Stat
} = window.BumiKalaChartaDesignSystem_5e0b40;
const BKC_PROJECTS = [{
  title: 'Topografi Waduk Jatigede',
  client: 'Balai Besar Wilayah Sungai Cimanuk',
  year: '2026',
  scale: '1:1.000',
  area: '412 ha',
  status: 'Berjalan',
  tone: 'accent',
  tags: ['Topografi', 'GNSS RTK']
}, {
  title: 'GNSS CORS Kabupaten Sleman',
  client: 'Dinas Pertanahan & Tata Ruang Sleman',
  year: '2026',
  scale: '±8 mm',
  area: '6 stasiun',
  status: 'Berjalan',
  tone: 'accent',
  tags: ['CORS', 'Jaring kontrol']
}, {
  title: 'LiDAR Koridor Tol Cisumdawu',
  client: 'PT Waskita Karya',
  year: '2025',
  scale: '1:2.500',
  area: '12 km²',
  status: 'Selesai',
  tone: 'success',
  tags: ['LiDAR', 'Fotogrametri']
}, {
  title: 'Batas Desa Partisipatif Garut',
  client: 'Pemkab Garut & 14 desa',
  year: '2025',
  scale: '1:5.000',
  area: '14 desa',
  status: 'Selesai',
  tone: 'success',
  tags: ['Kadaster', 'Partisipatif']
}, {
  title: 'Batimetri Pelabuhan Cirebon',
  client: 'Pelindo Regional 2',
  year: '2025',
  scale: '1:1.000',
  area: '86 ha',
  status: 'Selesai',
  tone: 'success',
  tags: ['Batimetri', 'Singlebeam']
}, {
  title: 'Peta Rawan Longsor Garut Selatan',
  client: 'BPBD Kabupaten Garut',
  year: '2024',
  scale: '1:25.000',
  area: '1.140 km²',
  status: 'Arsip',
  tone: 'neutral',
  tags: ['Kebencanaan', 'Analisis spasial']
}];
function ProjectsScreen({
  go
}) {
  const [tab, setTab] = React.useState('semua');
  const [filter, setFilter] = React.useState('Semua');
  const filters = ['Semua', 'Topografi', 'GNSS RTK', 'LiDAR', 'Batimetri', 'Kadaster'];
  const rows = BKC_PROJECTS.filter(p => {
    const byTab = tab === 'semua' || (tab === 'aktif' ? p.status === 'Berjalan' : p.status === 'Arsip' || p.status === 'Selesai');
    const byTag = filter === 'Semua' || p.tags.includes(filter);
    return byTab && byTag;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-brand)'
    }
  }, "Portofolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-display-2)',
      maxWidth: '20em'
    }
  }, "Proyek yang sudah kami ukur."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--width-prose)'
    }
  }, "48 pekerjaan survei dan pemetaan sejak 2022, dikerjakan bersama anggota komunitas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-11)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "48",
    label: "Proyek"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    label: "Provinsi"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1.140 km\xB2",
    label: "Cakupan terbesar",
    mono: true
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'semua',
      label: 'Semua',
      count: 48
    }, {
      value: 'aktif',
      label: 'Berjalan',
      count: 18
    }, {
      value: 'arsip',
      label: 'Selesai & arsip',
      count: 30
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-5)'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    interactive: true,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-card)',
      marginTop: 'var(--space-7)'
    }
  }, rows.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    interactive: true,
    padding: "0"
  }, /*#__PURE__*/React.createElement(Photo, {
    note: "Peta hasil \u2014 cuplikan lembar peta",
    height: 148,
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    dot: p.status === 'Berjalan'
  }, p.status), /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow"
  }, p.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.client), /*#__PURE__*/React.createElement(CoordinateReadout, {
    style: {
      marginTop: 'var(--space-4)'
    },
    dense: true,
    items: [{
      label: 'Skala',
      value: p.scale
    }, {
      label: 'Cakupan',
      value: p.area
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 'var(--space-4)'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      padding: '4px 10px',
      fontSize: 'var(--text-caption)'
    }
  }, t))))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12)',
      textAlign: 'center',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 30,
    style: {
      margin: '0 auto 12px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "Belum ada proyek dengan filter itu."))));
}
Object.assign(window, {
  ProjectsScreen,
  BKC_PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Button,
  Icon,
  Logo,
  ContourField,
  Badge
} = window.BumiKalaChartaDesignSystem_5e0b40;
const ASSETS = '../../assets';

/* A stand-in for photography. BKC supplied no image library, so every photographic
   slot in this kit is an explicit placeholder rather than a stock substitute. */
function Photo({
  note,
  height = 320,
  radius = 'var(--radius-band)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      height,
      borderRadius: radius,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 26,
    style: {
      margin: '0 auto 8px',
      color: 'var(--neutral-400)'
    }
  }), note));
}
function SiteHeader({
  page,
  go
}) {
  const items = ['Tentang', 'Proyek', 'Pelatihan', 'Diskusi'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px var(--gutter-page)',
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('Beranda');
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 38,
    assetBase: ASSETS
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(it);
    },
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: page === it ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: page === it ? 'var(--text-brand)' : 'var(--text-default)'
    }
  }, it))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "sm",
    onClick: () => go('Gabung')
  }, "Gabung komunitas"))));
}
function SiteFooter() {
  const cols = [{
    head: 'Komunitas',
    links: ['Tentang kami', 'Anggota', 'Diskusi bulanan', 'Arsip catatan teknis']
  }, {
    head: 'Layanan',
    links: ['Survei GNSS', 'Pemetaan topografi', 'Fotogrametri drone', 'Batimetri']
  }, {
    head: 'Pelatihan',
    links: ['Jadwal kelas', 'Silabus', 'Sertifikasi', 'Mentor']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '52px var(--gutter-page) 26px',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(ContourField, {
    tone: "on-dark",
    density: "loose"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    tone: "on-dark",
    assetBase: ASSETS,
    showTagline: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: '24em'
    }
  }, "Komunitas dan konsultan geospasial \u2014 geodesi, geomatika, dan kartografi. Bandung, Indonesia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, ['instagram', 'linkedin', 'youtube', 'mail'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,255,255,.1)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 16,
    color: "rgba(255,255,255,.8)"
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, c.head), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-on-dark)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-9)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 Bumi Kala Charta"), /*#__PURE__*/React.createElement("span", {
    className: "bkc-eyebrow",
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Bandung \xB7 Indonesia")));
}
Object.assign(window, {
  Photo,
  SiteHeader,
  SiteFooter,
  ASSETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrainingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Card,
  Badge,
  Tabs,
  EventCard,
  SectionHeading,
  Checkbox,
  Switch,
  ContourField
} = window.BumiKalaChartaDesignSystem_5e0b40;
const BKC_CLASSES = [{
  day: '19',
  month: 'SEP',
  title: 'Kelas Fotogrametri Drone — Batch 7',
  meta: '09.00–16.00 · Bandung & daring · Mentor: tim fotogrametri',
  format: 'Daring & tatap muka',
  seats: '12 kursi tersisa',
  tone: 'accent',
  level: 'Menengah'
}, {
  day: '28',
  month: 'SEP',
  title: 'Pengolahan Data GNSS dengan RTKLIB',
  meta: '19.30–21.30 · Daring · Mentor: tim GNSS',
  format: 'Daring',
  seats: '24 kursi tersisa',
  level: 'Lanjut'
}, {
  day: '18',
  month: 'OKT',
  title: 'QGIS untuk Pemetaan Partisipatif',
  meta: '09.00–15.00 · Yogyakarta · Mentor: tim kartografi',
  format: 'Tatap muka',
  seats: 'Penuh — daftar tunggu',
  level: 'Dasar'
}, {
  day: '02',
  month: 'NOV',
  title: 'Kalibrasi & Perawatan Total Station',
  meta: '13.00–17.00 · Bandung',
  format: 'Tatap muka',
  seats: '8 kursi tersisa',
  level: 'Dasar'
}, {
  day: '15',
  month: 'NOV',
  title: 'Analisis Spasial Kebencanaan',
  meta: '19.30–21.30 · Daring · Mentor: tim analisis spasial',
  format: 'Daring',
  seats: '31 kursi tersisa',
  level: 'Menengah'
}];
function TrainingScreen({
  go,
  onEnroll
}) {
  const [level, setLevel] = React.useState('semua');
  const list = BKC_CLASSES.filter(c => level === 'semua' || c.level.toLowerCase() === level);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '34px var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-hero)',
      background: 'var(--surface-brand)',
      padding: '44px 48px'
    }
  }, /*#__PURE__*/React.createElement(ContourField, {
    motif: "orbit",
    globeSize: 420,
    style: {
      left: 'auto',
      right: 0,
      width: 620
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '30em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow",
    style: {
      color: 'rgba(255,255,255,.7)'
    }
  }, "Pelatihan & sertifikasi"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-display-2)',
      color: 'var(--bkc-white)'
    }
  }, "Kelas yang bermula dari pertanyaan di lapangan."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-on-dark)'
    }
  }, "26 kelas berjalan tahun ini. Materi arsip tetap terbuka untuk anggota."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 17
    }),
    onClick: onEnroll
  }, "Daftar kelas terdekat"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    onClick: () => go('Diskusi')
  }, "Lihat silabus"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) var(--gutter-page) 0',
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Jadwal",
    title: "Kelas terbuka"
  }), /*#__PURE__*/React.createElement(Tabs, {
    style: {
      marginTop: 'var(--space-5)'
    },
    variant: "pill",
    value: level,
    onChange: setLevel,
    items: [{
      value: 'semua',
      label: 'Semua tingkat'
    }, {
      value: 'dasar',
      label: 'Dasar'
    }, {
      value: 'menengah',
      label: 'Menengah'
    }, {
      value: 'lanjut',
      label: 'Lanjut'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, list.map(c => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: c.title
  }, c, {
    onClick: onEnroll
  }))))), /*#__PURE__*/React.createElement(Card, {
    surface: "muted",
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bkc-eyebrow"
  }, "Beri tahu saya"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-title-3)'
    }
  }, "Kelas apa yang kamu tunggu?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Fotogrametri drone",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Pengolahan GNSS"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "QGIS & analisis spasial",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Batimetri"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Kartografi & layout peta"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      margin: 'var(--space-5) 0',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Kirim pengingat H-3",
    description: "Lewat email dan WhatsApp",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    fullWidth: true,
    onClick: onEnroll
  }, "Simpan preferensi"))));
}
Object.assign(window, {
  TrainingScreen,
  BKC_CLASSES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrainingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContourField = __ds_scope.ContourField;

__ds_ns.CoordinateReadout = __ds_scope.CoordinateReadout;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.EventCard = __ds_scope.EventCard;

})();
