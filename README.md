# Personal Portfolio Site

Personal portfolio of Utku Akinci — a single-file, static website. HTML, CSS, and JavaScript all live inside `index.html`; there is no build system and no dependencies.

[![utkuakinci.github.io](https://img.shields.io/badge/Go_To_Website-FF6600?style=for-the-badge)](https://utkuakinci.github.io/website/ "https://utkuakinci.github.io/website/")
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/akinciutku)

## 🌟 Features

- **Bilingual content (EN/DE)** — The toggle in the top-right switches between English and German without reloading the page.
- **Sections** — Hero, Key Achievements, About, Experience, Skills, Gallery, Education, Publications, Contact.
- **Scroll-reveal animations** — Elements with the `.reveal` class fade in on scroll via `IntersectionObserver`.
- **Gallery** — Generated from a small array in the script, with a caption per language.
- **Responsive design** — Fixed nav bar and a single-column layout below 860px.
- **Link previews** — Meta description, Open Graph, and Twitter Card tags.

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- Vanilla HTML5 / CSS3 (theming via CSS custom properties in `:root`)
- Vanilla JavaScript (no framework)
- Google Fonts via CDN (DM Serif Display, DM Sans, DM Mono)
- Unsplash via CDN (placeholder gallery images)

## 🚀 Running

No build step required — open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## ✏️ Editing Content

**Text.** Every translatable element carries its text three times: in `data-en`, in `data-de`, and as the element's visible content. Keep the visible content identical to `data-en` — it is what visitors see before they touch the language toggle.

```html
<h2 data-en="Skills" data-de="Kenntnisse">Skills</h2>
```

Elements without these attributes (e.g. publication titles) stay the same in both languages.

**Hero and About photos.** Put the image in `images/` and change the `src` of `#heroImg` or `#aboutImg`.

**Gallery.** Add, remove, or reorder entries in the `preloadedPhotos` array near the bottom of `index.html`:

```js
{ src: 'images/lunisrover.jpeg', caption: { en: 'Lab work at DFKI', de: 'Laborarbeit am DFKI' } },
```

**Colors.** All colors are CSS custom properties at the top of the `<style>` block.

## 🌐 Deployment

The site is served by GitHub Pages at <https://utkuakinci.github.io/website/>; changes go live once they land on `main`. Because it is a plain static site, it can also be hosted as-is on Netlify, Vercel, or any other static host.

If the URL changes, update the `og:url` and `og:image` meta tags in `index.html` — they must be absolute.

## 🏗️ File Structure

```
.
├── images/       # Photos used by the hero, about, and gallery sections
├── index.html    # All HTML, CSS, and JS live here
└── README.md     # Project documentation
```

## 🎯 Future Development Points

- [ ] **Gallery images** — Two slots still use Unsplash stock photos; replace them with real project/DFKI/conference photos.
- [ ] **Content validation** — Keep dates and titles in Experience, Education, and Publications in sync with the current CV.
- [ ] **Accessibility (a11y)** — Add `aria-pressed` on the language buttons, `aria-label` on the nav, and check color contrast.
- [ ] **Performance** — Compress the images in `images/` and review the font-loading strategy.
- [ ] **Dark mode** — Colors are already CSS custom properties, so a `prefers-color-scheme` variant or a manual toggle is a small step.
- [ ] **Contact form** — Replace `mailto:` with an embedded form (e.g. Formspree, Netlify Forms).
- [ ] **Code organization** — Split CSS/JS into `styles.css` and `main.js` if the page keeps growing.
- [ ] **Analytics** — Consider privacy-friendly analytics (e.g. Plausible, Umami).
- [ ] **Cross-browser testing** — Check the nav and gallery grid on mobile browsers and small screens.
