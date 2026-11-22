# Testing

What was checked before submitting:

- **Responsive layout:** all six pages at 320, 390, 768 and 1440 px wide, in both dark and light mode. No horizontal scrolling, no missing images.
- **Menu:** the mobile hamburger menu opens and every link works. The header stays at the top while scrolling.
- **Light/dark mode:** the header button switches the theme, its icon and label update, and the choice is kept when moving to another page. Text stays readable in both themes.
- **Carousel:** the indicators, arrows and pause/play button work. The slideshow pauses on hover and keyboard focus.
- **DataTable:** shows 10 of 60 rows by default. Search (for example "band"), paging and sorting all work.
- **Pattern filter:** lists all six patterns (including "Carry & core"), each shows its 10 movements, and Clear filters brings back all 60.
- **Table on phones:** the #, Equipment and Everyday purpose columns are hidden, and each row's Details button opens a modal with that movement's pattern, equipment and purpose.
- **Modal:** each "Story notes" button opens the modal with the right video's details, and it closes properly.
- **Tabs:** all three tabs on the Off days page switch content.
- **Form:** required fields are enforced with Bootstrap validation messages. A test plan saves, shows its summary and the link back to the form, comes back after reloading the page, and can be cleared.
- **Videos:** each photo preview turns into its YouTube player when clicked. The players keep a 16:9 ratio at every width and play.
- **Links and IDs:** all local file links and `#` anchors resolve, with no duplicate IDs.
- **Console:** no JavaScript errors.

Tested in a Google's browser.
