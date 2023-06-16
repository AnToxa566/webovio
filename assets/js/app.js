// Wow init

new WOW().init();


// Nav toggle

const nav = document.querySelector('.burger');

nav.addEventListener('click', event => {
    event.currentTarget.classList.toggle('burger--active');
})