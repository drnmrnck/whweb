let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');

// Перевірка, чи існують обидва елементи
if (hamburger && nav) {
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
    });

    // Закриття меню при кліку поза ним
    document.addEventListener('click', function(e) {
        // Перевірка, чи елемент, на який було натиснуто, не є частиною nav і не є гамбургером
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // Опціонально: Закриття меню при виборі пункту (для мобільного досвіду)
    let menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

