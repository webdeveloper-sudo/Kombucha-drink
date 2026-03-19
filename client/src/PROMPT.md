in the Hero.tsx compoennt -- Create a 3-column grid layout (full screen height)

Grid Structure:

Left Section (Column 1)

Align content to top-left

Display:

Welcome message (e.g., “Welcome to [Brand]”)

Small tagline

Center Section (Column 2)

Center both vertically & horizontally

Display:

Single product image

This is the main focus

Right Section (Column 3)

Align content to bottom-right

Display:

Product title

Product description

🎞️ Animation Logic (Core Requirement)

Every 3 seconds, perform a product transition

Animation Behavior:

Current product image should:

Rotate in X-axis (3D spin / tornado-like effect)

Smoothly transition into next product

Use:

rotateX, perspective, and opacity blending

Synchronization:

When product changes:

✅ Product image updates

✅ Product title & description updates

✅ Background gradient updates

All transitions must feel synchronized and smooth

🎨 Dynamic Styling

Background should use gradient colors

Gradient must:

Change per product

Be derived from product image / palette (predefined array is fine)

📦 Data Handling

Create a mock product array:

{
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string; // tailwind gradient classes
}

Loop through products using state + interval (3s)

⚙️ Animation Implementation

Prefer Framer Motion for simplicity:

Use AnimatePresence for transitions

Use motion.div for rotations

OR GSAP if more control is needed

🧠 UX Expectations

Smooth, premium feel (no janky transitions)

Maintain consistent spacing and alignment

Ensure responsive behavior (at least basic)

✨ Bonus (If possible)

Add slight:

Scale effect during transition

Blur/fade while switching

Add easing for natural motion (easeInOut)

🚫 Constraints

Do NOT overcomplicate with too many dependencies

Keep code modular and clean

Avoid inline styles except Tailwind utilities

✅ Output Expectation

Fully working Hero.tsx

Clean, readable, production-quality code

Smooth animation with synchronized UI updates