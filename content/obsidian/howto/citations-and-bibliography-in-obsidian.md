---
title: "Citations and Bibliography in Obsidian"
description: "Three ways to cite in Obsidian: manual footnotes, plugin-powered with Zotero, or fully automated with Pandoc. Pick the workflow that fits your research."
tags: ["obsidian", "citations", "zotero", "academic-writing", "bibliography", "plugins"]
---

# Citations and Bibliography in Obsidian

Obsidian doesn't natively support citations, but with the right plugins and setup, you can automate your entire reference workflow—from inserting citations to generating formatted bibliographies in APA, MLA, Chicago, or any academic style.[^1]

There are three main approaches, from simplest to most powerful. Pick based on your workload and research volume.

---

## Approach 1: Manual Footnotes (Simplest)

**Best for:** Quick notes, blog posts, or casual citations when you don't use Zotero.

Obsidian natively only supports footnotes — it doesn't recognize Pandoc's @key syntax.[^2]

### How It Works

Add a footnote inline and reference it at the bottom:

```markdown
This idea was inspired by Smith et al.[^1]

[^1]: Smith, J. (2020). *Understanding AI*. AI Press.
```

### Speed It Up with Footnote Shortcut Plugin

The Footnote Shortcut plugin inserts auto-numbered footnote markers and appends corresponding footnote details at the bottom of the document via a hotkey.[^3]

**Setup:**

1. Install: Settings → Community Plugins → Browse → Search "Footnote Shortcut" → Install
2. Set up hotkeys: Settings → Hotkeys → Search for "Footnote" → Customize Command → Your preferred hotkeys.[^3]
3. Set a keyboard shortcut (e.g., Alt+F); anytime you press those keys the plugin automatically adds a footnote.[^4]

**Workflow:**
- Press your hotkey where you want the citation
- Plugin auto-numbers it and places cursor at the bottom
- Type or paste your reference

**Pros:** No external tools needed, works everywhere Obsidian goes  
**Cons:** Manual formatting each time, doesn't scale for 50+ citations

---

## Approach 2: Zotero + Citations Plugin (Recommended for Most)

**Best for:** Academic writers with 5-500 references who want automatic formatting.

The Obsidian Citations plugin automatically searches and inserts citations from a Zotero library. It supports BibTeX / BibLaTeX .bib format and CSL-JSON format.[^5]

### Step-by-Step Setup

#### 1. Install Better BibTeX in Zotero (Required)

Better BibTeX is under Word Processor and Writing Integration → LaTeX, TeX, and Text Editors. Download it and drag the file into Zotero's plugin manager.[^6]

This gives you stable citation keys (e.g., "Smith2020" instead of Zotero's cryptic IDs).

#### 2. Export Your Zotero Library

Select a collection in Zotero's left sidebar. Click File → Export library. Select Better BibLaTeX or Better CSL JSON as the format. We recommend BibLaTeX unless you experience performance issues.[^5]

Save the `.bib` or `.json` file somewhere in your Obsidian vault (e.g., a `/references` folder).

#### 3. Install Citations Plugin in Obsidian

Settings → Community Plugins → Browse → Search "Citations" → Install by Hans Dirksen.

Requires Obsidian 0.9.20 or higher.[^5]

#### 4. Point Plugin to Your Export File

Open Obsidian preferences → Citations tab → Paste the path to your exported file (.bib or .json) in the text field labeled "Citation export path".[^5]

After saving, you should now be able to search your references.

#### 5. Configure Citation Format (Optional)

In Citations plugin settings, customize how citations appear. Example formats:
- `[@citekey]` — Pandoc-style (works with Pandoc export)
- `[Smith2020]` — Bracket-style
- `Smith (2020)` — Narrative citation

### Using It

Insert literature note reference (Ctrl+Shift+E): insert a link to the literature note corresponding to a particular reference. Open literature note (Ctrl+Shift+O): automatically create or open a literature note for a particular reference.[^5]

**Workflow:**
1. Press `Ctrl+Shift+E` (or your hotkey)
2. Search for the paper/book
3. Select it → citation marker inserted automatically
4. Add a bibliography section to your note; it populates automatically

**Pros:** Automatic formatting, scales to 500+ references, links to PDFs in Zotero  
**Cons:** Requires Zotero setup, bibliography generation only works with Pandoc export

---

## Approach 3: Zotero Integration Plugin (Alternative)

The Zotero Integration plugin inserts and imports citations, bibliographies, notes, and PDF annotations from Zotero into Obsidian. Requires Better BibTeX for Zotero.[^7]

This is a more powerful alternative to the Citations plugin, with direct syncing of highlights and annotations from Zotero PDFs.

### Setup

1. Install [Better BibTeX](https://retorque.re/zotero-better-bibtex/) in Zotero
2. Settings → Community Plugins → Browse → Search "Zotero Integration" → Install by mgmeyers
3. In Obsidian settings under 'External extensions' search for "Zotero Integration" plugin. The settings are extensive, but leave defaults for basic setup.[^8]

### Features

With the Zotero Integration plugin, you can import Zotero entries into Obsidian and edit them. Both notes and annotations made directly in PDF documents within Zotero can be imported. If you click on the link in Obsidian, the PDF opens in Zotero at the respective note.[^8]

**Pros:** Bidirectional sync, import PDF annotations, more customizable  
**Cons:** More complex setup, steeper learning curve

---

## Approach 4: Fully Automated with Pandoc (Advanced)

**Best for:** Academic papers needing formatted output (Word docs, PDFs with specific styles).

### What Pandoc Does

Pandoc is a software that allows for converting text documents. It's mainly used by academics and supports a broad range of formats. In particular, it's able to generate a .docx document from a .md file with built-in citation processor.[^9]

### Setup

1. Install [Pandoc](https://pandoc.org/) on your machine
2. Create a folder structure: your Obsidian vault → writing folder → subfolders for citation-styles, templates, manuscripts.[^9]
3. Install the Pandoc plugin in Obsidian
4. Point it to your bibliography file (.bib from Zotero)
5. Select a citation style (.csl file downloaded from CSL styles repository)

### Using It

Write in your note with Pandoc citations:

```markdown
# My Research Paper

This finding was significant [@smith2020].

According to recent studies, [see @smith2020, pp. 45-50].

## Bibliography
```

When you export via Pandoc, it automatically:
- Formats all citations in your chosen style (APA, MLA, Chicago, IEEE, etc.)
- Generates a formatted bibliography
- Outputs as .docx, .pdf, .html, or other formats

### Citation Styles

You can change citation styles by pointing --csl to a different .csl file. For example, switching from APA to IEEE.[^10]

Download CSL styles from [Zotero Style Repository](https://www.zotero.org/styles).

**Pros:** Publication-ready output, supports all academic styles, precise control  
**Cons:** Requires terminal knowledge, learning curve for Pandoc syntax

---

## Comparison: Which Approach?

| Method | Setup Time | Scaling | Output Quality | Best For |
|--------|-----------|---------|---------------|---------
| Manual Footnotes | 5 min | 1-20 citations | Basic | Blog posts, quick notes |
| Zotero + Citations Plugin | 20 min | 5-500 citations | Good (with Pandoc) | Most academic writing |
| Zotero Integration | 30 min | 5-500 citations | Excellent | Complex research with PDF annotations |
| Pandoc Full Setup | 45 min | 50+ citations | Publication-ready | Formal academic papers, dissertations |

---

## Key Workflows & Tips

### Using Citation Keys

Use the citation key provided by Better BibTeX in Zotero settings. Typically configure the citation key to be the first author and year: "Smith-2020". You can set this up in Better BibTeX settings by providing auth+"-"+year in the Citation Key Formula field.[^11]

### Keeping Bibliography Updated

After setup, you should now be able to search your references from within Obsidian.[^5]

For dynamic updates: In Better BibTeX settings, select "On Change" option in the Automatic Export tab to keep your .bib file always in sync with Zotero.[^5]

### Combining Footnotes + Zotero

You can use Footnote Shortcut with Zotero Integration: bind quick footnotes to Alt+0 and Alt+-, then use a Zotero Integration citation format template to insert citations inline.[^12]

### For Casual Citations (Without Zotero)

Obsidian natively only supports footnotes. The upside is simplicity — Obsidian supports the footnote syntax everywhere. The downside is that you have to manually format each citation.[^10]

---

## Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Citations plugin can't find .bib file | Wrong path in settings | Copy full file path: `/Users/name/Vault/references/library.bib` |
| Better BibTeX not exporting keys | Plugin not installed | Download from [retorque.re](https://retorque.re/zotero-better-bibtex/), drag to Zotero |
| Pandoc citations not formatting | .csl style missing | Download from [Zotero Styles](https://www.zotero.org/styles) and place in citation-styles folder |
| Bibliography not generating | Missing `@references` section | Add a section with `# Bibliography` or `# References` heading at document end |

---

## Recommended Plugin Stack for 2026

For most academic writers:

1. **[Better BibTeX](https://retorque.re/zotero-better-bibtex/)** — Zotero plugin for stable citation keys
2. **[Obsidian Citations](https://github.com/hans/obsidian-citation-plugin)** — Search and insert citations
3. **[Footnote Shortcut](https://community.obsidian.md/plugins/obsidian-footnotes)** — Quick footnotes when needed
4. **[Obsidian Pandoc](https://github.com/OliverBalfour/obsidian-pandoc)** — Export formatted documents

For power users with heavy PDF annotation workflows:

1. **[Better BibTeX](https://retorque.re/zotero-better-bibtex/)**
2. **[Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration)** — Import annotations + citations
3. **[Pandoc](https://pandoc.org/)** — Convert to publication-ready formats

---

## Alternative & Extended Plugins

- **[Citation Extended](https://community.obsidian.md/plugins/citation-extended)** — Multi-file .bib support, Readwise API integration
- **[Pandoc Reference List](https://community.obsidian.md/plugins/obsidian-pandoc-reference-list)** — Display formatted references in sidebar
- **[ZotLit](https://github.com/sem-1/zotlit)** — Create literature notes, insert citations, annotate PDFs without leaving vault
- **[Highlightr](https://github.com/chetachiezikeuzor/Highlightr-Plugin)** — Helps with quote formatting and pasting

---

## Resources & Guides

### Official Documentation

- [Pandoc Manual - Citations](https://pandoc.org/MANUAL.html#citations)
- [Better BibTeX Documentation](https://retorque.re/zotero-better-bibtex/)
- [Obsidian Citations Plugin GitHub](https://github.com/hans/obsidian-citation-plugin)
- [Zotero Integration Plugin](https://github.com/mgmeyers/obsidian-zotero-integration)

### Step-by-Step Guides

- [The Definitive Guide to Academic Writing with Obsidian and Pandoc](https://paul-stewens.com/blog/2026/academic-writing-obsidian-pandoc/) — Full setup walkthrough
- [How I Add Citations in Obsidian Notes: Manual to Fully Automated](https://blog.shuvangkardas.com/obsidian-note-add-references-or-cite-source-automatically) — Three approaches compared
- [Using Zotero with Obsidian: Step-by-step guide](https://citationstyler.com/en/knowledge/how-to-use-zotero-with-obsidian-knowledge-management/) — Visual setup guide
- [How to Connect Zotero and Obsidian for the Ultimate PhD Workflow](https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/) — PhD-specific workflow
- [Obsidian and Zotero Integration](https://www.marianamontes.me/post/obsidian-and-zotero/) — Better BibTeX + Citations deep dive
- [Obsidian Pandoc Academic Word Doc Guide](https://github.com/evolve2k/obsidian-pandoc-academic-word-doc-guide) — Convert to Word with full formatting

### Community Templates & Tools

- [Obsidian Pandoc Templates](https://github.com/universvm/obsidian-pandoc-templates) — Ready-to-use templates for academic documents
- [Connecting Zotero and Obsidian with ZotLit + Templates](https://effortlessacademic.com/connecting-zotero-and-obsidian-with-the-zotlit-plugin-templates/) — Modern annotation workflow
- [Markdown Citation Syntax Tutorial](https://guidest.com/markdown/citation/) — Pandoc citation mechanics
- [Obsidian's Footnote View Annotation Stack](https://medium.com/a-voice-in-the-conversation/obsidians-footnote-view-annotation-stack-167feed0b56e) — Fast annotation workflow

### Video Tutorials

- [How To Use Citations Plugin In Obsidian](https://www.youtube.com/watch?v=y_SOEvrru-w) — Visual walkthrough (December 2025)

---

## How to Use This Guide

1. **Writing casual notes?** Use **Approach 1: Manual Footnotes** with Footnote Shortcut plugin
2. **Regular academic writing with Zotero?** Use **Approach 2: Zotero + Citations Plugin** (20 min setup, worth it)
3. **Heavy PDF research with annotations?** Use **Approach 3: Zotero Integration Plugin** for syncing
4. **Publishing formal papers?** Combine **Approach 2 + 4** for Zotero + Pandoc export to formatted Word/PDF

---

## Next Steps

1. **Choose your approach** based on your research volume and output needs
2. **If using Zotero:** Install [Better BibTeX](https://retorque.re/zotero-better-bibtex/) first, then export your library
3. **Install your plugins:** Start with Citations or Zotero Integration (or both)
4. **Test with one paper:** Create a test note, insert 5-10 citations, verify formatting
5. **Set up export workflow:** If using Pandoc, follow [Paul Stewens' guide](https://paul-stewens.com/blog/2026/academic-writing-obsidian-pandoc/) for complete setup
6. **Customize citation keys:** In Better BibTeX settings, set format to `auth+"-"+year` for readable keys like "Smith-2020"

Once set up, you'll save hours on every paper. The friction is only at the beginning.

---

## Footnotes

[^1]: Pandoc supports multiple citation styles (APA, MLA, Chicago, IEEE, etc.) for academic formatting
[^2]: Markdown Citation Syntax Tutorial - https://guidest.com/markdown/citation/
[^3]: Footnote Shortcut - Obsidian Plugin - https://community.obsidian.md/plugins/obsidian-footnotes
[^4]: Quick Tip: Footnotes in Obsidian - https://obsidian.rocks/footnotes-in-obsidian/
[^5]: Citations - Obsidian Plugin - https://community.obsidian.md/plugins/obsidian-citation-plugin
[^6]: How to Connect Zotero and Obsidian for the Ultimate PhD Workflow - https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/
[^7]: Zotero Integration - Obsidian Plugin - https://community.obsidian.md/plugins/obsidian-zotero-desktop-connector
[^8]: Using Zotero with Obsidian: Step-by-step guide - https://citationstyler.com/en/knowledge/how-to-use-zotero-with-obsidian-knowledge-management/
[^9]: The Definitive Guide to Academic Writing with Obsidian and Pandoc - https://paul-stewens.com/blog/2026/academic-writing-obsidian-pandoc/
[^10]: Markdown Citation Syntax Tutorial - https://guidest.com/markdown/citation/
[^11]: Connecting Zotero and Obsidian with the ZotLit Plugin + Templates - https://effortlessacademic.com/connecting-zotero-and-obsidian-with-the-zotlit-plugin-templates/
[^12]: Footnotes with Zotero Integration - https://forum.obsidian.md/t/footnotes-with-zotero-integration/88498
