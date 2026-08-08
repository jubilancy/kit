Create a static image gallery site for GitHub Pages that sources artwork from a CSV file. The site should:

**Data Structure:**

- Backend: CSV with columns: image_url, title, source, tags
- Store CSV in the repo and parse it client-side with JavaScript

**Pages & Navigation:**

- index.html (main gallery)
- sources.html (list of all sources from CSV)
- info.html (about the project)
- copyright.html (licensing info)
- tags.html (dynamic tag index—regenerated on each deploy as new art/tags are added)
- Global navigation linking all pages

**Gallery (index.html):**

- Masonry grid layout displaying thousands of public domain artworks
- Pagination to handle large datasets
- Hover effect reveals: image title, source, and tags as an overlay
- Simple, minimal design with a serif font (e.g., Georgia, Garamond, or a Google Font like Crimson Text or EB Garamond)

**Styling (style.css):**

- Serif typography throughout
- Clean, minimal aesthetic
- Responsive masonry grid (CSS Grid or similar)
- Smooth hover transitions

**Technical:**

- No build step or dependencies
- Pure HTML, CSS, and vanilla JavaScript
- CSV parsing client-side
- Tags page auto-populates from CSV data on each deploy

Deploy to GitHub Pages with automatic tag index regeneration on push.

---

This prompt is ready to hand to Claude or another AI to build the full site.
https://claude.ai/code/artifact/9e826e43-2764-41c2-9c3d-4c57b4a8c9dd

github-pages-artwork-gallery


---
