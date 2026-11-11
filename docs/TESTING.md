# Testing

What I checked before submitting:

- **Responsive layout:** all six pages at 320, 390, 768 and 1440 px wide. No horizontal scrolling, no missing images. The wide table scrolls inside its own box.
- **Menu:** the mobile hamburger menu opens and every link works.
- **Carousel:** the indicators, arrows and pause/play button work. The slideshow pauses on hover and keyboard focus.
- **DataTable:** shows 10 of 60 rows by default. Search (for example “band”), paging and sorting all work.
- **Modal:** each “Story notes” button opens the modal with the right video’s details, and it closes properly.
- **Tabs:** all three tabs on the Off days page switch content.
- **Form:** required fields are enforced. A test plan saves, shows its summary, comes back after reloading the page, and can be cleared.
- **Videos:** all four YouTube embeds keep a 16:9 ratio at every width and play.
- **Links and IDs:** all local file links and `#` anchors resolve, with no duplicate IDs.
- **Console:** no JavaScript errors.

Tested in a Chromium-based browser.
