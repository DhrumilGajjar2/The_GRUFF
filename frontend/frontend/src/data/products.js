export const PRODUCTS = [
  {
    id: "pant-1",
    sku: "CHINO-SLIM-BLK",
    slug: "slim-fit-chinos",

    name: "Slim Fit Chinos",
    category: "Chinos",

    price: 1499,
    originalPrice: 1799,
    currency: "INR",

    rating: 4.6,
    reviewsCount: 124,
    isNew: true,
    isFeatured: true,

    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600&q=80",
    ],

    sizes: ["30", "32", "34", "36"],
    colors: ["Black", "Beige"],
    stock: 12,

    description:
      "Premium slim-fit chinos crafted for everyday comfort. Perfect for office, travel, and casual wear.",

    highlights: [
      "Stretchable premium cotton",
      "Soft-touch finish",
      "Slim tapered fit",
      "Wrinkle-resistant fabric",
    ],

    care: "Machine wash cold. Do not bleach. Tumble dry low.",
  },

  {
    id: "pant-2",
    sku: "JOGGER-TAPERED-OLV",
    slug: "tapered-jogger-pants",

    name: "Tapered Jogger Pants",
    category: "Joggers",

    price: 1299,
    originalPrice: 1599,
    currency: "INR",

    rating: 4.4,
    reviewsCount: 89,
    isNew: false,
    isFeatured: true,

    image:
      "https://images.unsplash.com/photo-1583001809873-a128495da465?w=600&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    ],

    sizes: ["28", "30", "32", "34"],
    colors: ["Olive", "Navy"],
    stock: 20,

    description:
      "Ultra-soft jogger pants designed for all-day comfort with a modern tapered fit.",

    highlights: [
      "Breathable fabric",
      "Elasticated waistband",
      "Adjustable drawstring",
      "Ideal for travel & casual days",
    ],

    care: "Gentle machine wash. Dry in shade.",
  },

  {
    id: "pant-3",
    sku: "FORMAL-TAILORED-NVY",
    slug: "tailored-formal-trousers",

    name: "Tailored Formal Trousers",
    category: "Formal",

    price: 1999,
    originalPrice: null,
    currency: "INR",

    rating: 4.7,
    reviewsCount: 56,
    isNew: false,
    isFeatured: false,

    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&q=80",

    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      "https://images.unsplash.com/photo-1593032457868-fc3b0f8cba34?w=600&q=80",
    ],

    sizes: ["30", "32", "34", "36"],
    colors: ["Charcoal", "Navy Blue"],
    stock: 8,

    description:
      "Elegant tailored trousers crafted for office wear, meetings, and formal occasions.",

    highlights: [
      "Premium twill fabric",
      "Sharp crease retention",
      "Classic tailored cut",
      "Ideal for formal settings",
    ],

    care: "Dry clean recommended.",
  },
];
