const companyPic = (file: string) =>
  `/company%20pic/${encodeURIComponent(file)}`;

export interface CompanyPage {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  paragraphs: string[];
  sections?: {
    title: string;
    image?: string;
    paragraphs: string[];
  }[];
}

export const companyPages: Record<string, CompanyPage> = {
  "ruc-odc": {
    slug: "ruc-odc",
    title: "RUC/ODC",
    tagline: "Leading competitiveness for sustainable growth",
    image: companyPic("A_massive_oil_refinery_illuminated_202606301647.jpeg"),
    paragraphs: [
      "S-OIL successfully completed state-of-the-art S-OIL New Complex (RUC & ODC) project, which is the largest in the history of domestic oil and petrochemicals industry, with an investment of 5 trillion won, and started commercial operations in November 2018.",
      "S-OIL New Complex consists of the Residue Upgrading Complex (RUC) and the Olefin Downstream Complex (ODC).",
    ],
    sections: [
      {
        title: "Residue Upgrading Complex (RUC)",
        paragraphs: [
          "Residue Upgrading Complex reprocesses residues from the crude oil refining process and converts them into high-value-added products such as gasoline and propylene.",
          "By upgrading residue streams that would otherwise have lower value, RUC strengthens S-OIL's refining competitiveness and supports long-term sustainable growth.",
        ],
      },
      {
        title: "Olefin Downstream Complex (ODC)",
        image: companyPic("Oil_refinery_illuminated_at_night_202606301647.jpeg"),
        paragraphs: [
          "Olefin Downstream Complex produces propylene oxide (PO) and polypropylene (PP) by injecting propylene produced from Residue Upgrading Complex. Propylene oxide is a raw material for polyurethane for automotive interior materials, electronic products, and insulation materials. Polypropylene is a type of plastic and is used for various purposes including automobile bumpers.",
          "S-OIL has expanded its business operations based on Olefin Downstream Complex, and has the ability to produce high-value-added high-tech materials that can be applied to automobiles, home appliances, information technology (IT) and biotechnology (BT).",
        ],
      },
    ],
  },
  "djsi-world": {
    slug: "djsi-world",
    title: "Listed in DJSI World Index",
    tagline: "15 consecutive years in Oil & Gas Industry",
    image: companyPic("ChatGPT Image Jun 30, 2026, 04_50_15 PM.png"),
    paragraphs: [
      "In 2024, S-OIL was selected as DJSI World company for 15 consecutive years. It is the first case among oil refinery in the Asia-Pacific Area. At the same time, S-OIL is the only company selected to DJSI World from all domestic oil refinery and petrochemical companies.",
      "DJSI makes its index by selecting only the top 10% companies with possibility of sustainable management through comprehensively evaluating economic feasibility, environment, socialness, and financial performance based on the top 2,500 companies from the world.",
    ],
    sections: [
      {
        title: "Global Sustainability Recognition",
        paragraphs: [
          "This assessment is carried out by the U.S. financial information company Dow Jones and Swiss Investment Evaluation Institute SAM. Being a part of this index means that S-OIL received outstanding evaluation for long-term competition.",
          "S-OIL was evaluated to establish and operate management system as a global leading company through Economy (financial performance, risk management, ethical management, and brand management), Environment (environment report, environment management system), and Society (human resource management, labor index, and corporate citizenship).",
        ],
      },
      {
        title: "Leap to Become a Global Energy Company",
        image: companyPic("A_massive_oil_refinery_illuminated_202606301647.jpeg"),
        paragraphs: [
          "Based on the clarity of management activity and outstanding management structure, the company was acknowledged for its effort and performance in fulfilling the core philosophy of management.",
          "S-OIL leads the business world with respect to competition and profitability, developing equipment and systems to maintain competitive superiority through safe factory operation and optimization of operating procedures.",
        ],
      },
    ],
  },
  "carbon-trust": {
    slug: "carbon-trust",
    title: "Carbon Trust Standard",
    tagline: "Environment-friendly production and energy reduction",
    image: companyPic("A_refinery_engineer_walking_alone_202606301644.jpeg"),
    paragraphs: [
      "S-OIL is committed to advanced effort for environment-friendly production and energy reduction, aligning operations with international standards for sustainable manufacturing.",
      "From an environmental perspective, the company is doing its best to save energy and reduce greenhouse gas by actively responding to environmental regulation that satisfies low-carbon green growth, the international development paradigm.",
    ],
    sections: [
      {
        title: "Energy Efficiency & Emissions Reduction",
        paragraphs: [
          "S-OIL is expanding its environment-friendly and high-value product production while developing a clear business management structure and social contribution activities.",
          "Through the Shaheen Project, S-OIL targets a 35% carbon emission reduction by 2035 and net zero by 2050, pushing operational excellence in an eco-friendly manner.",
        ],
      },
      {
        title: "Responsible Operations",
        image: companyPic("Oil_refinery_illuminated_at_night_202606301647.jpeg"),
        paragraphs: [
          "Safe factory operation and optimization of operating procedures allow quick and flexible response to changes in the management environment while maintaining environmental responsibility.",
          "Through the Haetsal Share Campaign, all executives and employees join together to help socially disadvantaged people and build a more harmonious society alongside environmental stewardship.",
        ],
      },
    ],
  },
  history: {
    slug: "history",
    title: "History of S-OIL",
    tagline: "Since the founding to the present",
    image: companyPic("A_breathtaking_aerial_drone_view_202606301645.jpeg"),
    paragraphs: [
      "S-OIL that it is today is the story of rising to the challenges, turning crisis into an opportunity and setting new growth heights after another. This resilience transformed S-OIL from a small refiner with only 90,000 b/d refining capacity back in 1976 into one of the most competitive and recognized refining and chemical companies armed with integrated, high-complexity refinery 47 years later.",
      "As much as our 47-year history was filled with growth and success driven by not only expanding our processing capacity but also our reach to the global market early on, S-OIL is now setting its eyes towards the future to deliver Vision 2035.",
    ],
    sections: [
      {
        title: "Key Milestones",
        paragraphs: [
          "1976 — S-OIL begins operations as a refiner with 90,000 b/d capacity, laying the foundation for decades of growth in Korea's energy sector.",
          "2018 — S-OIL New Complex (RUC & ODC) starts commercial operations, marking the largest investment in domestic oil and petrochemicals history.",
          "2024 — Selected for DJSI World Index for the 15th consecutive year, recognized as a global sustainability leader in the oil and gas industry.",
        ],
      },
      {
        title: "Vision for the Future",
        image: companyPic("A_large_crude_oil_tanker_202606301648.jpeg"),
        paragraphs: [
          "S-OIL is moving forward as a global and excellent energy company by demonstrating active leadership in providing new values while exceeding the responsibility and duty that must be maintained by a company.",
          "With Vision 2035, S-OIL aims to become The Most Competitive, Innovative and Trusted Energy & Chemical Company.",
        ],
      },
    ],
  },
};

export function getCompanyPage(slug: string) {
  return companyPages[slug];
}

export function getAllCompanyPageSlugs() {
  return Object.keys(companyPages);
}
