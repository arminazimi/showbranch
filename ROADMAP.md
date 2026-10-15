# Showbranch Product, Brand, and Distribution Roadmap

Status: proposed  
Updated: 2026-10-15

## North star

Become the default agent-native way for a developer to turn a public GitHub profile into a beautiful, safely editable portfolio and publish it to GitHub Pages in under five minutes.

The category we want to own is **agent-native developer portfolios**, not the broader and crowded category of “AI website builders.”

## Naming decision

`Showbranch` is the approved permanent master brand. The 2026-10-15 naming sprint selected it after the working name `RepoBloom` failed clearance. See the [name-clearance report](docs/brand/name-clearance.md) and [replacement-name shortlist](docs/brand/replacement-name-shortlist.md).

Use `showbranch` consistently for the repository, CLI, package, Skill, plugin, and machine-readable identifiers. Domain purchase and registry publication remain separate release actions.

## Product principles

1. **Agent-native:** agents discover capabilities, understand boundaries, make structured changes, and validate outcomes.
2. **Model-agnostic:** the core works with Codex, Claude, Cursor, and future compatible agents.
3. **Safe by default:** read/import/edit/preview can be streamlined; publication and destructive actions require explicit user approval.
4. **Beautiful by default:** the first theme must be good enough to market the project by itself.
5. **One core, many surfaces:** CLI, Skill, Codex plugin, Claude plugin, and website share one schema and one brand.
6. **Zero required backend:** a published portfolio stays static and independent of Showbranch services.

## Roadmap overview

| Phase | Target | Exit gate |
|---|---|---|
| 0 | Category, name, and brand foundation | Defensible name, reserved handles, complete identity kit |
| 1 | M1 product loop | GitHub profile to local premium preview in under 5 minutes |
| 2 | Safe agent discovery | Compatible agents discover and use supported operations reliably |
| 3 | Skill distribution | Searchable, audited skill on skills.sh with tested Codex/Claude installs |
| 4 | Branded plugins | Installable Codex and Claude plugins from one canonical package |
| 5 | Public launch | Live demo, launch story, 10 real portfolios, repeatable onboarding |
| 6 | Category leadership | Community flywheel, ecosystem compatibility, measurable retention |

## Phase 0 — Category and brand foundation

**Goal:** create a brand people can recognize, search, remember, and trust before public package identifiers become difficult to change.

### Deliverables

- Naming audit: GitHub, npm, skills.sh, plugin directories, domains, social handles, and basic trademark conflicts.
- Category statement: “The agent-native portfolio framework for GitHub Pages.”
- One-sentence promise and three proof points.
- Brand personality: precise, capable, premium, open, and calm—not generic “AI magic.”
- Logo system:
  - symbol and wordmark;
  - horizontal and compact lockups;
  - light, dark, and monochrome variants;
  - favicon and 16/32/64/128/512/1024 pixel exports;
  - square plugin icon and GitHub social preview;
  - minimum-size and clear-space rules.
- Visual tokens: color, typography, spacing, radius, illustration, and motion direction.
- Voice guide: tagline, short description, long description, and terminology.
- Reserved permanent slugs and publisher identity.

### Brand recommendation

Use one master brand everywhere. Do not invent separate names for the CLI, Skill, or plugins. Surface names should be predictable:

- `<Brand>` — project and website
- `<brand>` — CLI/package slug
- `<brand>` — Skill slug
- `<Brand>` — Codex and Claude display name

### Exit metrics

- No serious collision in the relevant developer-tool category.
- The icon remains recognizable at 32 px.
- Name, tagline, repository, and install command are correctly recalled by at least 4 of 5 informal testers after a short demo.

## Phase 1 — M1 product loop

**Goal:** prove the primary promise before expanding the ecosystem surface.

### User journey

```text
GitHub username
  -> import public profile and repositories
  -> generate a validated site document
  -> render a premium local preview
  -> review changes
  -> publish through GitHub Actions after approval
```

### Deliverables

- `init`, `github import`, `validate`, `dev`, and `build` CLI commands.
- Versioned site schema and migrations.
- Deterministic GitHub import with graceful API-limit handling.
- One exceptional Minimal theme; additional themes stay deferred.
- Astro static renderer with accessibility, responsive design, and strong performance.
- GitHub Pages configuration and reviewed GitHub Actions workflow.
- Error messages that give an agent structured repair instructions.
- Golden fixtures, unit tests, end-to-end onboarding test, and a real reference portfolio.

### Exit metrics

- Median first preview under 5 minutes.
- At least 9 of 10 clean test runs reach a valid preview.
- Lighthouse targets: 95+ performance, accessibility, best practices, and SEO on the reference site.
- No secret is written to generated content or build output.
- Publish remains a separate, explicitly approved action.

## Phase 2 — Auto-discoverable agent-native contract

**Goal:** agents should recognize what the project is, what operations are allowed, and how to verify a change without the user teaching them each time.

“Completely auto-discoverable” cannot depend on one convention because agents load different files. Showbranch therefore uses layered discovery:

1. **Repository discovery:** concise root `AGENTS.md` plus compatible agent instruction entry points.
2. **Skill discovery:** canonical `skills/<brand>/SKILL.md` with high-signal trigger language.
3. **Machine discovery:** `.showbranch/manifest.json` declaring schema version, capabilities, safe operations, paths, and validation commands.
4. **Schema discovery:** stable JSON Schema URLs and version negotiation.
5. **CLI discovery:** `showbranch capabilities --json` and `showbranch doctor --json`.
6. **Plugin discovery:** portable plugin metadata plus surface-specific compatibility metadata.

### Standard safe operations

- inspect site and capabilities;
- import or refresh GitHub data;
- update profile content;
- select and reorder projects;
- customize supported theme tokens;
- validate, build, and preview;
- prepare a deployment diff;
- deploy only after explicit user approval.

### Exit metrics

- A fresh Codex or Claude session selects the Skill for at least 90% of positive trigger prompts.
- False activation stays below 5% on negative prompts.
- All supported operations return structured, actionable errors.
- The same fixture produces equivalent output across supported agent workflows.

## Phase 3 — Skill distribution and skills.sh

**Goal:** make Showbranch discoverable by humans and by Skill Finder-style agents.

### Deliverables

- One canonical public Skill in the main repository at `skills/<brand>/SKILL.md`.
- Natural-language description covering the intents users actually express:
  - create a portfolio from a GitHub profile;
  - build or update a developer portfolio;
  - publish a static portfolio to GitHub Pages;
  - safely customize an agent-native website.
- Positive and negative trigger-evaluation set.
- CI checks for Skill structure, installation, trigger quality, and safety boundaries.
- Verified installation for both Codex and Claude Code.
- skills.sh install-count badge and a dedicated installation page.
- Monitoring for listing, audit status, search placement, installs, and failures.

skills.sh does not require a normal submission form: a public GitHub Skill enters discovery after its first telemetry-enabled installation. Ranking is install-driven, while source reputation and GitHub stars also help agent-side recommendations. skills.sh does not expose custom logo or color controls, so visual brand recognition must come from GitHub, documentation, the website, and plugin icons. See [distribution research](docs/research/distribution.md).

### Exit metrics

- Listed and security-audited on skills.sh.
- Appears for the agreed high-intent search queries.
- First 100 genuine Skill installs and 100 GitHub stars.
- At least 40% of successful Skill installs reach a first preview.

## Phase 4 — Branded Codex and Claude plugins

**Goal:** provide one recognizable installable experience while keeping the core portable.

### Shared package

- Root portable `plugin.json`.
- Canonical `skills/` directory.
- Shared brand assets and copy.
- No MCP server in the first release unless a validated workflow actually needs remote tools or authentication.

### Codex / ChatGPT

- Start as a skills-only plugin—the smallest shape that supports the product.
- Test through a repository marketplace first.
- Submit the approved package to OpenAI's universal public plugin directory shared by ChatGPT and Codex.
- Treat hooks as optional desktop-only enhancements, never required for the core promise.

OpenAI currently supports skills-only public plugins, shared branding assets, and a universal public directory. Public publication requires a packaged ZIP, validation, review, and an explicit publish step. See [plugin architecture](https://developers.openai.com/plugins/concepts/plugins), [packaging](https://developers.openai.com/plugins/build/plugins), and [submission](https://developers.openai.com/plugins/deploy/submission).

### Claude

- Reserve a permanent kebab-case plugin slug before launch.
- Add `.claude-plugin/plugin.json` with the shared display name, description, keywords, repository, homepage, license, and icon.
- Launch first from the project's own marketplace.
- Run strict validation, local marketplace installation, trigger tests, and plugin evals.
- Submit later to Anthropic's public directory; do not make official-marketplace placement a launch dependency.

### Exit metrics

- One source of truth for Skill instructions and brand assets.
- Clean install and uninstall on fresh Codex and Claude environments.
- 90%+ successful completion across the reference workflow eval suite.
- Plugin listing copy and visuals match across supported surfaces.

## Phase 5 — Public launch

**Goal:** launch a result people want to share, not merely a repository they can inspect.

### Launch assets

- Public repository with contributor-friendly issues and roadmap.
- Excellent landing page and live reference portfolio.
- 30–45 second uncut demo: GitHub username to premium preview.
- Ten real pilot portfolios and a small gallery.
- English documentation with a one-command quick start.
- Architecture and safety explanation for technical trust.
- Launch posts tailored to GitHub, Hacker News, Reddit, Dev.to, Astro, Codex, and Claude communities.
- Optional, subtle “Built with <Brand>” link controlled by the user.

### Exit metrics

- 10 genuinely deployed portfolios before broad promotion.
- First-preview success rate and time-to-value shown publicly.
- 100 activated users, not only passive stars.
- Clear issue response and release cadence during launch month.

## Phase 6 — Category leadership

**Goal:** turn early attention into a durable open-source standard and community.

### Moats to build

- **Protocol moat:** an open, versioned discovery and safe-operation contract.
- **Design moat:** excellent official themes with strict quality review.
- **Distribution moat:** top search placement across Skills and plugin directories.
- **Trust moat:** reproducible validation, transparent permissions, and explicit deployment approval.
- **Community moat:** showcase, contributors, adapters, and migration guides.

### Growth work

- Compatibility badge and conformance tests for third-party themes.
- Public gallery and monthly featured portfolios.
- Contribution ladder: good-first-issue → theme contribution → maintainer path.
- Integration guides for major coding agents.
- Case studies centered on real deployment outcomes.
- Quarterly roadmap and transparent adoption metrics.

### North-star metrics

- Deployed portfolios and monthly active maintained sites.
- Import-to-preview and preview-to-deploy conversion.
- Skill/plugin installs and successful invocations.
- Returning users who make a second validated update.
- GitHub stars, contributors, forks, and issue-response health.

Stars remain an important distribution signal, but **deployed and maintained portfolios** are the proof that the category has been won.

## Proposed sequence

### Weeks 1–2

- Establish Showbranch as the permanent name and reserve its identifiers.
- Reserve identity and define category language.
- Create the complete brand kit and launch copy foundation.
- Turn the M1 prototype into the canonical repository structure.

### Weeks 3–6

- Complete the M1 product loop and Minimal theme.
- Test with 3–5 real GitHub profiles every week.
- Add agent manifest, safe operations, and discovery evals.

### Weeks 7–8

- Finalize the canonical Skill.
- Validate Codex and Claude installs.
- Trigger skills.sh discovery and launch the owned Claude marketplace.

### Weeks 9–10

- Package and test the branded Codex and Claude plugins.
- Begin public-directory submissions.
- Recruit ten pilot users and resolve onboarding failures.

### Weeks 11–12

- Publish the gallery, demo, launch site, and technical narrative.
- Launch publicly and measure activation daily.

## Decisions still needed

1. **Brand direction:** premium minimal/editorial, technical systems/terminal, or a hybrid? Recommended: premium technical—clean editorial layout with a distinctive systems motif.
2. **Publisher:** personal developer identity or a dedicated GitHub organization? Recommended: dedicated organization, clearly founded and maintained by the creator.
3. **Domain budget:** reserve the strongest available `.dev`, `.tools`, or `.io` domain?
4. **Launch scope:** English-only first? Recommended: yes for launch and directory metadata, with localization after the core funnel works.

