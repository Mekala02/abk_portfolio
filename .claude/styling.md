# Portfolio Design Philosophy

Purpose-first navigation. Engineering seriousness. Matthäuspassion in discipline, not obscurity.

---

## Core Principle

I design systems where correctness matters more than appearance.

The goal is clarity and restraint, not theatrical abstraction.

---

## Navigation: Functional, Not Trendy

Use standard mental models, stripped to their essence.

**Structure:**
```
Work   Writing   Research   About
```

**Why:**
- Work: concrete outputs (what you build)
- Writing: thinking process (how you reason)
- Research: depth and unfinished questions
- About: context, not personality

**Visual Treatment:**
- No background bar
- No borders
- Small type
- Fixed position
- High letter spacing
- Same color as body text (no highlight color)

**Interaction:**
- Hover: opacity 60%
- Active page: underline 1px, no animation

Orthodox structure, restrained execution.

---

## Page Hierarchy

### Work

Not "projects gallery."

**Structure:** Chronological, versioned, sparse metadata

**Example entry:**
```
Autonomous Localization — v0.3
ROS2, EKF, multi-sensor fusion
2024–present
```

Click → deep technical breakdown, trade-offs, failures.

### Writing

Not blogging. No categories. No previews. No summaries.

**Format:**
```
On Estimation Error
On Control Loops
On When Models Break
```

Dense, technical, readable.

### Research

What separates you from portfolios.

**Contents:**
- Open problems
- Hypotheses
- Abandoned paths (briefly explained)

**Example:**
```
Investigating vision-only indoor localization under sparse texture.
Current bottleneck: scale drift under rotational motion.
```

No conclusions required.

### About

Engineer's version, not designer's.

**Sections:**
- Focus areas
- Operating principles
- Contact

No timeline. No "journey."

---

## Typography & Grid

**Non-negotiable:**
- Max width: 680–720px
- Line length: ~65 characters
- Headings: serif
- Body: neutral sans
- Mathematical spacing over visual spacing

Feels like a paper, not a product.

---

## Visual Identity

### Color
- Warm, muted palette (beige/cream background, near-black text)
- One accent color (muted gold)
- Use accent maximum 3 times per page
- Gray for secondary information only

### Spacing
- Massive breathing room between sections
- Consistent rhythm (8px base unit)
- More space = more importance

### Typography
- Serif for gravity: headlines, project titles
- Sans for clarity: body text, navigation, metadata
- Never bold for emphasis—use italic
- Generous line spacing

---

## Interaction Design

**Links:** Only underline appears on hover. No color changes.

**Buttons:** Avoid. When needed: transparent, bordered, opacity change only.

**Animations:** 600ms minimum. Only opacity fades. No transforms, no parallax.

**Focus:** Clear, accessible, accent color.

---

## Forbidden

Do not use:
- Rounded corners
- Drop shadows
- Gradients
- Moving/scaling animations
- Color transitions
- Parallax
- Decorative elements
- Loading spinners

---

## The Discipline Test

Before publishing:

- Would this work printed in black and white on cheap paper?
- Can I justify every element's existence?
- Does every word earn its place?
- Is silence doing as much work as content?

If unsure, remove it.

---

## The Print Test

Design must remain functional and beautiful when:
- Printed in black and white
- On low-quality paper
- Without images loaded

If it breaks in print, the design is too fragile.

---

## Success Metric

When a senior engineer, PhD student, or reviewer from a serious lab visits and thinks:

**"This person is precise."**

Not "cool." Not "artsy." Precise.

Then the balance is correct.

---

*Treat design rules like musical notation—precise, intentional, with silence as important as sound.*
