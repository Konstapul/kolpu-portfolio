// Konsta Pulkkinen - Tapahtuma- ja juhlakuvaaja
// Muokkaa tätä tiedostoa päivittääksesi sisältöä

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  category: "juhlat" | "tapahtumat";
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
  { label: "Portfolio", href: "/portfolio" }, // Special case: handled by PortfolioContext
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
// Layout: Top row (1-3), Middle row (4-6), Bottom row (7-9)
export const miniPortfolioItems: PortfolioItem[] = [
  {
    id: "mini-1",
    imageUrl: "/images/portfolio/juhlat/kansi1.JPG",
    category: "juhlat",
    title: "Juhla 1",
  },
  {
    id: "mini-2",
    imageUrl: "/images/portfolio/juhlat/kansi2.JPG",
    category: "juhlat",
    title: "Juhla 2",
  },
  {
    id: "mini-3",
    imageUrl: "/images/portfolio/juhlat/kansi3.JPG",
    category: "juhlat",
    title: "Juhla 3",
  },
  {
    id: "mini-4",
    imageUrl: "/images/portfolio/juhlat/kansi4.JPG",
    category: "juhlat",
    title: "Juhla 4",
  },
  {
    id: "mini-5",
    imageUrl: "/images/portfolio/juhlat/kansi5.JPG",
    category: "juhlat",
    title: "Juhla 5",
  },
  {
    id: "mini-6",
    imageUrl: "/images/portfolio/juhlat/kansi6.JPG",
    category: "juhlat",
    title: "Juhla 6",
  },
  {
    id: "mini-7",
    imageUrl: "/images/portfolio/juhlat/kansi7.JPG",
    category: "juhlat",
    title: "Juhla 7",
  },
  {
    id: "mini-8",
    imageUrl: "/images/portfolio/juhlat/kansi8.JPG",
    category: "juhlat",
    title: "Juhla 8",
  },
  {
    id: "mini-9",
    imageUrl: "/images/portfolio/juhlat/kansi9.JPG",
    category: "juhlat",
    title: "Juhla 9",
  },
];

// Portfolio Items (full portfolio page)
// Your actual portfolio images - update titles as needed
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    imageUrl: "/images/portfolio/juhlat/IMG_4429a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "2",
    imageUrl: "/images/portfolio/juhlat/IMG_5176.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "3",
    imageUrl: "/images/portfolio/juhlat/IMG_5411a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "4",
    imageUrl: "/images/portfolio/juhlat/IMG_5737.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "5",
    imageUrl: "/images/portfolio/juhlat/IMG_5752.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "6",
    imageUrl: "/images/portfolio/juhlat/IMG_6494b.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "7",
    imageUrl: "/images/portfolio/juhlat/IMG_8459a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "8",
    imageUrl: "/images/portfolio/juhlat/IMG_8481a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "9",
    imageUrl: "/images/portfolio/juhlat/IMG_8899a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "10",
    imageUrl: "/images/portfolio/juhlat/IMG_8919a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "11",
    imageUrl: "/images/portfolio/juhlat/IMG_9216a.JPG",
    category: "juhlat",
    title: "Juhla",
  },
  {
    id: "12",
    imageUrl: "/images/portfolio/juhlat/IMG_9289.JPG",
    category: "juhlat",
    title: "Juhla",
  },
];

// Filter Categories
export const portfolioCategories = [
  { id: "all", label: "Kaikki" },
  { id: "juhlat", label: "Juhlat" },
  { id: "tapahtumat", label: "Tapahtumat" },
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
