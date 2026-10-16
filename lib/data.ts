// Central content for the whole site. Edit copy, photos and prices here.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Generated artwork that ships with the project (public/images)
export const localPhotos = {
  alpineLake: "/images/alpine-lake-golden-hour.png",
  stormRuins: "/images/storm-ruins.png",
  mistyMountains: "/images/misty-mountains.png",
};

export const artist = {
  name: "Elena Rostova",
  tagline: "Fine Art & Editorial",
  avatar: u("1534528741775-53994a69daeb", 400),
  email: "hello@example.com",
  location: "Based in Zürich · Available worldwide",
};

export const navItems = [
  { href: "/", label: "Home", icon: "✧" },
  { href: "/portfolio", label: "Portfolio Gallery", icon: "▦" },
  { href: "/gear", label: "Gear & Lenses", icon: "◎" },
  { href: "/about", label: "About Me", icon: "♙" },
  { href: "/services", label: "Services & Pricing", icon: "☷" },
  { href: "/booking", label: "Book a Session", icon: "➤" },
];

export const heroSlides = [
  { src: localPhotos.alpineLake, alt: "Alpine lake at golden hour", label: "Alpine Lake at Golden Hour" },
  { src: u("1470770841072-f978cf4d019e", 2200), alt: "Mountain lake at dawn", label: "Mountain Lake" },
  { src: localPhotos.stormRuins, alt: "Ancient ruins beneath a storm", label: "Storm Over the Ruins" },
  { src: u("1500530855697-b586d89ba3ee", 2200), alt: "Travel landscape", label: "Wander" },
  { src: u("1518837695005-2083093ee35b", 2200), alt: "Ocean wave", label: "Ocean" },
];

export type CategorySlug = "portraits" | "landscapes" | "architecture" | "nature";

export type Category = {
  slug: CategorySlug;
  title: string;
  kicker: string;
  intro: string;
  cover: string;
};

export const categories: Category[] = [
  {
    slug: "portraits",
    title: "Portraits",
    kicker: "People & Emotions",
    intro: "Quiet, honest portraits made with natural light and a lot of patience — the moment just before or after the pose.",
    cover: u("1534528741775-53994a69daeb", 1000),
  },
  {
    slug: "landscapes",
    title: "Landscapes",
    kicker: "Wander & Discover",
    intro: "Mountains, lakes and weather at the edges of the day. Long walks, early alarms and waiting for light.",
    cover: u("1464822759023-fed622ff2c3b", 1000),
  },
  {
    slug: "architecture",
    title: "Architecture",
    kicker: "Form & Perspective",
    intro: "Lines, shadow and geometry — buildings treated as sculpture, stripped back to shape and light.",
    cover: u("1511818966892-d7d671e672a2", 1000),
  },
  {
    slug: "nature",
    title: "Nature",
    kicker: "Small Wonders",
    intro: "Forests, leaves and small living details that ask you to slow down and look a little closer.",
    cover: u("1470058869958-2a77ade41c02", 1000),
  },
];

export type Photo = {
  id: string;
  src: string;
  title: string;
  location: string;
  year: number;
  category: CategorySlug;
  settings: string;
};

export const photos: Photo[] = [
  { id: "p1", src: u("1534528741775-53994a69daeb"), title: "Golden Gaze", location: "Lisbon, Portugal", year: 2025, category: "portraits", settings: "85mm · f/1.8 · 1/500s · ISO 100" },
  { id: "p2", src: u("1494790108377-be9c29b29330"), title: "Soft Morning", location: "Paris, France", year: 2024, category: "portraits", settings: "50mm · f/2 · 1/320s · ISO 200" },
  { id: "p3", src: u("1507003211169-0a1dd7228f2d"), title: "The Architect", location: "Berlin, Germany", year: 2024, category: "portraits", settings: "85mm · f/2.2 · 1/250s · ISO 160" },
  { id: "p4", src: u("1438761681033-6461ffad8d80"), title: "Window Light", location: "Vienna, Austria", year: 2023, category: "portraits", settings: "50mm · f/1.4 · 1/200s · ISO 400" },
  { id: "p5", src: u("1524504388940-b1c1722653e1"), title: "Between Frames", location: "Milan, Italy", year: 2025, category: "portraits", settings: "105mm · f/2.8 · 1/400s · ISO 100" },
  { id: "p6", src: u("1506794778202-cad84cf45f1d"), title: "Still", location: "Copenhagen, Denmark", year: 2022, category: "portraits", settings: "85mm · f/1.8 · 1/160s · ISO 320" },

  { id: "l1", src: localPhotos.alpineLake, title: "Alpine Lake at Golden Hour", location: "Bernese Alps, Switzerland", year: 2026, category: "landscapes", settings: "24mm · f/11 · 1/60s · ISO 64" },
  { id: "l2", src: localPhotos.mistyMountains, title: "White Silence", location: "Dolomites, Italy", year: 2025, category: "landscapes", settings: "70mm · f/8 · 1/250s · ISO 100" },
  { id: "l3", src: localPhotos.stormRuins, title: "Storm Over the Ruins", location: "Peloponnese, Greece", year: 2025, category: "landscapes", settings: "16mm · f/8 · 4s · ISO 100" },
  { id: "l4", src: u("1464822759023-fed622ff2c3b"), title: "Summit Light", location: "Patagonia, Chile", year: 2024, category: "landscapes", settings: "35mm · f/9 · 1/200s · ISO 100" },
  { id: "l5", src: u("1506905925346-21bda4d32df4"), title: "Above the Clouds", location: "Madeira, Portugal", year: 2023, category: "landscapes", settings: "24mm · f/10 · 1/125s · ISO 100" },
  { id: "l6", src: u("1501785888041-af3ef285b470"), title: "Glass Water", location: "Lake Bled, Slovenia", year: 2024, category: "landscapes", settings: "24mm · f/11 · 1/30s · ISO 64" },
  { id: "l7", src: u("1519681393784-d120267933ba"), title: "Starlit Ridge", location: "Banff, Canada", year: 2022, category: "landscapes", settings: "14mm · f/2.8 · 20s · ISO 3200" },
  { id: "l8", src: u("1469474968028-56623f02e42e"), title: "Last Rays", location: "Tuscany, Italy", year: 2023, category: "landscapes", settings: "50mm · f/8 · 1/320s · ISO 100" },

  { id: "a1", src: u("1511818966892-d7d671e672a2"), title: "Curved Silence", location: "Valencia, Spain", year: 2025, category: "architecture", settings: "24mm · f/8 · 1/500s · ISO 100" },
  { id: "a2", src: u("1486325212027-8081e485255e"), title: "Vertical City", location: "Hong Kong", year: 2024, category: "architecture", settings: "16mm · f/11 · 1/250s · ISO 200" },
  { id: "a3", src: u("1487958449943-2429e8be8625"), title: "White Geometry", location: "Lisbon, Portugal", year: 2023, category: "architecture", settings: "35mm · f/8 · 1/640s · ISO 100" },
  { id: "a4", src: u("1449157291145-7efd050a4d0e"), title: "Steel & Sky", location: "Chicago, USA", year: 2022, category: "architecture", settings: "24mm · f/9 · 1/400s · ISO 100" },
  { id: "a5", src: u("1480714378408-67cf0d13bc1b"), title: "Night Grid", location: "New York, USA", year: 2024, category: "architecture", settings: "35mm · f/5.6 · 2s · ISO 200" },

  { id: "n1", src: u("1470058869958-2a77ade41c02"), title: "Green Hour", location: "Black Forest, Germany", year: 2025, category: "nature", settings: "100mm macro · f/4 · 1/160s · ISO 400" },
  { id: "n2", src: u("1472396961693-142e6e269027"), title: "Morning Visitor", location: "Scottish Highlands", year: 2024, category: "nature", settings: "400mm · f/5.6 · 1/1000s · ISO 800" },
  { id: "n3", src: u("1447752875215-b2761acb3c5d"), title: "Forest Path", location: "Hoh Rainforest, USA", year: 2023, category: "nature", settings: "24mm · f/8 · 1/15s · ISO 200" },
  { id: "n4", src: u("1441974231531-c6227db76b6e"), title: "Cathedral of Trees", location: "Bavaria, Germany", year: 2024, category: "nature", settings: "35mm · f/9 · 1/60s · ISO 200" },
  { id: "n5", src: u("1490750967868-88aa4486c946"), title: "Petals", location: "Kyoto, Japan", year: 2022, category: "nature", settings: "100mm macro · f/3.5 · 1/250s · ISO 200" },
  { id: "n6", src: u("1433086966358-54859d0ed716"), title: "Falling Water", location: "Iceland", year: 2023, category: "nature", settings: "24mm · f/16 · 1s · ISO 50" },
];

export const gear = [
  {
    group: "Camera Bodies",
    items: [
      { name: "Sony α7R V", note: "61MP full-frame — landscapes & fine art prints", image: u("1516035069371-29a1b244cc32", 900) },
      { name: "Fujifilm X100VI", note: "Everyday street & travel companion", image: u("1502920917128-1aa500764cbd", 900) },
    ],
  },
  {
    group: "Lenses",
    items: [
      { name: "FE 85mm f/1.4 GM II", note: "Portrait workhorse, creamy fall-off", image: u("1510127034890-ba27508e9f1c", 900) },
      { name: "FE 24-70mm f/2.8 GM II", note: "Editorial & commissioned work", image: u("1452587925148-ce544e77e70d", 900) },
    ],
  },
];

export const gearExtras = [
  { label: "FE 16-35mm f/2.8 GM", kind: "Lens" },
  { label: "FE 100-400mm GM", kind: "Lens" },
  { label: "Gitzo Systematic Tripod", kind: "Support" },
  { label: "NiSi V7 Filter Kit", kind: "Filters" },
  { label: "Profoto B10X Plus", kind: "Lighting" },
  { label: "Lightroom Classic + Capture One", kind: "Editing" },
];

export const services = [
  {
    name: "Portrait Session",
    price: "450",
    unit: "per session",
    description: "A relaxed, natural-light portrait session for individuals, couples or creatives.",
    features: ["2 hours on location", "1 outfit change", "25 retouched images", "Private online gallery"],
    featured: false,
  },
  {
    name: "Editorial & Brand",
    price: "1,200",
    unit: "half day",
    description: "Story-driven imagery for magazines, brands, campaigns and websites.",
    features: ["4 hours, up to 2 locations", "Creative direction & moodboard", "60 retouched images", "Commercial usage licence"],
    featured: true,
  },
  {
    name: "Fine Art Prints",
    price: "180",
    unit: "from",
    description: "Museum-grade archival prints of the landscape and nature collections.",
    features: ["Hahnemühle cotton rag paper", "Signed & numbered editions", "Sizes from 30×40 to 100×150 cm", "Worldwide shipping"],
    featured: false,
  },
];

export const processSteps = [
  { n: "01", title: "Hello", text: "Tell me about your idea, date and location." },
  { n: "02", title: "Plan", text: "We shape a moodboard, timing and light together." },
  { n: "03", title: "Shoot", text: "A calm, unhurried session — no stiff posing." },
  { n: "04", title: "Deliver", text: "A curated, hand-edited gallery within 2 weeks." },
];

export const stats = [
  { icon: "✳", value: "08", label: "Years Behind the Lens" },
  { icon: "◎", value: "25", label: "Countries Explored" },
  { icon: "♡", value: "500", label: "Moments Captured" },
];

export const philosophy = [
  { n: "I.", title: "Light first", text: "I plan every image around light — the hour, the weather, the window. Light tells the story; I just frame it." },
  { n: "II.", title: "Honesty over perfection", text: "I'd rather keep the wind in your hair than a flawless pose. Real moments age better than perfect ones." },
  { n: "III.", title: "Slow seeing", text: "Fewer frames, more attention. Waiting is part of the craft — for a glance, a break in the clouds, a quiet second." },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const photosIn = (slug: CategorySlug) => photos.filter((p) => p.category === slug);

// About page — short copy, image-led
export const aboutPage = {
  heroSlides: [
    { src: localPhotos.alpineLake, label: "Bernese Alps" },
    { src: u("1501555088652-021faa106b9b", 2000), label: "On the trail" },
    { src: localPhotos.mistyMountains, label: "Dolomites" },
    { src: localPhotos.stormRuins, label: "Peloponnese" },
  ],
  collage: {
    portrait: u("1534528741775-53994a69daeb", 1000),
    peak: u("1454496522488-7a8e488e8606", 800),
    camera: u("1495121553079-4c61bcce1894", 900),
    lake: u("1586348943529-beaae6c28db9", 1000),
  },
  quote: ["I don't just take pictures.", "I preserve feelings."],
  chapters: [
    { n: "01.", title: "Explore", text: "Chasing light to the quiet edges of the map.", src: u("1501555088652-021faa106b9b", 1000) },
    { n: "02.", title: "Feel", text: "Waiting for the moment that says everything.", src: u("1508672019048-805c876b67e2", 1000) },
    { n: "03.", title: "Create", text: "Shaping honest frames that last a lifetime.", src: u("1439853949127-fa647821eba0", 1000) },
  ],
};
