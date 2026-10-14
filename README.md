# admilara.github.io

Personal page of Lara Buljan: published GitHub Pages sites, writing, references and a bit of
life outside work. Live at <https://admilara.github.io/>.

Plain Jekyll on GitHub Pages: no theme, no plugins, no build step. Push to `main` and GitHub
rebuilds the site in about a minute.

## Editing content

Almost everything is data. You rarely need to touch HTML.

| What | Where |
| --- | --- |
| Name, role, about text, contact buttons, portrait | `_config.yml` |
| Song in "On repeat" | `_config.yml` → `on_repeat.spotify` (paste the normal Spotify share link) |
| CV | `_config.yml` → `cv_pdf` (path to a PDF; empty = section hidden) |
| Published sites | `_data/sites.yml` |
| Articles / papers | `_data/articles.yml` (empty list = section hidden) |
| References | `_data/references.yml` |
| "Now" list | `_data/now.yml` |
| Photos | files in `assets/img/gallery/`, listed in `_data/gallery.yml` |

**Languages.** The page is in English. Articles and references each have `lang: en` or
`lang: hr`, and the visitor can filter by language. A reference can also show its title in the
other language with `title_alt`.

**Topics.** The topic chips above the references are built from the `topic` values, so keep the
same spelling across entries ("Grid codes", not "grid codes" in one place and "Grid Codes" in
another).

**Photos.** About 1400 px wide and under ~300 KB each works well. The first photo in
`gallery.yml` is shown large. Replace `photo-1.jpg` … `photo-6.jpg` (they're labelled
placeholders) or add more entries.

**Portrait.** Put a square image (~400×400 px) in `assets/img/`, then set
`portrait: /assets/img/portrait.jpg` in `_config.yml`. Without one, the page shows your initials.

## Privacy

The page loads nothing from third parties. Fonts (IBM Plex, SIL Open Font License, see
`assets/fonts/OFL.txt`) are hosted with the site. The Spotify player is only inserted when a
visitor presses play, so no Spotify cookies are set before that.

## Old cs-or addresses

Until October 2026 this site hosted the black start / island operation pages, which now live
at <https://admilara.github.io/cs-or/>. `404.html` forwards the old addresses (for example
`/cs-hops-wams/` → `/cs-or/cs-hops-wams/`) using the list in `_data/old_cs_or.yml`.

## Files

```
_config.yml          site settings and profile
_data/               sites, articles, references, now, gallery, old cs-or paths
_layouts/default.html
index.html           the page
404.html             not-found page + forwarding of old cs-or addresses
assets/css/site.css
assets/js/site.js    filters, photo viewer, click-to-load Spotify, section highlight
assets/fonts/        self-hosted IBM Plex Sans / Mono
assets/img/gallery/  photos
```
