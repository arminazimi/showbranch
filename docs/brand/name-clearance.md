# RepoBloom name-clearance report

**Checked:** 2026-10-15 (Asia/Tehran)  
**Decision:** **NO-GO — rename before investing in visual identity, packages, skills, or plugins.**  
**Research scope:** exact-name and close commercial/discoverability collisions. This is a product-name screen, not a legal opinion or a substitute for counsel-assisted trademark clearance.

## Executive conclusion

`RepoBloom` is not a sufficiently ownable name for this project. Three independent signals drive the decision:

1. A public GitHub repository named **RepoBloom** already existed before this repository and describes a developer tool for visualizing Git repositories.
2. A second public project used **RepoBloom** in an unusually adjacent category: analyzing a public GitHub portfolio and turning it into a developer growth plan. Its public deployment still contains `repobloom` in the hostname even though its current README title is “Git --Profile Print.”
3. `repobloom.com` was registered on 2026-09-13 and is not controlled by this project.

The exact-name trademark searches performed below returned no records, but that does not outweigh the practical product, search, package, domain, and attribution conflicts. The cheapest and safest point to rename is now, before logo work and distribution identifiers become dependencies.

**Final recommendation:** rename. Do not publish npm packages, a skills.sh Skill, or Codex/ChatGPT/Claude plugins as `repobloom`.

## Collision register

| Surface | Finding on 2026-10-15 | Risk | Evidence |
|---|---|---:|---|
| GitHub repository name | Exact collision: `emuwastaken/RepoBloom`, created 2026-03-15, describes a 3D tool for visualizing Git repository structure. It was public, unarchived, with no declared license, zero stars and no recent commit after its creation date. | **High discoverability; medium category** | [Repository](https://github.com/emuwastaken/RepoBloom), [GitHub REST endpoint](https://api.github.com/repos/emuwastaken/RepoBloom) |
| Adjacent product | Anuranjan Jain's July 2026 OpenAI Build Week project publicly used `repobloom` for a product that analyzes public GitHub profiles, derives skill evidence, and creates a developer learning plan. This is close to RepoBloom's proposed “GitHub profile to portfolio” starting point and therefore materially more concerning than a coincidental string match. The current README calls it “Git --Profile Print,” but the deployment URL remains `repobloom-build-week...`. | **High category and attribution** | [Source repository](https://github.com/AnuranjanJain/OpenAIBuildWeek-July-26), [live deployment](https://repobloom-build-week.asta-aflc.chatgpt.site/), [README](https://github.com/AnuranjanJain/OpenAIBuildWeek-July-26/blob/main/README.md), [deployment reference](https://github.com/AnuranjanJain/OpenAIBuildWeek-July-26/blob/main/docs/DEVPOST_SUBMISSION.md) |
| This repository | `arminazimi/repobloom` exists and is currently the intended project home. GitHub repository names are owner-scoped, so this does not prevent the exact collision above. | Controlled, but not exclusive | [Repository](https://github.com/arminazimi/repobloom) |
| GitHub account/org slug | GitHub's user search returned no account whose login was exactly `repobloom`. No account or organization was created during this review. An organization lookup could not be conclusively tested with the available token scope; user search is therefore evidence, not a reservation. | **Medium; unreserved** | [GitHub user search](https://github.com/search?q=repobloom&type=users), [GitHub REST search docs](https://docs.github.com/en/rest/search/search#search-users) |
| npm unscoped package | `GET https://registry.npmjs.org/repobloom` returned 404. The official npm search endpoint returned zero package results. No package was published or reserved. | **Low current collision; unreserved** | [npm registry lookup](https://registry.npmjs.org/repobloom), [npm package URL](https://www.npmjs.com/package/repobloom) |
| npm scoped packages | `@repobloom/core` returned 404. This does **not** prove that the npm organization/scope `@repobloom` is claimable or owned. | **Unknown ownership; unreserved** | [registry lookup](https://registry.npmjs.org/%40repobloom%2Fcore), [npm organizations documentation](https://docs.npmjs.com/organizations/) |
| skills.sh | The official search API returned `skills: []` and `count: 0` for `repobloom`; the direct `/repobloom` route returned 404. Nothing was published. | **Low current collision; unreserved** | [search page](https://www.skills.sh/search?q=repobloom), [search API](https://www.skills.sh/api/search?q=repobloom&limit=100), [skills.sh source](https://github.com/vercel-labs/skills) |
| Codex / ChatGPT plugins | No public GitHub plugin/manifest matching `repobloom` was found. The universal directory is account-, rollout-, plan-, region-, and workspace-dependent, and its full public catalog was not available for an authoritative unauthenticated export. Therefore availability was **not conclusively verified** and no identifier was reserved. | **Unknown; unreserved** | [OpenAI plugin overview](https://help.openai.com/en/articles/20001256-plugins-in-codex), [plugin packaging and naming](https://developers.openai.com/plugins/build/plugins) |
| Claude plugins/extensions | No public `repobloom` repository/plugin manifest was found. Anthropic's curated Desktop Extensions directory is surfaced inside Claude Desktop and does not expose a reliable public exact-name query used in this review. Therefore availability was **not conclusively verified** and no identifier was reserved. | **Unknown; unreserved** | [Anthropic Desktop Extensions overview](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop) |
| `.com` domain | `REPOBLOOM.COM` is registered. Verisign RDAP reports registration on 2026-09-13, expiration on 2027-09-13, and `client transfer prohibited`. Registrant identity is redacted/not exposed by the registry response. | **High** | [Verisign RDAP](https://rdap.verisign.com/com/v1/domain/repobloom.com), [ICANN Lookup](https://lookup.icann.org/en/lookup?name=repobloom.com) |
| `.io` domain | The registry RDAP endpoint returned 404, which normally indicates no domain object at the time checked. This is a point-in-time signal, not a reservation or registrar availability guarantee. | **Apparently open; unreserved** | [Identity Digital RDAP](https://rdap.identitydigital.services/rdap/domain/repobloom.io) |
| `.org` domain | Public Interest Registry RDAP returned 404. This is a point-in-time signal, not a reservation or registrar availability guarantee. | **Apparently open; unreserved** | [PIR RDAP](https://rdap.publicinterestregistry.org/rdap/domain/repobloom.org) |
| `.dev` domain | Google's registry RDAP endpoint returned HTTP 403 to this client, so availability could not be established reliably. | **Unknown** | [Google Registry RDAP](https://pubapi.registry.google/rdap/domain/repobloom.dev) |
| Social handles | Exact handles were not claimed. GitHub returned no exact account login. X, Bluesky, LinkedIn, YouTube, and other platforms either do not expose authoritative public availability or may return misleading “not found” pages for suspended/reserved names; they are intentionally recorded as **unverified**, not “available.” | **Unknown; unreserved** | Platform checks must be repeated manually only after a replacement name is approved. |

## Trademark screen

### United States — USPTO

An exact **Wordmark** search for `RepoBloom` in the official USPTO Trademark Search system returned **“No results found”** on 2026-10-15 (live and dead counts both zero).

- Search portal: <https://tmsearch.uspto.gov/search/search-results>
- USPTO search guidance: <https://www.uspto.gov/trademarks/search>

### European Union — EUIPO

An exact basic search for `RepoBloom` in the official EUIPO eSearch Plus database returned **0 trade marks, 0 designs, 0 owners, and 0 representatives** and displayed “No results were found” on 2026-10-15.

- Reproducible search URL: <https://euipo.europa.eu/eSearch/#basic/1+1+1+1/100+100+100+100/RepoBloom>
- EUIPO search guidance: <https://www.euipo.europa.eu/en/search-ip>

### International and participating national collections — WIPO

The official WIPO Global Brand Database was consulted as the appropriate international portal. Its terms expressly prohibit automated querying, so this review did not scrape or automate an exact-name result. WIPO also warns that its database is not a legal availability opinion and recommends checking national/regional offices. The absence of indexed web results for `RepoBloom` is therefore **not recorded as a cleared search**.

- Global Brand Database: <https://branddb.wipo.int/>
- Scope and limitations: <https://www.wipo.int/en/web/global-brand-database>
- Terms (including the automation restriction): <https://www.wipo.int/en/web/global-brand-database/terms_and_conditions>
- FAQ and availability caveat: <https://www.wipo.int/en/web/global-brand-database/faqs_branddb>

### Legal interpretation

No exact USPTO or EUIPO record was found, but trademark rights can arise from use, similarity—not only exact identity—and country-specific common-law or unindexed rights. The adjacent public product and exact developer-tool collision create practical confusion risk even without a registration. If a future replacement name becomes commercially important, obtain professional clearance in the intended launch jurisdictions and relevant Nice classes, likely including classes 9 and 42.

## Identifier and ownership decision

If the name were kept, the canonical lowercase slug would be **`repobloom`** (one word, ASCII lowercase). OpenAI's plugin documentation calls for a stable kebab-case plugin `name`; because there is no separator in the wordmark, `repobloom` is the consistent slug across GitHub, npm, skills.sh, CLI, Skill, and plugin manifests.

However, this report's decision is to **retire that slug for new public distribution**.

Current ownership/reservation status:

| Identifier | Current owner / state | Decision |
|---|---|---|
| GitHub repository `arminazimi/repobloom` | Owned by GitHub user `arminazimi` | Keep only as a temporary migration location until a replacement name is selected. |
| npm `repobloom` | No package observed; not owned or reserved | Do not publish. |
| npm scope `@repobloom` | Ownership not established | Do not create. |
| skills.sh `repobloom` | No listing observed; not reserved | Do not publish. |
| Codex/ChatGPT plugin `repobloom` | Not published or reserved | Do not submit. |
| Claude plugin/extension `repobloom` | Not published or reserved | Do not submit. |
| Domains | `.com` owned by an unknown third party; `.io`/`.org` only appeared unregistered at check time | Do not purchase under this name. |
| Social handles | Unverified and unreserved | Do not claim under this name. |

For the replacement brand, use a publisher identity controlled by the maintainer initially (`arminazimi`), then move durable public assets to one dedicated organization/publisher identity before the first stable release. Record recovery owners and at least two maintainers for organizational accounts. Do not let an npm scope, domain, marketplace listing, or social account be owned solely by an unrelated contributor.

## Recommended next action

1. Generate a shortlist whose candidates do not contain `RepoBloom`, `Repo Bloom`, or confusingly similar variants.
2. Run the same checks before sharing the shortlist publicly.
3. Select one name only after the `.com` or a deliberate alternative domain, GitHub organization, npm scope/package, skills.sh slug, plugin ID, and priority social handles are all simultaneously claimable.
4. Reserve those identifiers in one coordinated session, then rename the repository and code before Issue #2 begins.

## Method and limitations

- GitHub evidence came from GitHub's official REST search and repository endpoints on 2026-10-15. Search indices can lag and private repositories are invisible.
- npm evidence came from the official registry and search endpoint. A 404/zero count is not a reservation and can change immediately.
- skills.sh evidence came from its public search endpoint and direct route. Indexing may lag publication.
- Domain RDAP results are point-in-time registry data; 404 is not a purchase guarantee. No registrar checkout was attempted.
- Plugin catalogs can vary by account, region, plan, workspace, and rollout. Public GitHub/code searches cannot prove that no private, pending, workspace, or unpublished plugin uses the name.
- Social-platform “not found” responses are not reliable availability proofs; suspended, protected, or reserved handles may look absent.
- Trademark searches were exact-text screens only. They did not include phonetic, translation, logo, owner, common-law, company-register, app-store, or comprehensive class-based similarity searches.
- No accounts were created, domains purchased, identifiers reserved, or third parties contacted during this work.
