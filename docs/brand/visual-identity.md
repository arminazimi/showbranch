# Showbranch visual identity

**Status:** approved  
**Updated:** 2026-10-15

This guide is the source of truth for Showbranch's visual identity. Canonical artwork lives under `assets/brand/`; do not redraw the symbol or extract it from screenshots.

## Core idea

The symbol combines two product ideas:

- the branching path represents public Git work and agent-guided change;
- the open frame represents selecting that work, giving it structure, and making it worth showing.

The frame is intentionally open at the top and bottom. It reads as a display surface rather than a closed app tile, while the three nodes remain legible as a branch rather than a decorative line. The identity must not use leaves, flowers, or other plant metaphors.

## Logo family

| Use | Asset |
|---|---|
| Light surface, symbol | `assets/brand/svg/showbranch-symbol-light.svg` |
| Dark surface, symbol | `assets/brand/svg/showbranch-symbol-dark.svg` |
| One-color reproduction | `assets/brand/svg/showbranch-symbol-mono.svg` |
| Light surface, horizontal | `assets/brand/svg/showbranch-horizontal-light.svg` |
| Dark surface, horizontal | `assets/brand/svg/showbranch-horizontal-dark.svg` |
| Codex, Claude, and Skill listings | `assets/brand/svg/showbranch-plugin-icon.svg` |
| Browser favicon | `assets/brand/favicon.svg` |
| GitHub social preview | `assets/brand/svg/showbranch-social-preview.svg` |

The symbol is the compact logo. Use the horizontal lockup whenever the brand name is not already visible in adjacent text. The wordmark uses Inter Bold; product interfaces may render it with the documented fallback stack.

## Color

| Token | Hex | Role |
|---|---|---|
| Ink | `#10090C` | Primary dark surface and light-surface text |
| Desert Rose | `#D8A0A6` | Primary light surface and dark-surface text |
| Burgundy | `#C13D5A` | Branch path, action, focus, and selective emphasis |
| Dust | `#9B737B` | Secondary text, rules, and quiet metadata |
| Wine | `#4A1024` | Deep supporting surface; never body text |

Burgundy is an accent, not a background default. Large Burgundy fields should use Ink text. The deeper Wine shade creates the wider burgundy range without reducing small-mark legibility. Never substitute a generic purple–blue AI gradient.

### Verified contrast

- Desert Rose on Ink: `8.91:1` — WCAG AAA for text.
- Burgundy on Ink: `3.83:1` — suitable for the logo's non-text graphical elements and large display text.
- Ink on Burgundy: `3.83:1` — suitable for large control labels; use Desert Rose surfaces for normal body text.
- Dust on Ink: `4.81:1` — WCAG AA for normal text.

Do not use Burgundy for small text on Desert Rose. Use Ink for text on Burgundy controls.

## Typography

- **Primary:** Inter, weights 400, 600, and 700.
- **Technical:** JetBrains Mono, weights 400 and 600.
- **System fallback:** `ui-sans-serif, system-ui, sans-serif` and `ui-monospace, SFMono-Regular, Menlo, monospace`.

Use the sans family for product outcomes and narrative. Use monospace only for commands, paths, schema versions, labels, and measured technical detail.

## Space and scale

The base spacing unit is `4px`. Preferred steps are `4, 8, 12, 16, 24, 32, 48, 64, 96`.

Clear space around the symbol is one quarter of its rendered width. Clear space around a horizontal lockup is the height of one lowercase letter in the wordmark. Do not place the logo against a busy image without a solid Ink or Paper holding shape.

Minimum sizes:

- symbol: `24px` digital, `8mm` print;
- horizontal lockup: `120px` digital, `32mm` print;
- plugin icon: use the square asset; do not place the horizontal lockup inside an app icon.

At 16px, use `favicon.svg` or its raster export. At 24–32px, use the symbol without the wordmark. The branch uses round caps and high contrast specifically to remain readable at those sizes.

## Usage rules

Do:

- preserve the supplied proportions and node positions;
- use the dark asset on Ink and the light asset on Paper;
- keep Burgundy limited to the branch and a small number of product actions;
- pair the identity with real portfolio evidence, Git diffs, or restrained interface details.

Do not:

- rotate, skew, outline, or add effects to the mark;
- recolor individual nodes or introduce gradients;
- put the symbol inside another arbitrary frame;
- use plant imagery or imply automatic publication;
- recreate the wordmark in a different typeface.

## Export inventory

PNG exports live in `assets/brand/png/`:

- transparent symbol at 16, 32, 64, 128, 512, and 1024 pixels;
- square plugin icon at 512 and 1024 pixels;
- GitHub social preview at 1280 × 640 pixels.

SVG is canonical. Raster exports are delivery formats and should be regenerated from the SVG sources after any approved identity change.
