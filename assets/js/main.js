/**
 * Art of Flavors — main.js
 * www.artofflavors.com
 */
(function () {
  'use strict';

  // ── Hamburger menu ─────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on mobile nav link click
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Active nav on scroll ────────────────────────────
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.main-navigation a');
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (s) {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(function (a) {
        const href = a.getAttribute('href');
        a.classList.toggle('active', href && href.includes('#' + current) && current !== '');
      });
    });
  }

  // ── FAQ accordion ───────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) { el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Recipe filter ───────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const recipeCards = document.querySelectorAll('.recipe-card[data-category]');
  if (filterBtns.length && recipeCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        recipeCards.forEach(function (card) {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Smooth anchor scroll ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Header scroll effect ────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(30,26,20,0.08)' : '';
    });
  }

  // ── Newsletter form ─────────────────────────────────
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      const btn = newsletterForm.querySelector('.newsletter-btn');
      if (input && input.value) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = '#4a7c59';
        input.value = '';
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  // ── Contact form ────────────────────────────────────
  const contactForm = document.querySelector('.contact-form-wrap');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#4a7c59';
      setTimeout(function () {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ── Lazy load images ────────────────────────────────
  if ('IntersectionObserver' in window) {
    const imgs = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(function (img) { observer.observe(img); });
  }

})();
