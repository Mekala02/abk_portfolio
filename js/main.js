function renderHero() {
  const hero = document.querySelector('.hero');
  hero.innerHTML = `
    <div class="hero-content">
      <h1>${content.hero.name}</h1>
      <div class="hero-subtitle">${content.hero.statement}</div>
    </div>
  `;
}

function renderWork() {
  const container = document.querySelector('.work');

  const workHTML = content.work.map(project => {
    const versionTag = project.version ? ` <span class="work-version">${project.version}</span>` : '';
    const stackStr = project.stack.join(', ');
    const publicationsHTML = project.publications.length > 0
      ? `<div class="work-publications">
           ${project.publications.map(pub =>
             `<a href="${pub.url}" class="work-publication-link" target="_blank" rel="noopener noreferrer">${pub.title}</a>`
           ).join('')}
         </div>`
      : '';

    return `
      <div class="work-item">
        <h3>${project.title}${versionTag}</h3>
        <div class="work-meta">${project.metadata} | ${project.period}</div>
        <p>${project.description}</p>
        <div class="work-stack">${stackStr}</div>
        ${publicationsHTML}
      </div>
    `;
  }).join('');

  const experiencesHTML = content.experiences.map(exp => {
    const descriptionHTML = exp.description.map(item => `<p>${item}</p>`).join('');
    return `
      <div class="work-item">
        <h3>${exp.company}</h3>
        <div class="work-meta">${exp.title} | ${exp.period} | ${exp.location}</div>
        ${descriptionHTML}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="work-section-experiences">
      <h2 class="section-title">Experience</h2>
      ${experiencesHTML}
    </div>
    <div class="work-section-selected">
      <h2 class="section-title">Selected work</h2>
      ${workHTML}
    </div>
  `;
}

function renderAbout() {
  const container = document.querySelector('.about .section-container');

  const textHTML = content.about.text.map(paragraph => `<p>${paragraph}</p>`).join('');

  const skillsHTML = Object.values(content.skills).map(skills => {
    const skillsList = skills.join(', ');
    return `
      <div class="skill-category">
        <span class="skill-category-items">${skillsList}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="about-content">
      <div class="about-photo-wrapper">
        <div class="about-photo-circle">
          <img src="${content.about.image}" alt="Ahmet Burak Kara">
        </div>
      </div>

      <div class="about-text">
        ${textHTML}
        <a href="${content.about.cvLink}" class="button cv-button" download>Download CV</a>
      </div>
    </div>

    <div class="skills-grid" style="margin-top: var(--space-12);">
      ${skillsHTML}
    </div>
  `;
}

function renderExperiences() {
  const container = document.querySelector('#experiences .section-container');
  const experiencesHTML = content.experiences.map(exp => {
    const descriptionHTML = exp.description.map(item => `<li>${item}</li>`).join('');
    return `
      <div class="experience">
        <h3>${exp.company}</h3>
        <div class="role">${exp.title}</div>
        <div class="time">${exp.period} | ${exp.location}</div>
        <ul>${descriptionHTML}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Experience</h2>
    ${experiencesHTML}
  `;
}

function renderProjects() {
  const container = document.querySelector('#projects .section-container');
  if (!content.projects || content.projects.length === 0) {
    container.innerHTML = '';
    return;
  }

  const projectsHTML = content.projects.map(project => {
    const toolsStr = project.tools ? project.tools.join(', ') : '';
    const toolsHTML = toolsStr ? `<div class="tools">${toolsStr}</div>` : '';

    return `
      <div class="project">
        <h3><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
        <p>${project.description}</p>
        ${toolsHTML}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">${projectsHTML}</div>
  `;
}

function renderSkills() {
  const container = document.querySelector('#skills .section-container');
  const skillsHTML = Object.entries(content.skills).map(([category, skills]) => {
    const skillsList = skills.map(skill => `<li>${skill}</li>`).join('');
    return `
      <div class="skill-category">
        <h3>${category}</h3>
        <ul>${skillsList}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">${skillsHTML}</div>
  `;
}

function renderContact() {
  const container = document.querySelector('.contact .section-container');
  container.innerHTML = `
    <div class="contact-links">
      <a href="mailto:${content.contact.email}" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
          <polyline points="3 7 12 13 21 7"></polyline>
        </svg>
      </a>
      <a href="${content.contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a href="${content.contact.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  `;
}

function init() {
  renderHero();
  renderAbout();
  renderWork();
  renderContact();
}

document.addEventListener('DOMContentLoaded', init);
