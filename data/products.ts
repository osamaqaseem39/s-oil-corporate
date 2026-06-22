export type ProductCategory =
  | "passenger-car"
  | "motorcycle"
  | "diesel-commercial"
  | "industrial";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  viscosity: string;
  image: string;
  shortDescription: string;
  benefits: string[];
  specs: { label: string; value: string }[];
  usage: string;
  datasheetUrl: string;
  msdsUrl: string;
  shopUrl: string;
}

export const productImages = [
  "/oil-1.jpg",
  "/oil-2.jpg",
  "/oil-3.jpg",
  "/product-4.jpg",
  "/product-5.jpg",
  "/s-oil.jpg",
] as const;

export const categories: {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    slug: "passenger-car",
    name: "Passenger Car Motor Oil",
    description:
      "Premium synthetic and semi-synthetic oils for cars, SUVs, and light vehicles.",
    image: "/oil-1.jpg",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle Oil",
    description:
      "High-performance oils engineered for 2-stroke and 4-stroke motorcycle engines.",
    image: "/oil-2.jpg",
  },
  {
    slug: "diesel-commercial",
    name: "Diesel / Commercial Oils",
    description:
      "Heavy-duty lubricants for trucks, buses, generators, and commercial fleets.",
    image: "/oil-3.jpg",
  },
  {
    slug: "industrial",
    name: "Industrial Lubricants",
    description:
      "Hydraulic, gear, compressor, and specialty oils for industrial machinery.",
    image: "/product-4.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "soil-edge-5w30",
    name: "SOIL EDGE",
    category: "passenger-car",
    viscosity: "5W-30",
    image: "/oil-1.jpg",
    shortDescription:
      "Full synthetic motor oil for maximum engine protection and fuel efficiency.",
    benefits: [
      "Up to 3% fuel economy improvement",
      "Superior wear protection under extreme loads",
      "Keeps engines clean and sludge-free",
      "Extended drain intervals up to 10,000 km",
    ],
    specs: [
      { label: "API Rating", value: "SN Plus / SP" },
      { label: "ACEA", value: "A5/B5" },
      { label: "Viscosity Grade", value: "5W-30" },
      { label: "Base Oil", value: "100% Synthetic" },
      { label: "Pack Sizes", value: "1L, 4L, 20L" },
    ],
    usage:
      "Recommended for modern petrol engines in passenger cars and SUVs. Suitable for turbocharged and direct-injection engines. Check owner manual for specific requirements.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-edge-5w30",
  },
  {
    slug: "soil-edge-10w40",
    name: "SOIL EDGE",
    category: "passenger-car",
    viscosity: "10W-40",
    image: "/oil-2.jpg",
    shortDescription:
      "Semi-synthetic motor oil balancing performance and value for everyday driving.",
    benefits: [
      "Reliable protection in hot climates",
      "Reduces engine noise and vibration",
      "Anti-oxidant additives for longer oil life",
      "Compatible with most petrol engines",
    ],
    specs: [
      { label: "API Rating", value: "SN" },
      { label: "ACEA", value: "A3/B4" },
      { label: "Viscosity Grade", value: "10W-40" },
      { label: "Base Oil", value: "Semi-Synthetic" },
      { label: "Pack Sizes", value: "1L, 4L, 20L" },
    ],
    usage:
      "Ideal for petrol engines in cars, light trucks, and older vehicles requiring 10W-40 viscosity. Performs well in Pakistan's summer heat.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-edge-10w40",
  },
  {
    slug: "soil-magnatec-20w50",
    name: "SOIL MAGNATEC",
    category: "passenger-car",
    viscosity: "20W-50",
    image: "/oil-3.jpg",
    shortDescription:
      "High-viscosity oil providing non-stop protection from every engine start.",
    benefits: [
      "Clings to engine parts during cold starts",
      "Reduces wear by up to 50% at startup",
      "Ideal for high-mileage engines",
      "Excellent high-temperature stability",
    ],
    specs: [
      { label: "API Rating", value: "SL" },
      { label: "Viscosity Grade", value: "20W-50" },
      { label: "Base Oil", value: "Mineral Blend" },
      { label: "Pack Sizes", value: "1L, 4L" },
    ],
    usage:
      "Recommended for older petrol engines, high-mileage vehicles, and engines operating in consistently hot conditions.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-magnatec-20w50",
  },
  {
    slug: "soil-moto-4t-10w40",
    name: "SOIL MOTO 4T",
    category: "motorcycle",
    viscosity: "10W-40",
    image: "/product-4.jpg",
    shortDescription:
      "Premium 4-stroke motorcycle oil for sport and commuter bikes.",
    benefits: [
      "Wet clutch compatible formulation",
      "Superior gear protection",
      "Prevents clutch slippage",
      "Smooth shifting performance",
    ],
    specs: [
      { label: "JASO", value: "MA2" },
      { label: "API Rating", value: "SN" },
      { label: "Viscosity Grade", value: "10W-40" },
      { label: "Pack Sizes", value: "1L" },
    ],
    usage:
      "Designed for 4-stroke motorcycles with wet clutch systems. Suitable for sport bikes, commuters, and scooters.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-moto-4t-10w40",
  },
  {
    slug: "soil-moto-2t",
    name: "SOIL MOTO 2T",
    category: "motorcycle",
    viscosity: "2T",
    image: "/product-5.jpg",
    shortDescription:
      "Low-smoke 2-stroke oil for motorcycles, chainsaws, and small engines.",
    benefits: [
      "Low smoke and exhaust emissions",
      "Prevents spark plug fouling",
      "Excellent lubrication at high RPM",
      "Self-mix and pre-mix compatible",
    ],
    specs: [
      { label: "JASO", value: "FB" },
      { label: "ISO-L-EGD", value: "Compliant" },
      { label: "Pack Sizes", value: "1L" },
    ],
    usage:
      "For 2-stroke motorcycle engines, scooters, and small power equipment. Mix ratio per manufacturer recommendation.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-moto-2t",
  },
  {
    slug: "soil-fleet-15w40",
    name: "SOIL FLEET",
    category: "diesel-commercial",
    viscosity: "15W-40",
    image: "/s-oil.jpg",
    shortDescription:
      "Heavy-duty diesel engine oil for trucks, buses, and commercial fleets.",
    benefits: [
      "Extended drain intervals for fleets",
      "Superior soot and deposit control",
      "Protects against bore polishing",
      "Fuel economy benefits for diesel engines",
    ],
    specs: [
      { label: "API Rating", value: "CK-4" },
      { label: "ACEA", value: "E9" },
      { label: "Viscosity Grade", value: "15W-40" },
      { label: "Pack Sizes", value: "4L, 20L, 208L" },
    ],
    usage:
      "For modern and older diesel engines in trucks, buses, construction equipment, and generators. Meets latest emission standards.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-fleet-15w40",
  },
  {
    slug: "soil-fleet-10w30",
    name: "SOIL FLEET",
    category: "diesel-commercial",
    viscosity: "10W-30",
    image: "/oil-1.jpg",
    shortDescription:
      "Low-viscosity diesel oil optimized for fuel efficiency in modern fleets.",
    benefits: [
      "Improved fuel economy for fleet operators",
      "Cold-start protection for diesel engines",
      "Compatible with DPF and SCR systems",
      "Reduced maintenance costs",
    ],
    specs: [
      { label: "API Rating", value: "FA-4" },
      { label: "Viscosity Grade", value: "10W-30" },
      { label: "Pack Sizes", value: "4L, 20L, 208L" },
    ],
    usage:
      "For newer diesel engines with advanced after-treatment systems. Consult fleet manual for FA-4 compatibility.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-fleet-10w30",
  },
  {
    slug: "soil-hydraulic-aw-46",
    name: "SOIL HYDRAULIC AW",
    category: "industrial",
    viscosity: "AW 46",
    image: "/oil-2.jpg",
    shortDescription:
      "Anti-wear hydraulic oil for industrial machinery and mobile equipment.",
    benefits: [
      "Excellent anti-wear properties",
      "Oxidation and rust protection",
      "Wide operating temperature range",
      "Compatible with common seal materials",
    ],
    specs: [
      { label: "ISO VG", value: "46" },
      { label: "DIN", value: "51524 Part 2" },
      { label: "Pack Sizes", value: "20L, 208L" },
    ],
    usage:
      "For hydraulic systems in manufacturing, construction, and mobile equipment. Replace per equipment manufacturer schedule.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-hydraulic-aw-46",
  },
  {
    slug: "soil-gear-ep-220",
    name: "SOIL GEAR EP",
    category: "industrial",
    viscosity: "EP 220",
    image: "/oil-3.jpg",
    shortDescription:
      "Extreme pressure gear oil for industrial gearboxes and transmissions.",
    benefits: [
      "Extreme pressure load carrying capacity",
      "Prevents micropitting and scuffing",
      "Thermal and oxidation stability",
      "Extended gear life",
    ],
    specs: [
      { label: "ISO VG", value: "220" },
      { label: "AGMA", value: "5 EP" },
      { label: "Pack Sizes", value: "20L, 208L" },
    ],
    usage:
      "For enclosed industrial gear drives, bearings, and chain drives under moderate to heavy loads.",
    datasheetUrl: "#",
    msdsUrl: "#",
    shopUrl: "https://shop.soillubricants.com/products/soil-gear-ep-220",
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: ProductCategory) {
  return categories.find((c) => c.slug === slug);
}
