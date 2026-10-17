import categoryData from "./data/category.json";
import type { Category, CategorySlug, Photo } from "@/types/site";

export type { Category, CategorySlug, Photo } from "@/types/site";

const siteData = categoryData.site;

const typedSiteData = siteData as Omit<typeof siteData, "categories" | "photos"> & {
  categories: Category[];
  photos: Photo[];
};

export const {
  localPhotos,
  artist,
  navItems,
  heroSlides,
  categories,
  photos,
  gear,
  gearExtras,
  services,
  processSteps,
  stats,
  philosophy,
  aboutPage,
  servicesPage,
} = typedSiteData;

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const photosIn = (slug: string) => photos.filter((photo) => photo.category === slug);
