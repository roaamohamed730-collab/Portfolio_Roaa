# Roaa Mohamed — Packaging Designer Portfolio

A polished, modern, highly responsive personal portfolio website for **Roaa Mohamed**, Packaging Designer & Visual Creative.

Built with **pure HTML5, CSS3, and Vanilla JavaScript** — zero external frameworks or heavy dependencies.

---

## 🌟 Key Features

* **Bilingual Engine (English & Arabic)**:
  * Instant toggling between **English** (`dir="ltr"`) and **Arabic** (`dir="rtl"`).
  * Authentic design terminology in both languages.
  * Preferences automatically saved in `localStorage`.
* **Light & Dark Theme System**:
  * Bespoke, curated palettes for both modes (no harsh color inversions).
  * Adheres to custom hex tokens:
    * **Light Mode**: Primary `#8E7592`, Secondary `#CEB2BE`, Accent `#E3D2C8`
    * **Dark Mode**: Primary `#572F54`, Secondary `#8E7592`, Accent `#CEB2BE`
  * System preference auto-detection + manual toggle persisted in `localStorage`.
* **Complete 10-Section Structure**:
  1. **Home / Hero (`#home`)**: Bold editorial typography, packaging dieline motifs, competency chips, dual CTAs, and featured packaging showcase.
  2. **About Me (`#about`)**: Two-column layout, portrait framing with dieline crop marks, bio, specialty tags, and CTA.
  3. **Education (`#education`)**: Vertical dieline timeline with Capital University Faculty of Applied Arts credentials.
  4. **Skills & Tools (`#skills`)**: Responsive categorized cards (Packaging, Graphic Design, Motion, Prepress, and Software badges).
  5. **Work Experience (`#experience`)**: Freelance practice, Jetpack 4-week training, and NTI 120-hour Motion Graphics training.
  6. **Services (`#services`)**: 6 core service offerings with custom inline vector icons and hover elevation.
  7. **Selected Projects (`#projects`)**: 6 curated packaging & branding case studies (Maqam Al Oud, Natureve, Polaroid Pop-Up Camera, Roots, Kidia, Optical Illusion Planter).
  8. **Achievements & Certificates (`#achievements`)**: 4 credential cards with preview image placeholders.
  9. **Testimonials (`#testimonials`)**: Minimal luxury quote card with subtle typography and client metadata.
  10. **Get in Touch (`#contact`)**: Accessible form with live client-side validation, error highlights, and polite status announcements.
* **4 Refined Animation Motifs**:
  1. *Background Scrolling Shadows*: Ambient floating orbs with subtle scroll parallax and dotted dieline background grid.
  2. *Interactive Card Hover*: Smooth elevation, luminous borders, and micro image scaling.
  3. *Scroll Reveal*: IntersectionObserver-powered element entrances with staggered card delays.
  4. *Button Micro-Interactions*: Smooth hover translations, arrow glides, and active states.
* **Accessibility (WCAG Compliant)**:
  * Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`).
  * High-visibility `:focus-visible` outline rings (`3px solid var(--color-secondary)`).
  * Skip-to-content link for keyboard users.
  * Full `prefers-reduced-motion` support.
  * Collapsible mobile drawer with full keyboard and `Escape` key support.

---

## 📁 File Structure

```text
/
├── index.html                   # Semantic markup, 10 sections, bilingual attributes
├── styles.css                   # Theme tokens, fluid typography, LTR/RTL logical rules, animations
├── scripts.js                   # Bilingual dictionary, theme manager, mobile menu, scroll reveal, form
├── README.md                    # Project documentation & customization guide
└── assets/
    └── images/
        ├── hero-packaging.svg   # Featured packaging showcase graphic
        ├── about-portrait.svg   # Designer portrait placeholder with crop marks
        ├── project-01.svg       # Maqam Al Oud packaging mockup
        ├── project-02.svg       # Natureve skincare identity
        ├── project-03.svg       # Polaroid Pop-Up Camera interactive box
        ├── project-04.svg       # Roots herbal tea rebrand cylinder
        ├── project-05.svg       # Kidia newborn gable box
        ├── project-06.svg       # Optical Illusion Planter structural mockup
        ├── cert-01.svg          # NTI Motion Graphics certificate
        ├── cert-02.svg          # Jetpack Packaging & Prepress certificate
        ├── cert-03.svg          # Adobe Design Training credential
        └── cert-04.svg          # Creative Design Achievement award
```

---

## 🚀 Running Locally

### Option 1: Direct File Open (Easiest)
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Any Lightweight Static Server
If you have Python, Node.js, or VS Code Live Server installed:

* **VS Code**: Right-click `index.html` → "Open with Live Server"
* **Python**: `python -m http.server 8000` (then navigate to `http://localhost:8000`)
* **Node.js**: `npx serve .`

---

## 🎨 Customization Guide

### 1. Replacing Images
To use your own photos or packaging renders, simply drop your `.jpg`, `.png`, or `.webp` files into the `assets/images/` folder and update the `src` attribute in `index.html`:

* **Hero Featured Image**: `<img src="assets/images/hero-packaging.svg" ...>` in `#home`
* **Designer Portrait**: `<img src="assets/images/about-portrait.svg" ...>` in `#about`
* **Projects (1 to 6)**: `<img src="assets/images/project-01.svg" ...>` in `#projects`
* **Certificates (1 to 4)**: `<img src="assets/images/cert-01.svg" ...>` in `#achievements`

### 2. Editing Text & Translations
All text is organized in two places:
1. **`index.html`**: Default English markup for initial SSR/search crawlers.
2. **`scripts.js` (`const i18n = { en: {...}, ar: {...} }`)**: The bilingual dictionary. When you change text in `index.html`, also update the corresponding key in `i18n.en` and `i18n.ar` so the language switch remains seamless.

### 3. Modifying Colors
Open `styles.css` and adjust the CSS variables at the top of the file:
```css
:root {
  --color-primary: #8E7592;
  --color-secondary: #CEB2BE;
  --color-accent: #E3D2C8;
  /* ... */
}

[data-theme="dark"] {
  --color-primary: #572F54;
  --color-secondary: #8E7592;
  --color-accent: #CEB2BE;
  /* ... */
}
```

### 4. Adding More Projects
Copy any `<article class="project-card ...">` block in `index.html`, update the image `src`, title, category, and description, and add the corresponding translation keys in `scripts.js`.

### 5. Updating Social Profiles & Contact Details
Search for `https://www.behance.net` or `https://www.linkedin.com` in `index.html` and replace them with your direct profile URLs. Update the email address in Section 10 (`#contact`).

---

## 📜 License & Copyright

© 2026 Roaa Mohamed. All rights reserved. Designed for packaging innovation and print excellence.
