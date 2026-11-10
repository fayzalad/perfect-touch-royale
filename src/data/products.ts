export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  details: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
};

export type CartItem = {
  product: Product;
  color: string;
  size: string;
  quantity: number;
};

const photos = [
  "./products/product-1.jpg",
  "./products/product-2.jpg",
  "./products/product-3.jpg",
  "./products/product-4.jpg",
  "./products/product-5.jpg",
  "./products/product-6.jpg",
  "./products/product-7.jpg",
  "./products/product-8.jpg",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Aysel Embroidered Abaya",
    slug: "aysel-embroidered-abaya",
    category: "Abayas",
    price: 168000,
    image: photos[0],
    tag: "Bestseller",
    description:
      "A flowing crepe abaya finished with hand-inspired gold embroidery and a graceful open front.",
    details: [
      "Premium Turkish crepe fabric",
      "Hand-inspired gold embroidery detailing",
      "Open front design with inner tie",
      "Full-length silhouette",
      "Dry clean recommended",
    ],
    colors: [
      { name: "Onyx", hex: "#161616" },
      { name: "Sand", hex: "#c0a582" },
      { name: "Emerald", hex: "#234e3c" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Lale Floral Maxi",
    slug: "lale-floral-maxi",
    category: "Dresses",
    price: 145000,
    image: photos[1],
    tag: "New",
    description:
      "A soft, full-length floral dress with an easy gathered waist, inspired by Istanbul gardens.",
    details: [
      "Lightweight chiffon blend",
      "Delicate floral print",
      "Gathered waist with hidden elastic",
      "Lined for comfort",
      "Hand wash cold, hang dry",
    ],
    colors: [
      { name: "Rose", hex: "#c98387" },
      { name: "Ivory", hex: "#ece5d8" },
      { name: "Sage", hex: "#75816b" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Hürrem Scarlet Gown",
    slug: "hurrem-scarlet-gown",
    category: "Occasion",
    price: 215000,
    image: photos[2],
    description:
      "A statement scarlet gown with an elegant drape and sweeping silhouette for memorable evenings.",
    details: [
      "Luxurious satin-finish fabric",
      "Draped bodice with structured shoulders",
      "Concealed back zipper",
      "Floor-length with slight train",
      "Professional dry clean only",
    ],
    colors: [
      { name: "Scarlet", hex: "#9e282a" },
      { name: "Midnight", hex: "#1d2637" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Ecru Tailored Set",
    slug: "ecru-tailored-set",
    category: "Co-ords",
    price: 182000,
    image: photos[3],
    tag: "Limited",
    description:
      "A refined two-piece set with clean tailoring and relaxed proportions for modern modest dressing.",
    details: [
      "Two-piece set: structured top + wide-leg trousers",
      "Premium cotton-linen blend",
      "Relaxed oversized fit",
      "Side pockets on trousers",
      "Machine wash gentle cycle",
    ],
    colors: [
      { name: "Ecru", hex: "#e8dfce" },
      { name: "Mocha", hex: "#806b5d" },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    name: "Sultan Golden Kaftan",
    slug: "sultan-golden-kaftan",
    category: "Kaftans",
    price: 238000,
    image: photos[4],
    tag: "Signature",
    description:
      "Our signature occasion kaftan, cut in luminous fabric with ornate trim and a dramatic floor length.",
    details: [
      "Signature piece — limited quantities",
      "Metallic-thread woven fabric",
      "Ornate gold trim at neckline and cuffs",
      "Relaxed flowing silhouette",
      "Dry clean only",
    ],
    colors: [
      { name: "Saffron", hex: "#c59a27" },
      { name: "Wine", hex: "#672d38" },
      { name: "Forest", hex: "#334b3b" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Nehir Pleated Dress",
    slug: "nehir-pleated-dress",
    category: "Dresses",
    price: 154000,
    image: photos[5],
    description:
      "A timeless pleated dress with subtle movement, a defined waist and softly structured sleeves.",
    details: [
      "Permanent micro-pleat fabric",
      "Defined waist with self-tie belt",
      "Structured puff sleeves",
      "Midi length",
      "Hand wash cold, do not wring",
    ],
    colors: [
      { name: "Noir", hex: "#202020" },
      { name: "Cocoa", hex: "#6f5142" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Gece Modest Set",
    slug: "gece-modest-set",
    category: "Co-ords",
    price: 176000,
    image: photos[6],
    tag: "Bestseller",
    description:
      "A minimalist longline top and fluid trouser pairing in soft-touch Turkish jersey.",
    details: [
      "Two-piece set: longline tunic + straight-leg trousers",
      "Soft-touch Turkish jersey",
      "Ribbed cuffs and hem",
      "Elasticated waist on trousers",
      "Machine washable",
    ],
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Stone", hex: "#a59c8d" },
      { name: "Plum", hex: "#594052" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Bosphorus Evening Dress",
    slug: "bosphorus-evening-dress",
    category: "Occasion",
    price: 198000,
    image: photos[7],
    description:
      "An elegant full-length dress with sculptural sleeves, made for receptions and special gatherings.",
    details: [
      "Rich crepe fabric with subtle sheen",
      "Sculptural balloon sleeves",
      "Fitted bodice with A-line skirt",
      "Full floor length",
      "Professional dry clean only",
    ],
    colors: [
      { name: "Navy", hex: "#26344b" },
      { name: "Garnet", hex: "#6e2934" },
    ],
    sizes: ["S", "M", "L"],
  },
];

export const categories = ["All", "Abayas", "Dresses", "Kaftans", "Co-ords", "Occasion"];
