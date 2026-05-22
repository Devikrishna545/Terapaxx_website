# Terapaxx Website

Static multi-page website for Terrapaxx India Marketing LLP.

## Tech Stack
- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript

## Project Structure
- `/` Home page
- `/about/` About page
- `/gallery/` Gallery page
- `/contact-us/` Contact page
- `/products/` Products page
- `/home/` Redirect helper route

Main files and folders:
- `index.html`
- `about/index.html`
- `gallery/index.html`
- `contact-us/index.html`
- `products/index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/js/gallery.js`
- `robots.txt`
- `sitemap.xml`

## Local Development
Run a local static server from project root:

```bash
python3 -m http.server 5500
```

Open in browser:
- http://localhost:5500/
- http://localhost:5500/about/
- http://localhost:5500/gallery/
- http://localhost:5500/contact-us/
- http://localhost:5500/products/

## Deployment Notes
- Upload to staging first.
- Validate routes, navigation, gallery lightbox, and contact flow.
- Keep a backup before production cutover.
- Ensure HTTPS and redirects are active.

## Git Workflow
```bash
git status
git add .
git commit -m "Update website files"
git push
```
