document.addEventListener('DOMContentLoaded', () => {
  // === Phần 1: Dropdown “Lịch sử” và Hamburger (JS gốc) ===
  const dropBtn  = document.querySelector('.dropbtn');
  const dropList = document.querySelector('.dropdown-list');
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  dropBtn.addEventListener('click', e => {
    e.stopPropagation();
    dropList.classList.toggle('show');
  });
  window.addEventListener('click', () => {
    dropList.classList.remove('show');
  });

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    navMenu.classList.toggle('mobile-show');
  });
  window.addEventListener('click', () => {
    navMenu.classList.remove('mobile-show');
  });

  // === Phần 2: Scroll‑spy & Smooth Scroll cho TOC ===
  const tocLinks = Array.from(document.querySelectorAll('#toc a'));
  const headings = tocLinks
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector('#toc a[href="#' + id + '"]');
      if (entry.isIntersecting) {
        tocLinks.forEach(a => a.classList.remove('active'));
        link && link.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -80% 0px', threshold: 0 });

  headings.forEach(h => observer.observe(h));

  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // === Phần 3: Toggle TOC trên mobile ===
    const toggleBtn = document.getElementById('toc-toggle');
  const toc       = document.getElementById('toc');
  const HAMBURGER = '☰';
  const CLOSEICON = '✕';

  // Khởi tạo icon
  toggleBtn.textContent = HAMBURGER;

  toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = toc.classList.toggle('open');
    // đổi icon
    toggleBtn.textContent = isOpen ? CLOSEICON : HAMBURGER;
  });

  // Khi click ngoài TOC, đóng lại và reset icon
  document.addEventListener('click', e => {
    if (!toc.contains(e.target) && e.target !== toggleBtn) {
      if (toc.classList.contains('open')) {
        toc.classList.remove('open');
        toggleBtn.textContent = HAMBURGER;
      }
    }
  });
});
