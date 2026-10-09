# Personal Portfolio Site

Personal portfolio of Utku Akinci — a single-file, static website. HTML, CSS, and JavaScript all live inside `index.html`; there is no build system and no dependencies.

[![utkuakinci.github.io](https://img.shields.io/badge/Go_To_Website-FF6600?style=for-the-badge)](https://utkuakinci.github.io/website/ "https://utkuakinci.github.io/website/")
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/akinciutku)

## 🌟 Features

- **Bilingual content (EN/DE)** — The toggle in the top-right switches between English and German without reloading the page.
- **Dark mode** — Follows the OS preference on first visit; the toggle in the nav overrides it and the choice is remembered.
- **Sections** — Hero, Key Achievements, About, Experience, Projects, Skills, Gallery, Education, Publications, Contact.
- **Hero terminal** — A small terminal card that types out a few commands on load.
- **Projects** — Hand-written project cards, plus the latest public repositories fetched live from the GitHub API.
- **Publications** — Each entry lists authors, venue, and a link to the record or DOI.
- **Scroll-reveal animations** — Elements with the `.reveal` class fade in on scroll via `IntersectionObserver`.
- **Gallery** — Generated from a small array in the script, with a caption per language.
- **Responsive design** — Fixed nav bar that highlights the current section and collapses into a menu below 1100px; single-column layout below 860px.
- **Link previews** — Meta description, Open Graph, and Twitter Card tags.

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- Vanilla HTML5 / CSS3 (theming via CSS custom properties in `:root`)
- Vanilla JavaScript (no framework)
- Google Fonts via CDN (DM Serif Display, DM Sans, DM Mono)
- Devicon SVGs via CDN (technology icons in the Skills section, loaded one file per icon)
- GitHub REST API (public repository list, no token needed)
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

**Projects.** Each project is an `<article class="proj-card">` in the Projects section; copy one to add another. The "Latest on GitHub" list below them needs no upkeep: it shows the six most recently pushed public repositories of the account in `GH_USER`, skipping forks. If the GitHub request fails, the list is simply hidden.

**Hero terminal.** The commands and their output are the `termScript` array in the script.

**Skill icons.** A tag gets an icon from an `<i class="ic ic-…">` element inside it. Each `.ic-…` class in the `<style>` block points at one SVG from <https://devicon.dev>; add a class there to add an icon. Tags without a matching icon stay text-only.

**Colors.** All colors are CSS custom properties at the top of the `<style>` block: `:root` holds the light theme and `:root[data-theme="dark"]` the dark one. Add new colors to both.

## 🌐 Deployment

The site is served by GitHub Pages at <https://utkuakinci.github.io/website/>; changes go live once they land on `main`. Because it is a plain static site, it can also be hosted as-is on Netlify, Vercel, or any other static host.

If the URL changes, update the `og:url` and `og:image` meta tags in `index.html` — they must be absolute.

## 🏗️ File Structure

```
.
├── images/       # Photos used by the hero, about, and gallery sections
├── favicon.svg   # Browser tab icon
├── index.html    # All HTML, CSS, and JS live here
└── README.md     # Project documentation
```

## 🎯 Future Development Points

### Needs input first

These are blocked on a file, a decision, or a review rather than on code.

- [ ] **CV download** — No CV file exists in the repo yet (`images/utku_cv.jpeg` is a portrait). Add the CV as a PDF, then link it from the hero and contact sections.
- [ ] **Custom domain** — Buy a domain, point it at GitHub Pages, then add a `CNAME` file and update the `og:url` and `og:image` tags.
- [ ] **Publication years** — "Prototyping and Testing System Interconnect Standard…" and "Improving Flexibility in Modular Space Robots…" are listed as 2026, following their DFKI records (Engineering Proceedings 133). Confirm, or change back to 2025.
- [ ] **Project card texts** — The descriptions in the Projects section were derived from the Experience bullets. Check them, in particular that the ARM Cortex-M7 unit test environment belongs to SAMLER-KI.
- [ ] **German translations** — Have the German texts proofread, especially the newer ones (project cards, dates, gallery captions).
- [ ] **Repository descriptions** — Several repositories shown under "Latest on GitHub" have no description on GitHub (e.g. FaceDetection, lawnmower, Computer-Vision-Projects). Adding one there updates the site automatically.
- [ ] **Contribution graph** — Left out because commits are authored as `uakinci` while the repositories belong to `utkuakinci`. Link the commit email to the GitHub account first, otherwise the graph may come out empty.

### Improvements

- [ ] **Gallery images** — Two slots still use Unsplash stock photos; replace them with real project/DFKI/conference photos.
- [ ] **Content validation** — Keep dates and titles in Experience, Education, and Publications in sync with the current CV.
- [ ] **Accessibility (a11y)** — Text contrast, focus outlines, and ARIA labels are in place; still open is a pass with a screen reader and keyboard-only navigation.
- [ ] **Performance** — Serve the images in `images/` as WebP and self-host the two remaining Unsplash images.
- [ ] **Contact form** — Replace `mailto:` with an embedded form (e.g. Formspree, Netlify Forms).
- [ ] **Code organization** — Split CSS/JS into `styles.css` and `main.js` if the page keeps growing.
- [ ] **Analytics** — Consider privacy-friendly analytics (e.g. Plausible, Umami).
- [ ] **Cross-browser testing** — Checked in desktop Chrome at several widths; still to do are Safari, Firefox, and real phones.
