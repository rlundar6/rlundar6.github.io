# Obsidian selective publishing

Keep the private vault as the working source of truth. The nested `12-Cyber-Portfolio/` repo is public; copy only reviewed notes there, in the folder structure you want on the site (for example `Research/Writings/`). This project does not sync, export, or copy the vault automatically. Eleventy builds only Markdown files explicitly marked `publish: true`; all other notes remain excluded.

## Suggested vault structure

```text
Cyber-Vault/
  00-Inbox/                 # private capture by default
  10-Learning/              # private drafts and notes
  20-Lab/                   # private lab records
  30-Research/              # private paper notes
  40-Publication-Drafts/    # candidates for review
  90-Private/               # never publish
  attachments/              # private unless individually reviewed
```

Use frontmatter to track workflow:

```yaml
---
title: Example concept note
date: 2026-11-23
type: knowledge
status: draft # draft | review | published
publish: false
tags: [fundamentals]
---
```

## Release steps

1. Draft privately; default `publish: false`.
2. Copy a candidate into the nested site repo only after checking ownership, licenses, sensitive details, and technical accuracy.
3. Set `status: published` and `publish: true` only in the reviewed public copy. Add a layout such as `layout: layouts/research-note.njk` so the page uses the matching site template.
4. Remove credentials, tokens, real hostnames/IPs, personal data, metadata, private paths, and identifying log fragments. Sanitize screenshots and attachments too.
5. Check links and images, then inspect the exact staged files with a clean diff before committing.
6. Run `npm run build` to clear and render reviewed Markdown into `_site/`. Push to `master` to trigger the Pages workflow, then recheck the public site.

Never point a publishing command at the whole vault. Only the nested site repo is built; keep private originals outside it and do not add them to its Git history. Deleting a secret from the latest files does not erase it from previous commits; rotate exposed credentials and clean history if that happens.

## Lab and research notes

Document the scope and authorization for each lab. Use intentionally vulnerable local environments or platforms where you have permission. Redact target identifiers, credentials, and logs. For research, record citations and licensing, separate evidence from inference, and avoid presenting unverified claims as findings.
