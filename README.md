# Showbranch

> Turn your GitHub work into a portfolio worth showing.

Showbranch is the agent-native framework for turning public GitHub work into beautiful, safely managed portfolios. It works with your preferred coding agent, keeps every change reviewable in Git, and publishes static sites to GitHub Pages without a required backend.

## Current milestone

**M1 — From GitHub Profile to Live Portfolio**

The first vertical slice is now in place:

1. normalize GitHub user and repository responses into a versioned site document;
2. validate that document independently of any AI model;
3. expose the same validation through a small CLI;
4. cover normalization and validation with deterministic tests.

The Astro renderer, polished minimal theme, project initialization, and GitHub Pages workflow are the next slices.

## Try the current slice

Requires Node.js 22.18 or newer. No install step is needed yet.

```bash
npm test
node packages/cli/src/index.ts validate fixtures/github-profile.json
node packages/cli/src/index.ts github import octocat > site.json
```

The import command only reads GitHub's public API. Set `GITHUB_TOKEN` to increase the API rate limit; the token is never written to the generated document.

## Design constraints

- Agent-native, but not tied to a specific model or vendor.
- Declarative content with a versioned schema.
- Validation outside the agent before preview or publication.
- Static output with no Showbranch backend.
- User-approved deployment through Git and GitHub Actions.

See the [positioning and voice guide](docs/brand/positioning.md) for approved product language and [RFC 0001](docs/rfcs/0001-m1-vertical-slice.md) for scope and acceptance criteria.
