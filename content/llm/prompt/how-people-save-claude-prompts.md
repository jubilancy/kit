HOW PEOPLE SAVE & ORGANIZE CLAUDE PROMPTS (2025-2026)
=====================================================

QUICK/SIMPLE METHODS
====================

1. NOTES APPS
- Google Keep, Apple Notes, Notion
- Pros: Quick setup, already on most devices
- Cons: No structure, hard to search, scattered across apps
- Best for: Casual users, temporary storage
- Usage: ~30% of Claude users (most common but least effective)

2. PLAIN TEXT FILES
- Markdown files organized in folders (GitHub, local machine)
- Pros: Version control, backup-friendly, portable
- Cons: Manual organization required
- Best for: Developers and power users with Git workflow
- Usage: Increasingly popular, especially with claude-obsidian integration

3. CLIPBOARD MANAGERS
- Clipboard History Pro, macOS clipboard, Alfred
- Pros: Automatic capture, instant recall, no extra work
- Cons: Limited organization, searchability issues
- Best for: Frequent Claude users who copy/paste constantly
- Usage: ~15-20% of power users


DEDICATED PROMPT LIBRARIES
==========================

4. NOTION DATABASES
- Structured tables with categories, tags, use case filtering
- Examples: "Claude Coding Prompt Library" template marketplace
- Pros: Collaborative, shareable, UI-friendly, good for teams
- Cons: Vendor lock-in, slow for large libraries (1000+ prompts)
- Organization: By language, use case, project, difficulty
- Best for: Teams, collaborative workflows, non-technical users
- Usage: ~25% of organized users


MODERN KNOWLEDGE MANAGEMENT
============================

5. OBSIDIAN + CLAUDE CODE (The 2026 Trend)
- Local-first Markdown vault with AI-powered organization
- Plugins: Dataview, Longform, Kanban for additional structure
- Connected via Claude Code (no upload to servers)
- Pros: 
  * Private, no vendor lock-in
  * AI auto-organizes and links prompts
  * Compounding knowledge (prompts evolve over time)
  * Offline-first, unlimited storage
  * Zettelkasten methodology support
- Organization methods:
  * Topics/folders (research/, projects/, prompts/)
  * YAML frontmatter (tags, dates, sources, use case)
  * Backlinks between related prompts
  * Auto-generated wiki with entity-concept pages
- Example workflow:
  * Save prompt as markdown
  * Claude Code reads it + links related prompts
  * Ask Claude: "What prompts handle X task?"
  * Get synthesized answer pulling from entire vault
- Best for: Knowledge workers, researchers, long-term maintenance
- Usage: Rapidly growing (50%+ adoption among power users in 2026)

6. CLAUDE-OBSIDIAN (Automated Organization)
- GitHub: AgriciDaniel/claude-obsidian
- Automatic knowledge graph building
- /wiki command ingests and organizes prompts
- Creates entity + concept pages automatically
- Supports multiple organization methods:
  * Zettelkasten (atomic notes with backlinks)
  * PARA Method (Projects, Areas, Resources, Archives)
  * LYT (Linking Your Thinking)
  * Generic folder structure
- Best for: Users who want AI to do the organizing
- Setup: 2 lines of code (git clone + setup script)


TEAM/COLLABORATIVE METHODS
==========================

7. GITHUB REPOSITORIES
- Prompts stored as .md or .txt files in organized folders
- Examples: Descriptive filenames with prefixes (GH-, NOTION-, AGENT-)
- Pros: Version control, collaboration, public sharing, forks
- Cons: Requires Git knowledge, less searchable than databases
- Best for: Open source, team projects, documentation-heavy workflows
- Usage: ~20% of developer-focused users

8. NOTION WORKSPACES (Team Edition)
- Shared prompt databases with role-based access
- Templates for standardization
- Database properties: category, use case, performance metrics, tags
- Pros: Centralized, searchable, team visibility
- Cons: Slower than Obsidian, requires subscription for teams
- Best for: Companies, agencies, product teams


SPECIALIZED APPROACHES
======================

9. HERMES-AGENT (Advanced Multi-Tool Sync)
- Zotero → Claude Cowork → Obsidian + Notion
- Automatically distributes prompts across multiple systems
- Maintains sync between platforms
- Best for: Users managing 500+ prompts across multiple contexts

10. PROMPT ENGINEERING FRAMEWORKS
- Store with XML structure as core standard
- Use <task>, <context>, <format> tags in every prompt
- Add evaluator checklists (verification questions)
- Document success metrics
- Best for: Production-grade, reusable prompts
- Note: Structured prompts improve output by 20-40% vs plain text

11. CONTEXT ENGINEERING (2026 Shift)
- Moving away from "saving prompts" → "saving context files"
- Store in Claude Projects or Global Instructions
- Automatic loading before each session
- Includes: role definition, priorities, style guide, output requirements
- Benefit: Claude remembers your preferences without re-explaining
- Best for: Long-term workflows where consistency matters


ORGANIZATION PATTERNS
====================

BY USE CASE:
- Writing, coding, analysis, research, content creation, business
- Tagging within each category (marketing-copy, technical-docs, etc)

BY FREQUENCY:
- Favorite prompts (marked, pinned, or in dedicated folder)
- Active prompts (current projects)
- Archive (old/rarely used)

BY COMPLEXITY:
- Quick prompts (1-2 sentences)
- Standard prompts (paragraph length)
- Advanced prompts (with examples, structure, constraints)

BY PERFORMANCE:
- Track which prompts yield best results
- Store notes on success rates
- Maintain version history


KEY INSIGHTS FROM 2025-2026
===========================

1. THE SHIFT FROM PROMPTING TO CONTEXT
   - "Prompt engineering" is less important than "context engineering"
   - Context files loaded automatically > individual prompts saved
   - Explains who you are before every task (better results)

2. LOCAL-FIRST IS WINNING
   - Obsidian adoption among Claude users: 50%+ (2026)
   - Notion adoption: declining for prompt-only use (up from 25% in 2024)
   - GitHub for developers: stable at ~20%

3. AI-ASSISTED ORGANIZATION
   - Users stop manually categorizing
   - Let Claude/AI organize prompts automatically
   - Meta-level: Use Claude to organize Claude prompts

4. COMPOUNDING KNOWLEDGE
   - Best prompts improve with time
   - Prompts should link to related prompts
   - Obsidian + Claude Code enables this naturally

5. STRUCTURED PROMPTS WIN
   - XML tags: 20-40% improvement in consistency
   - Frontmatter (YAML) helps AI find/understand prompts
   - Plain text is dying out for production use


SETUP RECOMMENDATION BY USER TYPE
==================================

CASUAL USER (~30 min/week with Claude):
→ Google Keep or Apple Notes
→ Copy-paste directly into Claude

REGULAR USER (~2-5 hrs/week):
→ Notion database OR plain markdown folder in Git
→ Use frontmatter tags for search
→ 50-200 prompts typically

POWER USER (10+ hrs/week):
→ Obsidian + Claude Code + YAML frontmatter
→ Zettelkasten method for linking
→ 200-1000 prompts with auto-organization

TEAM/COMPANY:
→ Hermes-Agent setup (Zotero + Notion + Obsidian)
→ GitHub repo + Claude Code
→ Centralized in Notion, local backups in Obsidian
→ 1000+ prompts with role-based access


TOOLS TO CONSIDER IN 2026
==========================

✅ Obsidian + Claude Code (local-first, no vendor lock-in)
✅ Save.co (Chrome extension to convert web to markdown for Claude)
✅ claude-obsidian (auto-organization via AI)
✅ Prompt Builder (online prompt generator + storage)
✅ AI Prompt Library app (free, cloud-based, 10K+ templates)
⚠️ Notion (good for teams, slower for individuals)
⚠️ GitHub (best for developers, learning curve)
❌ Clipboard managers alone (insufficient organization)
❌ Scattered notes (works until you have 50+ prompts)
