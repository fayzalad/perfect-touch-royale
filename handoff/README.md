# Perfect Touch Royale visual handoff

This folder contains desktop screenshots of every page in the current storefront at a 1440 × 1200 viewport.

| Page               | Route        | Screenshot                           |
| ------------------ | ------------ | ------------------------------------ |
| Home               | `/`          | `screenshots/home.png`               |
| Shop               | `/#shop`     | `screenshots/shop.png`               |
| Contact            | `/#contact`  | `screenshots/contact.png`            |
| Checkout           | `/#checkout` | `screenshots/checkout.png`           |
| Order confirmation | `/#success`  | `screenshots/order-confirmation.png` |

## Implementation notes

- The app is a React and Vite single-page storefront.
- Page navigation uses URL hashes so each page can be opened directly.
- Product and brand imagery is stored locally in `public/products/` and `src/assets/`.
- Font files are stored locally in `public/fonts/`.
- Prices are displayed in Nigerian naira.
- Nigeria delivery costs ₦8,000 and is complimentary for orders of at least ₦250,000.
- International shipping costs ₦35,000 in the current checkout prototype.
- Product quick view, shopping bag, search, and mobile navigation are interactive states rather than separate pages.

Screenshots can be regenerated from the running Figma Make preview after UI changes.
