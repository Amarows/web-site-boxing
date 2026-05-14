/* =========================================================
   Boxing Club Ladorishti - main.js
   Handles: language switching, nav highlighting, mobile menu,
            gallery lightbox
   ========================================================= */

(function () {
  'use strict';

  /* -- Language system -- */
  const SUPPORTED = ['de', 'en'];
  let currentLang = localStorage.getItem('bcl_lang') || 'de';

  // Detect the base path from the main.js script tag itself (reliable on all hosts)
  const _mainScript = document.querySelector('script[src*="main.js"]');
  const _base = _mainScript
    ? _mainScript.src.replace(/js\/main\.js.*$/, '')
    : (window.location.href.replace(/[^/]+$/, ''));

  function loadLang(lang, callback) {
    const script = document.createElement('script');
    script.src = _base + 'js/lang/' + lang + '.js';
    script.onload = callback;
    // Remove old lang script if present
    const old = document.getElementById('lang-script');
    if (old) old.remove();
    script.id = 'lang-script';
    document.head.appendChild(script);
  }

  function applyLang() {
    if (typeof LANG === 'undefined') return;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (LANG[key] !== undefined) el.textContent = LANG[key];
    });
    document.querySelectorAll('[data-i18n-href]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-href');
      if (LANG[key] !== undefined) el.setAttribute('href', LANG[key]);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (LANG[key] !== undefined) el.setAttribute('placeholder', LANG[key]);
    });
    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.documentElement.lang = currentLang;
  }

  function switchLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('bcl_lang', lang);
    loadLang(lang, applyLang);
  }

  // Attach lang buttons
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) switchLang(btn.dataset.lang);
  });

  // Initial load
  loadLang(currentLang, applyLang);

  /* -- Mobile nav -- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  /* -- Active nav link -- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function(a) {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  /* -- Gallery lightbox -- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-item[data-src]').forEach(function(item) {
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
      if (e.key === 'Escape') {
        lightbox.classList.remove('open');
        lbImg.src = '';
      }
    });
  }

})();
