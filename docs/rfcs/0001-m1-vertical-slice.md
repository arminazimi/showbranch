# RFC 0001: M1 vertical slice

- Status: Accepted for implementation
- Milestone: M1 — From GitHub Profile to Live Portfolio

## Outcome

A developer can provide a public GitHub username and obtain a versioned, validated portfolio document. Later M1 slices will render that same document with Astro and publish it through GitHub Actions.

## Why this is first

The central product risk is not whether Astro can render a portfolio. It is whether arbitrary GitHub data can be converted into a stable document that agents can edit safely and the framework can validate without trusting the agent. This slice tests that boundary before UI work expands the surface area.

## Data flow

```text
GitHub public API
  -> normalize deterministic fields
  -> Showbranch site document (schemaVersion 0.1)
  -> independent validation
  -> renderer (next slice)
  -> GitHub Pages workflow (later slice)
```

## Decisions

1. The canonical artifact is JSON-compatible data, not generated UI code.
2. Imported repositories are ordered by stars, then recent activity, so repeated imports are predictable.
3. Forks and archived repositories are excluded by default.
4. A missing biography is allowed; a missing display name falls back to the GitHub login.
5. Import is read-only. Publishing is not part of this command and must require a separate, user-approved Git operation.
6. Validation returns structured issues with paths so both humans and agents can repair documents safely.

## Acceptance criteria for this slice

- A GitHub user and repository response can be normalized without network access in tests.
- The result declares `schemaVersion: "0.1"`.
- Invalid profile URLs, empty identity fields, and malformed project data are rejected.
- Validation is exposed through the CLI with a non-zero exit code on failure.
- No token or private GitHub data is persisted.

## Deferred from this slice

- Astro renderer and visual theme
- `showbranch init`
- GitHub Pages workflow generation
- agent discovery manifest and permission policy
- skill packages for Codex, Claude Code, and Cursor
- automated publishing

