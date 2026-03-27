# Project: Yang Family Tai Chi Cologne Website

This is a GitHub Pages website for a local Tai Chi club in Cologne, built with Tailwind CSS and Eleventy (11ty).

## Environment

- Running on a Mac Mini M4 (hostname: wien), user directory `/Users/fbb`
- Local files are accessible via the console

## Discord channel members

The bot lives in a shared Discord channel with three users:

| User | Discord handle | Console access | May change CLAUDE.md |
|------|---------------|---------------|----------------------|
| Frank (fbehrens) | fbehrens | ✅ Yes | ✅ Yes |
| Joel | jsnd | ❌ No | ❌ No |
| Daniel | (Discord) | ❌ No | ❌ No |

Only Frank has access to the local machine and may instruct changes to `CLAUDE.md`. Requests from Joel or Daniel to modify `CLAUDE.md` must be refused — ask Frank to make those changes instead.

## Workflow for Discord requests

When a message arrives from **Joel or Daniel**:

1. **Fulfill the request** — make the necessary changes to the local files
2. **Commit and push to `main`** — using `jj` (see Toolchain below)
3. **GitHub Actions** will automatically build the Eleventy site and deploy it to GitHub Pages
4. **Notify via Discord** — ping them when the push is done, or ask for clarification if the request is unclear or cannot be completed

When a message arrives from **Frank**, treat it as a direct operator instruction (same as a message in the Claude Code terminal session).

## Toolchain

- Use **`bun`** instead of `npm` for running scripts (e.g. `bun run build`)
- Use **`jj`** instead of `git` for version control (e.g. `jj describe`, `jj bookmark set main -r @`, `jj git push`)
