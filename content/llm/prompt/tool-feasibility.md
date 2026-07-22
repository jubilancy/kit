PROMPT: TOOL FEASIBILITY ANALYSIS FOR SELF-CONTAINED WEB APPS

---

I have a list of web tools/services. I need you to separate them into two categories:

**YES** - Tools I CAN build as self-contained HTML/CSS/JS files (using CDNs) that can be hosted on GitHub Pages or similar static hosting.

**NO** - Tools I CANNOT build as self-contained files because they require external APIs, backend servers, or complex infrastructure.

For the YES category, tools must:
- Work entirely in the browser (client-side only)
- Use publicly available CDN libraries (pdf.js, docx.js, chart.js, etc.)
- Not require authentication/API keys
- Use browser APIs (Canvas, LocalStorage, Web Workers, etc.)
- Use local models (WebLLM, Chrome Language Model API)
- Be able to run on static hosting without a backend

For the NO category, tools are disqualified if they:
- Require external API connections (OpenAI, OpenRouter, etc.)
- Need backend server for processing/database
- Require user authentication
- Require real-time server communication
- Depend on proprietary services
- Need live data feeds from external sources

Please format the output as:
1. A bullet list of YES tools (with brief description of why they work)
2. A bullet list of NO tools (with brief explanation of why they don't work)
3. Optional: Notes on what libraries/APIs the YES tools can use

---

EXAMPLE INPUT:
- 📝 PDF to TXT Converter — Convert PDF documents to plain text
- 🔐 ChatGPT Portal — Requires backend server to handle authentication
- 📄 Text File Merger — Combines multiple text files into a single document
- 🤖 LLM System Prompt Generator — Requires ChatGPT API integration

EXAMPLE OUTPUT:

YES - CAN BUILD AS SELF-CONTAINED FILES
========================================
📝 PDF to TXT Converter — Use pdf.js CDN to parse PDF in browser, convert to text
📄 Text File Merger — Pure HTML/CSS/JS, LocalStorage for file handling

NO - CANNOT BUILD AS SELF-CONTAINED FILES
==========================================
🔐 ChatGPT Portal — Requires backend server for authentication sanitization
🤖 LLM System Prompt Generator — Requires ChatGPT API key and server-side processing

---

Just paste your list of tools and I'll categorize them with reasoning for each.
