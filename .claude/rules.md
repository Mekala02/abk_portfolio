# Portfolio Construction Rules

## Core Principles

1. **Radical Simplicity** - Minimal code, maximum clarity
2. **Data-Driven** - Content in `js/content.js`, not HTML
3. **Fully Responsive** - 320px to 8K (7680px)
4. **Zero Dependencies** - No frameworks, no build tools
5. **DRY Code** - No duplicate code, use functions and variables for reuse
6. **No Emojis** - Clean, professional code without emojis

---

## Architecture Requirements

**Single-page scroll:**
- One HTML file (~200 lines max)
- Sections: Hero, About, Experience, Projects, Publications, Skills, Contact
- Anchor navigation only
- No blog, no gallery, no animations, no SPA routing

---

## Code Rules

### HTML
- No inline styles or onclick handlers
- No hardcoded content (use JS rendering)
- No duplicate markup
- Semantic HTML5 only

### CSS
- CSS variables for all colors/spacing (no duplicate values)
- `clamp()` for responsive sizing
- Grid `auto-fit` and `minmax()` for layouts
- No animations, transitions, or magic numbers
- No duplicate selectors or rules
- Max 400 lines

### JavaScript
- Only renders `content.js` data into DOM
- Template functions for reusable HTML
- No page routing, animations, or mobile menu JS
- No duplicate logic or hardcoded values
- Max 100 lines

---

## Responsive Requirements

- Use intrinsic CSS (minimal media queries)
- Responsive from 320px to 8K (7680px)
- Test at: 320px, 768px, 1024px, 1920px, 3840px (4K), 7680px (8K)
- Mobile-first or fluid approach with `clamp()`
- Max-width constraint to prevent excessive line lengths on ultra-wide displays

---

## Forbidden

- Blog or gallery features
- SPA routing or page switching
- Build process or compilation
- External dependencies
- Inline styles or onclick handlers
- Duplicate code anywhere
- Emojis in code, comments, or content
- Magic numbers (use CSS variables)

---

## File Limits

- `index.html`: 200 lines max
- `css/styles.css`: 400 lines max
- `js/main.js`: 100 lines max
- `js/content.js`: unlimited (content only)
