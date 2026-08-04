# basedgirl.neocities.org — Edit Cheatsheet

## Site-wide settings

| Want to… | Edit… |
|---|---|
| Change site title | `_config.yml` → `title:` |
| Add a tagline/description | `_config.yml` → `description:` |
| Change nav links | `_data/nav.yml` |
| Change gallery folder names/descriptions | `_data/graphics.yml` |

---

## Pages

| Want to… | Edit… |
|---|---|
| Edit homepage | `_pages/index.html` |
| Edit /about | `_pages/about.md` |
| Edit /now | `_pages/now.md` |
| Edit /writing (blog index) | `_pages/writing.html` |
| Edit /library (library index) | `_pages/library.html` |
| Edit /links (link stream index) | `_pages/links.html` |
| Edit /wiki (wiki index) | `_pages/wiki.html` |
| Edit /graphics (gallery index) | `_pages/graphics.html` |
| Edit /feeds (RSS reader) | `_pages/feeds.html` |
| Edit /topics (topic index) | `_pages/topics/index.html` |
| Add a new topic | Create `_pages/topics/topic-name.md` |

---

## Content

| Want to… | Edit… |
|---|---|
| Write a blog post | Create `_posts/YYYY-MM-DD-slug.md` |
| Add to /links | Create `_links/YYYY-MM-DD.md` |
| Add to /library | Create `_library/slug.md` |
| Add a wiki page | Create `_wiki/folder/page-name.md` |
| Create a wiki folder | Just make the folder when you create the page |
| Link posts together in a series | Add `blogchain: series-name` to post front matter; make sure `_blogchains/series-name.md` exists |
| Add a project | Create `_projects/project-name.md` |

---

## Graphics gallery

| Want to… | Do… |
|---|---|
| Add images to a category | Drop `.png` / `.jpg` / `.gif` / `.webp` / `.svg` / `.avif` into `graphics/folder-name/` |
| Create a new category | Just make the folder and add images; it appears on `/graphics/` automatically |
| Change a category's display name | Edit `_data/graphics.yml` and add an entry for that folder |
| Add a blurb to a category | Same as above; add `description:` to the entry |

---

## Layouts & styling

| Want to… | Edit… |
|---|---|
| Change the blog post layout | `_layouts/blog.html` |
| Change the wiki page layout | `_layouts/wiki.html` |
| Change the gallery page layout | `_layouts/gallery.html` |
| Change CSS (colors, fonts, spacing) | `assets/css/all.css` |
| Change navigation chrome | `_includes/nav.html` |
| Change footer | `_includes/footer.html` |
| Change page header (`<title>`, meta tags) | `_includes/head.html` |

---

## RSS & data

| Want to… | Edit… |
|---|---|
| Change which blogs `/feeds` reads | `_pages/feeds.opml` |
| Change the RSS feed URL | `_pages/feed.xml` |
| Change the sitemap | `_pages/sitemap.xml` |

---

## Deploy & config

| Want to… | Do… |
|---|---|
| Set Neocities API key | GitHub → Settings → Secrets and variables → Actions → `NEOCITIES_API_KEY` |
| Change deploy branch | Edit `.github/workflows/deploy.yml` line 5 (`branches: [main]`) |
| Change cleanup behavior (whether deletions sync) | Edit `.github/workflows/deploy.yml` → look for `cleanup:` |
| Test locally before pushing | `bundle install && bundle exec jekyll serve` → http://localhost:4000 |
| Check for structural errors | `python scripts/validate_structure.py` |

---

## Front matter quick reference

Every markdown file (blog posts, wiki pages, links, etc.) starts with front matter between `---` markers:

```markdown
---
layout: blog
title: My Post Title
subtitle: Optional subtitle
date: 2026-07-16
permalink: /custom-url/
---

Content goes here.
```

**Common fields:**
- `layout:` — which template to use (`blog`, `wiki`, `gallery`, etc.)
- `title:` — the page title
- `subtitle:` — optional, often italicized
- `date:` — for blog posts, links (YYYY-MM-DD format)
- `permalink:` — the URL (required for `_pages/` files, optional elsewhere)
- `blogchain:` — for posts that belong to a series

---

## File locations at a glance

```
repo root/
├── _config.yml              ← site settings
├── _data/
│   ├── nav.yml              ← left-hand navigation
│   └── graphics.yml         ← gallery folder display names
├── _pages/                  ← standalone pages (all need permalink:)
│   ├── index.html           ← homepage
│   ├── about.md
│   ├── now.md
│   ├── writing.html         ← blog index
│   ├── library.html
│   ├── wiki.html
│   ├── graphics.html
│   └── topics/              ← individual topic pages
├── _posts/                  ← blog posts (YYYY-MM-DD-slug.md)
├── _wiki/                   ← wiki pages (auto-grouped by folder)
│   ├── blogging/
│   ├── books/
│   └── design/
├── _links/                  ← link stream (YYYY-MM-DD.md)
├── _library/                ← saved things (slug.md)
├── _projects/               ← projects (project-name.md)
├── _blogchains/             ← linked post series
├── graphics/                ← images for the gallery (auto-indexed)
│   ├── blinkies/
│   ├── stickers/
│   ├── pixels/
│   ├── 88x31/
│   ├── banners/
│   ├── dividers/
│   ├── stamps/
│   └── cursors/
├── assets/
│   ├── css/
│   ├── js/
│   ├── fonts/
│   └── img/                 ← images used by pages
├── _layouts/                ← page templates
├── _includes/               ← reusable chunks (nav, footer, etc.)
├── .github/workflows/
│   └── deploy.yml           ← the GitHub Action
└── scripts/
    ├── fetch_feeds.py       ← builds /feeds data
    └── validate_structure.py ← checks for errors
```

---

## Gotchas

- **Every file in `_pages/` needs a `permalink:`** in front matter, or Jekyll serves it from `/_pages/...` instead of where you expect.
- **Blog post filenames must be `YYYY-MM-DD-slug.md`** or Jekyll won't recognize them as posts.
- **Images in `graphics/` folders auto-publish** once you push; empty folders stay hidden.
- **The nav links point at real page permalinks.** If you add a link to `/foo/` but no page has `permalink: /foo/`, `validate_structure.py` will catch it.
- **Changes are live within 1–2 minutes** of pushing to `main`. No manual deploy step.
- **Deletions sync to Neocities** because `cleanup: true` is on — if you delete a post locally and push, it disappears live too.

---

## One-liners

```bash
# Build & test locally
bundle install && bundle exec jekyll serve

# Check for structural errors before pushing
python scripts/validate_structure.py

# See what the next deploy would upload
# (printed in the GitHub Actions logs)
```
