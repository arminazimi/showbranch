import assert from "node:assert/strict";
import test from "node:test";
import { normalizeGitHubProfile, validateSiteDocument } from "../src/index.ts";
import type { GitHubRepository, GitHubUser } from "../src/index.ts";

const user: GitHubUser = {
  login: "octocat",
  name: null,
  bio: "  Builds useful things.  ",
  location: null,
  avatar_url: "https://avatars.githubusercontent.com/u/583231",
  html_url: "https://github.com/octocat",
  blog: "github.blog",
};

const repositories: GitHubRepository[] = [
  {
    name: "archived",
    description: null,
    html_url: "https://github.com/octocat/archived",
    homepage: null,
    language: null,
    stargazers_count: 100,
    topics: [],
    fork: false,
    archived: true,
    pushed_at: "2026-01-01T00:00:00Z",
  },
  {
    name: "hello-world",
    description: "My first repository",
    html_url: "https://github.com/octocat/hello-world",
    homepage: "https://example.com",
    language: "TypeScript",
    stargazers_count: 42,
    topics: ["portfolio", "agent", "agent"],
    fork: false,
    archived: false,
    pushed_at: "2026-03-01T00:00:00Z",
  },
  {
    name: "newer",
    description: null,
    html_url: "https://github.com/octocat/newer",
    homepage: null,
    language: "Go",
    stargazers_count: 42,
    topics: [],
    fork: false,
    archived: false,
    pushed_at: "2026-04-01T00:00:00Z",
  },
];

test("normalizes a public GitHub profile deterministically", () => {
  const document = normalizeGitHubProfile(user, repositories);

  assert.equal(document.schemaVersion, "0.1");
  assert.equal(document.profile.name, "octocat");
  assert.equal(document.profile.bio, "Builds useful things.");
  assert.equal(document.profile.websiteUrl, "https://github.blog");
  assert.deepEqual(document.projects.map((project) => project.name), ["newer", "hello-world"]);
  assert.deepEqual(document.projects[1].topics, ["agent", "portfolio"]);
  assert.deepEqual(validateSiteDocument(document), { ok: true, value: document });
});

test("reports paths for unsafe or malformed content", () => {
  const result = validateSiteDocument({
    schemaVersion: "1",
    profile: { name: "", handle: "-bad", profileUrl: "javascript:alert(1)" },
    projects: [{ name: "repo", url: "http://evil.example/repo", stars: -1, topics: "agent" }],
  });

  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.deepEqual(result.issues.map((issue) => issue.path), [
      "schemaVersion",
      "profile.name",
      "profile.handle",
      "profile.profileUrl",
      "projects[0].url",
      "projects[0].stars",
      "projects[0].topics",
    ]);
  }
});

