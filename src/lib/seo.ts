import { ROUTES } from "@/config/routes";
import { SITE, SITE_URL, type Locale } from "@/config/site";

export function localizedAlternates(esPath: string, enPath: string) {
  return [
    { lang: "es", href: esPath },
    { lang: "en", href: enPath },
  ];
}

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    email: SITE.email,
    areaServed: locale === "es" ? "Estados Unidos" : "United States",
    medicalSpecialty: ["Telehealth", "Metabolic health", "Weight care"],
    sameAs: [SITE.instagram],
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbsSchema(locale: Locale, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "LYT", path: ROUTES[locale].home },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}
