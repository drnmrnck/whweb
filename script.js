let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = (e) => {
    e.stopPropagation(); 
    navbar.classList.toggle('active');
};

document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
const navItems = document.querySelectorAll('.header .navbar ul li a');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('highlight'); // додаємо клас при наведенні
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('highlight'); // видаляємо клас при виході
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const footerDate = document.getElementById("current-date");
    const today = new Date();
    footerDate.textContent = "Поточна дата: " + today.toLocaleDateString();
});


document.querySelectorAll('.video .box .video').forEach(box => {
    const video = box.querySelector('video');
    const playBtn = box.querySelector('i');

    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause'); 
        } else {
            video.pause();
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');  
        }
    });

    video.addEventListener('ended', () => {
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    });
});



const nameInput = document.getElementById('name');
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        nameInput.value = savedName; 
        nameInput.title = savedName;
    }
});

document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); //заборона стандартної відправки

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const courseSelect = document.getElementById('course');

    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    
    const agePattern = /\d+/; //шукаємо цифру
    if(nameValue === '' || !agePattern.test(nameValue)) {
        alert('Будь ласка, введіть ПІБ та вік у форматі виду: Іван Іванович Іванов 5');
        nameInput.focus();
        return;
    }

    const phonePattern = /^\+380 \d{2} \d{3} \d{4}$/;
    if(!phonePattern.test(phoneValue)) {
        alert('Будь ласка, введіть телефон у форматі +380-XX-XXX-XXXX');
        phoneInput.focus();
        return;
    }

    alert(`Ви успішно записані на курс: ${courseSelect.value}`);
    this.reset(); //очистка форми
});







