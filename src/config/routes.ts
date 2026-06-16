import type { Locale } from "./site";

export const ROUTES = {
  es: {
    home: "/es",
    catalog: "/es/catalogo",
    howItWorks: "/es/como-funciona",
    glp1: "/es/products/tirzepatide",
    tirzepatide: "/es/products/tirzepatide",
    semaglutide: "/es/products/semaglutide",
    nad: "/es/products/nad",
    sermorelin: "/es/products/sermorelin",
    glutathione: "/es/products/glutathione",
    vitaminD3: "/es/products/vitamin-d3",
    vitaminB12: "/es/products/vitamin-b12",
    termsOfUse: "/es/terms-of-use",
    privacyPolicy: "/es/privacy-policy",
    noticeOfPrivacyPractices: "/es/notice-of-privacy-practices",
    safetyInformation: "/es/safety-information",
    termsAndConditions: "/es/terms-and-conditions",
    terms: "/es/legal/terminos-y-condiciones",
    privacy: "/es/legal/privacidad",
    telehealthConsent: "/es/legal/consentimiento-telesalud",
  },
  en: {
    home: "/en",
    catalog: "/en/catalog",
    howItWorks: "/en/how-it-works",
    glp1: "/en/products/tirzepatide",
    tirzepatide: "/en/products/tirzepatide",
    semaglutide: "/en/products/semaglutide",
    nad: "/en/products/nad",
    sermorelin: "/en/products/sermorelin",
    glutathione: "/en/products/glutathione",
    vitaminD3: "/en/products/vitamin-d3",
    vitaminB12: "/en/products/vitamin-b12",
    termsOfUse: "/en/terms-of-use",
    privacyPolicy: "/en/privacy-policy",
    noticeOfPrivacyPractices: "/en/notice-of-privacy-practices",
    safetyInformation: "/en/safety-information",
    termsAndConditions: "/en/terms-and-conditions",
    terms: "/en/legal/terms-and-conditions",
    privacy: "/en/legal/privacy",
    telehealthConsent: "/en/legal/telehealth-consent",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function localizedRoute(locale: Locale, key: keyof typeof ROUTES.es) {
  return ROUTES[locale][key];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function alternateRouteForPath(locale: Locale, currentPath: string) {
  const targetLocale = alternateLocale(locale);
  const normalizedPath = currentPath.replace(/\/$/, "") || ROUTES[locale].home;

  for (const [key, route] of Object.entries(ROUTES[locale])) {
    if (normalizedPath === route.replace(/\/$/, "")) {
      const routeKey = key as keyof typeof ROUTES.es;
      return ROUTES[targetLocale][routeKey] ?? ROUTES[targetLocale].home;
    }
  }

  const localePrefix = `/${locale}`;
  if (normalizedPath === localePrefix) return ROUTES[targetLocale].home;
  if (normalizedPath.startsWith(`${localePrefix}/`)) {
    return `/${targetLocale}${normalizedPath.slice(localePrefix.length)}`;
  }

  return ROUTES[targetLocale].home;
}
