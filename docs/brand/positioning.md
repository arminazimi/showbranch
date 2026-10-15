# Showbranch positioning and voice

**Status:** approved  
**Updated:** 2026-10-15

This document is the source of truth for how Showbranch describes itself. Product pages, repository metadata, package listings, Skills, plugins, launch material, and contributor documentation should use this language consistently.

## Brand foundation

### Category

**Agent-native developer portfolio framework.**

Showbranch is not positioned as a general AI website builder. It owns the narrower category where a developer's public GitHub work becomes a beautiful, safely maintained portfolio through coding agents and deterministic tooling.

### Primary audience

Developers who already have meaningful public work on GitHub, use or are willing to use a coding agent, and want a credible portfolio without designing and maintaining a custom website by hand.

The initial audience is:

- open-source contributors and maintainers;
- independent developers and product builders;
- developers preparing for job searches, consulting, speaking, or community visibility.

Students with public projects and developer advocates are important secondary audiences, but the product should first feel credible to experienced builders. It must never look like a generic resume-template generator.

### Job to be done

> When my GitHub work is stronger than the way I present it, help me turn that evidence into a polished portfolio with the coding agent I already use, so I can share a credible public identity without hand-building a website or surrendering control to a hosted AI service.

### Audience tension

The user has shipped real work, but the evidence is scattered across repositories and GitHub metadata. Existing portfolio templates demand design and maintenance work; generic AI site builders produce opaque output; hosted portfolio products create lock-in. Showbranch converts existing proof into a high-quality static site while keeping the source, review process, and publication under the user's control.

## Approved messaging

### Tagline

> Turn your GitHub work into a portfolio worth showing.

### One-sentence promise

Showbranch turns a public GitHub profile into a beautiful, safely editable portfolio that works with the developer's preferred coding agent and publishes to GitHub Pages.

### Short description

The agent-native framework for turning public GitHub work into beautiful, safely managed portfolios.

### Long description

Showbranch is an open-source, agent-native framework that turns a public GitHub profile into a polished static portfolio. It gives Codex, Claude, and other compatible coding agents a structured, validated way to import projects, edit content, customize supported design tokens, preview changes, and prepare publication without rewriting the site blindly. The result remains ordinary source code, reviewable in Git and publishable for free on GitHub Pages, with no required Showbranch backend and no deployment without the user's approval.

### Category statement

> Showbranch is the agent-native developer portfolio framework for GitHub Pages.

### Thirty-second explanation

Your best proof of work already lives on GitHub, but it rarely looks like a portfolio. Showbranch imports that public evidence into a validated site, renders it through a premium theme, and gives your preferred coding agent safe operations for maintaining it. You keep the source, review every change in Git, and decide when it goes live on GitHub Pages.

## Three proof points

### 1. GitHub evidence in, portfolio out

Showbranch deterministically imports public profile and repository data into a versioned site document. The output is inspectable, repeatable, and independently validated instead of depending on an unconstrained model response.

### 2. Built for agents, bounded for safety

Agents discover supported capabilities and use structured operations for content, projects, themes, validation, and preview. Publishing, destructive replacement, and permission changes remain explicit user-approved actions.

### 3. Beautiful, portable, and free to host

Official themes provide strong design by default. The generated site is static, reviewable in Git, and deployable to GitHub Pages without a required Showbranch account, hosted backend, or recurring platform fee.

## Product pillars

- **Proof over claims:** start from public work the developer actually shipped.
- **Agency with control:** let agents do useful work inside visible, validated boundaries.
- **Quality by default:** make the first result good enough to share.
- **Ownership without lock-in:** keep content, source, history, and hosting portable.
- **One workflow everywhere:** use the same schema and safety model across CLI, Skill, Codex, and Claude.

## Non-goals

Showbranch is not:

- a general-purpose AI website builder;
- a hosted drag-and-drop CMS or proprietary portfolio network;
- a resume writer, candidate-ranking system, or hiring score;
- a tool for generating arbitrary application code from prompts;
- a service that requires uploading private repositories or source code;
- an autonomous publisher that deploys or changes permissions without explicit approval;
- a marketplace for themes or agents in the first release.

These boundaries keep the first promise narrow, demonstrable, and trustworthy.

## Voice

Showbranch sounds **precise, capable, calm, premium, and open**.

### Write like this

- Lead with the user's outcome, then explain the mechanism.
- Use short, concrete sentences and active verbs.
- Make safety boundaries explicit without sounding fearful.
- Prefer evidence, commands, and observable behavior over adjectives.
- Treat agents as capable collaborators operating within defined permissions.
- Say what is local, static, public, private, validated, or user-approved.

### Do not write like this

- Do not use “AI magic,” “revolutionary,” “effortless,” or unsupported superlatives.
- Do not imply that a portfolio guarantees employment, reputation, or GitHub growth.
- Do not call the product autonomous when approval is required.
- Do not describe generated output as safe unless the relevant validation actually ran.
- Do not make Codex, Claude, or any model vendor the master brand.
- Do not use cute plant metaphors inherited from the retired RepoBloom working name.

## Terminology

| Use | Meaning and rule | Avoid |
|---|---|---|
| **Showbranch** | Master brand; always capitalized in prose | ShowBranch, Show Branch |
| `showbranch` | CLI, package, Skill, plugin, repository, and machine-readable slug | abbreviations or alternate slugs |
| **agent-native** | Agents can discover capabilities, act through supported operations, and verify outcomes | AI-powered as the primary category |
| **coding agent** | General term when no vendor needs to be named | bot, robot, magic assistant |
| **site document** | Versioned structured content consumed by the renderer | database, prompt output |
| **import** | Read public GitHub data into the site document | scrape, ingest private code |
| **preview** | Local reviewable rendering before publication | live site when it is not deployed |
| **publish** | User-facing term for making the site live | auto-deploy when approval is required |
| **deploy** | Technical operation performed after approval | publish silently |
| **theme tokens** | Supported validated design controls | arbitrary CSS generation |
| **GitHub Pages** | Initial free hosting target | Showbranch cloud |
| **Skill** | Installable agent instructions; capitalize when referring to the packaged artifact | prompt pack |

## Message hierarchy

When space is limited, preserve this order:

1. **Outcome:** a portfolio worth showing from existing GitHub work.
2. **Difference:** agent-native editing with structured validation and user control.
3. **Ownership:** static source, Git review, free GitHub Pages hosting.
4. **Compatibility:** preferred coding agents, beginning with Codex and Claude.

Never lead with architecture, schemas, plugins, or protocols on a general-audience surface. Those details prove the promise after the outcome is clear.

## Surface copy

### GitHub description

The agent-native framework for turning public GitHub work into beautiful, safely managed portfolios.

### Package description

Create, validate, preview, and publish an agent-native developer portfolio from public GitHub work.

### Skill description

Create or update a developer portfolio from a public GitHub profile using Showbranch. Use when the user wants a beautiful static portfolio, safe agent-guided customization, local preview, validation, or approved publication to GitHub Pages.

### Plugin display name

Showbranch

### Plugin summary

Turn GitHub work into a portfolio worth showing—safely, with your coding agent.

## Claims discipline

The following claims require evidence before public use:

- “under five minutes” requires measured end-to-end runs;
- “95+ Lighthouse” requires current published reports;
- “works with Codex and Claude” requires clean-environment installation and workflow tests;
- “secure” requires a defined threat model and relevant test coverage;
- adoption, install, star, and conversion claims require dated source data.

Until those gates pass, describe them as goals rather than accomplished facts.
