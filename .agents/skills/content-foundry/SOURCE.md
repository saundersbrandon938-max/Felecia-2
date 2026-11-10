# Source

- Upstream: https://github.com/BuildThingsThatBuildthings/content-foundry/tree/a4b78a16cf40e04e5841ea1a54abaf3d300e7678/skill/content-foundry
- Commit: `a4b78a16cf40e04e5841ea1a54abaf3d300e7678` on `main` (2026-07-29)
- License: MIT. The upstream `LICENSE` is copied here unchanged. Copyright (c) 2026 Ryan Wanner.

Vendored skill files: `SKILL.md`, `INSTALL.md`, `requirements.txt`, `references/*.md`, the still-image scripts under `scripts/` (`brand_lint.py`, `brandkit.py`, `composite.py`, `doctor.py`, `export.py`, `inventory.py`, `slop_check.py`, `slop-patterns.json`, `unify.py`), and `engines/outreach/build_page.py`.

Not vendored, because they are the separate heavy video engines or assets those engines use:

- `engines/remotion/` (Remotion project, compositions, and `package-lock.json`)
- `engines/scroll-tour/` (scroll-tour builder and vendored playback script)
- `scripts/render_video.sh` and `scripts/video_props.py` (they only drive the Remotion engine)
- `assets/fonts/PlayfairDisplay.ttf`, `assets/fonts/SourceSans3.ttf`, and their SIL Open Font License texts

`scripts/composite.py` uses those fonts when present and otherwise falls back to system fonts. The reference notes `references/engine-remotion.md` and `references/engine-scroll-tour.md` are included so the skill's routing table still resolves; the engines themselves are not in this copy. If a video engine is missing, the upstream skill says to fall back to a still or carousel.

The Remotion lockfile also depends on packages under the Remotion license, which is separate from this repository's MIT license. Those packages were not copied.
