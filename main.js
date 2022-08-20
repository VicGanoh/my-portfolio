const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');


hamburgerMenu.addEventListener('click', mobileMenu);
navLink.forEach( element => {
    element.addEventListener('click', closeMenu)
});
mainBody.addEventListener('click', closeMenu);

function mobileMenu(){
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu(){
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
}

