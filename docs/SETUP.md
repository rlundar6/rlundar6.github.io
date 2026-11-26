# Setup and customization

## First edits

1. Replace sample identity, bio, links, email, and career details in the HTML pages and `assets/js/site-config.js`.
2. Update the page title and description metadata in each page. Use a public-facing email only if you want it indexed.
3. Replace starter cards with honest work in progress. Label experiments as learning exercises and link to safe, authorized environments only.
4. Add a portrait or project images only if you have rights to publish them. Optimize images and provide useful alt text.
5. Review all pages on a narrow phone-sized window and keyboard-navigate the site.

## GitHub Pages

In repository **Settings → Pages**, set the source to **GitHub Actions**. The committed workflow runs `npm ci`, runs `npm run build` (which clears `_site/` first), and deploys the generated `_site/` directory on pushes to `master`. Generated output is rebuilt cleanly on every run; keep private vault data out of the site repository. This repo is a user site at `username.github.io`, so the shared layouts use root-relative asset and navigation paths.

The workflow pins each GitHub Action to a verified full commit SHA. Review and update those pins deliberately when upgrading actions.

## Content templates

Copy a Markdown template from `templates/` for each new item. The layouts in `_includes/layouts/` cover general pages, journal posts, research notes, lab write-ups, projects, and note listings. Set `publish: true` in a reviewed note and choose its `layout`; Markdown without that flag is excluded. Run `npm run start` for a local preview or `npm run build` to generate `_site/`.
