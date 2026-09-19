# Computer Garage — Local Business Website
**Computer & Laptop Repair Shop | Vikramgad, Palghar, Maharashtra**

This is a fast, modern, mobile-first website for **Computer Garage**, built to rank for local repair keywords and maximize conversion through phone calls and WhatsApp inquiries.

---

## 🚀 Quick Setup & How to Run

### Option 1: Double-Click / Direct Browser (Zero-Build)
You can directly open `index.html` in any modern web browser.
*(Note: To allow ES modules in JavaScript when testing locally, use a local server like Option 2 or 3)*

### Option 2: Using Vite / Node.js
```bash
# 1. Install dependencies
npm install

# 2. Start local dev server (hot-reload)
npm run dev

# 3. Build optimized static output
npm run build

# 4. Preview built output
npm run preview
```

### Option 3: Instant Local Server (Python / npx)
```bash
# Using Python:
python -m http.server 3000

# Or using npx:
npx serve .
```

---

## ⚙️ How to Update Phone Numbers & WhatsApp

All contact numbers and prefilled messages are configured in **one single file**:
👉 [`js/config.js`](file:///g:/Computer%20garage/js/config.js)

```javascript
export const SITE_CONFIG = {
  // Replace with your real WhatsApp number (Country code 91 for India, no spaces or '+')
  whatsappNumber: "919876543210", 

  // Phone number for direct phone calls
  phoneNumberTel: "+919876543210",
  
  // Phone number as displayed on the website
  phoneNumberDisplay: "+91 98765 43210",

  // Business address & hours
  addressFull: "Main Market Road, Vikramgad, Dist. Palghar, Maharashtra 401605",
  workingHours: "Monday – Saturday: 9:30 AM – 8:30 PM | Sunday: 10:00 AM – 3:00 PM",
  ...
};
```

Whenever you update `js/config.js`, all WhatsApp buttons, sticky mobile bar, header buttons, and phone links update automatically across the entire site.

---

## 📱 Key Features

1. **Conversion Engine**:
   - Sticky Header with "WhatsApp Us" and "Call Now" buttons.
   - Fixed Sticky Mobile Bar on bottom (`💬 WhatsApp` and `📞 Call`) with safe-area bottom insets to ensure page content is never obscured.
   - Context-aware WhatsApp prefilled messages (e.g. Screen Replacement vs. Battery vs. Dead Laptop).
   - Interactive Quick Diagnostic inquiry form that opens WhatsApp with structured details.

2. **Local SEO & Schema Markup**:
   - `LocalBusiness` and `ComputerRepair` JSON-LD structured data included in `<head>`.
   - Geo-coordinates, service areas (Vikramgad, Jawhar, Wada, Manor, Palghar), and business hours.
   - Semantic H1, H2, and H3 tags naturally incorporating target keywords without keyword stuffing.

3. **Design System**:
   - Dark technology aesthetic: Deep slate backgrounds, electric cyan accents, crisp inline SVGs.
   - High contrast, fast loading, no heavy libraries, zero dependency bloat.
