# Portfolio User Guide

Personal portfolio for Ahmet Burak Kara at www.akara.engineer

---

## How to Edit Content

### All content lives in `js/content.js`

Edit the file, save, refresh browser. Done.

```javascript
const content = {
  hero: { name, title, tagline },
  about: { text, image },
  experiences: [{ title, company, period, description, location }],
  projects: [{ title, description, tools, link, publications }],
  publications: [{ title, authors, venue, year, pdf, type }],
  skills: { "Category": ["skill1", "skill2"] },
  contact: { email, linkedin, github }
}
```

---

## Common Tasks

### Add a Project

Edit `js/content.js`:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Brief description",
    tools: ["Python", "Docker"],
    link: "https://github.com/...",
    publications: ["pub-id"] // optional
  }
]
```

### Add Work Experience

```javascript
experiences: [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Jan 2024 - Present",
    location: "City, Country",
    description: "What you did..."
  }
]
```

### Change Colors

Edit `css/styles.css`:
```css
:root {
  --color-bg: #ffffff;
  --color-text: #000000;
  --color-accent: #666666;
}
```

### Replace CV

Replace `assets/cv.pdf` with new file (keep filename)

---

## Local Testing

```bash
python3 -m http.server 8000
```

Open http://localhost:8000

---

## Deployment

Push to `main` branch on GitHub.
Site auto-deploys to www.akara.engineer via GitHub Pages.

---

## File Structure

```
/
├── index.html          HTML structure
├── css/styles.css      All styles
├── js/
│   ├── content.js      Edit this for content updates
│   └── main.js         Render logic
└── assets/
    ├── images/
    ├── cv.pdf
    └── publications/
```

---

## Quick Reference

**Edit content:** `js/content.js`
**Edit styles:** `css/styles.css`
**Deploy:** Push to `main`
