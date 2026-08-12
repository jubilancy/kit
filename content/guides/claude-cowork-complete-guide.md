---
title: "Claude Cowork Complete Course"
source: "https://www.simplifyingcomplexity.tech/p/claude-cowork-masterclass"
author:
  - "[[Alvaro Cintas]]"
published: 2026-04-12
created: 2026-07-03
description: "The complete guide to the AI agent every knowledge worker needs to master right now. Discover the complete guide to Claude Cowork, the AI agent every knowledge worker needs to master. Learn how to set up, use, and automate tasks with Cowork."
tags: [ai-tools, productivity-software, artificial-intelligence, automation-tools, cowork-guide, claude-code, ai-agent, knowledge-workers, technical-guide, clippings]
---


```yaml
SEO Title (50-65 chars)
Mastering Claude Cowork: The Ultimate Guide for Knowledge Workers


Slug
claude-cowork-complete-guide

Meta Description (140-160 chars)
Discover the complete guide to Claude Cowork, the AI agent every knowledge worker needs to master. Learn how to set up, use, and automate tasks with Cowork.


Primary keyword:
claude cowork
Related keywords (LSI)
ai productivity
claude code
automation machine
knowledge worker tools
cowork tutorial
ai agent software
technical productivity
Suggested H2 outline
Introduction to Claude Cowork
Setup and Overview of Cowork
File Access and Projects in Cowork
Connectors and MCP in Cowork
Skills and Automation in Cowork
Plugins and Scheduled Tasks in Cowork
Copy outline
```
# ==Claude Cowork Complete Course==

==The complete guide to the AI agent every knowledge worker needs to master right now.==

![Alvaro Cintas](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/user/profile_picture/d020cf71-dee6-4e38-9afc-8597d4bdec18/Definitiva.png)

[Alvaro Cintas](https://www.simplifyingcomplexity.tech/authors/alvaro-cintas)

[Apr 12, 2026](https://www.simplifyingcomplexity.tech/p/claude-cowork-masterclass#)

•

11 min read

The engineers already have Claude Code.

It changed how they build. Completely. They don't write code the same way anymore. They don't think about software the same way anymore.

And for months, the rest of us, the marketers, the founders, the ops people, the sales teams, watched from the sidelines.

That changes with Claude Cowork.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/2fffa0b5-49fc-417a-b3e5-3e02efb266fe/budfhveufh.png)

Claude Cowork is Claude Code for people who don't code. And if you're reading this thinking "I've opened Cowork before, it looked like a chat," you're not using it. Not really.

This is the guide I wish I had on day one. Every feature. Every setup step. Every first prompt.

Here's what we're going to cover:

1. **Setup & Overview**: what Cowork actually is, and how to install it correctly
    
2. **File Access & Projects**: the most important concept most people ignore
    
3. **Connectors & MCP**: how to connect Cowork to everything you use
    
4. **Skills**: the feature that turns Cowork from a chatbot into an automation machine
    
5. **Plugins**: bundled sets of skills, connectors, and commands packaged together into a specialist.
    
6. **Scheduled Tasks**: Cowork working on autopilot while you're not there
    

I also did a full breakdown video that complements well this guide:

Now let's start.

## **1. Setup & Overview**

#### **What Cowork actually is (in plain terms):**

The regular Claude chat is a question-and-answer machine. You ask. It responds. That's the whole thing.

Cowork is an AI agent. It takes action. It reads your actual files. It writes back to them. It connects to your tools. It can spin up other AI instances to do work in parallel while you watch.

Think of it this way:

- **Claude Chat** = a smart assistant sitting across a desk, answering questions
    
- **Claude Cowork** = that same assistant, now with access to your computer, your inbox, your calendar, and your entire file system
    

The interface looks almost identical. Under the hood, it's a completely different tool.

(Claude Code, if you've heard of it, works similarly but is designed more for engineering tasks and it’s overall harder to understand without a technical background).

#### **How to install Cowork:**

1. Go to [claude.com/download](https://claude.com/download?utm_campaign=claude-cowork-complete-course&utm_medium=referral&utm_source=www.simplifyingcomplexity.tech). Download the desktop app.
    
2. You need a Pro account ($20/month). It's worth it.
    
3. Open the app. You'll see three tabs at the top: **Chat**, **Cowork,** and **Code**.
    
4. Click **Cowork**.
    
5. Select a folder from your computer. (More on this in the next section,  this step is critical.)
    
6. Make sure to select **Opus 4.6 + Extended Thinking** as your model. That's the smartest one. Don't skip this.
    

#### **Your first prompt in Cowork:**

Start like this every time:

“I want to [TASK] so that [SUCCESS CRITERIA]. The folder I've given you access to contains: [briefly describe what's in it, e.g. "a mix of PDF receipts and a blank Excel template"].

Before doing anything, show me your plan step by step and ask me any clarifying questions. Only proceed once I've approved the plan.”

The key move is forcing Cowork to ask you questions before it does anything. It generates a form. You click answers. It executes with context instead of guessing.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/0efcef18-e75e-4710-9d5a-a3c34abe319b/image.png)

This one change produces better outputs than any prompt hack I've ever tried.

## **2. File Access & Projects**

#### **This is the most important thing to understand in Cowork.**

Every bad AI output has the same root cause: not enough context.

Cowork solves this differently from every other AI tool. When you select a folder, Claude gets direct access to every file inside it. It can read them, create new files, edit existing ones, and save outputs, all inside that same folder.

Here's why this matters:

In regular Claude chat, every conversation starts from zero. You have to re-explain who you are, what you're working on, and what good output looks like.

Every. Single. Time.

In Cowork with a proper folder setup, you open a chat and Claude already knows everything. It read your files before you typed a word.

#### **The files you want in your folder:**

Start with these (I’ll show you how to create them a few lines below). You can build more over time.

- **about-me.md**: Who you are, what you do, how you like to communicate
    
- **icp.md**: Who your audience or customer is, in detail
    
- **voice-personality.md**: Your tone of voice, phrases you use, things you never say
    
- **writing-examples.md**: 2-3 examples of your best past work
    
- **what-we-do.md**: A description of your business or role
    

You don't need all of these on day one. Start with one or two. The system improves as you add more.

#### **How to create your own md. files:**

You don't have to write them from scratch. Ask Claude to do it:

“Turn everything you need to know about [TOPIC] into a .md reference file.   
  
You can ask me questions if needed.  
  
Include: core rules and principles, if/then decision logic, reusable templates with placeholders, mistakes to avoid, and good vs. bad examples.  
  
Use XML tags to organize it. Be exhaustive but scannable. Save it as a .md file.”

One of these files, done properly, is worth more than a hundred prompts.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/3ad957a9-6854-4927-abcf-932846e6ed03/image.png)

#### **Projects:**

If you have multiple types of work, marketing tasks, sales tasks, client work, Projects let you keep them separated with their own context.

A Project is a saved workspace with:

- A connected folder
    
- Specific instructions for how Claude should behave inside it
    
- A memory of past sessions and decisions
    
- Scheduled tasks linked to it (more on this later)
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/2e2f462b-b9e4-4065-8a38-00c65c8629b6/image.png)

**How to set one up:**

1. Go to the sidebar. Click **Projects**. Click **Create New Project**.
    
2. Choose your folder (the one with your context files for this type of work).
    
3. Give it a name. Something like "Newsletter" or "Sales Outreach."
    
4. Write instructions for how Claude should work inside it. 
    

Example:

You are my newsletter assistant. Help me with any newsletter-related task, ideation, angle selection, drafting, editing, and repurposing.  
  
You have access to my folder with: past newsletters (for tone reference), my ICP doc, my voice personality guide, and my newsletter strategy doc.  
  
Always mimic my tone from the examples. Never sound generic. Always read the reference files before executing.

5. Click Create.
    

Now every time you open that Project, Claude already knows the context. You just talk.

## **3. Connectors, MCP & Browser Use**

#### **What connectors are:**

Connectors let Cowork take actions inside your other tools. Not just read about them. Act inside them.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/53982f02-ab4a-40f8-a7c8-5f7b1dccbb06/image.png)

Connected to Gmail? Claude can check your inbox, draft replies, and send emails. Connected to Notion? It can create pages, update databases, and pull in content. Connected to your CRM? It can research leads, log notes, and update deal stages.

#### **How to install native connectors:**

1. Open Claude Cowork. Go to **Settings > Connectors**.
    
2. Click **Browse Connectors**.
    
3. Search for your tool (Notion, Slack, Gmail, Fireflies, Apollo, etc.).
    
4. Click it. Log in. Done.
    

One tip: go to each connector's settings and set it to **"Always Allow."** Otherwise Claude will ask for permission every time it uses it. Gets annoying fast.

#### **What to do if your tool isn't listed:**

Most tools that aren't natively in Cowork have an **MCP server** available.

MCP (Model Context Protocol) is just a package that gives Claude structured access to a tool's features. All the native connectors are MCP servers under the hood,  they're just pre-installed for you.

For tools not on the list:

1. Google **"[your tool name] MCP server."** A documentation page will usually appear.
    
2. Follow the setup instructions. Usually one of two methods:
    
    - Copy a remote server URL → go to Connectors → click the **+** icon → Add Custom Connector → paste it in.
        
    - Or update a JSON config file. (Paste the config into Claude and ask it to update the JSON for you. It'll do it.)
        
    
3. Restart Cowork. The connector appears.
    

If your tool has no MCP server at all, ask Claude to build one:

Use the MCP builder skill. Build me an MCP server for [tool name]. Give me step-by-step instructions to install it.

#### **Browser Use and Computer Use:**

Cowork can also open a browser and interact with websites. Or, in extreme cases, take control of your entire computer.

Here's my honest take: **use these as a last resort, not a first move.**

Browser use is token-heavy, slow, and error-prone. Computer use is even more so.

The order of preference:

1. Native connector (fastest, most reliable)
    
2. MCP server (almost as good)
    
3. Build a custom MCP (one-time investment, worth it for tools you use daily)
    
4. Browser use (only if none of the above exist)
    
5. Computer use (only for very specific local software workflows)
    

One exception: if you need to scrape data from social media sites that block Claude's direct access (LinkedIn, Instagram, Facebook), use a tool called [Apify](https://github.com/apify?utm_campaign=claude-cowork-complete-course&utm_medium=referral&utm_source=www.simplifyingcomplexity.tech). It's a connector with scrapers for every platform Claude can't reach. Install it in Connectors. If you do any kind of lead research or content monitoring, you'll use it constantly.

#### **Dispatch:**

One more thing, you can trigger Cowork from your phone.

Install the Claude app on your phone. Connect to the same account. Enable **Dispatch** in settings. Now you can send Cowork tasks while you're away from your computer and the agents work on your desktop in the background.

"Check my emails and flag anything urgent."

Sent from my phone. Handled on my computer. By the time I'm back at my desk, it's done.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/905b1d20-cabc-4442-bd2b-f5a17e99db2f/Screenshot_2026-04-12_at_8.57.33_PM.png)

## **4. Skills**

#### **Skills are the most important feature to master in Cowork.**

Skills are folders of instructions, context files, and resources that your AI agent can use to complete a specific process, more accurately, more efficiently, and more consistently than a one-off prompt ever could.

At the core is a [skill.md](https://skill.md/?utm_campaign=claude-cowork-complete-course&utm_medium=referral&utm_source=www.simplifyingcomplexity.tech) file. Think of it as an SOP. A step-by-step instruction sheet for how to do a specific process.

Around that core, you can add:

- **Reference files**: your voice guide, ICP, strategy docs, output examples
    
- **MCP instructions**: how Claude should use a specific tool inside this skill
    
- **Assets**: example outputs, brand templates, images
    
- **Scripts**: Python or JS functions for things like API calls
    

The reason you can give one agent access to thousands of skills without it getting confused: a feature called **progressive disclosure**. Only the skill's name and description live in memory at all times. The full skill only loads when it's triggered. Reference files only load when the skill calls for them.

One agent. Unlimited skills. No context overload.

#### **How to build your first skill:**

**Step 1: Think before you prompt.**

Most people skip this. It's the biggest mistake. Before you build anything, write down:

- What is the exact step-by-step process you want Claude to follow?
    
- At which steps do you want human input? (Where should it ask you questions vs. execute automatically?)
    
- What reference files or context does it need at each step?
    
- What does a good output actually look like?
    

Spend 10 minutes here. It will save you hours of iteration later.

**Step 2: Gather your reference files.**

For content and copywriting skills, the files that make the biggest difference are:

- **Voice personality**: your tone attributes, signature phrases, what you never say
    
- **ICP**: who you're writing for, their pain points, how they think
    
- **Newsletter / content examples**: 3-5 examples of your best past work (this is the most important one)
    
- **What we do**: a description of your business, your offer, your CTA
    
- **Writing framework**: how you structure your pieces, what makes them work
    

If you don't have these yet, create them now with Claude using the prompt from Section 2.

**Step 3: Build the skill using this framework:**

Create a skill with the following guidelines:  
  
NAME: [Name of the skill]  
  
TRIGGER: [When should this skill activate? e.g., "whenever I say I want to write a newsletter"]  
  
GOAL: [One sentence. What does this skill produce?]Example: A ready-to-publish newsletter issue written in my exact tone of voice.  
  
CONNECTORS/TOOLS NEEDED: [List any MCPs or connectors it should use]  
  
Example: Use the Apify YouTube transcript scraper to extract video transcripts.  
  
REFERENCE FILES TO INCLUDE:  
- [file name]: [what it contains and when to read it]  
  
PROCESS (step by step):  
Step 1: Ask the user [what you need to know first]  
Step 2: [What to do next]…  
  
Note which steps should use AskUserQuestion (human in the loop) and which should execute automatically.  
  
RULES:  
- Always read reference files before executing, make this an obligatory step  
- Always give the user multiple variations to choose from, not one-off outputs…  
  
PROGRESSIVE UPDATE: Every time the user says "don't do X anymore," automatically update the rules section of the skill so it doesn't repeat the mistake.

**Step 4: Test it, then improve it.**

Skills are never finished. The more you use them, the better they get.

After building, ask Claude:

Please test this skill.  
  
I want to optimize it for [one specific thing, e.g., matching my tone of voice].  
  
Test criteria:  
- Does it follow the reference files?  
- Is the sentence structure similar to my examples?  
- Does it include personal stories or specific details?  
  
Run 3 variations using [specific input]. Score each one.

It spins up sub-agents to run the tests in parallel, then reports back with scores and suggestions. You tell it what to fix. It updates the skill. You run the test again.

A couple of rounds of this and you have a skill that's genuinely good.

Just to give you a example, I created this Humanizer Skill that removes that typical AI-generated writing patterns from text.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/76637412-49e0-47a6-9b75-70d70a6fae6f/image.png)

## **5. Plugins**

#### **What plugins are:**

Plugins are bundled sets of skills, connectors, and commands packaged together into a specialist.

Install the Sales plugin and Cowork becomes a sales expert, it knows how to do account research, call prep, outreach drafting, and pipeline review.

Install the Marketing plugin and it knows content creation, campaign planning, competitor analysis.

Anthropic has built over 10 official plugins across the most common business functions: Sales, Marketing, Legal, Finance, Data, Product, Customer Support, and more.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/fc355c6a-e8c0-480a-80e7-9e0511eb5815/image.png)

#### **How to install a plugin:**

1. Open Cowork. Go to **Customize** in the settings.
    
2. Click **Browse Plugins**.
    
3. Pick the one relevant to your work.
    
4. Click **Install**.
    
5. Type / in any chat to see the slash commands it added.
    

#### **Where plugins get really powerful: building your own:**

Anthropic's plugins are built to be general. They don't know your process, your ICP, or your tone of voice.

Building your own is the real unlock.

The approach I recommend:

1. Build individual skills first (following Section 4).
    
2. Once you have 3-5 skills for a type of work, bundle them into a plugin.
    
3. Add commands that chain multiple skills together into one trigger.
    

To build a plugin:

“Please create a new plugin called [NAME].  
  
Include the following skills: [list them]  
  
Include the following connectors: [list them]  
  
Create a command called [COMMAND NAME] that triggers all of these skills in sequence when I type /[command].  
  
The command should: [describe the full workflow]”

Claude builds it. Then you can either install it directly or ask for a zip file to share with your team.

#### **Why this matters at scale:**

One person's expertise, built into a skill, can now be used by everyone in the company. Your best salesperson's outreach process becomes a skill. Your best marketer's content framework becomes a plugin. Every new hire gets access to that on day one.

## **6. Scheduled Tasks**

#### **The feature that turns Cowork into an automation platform:**

Scheduled tasks let you set a prompt or skill to run automatically, every hour, every day, every week, at a specific time.

When your desktop app is open, the task fires. Cowork executes the skill, does the work, and the results are waiting for you.

Here are the ones I run:

- **Daily at 7am:** Check unread emails, categorize by urgency, flag action items
    
- **Daily end of day:** Go through Fireflies meeting transcripts, extract action items, add them to Notion
    
- **Every day at 5pm:** Check for failed customer payments, draft follow-up emails, save as Gmail drafts
    
- **Monthly on the 1st:** Pull Stripe data, cross-reference with my spreadsheet, prep my accounting overview
    
- **Every 48 hours:** Scan my content source list for new relevant articles, build an HTML report of newsletter ideas
    

Every one of these used to require my attention. Now they happen while I'm elsewhere.

#### **How to set up a scheduled task:**

**Option 1: From the sidebar:**

1. Go to the **Scheduled** section in the sidebar.
    
2. Click **Add New Task**.
    
3. Give it a name, write the prompt (or point it to a skill), set the time and frequency.
    
4. Select the folder it should access.
    
5. Save.
    

**Option 2: From a chat:** Type _/schedule_ in any chat and describe the task.

**Option 3: When creating a skill:** Tell Claude to schedule it at the same time. Example:

Create a skill for [PROCESS]. Schedule it to run every day at 7am.

It builds the skill and adds it to the scheduled section automatically.

#### **One important limitation to know:**

Scheduled tasks only run when your Claude desktop app is open. If the app is closed when the task should fire, it runs immediately when you next open it.

For truly autonomous, always-on automations, especially non-human-in-the-loop ones, a platform like n8n or Make is still the better option. Cowork's scheduling is best for workflows where you want to be available to review or guide the output.

## **Your first 30 minutes with Cowork.**

Open your calendar. Book this time now. Come back to this guide when you're ready.

**Minutes 0-5: Install.**

→ Go to [**claude.com/download**](https://claude.com/download?utm_campaign=claude-cowork-complete-course&utm_medium=referral&utm_source=www.simplifyingcomplexity.tech). Download the desktop app. 

→ Sign in. Get a Pro account ($20/month). 

→ Open the app. Click the **Cowork** tab.

**Minutes 5-15: Build your first context file.**

→ Open a text editor. Create a new file called **about-me.md**. 

→ Write three things: what you do, who you serve, one example of work you're proud of. 

→ Save it somewhere accessible.

→ Now open a new Cowork session. Select the folder that file is in. 

→ Paste this prompt:

Read the about-me.md file completely.

Based on it, I want you to create a second file called voice-personality.md

that captures my tone of voice, my communication style, phrases I commonly use, and things I'd never say. Ask me questions first using AskUserQuestion to get enough detail. Then create the file.

→ Answer its questions. Let it build your voice file. Now you have two context documents.

**Minutes 15-25: Do one real task.**

→ Pick something you actually need to do this week. 

→ Paste this prompt:

I want to [YOUR TASK] so that [WHAT SUCCESS LOOKS LIKE].

First, read the files in my folder.

Then ask me clarifying questions using AskUserQuestion before you start.

Only execute once we've aligned.

→ Answer its questions. See what it produces.

**Minutes 25-30: Build your first skill.**

→ If the output was good, say:

Save this as a skill. Name it [TASK NAME]. It should trigger whenever I mention

I want to [task]. Follow the exact process we just did. Include the reference

files we used. Add a progressive update rule so it improves every time I use it.

→ Done. Your first skill exists. Come back to it tomorrow and make it better.

## **The real reason to start now.**

The value of this setup isn't in the features.

It's in the context that builds over time.

Every skill you refine, every reference file you add, every decision you log, it all compounds. The AI agent you and your team have after 6 months of using this is fundamentally more capable than the one you start with on day one.

And if your competitor starts 6 months after you, they're not just behind on a tool. They're behind on 6 months of accumulated intelligence that makes the tool actually work well.

The context is the moat. Start building it.

_If this guide helped you, be that person for someone who's still starting from scratch every chat. Share it with them._

_See you in the next one :)_

#### Simplifying AI

Master AI in 5 minutes daily without the overwhelm. Join thousands getting practical tutorials, trending news, and tools that actually matter.

Join Free

[](https://twitter.com/dr_cintas)[](https://www.linkedin.com/in/alvaro-cintas/)[](https://www.instagram.com/drcintas/)[](https://www.tiktok.com/dr_cintas)[](https://www.youtube.com/@dr_cintas)[](https://www.threads.com/@drcintas)

© 2026 Simplifying AI Newsletter.

[Powered by beehiiv](https://www.beehiiv.com/?utm_source=simplifying_ai&utm_medium=footer)

1

[](https://www.simplifyingcomplexity.tech/)

[](https://www.simplifyingcomplexity.tech/upgrade)

[](https://www.simplifyingcomplexity.tech/tags)

[](https://www.simplifyingcomplexity.tech/authors)

[](https://www.simplifyingcomplexity.tech/premium)
