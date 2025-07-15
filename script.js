// 1. Dropdown “Lịch sử”
const dropBtn  = document.querySelector('.dropbtn');
const dropList = document.querySelector('.dropdown-list');

dropBtn.addEventListener('click', e => {
  e.stopPropagation();
  dropList.classList.toggle('show');
});
window.addEventListener('click', () => {
  dropList.classList.remove('show');
});

// 2. Hamburger (mobile menu)
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener('click', e => {
  e.stopPropagation();
  navMenu.classList.toggle('mobile-show');
});

// Đóng menu khi click ngoài
window.addEventListener('click', () => {
  navMenu.classList.remove('mobile-show');
});
