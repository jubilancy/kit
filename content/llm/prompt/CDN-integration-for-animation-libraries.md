I'm building a tools website at **tools.eliana.lol**. The site uses a monospace aesthetic with a global CSS file (`global.css`) and a `TOOL_TEMPLATE.html`. Key CSS variables: `--bg`, `--text`, `--hover`, `--puny`, `--accent` (#ff6600 light / #ff9900 dark), `--highlight`. All pages share the same nav, footer, theme toggle script, and tab-switching pattern.

We've already built three playground pages — all follow the same tab layout with a live stage area, controls row, and info strip per library:

- **animation-playground.html** — Anime.js, GSAP, Motion One, Lottie Web, Popmotion
- **canvas-playground.html** — Three.js, Babylon.js, PixiJS, p5.js, Konva.js
- **maps-playground.html** — Leaflet, OpenLayers, Mapbox GL JS

Each playground loads its CDNs lazily per tab to avoid conflicts, uses a `tabInits{}` pattern for deferred init, and keeps all controls inline with the site's monospace button/select/range style. Stages are dark (`#0a0a0a` background). Scripts are self-contained in `<script>` blocks at the bottom, no build tools.

I'm continuing to build more tool pages in this same style.