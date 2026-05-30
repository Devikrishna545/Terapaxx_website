# Terrapaxx Website — CloudDexter Deployment Guide

---

## PHASE 1 — Final Local Check (Do This First)

Before uploading anything, run these quick checks on your Mac:

**1. Start your local server and open every page once:**
```bash
cd /Users/devikrishna/Desktop/Projects/Terapaxx_website
python3 -m http.server 5500
```
Open and visually check in your browser:
- http://localhost:5500/
- http://localhost:5500/about/
- http://localhost:5500/gallery/
- http://localhost:5500/products/
- http://localhost:5500/contact-us/

**2. Rebuild Tailwind CSS one last time** (ensures the latest styles are compiled):
```bash
tools/tailwindcss -i ./tailwind.input.css -o ./assets/css/tailwind.css --minify
```

**3. Check what you'll upload** — these are the only folders and files that go to CloudDexter.

| Upload ✅ | Skip 🚫 |
|---|---|
| `index.html` | `.DS_Store` |
| `about/` | `.git/` |
| `contact-us/` | `tools/` |
| `gallery/` | `learning.md` |
| `products/` | `instructions.md` |
| `home/` | `plan.md` |
| `assets/` | `requirements.md` |
| `.htaccess` | `tailwind.input.css` |
| `robots.txt` | `README.md` |
| `sitemap.xml` | `deployment.md` |

---

## PHASE 2 — Understanding Your Setup (Read This First)

> **Important:** This project uses two separate services:
> - **BigRock** — Domain registrar only. You registered `terrapaxx.com` here. DNS is managed here. You do NOT upload website files here.
> - **CloudDexter** — Web hosting. This is where your website files go. cPanel is here.

## PHASE 2 — Log Into CloudDexter (Your Hosting)

1. Open your browser and go to your **CloudDexter client portal** — check your welcome email for the exact link
2. Log in with your CloudDexter email and password
3. Click on your hosting account → click **cPanel** or **Control Panel**
4. You are now in cPanel — this is where you manage your website files

---

## PHASE 3 — Upload to a STAGING Folder First

This is the safe approach. You test on staging before going live.

### Step 1: Create a staging folder
1. In cPanel, find and click **File Manager**
2. Navigate into `public_html` (this is your website root)
3. Click **New Folder** at the top
4. Name it exactly: `staging`
5. You now have `public_html/staging/`

### Step 2: Upload your files into staging

> **Use the Compress + Upload method (recommended for beginners):**
> - On your Mac, open Finder → go to your project folder
> - Select these items together: `index.html`, `about`, `contact-us`, `gallery`, `products`, `home`, `assets`, `.htaccess`, `robots.txt`, `sitemap.xml`
> - Right-click → **Compress** → it creates a `.zip` file on your Desktop
> - In cPanel File Manager (inside `staging` folder) → click **Upload** → upload that zip file
> - After upload completes, click **Back** to return to the file list
> - Select the zip file → click **Extract** in the toolbar
> - When prompted, make sure it extracts into `public_html/staging/` → click **Extract Files**
> - Once done, you can delete the zip file (select it → click Delete)

### Step 3: Verify staging is accessible

Your staging site will be at:
```
https://www.yourdomain.com/staging/
```
Open each page in your browser:
```
https://www.yourdomain.com/staging/
https://www.yourdomain.com/staging/about/
https://www.yourdomain.com/staging/gallery/
https://www.yourdomain.com/staging/products/
https://www.yourdomain.com/staging/contact-us/
```

> ⚠️ Note: On staging, internal links like `/about/` point to the real domain root, not the staging folder — this is expected and normal. What you're checking here is that images load, styles look correct, and no files are missing.

---

## PHASE 4 — Back Up the Current Live Site

Before overwriting anything live, make a backup:

1. In cPanel File Manager, go into `public_html`
2. Select **all existing files/folders** (if there's an old site)
3. Click **Compress** → name it `backup-before-terrapaxx-YYYYMMDD.zip` → create it
4. Download that zip to your Mac as a safety copy
5. Keep it — this is your rollback

> If `public_html` is currently empty, skip this step.

---

## PHASE 5 — Go Live (Move to Document Root)

Once you are happy with staging, it's time to go live.

**Option A — Move files from staging to root (safest)**
1. In cPanel File Manager, go into `public_html/staging/`
2. Select all files and folders inside it (Ctrl+A or Select All)
3. Click **Move** in the toolbar
4. In the destination field, type: `/public_html/`
5. Click **Move Files**

**Option B — Upload directly to `public_html/`** (faster if public_html is empty)
1. Follow the same compress + upload steps from Phase 3
2. But this time upload directly into `public_html/` instead of `staging/`

---

## PHASE 6 — Enable HTTPS & Verify .htaccess

Your `.htaccess` already has HTTPS redirect built in. You just need SSL to be active first.

### Step 1: Activate SSL (Free Let's Encrypt on CloudDexter)
1. In cPanel, find **SSL/TLS** or **Let's Encrypt SSL**
2. Click **Install** or **Issue Certificate** for your domain (`www.terrapaxx.com` and `terrapaxx.com`)
3. Wait 2–5 minutes for it to activate

> If your domain isn't resolving yet, it means BigRock DNS nameservers haven't been pointed to CloudDexter yet — see the DNS note below.

### Step 2: Test HTTPS
1. Open `http://www.terrapaxx.com` in your browser
2. It should automatically redirect to `https://www.terrapaxx.com`
3. You'll see a padlock icon in the address bar ✅

> The `.htaccess` file in your project handles this redirect automatically once SSL is active.

---

## PHASE 7 — Post-Launch QA Checklist

Go through these one by one after going live:

- [ ] Home page loads at `https://www.terrapaxx.com`
- [ ] All 9 pages open without errors
- [ ] Logo and all images load (no broken images)
- [ ] Brand logo marquee scrolls correctly
- [ ] Floating WhatsApp / Call button works
- [ ] Mobile menu opens and closes cleanly (test on your phone)
- [ ] WhatsApp link opens in WhatsApp
- [ ] Call link triggers phone dial on mobile
- [ ] Footer shows copyright and DeviTechz credit
- [ ] HTTPS padlock is visible

---

## PHASE 8 — Keep a Rollback Copy

1. Leave the `staging` folder in `public_html` for now — it is your instant rollback
2. Only delete it after 1–2 weeks of stable operation
3. Keep the backup zip file on your Mac permanently

---

## DNS Note — Connecting BigRock Domain to CloudDexter Hosting

Since your domain is on BigRock and hosting is on CloudDexter, you need to point the BigRock nameservers to CloudDexter once:

1. Log in to **BigRock** → Orders → terrapaxx.com → **Name Servers**
2. Get your CloudDexter nameservers from your CloudDexter welcome email (they look like `ns1.clouddexter.com`, `ns2.clouddexter.com`)
3. Replace the existing BigRock nameservers with the CloudDexter ones
4. Click **Save** — DNS propagation takes 1–24 hours
5. After propagation, `terrapaxx.com` will load from CloudDexter

> Do this step before trying to activate SSL or test the live URL.

---

## Quick Reference — CloudDexter cPanel Sections

| Task | cPanel Section |
|---|---|
| Upload files | File Manager |
| Create folders | File Manager → New Folder |
| Extract zip | File Manager → Extract |
| Enable SSL | SSL/TLS or Let's Encrypt |
| Check disk space | Disk Usage |
| Domain settings | Domains or Zone Editor |

---

> **If anything looks wrong after going live**, just move all files from your backup zip back into `public_html/` via the same upload + extract method and your old site is restored instantly.
