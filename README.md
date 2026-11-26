# RL / Cyberspace — starter site

A lightweight static cybersecurity portfolio and learning journal. Existing pages use plain HTML, CSS, and JavaScript; Eleventy adds reusable layouts and renders approved Markdown notes into the same visual design. No tracking is used. Replace the sample identity and content before publishing.

## Preview

Run `npm ci` after cloning, then `npm run start` to preview the site locally. Run `npm run build` to clear and regenerate `_site/`. Existing portfolio pages work without JavaScript; the script only enhances navigation and the current year.

## Add it to your repository

1. Copy the contents of this folder into the root of your existing Pages repository. Keep any existing content you need and reconcile files with matching names.
2. Edit `assets/js/site.js` and the page content. Search for `TODO` and replace every placeholder, especially the sample name, social links, and contact address.
3. Use the checklist in `docs/SETUP.md` to review links, privacy, accessibility, and publishing choices.
4. In repository **Settings → Pages**, set the source to **GitHub Actions**. The workflow builds and deploys `_site/` on pushes to `master`.
5. To add a Markdown page, copy a starter from `templates/`, choose the matching layout, and set `publish: true` after review. See `docs/OBSIDIAN-PUBLISHING.md` for the selective publishing workflow.

## Pages

- `index.html` — personal landing page, current focus, and featured work
- `about.html` — background and professional direction
- `journal/` — personal and technical posts
- `explore/` — projects, lab notes, and research
- `knowledge/` — knowledge section and publishing guidance
- `career.html` — skills, education, certifications, and milestones
- `contact.html` — professional contact and profile links

## Design and implementation

The visual system uses void black and midnight purple, with restrained pink, violet, and cyan accents. System fonts keep the site fast and offline-friendly. The layout adapts to mobile, supports keyboard navigation, respects reduced-motion preferences, and uses semantic HTML. No third-party fonts, trackers, or runtime services are required.

## Safety

Only publish material you have reviewed and are allowed to share. Never put credentials, private IPs, personal data, unredacted logs, exploit instructions targeting real systems, or confidential employer/client details in public notes. The Obsidian workflow is documented in `docs/OBSIDIAN-PUBLISHING.md`; private vault notes are never copied automatically by this starter.

See `LICENSE` for reuse terms and `docs/` for setup and publishing guidance.
