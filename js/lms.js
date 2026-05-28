/* ═══════════════════════════════════════════
   LMS PLATFORM JS
═══════════════════════════════════════════ */

// ── Theme ──
const getTheme = () => localStorage.getItem('theme') || 'dark';
const setTheme = (t) => {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
};
setTheme(getTheme());

const themeToggleLMS = document.getElementById('themeToggleLMS');
themeToggleLMS?.addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  updateThemeLabel();
});
function updateThemeLabel() {
  const label = themeToggleLMS?.querySelector('.toggle-label');
  if (label) label.textContent = getTheme() === 'dark' ? 'Dark Mode' : 'Light Mode';
}
updateThemeLabel();

// ── Sidebar ──
const sidebar = document.getElementById('lmsSidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
let overlay;

function createOverlay() {
  overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', closeSidebar);
}
createOverlay();

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}

sidebarToggle?.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
sidebarClose?.addEventListener('click', closeSidebar);

// ── View Management ──
const dashboardView = document.getElementById('dashboardView');
const courseView = document.getElementById('courseView');
const topbarBreadcrumb = document.getElementById('topbarBreadcrumb');

function showDashboard() {
  dashboardView.classList.add('active');
  courseView.classList.remove('active');
  topbarBreadcrumb.textContent = 'Dashboard';
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelector('[data-view="dashboard"]')?.classList.add('active');
  document.querySelectorAll('.sidebar-course-item').forEach(i => i.classList.remove('active'));
  window.scrollTo(0, 0);
}

function showCourse(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  dashboardView.classList.remove('active');
  courseView.classList.add('active');
  topbarBreadcrumb.textContent = course.shortTitle;

  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.sidebar-course-item').forEach(i => {
    i.classList.toggle('active', i.dataset.id === courseId);
  });

  renderCourseDetail(course);
  window.scrollTo(0, 0);
  if (window.innerWidth < 900) closeSidebar();
}

// ── Build Sidebar Course List ──
const sidebarCourseList = document.getElementById('sidebarCourseList');
COURSES.forEach(course => {
  const item = document.createElement('div');
  item.className = 'sidebar-course-item';
  item.dataset.id = course.id;
  item.innerHTML = `
    <span class="sidebar-course-icon">${course.emoji}</span>
    <span class="sidebar-course-title">${course.shortTitle}</span>
  `;
  item.addEventListener('click', () => showCourse(course.id));
  sidebarCourseList.appendChild(item);
});

// ── Dashboard View ──
document.querySelector('[data-view="dashboard"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  showDashboard();
});

// ── Course Search ──
const courseSearch = document.getElementById('courseSearch');
courseSearch?.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('.sidebar-course-item').forEach(item => {
    const title = item.querySelector('.sidebar-course-title').textContent.toLowerCase();
    item.style.display = title.includes(q) ? '' : 'none';
  });
});

// ── Build Dashboard Grid ──
function buildDashboard(filter = 'all') {
  const grid = document.getElementById('dashCoursesGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.category === filter);

  filtered.forEach(course => {
    const card = document.createElement('div');
    card.className = 'lms-course-card';
    card.style.setProperty('--course-color', course.color);
    card.innerHTML = `
      <div class="course-card-header">
        <span class="course-emoji">${course.emoji}</span>
        <span class="course-level-badge ${course.levelClass}">${course.level}</span>
      </div>
      <div class="course-card-title">${course.title}</div>
      <div class="course-card-desc">${course.description.substring(0, 110)}...</div>
      <div class="course-tags">
        ${course.tags.map(t => `<span class="course-tag">${t}</span>`).join('')}
      </div>
      <div class="course-card-footer">
        <span class="course-meta-chip">📅 ${course.duration}</span>
        <span class="course-meta-chip">⏰ ${course.dailyCommit}</span>
      </div>
    `;
    card.addEventListener('click', () => showCourse(course.id));
    grid.appendChild(card);
  });
}
buildDashboard();

// ── Filter Buttons ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildDashboard(btn.dataset.filter);
  });
});

// ── Render Course Detail ──
function renderCourseDetail(course) {
  const container = document.getElementById('courseDetailContent');

  const resourcesHTML = course.resources.map(r => `
    <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
      <div class="resource-icon">${r.icon}</div>
      <div>
        <div class="resource-type">${r.type}</div>
        <div class="resource-name">${r.name}</div>
        <div class="resource-author">${r.author}</div>
        <span class="resource-free ${r.free ? 'is-free' : 'is-paid'}">${r.free ? '✓ Free' : '$ Paid'}</span>
      </div>
    </a>
  `).join('');

  const phasesHTML = course.phases.map((phase, i) => `
    <div class="phase-card" data-phase="${i}">
      <div class="phase-header" onclick="togglePhase(this)">
        <div class="phase-number" style="background:${course.color}">${i + 1}</div>
        <div class="phase-header-text">
          <div class="phase-title">${phase.title}</div>
          <div class="phase-duration">⏱ ${phase.duration}</div>
        </div>
        <span class="phase-arrow">▶</span>
      </div>
      <div class="phase-body">
        <div class="phase-topics">
          ${phase.topics.map(t => `
            <div class="topic-item">
              <div class="topic-bullet" style="border-color:${course.color};color:${course.color}">✓</div>
              <span>${t}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const tipsHTML = course.tips.map(t => `<li>${t}</li>`).join('');

  container.innerHTML = `
    <div class="course-detail" style="--course-color: ${course.color}">
      <div class="course-detail-header">
        <div class="course-detail-top">
          <div class="course-detail-icon">${course.emoji}</div>
          <div class="course-detail-meta">
            <h1>${course.title}</h1>
            <div class="course-detail-badges">
              <span class="course-level-badge ${course.levelClass}">${course.level}</span>
              <span class="course-meta-chip">📅 ${course.duration}</span>
              <span class="course-meta-chip">⏰ ${course.dailyCommit}</span>
              <span class="course-meta-chip">🎓 ${course.prereq}</span>
            </div>
          </div>
        </div>
        <p class="course-detail-desc">${course.description}</p>
        <div class="course-detail-stats">
          <div class="detail-stat"><span class="ds-icon">📅</span> <strong>${course.duration}</strong> total duration</div>
          <div class="detail-stat"><span class="ds-icon">⏰</span> <strong>${course.dailyCommit}</strong> commitment</div>
          <div class="detail-stat"><span class="ds-icon">📚</span> <strong>${course.phases.length}</strong> learning phases</div>
          <div class="detail-stat"><span class="ds-icon">🔗</span> <strong>${course.resources.length}</strong> resources</div>
        </div>
      </div>

      <div class="tips-box">
        <h4>💡 Pro Tips for This Path</h4>
        <ul class="tips-list">${tipsHTML}</ul>
      </div>

      <div class="roadmap-section">
        <h3 class="roadmap-section-title">📋 Learning Roadmap</h3>
        <div class="phases-container">
          ${phasesHTML}
        </div>
      </div>

      <div class="roadmap-section">
        <h3 class="roadmap-section-title">🔗 Best Learning Resources</h3>
        <div class="resources-grid">
          ${resourcesHTML}
        </div>
      </div>

    </div>
  `;

  // Open first phase by default
  const firstPhase = container.querySelector('.phase-card');
  if (firstPhase) firstPhase.classList.add('open');
}

// ── Toggle Phase ──
window.togglePhase = function(header) {
  const card = header.parentElement;
  card.classList.toggle('open');
};

// ── Hash-based navigation ──
function handleHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && COURSES.find(c => c.id === hash)) {
    showCourse(hash);
  } else {
    showDashboard();
  }
}
handleHash();
window.addEventListener('hashchange', handleHash);
