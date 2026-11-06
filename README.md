# Modern Landing Page — Noor Boutique, Sukkur (Demo)

A responsive landing page for a small boutique / clothing shop in Sukkur — a **demo project** built by Tasleem Bibi to show landing-page skills. **Noor Boutique is a fictional demo shop, not a real business.** Product names, prices, reviews and the shop itself are sample content.

## Features

- Responsive, mobile-first layout (1 column on mobile, 3–4 columns on desktop)
- Sticky navigation with a mobile hamburger menu
- Hero section with a clear offer and call-to-action
- Products grid with prices in **PKR** (Rs. 799 – Rs. 4,999)
- "Why shop with us" services section (delivery, COD, exchange, stitching)
- Customer testimonials
- FAQ accordion (one open at a time, keyboard-friendly buttons)
- Order / contact form with JavaScript validation:
  - Full name (min. 3 characters)
  - Pakistani mobile number (`03xx-xxxxxxx` format)
  - Product selection required
  - Delivery address (min. 10 characters)

## Skills used

HTML, CSS (Flexbox, Grid, media queries), JavaScript (DOM, events, form validation, accordion)

## How to run

No build step, no server needed:

1. Download / clone this folder.
2. Open `index.html` in any browser (double-click it).
3. Or serve it locally: `python3 -m http.server` then visit `http://localhost:8000`

## Structure

```
modern-landing-page/
├── index.html   # Hero, products, services, testimonials, FAQ, order form
├── style.css    # Mobile-first styles + responsive breakpoints
├── script.js    # Menu, FAQ accordion, order form validation
└── README.md
```

## Notes

- The order form validates on the front end only and places no real order. To take real orders, connect it to WhatsApp, a form service, or a backend.
- Built by **Tasleem Bibi** — BSCS final year, Begum Nusrat Bhutto Women University Sukkur; PITP Certified Web Developer & Data Scientist, Sukkur IBA University.
  - LinkedIn: https://www.linkedin.com/in/tasleem-bibi-431b2a361/
  - Fiverr: [@taslem_services](https://www.fiverr.com/taslem_services)
