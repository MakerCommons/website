# MakerCommons — website

The public site for the [MakerCommons](https://github.com/MakerCommons) collective.
Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
deployed as a static site to Cloudflare Pages.

Projects and makers are pulled **live from the GitHub org at build time** — ship
a new repo or add a member and the next build picks it up automatically.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # static output in dist/
npm run preview    # serve the built site locally
```

## GitHub data (`GITHUB_TOKEN`)

At build time the site calls the GitHub API to list the org's public repos and
members. It works with no token (public data, 60 req/hour), but a token is
recommended:

- **Higher rate limit** for the build.
- **Shows org members** whose membership is private (the API only returns
  private members to an authenticated org member).

Set it locally in `.env`:

```
GITHUB_TOKEN=ghp_xxx   # a token with read:org / public_repo is enough
```

> Members only appear if either (a) a build token can see them, or (b) they set
> their org membership to **public** on GitHub. New members default to private.

## Deploy — Cloudflare Pages

Static site, output directory `dist`.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 (see `.node-version`) |
| Env var | `GITHUB_TOKEN` (optional but recommended) |

Either connect this repo in the Cloudflare Pages dashboard (auto-deploy on push)
or push a build directly with `wrangler pages deploy dist`.

## Design notes

- **Concept:** "the shared workshop" — a community pegboard where makers hang the
  free tools they've built. Empty pegs are problems waiting for a solution.
- **Type:** Bricolage Grotesque (display), Public Sans (body), IBM Plex Mono (labels).
- **Palette:** warm paper, pine ink, commons-green, marigold — a riso/workshop feel.

## License

Code released under [AGPL-3.0](../.github/blob/main/LICENSE), like everything
MakerCommons builds.
