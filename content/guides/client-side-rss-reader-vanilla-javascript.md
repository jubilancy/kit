---
tags: rss-reader, client-side, javascript, hugo-site, vanilla-js, cors-proxy, feed-parser, localstorage
title: Build Client-Side RSS Reader with Vanilla JavaScript
description: Learn how to create a client-side RSS reader using vanilla JavaScript for a static Hugo site, bypassing CORS restrictions with free public proxies.
keyword: client-side rss reader
related-keywords: |-
  rss feed parser
  vanilla javascript
  hugo site integration
  cors bypass
  localstorage implementation
  static site rss
  javascript rss reader
topics: |-
  Suggested H2 outline
  Introduction to Client-Side RSS Readers
  Core Functionality and Features
  Step-by-Step Build Instructions
  Overcoming CORS Restrictions
  Implementing LocalStorage for Read/Unread Toggles
  Adding Multiple Feeds and Search Functionality
---
# claude response

Here is the fully reorganized content from your file. Everything has been preserved — all code, prose, tables, footnotes, and reference URLs — grouped into logical categories.

---

# Client-Side RSS Reader — Organized Reference

---

## 1. Feasibility & Overview

You can build a basic RSS reader entirely client-side with vanilla JavaScript for a static Hugo site, using `fetch()` to grab feeds and `DOMParser()` to parse XML — no backend needed. However, CORS restrictions on most feeds require free public proxies like `allorigins.win` to bypass them reliably.

**Core functionality includes:**
- Fetching an RSS URL via proxy
- Parsing the XML response
- Extracting items (title, link, description, pubDate)
- Rendering as a list of articles with read/unread toggles via localStorage
- Adding multiple feeds, sorting by date, and searching titles
- Perfect for self-hosting without storage

**General verdict:** Client-side wins for a no-backend setup (e.g., a Hugo site); server-side for robust, multi-user self-hosting.

---

## 2. Step-by-Step Build Instructions (Client-Side, Vanilla JS)

1. Create HTML with an input for RSS URL, a load button, and `<div id="output"></div>` for articles.
2. Add the fetch/parse function:
   ```js
   async function loadFeed(url) {
     const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
     const res = await fetch(proxy);
     const xml = await res.text();
     const doc = new DOMParser().parseFromString(xml, 'text/xml');
   }
   ```
3. Query `doc.querySelectorAll('item')`, loop to extract `title`, `link`, `description`, `pubDate`; build HTML like:
   ```js
   `<article><h3><a href="${link}">${title}</a></h3><p>${desc}</p></article>`
   ```
   Insert via `innerHTML`.
4. Use localStorage to save/load feed list:
   ```js
   localStorage.setItem('feeds', JSON.stringify(array));
   ```
5. Style with CSS Grid for feed list/sidebar; add refresh button polling every 5 minutes via `setInterval`.
6. Test/deploy as a Hugo page — handles 10–20 feeds fine.

---

## 3. Quick Code Example (Minimal Working RSS Reader)

```html
<!DOCTYPE html>
<html>
<body>
  <input id="feedUrl" placeholder="RSS URL" value="https://example.com/rss">
  <button onclick="loadFeed()">Load</button>
  <div id="articles"></div>

  <script>
    async function loadFeed() {
      const feedUrl = document.getElementById('feedUrl').value;
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
      try {
        const response = await fetch(proxyUrl);
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        let html = '';
        items.forEach(item => {
          const title = item.querySelector('title').textContent;
          const link = item.querySelector('link').textContent;
          const desc = item.querySelector('description').textContent;
          html += `<article><h3><a href="${link}" target="_blank">${title}</a></h3><p>${desc}</p></article>`;
        });
        document.getElementById('articles').innerHTML = html;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  </script>
</body>
</html>
```

> Copy-paste into a Hugo page — extend with localStorage for saved feeds. Test with public feeds like `https://news.ycombinator.com/rss`.

---

## 4. CORS — Problem & Solutions

**Why it fails:** Direct `fetch(rssUrl)` fails due to missing `Access-Control-Allow-Origin` headers on most RSS providers (e.g., nytimes.com/rss).

**Solutions:**

- **Free public proxies** — prepend to any RSS URL:
  - `https://api.allorigins.win/raw?url=`
  - `https://corsproxy.io/?`
  - `https://thingproxy.freeboard.io/fetch/` (simple, good fallback)
- **Self-host a tiny Express proxy:**
  ```js
  app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next(); });
  app.get('/rss', async (req, res) => res.send(await (await fetch(req.query.url)).text()));
  ```
- **Browser extensions** like CORS Unblock
- Proxies add ~500ms latency but no backend needed; rotate 2–3 for redundancy

---

## 5. CORS Proxies — Production Options

| Proxy | Notes |
|---|---|
| **corsproxy.io** | Unlimited free tier, header override, cached responses; `https://corsproxy.io/?${encodeURIComponent(rssUrl)}` — reliable for prod |
| **allorigins.win** | Popular, raw/`raw?url` modes, no signup; handles high volume but occasional downtime |
| **thingproxy.freeboard.io/fetch/** | Simple, fetch-like; good fallback |
| **Corsfix** | Self-host via Docker, AGPLv3 |
| **CORS Anywhere** | Self-host via npm install, MIT license |

---

## 6. RSS Parsing Libraries

| Library | Notes |
|---|---|
| **rss-parser** | Node/browser; simple promise-based, handles RSS/Atom/JSON Feed; `const parser = new RSSParser(); parser.parseString(xml).then(feed => console.log(feed.items));` — lightweight, 10k stars |
| **fast-xml-parser** | Ultra-fast XML-to-JSON for large feeds; zero deps, streaming support |
| **Feedsmith** | All-in-one RSS/Atom/JSON/RDF parser + generator with namespaces/OPML; robust normalization |
| **xml2js** | Popular XML-to-JSON converter; callback/promise modes |
| **Vanilla DOMParser** | Suffices for basics — no lib needed initially |

---

## 7. LocalStorage Caching for Offline Use

1. On successful parse, cache feed data:
   ```js
   localStorage.setItem('rssCache_' + feedUrlHash, JSON.stringify({ items: parsedItems, timestamp: Date.now() }));
   ```
   where `hash` is `btoa(feedUrl).slice(0, 10)`.

2. Before fetching, check cache (1-hour expiry):
   ```js
   const cached = localStorage.getItem('rssCache_' + hash);
   if (cached && Date.now() - JSON.parse(cached).timestamp < 3600000) {
     render(JSON.parse(cached).items);
     return;
   }
   ```

3. When offline (`navigator.onLine === false`), fall back to cache and show a "Cached data" badge.

4. Manage the 5MB localStorage limit by clearing old caches:
   ```js
   Object.keys(localStorage)
     .filter(k => k.startsWith('rssCache'))
     .slice(-20)
     .forEach(k => localStorage.removeItem(k));
   ```

5. Add a "Clear Cache" button for UX.

> For more advanced offline caching, add service workers for PWA caching.

---

## 8. Error Handling

```js
async function loadFeed(url) {
  try {
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const res = await fetch(proxyUrl);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    if (doc.querySelector('parsererror')) throw new Error('Invalid XML');
    // Parse & render...
  } catch (error) {
    console.error('RSS Error:', error);
    document.getElementById('output').innerHTML = `
      <div class="error">
        <h3>Failed to load: ${error.message}</h3>
        <p>Check URL or try later. Using cache if available.</p>
      </div>`;
    loadFromCache(url); // Fallback
  }
}
```

This pattern: checks HTTP status, detects invalid XML via `parsererror`, shows a user-friendly error message, and falls back to cache automatically.

---

## 9. CSS Animations

Use container queries + scroll-timeline for fade/slide-ins:

```css
.rss-list { container-type: inline-size; }
article {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}
@container style(--loaded: true) {
  article { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn { to { opacity: 1; transform: none; } }
```

Trigger via JS `--loaded: true` on render; add `@keyframes spin` for loading spinner:
```css
.loader { animation: spin 1s linear infinite; }
```

---

## 10. Cloudflare Pages Deployment

1. Push HTML/JS/CSS to a GitHub repo (e.g., `my-rss-reader/index.html`).
2. In Cloudflare Dashboard → Pages → Connect to Git; select repo, set Build: "None" (static HTML), Output dir: `/`.
3. Deploy — auto-builds on push; custom domain via Cloudflare DNS (free).
4. Enable Pages Functions if needed (JS Workers for proxy), but vanilla HTML works zero-config; KV for shared cache is optional.
5. Live in under 1 minute, CDN global.

---

## 11. Node.js + SQLite Server-Side Option

For a more powerful, multi-device setup:

1. `npm init -y; npm i express sqlite3 rss-parser node-cron cors`
2. Create SQLite DB:
   ```js
   db.serialize(() => {
     db.run('CREATE TABLE feeds (id INTEGER PRIMARY KEY, url TEXT, last_updated TEXT);');
     db.run('CREATE TABLE items (feed_id INT, title TEXT, link TEXT, pubDate TEXT, read BOOLEAN);');
   });
   ```
3. Cron job to poll feeds every 5 minutes:
   ```js
   cron.schedule('*/5 * * * *', async () => {
     feeds.forEach(async f => {
       const parsed = await parser.parseURL(f.url);
       parsed.items.forEach(item => db.run('INSERT OR IGNORE INTO items...'));
     });
   });
   ```
4. Express routes: `/feeds` lists saved feeds; `/read/:feedId` marks read; `/api/items` queries unread with pagination.
5. Frontend: Vanilla JS or React fetches `/api`, renders list — deploy on Vercel/Railway for self-hosting (~$5/mo).

---

## 12. Architecture Comparison: Client-Side vs. Server-Side

| Aspect | Client-Side (Vanilla JS) | Server-Side (Node/SQLite) |
| :-- | :-- | :-- |
| **Setup** | Zero server; HTML/JS file on static host | Node app + DB; VPS/Vercel deploy |
| **CORS** | Proxy required | None — server fetches freely |
| **Persistence** | localStorage (per-browser, ~5MB) | Full SQLite (unlimited, multi-device) |
| **Performance** | Fast for 10–50 feeds; proxy latency | Handles 1000s; caching/polling optimized |
| **Offline** | Partial via service workers | No (needs server) |
| **Features** | Basic list/search; no full-text | Read status, search, OPML import |
| **Cost/Scaling** | Free/static | $0–10/mo; scales with users |
| **Best For** | Personal Hugo embed, quick prototype | Shared/multi-user reader |

---

## 13. Limitations

- CORS blocks direct fetches from sites like `nytimes.com/rss`
- Proxies add minor latency (1–2s) and have rate limits — avoid aggressive refresh
- No full-text search or offline caching beyond localStorage
- For polish, add service workers for PWA caching
- localStorage capped at ~5MB

---

## 14. Reference URLs

| # | URL |
|---|---|
| 1 | https://github.com/cemreefe/client-side-rss-reader |
| 2 | https://cemrekarakas.com/posts/2025/01/09/client-side-rss-reader |
| 3 | https://dev.to/geekgalgroks/building-an-rss-reader-in-javascript-1ep0 |
| 4 | https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/ |
| 5 | https://stackoverflow.com/questions/4764786/is-it-possible-to-get-an-rss-feed-using-javascript-client-side-scripting-only |
| 6 | https://www.reddit.com/r/webdevelopment/comments/1qse20n/web_application_for_reading_rss_feeds_using_html/ |
| 7 | https://www.geeksforgeeks.org/javascript/how-to-fetch-and-parse-rss-feeds-in-javascript/ |
| 8 | https://github.com/forresttindall/ClearFeed-RSS-Reader |
| 9 | https://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript |
| 10 | https://www.reddit.com/r/selfhosted/comments/12jky97/what_is_your_favorite_selhosted_rss_reader/ |
| 11 | https://lukesingham.com/rss-feed-reader/ |
| 12 | https://daily-dev-tips.com/posts/rss-reader-in-node-js/ |
| 13 | https://selfh.st/alternatives/rss-readers/ |
| 14 | https://www.npmjs.com/package/rss-parser |
| 15 | https://www.reddit.com/r/rss/comments/1nfvw5o/what_are_the_best_rss_feed_reader_apps_with_a/ |
| 16 | https://cybrkyd.com/post/a-simple-html-rss-feed-reader-and-aggregator-with-javascript/ |
| 17 | https://corsproxy.io |
| 18 | https://javascript.plainenglish.io/a-medium-slice-430c413adfb9 |
| 19 | https://bestofjs.org/projects/feedsmith |
| 20 | https://www.reddit.com/r/webdev/comments/vlynk4/how_to_build_an_rss_aggregator_using_nodejs/ |
| 21 | https://matklad.github.io/2025/06/26/rssssr.html |
| 22 | https://eastondev.com/blog/en/posts/dev/20251201-cloudflare-pages-deploy-guide/ |
| 23 | https://stackoverflow.com/questions/32947129/html5-local-storage-vs-app-cache-offline-website-browsing |
| 24 | https://blog.devesh.tech/post/how-to-make-your-web-apps-work-offline |
| 25 | https://www.thedotproduct.org/posts/update-2-html-5-offline-application-caching-javascript-localstorage-and-sessionstorage-a-very-simple-reasonably-complete-example.html |
| 26 | https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/ |
| 27 | https://dev.to/reynaldi/cors-proxies-updated-2025-16mh |
| 28 | https://corsfix.com/blog/best-open-source-cors-proxy-services |
| 29 | https://ryanmulligan.dev/blog/scroll-triggered-animations-style-queries/ |
| 30 | https://www.clouddefense.ai/code/javascript/example/rss-parser |
| 31 | https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ |
| 32 | https://tj.ie/diy-rss-feed-reader/ |
| 33 | https://world.hey.com/danott/building-an-rss-reader-c6887003 |
| 34 | https://www.contentful.com/blog/generate-blog-rss-feed-with-javascript-and-netlify/ |

---

Everything from the original file is captured above. You can safely delete the original. The content was reorganized from three interleaved Q&A-style sections into 14 coherent topical categories, with all code blocks, tables, notes, and URLs preserved verbatim.
