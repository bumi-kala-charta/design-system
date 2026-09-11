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
    this.innerHTML = '<figure class="sp"><header><span class="mono"></span><span class="sp-note"></span>' +
      '<a class="sp-open" target="_blank" rel="noopener">buka \u2197</a></header>' +
      '<div class="sp-body"><iframe loading="lazy" title=""></iframe></div></figure>';
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
