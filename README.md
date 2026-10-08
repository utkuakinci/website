# Personal Portfolio Site
 
A single-file, static personal portfolio website. HTML, CSS, and JavaScript all live inside `index.html` — no build system or dependencies required.

[![utkuakinci.github.io](https://img.shields.io/badge/Go_To_Website-FF6600?style=for-the-badge)](https://utkuakinci.github.io/website/ "https://utkuakinci.github.io/website/")
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/akinciutku)

## 🌟 Features
 
- **Bilingual content (EN/DE)** — Language toggle buttons in the top-right switch between English and German. Text is swapped via JS using `data-en` / `data-de` attributes.
- **Sections:** Hero, Key Achievements, About (Who I Am), Experience, Skills, Gallery, Education, Publications, Contact
- **Scroll-reveal animations** — Elements with the `.reveal` class fade/animate in on scroll via `IntersectionObserver`.
- **Gallery** — Rendered from the `preloadedPhotos` array in `index.html`; each entry has a `src` and an EN/DE caption. Mix of local photos (`images/`) and Unsplash placeholders.
- **Photos** — Hero and About photos are served from `images/`; change the `src` of `#heroImg` / `#aboutImg` to swap them.
- **Responsive design** — Mobile-friendly layout with a fixed nav bar, using Google Fonts (DM Serif Display, DM Sans, DM Mono).
- **Contact links** — `mailto:`, LinkedIn, and phone links.
- **Link previews** — Meta description, Open Graph, and Twitter Card tags.

## 🛠️ Tech Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
<!--![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)-->
- Vanilla HTML5 / CSS3 (theming via CSS custom properties)
- Vanilla JavaScript (no framework)
- Google Fonts (CDN)
- Unsplash (gallery images, via CDN)

## 🚀 Running
 
No build step required — just open the file in a browser:
 
```bash
open index.html   # macOS
# or with a local server:
python3 -m http.server
```
 
Can be deployed directly to any static hosting service such as GitHub Pages, Netlify, or Vercel.
 
## 🎯 Future Development Points
 
- [ ] **Gallery images** — Two slots still use Unsplash stock photos; should be replaced with real project/DFKI/conference photos.
- [ ] **Content validation** — Dates and titles in Experience, Education, and Publications sections need to stay in sync with the current CV.
- [ ] **Accessibility (a11y)** — Could add `aria-pressed` on language buttons, `aria-label` on nav, etc.
- [ ] **Performance** — Below-the-fold images are lazy-loaded; remaining gallery images could be optimized and served locally.
- [ ] **Contact form** — Replace `mailto:` with an embedded contact form (e.g. Formspree, Netlify Forms) for a smoother UX.
- [ ] **Code organization** — As the project grows, CSS/JS could be split into separate files (`styles.css`, `main.js`); the single-file approach may have been chosen for simplicity but adds maintenance cost over time.
- [ ] **Analytics** — Consider adding privacy-friendly analytics (e.g. Plausible, Umami) for visitor stats.
- [ ] **Dark mode** — Since CSS custom properties are already in use, adding a `prefers-color-scheme` or manual theme toggle would be relatively easy.
- [ ] **Cross-browser testing** — Manually test across different browsers and screen sizes, especially the nav and gallery grid on mobile.

## 🏗️ File Structure
```
.
├── images/       # Project assets and images
├── index.html    # All HTML, CSS, and JS live here
└── README.md     # Project documentation
```
