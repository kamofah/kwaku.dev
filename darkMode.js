const darkModeToggle = document.querySelector('.dark-mode-toggle-switch');
const darkModeToggleSlider = document.querySelector('.dark-mode-toggle-slider');

if (!darkModeToggle || !darkModeToggleSlider) {
    // Nothing to wire up (markup missing).
    // (Fail silently; avoids runtime errors.)
} else {
    // We only animate the slider position here (your HTML doesn't include the text element).
    let isOn = false;

    function playSlider(on) {
        // Switch between two keyframe animations; `forwards` keeps the knob
        // at the end position so the next toggle starts from the right spot.
        darkModeToggleSlider.style.animation = on
            ? 'slide-right 0.3s ease forwards'
            : 'slide-left 0.3s ease forwards';

        darkModeToggle.style.backgroundColor = on
            ? 'var(--main-color-transparent)'
            : 'var(--color-bg-muted-2)';

        darkModeToggle.style.boxShadow = on
            ? 'inset 2px 3px 6px rgba(0, 0, 0, 0.54), -2px -2px 5px rgba(255, 255, 255, 0.75)'
            : 'inset 4px 4px 8px rgba(0, 0, 0, 0.54), inset -4px -4px 10px rgba(255, 255, 255, 0.15)';
    }

    // Initialize to the "off" position (left) without animating.
    darkModeToggleSlider.style.animation = 'none';
    darkModeToggleSlider.style.transform = 'translateX(0)';

    darkModeToggle.setAttribute('role', 'switch');
    darkModeToggle.setAttribute('aria-checked', String(isOn));

    darkModeToggle.addEventListener('click', () => {
        isOn = !isOn;
        darkModeToggle.setAttribute('aria-checked', String(isOn));
        playSlider(isOn);
    });
}