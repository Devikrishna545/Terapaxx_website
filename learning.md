## Personal Learning Guide: Running and Testing This Static Website

This project is a static website (HTML + compiled Tailwind CSS + vanilla JS). You do not need a framework dev server.

## 0) Tailwind build setup (production-safe)

This project now uses a local Tailwind v4 standalone CLI binary instead of CDN.

Build CSS once:

```bash
cd /Users/devikrishna/Desktop/Projects/Terapaxx_website
tools/tailwindcss -i ./tailwind.input.css -o ./assets/css/tailwind.css --minify
```

Watch CSS while editing:

```bash
cd /Users/devikrishna/Desktop/Projects/Terapaxx_website
tools/tailwindcss -i ./tailwind.input.css -o ./assets/css/tailwind.css --watch
```

No .env file is required for this Tailwind setup.

## 1) How to run locally

From project folder, run:

```bash
cd /Users/devikrishna/Desktop/Projects/Terapaxx_website
python3 -m http.server 5500
```

Open in browser:
- http://localhost:5500/
- http://localhost:5500/about/
- http://localhost:5500/gallery/
- http://localhost:5500/contact-us/
- http://localhost:5500/products/
- http://localhost:5500/home/

Why this is needed:
- Relative paths and route folders work correctly on an HTTP server.
- Some browser behavior does not work properly with direct file opening.

## 2) Fast visual check workflow

1. Open Home page.
2. Resize browser to mobile width (about 375px) and test menu toggle.
3. Open About and verify text hierarchy and spacing.
4. Open Gallery and test lightbox open and close.
5. Open Contact and test all direct contact cards (Call, Email, WhatsApp, Facebook, LinkedIn, Instagram).

## 3) Mobile and responsive testing (Chrome)

1. Open DevTools.
2. Toggle device toolbar.
3. Test these widths:
- 320
- 375
- 768
- 1024
- 1280+
4. Validate:
- No horizontal overflow
- Header/menu usability
- Readable font sizes
- Buttons easy to tap

## 4) Accessibility quick checks

1. Press Tab repeatedly from top:
- Skip link appears
- Focus ring visible
- Menu and form fields accessible
2. On Gallery page, open image and press Escape to close modal.
3. Confirm all images have meaningful alt text.

## 5) SEO and metadata checks

Per page, verify:
- title
- meta description
- canonical URL
- Open Graph title and description

Files to inspect:
- index.html
- about/index.html
- gallery/index.html
- contact-us/index.html
- products/index.html
- sitemap.xml
- robots.txt

## 6) Contact flow testing

The contact page is intentionally form-free based on client requirement.

Test:
1. Click Call and confirm phone app intent opens.
2. Click Email and confirm mail client opens.
3. Click WhatsApp and confirm chat link opens.
4. Click Facebook, LinkedIn, and Instagram cards and verify links.

## 7) Performance check (Lighthouse)

1. Open page in Chrome.
2. DevTools > Lighthouse.
3. Run for:
- Mobile
- Desktop
4. Target:
- Performance >= 90
- Accessibility >= 90
- Best Practices >= 90
- SEO >= 90

If score is low, first optimize large images.

## 8) CloudDexter deployment checklist

1. Upload to staging folder first.
2. Open all routes in staging.
3. Test all contact links on production.
4. Backup current live site.
5. Move new site to document root.
6. Verify SSL and redirect behavior from .htaccess.
7. Keep rollback copy for safety.

## 9) Common beginner mistakes to avoid

1. Opening HTML directly instead of running local server.
2. Forgetting to rebuild Tailwind CSS after class changes.
3. Using very large images without compression.
4. Editing route names without updating nav links.
5. Deploying to live without staging validation.

## 10) Daily dev command cheatsheet

Start local server:
```bash
python3 -m http.server 5500
```

Build production CSS:
```bash
tools/tailwindcss -i ./tailwind.input.css -o ./assets/css/tailwind.css --minify
```

Stop server:
- Press Ctrl + C in terminal.

Open project folder:
```bash
cd /Users/devikrishna/Desktop/Projects/Terapaxx_website
```

---

Use this checklist each time before deployment. It prevents most production issues in static websites.
