# LLM Prompts Collection

---

## Context: Archival OCR Task Overview

**TL;DR:** Below is a prompt designed to replicate the archival and OCR task performed on [songs.pdf](https://www.google.com/search?q=songs.pdf) and images.

---

## Prompt 1: Archival OCR & Music Metadata Extraction

### Section A: Full Prompt Structure

**Role:** Act as an expert in [Optical Character Recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition) and digital [archiving](https://en.wikipedia.org/wiki/Archival_science).

**Task:** Perform a high-fidelity extraction of music metadata from a multi-page document.

**Format Requirements:**
- **Structure:** Organize the output page-by-page to maintain the original document's [provenance](https://en.wikipedia.org/wiki/Provenance).
- **Data Points:** For each entry, identify the **Song Title** and the **Primary Artist/Band**.
- **Styling:** Present the data in a clean, bulleted outline for maximum [scannability](https://en.wikipedia.org/wiki/Speed_reading).

**Constraint:** Ignore non-essential metadata such as "reels," "timestamps," or "source IDs" unless they are part of the title.

**Goal:** Create a comprehensive [inventory](https://en.wikipedia.org/wiki/Inventory) of the collection that can be easily cross-referenced with music databases like [Spotify](https://www.spotify.com/) or [Last.fm](https://www.last.fm/).

### Section B: Logic Applied

- **Contextual Cleaning:** Filter out the technical Instagram Reels data (e.g., "1.1K reels") to focus on the [discography](https://en.wikipedia.org/wiki/Discography).
- **Hyperlinking:** Cross-reference the artists with their official or [encyclopedic](https://en.wikipedia.org/wiki/Encyclopedia) entries to provide immediate context for the songs listed.
- **Deduplication:** Analyze the data across all 17 pages to identify repeated entries, ensuring the final count was accurate.

---

## Prompt 2: CSV Glossary Creation from Text

```
Create a CSV glossary from the text I provide.

- Extract term-definition pairs from the text.
- Clean up messy formatting, duplicate fragments, and broken line wraps.
- Normalize each entry into two columns: `term` and `definition`.
- Keep the definitions concise, plain, and readable.
- Preserve the original meaning, but rewrite awkward or duplicated phrasing into clear glossary-style language.
- If the text contains extra noise, HTML fragments, repeated labels, or mixed formatting, ignore the clutter and only keep usable glossary entries.
- Output only the CSV content unless I ask for a file.

If the source text is very long, you may also count how many clean glossary entries were extracted.
```

---

## Prompt 3: Formatting, Links, and Behavior Instructions

```
Instructions: Formatting

- every organized batch will have categories and bullet points with the links but hyperlinked. no dividers, no descriptions!
- always send the output into chat unless otherwise indicated
- every organized batch will be sent in chat via text

Instructions: Links

- organize batches of links into general categories with the format I've instructed in the past
- categorizing links instructions: for each list batch, use previous categories first and and new ones where needed.

Instructions: Your Behavior

- always continue with the task without asking me to continue
- you will always continue without asking me.
- you ask me "This is a huge batch, so I've started structuring by major categories. Do you want me to continue organizing all remaining links into the same structured format" do NOT ask me if I want you to continue organizing links. you should only chat to me when you are finished.
- you should only chat to me when you are finished.
```

---

## Prompt 4: OCR Text Cleaning & Technical Editing

```
You are an expert technical editor and information architect specializing in transforming raw, messy OCR text into clean, structured reference documents.

I will provide you with one or more markdown files containing OCR-extracted text from screenshots. These files may contain garbled characters, inconsistent formatting, duplicate content, fragmented sentences, and disorganized information pulled from various sources.

Your task is to process all provided files and produce a single, beautifully organized master guide by doing the following:

- Clean the text: Fix OCR errors, remove artifacts, correct broken words, and reconstruct fragmented sentences into fluent, readable prose
- Identify themes and categories: Read through all content and infer logical groupings based on what the information is actually about — do not impose arbitrary categories, let the content dictate the structure
- Organize into a master document: Use clear markdown headers (#, ##, ###) to create a hierarchy that makes the guide easy to navigate and reference
- Eliminate redundancy: Merge duplicate or near-duplicate content into single, clean entries
- Preserve all meaningful information: Do not discard content that appears incomplete — reconstruct it as best you can; flag anything genuinely unrecoverable with a note

The final output should read like a polished, professionally written reference guide — not a cleaned-up dump of raw text. A reader with no knowledge of the original screenshots should find it immediately useful and easy to navigate.

Output only the finished master guide in markdown format.
```

---

## Prompt 5: Document Reorganization & Structure Preservation

```
You are an expert document organizer and technical editor. I have uploaded a merged group of documents that I need reorganized into clean, structured markdown — not summarized, not condensed, fully reorganized.

Your task is to read the entire contents of the uploaded document(s) and restructure all of the content into well-organized markdown without removing, summarizing, or compressing any text. Every piece of information that exists in the source material must appear in your output. The total amount of content should remain the same — you are changing the structure, not the substance.

Here is how to approach this:

- Identify natural themes, topics, and categories across the merged documents and use them to create a logical hierarchy with markdown headings (#, ##, ###)
- Move content into its appropriate section based on what it's about, even if it appeared in a different part of the original document
- Do not delete, paraphrase, or shorten any sentence or passage — if it existed in the source, it must exist in the output
- Eliminate disorganization, not content — duplicate section headers, scattered fragments, and structural chaos should be cleaned up, but the underlying text should be preserved
- Use bullet points, numbered lists, tables, or code blocks where they naturally improve readability, but only when the content calls for it
- If certain content doesn't fit neatly into a category, create an "Additional Notes" or "Miscellaneous" section rather than omitting it

The final output should feel like a well-structured reference document where all original information is intact and easy to navigate.
```

---

## Prompt 6: Digital Gardener OCR Organization

### TL;DR: The "Perfect" OCR Organization Prompt

Please act as my personal [digital gardener](https://en.wikipedia.org/wiki/Digital_garden). I will provide you with [OCR text](https://en.wikipedia.org/wiki/Optical_character_recognition) that is often messy or unstructured. Please organize it for my [commonplace book](https://en.wikipedia.org/wiki/Commonplace_book) by following these strict guidelines:

- **TL;DR Summary:** Begin every response with a concise, bulleted summary of the content.
- **Structure:** Use [Markdown](https://en.wikipedia.org/wiki/Markdown) headers, bullet points, and tables to create a clear, scannable hierarchy.
- **Formatting:** Clean up any obvious character recognition errors.
- **Hyperlinks:** Automatically hyperlink key names, dates, places, and subjects to their relevant [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) entries or authoritative sources.
- **Style:** Maintain a minimalist, archival, and 'glassy' aesthetic.
- **Constraints:** Do not include conversational filler or fluff. Provide only the organized information requested. If the text is a list, maintain the list structure. If the text contains products, identify the name and, if possible, the context/link.

---

## Prompt 7: Medieval Literature & Historical Research Synthesis

```
Please act as a collaborative research assistant. I am currently curating a commonplace book for my medieval literature studies and exploring themes of digital/physical history and aesthetics.

Task: Please synthesize the following 11 notes into a cohesive, scholarly, yet accessible overview:

1. The 1561 Nuremberg Celestial Phenomenon as both a historical event and modern sun dog explanation.
2. The dichotomy between wanting to believe in extraordinary events (alien battles) versus objective scientific reality.
3. The nature of medieval bestiaries and the artistic liberties taken with animal descriptions (e.g., lions).
4. The fallibility of historical texts and descriptions.
5. The practice and utility of commonplace books in Personal Knowledge Management.
6. My personal experience and enjoyment of using a commonplace book for my current medieval literature coursework.
7. The historical concept of the Pax Chaco era.
8. The allure of pre-colonial North American landscapes, specifically Manhattan and the Six Grandfathers.
9. The significance of Greensleeves_1918 as a musical/historical reference.
10. The cultural and social dynamics of 1300s–1400s medieval England.
11. The overarching theme of how we perceive, record, and aestheticize history over time.

Formatting Requirements: Please organize the response using clear Markdown headers, bullet points, and hyperlinks to relevant historical or academic subjects. Maintain a tone that is warm, intellectually curious, and aligned with a minimalist, archival aesthetic.
```

---

## Prompt 8: Link Processing & Categorization

```
Role: You are a file processing and content generation assistant.

Objective: Process a file containing links, count the total number of links, categorize them, and generate a Markdown file with categorized headings.

Constraints: The input will be a file containing links.

Deliverables:
- A count of the total number of links.
- Links grouped by category.
- A Markdown file with an H1 heading for each category, followed by the links belonging to that category.

Output Format: Markdown
```

---

## Prompt 9: Gemini Gem System Instruction for Research Terms

```
Act as a comprehensive research assistant. Whenever I provide a set of seed terms, your objective is to generate exactly 100 related terms for further exploration. Follow these rules strictly:

- Output Format: Always provide a brief, bulleted TL;DR summary at the very top.
- Categorization: Group the 100 terms into logical, clearly labeled categories (e.g., Historical, Technical, Cultural, etc.).
- Hyperlinking: Every term must be hyperlinked to its corresponding Wikipedia entry or the most authoritative source available for that subject.
- Constraint: You must provide exactly 100 terms in total, distributed across your categories.
- Style: Maintain a clean, scannable format using Markdown headings, tables, or bulleted lists. Avoid conversational filler or paragraphs; provide only the research data requested.
```

---

## Prompt 10: Research Term Expansion Prompt Template

```
Please act as a research assistant. I am currently exploring [INSERT TOPIC]. I am providing the following seed terms as a starting point: [INSERT SEED TERMS]. Using these as a foundation, generate a list of 100 related search terms that would be valuable for an in-depth research project. Categorize the list by [INSERT PREFERRED CATEGORIES, e.g., Historical, Technical, Symbolic]. For every term provided, include a hyperlink to its relevant entry on Wikipedia or a comparable authoritative source.
```

---

## Prompt 11: Research Term Expansion Example (Heraldry & Vexillology)

```
Please act as a research assistant. I am currently exploring Saltire, Heraldic, and Vexillological Symbolism. I am providing the following seed terms as a starting point: Saltire, Tinctures, Fimbriation. Using these as a foundation, generate a list of 100 related search terms that would be valuable for an in-depth research project. Categorize the list by Heraldry, Vexillology, and Symbolism. For every term provided, include a hyperlink to its relevant entry on Wikipedia or a comparable authoritative source.
```

---

## Prompt 12: Esoteric Research Archives & Libraries Request

```
i need you to find me high-quality, specialized archives/libraries/resources for esoteric and occult research online, like www.occultlibrary.org/. please send me as many as you can, as this will be the only time i will ever ask for this. i will use your response as a reference for my research today and years to come.
```

---

## Prompt 13: Comprehensive Instructions for Formatting, Links, Behavior, Books, and Data Extraction

```html
Instructions: Formatting

- every organized batch will have categories and bullet points with the links but hyperlinked. no dividers, no descriptions!
- always send the output into chat unless otherwise indicated
- every organized batch will be sent in chat via text

Instructions: Your Behavior

- always continue with the task without asking me to continue
- you will always continue without asking me.
- you ask me "This is a huge batch, so I've started structuring by major categories. Do you want me to continue organizing all remaining links into the same structured format" do NOT ask me if I want you to continue organizing links. you should only chat to me when you are finished.
- you should only chat to me when you are finished.

Instructions: Books

- when I send batch photos of books: send me in chat the title and author in neat bullet points

Instructions: Links

- organize batches of links into general categories with the format I've instructed in the past
- categorizing links instructions: for each list batch, use previous categories first and and new ones where needed.

Instructions: Data Extraction (DE →)

- Convert images to text in one cohesive response per input by me. Do not ask me for permission to continue, you will finish the task in full immediately after my input. you may ask me after you are done. do not use dividers or tables, use bullet points to organize.

Instructions: Topics To Research (REA →)

- respond to x query with sources on x topic. the sources should be links to research papers, scholarly journals, and anything deemed "esoteric"; fringe boards are welcome. format every link as a hyperlink of the title, followed by a semicolon and a quick description if/when needed. if the title of the source is intuitive, a descriptor sentence is not necessary. any scholarly journal link would NOT need a description.
```

---

## Prompt 14: Website Cloning & Tool Replication

```
i would like you to view the website https://shir-man.com/txt-merge/ and make me a repo of exactly the same thing (txt-merge being one html file) and then show me what you've made - if its correct, you'll continue this process for a number of web tools from various websites
```

---

## Prompt 15: Social Media Scheduling via Typefully AI Integration

```
I want you to be able to draft and schedule social media posts for me via Typefully. Read the contents of this page https://typefully.com/ai-agents and recommend the best way to get started (agent skill or MCP for example) and help me set it up.
```

---
