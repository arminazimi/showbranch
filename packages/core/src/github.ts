import type { GitHubRepository, GitHubUser, SiteDocument } from "./types.ts";

function optionalText(value: string | null | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

function optionalUrl(value: string | null | undefined): string | undefined {
  const normalized = optionalText(value);
  if (!normalized) return undefined;
  return /^https?:\/\//i.test(normalized) ? normalized : `https://${normalized}`;
}

export function normalizeGitHubProfile(
  user: GitHubUser,
  repositories: GitHubRepository[],
  projectLimit = 6,
): SiteDocument {
  const projects = repositories
    .filter((repository) => !repository.fork && !repository.archived)
    .sort((left, right) => {
      const byStars = right.stargazers_count - left.stargazers_count;
      return byStars || Date.parse(right.pushed_at) - Date.parse(left.pushed_at);
    })
    .slice(0, Math.max(0, projectLimit))
    .map((repository) => ({
      name: repository.name,
      ...(optionalText(repository.description) && {
        description: optionalText(repository.description),
      }),
      url: repository.html_url,
      ...(optionalUrl(repository.homepage) && {
        homepageUrl: optionalUrl(repository.homepage),
      }),
      ...(optionalText(repository.language) && {
        language: optionalText(repository.language),
      }),
      stars: repository.stargazers_count,
      topics: [...new Set(repository.topics ?? [])].sort(),
    }));

  return {
    schemaVersion: "0.1",
    profile: {
      name: optionalText(user.name) ?? user.login,
      handle: user.login,
      ...(optionalText(user.bio) && { bio: optionalText(user.bio) }),
      ...(optionalText(user.location) && { location: optionalText(user.location) }),
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      ...(optionalUrl(user.blog) && { websiteUrl: optionalUrl(user.blog) }),
    },
    projects,
  };
}

