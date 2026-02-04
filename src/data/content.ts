// Kolpu Photography - Content Data
// Edit this file to update all dynamic content across the website

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  category: "portraits" | "events" | "commercial" | "creative";
  title: string;
  description?: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

// Navigation Links
export const navigationLinks: NavigationLink[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Hero Content
export const heroContent = {
  heading: "Capturing the Unseen",
  subheading: "Editorial photography that tells your story with elegance and authenticity",
  ctaText: "View Portfolio",
  ctaHref: "#portfolio",
};

// Portfolio Items
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    category: "portraits",
    title: "Ethereal Light",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    category: "events",
    title: "Midnight Celebration",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    category: "commercial",
    title: "Urban Essence",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "portraits",
    title: "Silent Strength",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "events",
    title: "Golden Vows",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "creative",
    title: "Fluid Motion",
  },
  {
    id: "7",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    category: "commercial",
    title: "Haute Couture",
  },
  {
    id: "8",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    category: "portraits",
    title: "Raw Beauty",
  },
  {
    id: "9",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    category: "events",
    title: "Timeless Moments",
  },
  {
    id: "10",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    category: "commercial",
    title: "Editorial Grace",
  },
  {
    id: "11",
    imageUrl: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80",
    category: "creative",
    title: "Shadow Play",
  },
  {
    id: "12",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    category: "portraits",
    title: "Contemplation",
  },
];

// Filter Categories
export const portfolioCategories = [
  { id: "all", label: "All" },
  { id: "portraits", label: "Portraits" },
  { id: "events", label: "Events" },
  { id: "commercial", label: "Commercial" },
  { id: "creative", label: "Creative" },
] as const;

// Pricing Packages
export const pricingPackages: PricingPackage[] = [
  {
    id: "essential",
    title: "The Essential",
    price: "$450",
    description: "Perfect for personal portraits and small sessions",
    features: [
      "2-hour photo session",
      "1 location",
      "25 edited photographs",
      "Online gallery",
      "Print-ready files",
    ],
  },
  {
    id: "professional",
    title: "The Professional",
    price: "$950",
    description: "Ideal for events and commercial projects",
    features: [
      "Full-day coverage (8 hours)",
      "Multiple locations",
      "100+ edited photographs",
      "Online gallery with sharing",
      "Print-ready high-res files",
      "2 rounds of revisions",
      "Express delivery",
    ],
    featured: true,
  },
  {
    id: "enterprise",
    title: "The Enterprise",
    price: "$2,400",
    description: "Comprehensive solution for brands and campaigns",
    features: [
      "Multi-day coverage",
      "Unlimited locations",
      "300+ edited photographs",
      "Private online gallery",
      "Full commercial license",
      "Unlimited revisions",
      "Priority support",
      "Same-week delivery",
    ],
  },
];

// About Content
export const aboutContent = {
  heading: "The Story Behind the Lens",
  photographer: {
    name: "Alexandra Kolpu",
    role: "Founder & Lead Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    bio: `With over a decade of experience capturing life's most meaningful moments, I believe that every photograph should tell a story—one that resonates, inspires, and endures.

My approach is rooted in Nordic minimalism: clean compositions, natural light, and authentic emotions. I don't just take photos; I create timeless visual narratives that honor your unique story.

From intimate portraits to grand celebrations, from editorial campaigns to creative visions, I bring the same dedication to every project: an unwavering commitment to excellence and an eye for the unseen beauty in every moment.`,
  },
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "12", label: "Years Experience" },
    { value: "50+", label: "Brand Partners" },
  ],
};

// Contact Content
export const contactContent = {
  heading: "Let's Create Together",
  subheading: "Ready to bring your vision to life? Tell me about your project.",
  email: "hello@kolpu.studio",
  phone: "+1 (555) 123-4567",
  location: "New York City",
  projectTypes: [
    "Portrait Session",
    "Wedding & Events",
    "Commercial Project",
    "Creative Direction",
    "Brand Campaign",
    "Other",
  ],
};

// Footer Content
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Kolpu. All rights reserved.`,
  tagline: "Capturing the Unseen",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Pinterest", url: "https://pinterest.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
  ] as SocialLink[],
};
