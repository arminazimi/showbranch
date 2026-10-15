export interface SiteDocument {
  schemaVersion: "0.1";
  profile: Profile;
  projects: Project[];
}

export interface Profile {
  name: string;
  handle: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  profileUrl: string;
  websiteUrl?: string;
}

export interface Project {
  name: string;
  description?: string;
  url: string;
  homepageUrl?: string;
  language?: string;
  stars: number;
  topics: string[];
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; value: SiteDocument }
  | { ok: false; issues: ValidationIssue[] };

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  avatar_url: string;
  html_url: string;
  blog: string | null;
}

export interface GitHubRepository {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}
