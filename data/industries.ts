export const industries = [
  {
    slug: "automotive",
    name: "Automotive & Transportation",
    description:
      "Premium motor oils and transmission fluids for passenger cars, SUVs, light commercial vehicles, and fleet operators.",
    applications: [
      "Passenger car engines",
      "Taxi and ride-share fleets",
      "Light commercial vans",
      "Automatic transmission systems",
    ],
    products: ["Passenger Car Motor Oil", "ATF Fluids"],
    image: "/blog-engine-tips.jpg",
  },
  {
    slug: "commercial-fleet",
    name: "Commercial Fleet & Logistics",
    description:
      "Heavy-duty diesel oils engineered for trucks, buses, and long-haul fleets operating in demanding conditions.",
    applications: [
      "Long-haul trucking",
      "City bus fleets",
      "Delivery and logistics",
      "Cold-chain transport",
    ],
    products: ["Diesel / Commercial Oils"],
    image: "/blog-fleet.jpg",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    description:
      "Industrial lubricants for factories, processing plants, and production lines requiring reliable machinery protection.",
    applications: [
      "Hydraulic systems",
      "Gearboxes and compressors",
      "Bearing lubrication",
      "Metal processing equipment",
    ],
    products: ["Industrial Lubricants", "Hydraulic Oils", "Gear Oils"],
    image: "/s-oil.jpg",
  },
  {
    slug: "construction",
    name: "Construction & Mining",
    description:
      "Robust lubricant solutions for excavators, loaders, generators, and heavy equipment in harsh job-site environments.",
    applications: [
      "Earth-moving equipment",
      "Concrete mixers and pumps",
      "Portable generators",
      "Mining haul trucks",
    ],
    products: ["Diesel / Commercial Oils", "Industrial Lubricants"],
    image: "/product-5.jpg",
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    description:
      "Specialty oils for diesel generators, turbines, and backup power systems critical to industrial and commercial operations.",
    applications: [
      "Standby generators",
      "Industrial power plants",
      "Oil and gas facilities",
      "Telecom tower backup units",
    ],
    products: ["Diesel Engine Oils", "Turbine Oils"],
    image: "/product-4.jpg",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle & Powersports",
    description:
      "High-performance 2-stroke and 4-stroke oils for motorcycles, scooters, and small engine applications across Pakistan.",
    applications: [
      "Commuter motorcycles",
      "Sport bikes",
      "Scooters and mopeds",
      "Small engine equipment",
    ],
    products: ["Motorcycle Oil"],
    image: "/blog-motorcycle.jpg",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
