# Design System Documentation: The Analytical Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**
This design system rejects the "SaaS-in-a-box" aesthetic. Instead of a rigid grid of boxed-in data, we treat business analytics as high-end editorial content. We move beyond "standard" professional dashboards by prioritizing **white space as a functional element**, intentional asymmetry, and a sophisticated layering of surfaces.

The goal is to make the user feel like they are reading a premium financial journal that happens to be interactive. We achieve this through "Atmospheric Depth"—using tonal shifts instead of lines to define structure, and high-contrast typography scales that guide the eye with authoritative precision.

---

### 2. Colors: Tonal Depth vs. Structural Lines
Our palette is anchored in deep professional blues and crisp whites, but its execution is what creates the "premium" feel.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` component should sit on a `surface` background to create a "ghost" boundary.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper.
    *   **Base:** `surface` (#f7f9fb)
    *   **Sectioning:** `surface-container-low` (#f2f4f6)
    *   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **The "Glass & Gradient" Rule:** To distinguish AI-powered insights, utilize Glassmorphism. Use `surface-variant` at 60% opacity with a `20px` backdrop blur. 
*   **Signature Textures:** For primary CTAs and AI sections, use a linear gradient: `primary` (#0040a1) to `primary-container` (#0056d2) at a 135° angle. This adds a "soul" to the interface that flat colors cannot replicate.

---

### 3. Typography: The Editorial Voice
We use a dual-typeface system to balance authority with utility.

*   **Display & Headlines (Manrope):** Chosen for its modern, geometric character. Use `display-lg` and `headline-md` for high-level data storytelling. The tight tracking and generous leading create an "Editorial" look.
*   **Body & Labels (Inter):** The workhorse for data density. Use `body-md` for standard metrics and `label-sm` for metadata. 
*   **The Hierarchy Strategy:** Large display numbers (e.g., $4.2M) should use `display-md` in `on-surface`, paired with a small `label-md` in `on-surface-variant` to provide context without clutter.

---

### 4. Elevation & Depth
We define hierarchy through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card (Pure White) on a `surface-container-low` background to create a soft, natural lift.
*   **Ambient Shadows:** If a card must "float" (e.g., a modal or a primary insight), use an extra-diffused shadow: `0px 12px 32px rgba(25, 28, 30, 0.04)`. The shadow is a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at 15% opacity. Never use 100% opaque borders.
*   **Roundedness:** Stick strictly to the `md` (0.75rem / 12px) scale for primary cards and `sm` (0.25rem / 4px) for smaller utility elements like tags or inputs.

---

### 5. Components

#### Cards & Data Containers
*   **Rule:** Forbid divider lines within cards.
*   **Execution:** Separate header, body, and footer using the **Spacing Scale** (e.g., `8` (2rem) padding) or subtle background shifts using `surface-container-high`.
*   **AI Insights Card:** Should use a `tertiary-container` (#742fe5) tint or a subtle `tertiary` to `primary` gradient border-trace to signify "Intelligence."

#### Buttons
*   **Primary:** Linear gradient (`primary` to `primary-container`), `md` rounding, white text.
*   **Secondary:** `secondary-container` background with `on-secondary-container` text. No border.
*   **Tertiary (AI):** Glassmorphic style with a `1.5` (0.375rem) sparkle icon prefix.

#### Inputs & Fields
*   **State:** Default state uses `surface-container-highest` as a background. On focus, transition to `surface-container-lowest` with a 2px `primary` "Ghost Border" at 20% opacity.
*   **Error State:** Use `error` (#ba1a1a) for text and a `error-container` (#ffdad6) soft background wash.

#### AI-Powered Chips
*   **Selection:** Use `tertiary-fixed` with `on-tertiary-fixed`. These should feel "active" and "magical" compared to standard filter chips.

---

### 6. Do’s and Don’ts

**Do:**
*   **Do** use asymmetrical layouts (e.g., a 60/40 split) to make the dashboard feel curated rather than templated.
*   **Do** use `surface-dim` for inactive or "backgrounded" sidebar states to keep the focus on the data.
*   **Do** embrace extreme white space. If you think there's enough space, add one more step on the Spacing Scale.

**Don’t:**
*   **Don't** use 1px dividers to separate list items. Use a `1.5` (0.375rem) gap and a slight hover state change to `surface-container-low`.
*   **Don't** use high-saturation reds for warnings. Use the semantic `error` token which is tuned for a professional, "quiet" urgency.
*   **Don't** use standard box shadows. If the element doesn't feel like it's "breathing" on the page, adjust the tonal shift of the background instead of adding a shadow.

---

### 7. Spacing & Rhythm
Consistency is maintained through the 4px baseline grid.
*   **Card Padding:** Always `6` (1.5rem) or `8` (2rem).
*   **Section Gaps:** Use `12` (3rem) to allow the "Editorial" layout to breathe.
*   **Component Internal Spacing:** Use `2` (0.5rem) or `3` (0.75rem) for tight grouping of labels and values.