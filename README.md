# Kana AI Marketing Platform — Dynamic Industry Solutions Template

A highly visual, premium, and fully responsive **industry solution page** template for **Kana** (agentic marketing orchestration). The page is built using a **100% template-driven architecture** where zero layout or code modifications are required to spin up a new industry vertical.

This working repository contains the complete **CPG** vertical demo as the baseline, alongside fully operational, automatically scaffolded wrappers for the other six target industries: **Retail & E-Commerce**, **Media & Advertisers**, **Manufacturing**, **Financial Services**, **Pharma**, and **Travel & Hospitality**.

---

## 🚀 Getting Started

No external compilers, bundlers, or heavy node_modules are needed. The project runs on a lightweight, zero-dependency local Node server that serves modern formats like AVIF, WebP, SVG, and looping MP4s with correct HTTP mime headers.

### 1. Start the Dev Server
Run the following commands in your terminal at the root of the project:
```bash
# Start the local development server
npm run dev
```

### 2. View the Demos
Once the server starts:
- Opening `http://localhost:3000/` will automatically redirect you to the main CPG working demo.
- Direct URL: [http://localhost:3000/industries/cpg/](http://localhost:3000/industries/cpg/)
- Open the **Industries** sticky dropdown menu to instantly cross-navigate and view the active color-re-skins for all 7 verticals!

---

## 🛠 How to Modify Copy or Assets per Industry

Every word of copy, asset reference path, stat, and FAQ question resides in a single, isolated configuration file per industry vertical. 

To update the CPG vertical, edit the following file:
📍 **`industries/cpg/config.js`**

### Structure of the Configuration File
```javascript
export const industryConfig = {
  slug:   "cpg",           // Unique folder slug
  label:  "CPG",           // Display label in navigation
  accent: "#ff7a59",       // CSS color override (CPG default coral)

  assets: {
    logo:   "../../brand-assets/SVG/logo__img.svg",
    heroBg: "../../brand-assets/WEBP/69fb45f0d8e74cb7084b30ee_red_section_1440.webp",
    // ...other global elements (soc2, partner logos, footer backgrounds)
  },

  nav: {
    industries: [ "CPG", "Retail & E-Commerce", ... ], // List of verticals
    cta: { text: "Book a Demo", href: "/demo" }
  },

  hero: {
    headline:     "The AI Marketing Platform Built for CPG Brands",
    subheadline:  "Your budget is fragmented across 200+ retailer platforms...",
    image:        "../../brand-assets/AVIF/6a0738509e86699ed6c6bd9e_Solutions-1.avif"
  },
  
  // Pain points, alternating Solution rows, Stats, Testimonials, FAQs, and Final CTAs
};
```
*Simply change a text string or asset file path in this file and save. The changes will reflect in the browser instantly on refresh.*

---

## ⚡️ How to Add a New Vertical in Under 5 Minutes

Because of the strict **Dynamic Template Engine**, adding an entirely new industry vertical (e.g. `automotive` or `education`) is a simple copy-paste task with absolutely **zero HTML, CSS, or JS code changes**:

### Step 1: Copy an Existing Vertical Folder
Duplicate the `industries/cpg` folder and rename it to your new vertical's slug (e.g., `automotive`):
```bash
cp -r industries/cpg industries/automotive
```

### Step 2: Swap the Accent Color & Copy
Open `industries/automotive/config.js` and modify:
1. **`slug`**: `"automotive"`
2. **`label`**: `"Automotive"`
3. **`accent`**: Choose a new brand color (e.g., `" #e74c3c"` or select one of our premium pre-mapped variables like `--color-teal`).
4. **Copy & Assets**: Swap out the text in `hero`, `painPoints`, `solutions`, `faq`, etc., and replace asset paths with your new images.

### Step 3: Add to Dropdown Navigation
To let users navigate to it, add `"Automotive"` to the `nav.industries` array in the shared configuration files (or directly in the new one to list it). That's it! 

The shared layout engine (`src/app.js`) will:
- Read `automotive/config.js`
- Dynamically parse the Hex code into CSS custom properties (`--color-accent` and `--color-accent-rgb`) to re-skin all buttons, borders, dropshadows, and active elements instantly.
- Inject responsive media queries for footer background resolutions.
- Render autoplaying looping videos or fallback high-end dashed placeholder frames for missing media.

---

## 💎 Premium Design Systems Features

1. **Robust Placeholder Safeguard**: If any image, SVG icon, or video is missing or marked as a placeholder, the browser intercepts it dynamically and renders a gorgeous, geometric dashed-mesh fallback block with a clear typographic descriptor. It guarantees **the layout never breaks**.
2. **Accessible Accordions & Dropdowns**: Fully optimized keyboard focus states, transition timings, dynamic height calculations (`scrollHeight` slide transitions), and active SVG indicators.
3. **Micro-animations**: Cards light up dynamically on hover with shadow composition glows, buttons utilize a beautiful linear OKLCH reflection sweep, and layout containers dynamically adapt to screen widths from 320px to 1440px+.
