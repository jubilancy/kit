---
title: Document Reformatting Prompt
description: Reusable prompt for converting messy files into professional reference guides for Quartz digital gardens
tags: [prompt, template, documentation, reference-guides]
created: 2026-06-02
---

# 📝 Document Reformatting Prompt

Use this prompt when sending Claude files that need cleaning up and reformatting into professional reference guides.

---

## Basic Prompt Template

```
I'm sending you a [FILE TYPE: messy notes/guide/documentation/research] file. 
Please reformat it into a professional reference guide for my Quartz digital garden.

Please:
1. Clean up the content (remove duplicates, fix broken links, remove malformed text)
2. Create a clear, logical structure with table of contents
3. Organize content into well-labeled sections and subsections
4. Add proper YAML frontmatter with metadata
5. Fix all formatting (code blocks, lists, tables, links)
6. Add visual hierarchy with headers, bold text, and emoji
7. Include practical examples and code snippets where relevant
8. Add pro tips, best practices, or troubleshooting sections
9. Create a summary table if applicable
10. Save as a clean, ready-to-use Markdown file

Keep the original content and intent, but make it professional and scannable.
```

---

## Detailed Prompt Version (More Specific)

```
I'm sending you a [FILE TYPE] file that contains [BRIEF DESCRIPTION OF CONTENT].

The file is currently [DESCRIBE ISSUES: messy/has duplicates/poorly formatted/mixed with broken links].

Please reformat it into a professional reference guide optimized for my Quartz digital garden.

Specifically, I'd like you to:

STRUCTURE & ORGANIZATION:
- Create a clear table of contents with anchor links
- Organize into logical sections with descriptive headers
- Remove duplicate content
- Fix broken or malformed links

FORMATTING IMPROVEMENTS:
- Clean up syntax and remove garbled text
- Create proper code blocks with syntax highlighting (if code is present)
- Format lists consistently (bullets, numbers, or tables)
- Use tables for comparisons or parameter references
- Add proper emphasis (bold, italics, emoji) for visual hierarchy

CONTENT ENHANCEMENT:
- Keep all original information intact
- Add brief explanations where context is missing
- Include practical examples
- Add pro tips or best practices sections
- Create troubleshooting guides if applicable
- Add quick reference sections

METADATA & FORMATTING:
- Add YAML frontmatter with:
  - title
  - description
  - tags (relevant to the content)
  - created/updated dates
- Use proper Markdown syntax
- Make it scannable for quick reference

Save the final file as a clean, professional Markdown document ready for my digital garden.
```

---

## Advanced Prompt Version (With Custom Requirements)

```
I'm sending you a [FILE TYPE] file about [TOPIC].

Current issues:
- [Issue 1: e.g., "Lots of duplicate content from multiple sources"]
- [Issue 2: e.g., "Broken link formatting with nested brackets"]
- [Issue 3: e.g., "Mixed structured and unstructured content"]

I'd like this reformatted as a professional reference guide with these specific requirements:

PRIMARY GOALS:
1. [Goal 1: e.g., "Make it the authoritative reference I can quickly search"]
2. [Goal 2: e.g., "Include practical code examples I can copy-paste"]
3. [Goal 3: e.g., "Create a cheat sheet section for quick lookups"]

STRUCTURE PREFERENCES:
- Include: [What to definitely keep - e.g., "all code snippets, practical tips"]
- Enhance: [What to add value to - e.g., "explanations of why/when to use each tool"]
- Combine: [What to consolidate - e.g., "similar sections into comparison tables"]

SPECIAL SECTIONS TO ADD:
- [If applicable: e.g., "Quick Reference Table", "Troubleshooting Guide", "Pro Tips"]
- [If applicable: e.g., "Best Practices", "Real-world Examples", "Common Mistakes"]

OUTPUT FORMAT:
- Markdown file with YAML frontmatter
- Professional and scannable (visual hierarchy, emoji, formatting)
- Ready for Quartz digital garden
- All links working and properly formatted

Target audience: [Who will use this - e.g., "myself as a quick reference", "share with others learning this topic"]
```

---

## Short Prompt (Quick Version)

```
Format this file into a professional reference guide for my Quartz digital garden.

Clean it up, remove duplicates, organize into sections with a table of contents, 
fix all formatting, add YAML frontmatter, and make it scannable and professional.

Keep all original content but make it beautiful and easy to reference.
```

---

## File-Specific Prompts

### For Messy Notes/Research Files

```
I'm sending you research/notes that are disorganized. Please transform it into 
a professional reference guide by:
- Removing duplicate information
- Creating clear sections with logical flow
- Fixing all formatting issues
- Adding a table of contents
- Including practical examples
- Making it scannable for quick lookup
```

### For Documentation Files

```
This file is documentation that needs cleaning up for my digital garden. Please:
- Keep all technical accuracy
- Remove broken/malformed links
- Create a clear structure with sections
- Add a quick reference or cheat sheet
- Include code examples where applicable
- Format for easy scanning
```

### For Guide/Tutorial Files

```
This is a guide that needs professional reformatting. Please:
- Organize into logical learning sections
- Remove redundancy
- Add step-by-step clarity where needed
- Create quick reference tables
- Include pro tips and best practices
- Make it both readable and skimmable
```

### For Code/Technical Files

```
This file contains code and technical information. Please reformat it as a 
professional reference by:
- Organizing into logical topic sections
- Creating proper code blocks with syntax highlighting
- Adding explanations for code snippets
- Creating a quick reference or cheat sheet
- Including troubleshooting guides
- Making it easy to search and scan
```

---

## Example Usage

**What You Send:**
```
"Here's my messy Bear Blog notes file - can you clean it up?"
[Sends: bear.md]
```

**Use This Prompt:**
```
I'm sending you a messy Bear Blog documentation file. Please reformat it into 
a professional reference guide for my Quartz digital garden.

Clean up all the broken link formatting, remove duplicates, organize into clear 
sections with a table of contents, fix code examples, and make it scannable and 
professional while keeping all the original information.

Include pro tips and best practices, and add a quick reference table for the 
blog attributes section.
```

**What You Get:**
A professional, clean reference guide ready to use in your digital garden.

---

## Tips for Best Results

### Be Specific
- Describe what's broken or messy about the file
- Mention specific issues (duplicates, broken links, mixed content)
- Note if there are code examples that need highlighting

### Provide Context
- Explain what the content is about
- Mention how you'll use it (personal reference, share with others)
- Note the target audience if relevant

### State Priorities
- If code examples are important, mention it
- If you want a certain section emphasized, specify
- If you need specific types of tables or comparisons, describe them

### Give Examples
- Show an example of what you want the final result to look like
- Reference how you want it organized (by difficulty, by category, etc.)
- Mention any specific sections you definitely want included

---

## Variations by Content Type

### Technical/Code Documentation
```
Format this technical documentation into a professional reference guide with:
- Proper code block formatting and syntax highlighting
- Clear parameter/option tables
- Troubleshooting sections
- Pro tips for common use cases
- Quick reference cheat sheet
```

### Tutorial/Guide Content
```
Convert this guide into a structured reference with:
- Clear step-by-step sections
- Quick lookup table of contents
- Before/after examples
- Pro tips and best practices
- Common mistakes/troubleshooting
```

### Collection/Resource Lists
```
Transform this list into an organized reference with:
- Categorized sections
- Comparison/pricing table
- Best-use recommendations for each item
- Quick reference guide
- Resources and links section
```

### Meeting Notes/Research
```
Consolidate these notes into a professional reference guide with:
- Duplicate content removed
- Organized by topic/theme
- Key takeaways highlighted
- Action items or next steps if applicable
- Clean formatting throughout
```

---

## What Claude Will Do

When you use this prompt, Claude will:

1. ✅ Review your file for issues (duplicates, formatting, broken links)
2. ✅ Create logical structure with table of contents
3. ✅ Organize content into scannable sections
4. ✅ Fix all formatting (code blocks, lists, links, syntax)
5. ✅ Add YAML frontmatter for Quartz compatibility
6. ✅ Enhance readability with visual hierarchy
7. ✅ Create reference tables where applicable
8. ✅ Add practical tips and best practices
9. ✅ Preserve original content while improving presentation
10. ✅ Save as professional Markdown file ready to use

---

## Save This Prompt

Keep this document in your digital garden and reference it anytime you:
- Have messy notes to clean up
- Want to convert research into a guide
- Need to reformat documentation
- Have code that needs explanation
- Want to create a reference resource

**Pro Tip:** Copy the specific prompt version that matches your file type and customize it with your specific needs. The more specific you are, the better the result!

---

**Last Updated:** June 2, 2026  
**Use Case:** Professional document reformatting and reference guide creation  
**Best For:** Quartz digital gardens and personal knowledge management systems
