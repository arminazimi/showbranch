# Showbranch distribution research

Status: primary-source review completed 2026-10-15. This note covers skills.sh and Claude only; Codex distribution is tracked separately.

## Decision summary

Showbranch should ship one canonical public GitHub repository containing both:

- a cross-agent skill at `skills/showbranch/SKILL.md`, installable through `npx skills add arminazimi/showbranch --skill showbranch`; and
- a Claude plugin with the permanent slug `showbranch`, a branded `displayName`, an icon, and the skill under `skills/showbranch/`.

Launch first through skills.sh's automatic discovery and a Showbranch-owned Claude marketplace. Treat inclusion in skills.sh Official and Anthropic's official Claude marketplace as later distribution wins, not launch dependencies, because neither has a documented self-service route.

## Verified: skills.sh

- A public GitHub repository is the publishing source. skills.sh says skills appear automatically after users install them with `npx skills add <owner>/<repo>` and anonymous telemetry is enabled; ranking is based on aggregate installs. There is no separate ordinary leaderboard submission form. ([FAQ](https://www.skills.sh/docs/faq), [overview](https://www.skills.sh/docs))
- The CLI supports both Claude Code and Codex, can target agents explicitly, and can install a selected skill. A suitable launch command is `npx skills add arminazimi/showbranch --skill showbranch -a claude-code -a codex`. ([official CLI repository](https://github.com/vercel-labs/skills))
- Search covers skill name, source, and description. Single-word queries are fuzzy; multi-word queries are semantic. The skill description therefore needs natural intent phrases such as “create a portfolio from a GitHub profile,” “publish to GitHub Pages,” “static portfolio,” and “agent-native website.” ([API reference](https://www.skills.sh/docs/api))
- Leaderboard views include all-time, trending, and hot. Reported installs are deduplicated. Automatic security audits begin after a skill's first install and can lag by a few minutes. ([API reference](https://www.skills.sh/docs/api))
- The official `find-skills` skill is itself the main agent-side discovery path. Its selection guidance considers installs, source reputation, and GitHub stars, so stars and installs are complementary trust signals even though the public leaderboard is install-driven. ([find-skills source](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md))
- A repository can add the official install-count badge to its README. A root `skills.sh.json` can group multiple skills on the repository page, but it does not change installation or offer logo/color controls. ([overview](https://www.skills.sh/docs), [customization](https://www.skills.sh/docs/customize))
- The Official collection is described as first-party skills from organizations that build the technology being taught. Showbranch is conceptually eligible for that definition, but the public documentation does not identify an application workflow. ([API reference](https://www.skills.sh/docs/api), [Official collection](https://www.skills.sh/official))

## Verified: Claude skills and plugins

- Claude skills can load automatically: `SKILL.md` frontmatter `description` tells Claude what the skill does and when to apply it. The description is present in context by default and full instructions load only on invocation. `disable-model-invocation: true` would defeat the auto-discoverable goal and should not be used for the primary safe workflow. ([Claude skills documentation](https://code.claude.com/docs/en/skills))
- A Claude plugin packages skills, agents, hooks, and MCP servers as one installable unit. Plugin-provided skills are namespaced, so the primary command would be `/showbranch:<skill-name>`. ([plugin overview](https://code.claude.com/docs/en/plugins))
- The plugin manifest lives at `.claude-plugin/plugin.json`. Relevant brand/discovery fields include permanent kebab-case `name`, human-facing `displayName`, `description`, `homepage`, `repository`, `license`, `keywords`, and `icon`. The icon is read for Anthropic's directory listing; it is not used by Claude Code at runtime. ([manifest reference](https://code.claude.com/docs/en/plugins/manifest-reference))
- The plugin slug should be treated as permanent. Anthropic explicitly warns that renaming breaks existing installs; visual naming changes belong in `displayName`. ([publish guide](https://code.claude.com/docs/en/plugins/publish))
- Showbranch can self-publish immediately by adding `.claude-plugin/marketplace.json` to its GitHub repository. Users then add the marketplace and install `showbranch@<marketplace-name>`. This route needs no submission form, but auto-update is off by default for third-party marketplaces. ([publish guide](https://code.claude.com/docs/en/plugins/publish), [marketplace guide](https://code.claude.com/docs/en/plugin-marketplaces))
- Public directory submission is separate: it requires a GitHub repository, local strict validation, a paid claude.ai plan, and submission through Anthropic's developer portal. A directory listing reaches claude.ai, Cowork, and Claude Code through account sync. Directory publication does not automatically put a plugin into `claude-plugins-official`; Anthropic advises authors with a partner contact to ask about that separately. ([publish guide](https://code.claude.com/docs/en/plugins/publish))
- Discovery happens through Claude Code's `/plugin` Discover/search UI, the web Claude Marketplace, or direct install by name. Anthropic's official marketplace is added automatically in normal interactive installs; the community and third-party marketplaces are not. ([Anthropic marketplaces](https://code.claude.com/docs/en/plugins/anthropic-marketplaces))
- Anthropic recommends `claude plugin validate --strict`, installing from a local marketplace, complete manifest metadata/README, and plugin evals before release. Claude's skill tooling includes description-trigger tests, making auto-invocation measurable rather than subjective. ([publish guide](https://code.claude.com/docs/en/plugins/publish), [Claude skills documentation](https://code.claude.com/docs/en/skills))

## What remains unclear

- skills.sh documents no SLA between first telemetry-enabled install and appearance in search/leaderboards.
- skills.sh documents no public application path for the Official collection or featured placement.
- `skills.sh.json` cannot carry Showbranch visual identity; brand consistency must come from the GitHub organization/repository, README/assets, skill copy, plugin `displayName`, and plugin `icon`.
- Anthropic documents the directory submission flow but not a guaranteed review time or acceptance criteria for inclusion in `claude-plugins-official` beyond contacting a partner representative.
- Cross-surface component support differs: a Claude Code plugin may contain hooks or MCP components that do not load on claude.ai/Cowork. The final plugin design must check Anthropic's support table before promising parity.

## Roadmap implications

1. **Freeze identity early.** Reserve the GitHub organization/repository and permanent `showbranch` slugs before publication; create the logo/icon system before the first Claude directory submission.
2. **Build one canonical skill.** Put `skills/showbranch/SKILL.md` in the main repository and reuse the same skill content inside the Claude plugin instead of maintaining divergent instructions.
3. **Engineer discovery copy.** Test should-trigger and should-not-trigger prompts for GitHub portfolio creation, GitHub Pages deployment, portfolio updates, and theme changes. Keep destructive publishing actions explicitly confirmed even though safe creation/editing can auto-trigger.
4. **Add distribution CI.** Validate skill frontmatter, list/install the skill locally for Claude Code and Codex, run `claude plugin validate --strict`, install from a local marketplace, and run plugin/trigger evals.
5. **Launch in layers.** First publish the GitHub repo, skills.sh install path, badge, and Showbranch-owned Claude marketplace; then submit to Anthropic's directory; pursue official-marketplace/Official recognition after traction.
6. **Track separate funnel metrics.** Measure GitHub stars, skills.sh installs/search position/audit status, Claude marketplace installs, activation-to-first-preview, and preview-to-live-deploy. A practical trust sequence is 100 stars + 100 installs, then 1,000 installs; these are internal goals, not platform guarantees.
7. **Make installation a product surface.** README and website should offer copyable one-line paths for the cross-agent skill and Claude plugin, while the CLI can recommend the plugin after a successful first portfolio build.

