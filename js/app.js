/* ═══════════════════════════════════════════
   PORTFOLIO PAGE JS
═══════════════════════════════════════════ */

// ── Theme ──
const getTheme = () => localStorage.getItem('theme') || 'dark';
const setTheme = (t) => {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
};
setTheme(getTheme());

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ── Hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('mobile-open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks?.classList.remove('mobile-open'));
});

// ── Roadmap accordion toggle ──
document.querySelectorAll('.week-header').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.week-card');
    if (!card) return;

    const isCollapsed = card.classList.toggle('collapsed');
    button.setAttribute('aria-expanded', String(!isCollapsed));
  });
});

// ── Intersection Observer for animations ──
const observeElements = document.querySelectorAll('.summary-card, .overview-chip, .week-card, .contact-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
