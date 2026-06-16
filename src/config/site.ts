export const SITE_URL = "https://thelytmethod.com";

export const SITE = {
  name: "LYT",
  legalName: "LYT Health Management LLC",
  tagline: "Medicina seria. Cuidado familiar. En tu idioma.",
  defaultLocale: "es",
  locales: ["es", "en"] as const,
  email: "hola@thelytmethod.com",
  instagram: "https://instagram.com/thelytmethod",
};

export const CTA_URLS = {
  quiz: "#cuestionario",
  login: "#login",
  whatsapp: "https://wa.me/",
  instagram: SITE.instagram,
  community: "https://retomasivo.com",
};

export type Locale = (typeof SITE.locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}
