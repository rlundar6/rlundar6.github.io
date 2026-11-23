# Knowledge Base (Quartz)

This directory is a safe publishing boundary and integration guide, not a copy of your Obsidian vault. Put only reviewed public Markdown in `publish/`. Keep private vault files elsewhere.

## Add Quartz when ready

Quartz is a free, open-source static site generator. Create/configure a Quartz project under `knowledge/quartz/` following the current official Quartz setup instructions. Point its content directory at the reviewed `knowledge/publish/` folder, set the base URL to your GitHub Pages domain/path, and build into `knowledge/public/` (or another output folder). Test links locally.

To include the knowledge base in the same Pages deployment, update `.github/workflows/pages.yml`: build the main site into a temporary `dist/` directory, build Quartz into `dist/knowledge/`, then upload `dist/`. The starter workflow currently publishes only the root portfolio; its commented steps are a reminder, not an active Quartz build. Review current Quartz documentation before enabling its commands because setup details can change.

Suggested public content organization:

```text
publish/
  index.md
  concepts/
  walkthroughs/
  references/
  tags/
```

Keep knowledge-base navigation visually related to the portfolio; Quartz has its own theme and configuration. Apply the same dark palette and pink, purple, cyan accents through Quartz's supported custom CSS after setup.
