// Konsta Pulkkinen - Tapahtuma- ja juhlakuvaaja
// Muokkaa tätä tiedostoa päivittääksesi sisältöä

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
  { label: "Osaamiseni", href: "#osaamiseni" },
  { label: "Hinnasto", href: "#hinnasto" },
  { label: "Yhteystiedot", href: "#yhteystiedot" },
];

// Hero / Landing Content
export const heroContent = {
  name: "Konsta Pulkkinen",
  niche: "Tapahtuma- ja juhlakuvaaja",
  taglineRow1: "Aitoja hetkiä",
  taglineRow2: "Ikuisia muistoja",
  portfolioLinkText: "PORTFOLIO",
};

// Mini Portfolio Grid (9 images for landing 3x3)
export const miniPortfolioItems: PortfolioItem[] = [
  {
    id: "mini-1",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    category: "portraits",
    title: "Muotokuva 1",
  },
  {
    id: "mini-2",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    category: "events",
    title: "Tapahtuma 1",
  },
  {
    id: "mini-3",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    category: "events",
    title: "Juhla 1",
  },
  {
    id: "mini-4",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    category: "portraits",
    title: "Muotokuva 2",
  },
  {
    id: "mini-5",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    category: "events",
    title: "Tapahtuma 2",
  },
  {
    id: "mini-6",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    category: "creative",
    title: "Luova 1",
  },
  {
    id: "mini-7",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    category: "portraits",
    title: "Muotokuva 3",
  },
  {
    id: "mini-8",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    category: "commercial",
    title: "Kaupallinen 1",
  },
  {
    id: "mini-9",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    category: "portraits",
    title: "Muotokuva 4",
  },
];

// Portfolio Items (full portfolio page)
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    category: "portraits",
    title: "Muotokuva",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    category: "events",
    title: "Juhlat",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    category: "commercial",
    title: "Kaupallinen",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "portraits",
    title: "Hiljainen voima",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "events",
    title: "Kultaiset lupaukset",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "creative",
    title: "Liike",
  },
  {
    id: "7",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    category: "commercial",
    title: "Muoti",
  },
  {
    id: "8",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    category: "portraits",
    title: "Kauneus",
  },
  {
    id: "9",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    category: "events",
    title: "Ajattomat hetket",
  },
  {
    id: "10",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    category: "commercial",
    title: "Editoriaalinen",
  },
  {
    id: "11",
    imageUrl: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80",
    category: "creative",
    title: "Varjojen leikki",
  },
  {
    id: "12",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    category: "portraits",
    title: "Mietiskely",
  },
];

// Filter Categories
export const portfolioCategories = [
  { id: "all", label: "Kaikki" },
  { id: "portraits", label: "Muotokuvat" },
  { id: "events", label: "Tapahtumat" },
  { id: "commercial", label: "Kaupalliset" },
  { id: "creative", label: "Luovat" },
] as const;

// Pricing Packages
export const pricingPackages: PricingPackage[] = [
  {
    id: "essential",
    title: "Peruspaketti",
    price: "450 €",
    description: "Sopii henkilökuviin ja pieniin kuvauksiin",
    features: [
      "2 tunnin kuvaussessio",
      "1 kuvauspaikka",
      "25 muokattua kuvaa",
      "Verkkogalleria",
      "Tulostusvalmiit tiedostot",
    ],
  },
  {
    id: "professional",
    title: "Ammattipaketti",
    price: "950 €",
    description: "Ihanteellinen tapahtumiin ja kaupallisiin projekteihin",
    features: [
      "Koko päivän kuvaus (8 tuntia)",
      "Useita kuvauspaikkoja",
      "100+ muokattua kuvaa",
      "Verkkogalleria jakomahdollisuudella",
      "Korkearesoluutioiset tiedostot",
      "2 muokkauskierrosta",
      "Pikatoimitus",
    ],
    featured: true,
  },
  {
    id: "enterprise",
    title: "Premium-paketti",
    price: "2 400 €",
    description: "Kattava ratkaisu brändeille ja kampanjoille",
    features: [
      "Monipäiväinen kuvaus",
      "Rajattomat kuvauspaikat",
      "300+ muokattua kuvaa",
      "Yksityinen verkkogalleria",
      "Täysi kaupallinen lisenssi",
      "Rajattomat muokkaukset",
      "Ensisijainen tuki",
      "Toimitus viikon sisällä",
    ],
  },
];

// About Content
export const aboutContent = {
  heading: "Osaamiseni",
  photographer: {
    name: "Konsta Pulkkinen",
    role: "Tapahtuma- ja juhlakuvaaja",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    bio: `Yli kymmenen vuoden kokemuksella ikuistan elämän merkityksellisimmät hetket. Uskon, että jokaisen valokuvan tulee kertoa tarina — sellainen, joka koskettaa, inspiroi ja kestää aikaa.

Lähestymistapani perustuu pohjoismaisen minimalismiin: puhtaat sommitelmat, luonnollinen valo ja aidot tunteet. En vain ota kuvia; luon ajattomia visuaalisia tarinoita, jotka kunnioittavat sinun ainutlaatuista tarinaasi.

Intiimeistä muotokuvista suuriin juhliin, editoriaalista kampanjoista luoviin visioihin — tuon jokaiseen projektiin saman omistautumisen: horjumattoman sitoutumisen laatuun ja silmän näkemättömälle kauneudelle jokaisessa hetkessä.`,
  },
  stats: [
    { value: "500+", label: "Projektia" },
    { value: "12", label: "Vuotta kokemusta" },
    { value: "50+", label: "Yhteistyökumppania" },
  ],
};

// Contact Content
export const contactContent = {
  heading: "Otetaan yhteyttä",
  subheading: "Haluatko ikuistaa tärkeän hetken? Kerro projektistasi.",
  email: "konsta@pulkkinen.fi",
  phone: "+358 40 123 4567",
  location: "Helsinki",
  projectTypes: [
    "Muotokuvaus",
    "Häät ja juhlat",
    "Tapahtumakuvaus",
    "Kaupallinen projekti",
    "Brändikampanja",
    "Muu",
  ],
};

// Footer Content
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Konsta Pulkkinen. Kaikki oikeudet pidätetään.`,
  tagline: "Aitoja hetkiä, ikuisia muistoja",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
  ] as SocialLink[],
};
