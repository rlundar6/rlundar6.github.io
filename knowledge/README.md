# Knowledge Base

This directory is the knowledge section of the site. It is not a copy of your Obsidian vault. You can organize reviewed Markdown under any folder in the nested site repo; only notes with `publish: true` are rendered by Eleventy. Keep private vault files elsewhere.

## Add reviewed notes

Create Markdown files in the folder structure you want visitors to browse, for example `Research/Writings/`. Add frontmatter with `publish: true` and a matching layout from `templates/`, then run `npm run build`. Pages are rendered with the site design into `_site/`.

Suggested public content organization:

```text
Research/
  Writings/
    index.md
    concepts/
    walkthroughs/
    references/
```

Use the `layouts/listing.njk` layout for an index that should display published notes. Standard Markdown links can point to generated note URLs, for example `[Network research](/Research/Writings/network-research/)`.
