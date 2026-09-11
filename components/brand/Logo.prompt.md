The BKC identity lockup — circular emblem plus wordmark; use it in every header, footer, and slide corner.

```jsx
<Logo size={40} assetBase="../../assets" />
<Logo variant="emblem" size={56} />
<Logo variant="vertical" size={72} showTagline />
<Logo tone="on-dark" />
```

The emblem is a fixed asset (`assets/logo-emblem.png`) — do not recolour, outline, or redraw it. `tone="on-dark"` only affects the wordmark. Minimum emblem size 28px; below that use the squirrel mark PNGs directly as a favicon.
