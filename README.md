# Personal Portfolio Site

Personal portfolio of Utku Akinci — a static website made of three hand-written files: `index.html`, `styles.css`, and `main.js`. There is no build system and no dependencies.

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
- **Gallery** — Generated from a small array in `main.js`, with a caption per language.
- **Contact form** — Messages go through FormSubmit, which checks a captcha and forwards them by email; direct links stay below it.
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
- FormSubmit (contact form delivery with captcha, free, no account)
- GoatCounter (optional visit counts, off by default)

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

**Gallery.** Add, remove, or reorder entries in the `preloadedPhotos` array in `main.js`:

```js
{ src: 'images/lunisrover.jpeg', caption: { en: 'Lab work at DFKI', de: 'Laborarbeit am DFKI' } },
```

**Projects.** Each project is an `<article class="proj-card">` in the Projects section; copy one to add another. The "Latest on GitHub" list below them needs no upkeep: it shows the six most recently pushed public repositories of the account in `GH_USER`, skipping forks. If the GitHub request fails, the list is simply hidden.

**Hero terminal.** The commands and their output are the `termScript` array in `main.js`.

**Skill icons.** A tag gets an icon from an `<i class="ic ic-…">` element inside it. Each `.ic-…` class in `styles.css` points at one SVG from <https://devicon.dev>; add a class there to add an icon. Tags without a matching icon stay text-only.

**Contact form.** The form posts to FormSubmit, which shows its captcha page, sends the visitor back to the site, and forwards each message to the email address in the form's `action` URL in `index.html`. The first message ever sent triggers a confirmation email to that address; messages are delivered only after the link in it is clicked. Changing the address means confirming again.

**Analytics.** Visit counting is off. To turn it on, create a free site at <https://www.goatcounter.com> and put its code (the `mysite` part of `mysite.goatcounter.com`) into `GOATCOUNTER_CODE` in `main.js`. GoatCounter sets no cookies, so no consent banner is needed.

**Colors.** All colors are CSS custom properties at the top of `styles.css`: `:root` holds the light theme and `:root[data-theme="dark"]` the dark one. Add new colors to both.

## 🌐 Deployment

The site is served by GitHub Pages at <https://utkuakinci.github.io/website/>; changes go live once they land on `main`. Because it is a plain static site, it can also be hosted as-is on Netlify, Vercel, or any other static host.

If the URL changes, update the `og:url` and `og:image` meta tags in `index.html` — they must be absolute.

## 🏗️ File Structure

```
.
├── images/       # Photos used by the hero, about, and gallery sections
├── favicon.svg   # Browser tab icon
├── index.html    # Page content and meta tags
├── main.js       # Language switch, theme, gallery, terminal, GitHub list, contact form
├── styles.css    # All styling, light and dark theme
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

- [X] **Contact form confirmation** — Send one test message through the live form and click the link in the confirmation email from FormSubmit; until then messages are not delivered.
- [ ] **Analytics code** — Create a free GoatCounter site and set `GOATCOUNTER_CODE` in `main.js`.

### Improvements

- [ ] **Gallery images** — Two slots still use Unsplash stock photos; replace them with real project/DFKI/conference photos.
- [ ] **Content validation** — Keep dates and titles in Experience, Education, and Publications in sync with the current CV.
- [ ] **Accessibility (a11y)** — Text contrast, focus outlines, and ARIA labels are in place; still open is a pass with a screen reader and keyboard-only navigation.
- [ ] **Performance** — Serve the images in `images/` as WebP and self-host the two remaining Unsplash images.
- [ ] **Cross-browser testing** — Checked in desktop Chrome at several widths; still to do are Safari, Firefox, and real phones.
