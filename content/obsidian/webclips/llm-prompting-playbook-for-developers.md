---
title: Prompt Engineering
source: https://www.simplifyingcomplexity.tech/how-to-prompt
author:
  - "[[techspresso links]]"
published:
created: 2026-07-03
description: "The #1 AI newsletter for busy professionals. Daily tutorials, trending news, and tools explained simply. Trusted by 50,000+ subscribers. Subscribe for free." 
---

```yaml
chatgpt promptingai prompting techniqueslanguage model optimizationzero-shot learningrole-based prompting
tags:
  - clippings, llm, ai, prompting, chatgpt, gemini, language-models
```

## **The Prompting Playbook I Keep Coming Back To**

You know: ChatGPT (and Gemini, Claude, etc.) is only as good as the prompt you give it. Vague prompts → vague answers. Polite-sounding replies that miss the mark.

Ask for a tweet → you get a textbook. Ask for a script → you get a TED Talk.

Prompting is a skill.

And once you learn how to guide the AI properly, with structure, tone, and intent, you start getting outputs that sound like you. That feels usable on the first try.

This short playbook fixes that. It’s structured, practical, and loaded with copy-paste-ready prompts.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### Let’s Understand How LLMs Actually Work 

LLMs don’t "understand" like a human. They predict the next word, then the next, and so on. Your prompt sets the stage for those guesses.

That's it.

LLMs are high-speed **guessers**.

And your prompt? It’s setting the stage for what gets guessed.

You just need to understand how to communicate with it clearly.

This is the prompt format I return to again and again:

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/3a9f5b7f-ad02-440c-8a98-724c1e279c8d/image.png)

Let’s see it in action.

⚠️ **Basic prompt**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/a89e5e5e-3fc4-4dc3-bf06-915c5070a74a/image.png)

It works, but it’s generic. The AI guesses your intent. Often wrong.

✅ **Structured Prompt**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/acc8e7e2-631a-4e1d-bc96-02f527e30c7f/image.png)

**Why better?** We gave role, length, audience cue, and format, You’ve removed the guesswork.

You engineered the prompt.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

## **Now, The Actual Prompting Techniques**

Here’s where it gets fun.

#### **1. Zero-Shot Prompting**

Zero-shot prompting means that the prompt used to interact with the model won't contain examples or demonstrations. The zero-shot prompt directly instructs the model to perform a task without any additional examples to steer it.

**When to use:** Fast simple tasks where style / audience / format don't matter: translations, short factual queries, quick conversions (units, dates), or when you want the model's default interpretation.

→ Don’t rely on it for writing or creative work.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/e5bed0cd-4c02-402f-898c-3d28c471e648/image.png)

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **2. Role Prompting**

One of the most powerful techniques is role-based prompting. Instead of just requesting information, you define a specific role for the AI.

**When to use:** When tone, vocabulary, authority level, or perspective matter, e.g., marketing copy, technical docs, beginner explanations, or personality-driven social posts.

#### **Basic vs Advanced Approach:**

🟥 **Basic Prompt**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/9d740016-8179-487f-95c5-e3d67652723a/image.png)

🟩 **Advanced Role-Based Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/fc99de1b-c155-4bf1-8b1b-63297d933ca8/image.png)

Check it out → [https://chatgpt.com/share/68b2b529-f3a4-8006-b2f6-49968e3119e0](https://chatgpt.com/share/68b2b529-f3a4-8006-b2f6-49968e3119e0)

**Why It Works Better:**

- Provides clear context
    
- Sets expertise level
    
- Establishes consistent voice
    
- Creates structured output
    
- Enables deeper analysis
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **3. Contextual Prompting**

Contextual prompting means giving the AI extra background information so it understands your request more clearly. The richer the context, the better the AI can respond in a way that fits your needs.

**When to Use:** Whenever your task depends on specific details, like drafting an email in your writing style, generating content for a niche audience, or solving a problem with industry-specific knowledge.

#### **Basic vs Advanced Approach:**

🟥 **Basic Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/e5a580ba-b644-4c8e-ba3e-6fbb6a9172ed/image.png)

🟩 **Advanced Contextual Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/0947d9d3-d2c6-4847-b15b-b43fa3840982/image.png)

Check it out → [https://chatgpt.com/share/68b2b6f9-d370-8006-8ea1-0598e8bc7140](https://chatgpt.com/share/68b2b6f9-d370-8006-8ea1-0598e8bc7140)

**Why It Works Better:**

- Provides the AI with clarity on role, audience, and tone
    
- Reduces vague or generic answers
    
- Helps match your personal or brand voice
    
- Produces results that are immediately usable with minimal editing
    

Context changes everything.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **4. Step-Back Prompting**

Step-back prompting is about asking the AI to pause and think from a higher-level perspective before giving a direct answer. Instead of jumping straight to a solution, you guide the AI to analyze the problem, break it down, and then respond more thoughtfully.

**When to Use:** Use this when dealing with complex, multi-layered, or strategic problems, for example, brainstorming business growth ideas, analyzing trade-offs in decision-making, or simplifying tough concepts for beginners.

#### **Basic vs Advanced Approach:**

🟥 Basic Prompt:

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/69443f65-d063-47f2-93a2-81261ede1410/image.png)

🟩 **Advanced Step-Back Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/58ea0626-a8e1-4ebb-9d73-551b9f41ab74/image.png)

Check it out → [https://chatgpt.com/share/68b2b981-5938-8006-8d4c-b6cb611efa58](https://chatgpt.com/share/68b2b981-5938-8006-8d4c-b6cb611efa58)

**Why It Works Better:**

-  Forces the AI to structure its thinking instead of giving random tips
    
-  Produces more strategic and thoughtful responses
    
-  Gives you clarity on the “why” behind the answer
    
-  Helps uncover blind spots you might not have considered
    

This warms the model up and improves quality a lot.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **5. Chain-of-Thought Prompting**

Chain-of-thought prompting means asking the AI to show its reasoning step by step instead of giving only the final answer. This helps the model think more carefully and produce stronger results.

**When to Use:** Use this when solving problems that require logic, analysis, or multiple steps, like math problems, strategic planning, or breaking down complex ideas. It’s especially powerful when you want the AI to “reason out loud” before arriving at a conclusion.

#### **Basic vs Advanced Approach:**

🟥 **Basic Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/b17b6250-e03f-4901-a7ff-ef710208148b/image.png)

🟩 **Advanced Chain-of-Thought Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/4d4bc667-e2da-4b36-bd4e-1f53aebf70d4/image.png)

Check this out → [https://chatgpt.com/share/68b2bc41-49c4-8006-8801-5c12493820e3](https://chatgpt.com/share/68b2bc41-49c4-8006-8801-5c12493820e3)

**Why It Works Better:**

- Forces the AI to reason more carefully instead of guessing
    
- Makes answers transparent, you can see the logic behind them
    
- Reduces errors in math, logic, and planning
    
- Helps you understand not just the answer, but the process
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **6. Self-Consistency**

Self-consistency prompting means asking the AI to generate multiple possible answers instead of just one. This allows the model to "think" in different ways, and then you can compare or refine the best response. It’s like brainstorming with AI.

**When to Use:** When solving complex problems, exploring multiple creative options, or needing variety (e.g., marketing taglines, business ideas, or different explanations for a tricky concept).

#### **Basic vs Advanced Approach:**

🟥 **Basic Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/4f94a4af-28ea-4598-83c7-3f7eb442e3c2/image.png)

🟩 **Advanced Self-Consistency Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/c26df89f-f344-4062-a52c-d490db48cc6f/image.png)

Check it out → [https://chatgpt.com/share/68b2bd76-e704-8006-83c5-51f9c4e8a24c](https://chatgpt.com/share/68b2bd76-e704-8006-83c5-51f9c4e8a24c)

**Why It Works Better:**

- Produces diverse outputs in one go
    
- Helps avoid tunnel vision by exploring multiple perspectives
    
- Makes it easier to pick, mix, or refine ideas
    
- Boosts creativity and problem-solving
    

Self-consistency turns the AI into your idea machine rather than just a single-answer tool.00

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

0

### **7. Tree-of-Thought Prompting**

Tree-of-thought prompting is about asking the AI to explore multiple reasoning paths (like branches of a tree) before arriving at a conclusion. Instead of a single straight line of reasoning, it generates several possible “thought branches,” evaluates them, and then chooses the best one.

**When to Use:** When dealing with highly complex, multi-step problems where there isn’t just one clear solution like strategy planning, solving puzzles, evaluating pros/cons of decisions, or exploring multiple approaches to coding/debugging.

#### **Basic vs Advanced Approach:**

🟥 **Basic Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/2199eb37-c62a-4df3-b608-0d1e22174c24/image.png)

🟩 **Advanced Tree-of-Thought Prompt:**

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/2e4c5b4b-9d89-49f2-be86-b6dc148aebf6/image.png)

Check this out → [https://chatgpt.com/share/68b2be40-21c0-8006-9413-80be842050b1](https://chatgpt.com/share/68b2be40-21c0-8006-9413-80be842050b1)

**Why It Works Better:**

- Explores different reasoning paths instead of just one
    
- Forces deeper evaluation of alternatives
    
- Helps you see trade-offs clearly
    
- Mimics how experts brainstorm before making decisions
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

## **Common Pitfalls to Avoid**

**Over-Specification**

- Too many constraints can limit creative solutions.
    
- Find balance between guidance and flexibility.
    

**Under-Contextualization**

- Not providing enough background.
    
- Missing critical constraints.
    

**Inconsistent Role Definition**

- Mixing expertise levels.
    
- Conflicting perspectives.
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

## **Advanced Tips**

**Chain of Relevance**

- Connect each prompt element logically.
    
- Ensure consistency between role and expertise level.
    
- Match output format to audience needs.
    

**Validation Elements**  
Validation criteria to include in prompts:

- Must include quantifiable metrics
    
- Reference industry standards
    
- Provide actionable recommendations
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

## **Useful Prompt Templates**

Here are plug-and-play prompts you can adapt instantly. Each one is structured for clarity, tone, and audience.

Prompts can supercharge productivity when tailored to your role.

Below are categorized templates you can copy, adapt, and reuse.

👉 Swap the placeholders [ ] to fit your exact need.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **Prompts for Marketers**

**Landing Page Copy** → “Create landing page copy for a product that helps [target audience] manage [specific task]. The tone should be [professional/friendly/conversational]. Highlight [key features/benefits].”

**Facebook Ad Copy** → “Write Facebook ad copy for [product] targeting [audience]. Emphasize how [benefit] fits into their [routine/lifestyle]. Keep it [engaging/witty/professional].”

**Product Launch Post** → “Write a [platform] post announcing the launch of [product]. Focus on [unique feature] and [main benefit]. Keep it [concise/engaging/shareable].”

**Email Nurture Sequence** → “Write a 5-email campaign to nurture leads for [product]. Tone: [friendly/professional]. Address [pain point] and show how [product] solves it.”

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **Prompts for Coding**

**Debugging** → “I’m getting [error message] in [language]. I want to [goal]. Here’s my code: [insert code]. What’s wrong and how do I fix it?”

**Function Creation** → “Write a [language] function that [task description]. It should [specific requirement: error handling, performance, etc.].”

**Optimization** → “Optimize this [language] code for [efficiency/readability/speed]. Current issue: [reason it’s inefficient].”

**API Handling** → “Write a [language] function that fetches [data] from [API], handles errors, and outputs [desired format].”

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **Prompts for Sales**

**Sales Email** → “Write a personalized email for a prospect in [industry]. Highlight how [product] solves [pain point]. Tone: [professional/friendly].”

**SaaS Pitch** → “Write a sales pitch for [SaaS product] targeting [role] in [industry]. Emphasize [feature 1], [feature 2], and [outcome].”

**Lead Qualification** → “Generate 5 questions to qualify a lead for [product/service]. Focus on [budget/current tools/challenges].”

**Objection Handling** → “Respond to a customer concerned about [objection]. Reassure them by emphasizing [benefits/solution].”

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **Prompts for Designers**

**Logo Concept** → “Suggest 3 logo concepts for a [business type]. Style: [minimal/playful/corporate]. Color scheme: [primary + secondary]. Must feel [modern/trustworthy/energetic].”

**Webpage Layout** → “Design a homepage wireframe for [business type]. Include sections for [hero/testimonials/CTA/etc.]. Style: [clean/modern/fun].”

**Social Media Graphic** → “Create a [platform] post promoting [product/event]. Use [color scheme] and highlight [main message]. Style: [bold/minimal].”

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **Prompts for Research**

**Market Research** → “Provide a market overview of [industry]. Include consumer trends, pricing patterns, and competitor positioning.”

**Competitive Analysis** → “Compare [product] against [competitors]. Highlight strengths, weaknesses, and differentiation.”

**Industry Trends** → “Write a trends report for [industry] covering [timeframe]. Include emerging technologies, shifts in demand, and regulatory changes.”

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

## **Improving Prompts with AI**

Sometimes the fastest way to engineer a great prompt is… to let AI do it for you.

You give a rough idea → the AI shapes it into a structured, optimized template.

**Prompt Generator by Claude**

- Access here: [https://console.anthropic.com/dashboard](https://console.anthropic.com/dashboard)
    
- Enter a rough task and it creates a reusable prompt template
    

**Prompt Generator by OpenAI**

- Access here: [https://platform.openai.com/playground/](https://platform.openai.com/playground/)
    
- Enter a simple idea and the Playground expands it into an optimized prompt
    

**Prompt Generator by Feedough:**

- Access here: [https://www.feedough.com/ai-prompt-generator/](https://www.feedough.com/ai-prompt-generator/)
    
- Paste a basic request and get a structured, ready-to-use prompt
    

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

### **The One Prompt Structure I Reuse Constantly**

When in doubt, use this:

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/26c49e36-c972-4529-99de-b6267bf96d13/image.png)

Clean. Repeatable. Works for 90% of situations.

Here is example:

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/80995c2c-ad52-48db-9ac5-0d2a2acdb810/image.png)

If you made it this far, you’re already ahead of 90% of AI users.

Prompting is being clear.

Know what you want.

Guide the AI with context, tone, format.

Remove the guesswork.

And when in doubt?

Use the structure. Test. Refine. Repeat.

You’ll be surprised how good the outputs get, once the inputs finally make sense.

![](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/ddea0fe1-6d89-4a0d-a006-7ae440cf9a76/image.png)

📌 **Pro tip:** Keep a personal Prompt Library, a collection of your best-performing prompts. Reuse, refine, and adapt them as you go. Over time, this will become your secret weapon.

#### Simplifying AI

Master AI in 5 minutes daily without the overwhelm. Join thousands getting practical tutorials, trending news, and tools that actually matter.

