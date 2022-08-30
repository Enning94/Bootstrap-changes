const hamburger = document.querySelector('#Hamburger');
const naviHeader = document.getElementById('nav-link');
const logImage = document.getElementById('log-image');
const cancel = document.getElementById('close');
const mainhead = document.getElementById('mheader');
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
hamburger.addEventListener('click', () => {
  naviHeader.classList.toggle('open');
  logImage.classList.toggle('close');
  cancel.classList.toggle('show');
  mainhead.classList.toggle('wrap');
});

home.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});
about.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});
contact.addEventListener('click', () => {
  naviHeader.classList.remove('open');
  logImage.classList.remove('close');
  cancel.classList.remove('show');
  mainhead.classList.remove('wrap');
});
