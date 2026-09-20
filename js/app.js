/**
 * Computer Garage - Main Application Logic
 * Integrates Configuration, Bilingual Translation Engine (Marathi & English),
 * Dynamic WhatsApp Generators, Live Shop Status, Mobile Menu, and FAQs.
 */

import { SITE_CONFIG } from './config.js';
import { TRANSLATIONS } from './translations.js';

let currentLang = localStorage.getItem('cg_language') || 'mr';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initContactLinks();
  initBusinessStatus();
  initMobileNav();
  initFaqAccordion();
  initInquiryForm();
  initDynamicYear();
});

/**
 * Bilingual Language Engine (English & Marathi)
 */
function initLanguageEngine() {
  applyLanguage(currentLang);

  // Setup click handlers for all language switch buttons (header & mobile menu)
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang-btn');
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('cg_language', currentLang);
        applyLanguage(currentLang);
        initContactLinks();
        initBusinessStatus();
      }
    });
  });
}

function applyLanguage(lang) {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.mr;
  document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dictionary[key]) {
      el.setAttribute('placeholder', dictionary[key]);
    }
  });

  // Update active state on language switcher buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

/**
 * Live Business Opening/Closing Status
 * Schedule: Sunday - Friday: 9:00 AM - 6:30 PM | Saturday: Closed
 */
function initBusinessStatus() {
  const statusContainer = document.querySelector('[data-status-container]');
  const statusText = document.querySelector('[data-status-text]');
  if (!statusContainer || !statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = 9 * 60; // 9:00 AM

  const isMarathi = currentLang === 'mr';
  const isSaturday = day === 6;
  const closeMinutes = isSaturday ? (17 * 60) : (18 * 60 + 30); // 5:00 PM Sat, 6:30 PM Sun-Fri
  const closeTimeStr = isSaturday ? (isMarathi ? "संध्या. ५:००" : "5:00 PM") : (isMarathi ? "संध्या. ६:३०" : "6:30 PM");

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    statusContainer.classList.remove('is-closed');
    statusText.textContent = isMarathi 
      ? `दुकान सुरू आहे (${closeTimeStr} पर्यंत)` 
      : `Open for Walk-ins (Until ${closeTimeStr})`;
  } else if (currentMinutes < openMinutes) {
    statusContainer.classList.add('is-closed');
    statusText.textContent = isMarathi 
      ? "आज सकाळी ९:०० वाजता उघडेल" 
      : "Opens Today at 9:00 AM";
  } else {
    // After closing time
    statusContainer.classList.add('is-closed');
    statusText.textContent = isMarathi 
      ? "आजची वेळ संपली (उद्या सकाळी ९:०० वाजता उघडेल)" 
      : "Closed for Today (Opens Tomorrow at 9:00 AM)";
  }
}

/**
 * Configure all WhatsApp and Phone links across the website
 */
function initContactLinks() {
  // Setup phone links
  const callLinks = document.querySelectorAll('[data-call-action]');
  callLinks.forEach(link => {
    link.href = `tel:${SITE_CONFIG.phoneNumberTel}`;
    const displayTarget = link.querySelector('[data-phone-display]');
    if (displayTarget) {
      displayTarget.textContent = SITE_CONFIG.phoneNumberDisplay;
    }
  });

  // Display raw phone numbers
  document.querySelectorAll('[data-phone-display-text]').forEach(el => {
    el.textContent = SITE_CONFIG.phoneNumberDisplay;
  });

  // Setup address and working hours
  document.querySelectorAll('[data-address-display]').forEach(el => {
    el.textContent = SITE_CONFIG.addressFull;
  });

  // Setup WhatsApp buttons & links
  const isMarathi = currentLang === 'mr';
  const messagesDict = isMarathi ? SITE_CONFIG.messagesMr : SITE_CONFIG.messages;

  const whatsappLinks = document.querySelectorAll('[data-whatsapp-action]');
  whatsappLinks.forEach(link => {
    const actionKey = link.getAttribute('data-whatsapp-action') || 'general';
    const message = messagesDict[actionKey] || messagesDict.general;
    
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;

    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    if (!link.getAttribute('aria-label')) {
      link.setAttribute('aria-label', `Chat on WhatsApp with ${SITE_CONFIG.businessName}`);
    }
  });
}

/**
 * Mobile Drawer Menu Handler
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('[data-mobile-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(isOpen) {
    const openState = typeof isOpen === 'boolean' ? isOpen : !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', openState);
    toggleBtn.setAttribute('aria-expanded', openState ? 'true' : 'false');
    
    if (openState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('[data-mobile-close]');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toggleMenu(false);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}

/**
 * Accordion FAQ Handler
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

/**
 * Quick Diagnostic / Inquiry Form -> Direct to WhatsApp
 */
function initInquiryForm() {
  const form = document.querySelector('#quickInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#clientName');
    const deviceInput = form.querySelector('#deviceType');
    const issueInput = form.querySelector('#issueDescription');

    const name = nameInput ? nameInput.value.trim() : 'Customer';
    const device = deviceInput ? deviceInput.value.trim() : 'Laptop/PC';
    const issue = issueInput ? issueInput.value.trim() : 'Repair Enquiry';

    const isMarathi = currentLang === 'mr';
    const generator = isMarathi ? SITE_CONFIG.messagesMr.customForm : SITE_CONFIG.messages.customForm;

    const formattedMsg = generator(encodeURIComponent(name), encodeURIComponent(device), encodeURIComponent(issue));
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${formattedMsg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

/**
 * Auto-update current year in footer
 */
function initDynamicYear() {
  const yearEl = document.querySelector('#currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
