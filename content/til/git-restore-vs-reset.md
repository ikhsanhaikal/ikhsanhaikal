---
title: "git restore beats git reset"
date: 2026-06-18
tags: ["git", "workflow", "frontend"]
description: "--staged unstages without touching your working tree. No more accidental --hard disasters."
code_preview: true
---

For months I reached for `reset HEAD` to unstage files. It works — but it's the wrong tool. Git 2.23 added `restore` specifically for index and working-tree operations:

```bash
# unstage — keep working tree changes
git restore --staged file.txt

# discard working tree changes
git restore file.txt

# both at once
git restore --staged --worktree file.txt
```

The key distinction: *reset moves HEAD* — it can rewrite history with `--hard` and blow away your work. *restore* only touches the index or working tree. Much safer for day-to-day use.

Also worth knowing: `git switch` is the equivalent replacement for `checkout` when changing branches.
