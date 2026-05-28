# QA.Dev Portfolio + LMS Platform

A personal portfolio website with an integrated LMS (Learning Management System) platform featuring 9 structured learning roadmaps for QA Engineers and Developers.

## 🚀 Features

- **Portfolio Landing Page** — About, Skills, Experience, and Course Preview
- **Full LMS Platform** — 9 learning paths with phases, topics, and resources
- **Dark / Light Mode Toggle** — Persistent theme across pages
- **GitHub Pages Ready** — Pure HTML/CSS/JS, no build step needed
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **9 Learning Paths** with best YouTube & internet resources

## 📚 Learning Paths Included

1. Complete Java DSA (Beginner → Advanced)
2. AI Development & Testing with Python
3. Playwright with TypeScript & JavaScript
4. RestAssured & API Testing (Java)
5. SQL for Testers & Developers
6. API Testing using Python
7. DevOps for Testing
8. JMeter for Beginners
9. K6 for Beginners

## 🛠 Deployment on GitHub Pages

1. Create a new GitHub repository (e.g. `my-portfolio`)
2. Upload all files from this zip to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/my-portfolio/`

## 📁 File Structure

```
/
├── index.html          ← Portfolio landing page
├── lms.html            ← LMS platform
├── _config.yml         ← GitHub Pages config
├── css/
│   ├── style.css       ← Shared styles + theme system
│   ├── portfolio.css   ← Portfolio page styles
│   └── lms.css         ← LMS platform styles
└── js/
    ├── data.js         ← All 9 course data + resources
    ├── app.js          ← Portfolio page logic
    └── lms.js          ← LMS interactivity
```

## ✏️ Customization

- **Your Name / Photo**: Edit `index.html` hero and about sections
- **Experience**: Update the timeline section in `index.html`
- **Social Links**: Update GitHub, LinkedIn, Email links in the contact section
- **Courses**: Add/edit courses in `js/data.js`
- **Colors**: Change `--accent` CSS variable in `css/style.css`

## 🎨 Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Google Fonts: Syne + DM Sans
- No frameworks, no dependencies, no build tools
- CSS custom properties for theming
- Intersection Observer API for scroll animations
