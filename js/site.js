'use strict';

// Each feature runs only on the page that contains it.
// Wrapping them in functions keeps their variables out of the global scope.

// Homepage carousel
function initCarousel() {
    const carouselElement = document.getElementById('homeCarousel');
    if (!carouselElement) {
        return;
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 7500,
        ride: false,
        pause: false,
        touch: true,
    });
    const pauseButton = document.getElementById('carouselPause');
    let paused = reducedMotion;

    function updatePauseButton() {
        if (paused) {
            pauseButton.innerHTML = '<i class="bi bi-play-fill" aria-hidden="true"></i>';
            pauseButton.setAttribute('aria-label', 'Play slideshow');
        } else {
            pauseButton.innerHTML = '<i class="bi bi-pause-fill" aria-hidden="true"></i>';
            pauseButton.setAttribute('aria-label', 'Pause slideshow');
        }
    }

    updatePauseButton();
    if (!paused) {
        carousel.cycle();
    }

    // Pause while the visitor hovers over or tabs into the slideshow.
    carouselElement.addEventListener('mouseenter', function () {
        carousel.pause();
    });
    carouselElement.addEventListener('mouseleave', function () {
        if (!paused && !carouselElement.contains(document.activeElement)) {
            carousel.cycle();
        }
    });
    carouselElement.addEventListener('focusin', function () {
        carousel.pause();
    });
    carouselElement.addEventListener('focusout', function (event) {
        if (!paused && !carouselElement.matches(':hover') && !carouselElement.contains(event.relatedTarget)) {
            carousel.cycle();
        }
    });

    pauseButton.addEventListener('click', function () {
        paused = !paused;
        if (paused) {
            carousel.pause();
        } else {
            carousel.cycle();
        }
        updatePauseButton();
    });
}

// Movement library table (DataTables)
function initMovementTable() {
    if (!document.getElementById('movementTable')) {
        return;
    }
    new DataTable('#movementTable', {
        pageLength: 10,
        lengthMenu: [10, 25, 50, 100],
        order: [[0, 'asc']],
        language: {
            search: 'Find a movement:',
            lengthMenu: 'Show _MENU_ ideas',
            info: 'Showing _START_–_END_ of _TOTAL_ ideas',
            infoEmpty: 'No matching ideas',
            zeroRecords: 'No movement found. Try “walk”, “band” or “carry”.',
        },
    });
}

// Video details modal: the text comes from data attributes on each "Story notes" button.
function initVideoModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) {
        return;
    }
    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        if (!button) {
            return;
        }
        const title = button.closest('article').querySelector('h2').textContent;
        document.getElementById('videoModalTitle').textContent = title;
        document.getElementById('videoModalText').textContent = button.dataset.storyText;
        document.getElementById('videoModalPrompt').textContent = button.dataset.storyPrompt;
    });
}

// Reset form: Bootstrap validation and saving the plan in localStorage
function initResetForm() {
    const form = document.getElementById('resetForm');
    if (!form) {
        return;
    }
    const storageKey = 'taltosgains-reset-v1';
    const status = document.getElementById('saveStatus');
    const summary = document.getElementById('savedSummary');
    const requiredFields = ['name', 'week', 'sessions', 'minutes', 'focus', 'recovery'];

    function setCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        form.elements.week.value = `${year}-${month}-${day}`;
    }

    function showSummary(data) {
        const sessionWord = data.sessions === '1' ? 'session' : 'sessions';
        document.getElementById('savedTitle').textContent = `${data.name}’s reset`;
        document.getElementById('summaryText').textContent =
            `Week of ${data.week}: ${data.sessions} movement ${sessionWord}, ${data.minutes} minutes each. ` +
            `Focus: ${data.focus.toLowerCase()}. Off-day plan: ${data.recovery.toLowerCase()}.`;
        document.getElementById('summaryNote').textContent = data.smallWin
            ? 'A small win: ' + data.smallWin
            : 'Leave room to change the plan. Your pace is a good pace.';
        summary.hidden = false;
    }

    function hasRequiredFields(plan) {
        return requiredFields.every(function (fieldName) {
            return typeof plan[fieldName] === 'string';
        });
    }

    function restoreSavedPlan() {
        try {
            const saved = JSON.parse(localStorage.getItem(storageKey));
            if (!saved || typeof saved !== 'object' || !hasRequiredFields(saved)) {
                return;
            }
            for (const name of Object.keys(saved)) {
                const field = form.elements.namedItem(name);
                if (!field) {
                    continue;
                }
                if (field.type === 'checkbox') {
                    field.checked = saved[name] === 'on';
                } else {
                    field.value = saved[name];
                }
            }
            showSummary(saved);
            status.textContent = 'Your saved plan is ready to edit.';
        } catch {
            status.textContent = 'Saved plans are unavailable in this browser. You can still fill out the form.';
        }
    }

    setCurrentDate();
    restoreSavedPlan();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameField = form.elements.name;
        nameField.value = nameField.value.trim();

        // Bootstrap shows the red/green styles and messages once "was-validated" is added.
        form.classList.add('was-validated');
        if (!form.checkValidity()) {
            status.textContent = 'Please check the highlighted fields.';
            form.querySelector(':invalid').focus();
            return;
        }

        const data = {};
        new FormData(form).forEach(function (value, name) {
            data[name] = value;
        });
        try {
            localStorage.setItem(storageKey, JSON.stringify(data));
            status.textContent = 'Saved on this device. A plan, not a contract — change it whenever you need.';
            showSummary(data);
        } catch {
            status.textContent = 'This browser could not save your plan. Please enable site storage and try again.';
        }
    });

    document.getElementById('clearReset').addEventListener('click', function () {
        try {
            localStorage.removeItem(storageKey);
            form.reset();
            form.classList.remove('was-validated');
            setCurrentDate();
            summary.hidden = true;
            status.textContent = 'Your saved plan has been cleared from this browser.';
        } catch {
            status.textContent = 'The browser could not clear storage. Please use your browser’s site-data settings.';
        }
    });
}

initCarousel();
initMovementTable();
initVideoModal();
initResetForm();
