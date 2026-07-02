/**
 * Build-time GitHub data for the MakerCommons org.
 *
 * Runs only during `astro build` / `astro dev` (never in the browser).
 * If GITHUB_TOKEN is set it is used for a higher rate limit and to see
 * private org members; otherwise public data is fetched unauthenticated.
 * Any network/API failure degrades to empty arrays so the build never breaks.
 */

const ORG = 'MakerCommons';
const API = 'https://api.github.com';

// Repos that are org plumbing, not tools we want to showcase.
const HIDDEN_REPOS = new Set(['.github', 'website', 'makercommons-site']);

export interface Project {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  updatedAt: string;
}

export interface Maker {
  login: string;
  name: string | null;
  bio: string | null;
  avatar: string;
  url: string;
}

function token(): string | undefined {
  return (
    import.meta.env.GITHUB_TOKEN ||
    (typeof process !== 'undefined' ? process.env?.GITHUB_TOKEN : undefined)
  );
}

async function gh<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'makercommons-site',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  const t = token();
  if (t) headers.Authorization = `Bearer ${t}`;

  try {
    const res = await fetch(`${API}${path}`, { headers });
    if (!res.ok) {
      console.warn(`[github] ${path} → ${res.status} ${res.statusText}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[github] ${path} failed:`, (err as Error).message);
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const repos = await gh<any[]>(
    `/orgs/${ORG}/repos?per_page=100&type=public&sort=updated`,
  );
  if (!repos) return [];
  return repos
    .filter((r) => !r.fork && !r.archived && !HIDDEN_REPOS.has(r.name))
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      stars: r.stargazers_count ?? 0,
      topics: Array.isArray(r.topics) ? r.topics : [],
      updatedAt: r.pushed_at || r.updated_at,
    }));
}

export async function getMakers(): Promise<Maker[]> {
  const members = await gh<any[]>(`/orgs/${ORG}/members?per_page=100`);
  if (!members || members.length === 0) return [];

  const enriched = await Promise.all(
    members.map(async (m) => {
      const u = await gh<any>(`/users/${m.login}`);
      return {
        login: m.login,
        name: u?.name ?? null,
        bio: u?.bio ?? null,
        avatar: m.avatar_url,
        url: m.html_url,
      } satisfies Maker;
    }),
  );
  return enriched;
}

export interface OrgStats {
  toolCount: number;
  makerCount: number;
}

export async function getStats(
  projects: Project[],
  makers: Maker[],
): Promise<OrgStats> {
  return { toolCount: projects.length, makerCount: makers.length };
}
