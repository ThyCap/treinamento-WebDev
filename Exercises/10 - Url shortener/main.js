const hamb = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const login = document.getElementById('login');
const flex = document.getElementById('flex');
const link = document.getElementById('link');
const shortened = document.getElementById('shortened');
const shortenBtn = document.getElementById('shorten');
const containerShortened = document.getElementById('container__shortened');

// eslint-disable-next-line no-unused-vars
function menuShow() {
  hamb.classList.toggle('show');
  menu.classList.toggle('show');
  login.classList.toggle('show');
  flex.classList.toggle('show');
}

// eslint-disable-next-line no-unused-vars
function shorten() {
  containerShortened.style.display = 'flex';
  shortened.innerHTML = link.value;
  shortenBtn.style.backgroundColor = 'hsl(180, 66%, 49%)';
}

// eslint-disable-next-line no-unused-vars
function clipboard() {
  link.select();
  link.setSelectionRange(0, 99999);

  document.execCommand('copy');

  shortenBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';
}
