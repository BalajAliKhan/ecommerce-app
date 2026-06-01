# Ecommerce Frontend Design

A pixel-perfect, desktop-first eCommerce frontend implementation based on a Figma design specification. Built with semantic HTML5, modern CSS3 (Flexbox/Grid), and vanilla JavaScript.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero banner, deals, product categories, recommended items, services, suppliers, newsletter, footer |
| Product Listing | `list_view.html` | Grid-based product cards with sidebar filters and pagination |
| Product Detail | `product.html` | Product images, description, pricing, supplier info, related products |
| Shopping Cart | `cart.html` | Cart items table, quantity management, coupon code, order summary |

## Architecture

The project follows a single-page-per-view structure with a shared stylesheet and script:

```
ecommerce-frontend-design/
├── index.html              # Home page
├── list_view.html          # Product listing page
├── product.html            # Product detail page
├── cart.html               # Shopping cart page
├── style.css               # Global stylesheet (all pages)
├── script.js               # Client-side functionality
├── assets/
│   └── Layout1/
│       └── Image/
│           ├── hero/           # Hero banner images
│           ├── tech/           # Technology/gadget product images
│           ├── interior/       # Home and interior product images
│           ├── cloth/          # Clothing product images
│           ├── book/           # Book product images
│           ├── brand_logo/     # Brand logo images
│           ├── flags/          # Country flag icons (suppliers)
│           └── services/       # Service section background images
└── README.md
```

## Technologies

- **HTML5** — Semantic markup with landmark elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- **CSS3** — Flexbox, CSS Grid, custom properties, responsive breakpoints (1280px, 1024px)
- **JavaScript (ES6+)** — `const`/`let`, template literals, arrow functions, DOM manipulation, local storage
- **Font Awesome** — Icon library for UI elements

## Features

- Product browsing with grid/list views
- Product detail with supplier information and related items
- Shopping cart with add/remove/update quantity and order summary
- Countdown timer display for deals section
- Search bar with dropdown filters
- Category-based product filtering
- Newsletter subscription form
- Send inquiry form for supplier quotes
- Responsive design for desktop viewports (1440px, 1280px, 1024px)

## Key Components

### Header
- Logo, search bar with category dropdown, navigation links, user account icons (Profile, Messages, Orders, Cart)

### Home Page Sections
- **Hero Section** — Banner with category sidebar, featured image, and promotional widgets
- **Deals Section** — Countdown timer and deal product cards
- **Product Categories** — Home & Outdoor, Consumer Electronics with source buttons
- **Recommended Items** — Dynamic product grid loaded via JavaScript
- **Services** — Extra service cards with background imagery
- **Suppliers by Region** — Country-based supplier grid
- **Newsletter** — Email subscription form
- **Footer** — Multi-column links, contact information, payment methods

### Cart Functionality (script.js)
- Add/remove items, update quantities, coupon code validation
- Persistent cart storage using `localStorage`
- Shipping cost calculation with minimum threshold
- Cart badge count in header

## Design System

CSS custom properties are used for consistent theming:

```css
:root {
  --color-primary: #0d6efd;
  --color-primary-dark: #0b5ed7;
  --color-danger: #eb001b;
  --color-success: #00b517;
  --color-warning: #ffc107;
  --color-dark: #1c1c1c;
  --color-muted: #8b96a5;
  --color-border: #e5e7eb;
  --color-bg: #f7f8fa;
}
```

All interactive elements include `:focus-visible` outlines for keyboard accessibility. Screen-reader-only utility class (`.sr-only`) is available for accessible hidden content.

## Setup

No build tools or package managers required. Open any `.html` file directly in a browser:

```bash
git clone https://github.com/BalajAliKhan/ecommerce-app.git
cd ecommerce-frontend-design
open index.html
```

## Browser Compatibility

Designed for modern desktop browsers (Chrome, Firefox, Safari, Edge) at standard desktop resolutions (1024px and above).

## License

MIT
