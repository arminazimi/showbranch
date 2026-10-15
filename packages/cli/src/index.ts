#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { normalizeGitHubProfile, validateSiteDocument } from "../../core/src/index.ts";
import type { GitHubRepository, GitHubUser } from "../../core/src/index.ts";

const [, , command, subcommand, argument] = process.argv;

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

async function githubRequest<T>(path: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "repobloom-cli",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) {
    fail(`GitHub API returned ${response.status} for ${path}.`);
  }
  return response.json() as Promise<T>;
}

async function importGitHub(handle: string): Promise<void> {
  if (!handle) fail("Usage: repobloom github import <handle>");
  const encodedHandle = encodeURIComponent(handle);
  const [user, repositories] = await Promise.all([
    githubRequest<GitHubUser>(`/users/${encodedHandle}`),
    githubRequest<GitHubRepository[]>(`/users/${encodedHandle}/repos?per_page=100&sort=pushed`),
  ]);
  const document = normalizeGitHubProfile(user, repositories);
  const result = validateSiteDocument(document);
  if (!result.ok) fail(JSON.stringify(result.issues, null, 2));
  process.stdout.write(`${JSON.stringify(document, null, 2)}\n`);
}

async function validateFile(file: string): Promise<void> {
  if (!file) fail("Usage: repobloom validate <site.json>");
  let value: unknown;
  try {
    value = JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    fail(`Could not read valid JSON from ${file}: ${error instanceof Error ? error.message : String(error)}`);
  }
  const result = validateSiteDocument(value);
  if (!result.ok) fail(result.issues.map((issue) => `${issue.path}: ${issue.message}`).join("\n"));
  console.log(`${file} is a valid RepoBloom 0.1 site document.`);
}

if (command === "github" && subcommand === "import") {
  await importGitHub(argument);
} else if (command === "validate") {
  await validateFile(subcommand);
} else {
  fail("Usage:\n  repobloom github import <handle>\n  repobloom validate <site.json>");
}

