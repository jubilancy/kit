> ## Documentation Index
> Fetch the complete documentation index at: https://agentskills.io/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent Skills Overview

> A standardized way to give AI agents new capabilities and expertise.
https://agentskills.io/clients

## **Creating Your Own Skills**

Computer includes a suite of built-in skills out of the box. However, if these don't match your specific workflow, you can create custom skills to tailor Perplexity's behavior for your own workflows. There are two ways to do this:

[![](https://www.perplexity.ai/help-center/assets/img/a23c4fe59d_Screenshot_2026-03-03_at_09_53_27.png)](https://www.perplexity.ai/help-center/assets/img/a23c4fe59d_Screenshot_2026-03-03_at_09_53_27.png)

### **Create with Perplexity**

1. In **Computer**, go to the **Skills** page
    
2. Click **Create skill**
    
3. Select **Create with Perplexity**
    
4. Describe the task you want the skill to handle — Perplexity will help you build the skill through a conversation
    

This is the easiest way to get started and doesn't require any technical knowledge.

### **Upload a Skill**

If you prefer to import existing skills, you can upload them directly:

1. In **Computer**, go to the **Skills** page
    
2. Click **Create skill**
    
3. Select **Upload a skill**
    
4. Drag and drop your file or click to browse
    

#### **File requirements:**

- Upload a `.zip` file with a `SKILL.md` file at the root level, or upload a `.md` file directly
    
- `SKILL.md` must include a YAML frontmatter block with a **name** and **description**
    
- Maximum file size: **10 MB**
    

#### **Example [SKILL.md](http://skill.md/) format:**

--- name: weekly-summary description: Summarize the week's key events into a concise executive briefing. Use when asked for a weekly summary, week-in-review, or status update. --- # Weekly Summary  ## Instructions 1. Gather the most important events and updates from the past week 2. Organize by theme or priority 3. Write a concise summary with key takeaways 4. Include action items if applicable

### **Tips for writing effective skills:**

- The **description** field is critical — Perplexity uses it to decide when to activate the skill, so include keywords and trigger phrases (e.g., "Use when asked to create a presentation")
    
- The **name** must be lowercase with hyphens only (e.g., `my-custom-skill`), between 1 and 64 characters
    
- Include clear step-by-step instructions in the body of the file
    
- Add examples of expected inputs and outputs whenever possible

