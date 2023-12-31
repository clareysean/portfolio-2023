// Constants
const burger = document.getElementById('burger');
const hiddenMenu = document.getElementById('nav-menu-hidden');
const nav = document.querySelector('.navbar-nav')
const barLeft = document.querySelector('.bar-left');
const barRight = document.querySelector('.bar-right');
const barCenter = document.querySelector('.bar-center');
const navLinksArr = [...document.querySelectorAll('.navlink-h')]


let isShowing = false;

// Listeners

burger.addEventListener('click', toggleShowMenu);

navLinksArr.forEach(link=>link.addEventListener('click', toggleShowMenu))

// Functions

function toggleShowMenu(e) {
    if (!isShowing) {
        hiddenMenu.style.right = '0';
    } else {
        hiddenMenu.style.right = '-500px';
    }
    nav.classList.toggle('nav-hidden')
    burger.classList.toggle('burger')
    burger.classList.toggle('burger-active')
    isShowing = !isShowing;
}

