# admilara.github.io

Personal page of Lara Buljan: published GitHub Pages sites, work and writing, recommended
reading and a bit of life outside work. Live at <https://admilara.github.io/>.

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
| Work & writing – your studies, reports, papers, articles | `_data/work.yml` (empty list = section hidden) |
| Recommended reading – professional and personal | `_data/reading.yml` |
| "Now" list | `_data/now.yml` |
| Photos | files in `assets/img/gallery/`, listed in `_data/gallery.yml` |

**Languages.** The page is in English. Work and reading entries each have `lang: en` or
`lang: hr`, and the visitor can filter by language. A reading entry can also show its title in
the other language with `title_alt`.

**Types.** The type chips above "Work & writing" are built from the `type` values (Study,
Report, Paper, Article …), so keep the same spelling across entries.

**Reading.** Each entry has `category: professional` or `category: personal`; the page opens on
Professional. An optional `note:` adds one line on why it's worth reading.

**Photos.** About 1400 px wide and under ~300 KB each works well. The page shows them as a
compact strip of square thumbnails (six per row); a click opens the full photo with its caption.
Replace `photo-1.jpg` … `photo-6.jpg` (they're labelled
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
_data/               sites, work, reading, now, gallery, old cs-or paths
_layouts/default.html
index.html           the page
404.html             not-found page + forwarding of old cs-or addresses
assets/css/site.css
assets/js/site.js    filters, photo viewer, click-to-load Spotify, section highlight
assets/fonts/        self-hosted IBM Plex Sans / Mono
assets/img/gallery/  photos
```
