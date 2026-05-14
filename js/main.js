/* =========================================================
   Boxing Club Ladorishti - main.js
   Handles: language switching, nav highlighting, mobile menu,
            gallery lightbox
   ========================================================= */

(function () {
  'use strict';

  /* -- Inlined translations (avoids dynamic script loading on GitHub Pages) -- */
  const TRANSLATIONS = {
    de: {
      nav_home:      'Startseite',
      nav_about:     'Über uns',
      nav_training:  'Training & Preise',
      nav_trainers:  'Trainer',
      nav_gallery:   'Galerie',
      nav_contact:   'Kontakt',
      hero_tag:      'Willkommen in Illnau',
      hero_title:    'Stärke beginnt hier.',
      hero_sub:      'Boxen für Kinder, Jugendliche und Erwachsene – in einer freundlichen und respektvollen Umgebung in Illnau, Zürich.',
      hero_cta1:     'Training & Preise',
      hero_cta2:     'Kontakt aufnehmen',
      fact1_num:  '3+',
      fact1_lbl:  'Trainingsangebote',
      fact2_num:  '5×',
      fact2_lbl:  'Training pro Woche',
      fact3_num:  '10+',
      fact3_lbl:  'Jahre Erfahrung',
      fact4_num:  '🏆',
      fact4_lbl:  'Turniersiege',
      home_why_title:   'Warum Boxing Club Ladorishti?',
      home_why_sub:     'Mehr als nur Sport – ein Ort für persönliche Entwicklung',
      feat1_title:  'Für jedes Alter',
      feat1_text:   'Von Kindern ab 6 Jahren bis zu Erwachsenen – wir haben das passende Training für alle.',
      feat2_title:  'Erfahrene Trainer',
      feat2_text:   'Unsere Trainer sind lizenzierte Box-Coaches mit langjähriger Wettkampferfahrung.',
      feat3_title:  'Wettkampf & Gemeinschaft',
      feat3_text:   'Wir nehmen aktiv an lokalen und nationalen Turnieren teil und pflegen ein starkes Gemeinschaftsgefühl.',
      home_cta_title: 'Bereit für dein erstes Training?',
      home_cta_text:  'Komm einfach vorbei – kein Vertrag, kein Druck. Melde dich bei uns und wir zeigen dir alles.',
      home_cta_btn:   'Jetzt Kontakt aufnehmen',
      about_title:    'Über uns',
      about_hero_sub: 'Unsere Geschichte und Werte',
      about_h2:       'Boxing Club Ladorishti',
      about_p1:       'Boxing Club Ladorishti ist ein Boxverein mit Sitz in Illnau-Effretikon im Kanton Zürich. Wir bieten Boxtraining für alle Altersgruppen an – von Kindern und Jugendlichen bis hin zu Erwachsenen.',
      about_p2:       'Unser Verein nimmt regelmässig an regionalen und nationalen Wettkämpfen teil. Disziplin, Respekt und Teamgeist sind die Grundwerte, die wir jedem Mitglied vermitteln.',
      about_p3:       'Wir glauben, dass Sport das beste Werkzeug für persönliche Entwicklung ist – egal ob du anfängst um fit zu bleiben, Selbstverteidigung zu lernen oder Turniere zu gewinnen.',
      about_affil:    'Mitglied der WKU Swiss',
      about_affil_note: 'Verbandsbestätigung wird noch eingeholt',
      val1: 'Disziplin',
      val2: 'Respekt',
      val3: 'Teamgeist',
      val4: 'Wettkampfgeist',
      val5: 'Fairness',
      val6: 'Gemeinschaft',
      about_values_title: 'Unsere Werte',
      training_title:   'Training & Preise',
      training_hero_sub: 'Trainingszeiten und Mitgliedschaftsbeiträge',
      training_sched_title: 'Trainingsangebote',
      training_sched_sub:   'Wähle das passende Programm – alle Level willkommen',
      cat_adults:   'Erwachsene',
      cat_women:    'Frauen',
      cat_youth:    'Jugendliche (bis 12 J.)',
      cat_boxing:   'Boxtraining',
      lbl_mo: 'Mo & Mi',
      lbl_fr: 'Freitag',
      lbl_di: 'Dienstag',
      lbl_th: 'Donnerstag',
      lbl_sa: 'Samstag',
      lbl_monthly:   'Monatlich',
      lbl_halfyear:  '½ Jährlich',
      lbl_yearly:    'Jährlich',
      price_note:    '* Preise gemäss letzter bekannter Preisliste. Bitte beim Trainer bestätigen.',
      price_tbc:     'Preis auf Anfrage',
      training_info_title: 'Gut zu wissen',
      training_info1: 'Keine Vorkenntnisse erforderlich – alle Level sind herzlich willkommen.',
      training_info2: 'Beim ersten Training einfach vorbeikommen und reinschnuppern.',
      training_info3: 'Passende Ausrüstung kann über unseren Partner kampfsport-shop.ch bezogen werden.',
      training_info4: 'Mitgliedschaft monatlich kündbar (bei Monatsbeitrag).',
      trainers_title:   'Unsere Trainer',
      trainers_hero_sub: 'Erfahren, leidenschaftlich, motivierend',
      trainer1_name:  'Shpendi Etemi',
      trainer1_role:  'Trainer',
      trainer1_bio:   'Shpendi Etemi ist Trainer des Boxing Club Ladorishti. Mit langjähriger Wettkampferfahrung verbindet er technisches Know-how mit einem motivierenden Trainingstil.',
      trainer2_name:  'Shëndrit Dauti',
      trainer2_role:  'Manager des Klubs und der Turniere',
      trainer2_bio:   'Shëndrit Dauti verantwortet die Organisation des Boxing Club Ladorishti sowie die Durchführung aller Turniere und Wettkampfveranstaltungen.',
      badge_wku:    'WKU Swiss',
      badge_youth:  'Jugendtraining',
      badge_comp:   'Wettkampf',
      badge_fitness: 'Fitness',
      trainers_note: '* Vollständige Biografien und aktuelle Fotos werden nach Bestätigung durch die Trainer ergänzt.',
      gallery_title:    'Galerie',
      gallery_hero_sub: 'Einblicke in Training und Wettkampf',
      gallery_note:     'Aktuelle Fotos folgen nach Eingang von den Trainern.',
      contact_title:    'Kontakt',
      contact_hero_sub: 'Wir freuen uns von dir zu hören',
      contact_phone_lbl:   'Telefon',
      contact_email_lbl:   'E-Mail',
      contact_address_lbl: 'Adresse',
      contact_phone:   '+41 79 544 67 28',
      contact_email:   'skindi123@hotmail.com',
      contact_address: 'Kempttalstrasse 56, 8308 Illnau, Schweiz',
      contact_social_lbl: 'Folge uns',
      contact_note: '* E-Mail-Adresse wird auf eine offizielle Club-Adresse aktualisiert.',
      contact_map_title: 'Anfahrt',
      footer_tagline:  'Boxen für alle – Kinder, Jugendliche und Erwachsene in Illnau, Zürich.',
      footer_links:    'Schnelllinks',
      footer_contact:  'Kontakt',
      footer_copy:     '© 2025 Boxing Club Ladorishti. Alle Rechte vorbehalten.',
    },
    en: {
      nav_home:      'Home',
      nav_about:     'About',
      nav_training:  'Training & Prices',
      nav_trainers:  'Trainers',
      nav_gallery:   'Gallery',
      nav_contact:   'Contact',
      hero_tag:      'Welcome to Illnau',
      hero_title:    'Strength starts here.',
      hero_sub:      'Boxing for kids, teenagers and adults – in a friendly and respectful environment in Illnau, Zurich.',
      hero_cta1:     'Training & Prices',
      hero_cta2:     'Get in touch',
      fact1_num:  '3+',
      fact1_lbl:  'Training programmes',
      fact2_num:  '5×',
      fact2_lbl:  'Sessions per week',
      fact3_num:  '10+',
      fact3_lbl:  'Years of experience',
      fact4_num:  '🏆',
      fact4_lbl:  'Tournament wins',
      home_why_title:   'Why Boxing Club Ladorishti?',
      home_why_sub:     'More than sport – a place for personal growth',
      feat1_title:  'For every age',
      feat1_text:   'From children aged 6 to adults – we have the right training for everyone.',
      feat2_title:  'Experienced coaches',
      feat2_text:   'Our coaches are experienced boxing trainers with years of competition background.',
      feat3_title:  'Competition & community',
      feat3_text:   'We actively participate in local and national tournaments and foster a strong club community.',
      home_cta_title: 'Ready for your first session?',
      home_cta_text:  'Just show up – no contract, no pressure. Get in touch and we\'ll show you everything.',
      home_cta_btn:   'Contact us now',
      about_title:    'About',
      about_hero_sub: 'Our history and values',
      about_h2:       'Boxing Club Ladorishti',
      about_p1:       'Boxing Club Ladorishti is a boxing club based in Illnau-Effretikon in the Canton of Zurich. We offer boxing training for all age groups – from children and teenagers to adults.',
      about_p2:       'Our club regularly participates in regional and national competitions. Discipline, respect and team spirit are the core values we instil in every member.',
      about_p3:       'We believe sport is the best tool for personal development – whether you want to stay fit, learn self-defence or compete for titles.',
      about_affil:    'Member of WKU Swiss',
      about_affil_note: 'Affiliation confirmation pending',
      val1: 'Discipline',
      val2: 'Respect',
      val3: 'Team spirit',
      val4: 'Competitive spirit',
      val5: 'Fairness',
      val6: 'Community',
      about_values_title: 'Our values',
      training_title:   'Training & Prices',
      training_hero_sub: 'Schedule and membership fees',
      training_sched_title: 'Training programmes',
      training_sched_sub:   'Choose the right programme – all levels welcome',
      cat_adults:   'Adults',
      cat_women:    'Women',
      cat_youth:    'Youth (up to 12 yrs)',
      cat_boxing:   'Boxing training',
      lbl_mo: 'Mon & Wed',
      lbl_fr: 'Friday',
      lbl_di: 'Tuesday',
      lbl_th: 'Thursday',
      lbl_sa: 'Saturday',
      lbl_monthly:   'Monthly',
      lbl_halfyear:  '½ Yearly',
      lbl_yearly:    'Yearly',
      price_note:    '* Prices based on last known price list. Please confirm with the trainer.',
      price_tbc:     'Price on request',
      training_info_title: 'Good to know',
      training_info1: 'No prior experience required – all levels are warmly welcome.',
      training_info2: 'For your first session, just come along and try it out.',
      training_info3: 'Suitable equipment is available through our partner kampfsport-shop.ch.',
      training_info4: 'Monthly membership can be cancelled at any time.',
      trainers_title:   'Our Trainers',
      trainers_hero_sub: 'Experienced, passionate, motivating',
      trainer1_name:  'Shpendi Etemi',
      trainer1_role:  'Trainer',
      trainer1_bio:   'Shpendi Etemi is a trainer at Boxing Club Ladorishti. Combining years of competition experience with a motivating coaching style, he focuses on the holistic development of each athlete.',
      trainer2_name:  'Shëndrit Dauti',
      trainer2_role:  'Club & Tournament Manager',
      trainer2_bio:   'Shëndrit Dauti manages the club\'s operations and oversees all tournament and competition activities.',
      badge_wku:    'WKU Swiss',
      badge_youth:  'Youth training',
      badge_comp:   'Competition',
      badge_fitness: 'Fitness',
      trainers_note: '* Full biographies and updated photos will be added once confirmed by the trainers.',
      gallery_title:    'Gallery',
      gallery_hero_sub: 'Impressions from training and competition',
      gallery_note:     'Current photos will follow once received from the trainers.',
      contact_title:    'Contact',
      contact_hero_sub: 'We look forward to hearing from you',
      contact_phone_lbl:   'Phone',
      contact_email_lbl:   'Email',
      contact_address_lbl: 'Address',
      contact_phone:   '+41 79 544 67 28',
      contact_email:   'skindi123@hotmail.com',
      contact_address: 'Kempttalstrasse 56, 8308 Illnau, Switzerland',
      contact_social_lbl: 'Follow us',
      contact_note: '* Email address will be updated to an official club address.',
      contact_map_title: 'How to find us',
      footer_tagline:  'Boxing for everyone – children, teenagers and adults in Illnau, Zurich.',
      footer_links:    'Quick links',
      footer_contact:  'Contact',
      footer_copy:     '© 2025 Boxing Club Ladorishti. All rights reserved.',
    }
  };

  /* -- Language system -- */
  const SUPPORTED = ['de', 'en'];
  let currentLang = localStorage.getItem('bcl_lang') || 'de';

  function applyLang(lang) {
    const LANG = TRANSLATIONS[lang];
    if (!LANG) return;

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
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
  }

  function switchLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('bcl_lang', lang);
    applyLang(lang);
  }

  // Attach lang buttons
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.lang-btn');
    if (btn && btn.dataset.lang) switchLang(btn.dataset.lang);
  });

  // Apply on load
  applyLang(currentLang);

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
