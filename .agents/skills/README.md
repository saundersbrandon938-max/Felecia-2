# Agent skills for Felecia Saunders' social posts

These skills are for assistants drafting social posts and related marketing for **Felecia Saunders**, NextHome Infinite Real Estate Solutions, Columbus, Georgia. They live in this folder so they are available in the repo and are not part of the website.

Nothing here publishes a post, deploys the site, or stores an API key.

## Rules for every post

Follow these even when a vendored skill is looser.

1. **Stock photos of people are not Felecia's clients and do not endorse NextHome.** Never present a stock photo of a person as a client, buyer, seller, neighbor, or as someone endorsing Felecia Saunders or NextHome Infinite Real Estate Solutions. When a photo comes from Pexels, credit the photographer and link to Pexels.
2. **Disclose AI images and virtual staging.** Any AI-generated image, virtual staging, renovation concept, or other digital alteration of a property photo must be labeled on the image and in the caption. Do not present a visualization as the property's current condition.
3. **Captions must pass a Fair Housing check.** Before a caption, listing description, or other public line is used, run it through [`fair-housing-overlay`](fair-housing-overlay/SKILL.md). Do not publish copy that steers people by race, color, religion, national origin, sex, familial status, disability, or other protected classes, including by talking about schools, religion, or who a neighborhood is "for."
4. **Do not invent property facts.** Square footage, prices, room counts, upgrades, and location claims have to come from the user or a source they supplied.
5. **No secrets in the repo.** Skills that need a key say so. Put the key in the environment, not in a file.

## Skills

| Skill | Use it for |
| --- | --- |
| [pexels-stock-photos](pexels-stock-photos/SKILL.md) | Find and download a real stock photo from Pexels (not an AI image). Requires `PEXELS_API_KEY` in the environment. Get a free key at https://www.pexels.com/api/. Do not commit the key. |
| [content-foundry](content-foundry/SKILL.md) | Brand-locked still graphics for a new listing, just sold, open house, or market update. This copy includes the skill and the still-image scripts. The Remotion and scroll-tour video engines were not copied; if video tooling is missing, make a still or carousel instead. See [SOURCE.md](content-foundry/SOURCE.md). |
| [real-estate-content-production](real-estate-content-production/SKILL.md) | Produce or review listing photos, virtual staging, property video, and agent ads without misrepresenting the property. Requires disclosure of staging and generated visuals. |
| [listing-description](listing-description/SKILL.md) | Draft a short listing description that stays inside the fair-housing overlay (no school talk, no steering, no empty clichés). |
| [fair-housing-overlay](fair-housing-overlay/SKILL.md) | The Fair Housing, TCPA, and MLS wording check. Load it with every public caption. |
| [real-estate-marketing](real-estate-marketing/SKILL.md) | MLS-style listing copy, social captions, photo direction, and open-house wording, with a Fair Housing section. Where it disagrees with the overlay (for example, naming a school district), follow the overlay. |
| [resize-for-social-media](resize-for-social-media/SKILL.md) | Resize one existing Canva design into Facebook, Instagram, LinkedIn, TikTok, X, YouTube, and Pinterest sizes. Upstream name: `canva-resize-for-social-media`. |
| [social-content-calendar-30day](social-content-calendar-30day/SKILL.md) | A 30-day cross-platform calendar: hooks, captions, CTAs, and a posting cadence that fits the agent's time. Upstream filename was `skills/sales/social-content-calendar-30day.md`; the bytes are unchanged. |

Each skill folder has the upstream `LICENSE` and a `SOURCE.md` with the upstream URL, commit SHA, and license.

## Not vendored: no license

These were not copied. GitHub reports no license, and the repositories have no `LICENSE` or `COPYING` file. Each README ends with the word "MIT" and does not include the MIT permission text or a copyright notice. That is not a clear license.

- **not vendored: no license** — [brianshepardpss/listing-desk](https://github.com/brianshepardpss/listing-desk) (listing copy, fair-housing check, listing kit, and the rest of that plugin)
- **not vendored: no license** — [eachlabs/skills](https://github.com/eachlabs/skills) (including real-estate photo generation, Instagram content, and social carousel skills)
- **not vendored: no license** — [cevatkerim/skills unsplash](https://github.com/cevatkerim/skills/tree/main/skills/unsplash)

## Canva skills that were not copied

[canva-sdks/canva-skills](https://github.com/canva-sdks/canva-skills) is Apache-2.0, and that license was verified. The only social skill in that repo is `resize-for-social-media`, which is vendored above. There is no skill named `resize-for-all-social-media`. The other skills (`brand-check`, `bulk-create`, `cli`, `edit-design`, `get-design-feedback`, `implement-feedback`, and the inactive presentation skills) are general Canva tools, not social-post skills, so they were left upstream. `resize-for-social-media` says to use `edit-design` only when someone asks to recompose a design; that skill was not copied.

## Where this folder sits

The site is the static HTML under `Felecia/`. These skills are outside that directory. `.vercelignore` excludes `/.agents` so a static Vercel deploy of this repo does not upload or serve them. No website file, framework config, or Vercel project setting was changed.
