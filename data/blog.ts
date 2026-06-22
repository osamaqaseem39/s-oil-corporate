export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: "engine-tips" | "maintenance" | "industry";
  date: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-right-motor-oil-viscosity",
    title: "How to Choose the Right Motor Oil Viscosity for Your Car",
    excerpt:
      "Understanding viscosity grades like 5W-30 and 10W-40 is essential for engine protection and fuel efficiency in Pakistan's climate.",
    image: "/blog-engine-tips.jpg",
    category: "engine-tips",
    date: "2026-05-15",
    readTime: "5 min read",
    content: [
      "Motor oil viscosity is one of the most important factors in engine protection. The numbers on the bottle — like 5W-30 — tell you how the oil flows at different temperatures.",
      "The first number (5W) indicates cold-start performance. Lower numbers mean better flow when you start your engine on a cold morning. The second number (30) indicates viscosity at operating temperature.",
      "For most modern cars in Pakistan, 5W-30 or 5W-40 synthetic oils are recommended. Older vehicles or those with high mileage may benefit from 10W-40 or 20W-50.",
      "Always check your owner's manual for the manufacturer's recommended viscosity grade. Using the wrong oil can reduce fuel efficiency and accelerate engine wear.",
    ],
  },
  {
    slug: "extend-engine-life-maintenance-tips",
    title: "10 Maintenance Tips to Extend Your Engine Life",
    excerpt:
      "Simple habits that protect your engine, improve performance, and save money on costly repairs over the long term.",
    image: "/blog-maintenance.jpg",
    category: "maintenance",
    date: "2026-05-01",
    readTime: "7 min read",
    content: [
      "Regular oil changes are the single most important maintenance task for any vehicle. Follow your manufacturer's recommended drain interval, or sooner if you drive in severe conditions.",
      "Check oil levels monthly using the dipstick. Low oil levels can cause catastrophic engine damage within minutes of driving.",
      "Replace air filters regularly. A clogged air filter reduces fuel efficiency and can allow contaminants into the engine.",
      "Use quality fuel and avoid running on empty. Sediment at the bottom of the fuel tank can clog injectors and damage the fuel pump.",
      "Warm up your engine briefly before driving aggressively, especially in cold weather. This allows oil to circulate to all critical components.",
    ],
  },
  {
    slug: "commercial-fleet-oil-management",
    title: "Fleet Oil Management: Reducing Costs for Commercial Operators",
    excerpt:
      "How fleet managers can optimize lubricant selection, drain intervals, and oil analysis to cut operating costs.",
    image: "/blog-fleet.jpg",
    category: "industry",
    date: "2026-04-20",
    readTime: "6 min read",
    content: [
      "For commercial fleet operators, lubricants represent a significant operating cost — but the right oil program can deliver substantial savings through reduced wear, fewer breakdowns, and improved fuel economy.",
      "Extended drain interval oils like API CK-4 rated products allow fleets to safely extend oil change intervals, reducing downtime and disposal costs.",
      "Oil analysis programs help fleet managers monitor engine health and optimize drain intervals based on actual condition rather than fixed schedules.",
      "Partnering with a reliable lubricant supplier ensures consistent product quality, technical support, and supply chain reliability across your fleet network.",
    ],
  },
  {
    slug: "motorcycle-oil-wet-clutch-guide",
    title: "Motorcycle Oil Guide: Why Wet Clutch Compatibility Matters",
    excerpt:
      "Using the wrong oil in your motorcycle can cause clutch slippage. Learn what JASO MA2 means and why it matters.",
    image: "/blog-motorcycle.jpg",
    category: "engine-tips",
    date: "2026-04-08",
    readTime: "4 min read",
    content: [
      "Most motorcycles use a wet clutch system where the clutch plates are bathed in engine oil. This means your motorcycle oil must be formulated differently from car engine oil.",
      "Car oils often contain friction modifiers that improve fuel economy but cause motorcycle clutches to slip. Motorcycle oils with JASO MA or MA2 certification are designed to prevent this.",
      "Look for JASO MA2 rated oils for modern 4-stroke motorcycles. For 2-stroke engines, use a dedicated 2T oil mixed at the ratio specified by your manufacturer.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [
  { slug: "engine-tips", label: "Engine Tips" },
  { slug: "maintenance", label: "Maintenance" },
  { slug: "industry", label: "Industry" },
] as const;
