import { Product } from "../types";
import hotWheels from "../assets/Hotwheel_buoquet_1.jpeg";
import roseBear from "../assets/Bear_candles.png";
import glassSipper from "../assets/personalized_glass_sipper.jpeg";
import floralResin from "../assets/floral_resin_phone-case.jpeg";
import crochetMonkey from "../assets/Crochet_1.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Hot Wheels Bouquet",
    price: 449,
    description:
      "For the speed lover in your life – this striking bouquet combines the adrenaline of a Hot Wheels classic with the timeless charm of fresh florals. Wrapped with precision and care, it's a statement piece for any occasion.making it the perfect gift for your pasandida mard ✨❤",
    image: hotWheels,
    category: "bouquets",
    featured: true,
  },
  {
    id: 2,
    name: "Rose Bear Candles",
    price: 149,
    description:
      "Sweet, sculpted, and scented with love — these Rose Bear Candles bring a touch of charm to any space. Each bear is made with intricate rose detailing and holds a little heart, making it the perfect gift or decor piece.",
    image: roseBear,
    category: "candles",
    featured: true,
  },
  {
    id: 3,
    name: "Personalized Glass Sipper",
    price: 399,
    description:
      "Add a personal touch to your space with this custom glass jar. Featuring bold name lettering and playful heart designs, it's perfect for gifting, storing trinkets, or adding charm to your desk or kitchen.",
    image: glassSipper,
    category: "sippers",
    featured: true,
  },
  {
    id: 4,
    name: "Floral Resin Phone Case",
    price: 449,
    description:
      "Bring nature to your fingertips with this customized phone case, featuring real pressed flowers, gold flakes, and your personal initial. Each case is uniquely handcrafted to combine beauty and function in one elegant design.",
    image: floralResin,
    category: "phone-cases",
  },
  {
    id: 5,
    name: "Crochet Monkey Plushy",
    price: 849,
    description:
      "Lovingly handmade from ultra-soft chenille yarn, the Monkey plushy is the perfect plush companion for all ages. With charming stitched details and a gentle texture, it's a cozy gift for little ones or decor for playful hearts.",
    image: crochetMonkey,
    category: "plushies",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
