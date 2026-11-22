# TáltosGains

My semester project for OSU 7REWB. It's a Bootstrap website for my YouTube channel TáltosGains - training, self-improvement and taking rest days without feeling guilty.

Live: https://pecikks.github.io/YTWebsite/

## How to open it

Just open `index.html` (I used PhpStorm's preview). The YouTube videos and the form saving work better through a local server:

```sh
python3 -m http.server 8080
```

and then go to http://localhost:8080. Bootstrap, the icons, DataTables, jQuery and the photos are all in the project, so only the videos need internet.

## Pages

- **Home** (`index.html`) - carousel with 3 of my photos, short intro, three videos and a link to the form
- **The story** (`about.html`) - why I started the channel
- **Videos** (`videos.html`) - my four videos, each with a "Story notes" modal
- **Movement library** (`movement.html`) - DataTable with 60 exercises (search, sorting, paging, filter by pattern)
- **Off days** (`recovery.html`) - three tabs about rest
- **Your reset** (`reset.html`) - the form for planning your week

## What's in it from the assignment

- name with a logo icon at the top, menu with icons (6 pages)
- carousel under the menu, breadcrumbs on every page except Home
- form with 13 fields (text, date, number, select, radio, checkbox, textarea), input groups, validation and a Save button - the plan gets saved in localStorage
- DataTable with 60 rows, Bootstrap 5 styling
- different buttons (primary, outline, secondary, link, small/large)
- 2 modals (story notes, exercise details on phones) and 3 tabs
- mobile wireframe in `docs/mobile-wireframe.svg` (open `docs/wireframe.html` to see it)
- URL of the website in `PROJECT_URL.txt`

Extra: light/dark mode button in the header (it remembers your choice).

## Files

- `style.css` - all my styles
- `js/site.js` - carousel, table, modals, video previews and the form
- `js/theme.js` - light/dark mode
- `docs/CREDITS.md` - libraries and photos
- `docs/TESTING.md` - what I tested
- `docs/package.py` - makes the ZIP for submitting (`python3 docs/package.py`)
