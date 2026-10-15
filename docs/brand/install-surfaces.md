# Showbranch install-surface copy

**Status:** approved  
**Updated:** 2026-10-15

This document keeps the public identity consistent wherever someone discovers or installs Showbranch. Product packages and manifests should reference this copy instead of inventing surface-specific claims.

## Shared identity

- **Display name:** Showbranch
- **Slug:** `showbranch`
- **Tagline:** Turn your GitHub work into a portfolio worth showing.
- **Category:** Agent-native developer portfolio framework.
- **Repository:** `https://github.com/arminazimi/showbranch`
- **Icon:** `assets/brand/svg/showbranch-plugin-icon.svg`
- **Short description:** The agent-native framework for turning public GitHub work into beautiful, safely managed portfolios.

## CLI

**Package description**

> Create, validate, preview, and publish an agent-native developer portfolio from public GitHub work.

**Help introduction**

> Turn public GitHub work into a validated static portfolio you can review locally and publish to GitHub Pages with explicit approval.

Use `showbranch` for the executable and unscoped package target. Commands must describe observable operations, never “AI magic” or autonomous publishing.

## Skill and skills.sh

**Display name:** Showbranch  
**Skill name:** `showbranch`

**Discovery description**

> Create or update a developer portfolio from a public GitHub profile using Showbranch. Use when the user wants a beautiful static portfolio, safe agent-guided customization, local preview, validation, or approved publication to GitHub Pages.

**Short listing summary**

> Build and safely maintain a GitHub-powered developer portfolio with your coding agent.

The description intentionally includes the user intents that Skill Finder-style search should match. Installation and publication claims remain future tense until their release gates pass.

## Codex plugin

**Display name:** Showbranch  
**Plugin slug:** `showbranch`

**Summary**

> Turn GitHub work into a portfolio worth showing—safely, with your coding agent.

**Expanded description**

> Import public GitHub work, create a validated developer portfolio, preview changes locally, and prepare approved publication to GitHub Pages. Showbranch keeps content structured, changes reviewable in Git, and deployment under the user's control.

Use the canonical square plugin icon. OpenAI is a compatibility channel, not part of the Showbranch master brand.

## Claude plugin

**Display name:** Showbranch  
**Plugin name:** `showbranch`

**Summary**

> Turn GitHub work into a portfolio worth showing—safely, with Claude.

**Expanded description**

> Use Claude to import public GitHub work, create or update a validated developer portfolio, preview changes locally, and prepare user-approved publication to GitHub Pages through Showbranch's structured workflow.

Use the same canonical icon, category, safety language, and repository as every other surface. Claude is the agent on this surface, not the master brand.

## Consistency rules

- Write the brand as **Showbranch** and machine identifiers as `showbranch`.
- Lead with the portfolio outcome before mentioning schemas, manifests, or protocols.
- Pair “agent-native” with a concrete capability such as import, validation, preview, or safe editing.
- State that publication requires explicit user approval.
- Do not claim a released package, verified agent integration, skills.sh listing, or plugin until its corresponding release issue is complete.
- Do not use retired AgentPages or RepoBloom names outside migration and historical decision records.
