export const company = {
  name: "S-OIL",
  legalName: "S-OIL Lubricants (Pvt.) Ltd.",
  tagline: "Engineered for Performance. Trusted Worldwide.",
  description:
    "S-OIL is a leading manufacturer of premium motor oils and industrial lubricants, delivering advanced protection and fuel efficiency for passenger cars, commercial fleets, and industrial applications across Pakistan and beyond.",
  mobileDescription:
    "Premium motor oils and industrial lubricants for cars, fleets, and industry — advanced protection and fuel efficiency across Pakistan and beyond.",
  founded: "1998",
  headquarters: "Industrial Zone, Karachi, Pakistan",
  employees: "500+",
  phone: "+92 300 1234567",
  email: "info@soillubricants.com",
  salesEmail: "sales@soillubricants.com",
  supportEmail: "support@soillubricants.com",
  whatsapp: "923001234567",
  address: "Plot 42, Industrial Zone, Port Qasim, Karachi, Pakistan",
  businessHours: "Monday – Friday: 9:00 AM – 6:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0!2d67.0!3d24.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1",
  shopUrl: "https://shop.soillubricants.com",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const companyFacts = [
  { label: "Founded", value: company.founded },
  { label: "Headquarters", value: "Karachi, Pakistan" },
  { label: "Team Members", value: company.employees },
  { label: "Cities Served", value: "50+" },
  { label: "Product Lines", value: "25+" },
  { label: "Fleet Partners", value: "1,000+" },
];

export const visionMission = {
  vision:
    "To be the most competitive, innovative and trusted energy & chemical company.",
  mission:
    "To deliver superior-quality lubricants that maximize engine life, improve fuel efficiency, and support sustainable industrial growth through innovation, integrity, and customer partnership.",
};

export const ceoWelcome = {
  title: "Welcome to S-OIL!",
  mobileSummary: [
    "Welcome to S-OIL — where 3,000+ employees and our stakeholders are building a trusted energy future together.",
    "From a small refiner in 1976 to a global refining leader, we are delivering Vision 2035: the most competitive, innovative and trusted energy & chemical company.",
    "Through the Shaheen Project, we pursue sustainable growth with 35% carbon reduction by 2035 and net zero by 2050.",
  ],
  leftColumn: [
    "It is with great pleasure that I welcome you to S-OIL website where you will find the amazing growth history of S-OIL and the future the more than 3,000 S-OIL employees are building together with all our stakeholders.",
    "S-OIL that it is today is the story of rising to the challenges, turning crisis into an opportunity and setting new growth heights after another. This resilience and the belief that humanity will keep progressing transformed S-OIL from a small refiner with only 90,000 b/d refining capacity back in 1976 into one of the most competitive and recognized refining and chemical companies armed with integrated, high-complexity refinery 47 years later.",
    "As much as our 47-year history was filled with growth and success driven by not only expanding our processing capacity but also our reach to the global market early on by constantly breaking the status quo S-OIL is now setting its eyes towards the future to deliver Vision 2035 of becoming The Most Competitive, Innovative and Trusted Energy & Chemical Company.",
  ],
  rightColumn: [
    "I am confident the future we envision will soon be a reality with Shaheen Project that we just embarked on to transform S-OIL from a pure refining company into a competitive refining and chemical company. This largest-ever investment project in the history of Korea's petrochemical industry will push S-OIL to another level with higher profitability, operational excellence, chemical expansion all in an eco-friendly manner with a 35% carbon emission reduction by 2035 and net zero by 2050.",
    "The growth coming out of it will be an economically sound and an environmentally sustainable one that adds greater value to customers, shareholders, business partners and all our stakeholders. And in so doing, we will go beyond being your trusted energy supplier to your true source of energy. Thank you very much.",
  ],
  signature: {
    title: "Representative Director & CEO",
    name: "Anwar A. Al-Hejazi",
  },
};

export const coreValues = [
  {
    title: "Innovation",
    description:
      "Continuous investment in R&D and additive technology to stay ahead of evolving engine standards.",
  },
  {
    title: "Integrity",
    description:
      "Transparent business practices, certified quality control, and honest partnerships with distributors and customers.",
  },
  {
    title: "Sustainability",
    description:
      "Energy-efficient manufacturing, waste reduction, and used-oil recycling programs across our operations.",
  },
  {
    title: "Customer Focus",
    description:
      "Technical support, training, and responsive service for motorists, fleets, and industrial clients.",
  },
];

const companyPic = (file: string) =>
  `/company%20pic/${encodeURIComponent(file)}`;

export const companyHighlights = [
  {
    slug: "ruc-odc",
    title: "RUC/ODC",
    subtitle: "Leading competitiveness for sustainable growth",
    description:
      "Innovative transition from oil to chemical through the S-OIL New Complex — the largest investment in domestic oil and petrochemicals history.",
    image: companyPic("A_massive_oil_refinery_illuminated_202606301647.jpeg"),
    href: "/company/ruc-odc",
  },
  {
    slug: "djsi-world",
    title: "Listed in DJSI World Index",
    subtitle: "15 consecutive years in Oil & Gas Industry",
    description:
      "The only domestic oil refinery and petrochemical company selected for DJSI World for 15 consecutive years.",
    image: companyPic("ChatGPT Image Jun 30, 2026, 04_50_15 PM.png"),
    href: "/company/djsi-world",
  },
  {
    slug: "carbon-trust",
    title: "Carbon Trust Standard",
    subtitle: "Environment-friendly production and energy reduction",
    description:
      "Committed to lowering carbon footprint through advanced production processes and energy management systems.",
    image: companyPic("A_refinery_engineer_walking_alone_202606301644.jpeg"),
    href: "/company/carbon-trust",
  },
  {
    slug: "history",
    title: "History of S-OIL",
    subtitle: "Since the founding to the present",
    description:
      "From a regional blending facility to a nationally recognized lubricants brand serving Pakistan and export markets.",
    image: companyPic("A_breathtaking_aerial_drone_view_202606301645.jpeg"),
    href: "/company/history",
  },
];

export const businessUnits = [
  {
    name: "Oil Refining Business",
    capacity: "669,000",
    unit: "B/D",
    metricLabel: "Daily Production Capacity for Refined Oil",
    image: "/s-oil.jpg",
  },
  {
    name: "Lube Oil Business",
    capacity: "44,700",
    unit: "B/D",
    metricLabel: "Daily Production Capacity for Lube Base Oil",
    image: "/blog-maintenance.jpg",
  },
  {
    name: "Petrochemical Business",
    capacity: "1,850,000",
    unit: "t",
    metricLabel: "Annual Production Capacity for Para-Xylene",
    image: "/oil-1.jpg",
  },
  {
    name: "Olefin Business",
    capacity: "705,000",
    unit: "t",
    metricLabel: "Annual Production Capacity for Olefin Downstream Product",
    subMetrics: ["PP 405,000 t", "PO 300,000 t"],
    image: "/oil-2.jpg",
  },
];

export const companyHistory = [
  {
    year: "1998",
    title: "Company Founded",
    description:
      "S-OIL established its first lubricant blending facility in Karachi, serving local automotive and industrial markets.",
  },
  {
    year: "2005",
    title: "National Expansion",
    description:
      "Expanded distribution network across major cities including Lahore, Islamabad, Faisalabad, and Peshawar.",
  },
  {
    year: "2012",
    title: "SEVEN Brand Launch",
    description:
      "Introduced the SEVEN premium motor oil line for passenger cars and motorcycles with API-certified formulations.",
  },
  {
    year: "2018",
    title: "Fleet & Industrial Growth",
    description:
      "Launched dedicated commercial fleet lubricants and industrial hydraulic oils for manufacturing sectors.",
  },
  {
    year: "2023",
    title: "Export & Sustainability",
    description:
      "Began GCC export partnerships and implemented green manufacturing and used-oil recycling initiatives.",
  },
];

export const departments = [
  {
    name: "Sales & Distribution",
    email: "sales@soillubricants.com",
    phone: "+92 300 1234567",
  },
  {
    name: "Technical Support",
    email: "support@soillubricants.com",
    phone: "+92 300 1234568",
  },
  {
    name: "Partnerships",
    email: "partners@soillubricants.com",
    phone: "+92 300 1234569",
  },
];

export const keyStats = [
  { value: "25+", label: "Premium Products" },
  { value: "50+", label: "Cities Served" },
  { value: "25+", label: "Years of Excellence" },
  { value: "1000+", label: "Fleet Partners" },
];

export const certifications = [
  { name: "API Certified", description: "American Petroleum Institute standards" },
  { name: "ISO 9001", description: "Quality management systems" },
  { name: "ISO 14001", description: "Environmental management" },
  { name: "OEM Approved", description: "Approved by leading vehicle manufacturers" },
];

export const presence = [
  { region: "Pakistan", detail: "Nationwide distribution across 50+ cities" },
  { region: "Middle East", detail: "Growing export network in GCC countries" },
  { region: "Africa", detail: "Strategic partnerships in East Africa" },
  { region: "South Asia", detail: "Regional supply hub for neighboring markets" },
];

export const whyChooseUs = [
  {
    title: "Advanced Engine Protection",
    description:
      "Proprietary additive technology forms a protective molecular layer that reduces wear and extends engine life.",
    icon: "shield",
  },
  {
    title: "Fuel Efficiency",
    description:
      "Low-friction formulations help reduce fuel consumption and lower emissions without compromising performance.",
    icon: "fuel",
  },
  {
    title: "Proven Performance",
    description:
      "Laboratory tested and field proven across extreme temperatures, heavy loads, and demanding driving conditions.",
    icon: "performance",
  },
  {
    title: "Global Standards",
    description:
      "Manufactured to API, ACEA, and OEM specifications with rigorous quality control at every stage.",
    icon: "globe",
  },
];

export const technologyFeatures = [
  {
    title: "Molecular Shield Technology",
    description:
      "Our patented additive package creates a durable protective film on metal surfaces, preventing metal-to-metal contact even under extreme pressure.",
  },
  {
    title: "Thermal Stability",
    description:
      "Engineered to maintain viscosity and performance across temperature ranges from -30°C to 40°C, ideal for Pakistan's diverse climate.",
  },
  {
    title: "Deposit Control",
    description:
      "Advanced detergents keep engines clean by preventing sludge, varnish, and harmful deposit buildup over extended drain intervals.",
  },
  {
    title: "Fuel Economy Formulation",
    description:
      "Reduced internal friction translates to measurable fuel savings — up to 3% improvement in real-world driving conditions.",
  },
];

export const partnerBenefits = [
  "Exclusive territory rights for qualified distributors",
  "Competitive margins and volume-based incentives",
  "Marketing support and co-branded promotional materials",
  "Technical training for sales and service teams",
  "Dedicated account manager and 24/7 support",
  "Fast logistics and reliable supply chain",
];

export const jobOpenings = [
  {
    title: "Sales Executive – Lahore",
    department: "Sales",
    type: "Full-time",
    location: "Lahore, Pakistan",
  },
  {
    title: "Production Engineer",
    department: "Operations",
    type: "Full-time",
    location: "Karachi, Pakistan",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Karachi, Pakistan",
  },
];

export const csrInitiatives = [
  {
    title: "Green Manufacturing",
    description:
      "Investing in energy-efficient production and waste reduction programs at our manufacturing facilities.",
  },
  {
    title: "Community Education",
    description:
      "Free vehicle maintenance workshops for commercial drivers and fleet operators across Pakistan.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Used oil collection and recycling programs in partnership with local environmental organizations.",
  },
];
