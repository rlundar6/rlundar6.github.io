# Setup and customization

## First edits

1. Replace sample identity, bio, links, email, and career details in the HTML pages and `assets/js/site-config.js`.
2. Update the page title and description metadata in each page. Use a public-facing email only if you want it indexed.
3. Replace starter cards with honest work in progress. Label experiments as learning exercises and link to safe, authorized environments only.
4. Add a portrait or project images only if you have rights to publish them. Optimize images and provide useful alt text.
5. Review all pages on a narrow phone-sized window and keyboard-navigate the site.

## GitHub Pages

Copy this starter into the root of your existing repository. Commit `.github/workflows/pages.yml`, then in repository **Settings → Pages**, set the source to **GitHub Actions**. The workflow publishes the checked-out root. Keep generated output and private vault data out of that root. For a project site at `username.github.io/repository/`, verify relative links after deployment; for a user site at `username.github.io`, root-relative links also work.

The workflow pins major action versions for readability. For stricter supply-chain controls, pin each action to a reviewed full commit SHA and update those pins deliberately.

## Content templates

Copy a Markdown template from `templates/` for each new item. The current HTML pages are intentionally simple starter examples; add posts as static HTML or adopt a Markdown-to-HTML tool later. The site requires no build system today.
