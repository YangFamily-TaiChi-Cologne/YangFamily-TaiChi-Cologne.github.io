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

### Step 1 — List claude issues

```bash
gh issue list \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --label claude \
  --state open
```

If there are no open issues, report that and stop.

### Step 2 — Read each issue

For each issue <N>:

```bash
gh issue view <N> \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --comments
```

- Read the title, body, and **all comments** carefully.
- Then read last comment as instructions, and work on it.

### Step 3 — Implement the fix

- Make the necessary changes to local source files.
- Then verify with a build: `bun run build`

### Step 4 — Commit with jj

- Ensure the build completes with no errors before committing.

```bash
jj describe -m "<short description> (closes #<N>)

<optional longer description of what was done>"
```
Then advance the main bookmark and push:

```bash
jj bookmark set main -r @
jj git push
```


### Step 5 — Add a comment with your action, remove tag "claude"

- do not close issue
```bash
gh issue comment <N> \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --body "<summary of actions>"

gh issue edit <N> \
  --repo YangFamily-TaiChi-Cologne/YangFamily-TaiChi-Cologne.github.io \
  --remove-label "claude"
```

### Step 6 — Notify on Discord

If the issue was raised via Discord (or Frank asked you to work issues via Discord), reply with a summary of what was fixed.

---

## Rules

- **Read all comments** before starting — the fix may have been clarified or changed in comments
- **Never skip the build check** — broken builds break the live site
- **Always close via `gh issue close`** — commit messages alone don't close issues here
- **One commit per issue** — keep the history clean
- **Ask Frank** if the issue is ambiguous and can't be resolved without more context — add a comment to the issue and leave it open
