const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const bodyAdditionalBackground = document.querySelector('.body__additional-background');

hamburger.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);
bodyAdditionalBackground.addEventListener('click', closeMenu);

function toggleMenu() {
  body.classList.toggle('overflowHidden');
  bodyAdditionalBackground.classList.toggle('blackout');
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
}

function closeMenu(event) {
  if (event.target.classList.contains('menu__link') || event.target.classList.contains('body__additional-background')) {
    body.classList.remove('overflowHidden');
    bodyAdditionalBackground.classList.remove('blackout');
    hamburger.classList.remove('open');
    menu.classList.remove('open');
  }
}
