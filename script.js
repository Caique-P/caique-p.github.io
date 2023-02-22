// Get elements
let r = document.querySelector(':root');
btn = document.querySelector('.theme');

function myFunction_set(oldVar, newVar) {
    r.style.setProperty(oldVar, newVar);
}

function mode() {
    if (darkMode) {
        btn.innerHTML = "🌙";
        darkMode = false;
        // Colors for light mode
        myFunction_set('--color-text', '#25256b');
        myFunction_set('--color-bg', '#c0b5ff');
        myFunction_set('--color-bg-light', '#e6e0f1');
        myFunction_set('--color-bg-dark', '#9797f7');
        myFunction_set('--color-selection-text', '#3325b3');
        myFunction_set('--color-selection-bg', '#6d68af');
    } else {
        btn.innerHTML = "☀️";
        darkMode = true;
        // Colors for dark mode
        myFunction_set('--color-text', '#c9cbff');
        myFunction_set('--color-bg', '#0a0b24');
        myFunction_set('--color-bg-light', '#3d378b60');
        myFunction_set('--color-bg-dark', '#010911');
        myFunction_set('--color-selection-text', '#83c3ff');
        myFunction_set('--color-selection-bg', '#42315e');
    }
}

darkMode = true;
btn.addEventListener('click', mode);
