# omitz.io

The public homepage for Omitz, LLC. Plain HTML and CSS, no build step.

- `index.html` is the page content
- `nfpa-2.html`, `nfpa-855.html`, `ai-ethics.html` are the course pages (linked from the Training menu); `training.html` redirects old links to them
- `about.html` is Phil's full biography
- `doe-voucher.html` promotes DOE Voucher Opportunity 3 (Round 3, due Dec 16, 2026); the homepage banner linking to it hides itself after the deadline via `data-until`, but remove both once the round closes
- `privacy.html` is the privacy notice
- `site.js` runs the Training dropdown and footer year
- `sitemap.xml` and `robots.txt` are for search engines; add new pages to the sitemap
- Raleway is self-hosted in `assets/fonts/` (SIL Open Font License) so the site makes no third-party requests
- `style.css` is the styling
- `CNAME` tells GitHub Pages to serve the site at omitz.io

The AI ethics training app lives separately at training.omitz.io (repo `iamtall21/omitzethics`).

## Editing

Open `index.html`, change the text, commit. To preview locally, open the file in a browser.
