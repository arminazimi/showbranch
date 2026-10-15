import type {
  Project,
  SiteDocument,
  ValidationIssue,
  ValidationResult,
} from "./types.ts";

const githubHandle = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isHttpUrl(value: unknown, githubOnly = false): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    return !githubOnly || (url.protocol === "https:" && url.hostname === "github.com");
  } catch {
    return false;
  }
}

function validateProject(value: unknown, index: number, issues: ValidationIssue[]): value is Project {
  const path = `projects[${index}]`;
  if (!isRecord(value)) {
    issues.push({ path, message: "must be an object" });
    return false;
  }
  if (typeof value.name !== "string" || !value.name.trim()) {
    issues.push({ path: `${path}.name`, message: "must be a non-empty string" });
  }
  if (!isHttpUrl(value.url, true)) {
    issues.push({ path: `${path}.url`, message: "must be an https://github.com URL" });
  }
  if (!Number.isInteger(value.stars) || Number(value.stars) < 0) {
    issues.push({ path: `${path}.stars`, message: "must be a non-negative integer" });
  }
  if (!Array.isArray(value.topics) || value.topics.some((topic) => typeof topic !== "string")) {
    issues.push({ path: `${path}.topics`, message: "must be an array of strings" });
  }
  if (value.homepageUrl !== undefined && !isHttpUrl(value.homepageUrl)) {
    issues.push({ path: `${path}.homepageUrl`, message: "must be an http(s) URL" });
  }
  return true;
}

export function validateSiteDocument(value: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];
  if (!isRecord(value)) {
    return { ok: false, issues: [{ path: "$", message: "must be an object" }] };
  }
  if (value.schemaVersion !== "0.1") {
    issues.push({ path: "schemaVersion", message: 'must equal "0.1"' });
  }

  if (!isRecord(value.profile)) {
    issues.push({ path: "profile", message: "must be an object" });
  } else {
    if (typeof value.profile.name !== "string" || !value.profile.name.trim()) {
      issues.push({ path: "profile.name", message: "must be a non-empty string" });
    }
    if (typeof value.profile.handle !== "string" || !githubHandle.test(value.profile.handle)) {
      issues.push({ path: "profile.handle", message: "must be a valid GitHub handle" });
    }
    if (!isHttpUrl(value.profile.profileUrl, true)) {
      issues.push({ path: "profile.profileUrl", message: "must be an https://github.com URL" });
    }
    if (value.profile.avatarUrl !== undefined && !isHttpUrl(value.profile.avatarUrl)) {
      issues.push({ path: "profile.avatarUrl", message: "must be an http(s) URL" });
    }
    if (value.profile.websiteUrl !== undefined && !isHttpUrl(value.profile.websiteUrl)) {
      issues.push({ path: "profile.websiteUrl", message: "must be an http(s) URL" });
    }
  }

  if (!Array.isArray(value.projects)) {
    issues.push({ path: "projects", message: "must be an array" });
  } else {
    value.projects.forEach((project, index) => validateProject(project, index, issues));
  }

  return issues.length
    ? { ok: false, issues }
    : { ok: true, value: value as unknown as SiteDocument };
}

