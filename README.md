# omitz.io

The public homepage for Omitz, LLC. Plain HTML and CSS, no build step.

- `index.html` is the page content
- `nfpa-2.html`, `nfpa-855.html`, `ai-ethics.html` are the course pages (linked from the Training menu); `training.html` redirects old links to them
- `about.html` is Phil's full biography
- `doe-voucher.html` walks people through requesting VO3-3 (Omitz) in DOE Voucher Opportunity 3 (Round 3, due Dec 16, 2026): the walkthrough GIF in `assets/video/` (with a pause button and an MP4 with sound), five quick steps, and copyable example answers. The homepage and the NFPA 2 and NFPA 855 pages carry voucher callouts (`.voucher-callout`, `.vc-pill`, `.vc-price-note`) marked `data-until`, so they hide themselves after the deadline; remove them and the page once the round closes
- `privacy.html` is the privacy notice
- `site.js` runs the Training dropdown and footer year, and loads the LinkedIn Insight Tag once `LINKEDIN_PARTNER_ID` is filled in (skipped when the browser sends Global Privacy Control; described on the privacy page)
- `sitemap.xml` and `robots.txt` are for search engines; add new pages to the sitemap
- Raleway is self-hosted in `assets/fonts/` (SIL Open Font License); the only third-party request is the LinkedIn Insight Tag
- `style.css` is the styling. After changing `style.css` or `site.js`, bump the `?v=` date on their links in every page so browsers fetch the new file instead of a cached copy
- `CNAME` tells GitHub Pages to serve the site at omitz.io

The AI ethics training app lives separately at training.omitz.io (repo `iamtall21/omitzethics`).

## Editing

Open `index.html`, change the text, commit. To preview locally, open the file in a browser.
