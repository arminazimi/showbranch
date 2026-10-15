# Showbranch GitHub issue plan

These issues are ordered for sequential delivery. Priority and phase are encoded in each title so the backlog remains understandable even before labels and milestones are configured.

## Phase 0 — Brand foundation

### 1. [P0 · Brand] Validate the Showbranch name and reserve permanent identifiers

Confirm that Showbranch can become the permanent public identity before assets and package identifiers depend on it.

**Acceptance criteria**

- [x] Search GitHub, npm, skills.sh, Codex/ChatGPT plugins, Claude plugins, domains, social handles, and relevant trademark databases.
- [x] Record collisions and risk level in `docs/brand/name-clearance.md`.
- [x] Select the canonical lowercase slug.
- [x] Reserve or document the owner for GitHub, npm, domain, Skill, and plugin identifiers.
- [x] Record a final keep/rename decision.

### 2. [P0 · Brand] Define positioning, audience, promise, and category language

Depends on #1.

**Acceptance criteria**

- [x] Define the primary audience and job-to-be-done.
- [x] Approve the category: agent-native developer portfolios.
- [x] Approve one sentence, short description, long description, and tagline.
- [x] Define three proof points and explicit non-goals.
- [x] Add a concise voice and terminology guide.

### 3. [P0 · Brand] Design the Showbranch visual identity system

Depends on #2.

**Acceptance criteria**

- [x] Create symbol and wordmark in SVG.
- [x] Provide horizontal, compact, light, dark, and monochrome variants.
- [x] Export favicon and 16/32/64/128/512/1024 px assets.
- [x] Create square plugin icon and GitHub social preview.
- [x] Define colors, typography, spacing, clear space, and minimum size.
- [x] Verify legibility at 32 px and contrast requirements.

### 4. [P0 · Brand] Apply the Showbranch identity across project metadata

Depends on #3.

**Acceptance criteria**

- [ ] Update repository description, topics, social preview, and README header.
- [ ] Add canonical brand assets under `assets/brand/`.
- [ ] Add shared install-surface copy for CLI, Skill, Codex, and Claude.
- [ ] Remove remaining AgentPages references except migration/history notes.

## Phase 1 — M1 product loop

### 5. [P0 · Core] Establish the monorepo structure and engineering baseline

Depends on #1.

**Acceptance criteria**

- [ ] Configure TypeScript workspaces for CLI, core, and Astro renderer.
- [ ] Add formatting, linting, type checking, and tests.
- [ ] Add CI for pull requests and the default branch.
- [ ] Document supported Node.js and package-manager versions.
- [ ] Keep the core model-agnostic and free of hosted-service dependencies.

### 6. [P0 · Core] Define the versioned site schema and validation contract

Depends on #5.

**Acceptance criteria**

- [ ] Publish the `0.1` JSON Schema.
- [ ] Model profile, projects, links, theme tokens, and metadata.
- [ ] Reject unknown or unsafe fields with structured path-based errors.
- [ ] Add valid and invalid golden fixtures.
- [ ] Document versioning and future migration rules.

### 7. [P0 · GitHub] Import a public GitHub profile deterministically

Depends on #6.

**Acceptance criteria**

- [ ] Fetch public profile and repositories without requiring a token.
- [ ] Support an optional token without persisting it.
- [ ] Exclude forks and archived repositories by default.
- [ ] Rank projects deterministically with configurable limits.
- [ ] Handle missing fields, API errors, and rate limits clearly.
- [ ] Cover normalization with offline fixtures and tests.

### 8. [P0 · CLI] Implement `showbranch init`

Depends on #5 and #6.

**Acceptance criteria**

- [ ] Create a new project without overwriting existing files.
- [ ] Generate a valid starter site document and required configuration.
- [ ] Support non-interactive flags for agent use.
- [ ] Return stable non-zero exit codes and structured errors.
- [ ] Add integration tests for clean and conflicting directories.

### 9. [P0 · CLI] Implement `github import`, `validate`, and JSON output

Depends on #7 and #8.

**Acceptance criteria**

- [ ] Implement `showbranch github import <handle>`.
- [ ] Implement `showbranch validate`.
- [ ] Support human-readable and `--json` output.
- [ ] Never log or serialize credentials.
- [ ] Add CLI integration tests for success and failure paths.

### 10. [P0 · Renderer] Build the Astro static renderer

Depends on #6.

**Acceptance criteria**

- [ ] Render the canonical site document without copying content into components.
- [ ] Generate static output compatible with project and user GitHub Pages sites.
- [ ] Set canonical URLs and base paths correctly.
- [ ] Provide accessible semantic markup and metadata.
- [ ] Cover representative fixtures with build tests.

### 11. [P0 · Design] Build the premium Minimal theme

Depends on #3 and #10.

**Acceptance criteria**

- [ ] Implement responsive profile, project, contact, and footer sections.
- [ ] Support light and dark color modes.
- [ ] Expose only documented, validated theme tokens.
- [ ] Meet WCAG AA contrast and keyboard-navigation requirements.
- [ ] Reach 95+ Lighthouse scores on the reference portfolio.
- [ ] Add visual regression baselines for key breakpoints.

### 12. [P0 · CLI] Implement `dev`, `build`, `doctor`, and `capabilities`

Depends on #9 and #10.

**Acceptance criteria**

- [ ] Implement local preview and production build commands.
- [ ] Add `doctor` checks with repair guidance.
- [ ] Add `capabilities --json` for agent discovery.
- [ ] Keep command output deterministic and script-friendly.
- [ ] Add smoke tests for every command.

### 13. [P0 · Deploy] Generate a reviewed GitHub Pages workflow

Depends on #10 and #12.

**Acceptance criteria**

- [ ] Generate a least-privilege GitHub Actions workflow.
- [ ] Validate before building and deploying.
- [ ] Support project and user Pages URL shapes.
- [ ] Document required repository settings.
- [ ] Keep deployment separate from import/edit commands.
- [ ] Require explicit user approval before an agent initiates publication.

### 14. [P0 · E2E] Prove GitHub profile to live portfolio in under five minutes

Depends on #7–#13.

**Acceptance criteria**

- [ ] Test ten clean end-to-end runs with representative public profiles.
- [ ] Achieve at least 9/10 successful previews without manual repair.
- [ ] Record median time to preview and deploy.
- [ ] Publish one reference portfolio through GitHub Pages.
- [ ] Document every observed onboarding failure and create follow-up issues.

## Phase 2 — Agent-native discovery and safety

### 15. [P0 · Protocol] Specify `.showbranch/manifest.json`

Depends on #6 and #12.

**Acceptance criteria**

- [ ] Declare schema version, content paths, theme, capabilities, and validation commands.
- [ ] Distinguish read-only, safe-write, approval-required, and unsupported operations.
- [ ] Publish the manifest schema and examples.
- [ ] Add compatibility and malformed-manifest tests.

### 16. [P0 · Safety] Define safe agent operations and approval boundaries

Depends on #15.

**Acceptance criteria**

- [ ] Specify inspect, import, edit, reorder, theme, validate, preview, and deploy operations.
- [ ] Require confirmation for deploy, destructive replacement, and permission changes.
- [ ] Define idempotency, diff, rollback, and error semantics.
- [ ] Add a threat model for untrusted profile and repository content.
- [ ] Add negative tests for path traversal, unsafe URLs, and secret leakage.

### 17. [P1 · Discovery] Add repository-level agent instructions

Depends on #15 and #16.

**Acceptance criteria**

- [ ] Add a concise root `AGENTS.md`.
- [ ] Document canonical commands, owned files, generated files, and safety rules.
- [ ] Add compatible entry points only where supported and necessary.
- [ ] Verify Codex and Claude can discover the workflow in fresh sessions.

### 18. [P1 · Evals] Build cross-agent discovery and workflow evaluations

Depends on #16 and #17.

**Acceptance criteria**

- [ ] Define should-trigger and should-not-trigger prompt sets.
- [ ] Test GitHub import, content updates, project selection, theme changes, and preview.
- [ ] Target 90%+ correct activation and under 5% false activation.
- [ ] Record reproducible results for Codex and Claude.
- [ ] Run deterministic checks in CI where possible.

## Phase 3 — Skill distribution

### 19. [P0 · Skill] Create the canonical Showbranch Skill

Depends on #16–#18.

**Acceptance criteria**

- [ ] Add `skills/showbranch/SKILL.md` with a valid name and intent-rich description.
- [ ] Reuse core commands and schemas rather than duplicating business logic.
- [ ] Include safe repair, preview, and approval workflows.
- [ ] Keep destructive publication outside automatic invocation.
- [ ] Pass the trigger evaluation suite.

### 20. [P1 · Skill] Validate installation on Codex and Claude Code

Depends on #19.

**Acceptance criteria**

- [ ] Install the Skill from the public repository into fresh Codex and Claude environments.
- [ ] Verify automatic discovery for high-intent prompts.
- [ ] Verify explicit invocation and uninstall behavior.
- [ ] Add reproducible installation checks to CI.
- [ ] Document one-line install commands.

### 21. [P1 · Distribution] Publish and verify Showbranch on skills.sh

Depends on #20.

**Acceptance criteria**

- [ ] Trigger the first telemetry-enabled installation from the public repository.
- [ ] Verify listing, description, source, audit status, and install count.
- [ ] Add the official install-count badge.
- [ ] Verify discovery for agreed high-intent queries.
- [ ] Document the path to 100 and 1,000 genuine installs.

## Phase 4 — Plugins

### 22. [P1 · Plugin] Package the portable skills-only plugin

Depends on #3, #19, and #20.

**Acceptance criteria**

- [ ] Add a root portable `plugin.json`.
- [ ] Reference the canonical Skill and shared brand assets.
- [ ] Include complete author, repository, homepage, license, keywords, and listing metadata.
- [ ] Validate package paths and public-submission constraints.
- [ ] Avoid an MCP server until a validated workflow requires one.

### 23. [P1 · Codex] Test and submit the Showbranch plugin for Codex/ChatGPT

Depends on #22.

**Acceptance criteria**

- [ ] Test from a repository marketplace in a clean environment.
- [ ] Verify install, discovery, reference workflow, update, and uninstall.
- [ ] Prepare icons, screenshots, descriptions, and policy attestations.
- [ ] Upload the package and resolve automated findings.
- [ ] Submit for review and track the outcome without blocking the core launch.

### 24. [P1 · Claude] Package and publish the Showbranch Claude plugin

Depends on #3 and #19.

**Acceptance criteria**

- [ ] Add `.claude-plugin/plugin.json` with the permanent `showbranch` slug.
- [ ] Add the shared icon, metadata, and canonical Skill.
- [ ] Publish and test an owned GitHub marketplace.
- [ ] Pass `claude plugin validate --strict` and plugin evals.
- [ ] Prepare and submit the public-directory package when eligible.

## Phase 5 — Launch

### 25. [P1 · Docs] Build the launch site, documentation, and uncut demo

Depends on #4, #14, #19, #23, and #24.

**Acceptance criteria**

- [ ] Publish a high-quality landing page and live reference portfolio.
- [ ] Document install, first portfolio, customization, validation, and deployment.
- [ ] Record a 30–45 second uncut GitHub-username-to-preview demo.
- [ ] Explain the architecture, permissions, and safety model.
- [ ] Provide copyable CLI, Skill, Codex, and Claude entry points.

### 26. [P1 · Adoption] Complete ten real pilot portfolios

Depends on #14 and #25.

**Acceptance criteria**

- [ ] Recruit ten developers with varied GitHub profiles.
- [ ] Record time to preview, time to deploy, failure points, and satisfaction.
- [ ] Obtain explicit permission before publishing any showcase entry.
- [ ] Fix P0/P1 onboarding failures or create linked issues.
- [ ] Publish an opt-in gallery with at least five examples.

### 27. [P1 · Community] Prepare the repository for contributors

Depends on #5 and #25.

**Acceptance criteria**

- [ ] Add contributing, code of conduct, security, support, and governance documents.
- [ ] Add issue forms and pull-request template.
- [ ] Define labels, milestones, triage expectations, and release cadence.
- [ ] Seed well-scoped good-first issues.
- [ ] Document theme and adapter contribution boundaries.

### 28. [P1 · Release] Ship Showbranch v0.1 and execute the launch campaign

Depends on #21 and #23–#27.

**Acceptance criteria**

- [ ] Publish signed release notes and migration/versioning expectations.
- [ ] Verify CLI, Skill, plugin, demo, docs, and reference deployment from clean environments.
- [ ] Publish tailored launch posts for GitHub, Hacker News, Reddit, Dev.to, Astro, Codex, and Claude audiences.
- [ ] Track stars, installs, first previews, deployments, and returning users.
- [ ] Publish the next roadmap based on activation evidence rather than star count alone.

## Post-v0.1 candidates

Create these only after M1 usage validates demand:

- Theme compatibility specification and conformance suite.
- Third-party theme gallery and review process.
- Import refresh with conflict-aware content preservation.
- Portfolio analytics without a required hosted backend.
- Additional portfolio layouts and internationalization.
- MCP server only if remote services or controlled authenticated actions become necessary.

