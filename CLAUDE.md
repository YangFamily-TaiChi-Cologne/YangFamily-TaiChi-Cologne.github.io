# Project: Yang Family Tai Chi Cologne Website

This is a GitHub Pages website for a local Tai Chi club in Cologne, built with Tailwind CSS and Eleventy (11ty).

## Environment

- Running on a Mac Mini M4 (hostname: wien), user directory `/Users/fbb`
- Local files are accessible; jsnd (Discord user) does not have direct file access

## Workflow for Discord requests (from jsnd)

jsnd will send requests via Discord. When a message arrives from him:

1. **Fulfill the request** — make the necessary changes to the local files
2. **Commit and push to `main`** — commit the changes and push to GitHub
3. **GitHub Actions** will automatically build the Eleventy site and deploy it to GitHub Pages
4. **Notify jsnd via Discord** — ping him when the deployment is triggered (push done), or immediately if you have questions or the request cannot be completed

If a request is unclear or cannot be completed, reply on Discord asking for clarification before making any changes.
