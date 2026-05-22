## Plan: Terrapaxx Website Modernization

Rebuild the current Terrapaxx site as a fast, elegant static website using HTML5 + Tailwind CSS (CDN) + vanilla JS, preserving all current business information while improving UX, visual quality, mobile responsiveness, SEO, accessibility, and launch reliability. Deploy on the existing live domain/hosting environment with SSL and production-ready form handling.

## Steps
1. Phase 1 - Discovery and Content Freeze (blocks all other phases): inventory all current site content, images, contact details, social links, services, and page structure from existing pages (home, about, gallery, contact); define canonical copy so no business info is lost in migration.
2. Phase 1 - Brand Direction and UI System (depends on 1): define visual direction for a modern solar enterprise look (color tokens, typography, spacing scale, section layout patterns, card styles, CTA hierarchy, motion principles) and finalize a reusable component list.
3. Phase 2 - Static Architecture Setup (depends on 2): scaffold multi-page static structure with shared header/footer/navigation and shared assets folders; integrate Tailwind via CDN for rapid setup and consistent styling.
4. Phase 2 - Core Page Build (depends on 3): implement Home, About, Contact, Gallery, and Products placeholder in mobile-first responsive layout; preserve all existing informational blocks and legal/company/contact details.
5. Phase 2 - Interaction Layer (parallel with 4 where possible): add vanilla JS for mobile navigation, sticky/active nav states, gallery lightbox behavior, section reveal animation, and contact form client-side validation.
6. Phase 3 - Performance and Media Optimization (depends on 4 and 5): convert and compress gallery/hero images (WebP + fallback), add lazy loading, define explicit image dimensions, defer non-critical scripts, and optimize critical CSS delivery.
7. Phase 3 - SEO and Accessibility Hardening (parallel with 6): add metadata, Open Graph, sitemap, robots, semantic landmarks, alt text, keyboard support, focus states, and schema.org organization/local business markup.
8. Phase 4 - QA and Cross-Platform Validation (depends on 6 and 7): run browser/device checks (Chrome, Safari, Edge, Firefox, iOS Safari, Android Chrome), responsive breakpoints, form submission tests, and Lighthouse quality gates.
9. Phase 4 - Deployment and Cutover (depends on 8): deploy to the existing CloudDexter host, publish to the domain document root, enable HTTPS/SSL in hosting panel, configure redirects from old URLs, and verify production form/email flow.
10. Phase 5 - Post-Launch Stabilization (depends on 9): monitor analytics/errors, fix any rendering or content issues, and provide a lightweight maintenance guide for future content/image updates.

## Functional Requirements
1. Multi-page static website with routes for /home equivalent, /about, /gallery, /contact-us, and /products placeholder.
2. Responsive navigation with mobile menu toggle and active-page state.
3. Home page hero with company positioning and clear call to action.
4. Services section showing project management, contracting, solutions, and marketing.
5. About page preserving mission, vision, company story, and service descriptions.
6. Gallery page with project image grid, lazy loading, and lightbox view.
7. Contact page with address, phone, email, social links, and working contact form integration.
8. Contact form posts to Web3Forms endpoint with success and error states.
9. Footer with company details, quick links, and social profiles.
10. All existing business-critical information from the current live site is retained.
11. Redirect behavior preserves old URLs and avoids broken links after cutover.

## Non-Functional Requirements
1. Mobile-first responsive behavior across 320px to large desktop widths.
2. Cross-browser compatibility for current Chrome, Safari, Edge, Firefox and major mobile browsers.
3. Accessibility baseline: semantic landmarks, keyboard navigation, visible focus states, usable contrast, meaningful alt text.
4. Performance baseline: Lighthouse target 90 or above on key pages for Performance, Accessibility, Best Practices, SEO.
5. Core Web Vitals discipline: minimize layout shift, optimize largest contentful paint, keep scripts lightweight.
6. SEO readiness: page titles, meta descriptions, Open Graph tags, canonical-friendly URL structure, sitemap, robots.
7. Maintainable code: consistent naming, reusable layout blocks, centralized JS behaviors.
8. Deployment reliability: reversible cutover with backup and rollback path on CloudDexter.
9. Security basics: HTTPS enforced, no exposed secrets in frontend code.

## Decisions
- Finalized stack: static website using HTML5 + Tailwind CSS (CDN) + vanilla JS.
- Finalized form handling: static form via Web3Forms (no backend, fastest for static-only deployment).
- Finalized platform: static-only deployment on the existing CloudDexter host (no WordPress).
