export type CategorySlug = "portraits" | "landscapes" | "architecture" | "nature";

export type Category = {
  slug: CategorySlug;
  title: string;
  kicker: string;
  intro: string;
  cover: string;
};

export type Photo = {
  id: string;
  src: string;
  title: string;
  location: string;
  year: number;
  category: CategorySlug;
  settings: string;
};

import categoryData from "@/data/category.json";

/** Types derived from the reference and site data stored in category.json. */
export type CategoryData = typeof categoryData;
export type CommonData = CategoryData["common"];
export type ContactInfo = CommonData["contactInfo"];
export type FooterData = CommonData["Footer"];
export type Breadcrumbs = Omit<CommonData, "contactInfo" | "Footer">;
export type Breadcrumb = Breadcrumbs[keyof Breadcrumbs];
export type CategoriesData = CategoryData["categories"];
export type PhotographyCategory = CategoriesData["Photography"];
export type PhotographySections = PhotographyCategory["sections"];
export type PhotographySectionName = keyof PhotographySections;
export type PhotographySection<K extends PhotographySectionName> = PhotographySections[K];
export type PhotographyVariant<K extends PhotographySectionName> = PhotographySection<K>["variants"][keyof PhotographySection<K>["variants"]];
export type TemplateComponents = PhotographyCategory["templateComponents"];
export type PageName = keyof TemplateComponents["pages"];
export type PageComposition<K extends PageName = PageName> = TemplateComponents["pages"][K];
export type PageComponent = PageComposition["components"][number];
