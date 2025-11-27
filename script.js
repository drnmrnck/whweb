let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && e.target !== hamburger) {
        nav.classList.remove('active');
    }
});
