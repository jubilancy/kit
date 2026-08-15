# Notes

## Source File Summary
Of the merged files parsed, only the `epub-utils Installation Journey` file contained terminal commands. The other two source files — a text categorization exercise and a Kirby/Astro plugin reference — contained no runnable commands or scripts; their content is captured below.

---

## Kirby Plugins vs. Astro Alternatives

Astro does not have 1:1 "plugin" equivalents for every Kirby social plugin, but similar functionality is achievable via official integrations, community packages, or small custom components.

### Rich media embeds (YouTube, Vimeo, SoundCloud, Instagram)
- Kirby's "Embed" plugin (sylvainjule/embed) covers this via URL-based embeds from YouTube, Vimeo, Soundcloud, Instagram, etc.
- Astro equivalent: the [Astro Embed](https://astro-embed.netlify.app) component ecosystem provides rich media embeds for similar services.

### Webmentions, comments, IndieWeb-style features
- Kirby plugins: IndieConnector (webmentions, cross-posting to Mastodon/Bluesky), Komments (webmention-enabled comments with spam protection/moderation).
- No drop-in Astro plugin exists for this; typical Astro setups use custom serverless functions or external services (e.g. Webmention.io) plus custom components.

### Mastodon / Bluesky / social feeds
- Kirby plugins: Mastodon Feed, POSSE for Kirby, Bloggerrolle.
- Astro projects usually fetch Mastodon RSS or JSON APIs directly in `.astro` pages/components.
- Bluesky cross-posting in Astro relies on bespoke Node scripts or services rather than a dedicated plugin.

### Social links, handles, and footers
- Kirby plugins: Social Media Links, Handle (converts handles to profile links).
- Astro docs include a tutorial for building a reusable social media footer component that outputs profile links (Instagram, Twitter/X, LinkedIn, etc.).
- Contact link fields (email, tel, WhatsApp) are typically implemented as custom Astro components plus frontmatter properties.

### WhatsApp / Instagram UI widgets and buttons
- Kirby plugins: WhatsApp Button, Instagram Feed.
- Astro: floating WhatsApp button can use a small custom component or an existing library like [astro-whatsapp](https://github.com/dfrios/astro-whatsapp).
- Instagram feeds/buttons are typically done by calling the Instagram API or an embedding service from an Astro component.

### Full Kirby Plugin List Referenced
- **Embed** (sylvainjule) — media embeds from URL
- **IndieConnector** (mauricerenck) — IndieWeb interface: webmentions, Mastodon/Bluesky posting
- **Komments** (mauricerenck) — webmention-enabled comments
- **Contact Field** (plain-solutions) — contact link field
- **Mastodon Feed** (scottboms) — display Mastodon posts
- **Promote Button** (scottboms) — post to Mastodon/Bluesky/LinkedIn
- **POSSE for Kirby** (dewey) — auto cross-post to Mastodon/Bluesky
- **Bloggerrolle** (mauricerenck) — pings bloggerrolle.de/uberblogr.de on publish
- **Handle** (alienlebarge) — social handles to profile links
- **Social media links** (jan-heise) — add social links to blueprint
- **Rate Page** (mauricerenck) — page rating plugin with webmention support
- **Video** (schnti) — privacy-friendly YouTube embeds
- **Are.na Tag** (kx550) — embed Are.na channels via Kirbytag
- **Instagram Feed** (owebstudio) — Instagram feed display
- **WhatsApp Button** (owebstudio) — floating WhatsApp button

### Categorized Link Summary (37 links reviewed)
- **Kirby CMS Plugins (16)** — CMS fields, tags, and automations like webmentions and feeds
- **Astro Resources (13)** — embed components, tutorials, GitHub repos for static site integrations
- **Misc/Unsorted (8)** — YouTube videos, Reddit threads, forums, and unrelated pages

**Astro Official Docs & Integrations:**
- [astro.build/integrations](https://astro.build/integrations/2/)
- [docs.astro.build tutorial: components](https://docs.astro.build/en/tutorial/3-components/2/)

**Astro Embed Components:**
- [astro-embed.netlify.app](https://astro-embed.netlify.app)
- [Getting started](https://astro-embed.netlify.app/getting-started/)
- [YouTube component](https://astro-embed.netlify.app/components/youtube/)

**Astro Tutorials & Blogs:**
- [Mastodon comments in Astro.js](https://gregnewman.io/blog/mastodon-comments-in-astrojs/)
- [Recovering webmentions after migrating to Cloudflare](https://jenchan.biz/blog/recovering-webmentions-after-migrating-to-cloudflare/)
- [Integrate Mastodon with Astro](https://www.lindsaykwardell.com/blog/integrate-mastodon-with-astro)
- [Embed Mastodon RSS feed on website](https://tagembed.com/blog/embed-mastodon-rss-feed-on-website/)
- [Crosspost from Mastodon to Bluesky](https://maurice-renck.de/en/learn/tooling/crosspost-from-mastodon-to-bluesky)
- [Mastodon and Bluesky interoperability](https://www.ianbrown.tech/2024/10/09/mastodon-and-bluesky-show-interoperability-in-action/)

**Astro/GitHub Components:**
- [dfrios/astro-whatsapp](https://github.com/dfrios/astro-whatsapp)

**General Social Embed Tutorials:**
- [embedsocial.com tutorials](https://embedsocial.com/blog/category/tutorials/)
- [YouTube: high-performance YouTube embed in Astro](https://www.youtube.com/watch?v=Gy4Nhjy8YgE)

**Misc Videos/Discussions:**
- [YouTube video](https://www.youtube.com/watch?v=eYzZbmCE_T4)
- [Reddit: high-performance YouTube embed in Astro](https://www.reddit.com/r/astrojs/comments/1oqwp73/building_a_high_performance_youtube_embed_in_astro/)
- [YouTube video](https://www.youtube.com/watch?v=x6pjyeQ_6V0)
- [Smashballoon Instagram feed on Astra](https://smashballoon.com/instagram-feed-on-astra/)
- [Reddit: Bluesky/fediverse interoperability](https://www.reddit.com/r/fediverse/comments/1b1wa7u/so_is_there_a_direct_way_now_for_bluesky_users_to/)
- [Bluesky atproto discussion](https://github.com/bluesky-social/atproto/discussions/1716)
- [CSDN blog post](https://blog.csdn.net/gitblog_00084/article/details/139616126)
- [Kirby forum: plugin directory](https://forum.getkirby.com/t/our-brand-new-plugin-directory/25120)

---

## PEP 668 / Homebrew Python Context
`pip install` and `pip3 install` for Python CLI tools like `epub-utils` fail on modern Mac due to PEP 668 ("externally-managed-environment" restrictions on Homebrew Python). The fix is to install tools via `pipx` instead, which installs each tool in its own isolated virtualenv while still making it globally accessible on PATH.

## What Bookmarklets Are
A bookmarklet is stored as a normal browser bookmark whose URL starts with the `javascript:` scheme instead of `http:` or `https:`. When activated, the browser executes the JavaScript code in the context of the current page. If the code returns no value (for example, using an immediately invoked function or `void`), the original page stays visible while being modified in place. ([Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet))

## Common Bookmarklet Uses
- Changing styles on a page (e.g. adding borders to elements, changing font sizes)
- Extracting or collecting data from the DOM (e.g. all image URLs via `$$('img').map(img => img.src)`)
- Sending the current page URL to another service (e.g. a FreshRSS feed adder or masked-email helper)
- Opening or transforming special URLs, like converting YouTube Shorts links to regular watch URLs
- Highlighting internal vs. external links in different colors
- Showing linked pages as visual previews inside iframes
- Adding a 1px solid red border to all page elements to spot layout issues
- Creating an input box to generate masked email addresses for better privacy

Source: [Wikipedia — Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)

## Personal Bookmarklet Habits
- Frequently uses the Accessible Name & Description Inspector (ANDI) bookmarklet for accessibility checking.
- Uses the [Fount](https://fount.wtf/) tool to identify web fonts in use on a site without viewing source code.
- Some bookmarklets in use were sourced from the web or a bookmarks bar; original authors are unknown for those.

## HTML Snippets for Linking/Embedding Images
Reusable markup for linking out to an image-hosted service (internetometer.com) or a generic badge-style image link.

Standard size:
```html
<a href='http://internetometer.com/give/51340'><img src='http://internetometer.com/image/51340.png'/></a>
```

Small size:
```html
<a href='http://internetometer.com/give/51340'><img src='http://internetometer.com/imagesmall/51340.png'/></a>
```

BBCode equivalent:
```bbcode
[url=http://internetometer.com/give/51340][img]http://internetometer.com/image/51340.png[/img][/url]
```

Generic customizable badge template:
```html
<a href="Your Website URL" target="_blank"><img src="Your Image URL" alt="" style="width:88px;height:31px;border:0"></a>
```

## Embedded Widgets
**Sun, Moon & Rising Sign Calculator** — widget embed from [MiniWebtool](https://MiniWebtool.com/sun-moon-rising-sign-calculator/) (has been reused multiple times, sometimes with preset birth date/location params):
```html
<div class="miniwebtoolwidget" data-calculator="sun-moon-rising-sign-calculator" data-width="470">
  <div class="miniwebtoolh">Sun, Moon &amp; Rising Sign Calculator</div>
  <p><a href="https://MiniWebtool.com/sun-moon-rising-sign-calculator/" target="_blank">Sun, Moon &amp; Rising Sign Calculator (c) MiniWebtool.com</a></p>
</div>
<script async src="https://MiniWebtool.com/embed.js?v=1.1"></script>
```

**Forum flag counter** — embed + accompanying message, from [Flag Counter](https://info.flagcounter.com/cuiW):
```bbcode
[URL=https://info.flagcounter.com/cuiW]
[IMG]https://s01.flagcounter.com/mini/cuiW/bg_FFFFFF/txt_000000/border_CCCCCC/flags_1/[/IMG][/URL]
{"message":"Hello. Is it me you're looking for?"}
```

**Shields.io dynamic badge** — endpoint pointing at a Last.fm "now playing" JSON feed:
```
https://img.shields.io/endpoint?color=blueviolet&url=https://lastfm-last-played.biancarosa.com.br/funnyprettynice/latest-song?format=shields.io
```

**Blog iframe embeds** — two variants pointing at a Neocities-hosted blog:
```html
<!-- Tumblr-style -->
<iframe src='https://basedgirl.neocities.org/embed/index.html?userId=125738' frameborder='none'></iframe>

<!-- Zonelets-style -->
<iframe src='https://basedgirl.neocities.org/embed/post/postlist?userId=125738' frameborder='none'></iframe>
```

## Syntax Highlighting Libraries
For lightweight syntax highlighting, [Prism.js](https://prismjs.com/) or [Highlight.js](https://www.npmjs.com/package/highlight.js?activeTab=readme#fetch-via-cdn) with their minimal CSS/JS builds are good options.
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
<!-- individual languages can be loaded separately -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"></script>
```

## Chrome DevTools Snippets — Background
JavaScript snippets used within browser DevTools (Inspect Element) can enhance debugging, testing, and analysis of web pages. Useful categories include element manipulation/inspection, data extraction, network/performance testing, and general utility snippets (see `scripts.md` and `commands.md` for the actual snippets). For frequently used snippets, DevTools has a dedicated "Snippets" panel under the Sources tab for saving and quick execution. Reference: [Run snippets of JavaScript — Chrome DevTools](https://developer.chrome.com/docs/devtools/javascript/snippets).

Related reading found via search:
- [DevTools Snippets collection (bgrins, GitHub)](https://bgrins.github.io/devtools-snippets/)
- [6 Snippets to Keep in Your Chrome DevTools (Telerik.com)](https://www.telerik.com/blogs/6-snippets-to-keep-in-your-chrome-devtools)
- [bahmutov/code-snippets (GitHub)](https://github.com/bahmutov/code-snippets)
- [Applying JavaScript changes using Inspect Element (Stack Overflow)](https://stackoverflow.com/questions/34061966/applying-javascript-changes-using-inspect-element)
- [Javascript used in snippets are visible in the source code (Kirby Forum)](https://forum.getkirby.com/t/javascript-used-in-snippets-are-visible-in-the-source-code-front-end/31893)

## Coding Tools & References
- [Liveweave](https://liveweave.com) — online HTML/CSS/JS playground
- [journal.miso.town Atom feed](https://journal.miso.town/atom?url=https://basedgirl.neocities.org/p/journal) — Atom feed URL for a Neocities journal

## Package Search Links
- [npmm.dev search](https://npmm.dev/search?q=npmm)
- [npm.io — "bookmarks" keyword](https://npm.io/search/keyword:bookmarks)
- [GitHub search — "npm bookmarks" repositories](https://github.com/search?q=npm%20bookmarks&type=repositories)

## Cool Sites / Link Directory
Source graphics:
- [Dramatical Resources](http://dmmdresources.tumblr.com/links)
- [Nitro+Chiral Paths](http://nitrochi-paths.tumblr.com/tagged/official+art)

Web toys & effects:
- [Picasion](https://picasion.com/) — glitter and avatar effects
- [Gifcities](https://gifcities.org/) — 90s-style GIFs
- [Blog-Switch](http://www.blog-switch.com/) — falling objects for your site
- [Wayback Machine](https://web.archive.org/) — internet archive
- [Javascript Heaven](http://www.mf2fm.com/rv/) — mouse/text effects
- [Make Word Art](https://www.makewordart.com/)
- [Free Comment Box](https://www.cbox.ws/)
- [Cool Text](https://cooltext.com/)
- [Dancing Cats](https://smokeyjoint.neocities.org/dancingcats.html)
- [Free Counters](https://www.websiteout.net/counter.php)
- [The End of Internet](https://happydancingtoast.neocities.org/endofinternet.html)
- [Flower Paint](https://smokeyjoint.neocities.org/flowerpaint.html)
- [Free Stuff](https://smokeyjoint.neocities.org/youwon.html)
- [Blinkies](https://blinkie.suppi.net/)
- [Sadgrl's 88x31 Button Maker](https://sadgrl.online/graphics/88x31-button-maker.html)
- [Sadgrl's Layout Builder](https://sadgrl.online/newoldweb/yourownsite/layout-builder.html)
- [Free Guestbook](http://www.freegb.net/)
- [Magic 8 Ball](https://smokeyjoint.neocities.org/magic8ball.html)
- [Good Morning](https://smokeyjoint.neocities.org/goodmorning.html)
- [Dark Toasty](https://toastforlife.neocities.org/darktoasty.html)
- [Glitter Graphics](https://www.glitter-graphics.com/)

Cinni.net / cutie internet directory:
- [Link to us](https://directory.cinni.net/link.php)
- [The Cutie Internet Archive](https://archive.cinni.net/)
- [Oekaki Board](https://oekaki.cinni.net/)
- [99gifshop](https://99gifshop.neocities.org/)
- [Pixelgarden MB](https://pixelgardenmb.net/)
- [Link Directories](https://directory.cinni.net/link/)
- [Web Materials](https://directory.cinni.net/sozai/)
- [Dolls](https://directory.cinni.net/doll/)
- [Pixel + Personal](https://directory.cinni.net/pixel/)
- [Cliques + Fan](https://directory.cinni.net/clique/)
- [Featured](https://directory.cinni.net/featured.php)
- [Plugboard](https://directory.cinni.net/plug.php)
- [About](https://directory.cinni.net/about.php)
- [Ichigo Directory](https://directory.cinni.net/) — directory of cute websites
- [Entrance or Exit (virtual gallery)](https://entranceorexit.net/)
- [99gifshop — See All Items](https://99gifshop.neocities.org/items/1/)
- [99gifshop quiz](https://nostalgic.neocities.org/adopts/quiz)
- [Say No to Web3](https://yesterweb.org/no-to-web3/index.html)
- [Say No to NFT](https://everestpipkin.medium.com/but-the-environmental-issues-with-cryptoart-1128ef72e6a3)
- [Sticker Sheet Club](https://cinni.net/stickersheet.html)
- [Yum-Yum Shoppe](https://cinni.net/shoppe.html)
- [Teeny Towers](https://cinni.net/shrine/tinytower.html)
- [Web Gardens](https://cinni.net/shrine/wg.html)

Directory stats (as noted in source): link directories: 14, web materials: 16, dolls: 20, pixel+personal: 34, cliques+fan: 11, total listed: 95 sites.

## Google Search Clipping — "helpful JS snippets for inspect element"
A saved search-results clipping (dated 2025-12-05) covering the DevTools snippet topic above, sourced from a Google search with related pages from Chrome for Developers, GitHub, Telerik, Stack Overflow, and the Kirby forum. Full clipping title: "helpful js snippets for inspect element - Google Search."
