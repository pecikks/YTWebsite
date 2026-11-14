# TáltosGains

My semester project for OSU 7REWB: A responsive Bootstrap website for my YouTube channel about training, self-improvement and guilt-free recovery.

## Open locally

Open `index.html` in a browser, or use PhpStorm’s browser preview. For the embedded videos and the saved form to work reliably, run a small local server from the project folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8080. No installation or build step is needed. Bootstrap, Bootstrap Icons, DataTables, jQuery and all photos are stored locally. Only the YouTube videos and links need an internet connection.

## Assignment checklist

| Requirement | Implementation |
| --- | --- |
| Logo / styled name | Flower icon, TáltosGains wordmark and tagline in the sticky header, with a light/dark mode button |
| 5–7 functional menu pages | Six: Home, The story, Videos, Movement library, Off days, Your reset |
| Bootstrap Carousel | Homepage: three photo slides with captions below the photos on narrow screens, indicators, arrows and a pause/play button |
| Breadcrumbs | All five inner pages |
| Comprehensive form | `reset.html`: 13 fields with labels, help text, a responsive grid, three input groups, Bootstrap validation messages and a Save button |
| Required form types | Text, date, number, radio, checkbox, select, textarea |
| DataTables with Bootstrap 5 | `movement.html`: 60 movements, 10/25/50/100 rows per page, search, a Pattern filter with a Clear button, and sortable columns. On phones, three columns are hidden and each row gets a Details button |
| Buttons / icons | Primary, outline-primary, outline-light, secondary and link buttons in small, normal and large sizes; Bootstrap Icons in the menu and buttons |
| Bootstrap modal | Two modals: four “Story notes” buttons on the Videos page, and the Details buttons in the movement table on phones |
| At least three tabs | Off days page: Rest & reset, Outside time, Headspace |
| Mobile wireframe + description | `docs/mobile-wireframe.svg` and `docs/wireframe.html`, with seven described sections |
| Hosting URL TXT | `PROJECT_URL.txt` |
| Submission ZIP | `submission/TaltosGains-local.zip`, rebuilt after every change |

## Content and behavior

- The channel name, philosophy, video titles and all photos are my own.
- `videos.html` loads each YouTube player in a Bootstrap `ratio ratio-16x9` wrapper when its photo preview is clicked, each with a “Watch on YouTube” button.
- The movement library is a general reference list of exercises, not a training plan. The Pattern filter lists the patterns found in the table; on phones, the Details modal shows the hidden columns (pattern, equipment and everyday purpose).
- The form saves, restores and clears one plan in the browser’s localStorage (`taltosgains-reset-v1`). Nothing is sent anywhere. Once a plan is saved, a link takes you back to the form to keep editing it.
- The light/dark button in the header switches the Bootstrap color theme. The choice is remembered across pages in localStorage (`taltosgains-theme`); dark is the default.
- The homepage slideshow pauses on hover or keyboard focus, has a pause button, and does not auto-play when the visitor prefers reduced motion.

## Publishing with GitHub Pages

Website: https://pecikks.github.io/YTWebsite/

GitHub Pages publishes the `main` branch from the repository root. `.nojekyll` is included.

## Rebuild the ZIP

Run `python3 docs/package.py`. It leaves out Git history, IDE settings and the ZIP itself.

## Main files

- Six HTML pages with the content and shared navigation.
- `style.css` holds the responsive theme.
- `js/theme.js` holds the light/dark mode switch. It loads in the `<head>` so a saved light theme is applied before the page appears.
- `js/site.js` holds the carousel controls, DataTables setup and Pattern filter, the movement Details modal, the video previews, the Story notes modal and form storage.
- `docs/CREDITS.md` lists the libraries and image sources.
- `docs/TESTING.md` lists what I tested.
