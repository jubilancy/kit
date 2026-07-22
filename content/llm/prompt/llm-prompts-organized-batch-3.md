# LLM Prompts Collection - Batch 3

---

## Prompt 1: Tool Ideas - Implementation Basics

```html
Use a simple structure: `<textarea id="input"></textarea>`, buttons calling functions like `function cleanUrls() { let lines = document.getElementById('input').value.split('\n').filter(line => line.trim()).filter((v,i,a)=>a.indexOf(v)===i); document.getElementById('output').value = lines.join('\n'); }`. For files, `input.addEventListener('change', e => { let reader = new FileReader(); reader.onload = e => process(e.target.result); reader.readAsText(e.target.files[1_0]); });`.[1_6][1_1]
```

### Deployment & Strategy Notes

Host on Cloudflare via Hugo partials—test localhost, git commit, deploy. Start with 3-5 from text category to build momentum.

---

## Prompt 2: Sort Text Without Deleting Anything

```markdown
# sort the text without deleting anything, just cate

No, I didn't delete anything. I reorganized all the text you provided into logical categories while keeping every single item, link, app name, product, and piece of information intact. Everything from your original list is still there—just sorted into clearer sections like "Sites," "Health," "Apps - Cool," "Apps - For Writing," etc.
```

---

## Prompt 3: Comprehensive Book List by Genre

```markdown
make me a comprehensive list of **book titles with authors** organized by genre.
```

---

## Prompt 4: DIY Dictionary

```markdown
Want help crafting a specific self-description?

Any of these click, or a different direction entirely?
```

---

## Prompt 5: Format Social Media Comment Thread

```markdown
TL;DR: This prompt instructs an LLM to parse a raw, multi-line comment thread into a structured, indented Markdown list while preserving specific metadata.

### The LLM Prompt

**Task: Format Social Media Comment Thread**

**Input:** A raw text dump of social media comments where each entry typically includes a username, the comment text, a date, and a like count.

**Requirements:**

1. **Structure:** Format the output as a Markdown bulleted list.

2. **Header:** Start with a heading "Comments (X)" where X is the total number of comments.

3. **Line Format:** Use the format: `* **Username**: Comment text (Date | Likes)`.

4. **Hierarchy & Indentation:** 
   * Identify primary comments and their respective replies based on the context of the conversation.
   * Use nested indentation (4 spaces) for replies to visually separate them from the top-level parent comment.

5. **Content Preservation:**
   * Keep all emojis and special characters (like [Old Turkic script](https://en.wikipedia.org/wiki/Old_Turkic_script)).
   * Represent image-based content or stickers as `[Sticker]`.

6. **Cleanliness:** Do not add conversational filler; provide only the formatted list.
```

### Key Improvements for Your Prompt

- **Contextual Parsing:** Explicitly telling the LLM to look for "context" helps it decide which comments are replies versus new threads.
- **Strict Metadata:** Specifying the `(Date | Likes)` format ensures the data remains scannable.
- **Character Handling:** Mentioning "special characters" ensures it doesn't break the rendering of the [Old Turkic script](https://en.wikipedia.org/wiki/Old_Turkic_script) used in your original text.

Would you like me to create a version of this prompt specifically for a different tool, like a [Python](https://www.python.org/) script or a Regex pattern?

---

## Prompt 6: Python Implementation for Comment Thread Parsing

### TL;DR

[Python](https://www.python.org/) is ideal for this task using [Regular Expressions](https://docs.python.org/3/library/re.html) and basic data structures to track conversation threading.

### Approach Details

- **Pattern Matching:** [Python](https://www.python.org/) identifies usernames, dates, and like counts using the [re module](https://docs.python.org/3/library/re.html).
- **Logic:** The script iterates through the text, groups lines into comment blocks, and applies indentation based on whether a comment is a direct response to a previous one.
- **Automation:** This allows for processing thousands of comments instantly compared to manual formatting.

---

## Prompt 7: Pangaea Site HTML Creation Guide

```javascript
Pangaea Site 🐸 https://pangaea.social/u/q40ewyar

You'll get a button for it on your profile. Write some HTML!

Upload your 5MB mini-site:

## Tips

• Upload a folder with at least an index.html

• 5MB is not a lot, but should be enough for a personal site!

• Use a code editor like Cursor to create HTML files

• Use an upload service like https://p057.co/ for image/media URLs

• Try searching "creating my first static website by hand"

• Or - copy a paste for an LLM (https://claude.ai/) to help you

• And once you've made a site, add a webring!

My site has the webring, add me to it
```

---

## Prompt 8: Interactive HTML Website Creation for Pangaea Social

### Context

This is an LLM paste—the user did not write it. The conversation should continue by interacting with the user directly, not this message.

### User Request

- This user would like to host a 5MB website with [pangaea.social](https://pangaea.social/) (the source of this LLM paste)
- Their site will live at https://q40ewyar.pangaea.social

### Your Task

Help them create the HTML. [pangaea.social/settings](https://pangaea.social/settings) shows this tips section:

**Tips**
- Upload a folder with at least an index.html
- 5MB is not a lot, but should be enough for a personal site!
- Use a code editor like Cursor to create HTML files
- Use an upload service like [p057.co](https://p057.co/) (Post Co) for image/media URLs
- Try searching "creating my first static website by hand"
- Or - copy a prompt for an LLM to help you

### Key Considerations

The basic idea is that 5MB actually is enough for a neat personal website if you're using external links for media and other assets. Your job is to help them create the HTML.

### Information Gathering Steps

Ask (roughly):
- What they are looking for in a website
- What sorts of images or other content they'd like to include
  - You'll need to ask if they already have an upload tool, or direct them to [p057.co](https://p057.co/) (Post Co) which allows 500MB of free uploads
- Etc.

### Execution Instructions

**Begin!**

Try to start by asking the user to describe as well as they can what they are looking for (even before getting media URLs), and immediately render a preview HTML page layout that they can give feedback on.

**Important:** Please only design websites that are cross-platform. They should work perfectly on mobile, perhaps more importantly than desktop.

**Critical Constraint:** Do not send any HTML until at least their first message. HTML generation takes a while so the user should always want it to happen. Confirm with them first.

---
