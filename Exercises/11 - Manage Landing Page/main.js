const open = document.getElementById('open');
const close = document.getElementById('close');
const navMenu = document.getElementById('nav__menu');

function menuShow() {
  open.classList.toggle('show');
  close.classList.toggle('show');
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('hide');
}
