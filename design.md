# Design System: Silence in Motion

## 1. Overview & Creative North Star

### Creative North Star: "The Academic Curator"

This design system is not merely a website; it is a digital scroll. It embodies the concept of "Silence in Motion"—the core of Yang Family Tai Chi. It moves away from the chaotic, "noisy" layouts of traditional martial arts sites toward an experience that feels **minimalist, premium, and academic.**

To break the "template" look, we utilize **Intentional Asymmetry**. Large-scale typography is often offset, allowing white space to act as a structural element rather than a void. We embrace high-contrast, authentic photography that bleeds off the edges, suggesting a world that exists beyond the frame. This is a system of breathing room, where the silence (white space) is as important as the motion (content).

---

## 2. Colors

The palette is rooted in tradition but executed with contemporary precision.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `surface` | `#FAFAFA` | Primary page canvas. |
| **Primary** | `primary` | `#C41E3A` | Imperial Red. Used for critical intent and CTAs. |
| **Text/Structure** | `on-surface` | `#2D2D2D` | Charcoal. Authority and legibility. |
| **Muted Structure** | `secondary` | `#5F5E5E` | Supporting text and secondary icons. |
| **Tonal Depth** | `surface-container-low` | `#F3F3F3` | Subtle section differentiation. |

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through background color shifts. For example, a card using `surface-container-lowest` (#FFFFFF) should sit on a section using `surface` (#FAFAFA). This mimics the stacking of fine paper rather than a digital wireframe.

### Signature Textures & Glass

To provide a "signature" feel, main CTAs should utilize a subtle gradient from `primary` (#9E0027) to `primary-container` (#C41E3A). For floating navigation or overlays, implement **Glassmorphism**: use `surface` at 80% opacity with a `20px` backdrop-blur. This softens the interface and maintains the "Silence in Motion" philosophy.

---

## 3. Typography

The typographic hierarchy establishes the "Academic" tone, balancing the heritage of Playfair Display with the modern clarity of Montserrat.

* **Display & Headline (Newsreader/Playfair Display):** These represent the "Tradition." Use `display-lg` (3.5rem) for hero statements with tight tracking and intentional line-height (1.1) to create an editorial feel.
* **Body & Labels (Manrope/Montserrat):** These represent the "Modern Application." Body text should be set at `body-lg` (1rem) with generous leading to ensure academic readability.
* **Signature Offsets:** Headlines should rarely be perfectly centered with body text. Offset headlines to the left or right to create a sophisticated, non-traditional visual flow.

---

## 4. Elevation & Depth

We reject drop shadows in favor of **Tonal Layering**.

* **The Layering Principle:** Depth is achieved by "stacking" surface tiers.
* *Base Level:* `surface` (#F9F9F9)
* *Intermediate Level:* `surface-container-low` (#F3F3F3)
* *Active Component Level:* `surface-container-lowest` (#FFFFFF)
* **Ambient Shadows:** If a "floating" effect is required (e.g., a modal), use a shadow with a `40px` blur at 4% opacity, tinted with the `on-surface` color.
* **The "Ghost Border" Fallback:** For accessibility in form fields, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons (The "Seal" Style)

* **Primary:** Imperial Red gradient. Square corners (`0px` roundedness). Vertical padding `spacing-4`, horizontal `spacing-8`.
* **Tertiary:** `on-surface` text with a 1px "Ghost Border" (15% opacity). Underline only on hover.

### Cards & Lists

* **Cards:** No borders. Use `surface-container-lowest` for the card background against a `surface` page background.
* **Separation:** Forbid the use of divider lines. Separate list items using `spacing-6` (2rem) of vertical white space or a subtle shift to `surface-container-low`.

### Imagery (The "Stance" Component)

* Visuals must be high-contrast. Use grayscale imagery for historical contexts and full-color, high-saturation imagery for "Action" contexts. All images must be framed with `0px` radius to maintain a brutalist, premium edge.

### Specialized Component: The "Heritage Badge"

* A container used to house the Cologne school and IYFTCCA logos. It should use the Glassmorphism rule (frosted background) to float over high-contrast imagery, ensuring the logos remain legible without cluttering the "Silence."

---

## 6. Do's and Don'ts

### Do:

* **DO** use whitespace as a functional tool to separate ideas.
* **DO** use "Imperial Red" sparingly—it is a punctuation mark, not a background.
* **DO** align text to an asymmetrical grid to create a sophisticated editorial rhythm.
* **DO** ensure all interactive elements have a clear `surface-variant` hover state.

### Don't:

* **DON'T** use rounded corners (`0px` is the strict standard). Roundedness diminishes the "Academic" authority of the brand.
* **DON'T** use "Grey on White" divider lines. They create visual noise.
* **DON'T** use generic stock photography. Imagery must feel authentic, focused on the specific "Motion" of the Yang Family style.
* **DON'T** crowd the logo. The logo represents the "Lineage" and must be surrounded by significant `spacing-12` or higher.
