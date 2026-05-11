/* Zensportschule Illnau – main.js */
(function () {
  'use strict';
  const SUPPORTED = ['de', 'en'];
  let currentLang = localStorage.getItem('zs_lang') || 'de';

  function loadLang(lang, callback) {
    const script = document.createElement('script');
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    script.src = (depth <= 1 || window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/'))
      ? 'js/lang/' + lang + '.js'
      : '../js/lang/' + lang + '.js';
    script.onload = callback;
    const old = document.getElementById('lang-script');
    if (old) old.remove();
    script.id = 'lang-script';
    document.head.appendChild(script);
  }

  function applyLang() {
    if (typeof LANG === 'undefined') return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (LANG[key] !== undefined) el.textContent = LANG[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.documentElement.lang = currentLang;
  }

  function switchLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('zs_lang', lang);
    loadLang(lang, applyLang);
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) switchLang(btn.dataset.lang);
  });

  loadLang(currentLang, applyLang);

  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
      item.addEventListener('click', function () {
        lbImg.src = this.dataset.src;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
        lbImg.src = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { lightbox.classList.remove('open'); lbImg.src = ''; }
    });
  }
})();