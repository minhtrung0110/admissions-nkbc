Design System Specification: The Academic Vanguard

1. Overview & Creative North Star
   Creative North Star: "The Modern Scholastic Athlete"
   This design system moves away from the cluttered, high-intensity tropes of "sports apps" and instead embraces an editorial, prestigious aesthetic. We treat the interface like a premium digital varsity journal—authoritative yet kinetic. By combining a deep, intellectual Navy with a high-performance Red, we create a visual dialogue between academic excellence and athletic vigor.
   To achieve this, we break the traditional "boxed-in" web layout. We use intentional asymmetry, high-contrast typographic scales (using the geometric precision of Lexend), and a sophisticated layering of surfaces. The result is a system that feels "custom-tailored" rather than "templated," evoking the same sense of pride as a bespoke school blazer.

---

2. Colors
   The palette is anchored in discipline and energy. We use Material Design token logic but apply it with editorial restraint.
   Color Tokens (High-Contrast Academic)
   Primary (`#00236f`): The "Varsity Navy." Use this for core navigational elements and high-level branding.
   Primary Container (`#1e3a8a`): The "Action Navy." Use this for hero section backgrounds and primary call-to-actions.
   Tertiary (`#5d0000`) & Tertiary Container (`#870100`): The "School Spirit Red." This is an energetic accent. Use it sparingly for interactive highlights, alerts, or to draw the eye to critical data points.
   Surface (`#faf8ff`): The "Clean Canvas." A bright, cool-white base that provides breathing room.
   The "No-Line" Rule
   Explicit Instruction: Do not use 1px solid borders to separate sections. Sectioning must be achieved through background shifts. For instance, a main content area on `surface` can transition into a footer or sidebar using `surface-container-low`. The shift in tone creates a boundary that is felt, not seen, maintaining a high-end, seamless feel.
   Surface Hierarchy & Nesting
   Treat the UI as physical layers.
   Base Layer: `surface` (Main background)
   Structural Layer: `surface-container-low` (Sidebars, secondary content areas)
   Elevated Content: `surface-container-lowest` (Cards or inputs sitting on top of a low container)
   Active UI: `surface-container-highest` (Navigation bars or sticky headers)
   The Glass & Gradient Rule
   To add soul to the interface:
   Signature Gradients: For Hero CTAs, use a linear gradient from `primary` (#00236f) to `primary_container` (#1e3a8a) at a 135-degree angle.
   Glassmorphism: Floating navigation bars or modal overlays should use `surface` at 80% opacity with a `backdrop-blur: 20px` effect to create a prestigious, multi-dimensional feel.

---

3. Typography
   Lexend is our voice. Its variable width and geometric clarity offer a "modern sporty" vibe that remains highly legible for academic reporting.
   Display Scales (Display-LG/MD/SM): Set with a tight `letter-spacing: -0.02em`. These are your "billboard" moments—record-breaking scores or major announcements.
   Headline & Title (Headline-LG to Title-SM): Bold and authoritative. Use `primary` color for headlines to establish a strong hierarchy.
   Body (Body-LG to Body-SM): Optimized for readability. Use `on_surface_variant` (#444651) for long-form text to reduce eye strain and provide a softer, more professional contrast than pure black.
   Labels: Always in `on_surface` or `primary`. These should feel like metadata—clipped, precise, and functional.

---

4. Elevation & Depth
   We reject the "drop shadow" of the early 2000s. We define space through Tonal Layering.
   The Layering Principle
   Instead of a shadow, place a `surface-container-lowest` card (Pure White) on a `surface-container-low` (#f4f3fa) background. The subtle 2% shift in brightness provides all the separation required for a premium look.
   Ambient Shadows
   When an element must float (e.g., a "Join Team" FAB), use a "Ghost Shadow":
   Blur: 24px - 40px
   Opacity: 6%
   Color: Tint the shadow with `primary`. This ensures the shadow feels like a natural lighting effect of the environment, not a grey smudge.
   The "Ghost Border" Fallback
   If accessibility requires a border (e.g., in high-glare environments), use the `outline_variant` token at 15% opacity. This creates a suggestion of a boundary without cluttering the visual field.

---

5. Components
   Buttons: The "Varsity" Set
   Primary: Gradient fill (`primary` to `primary_container`), `DEFAULT` (8px) rounded corners, white text.
   Secondary: Transparent fill with a `Ghost Border`. Text in `primary`.
   Tertiary (Accent): `tertiary_container` (Red) fill. Reserve this exclusively for "urgent" athletic actions like "Register Now" or "Live Match."
   Cards & Lists: The White Space Rule
   Cards: No borders. No dividers. Use `spacing-8` (2rem) of internal padding. Separate cards from each other using `spacing-6` (1.5rem) of margin.
   Lists: Instead of divider lines, use a subtle `surface-container` hover state that spans the full width of the container.
   The "Athletic" Input
   States: Default inputs should have a `surface_container_low` background. On focus, the background shifts to `surface_container_lowest` (white) and gains a 2px `primary` bottom-border (not a full border) to mimic a sophisticated, minimalist form.
   Signature Component: The "Performance Badge"
   Use `full` rounding (pill-shaped) for status indicators. A "Win" badge uses `primary_fixed`, while a "Loss" badge uses `tertiary_fixed`. This keeps the "Academic Blue" dominant even when displaying varied data.

---

6. Do's and Don'ts
   Do
   Do use large amounts of white space (refer to `spacing-16` and `spacing-20`) to allow high-impact imagery of athletes to breathe.
   Do overlap elements. Allow a `headline-lg` to partially overlap a high-quality image to create a custom editorial feel.
   Do use the `DEFAULT` (8px) corner radius consistently to maintain the "Soft Modern" vibe.
   Don't
   Don't use 1px black or grey borders. This is the quickest way to make the design look like a generic template.
   Don't use Red (`tertiary`) for everything. It is a spice, not the main course. If the screen is more than 5% Red, pull back.
   Don't use standard "drop shadows." If it looks like a shadow from 2015, it’s too heavy. Keep it ambient and tinted.
   Don't use dividers in lists. Trust the vertical rhythm of the spacing scale to guide the user's eye.
