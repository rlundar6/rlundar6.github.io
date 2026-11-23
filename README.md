# RL / Cyberspace — starter site

A lightweight static cybersecurity portfolio and learning journal. It uses plain HTML, CSS, and JavaScript: no paid services, package install, build step, or tracking. Replace the sample identity and content before publishing.

## Preview

Open `index.html` in a browser, or run a local static server from this directory (for example `python3 -m http.server 8000`) and visit `http://localhost:8000`. All portfolio pages work without JavaScript; the script only enhances navigation and the current year.

## Add it to your repository

1. Copy the contents of this folder into the root of your existing Pages repository. Keep any existing content you need and reconcile files with matching names.
2. Edit `assets/js/site.js` and the page content. Search for `TODO` and replace every placeholder, especially the sample name, social links, and contact address.
3. Use the checklist in `docs/SETUP.md` to review links, privacy, accessibility, and publishing choices.
4. Add `.github/workflows/pages.yml` to your repository and select **GitHub Actions** as the Pages build source in repository settings. The workflow publishes the repository root as a static site.
5. If enabling the Quartz knowledge base, see `knowledge/README.md` and `docs/OBSIDIAN-PUBLISHING.md` first. The workflow has an optional Quartz build section ready to enable after configuring `knowledge/quartz/`.

## Pages

- `index.html` — personal landing page, current focus, and featured work
- `about.html` — background and professional direction
- `journal/` — personal and technical posts
- `explore/` — projects, lab notes, and research
- `knowledge/` — Quartz integration instructions and content staging area
- `career.html` — skills, education, certifications, and milestones
- `contact.html` — professional contact and profile links

## Design and implementation

The visual system uses void black and midnight purple, with restrained pink, violet, and cyan accents. System fonts keep the site fast and offline-friendly. The layout adapts to mobile, supports keyboard navigation, respects reduced-motion preferences, and uses semantic HTML. No third-party fonts, trackers, or runtime services are required.

## Safety

Only publish material you have reviewed and are allowed to share. Never put credentials, private IPs, personal data, unredacted logs, exploit instructions targeting real systems, or confidential employer/client details in public notes. The Obsidian workflow is documented in `docs/OBSIDIAN-PUBLISHING.md`; private vault notes are never copied automatically by this starter.

See `LICENSE` for reuse terms and `docs/` for setup and publishing guidance.
