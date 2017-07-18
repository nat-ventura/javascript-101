// CHRIS EXAMPLE BUTTONS

var buttons = {
    scale: document.querySelector('[data-toggle-scale]'),
    rotate: document.querySelector('[data-toggle-rotate]')
};

var target = document.querySelector('[data-target]');

Object.keys(buttons).forEach(function (k) {
    buttons[k].addEventListener('click', function () {
        target.classList.toggle(k);
    })
})