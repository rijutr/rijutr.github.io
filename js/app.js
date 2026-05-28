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

// ── Course Preview Cards ──
const previewGrid = document.getElementById('coursePreviewGrid');
if (previewGrid && typeof COURSES !== 'undefined') {
  COURSES.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-preview-card';
    card.style.setProperty('--course-color', course.color);
    card.innerHTML = `
      <div class="preview-icon">${course.emoji}</div>
      <div class="preview-title">${course.title}</div>
      <div class="preview-meta">
        <span>⏱ ${course.duration}</span>
        <span>📊 ${course.level}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `lms.html#${course.id}`;
    });
    previewGrid.appendChild(card);
  });
}

// ── Intersection Observer for animations ──
const observeElements = document.querySelectorAll('.timeline-card, .skill-category, .highlight-item, .course-preview-card');
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
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
