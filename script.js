const btn = document.querySelector('#menu')
const nav = document.querySelector('.nav__links')

btn.addEventListener('click', function() {
    nav.classList.toggle('menu-active')
})