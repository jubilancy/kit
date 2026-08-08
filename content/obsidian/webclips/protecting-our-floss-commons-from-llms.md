---
title: "Protecting our FLOSS commons from LLMs"
---

```yaml
source: "https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html"
author:
  - "[[Codeberg e.V.]]"
published: 2026-07-22
created: 2026-07-24
description: "In Brief: Two motions regarding"
tags:
  - "clippings"
```

#### Bastian Greshake Tzovaras, Otto Richter, William Zijl

Thu 23 July 2026

Category: [Contrib](https://blog.codeberg.org/category/contrib.html)

In Brief:

- Two motions regarding *"artificial intelligence"* and *Large Language Models* (LLMs) were voted on among Codeberg e. V. members and passed.
- We are promising to not use any of your data to train LLM and explain what the planned Terms of Use change mean for 'vibe-coded' projects.
- We believe that LLMs endanger the free/libre software ecosystem as a whole.

The Codeberg e. V. annual assembly is the meeting that puts power into the hand of our active members. Proposals are discussed live, and later voted on asynchronously.

Since *Large Language Models* (LLMs) are an emerging but controversial technology, it is not surprising that two of the votes were concerned with Codeberg's position about this technology. The 14-day voting period ended yesterday and both proposals were accepted.

The first vote was a statement about Codeberg e. V.'s stance on using your data to train LLMs.

> As stated in our privacy policy, "We do not want to need your data", and this also holds for the use of our user and project data for using or training generative "AI": The Codeberg forge and its associated services are not and will not use the code or data of projects and users to train "Artificial Intelligence" tools such as Large Language Models, whose purpose is to create output modelled after their training input. As an association, we believe that these technologies are incompatible with responsibly creating and maintaining free & open source software.

The second vote was more controversial, but was also accepted with 358 agreements vs 144 disagreements (and 14 abstentions), with a high voter turn-out of around 50% of active members. It implies a change to our terms of use to prohibit 'vibe-coded projects'. We'll share thoughts about the practical impact at the end of the article.

## We all pay for hungry LLMs

LLMs are a very costly technology, and those costs keep rising as the companies providing them have to start recouping their investments. They are not only costly for those who use and explicitly subscribe to these services. The costs are not only hidden in 'normal' cloud and service subscriptions that cross-finance the 'innovative new features' you never asked for. LLMs are so costly that companies [externalize the costs](https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/) on a massive scale - on those who don't use them and society at large. Increased hardware prices, energy use and environmental damage - we all pay for it!

### Strained servers due to nonsensical crawling

In past posts we have already outlined how our infrastructure at Codeberg is [regularly put under heavy load](https://blog.codeberg.org/letter-from-codeberg-software-is-about-humans.html) from webcrawlers of those companies who plan to ingest all of the code that is hosted on Codeberg for training their LLMs.

At Codeberg, we are happy to provide free and open access to code. Just run `git clone` and enjoy.

Unfortunately, these crawlers instead try to read every single page from Codeberg, no matter if it makes sense. This includes all the different issue filter variants, Git history, as well as the actual files at any point in Git history - even if they are still equal.

These needless accesses create expensive database queries that diminish the service quality for all of us, requires substantial amounts of work from our system administrators, and force us to spend time building defensive mechanisms instead of cool new stuff. Mechanisms that also affect new and existing legitimate users, as we're having to impose limits or outright blocks on their desired workflow; leaving them a worse experience with Codeberg.

### The development team of none

Using LLMs to work with your code gives you a kick of adrenaline. You can develop at a rapid pace, build things as if you had a large team. Only that you have none. In fact, you are (often) alone, working with a statistical machine that turns energy into code.

It seems like many ‘vibe coders’ don't realize that they don't actually have a community around them. They build projects as if they had, and spend resources accordingly. We see projects having a lot of code activity, heavy CI/CD testing, frequent and large release binaries. Sometimes, it feels like the amount of supported platforms exceeds the amount of actual users.

To us, it seems ridiculous to see projects with a single developer and virtually no users consuming as much or even more resources than some of the largest community projects on Codeberg, which operate frugal with CI/CD and storage resources. We do not believe it is reasonable for Codeberg to invest our precious donation money into hosting of large ghost projects.

### Hardware sourcing is becoming an headache

The training and deployment of LLMs has drastically raised the cost of buying hardware, in particular for SSDs and memory. To give you an example: The type of drive we sourced for € 700 only some years ago has risen to € 3.700 now - and is often out of stock. As a consequence, hosting code on Codeberg [is becoming more expensive](https://blog.codeberg.org/new-storage-limits-on-codeberg-what-you-need-to-know.html).

While we are [owning our hardware](https://blog.codeberg.org/letter-from-codeberg-we-love-our-new-infrastructure.html), and are thus not directly impacted by inflating 'cloud' rental costs, it means that replacing or expanding our hardware is now substantially more costly than it used (and needs) to be. While we might be able to afford paying those inflated hardware prices, it is money that we can not spend elsewhere to improve our service and foster the mission of Codeberg.

### A growing digital divide

These price hikes also lead to a growing *digital divide*: Small and even large operators are endangered by rising costs, while only the largest cloud companies have reliable agreements for hardware. Increasing costs for services like website hosting, storage or compute can be challenging to a lot of small NGOs, local coops, research projects and other usage of digital tools that we considered for granted until recently.

Not only does it become more expensive to run digital infrastructure, even more basic digital tools like computers and smartphones are affected by the rising costs, turning personal computing back into a luxury — but now in a world where digital tools are a de-facto requirement to participate in society. Devices with little compute and storage capacity take away sovereignity from users and move them into the cost trap of cloud providers selling those back to you.

### Civic infrastructure, its users, and the environment suffer

The negative impacts on infrastructures don't stop there, but also concern more basic civic infrastructure: Due to the energy and water demands that are inherent to the data centers built specifically for training LLMs, many communities already today experience rising consumer costs for both electricity and drinking water. And beyond the rising costs, those living close to the data centers are [directly affected by increasing air and noise pollution](https://www.usnews.com/news/national-news/articles/2026-04-28/living-in-hell-data-center-neighbors-grapple-with-noise-air-pollution).

To be able to power up those data centers, the companies behind them are also actively lobbying to be exempt from environmental regulations: In Frankfurt, data centers [already now consume 40% of the local electricity](https://algorithmwatch.org/de/ressourcenverbrauch-von-ki/), and demand is rising. To meet this demand, they want to use fossil fuels.

## Collaboration at danger

It is not purely the digital and civic infrastructures that are impacted by the use of LLMs. The free/libre software ecosystem, of which we consider Codeberg an important part of, is a social phenomenon centered on collaboration. Working in this way is only possible thanks to free sharing and mutual learning. This includes even very small tools that are shared and re-used and around which collaboration can start out. In contrast, by adopting LLMs people tend to code *single-use software* from scratch. While this leads to an increase in 'shared' code, it is mostly code that not only has not been 'written' by anyone but is also not maintained by anyone.

### Losing trust in each other

The widespread use of LLMs in FLOSS is instead becoming a multidimensional attack on the trust between contributors and the very idea of convivial collaboration itself. Maintainers are under an increased work-load due to people submitting (often well-meaning) low-effort, LLM-generated contributions that require substantial amounts of time to review. At the same time it is becoming increasingly less clear which projects are maintained by experienced developers and which ones are LLM-generated without any meaningful human oversight and input. In the case of copyleft projects, LLMs additionally also lead to 'license laundering', where copyleft code is stripped of its reciprocity requirements by 'generating' it out of the training data.

We observe an increasing trend of mistrusting each other, up to the point where people who put in actual effort to analyze issues or share their suggestions are being accused of having used LLMs when they did not. At the same time, others instruct their LLMs to hide their traces and actively avoid common patterns, prompting others in reviewing contributions and communication more carefully for signs of machine generation.

### Entering a vicious cycle

Together, these forces make collaboration not only harder but also less rewarding: With the *transaction cost* of collaboration increasing, people are becoming less likely to contribute to creating high-quality software projects and more likely to 'vibecode' a one-off software that is specific to your need, and won't evolve beyond. We get a vicious cycle where collaboration is becoming less and less rewarding, while the amount of single-use software that's unmaintained and never sees any improvements is going up.

Although often well intentioned, sharing the result of an prompt and calling it "libre software" does not make the world a better place. Codeberg is not and does not want to be a place to dump such generated single-use software that no one else will ever look at. We are a place for people to collaborate and improve software together. Within this context, the recent votes can be understood as a reconfirmation of those principles: As we want to center on human collaboration, we will not actively support or engage in the creation of LLMs and will not put our limited resources to use for storing single-use software that would pollute our FLOSS commons.

## Evolving our terms

Changing our Terms of Use sends a strong signal about our mission and projects we want to support. Having said that, you won't see a mass-deletion of content within days. Our moderation team will not start off generating an exhaustive list of affected repositories to remove. Instead, using cases like the examples below we will start operationalizing the new rules. We're humans at the other end, who care deeply about free/libre software projects and communities.

We acknowledge that many developers have started to embrace LLMs as a tool in their workflows. Some use it extensively and rarely code by hand, others delegate only specific tasks to it. We understand that you want to know how the change affects your projects going forward. While we can't give an easy answer, we'll share some remarks that should address most of the concerns raised in the discussion.

### Some early, but informal guidelines

If your work fits into these cases, it is unlikely that you are affected at all:

- Projects who have an active community that cares about and maintains the software
- Projects with a significant pre-LLM history
- Maintainers who unknowingly or willingly accepted LLM-generated contributions from other contributors, if your project otherwise does not involve the heavy use of LLMs

We will also not spend significant amount of time and resources to automatically scan content on Codeberg. So while the following use cases are discouraged (similar to private repositories), they are likely to be tolerated in practice:

- Side projects and experiments with little resource usage
- Specific tools and custom scripts that would be unlikely to find a community anyway, even if they were not LLM-generated

However, we also need to be honest about certain use cases that might no longer be welcome on Codeberg. If you see yourself on this list, you don't need to move right away, but there might be [other places that better fit your needs](https://docs.codeberg.org/getting-started/what-is-codeberg/#alternatives-to-codeberg):

- Projects that are created by LLM "agents" in autonomous ways
- Projects written and maintained with heavy use of LLMs
- Projects where the amount of resources (e.g. storage, CI/CD) is significantly larger than what the involved amount of people could have created by hand
- Projects heavily tied to the LLM ecosytem, e.g. LLM-written tools to ease LLM usage
- Users sending LLM contributions in violation of project's custom policies

You can check the [specific change added to the Terms of Use](https://codeberg.org/Codeberg/org/commit/96fac426a32d1ba91ff879366d59bf1af54080c2).


# Codeberg Quota
#### [Quota](https://codeberg.org/user/settings/storage_overview)

The following quota rules apply to your account:

**Grace period**

Assets: Grace period0 B / 200 GiB

- Assets0 B
    
- Git LFS0 B
    

Git: Grace period22 MiB / 85 GiB

![Logo](https://codeberg.org/assets/img/svg/cb-logo.svg)

Powered by

[

![Forgejo logo](https://codeberg.org/assets/img/svg/forgejo-wordmark.svg)

](https://forgejo.org/)with [modifications](https://codeberg.org/Codeberg-Infrastructure/forgejo)

**Codeberg**

- [Blog](https://blog.codeberg.org/)
- [Documentation](https://docs.codeberg.org/)
- [Community issues](https://codeberg.org/Codeberg/Community/issues)
- [Landing page](https://codeberg.org/about)
- [Contributing](https://codeberg.org/Codeberg/Contributing)
- [Report abuse](https://docs.codeberg.org/contact/#abuse)

**Association**

- [Who are we?](https://docs.codeberg.org/getting-started/what-is-codeberg/#what-is-codeberg-e.v.%3F)
- [Bylaws / Satzung](https://codeberg.org/codeberg/org/src/en/bylaws.md)
- [Donate](https://docs.codeberg.org/improving-codeberg/donate/)
- [Join / Support](https://join.codeberg.org/)
- [Contact](https://docs.codeberg.org/contact/)

**Services**

- [Codeberg Pages](https://codeberg.page/)
- [Codeberg Translate](https://translate.codeberg.org/)
- [Woodpecker CI](https://docs.codeberg.org/ci/#using-codeberg's-instance-of-woodpecker-ci)
- [Forgejo API](https://codeberg.org/api/swagger)
- [Status page](https://status.codeberg.eu/)

**Legal**

- [Imprint / Impressum](https://codeberg.org/codeberg/org/src/Imprint.md)
- [Privacy Policy](https://codeberg.org/codeberg/org/src/PrivacyPolicy.md)
- [Licenses](https://codeberg.org/assets/licenses.txt)
- [Terms of Use](https://codeberg.org/codeberg/org/src/TermsOfUse.md)

[Mastodon](https://social.anoxinon.de/@Codeberg) | [Matrix Space](matrix:r/codeberg-space:matrix.org?action=join) [(Web link)](https://matrix.to/#/#codeberg-space:matrix.org)
