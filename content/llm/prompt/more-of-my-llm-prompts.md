# music data formatter

```js
You are a music data formatter. I will provide you with a block of text containing song titles (which may be messy, unstructured, or mixed with other information), and your task is to extract and output a clean, numbered list where each entry clearly shows the **song title** and **artist name**.

If the artist is not explicitly mentioned in the input, use your knowledge to identify the most well-known artist associated with that song. If a song title is genuinely ambiguous or associated with multiple artists, list the most recognized version and note the ambiguity briefly.

Here is the text input:

"""
[PASTE SONG TITLES HERE]
"""
```


---
# Comment Formatter Script

```python
import re

def format_comments(raw_text):
    # Regex patterns for the specific metadata format
    date_pattern = r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{1,2},\s\d{4}'
    likes_pattern = r'^\d+$'
    
    lines = [line.strip() for line in raw_text.strip().split('\n') if line.strip()]
    formatted_output = []
    current_comment = []
    
    # Group raw lines into logical comment blocks
    blocks = []
    i = 0
    while i < len(lines):
        # Start a new block
        block = {
            "user": lines[i],
            "text": "",
            "date": "",
            "likes": "0"
        }
        
        # TikTok/Social dumps often repeat username; skip the duplicate if present
        if i + 1 < len(lines) and lines[i+1] == lines[i]:
            i += 1
            
        # Capture comment text
        if i + 1 < len(lines):
            block["text"] = lines[i+1]
            i += 1
            
        # Capture date
        if i + 1 < len(lines) and re.search(date_pattern, lines[i+1]):
            block["date"] = lines[i+1]
            i += 1
            
        # Capture likes
        if i + 1 < len(lines) and re.match(likes_pattern, lines[i+1]):
            block["likes"] = lines[i+1]
            i += 1
            
        blocks.append(block)
        i += 1

    # Simple logic for indentation: If a user is mentioned or if it follows a question, indent
    # For a true hierarchy, a more complex 'parent_id' check is needed if the data provides it
    for idx, b in enumerate(blocks):
        prefix = "* "
        # Basic heuristic: if the block is very short or follows a question/mention, indent it as a reply
        if idx > 0 and ("?" in blocks[idx-1]["text"] or "@" in b["text"]):
            prefix = "    * "
            
        entry = f"{prefix}**{b['user']}**: {b['text']} ({b['date']} | {b['likes']})"
        formatted_output.append(entry)
        
    return "\n".join(formatted_output)

# Example usage:
raw_data = """
prettybasedguy
That’s Scythian not toorkic
Apr 6, 2026
61
Melquiades Soldier
Movie name?
Apr 7, 2026
12
StonePebble
The universe of the manas
Apr 7, 2026
12
"""

print(f"## Comments ({len(raw_data.splitlines()) // 4})") # Rough estimate for header
print(format_comments(raw_data))
```

---

# raw markdown to JSON

Fetch the raw markdown from `https://raw.githubusercontent.com/sindresorhus/awesome/refs/heads/main/readme.md` and parse it into a JSON object with the following exact structure.

**Output format:**
```json
{
  "Category Name": [
    {
      "name": "Display Name",
      "url": "https://github.com/owner/repo",
      "repo": "owner/repo",
      "cate": "Category Name"
    }
  ]
}
```

```js Parse GitHub Markdown to JSON

**Parsing rules:**

1. **Categories** — `## Heading` lines are category keys. Skip these headings entirely: `Contents`, `License`, and any heading that advertises a product, app, or promotion (e.g. contains phrases like "Product Hunt", "Check out", "Supercharge", "Elevate your", "Lock Screen", "Hyperduck", "Color Picker").

2. **Entries** — Under each `## Heading`, find all list items (`- [Name](url)`) that link to a GitHub repo (`https://github.com/owner/repo`). For each:
   - `name`: the link text as written
   - `url`: the full GitHub URL, stripped of any `#readme` fragment
   - `repo`: `"owner/repo"` extracted from the URL path (first two path segments only — ignore any trailing path)
   - `cate`: the parent `## Heading` text exactly

3. **Sub-entries** — Some top-level list items are plain text labels (no link) or linked labels that contain a nested sub-list. For nested items `  - [Name](url)` under a parent `- Parent Name`, set `name` to `"Parent Name - Sub Name"` and use the sub-item's URL and repo.

4. **Non-GitHub URLs** — Skip any list item whose URL hostname is not `github.com`.

5. **Key order** — Preserve the order categories appear in the markdown.

6. **No extra fields** — Each entry has exactly four keys: `name`, `url`, `repo`, `cate`. Nothing else.

Output only the raw JSON object. No markdown fences, no explanation.
```


---


```js
You are an expert front-end developer. Build me a single self-contained HTML file that functions as a link-splitting tool with the following behavior:

**Input:** A textarea where I can paste any combination of markdown-style links `[Title](URL)` and/or HTML anchor tags `<a href="URL">Title</a>`.

**Output:** Two clearly labeled result boxes that appear after clicking a "Split" button:
- **URLs** — a plain list of all extracted URLs, one per line
- **Titles** — a plain list of all extracted anchor/link titles, one per line

Each output box should have a "Copy" button that copies its contents to the clipboard.

**Technical requirements:**
- Entirely self-contained — no external libraries, CDN links, or dependencies
- Parsing must handle both markdown `[Title](URL)` and HTML `<a href="...">Title</a>` formats, including mixed input in a single paste
- Preserve the order of links as they appear in the input
- Handle edge cases gracefully: extra whitespace, multiline input, malformed or partial links (skip silently)
- All logic in vanilla JS; no frameworks

The UI should be clean and functional — clear labels, readable fonts, sensible spacing. Prioritize correctness of parsing over visual polish.
```


---


```js
Draft a no-reply follow-up email
Second touch with a fresh angle, not a reminder
Tighten acceptance criteria
Add Given-When-Then scenarios covering edge cases and error states
Design a product experiment
Structure an A/B test with a falsifiable hypothesis and pre-set decision criteria
Frame a workshop invite
Calendar invite that sets purpose, expected outputs, and pre-work so attendees arrive prepared
Draft a BI report section
Cover KPI status, trends, and forward-looking signals in one section
Annotate a SQL query
Add comments that explain the why behind complex query logic
Document a data pipeline
Generate docstrings, usage examples, and a data flow guide for a Python pipeline
Build a production function
Clean, tested code with edge case handling from your spec
Debug broken code
Root cause analysis with traced execution path and targeted fix
Refactor existing code
Improved structure without behaviour changes or scope creep
Create unit test suite
Contract-based tests covering happy path, edge cases, and errors
Review a pull request
Prioritised feedback with must-fix, should-fix, and nit categories
Explain code to stakeholders
Jargon-free explanation that connects technical detail to business impact
Convert code across languages
Idiomatic translation that preserves behaviour in the target stack
Optimize a slow SQL query
Diagnosed bottleneck with targeted index or query fix
Craft a regex pattern
Annotated pattern verified against your example strings
Scaffold a new project
Runnable starter with config, wiring, and tests ready to go
Draft a project README
Zero-to-running guide with setup, usage, and working examples
Document an API endpoint
Complete endpoint contract with schemas, errors, and curl examples
Annotate code with docstrings
Intent-focused comments and IDE-ready docstrings for complex logic
Create an ops runbook
Step-by-step procedure with exact commands and verification checks
Document a service wiki page
Architecture, operations, and gotchas for onboarding and on-call
Describe a pull request
Reviewer-ready summary with context, risk areas, and test coverage
Draft an on-call runbook
Alert-specific triage with diagnostic commands and escalation paths
Design technical interview questions
Signal-rich questions with rubrics and follow-up probes
Plan engineer onboarding
Day-one to month-one guide with setup, milestones, and gotchas
```


--- 


```js
You are a software research specialist with deep knowledge of productivity tools, read-it-later apps, and annotation platforms. I want a comprehensive list of apps and platforms that meet ALL of the following criteria simultaneously:

1. **Social bookmarking, highlighting, and/or note-taking** — the core functionality must include at least highlighting or annotation of web content or documents
2. **Public username/profile page** — I must be able to share my highlights publicly via a profile or feed that others can view
3. **Readwise integration** — the app must natively integrate with Readwise (via direct connection, Readwise API, or official sync), so my highlights flow into Readwise
4. **Free import/export functionality** — I must be able to export my highlights/notes and import data without paying; this feature cannot be paywalled

For each app you list, provide:
- **App name** with website URL
- **Core function** (what type of content it handles — web pages, PDFs, ebooks, etc.)
- **How the social/sharing profile works**
- **How Readwise integration works** (native, API, workaround, etc.)
- **Export options available on the free tier**
- **Any notable limitations** relevant to my criteria

Be exhaustive. Include well-known tools (Hypothesis, Readwise Reader, Liner, Matter, Raindrop.io, Diigo, etc.) and lesser-known or niche platforms. If an app partially meets the criteria, still include it and clearly flag which requirement it fails or only partially satisfies. Do not omit apps simply because they are less popular. Organize the list from strongest match (meets all 4 criteria) to partial matches.
```


---


```js
You are an expert Cloudflare Workers developer specializing in full-stack edge deployments with KV storage. Your task is to build a complete, production-ready Cloudflare Worker that serves a personal quotes library.

**Requirements:**

**Data Format:**
The quotes are stored in Cloudflare KV as JSON. Design the KV structure to support thousands of quotes efficiently, with keys or values that allow alphabetical sorting by quote text or author.

**Public-Facing Display:**
- Serve a clean, readable HTML page listing all quotes in alphabetical order
- Fetch all quotes from KV and sort them alphabetically on the Worker side before rendering
- The UI should be minimal but polished — readable typography, no clutter

**Browser-Based CMS (Password-Protected):**
- A private `/admin` route accessible only via a hardcoded password or HTTP Basic Auth (since this is for personal use only)
- The CMS UI should render in the browser with a large textarea where I can paste a JSON payload to add or update quotes
- Support for bulk import via JSON paste (copy-paste the full JSON and submit)
- On submission, write the data to KV
- No external dependencies — everything should be self-contained in the Worker using plain HTML/CSS/JS served from the Worker itself

**Technical Constraints:**
- Single Worker file (`index.js` or `worker.js`) with all logic — no external npm packages required
- Include a `wrangler.toml` config template with KV namespace binding placeholders
- Handle KV pagination if the quote count exceeds KV's default list limits (use `list` with cursor support)
- Proper error handling for failed KV reads/writes
- All routes: `GET /` (public quotes list), `GET /admin` (CMS login/interface), `POST /admin` (handle JSON submission)

Deliver the complete, copy-paste-ready Worker code with inline comments explaining key sections, plus the `wrangler.toml` template and a brief setup note explaining how to bind the KV namespace and set the admin password.
```


---


```js
okay using your understanding of this chat and how i enjoy widgets/scripts/dynamic inserts in my site that are fun-cute-cool-useful-techie etc, please generate me your top 50 list of code snippets/inserts/widgets/cdns (like how i enjoy the confetti, and markdown tools, export tools, etc), scripts/github-workflows-to-fetch-into-my-site-for-cool-stuff/ etc. and make me a mega list of your top 50 things that i can implement . you dont need to generate all 50 codes/cdn link inserts. just a guide (format it like a github awesome list) of the 50 most fun, cool, etc.
```


---


```markdown
Here is a prompt you can save and reuse:

---

> I have attached [N] files. Each file is a terminal session log or configuration file dump related to a specific tool or program. Please do the following:
> 
> 1. **Read and analyze** each attached file carefully to understand what tool or program it documents, what commands were run, what errors occurred, and what the final outcome was.
>     
> 
> 2. **Create one polished Markdown reference guide per file**, written as standalone documentation for my personal reference website. Each guide should include:
>     
>     - An **Overview** section explaining what the tool is and what it does
>         
>     - An **Installation** section with step-by-step instructions derived from the session (including any errors encountered and the correct workaround)
>         
>     - **Usage** instructions with syntax, arguments, and flags in a clean Markdown table
>         
>     - **Practical examples** and common workflows as code blocks
>         
>     - A **Notes / Tips** section with gotchas and best practices
>         
>     - Any tool-specific sections that make sense (e.g., Extensions, Configuration Breakdown, Custom Functions)
>         
>     
> 
> 3. **Write each guide for an intermediate developer audience** — use technical terms but briefly explain them inline where needed.
>     
> 
> 4. **Output three separate `.md` files** (one per tool) and share them as downloadable artifacts.
>     
> 
> The guides should be self-contained — someone reading them should not need the original terminal log to understand the tool.

---

You can adjust the number of files and the audience level as needed. The key instruction that drives the quality is step 2's bullet list — that's what shaped the structure of each guide.
```

---
