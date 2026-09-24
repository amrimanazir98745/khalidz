export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean;
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Brand Identity & Guidelines",
    description:
      "I craft complete brand systems — logos, color palettes, typography, and guidelines — that give your business a strong, recognizable identity across every touchpoint.",
    tags: ["Logo Design", "Visual Systems", "Brand Guidelines", "GCC Market"],
    images: [
      "/assets/images/khalid/portfolio/socal-restaurant.jpg",
      "/assets/images/khalid/portfolio/qatar-national-day.jpg",
    ],
    expanded: true,
  },
  {
    id: "service-2",
    title: "Social Media Design & Content",
    description:
      "Scroll-stopping social media visuals, content calendars, and campaign creatives tailored for Instagram, TikTok, LinkedIn, and regional platforms across the GCC.",
    tags: ["Campaign Creatives", "Content Planning", "Instagram", "Social Branding"],
    images: [
      "/assets/images/khalid/portfolio/almhd-healthcare.jpg",
      "/assets/images/khalid/portfolio/odai-restaurant-eid.jpg",
    ],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Event Graphics & Print Production",
    description:
      "Large-format event graphics, signage, backdrops, promotional banners, and CNC-cut fabrication files prepared with pixel-perfect print standards.",
    tags: ["Event Graphics", "Signage", "Print Production", "Large Format"],
    images: [
      "/assets/images/khalid/portfolio/khaz-sheikh-nomani.jpg",
      "/assets/images/khalid/portfolio/salam-academy.jpg",
    ],
    expanded: false,
  },
  {
    id: "service-4",
    title: "Academic & Multi-Channel Campaigns",
    description:
      "Strategic promotional campaigns for academic institutions, corporate events, and public sector initiatives with full bilingual Arabic–English fluency.",
    tags: ["Academic Branding", "Campaign Collateral", "Bilingual Design", "Ad Creatives"],
    images: [
      "/assets/images/khalid/portfolio/icst-it-diploma.jpg",
      "/assets/images/khalid/portfolio/icst-accounting-business.jpg",
    ],
    expanded: false,
  },
];
