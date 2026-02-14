## Project Overview

* Designing a new website for our taichi club described in @prompt.md
* use playwright-cli skill, server is serving HTTP on :: port 8000 (http://[::]:8000/) ..
* `/current` Static website for Yang Family - Tai Chi Dao Köln e.V., a Tai Chi school in Cologne, Germany.
* `/v1` First rough version created by claude

## Architecture

**Pure static HTML/CSS site** - no build system, JavaScript, or frameworks.

### CSS Strategy

- Each page has **two CSS files**: desktop (`Tai-Chi-*.css`) and mobile (`Tai-Chi-*-mobil.css`)
* Responsive breakpoint at `50em` using media queries in `<link>` tags
* Layout uses CSS Grid with named grid areas

### Pages

- `index.html` - Home (uses `Tai-Chi.css`)
* `kurse.html` - Courses (uses `Tai-Chi-Kurse.css`)
* `ueber-uns.html` - About us (uses `Tai-Chi-ueberuns.css`)
* `kontakt.html` - Contact (uses `Tai-Chi-kontakt.css`)
* `aktuelles.html` - News (uses `Tai-Chi-aktuelles.css`)
* `impressum.html` - Legal notice (reuses `Tai-Chi-aktuelles.css`)

### Assets

- `Bilder/` - Photos and logo
* `images/` - Favicon

## Development

No build step required. Open HTML files directly in a browser or use any static file server:

```bash
python3 -m http.server 8000
```

## Deployment

Hosted on GitHub Pages. Push to `main` branch to deploy.
