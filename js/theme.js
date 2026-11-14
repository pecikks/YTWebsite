'use strict';

const themeRoot = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = 'taltosgains-theme';

function applyTheme(theme) {
    themeRoot.dataset.bsTheme = theme;
    themeColor.content = theme === 'light' ? '#ffffff' : '#171917';
}

try {
    if (localStorage.getItem(themeStorageKey) === 'light') {
        applyTheme('light');
    }
} catch {
    // Keep the default theme when storage is unavailable.
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('themeToggle');
    const icon = button.querySelector('i');

    function updateButton() {
        const isLight = themeRoot.dataset.bsTheme === 'light';
        const label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
        button.setAttribute('aria-label', label);
        button.title = label;
        icon.className = isLight ? 'bi bi-moon-stars' : 'bi bi-sun';
    }

    updateButton();
    button.hidden = false;
    button.addEventListener('click', function () {
        const theme = themeRoot.dataset.bsTheme === 'light' ? 'dark' : 'light';
        applyTheme(theme);
        updateButton();

        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch {
            // The button still works for the current page.
        }
    });
});
