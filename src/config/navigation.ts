import { CTA_URLS, type Locale } from "./site";
import { ROUTES } from "./routes";

export function getNavigation(locale: Locale) {
  const r = ROUTES[locale];
  const isEs = locale === "es";

  return {
    topbar: isEs
      ? [
          "HIPAA · DOCTORAS CON LICENCIA EN TODO EE.UU.",
          "Atención 100% en español",
          "ENVÍO DE FARMACIA CERTIFICADA",
        ]
      : [
          "HIPAA · U.S. LICENSED DOCTORS",
          "100% Spanish support",
          "CERTIFIED PHARMACY SHIPPING",
        ],
    primary: [
      {
        label: isEs ? "Medicamentos" : "Treatments",
        href: `${r.home}#medicamentos`,
      },
      {
        label: isEs ? "Cómo funciona" : "How it works",
        href: `${r.home}#proceso`,
      },
      {
        label: isEs ? "Testimonios" : "Testimonials",
        href: `${r.home}#resultados`,
      },
      { label: isEs ? "Preguntas" : "FAQ", href: `${r.home}#faq` },
      { label: isEs ? "Contacto" : "Contact", href: `${r.home}#cuestionario` },
    ],
    footer: [
      {
        heading: isEs ? "Tratamientos" : "Treatments",
        links: [
          { label: "GLP-1", href: r.glp1 },
          { label: isEs ? "Catálogo" : "Catalog", href: r.catalog },
          {
            label: isEs ? "Cómo funciona" : "How it works",
            href: r.howItWorks,
          },
        ],
      },
      {
        heading: "LYT",
        links: [
          {
            label: isEs ? "Testimonios" : "Testimonials",
            href: `${r.home}#resultados`,
          },
          { label: isEs ? "Fundadora" : "Founder", href: `${r.home}#founder` },
          { label: isEs ? "Comunidad" : "Community", href: CTA_URLS.community },
        ],
      },
      {
        heading: isEs ? "Legal" : "Legal",
        links: [
          {
            label: isEs ? "Términos y Condiciones" : "Terms and Conditions",
            href: r.termsOfUse,
          },
          {
            label: isEs ? "Políticas de Privacidad" : "Privacy Policy",
            href: r.privacyPolicy,
          },
          {
            label: isEs ? "Aviso HIPAA" : "HIPAA Notice",
            href: r.noticeOfPrivacyPractices,
          },
          {
            label: isEs ? "Información de seguridad" : "Safety information",
            href: r.safetyInformation,
          },
          {
            label: isEs ? "Descargar paquete legal" : "Download legal packet",
            href: r.termsAndConditions,
          },
        ],
      },
    ],
  };
}
