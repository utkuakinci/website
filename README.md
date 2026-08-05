# Utku Akinci — Personal Portfolio Site
 
A single-file, static personal portfolio website. HTML, CSS, and JavaScript all live inside `index.html` — no build system or dependencies required.
 
## Features
 
- **Bilingual content (EN/DE)** — Language toggle buttons in the top-right switch between English and German. Text is swapped via JS using `data-en` / `data-de` attributes.
- **Sections:** Hero, Key Achievements, About (Who I Am), Experience, Skills, Gallery, Education, Publications, Contact
- **Scroll-reveal animations** — Elements with the `.reveal` class fade/animate in on scroll via `IntersectionObserver`.
- **Gallery** — Preloaded photos from Unsplash plus user-addable slots.
- **Photo placeholders** — Hero and About sections show placeholders when no real photo is set (the "upload" button is currently non-functional — see Future Improvements).
- **Responsive design** — Mobile-friendly layout with a fixed nav bar, using Google Fonts (DM Serif Display, DM Sans, DM Mono).
- **Contact links** — `mailto:` link and a LinkedIn link.
## Tech Stack
 
- Vanilla HTML5 / CSS3 (theming via CSS custom properties)
- Vanilla JavaScript (no framework)
- Google Fonts (CDN)
- Unsplash (gallery images, via CDN)
## Running
 
No build step required — just open the file in a browser:
 
```bash
open index.html   # macOS
# or with a local server:
python3 -m http.server
```
 
Can be deployed directly to any static hosting service such as GitHub Pages, Netlify, or Vercel.
 
## Future Development Points
 
- [ ] **Real photo integration** — The Hero and About placeholders are still empty; the "upload" button exists visually but has no functional upload mechanism (needs localStorage or real file handling).
- [ ] **Gallery images** — Currently using Unsplash stock photos; should be replaced with real project/DFKI/conference photos.
- [ ] **Missing LinkedIn link** — `href="https://linkedin.com"` is a placeholder and should be updated with the actual profile URL.
- [ ] **Content validation** — Dates and titles in Experience, Education, and Publications sections need to stay in sync with the current CV.
- [ ] **SEO & meta tags** — Missing `<meta name="description">`, Open Graph, and Twitter Card tags, so link previews don't render when shared.
- [ ] **Accessibility (a11y)** — Could add `alt` text for images, `aria-pressed` on language buttons, `aria-label` on nav, etc.
- [ ] **Performance** — Review lazy-loading and font-display strategy for Google Fonts and Unsplash images; gallery images could be optimized and served locally.
- [ ] **Contact form** — Replace `mailto:` with an embedded contact form (e.g. Formspree, Netlify Forms) for a smoother UX.
- [ ] **Code organization** — As the project grows, CSS/JS could be split into separate files (`styles.css`, `main.js`); the single-file approach may have been chosen for simplicity but adds maintenance cost over time.
- [ ] **Analytics** — Consider adding privacy-friendly analytics (e.g. Plausible, Umami) for visitor stats.
- [ ] **Dark mode** — Since CSS custom properties are already in use, adding a `prefers-color-scheme` or manual theme toggle would be relatively easy.
- [ ] **Cross-browser testing** — Manually test across different browsers and screen sizes, especially the nav and gallery grid on mobile.

## File Structure
```
.
└── index.html   # All HTML, CSS, and JS live here
```
