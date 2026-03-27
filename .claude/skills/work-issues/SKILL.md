---
name: work-issues
version: 1.0.0
description: Work through open GitHub issues assigned to this bot (mmaier589). Reads each issue and its comments, solves or responds, commits with `closes #N`, pushes via jj, and closes via gh CLI. Also notifies via Discord when relevant.
---

# Work Issues

You are working through GitHub issues assigned to you on this project.

## Setup

- **Repo:** `YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io`
- **Your GitHub account:** `mmaier589`
- **Toolchain:** `bun` (not npm), `jj` (not git)
- **Discord:** notify in the channel where the request came from when done

---

## Workflow

### Step 1 — List assigned issues

```bash
gh issue list \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --assignee mmaier589 \
  --state open
```

If there are no open issues, report that and stop.

### Step 2 — Read each issue

For each issue:

```bash
gh issue view <N> \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --comments
```

Read the title, body, and **all comments** carefully before deciding on action.

### Step 3 — Decide: solve or close with comment

**Solve it** if the issue describes a concrete, actionable code change.

**Close with a comment** if:
- It's already done (verify first)
- It's out of scope or not actionable
- It needs more information from Frank — add a question as a comment and leave open

### Step 4 — Implement the fix

Make the necessary changes to local source files. Then verify with a build:

```bash
bunx @11ty/eleventy
```

Ensure the build completes with no errors before committing.

### Step 5 — Commit with jj

```bash
jj describe -m "<short description> (closes #<N>)

<optional longer description of what was done>"
```

Always include `closes #<N>` in the commit message.

Then advance the main bookmark and push:

```bash
jj bookmark set main -r @
jj git push
```

### Step 6 — Close the issue via gh CLI

GitHub Pages repos do not auto-close issues from commit messages. Always close explicitly:

```bash
gh issue close <N> \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --comment "<brief explanation of what was done>"
```

### Step 7 — Notify on Discord

If the issue was raised via Discord (or Frank asked you to work issues via Discord), reply with a summary of what was fixed.

---

## Rules

- **Read all comments** before starting — the fix may have been clarified or changed in comments
- **Never skip the build check** — broken builds break the live site
- **Always close via `gh issue close`** — commit messages alone don't close issues here
- **One commit per issue** — keep the history clean
- **Ask Frank** if the issue is ambiguous and can't be resolved without more context — add a comment to the issue and leave it open
