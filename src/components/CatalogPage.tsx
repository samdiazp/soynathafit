import { IMAGES } from "@/config/images";
import { ROUTES } from "@/config/routes";
import { CTA_URLS, type Locale } from "@/config/site";
import { productHref, type ProductSlug } from "@/content/products";

type CatalogProduct = {
  slug?: ProductSlug;
  category: string;
  name: string;
  brush: string;
  description: string;
  forms: readonly string[];
  bundles?: readonly string[];
  image?: string;
  tone: "orange" | "purple" | "cyan";
  favorite?: boolean;
};

const catalogCopy = {
  es: {
    eyebrow: "Catálogo de tratamientos",
    title: "Todo lo que recetamos",
    lead: "Cada fórmula es evaluada y supervisada por una doctora con licencia, y preparada en farmacias certificadas en EE.UU. Nada se vende sin valoración clínica previa.",
    jumps: [
      ["Pérdida de peso", "#peso"],
      ["Energía & longevidad", "#energia"],
      ["Antioxidantes & vitaminas", "#vitaminas"],
    ],
    sections: [
      {
        id: "peso",
        tone: "orange",
        eyebrow: "01 — GLP-1",
        title: "Pérdida de peso",
        subtitle: "GLP-1 en presentación oral e inyectable. Disponibles mes a mes o en planes de 3 y 6 meses.",
        products: [
          {
            category: "GLP-1 · GIP",
            slug: "tirzepatide",
            name: "Tirzepatide",
            brush: "Baja de peso",
            description: "Doble acción GIP/GLP-1, en presentación oral o inyectable. Elige tu forma dentro del tratamiento.",
            forms: ["Oral", "Inyectable"],
            bundles: ["Mes a mes", "3 meses", "6 meses"],
            image: IMAGES.medicines.tirzepatide,
            tone: "orange",
            favorite: true,
          },
          {
            category: "GLP-1",
            slug: "semaglutide",
            name: "Semaglutide",
            brush: "baja de peso",
            description: "Análogo GLP-1, en presentación oral o inyectable. Elige tu forma dentro del tratamiento.",
            forms: ["Oral", "Inyectable"],
            bundles: ["Mes a mes", "3 meses", "6 meses"],
            image: IMAGES.medicines.semaglutide,
            tone: "orange",
          },
        ],
      },
      {
        id: "energia",
        tone: "purple",
        eyebrow: "02 — Vitalidad",
        title: "Energía & Longevidad",
        subtitle: "Apoyo celular y energía para los días en que el cuerpo pide más.",
        products: [
          {
            category: "NAD+",
            slug: "nad",
            name: "NAD+",
            brush: "vive",
            description: "Recupera la energía que ya creías perdida. Nasal o inyectable.",
            forms: ["Nasal", "Inyectable"],
            image: IMAGES.medicines.nad,
            tone: "purple",
          },
          {
            category: "Péptido",
            slug: "sermorelin",
            name: "Sermorelin",
            brush: "renueva",
            description: "Descanso profundo y soporte muscular.",
            forms: ["Inyectable"],
            image: IMAGES.medicines.sermorelin,
            tone: "purple",
          },
        ],
      },
      {
        id: "vitaminas",
        tone: "cyan",
        eyebrow: "03 — Bienestar",
        title: "Antioxidantes & Vitaminas",
        subtitle: "Refuerzo antioxidante y vitamínico para tu rutina de cuidado.",
        products: [
          {
            category: "Antioxidante",
            slug: "glutathione",
            name: "Glutatión",
            brush: "brilla",
            description: "Antioxidante maestro, en presentación nasal o inyectable.",
            forms: ["Nasal", "Inyectable"],
            image: IMAGES.medicines.glutathione,
            tone: "cyan",
          },
          {
            category: "Vitamina",
            slug: "vitamin-d3",
            name: "Vitamina D3",
            brush: "fortalece",
            description: "Refuerzo de vitamina D3 en aplicación intramuscular.",
            forms: ["Inyectable"],
            image: IMAGES.medicines.vitaminD3,
            tone: "cyan",
          },
          {
            category: "Vitamina",
            slug: "vitamin-b12",
            name: "B12 Metilcobalamina",
            brush: "energiza",
            description: "Vitamina B12 en aplicación intramuscular.",
            forms: ["Inyectable"],
            image: IMAGES.medicines.vitaminB12,
            tone: "cyan",
          },
        ],
      },
    ],
    note: "Todos los medicamentos requieren evaluación clínica previa y de ser aprobados se despachan a través de una farmacia certificada.",
    ctaEyebrow: "Empieza hoy",
    ctaTitleStart: "Agenda tu",
    ctaBrush: "consulta",
    ctaTitleEnd: "en español.",
    ctaButton: "Agendar mi consulta",
    whatsapp: "o por WhatsApp",
    treatment: "Ver tratamiento",
  },
  en: {
    eyebrow: "Treatment catalog",
    title: "Everything we prescribe",
    lead: "Each formula is evaluated and supervised by a licensed doctor, and prepared by certified pharmacies in the U.S. Nothing is sold without prior clinical evaluation.",
    jumps: [
      ["Weight loss", "#peso"],
      ["Energy & longevity", "#energia"],
      ["Antioxidants & vitamins", "#vitaminas"],
    ],
    sections: [
      {
        id: "peso",
        tone: "orange",
        eyebrow: "01 — GLP-1",
        title: "Weight loss",
        subtitle: "GLP-1 in oral and injectable presentations. Available month to month or in 3- and 6-month plans.",
        products: [
          { category: "GLP-1 · GIP", slug: "tirzepatide", name: "Tirzepatide", brush: "weight care", description: "Dual GIP/GLP-1 action, in oral or injectable presentation. Choose your form within treatment.", forms: ["Oral", "Injectable"], bundles: ["Month to month", "3 months", "6 months"], image: IMAGES.medicines.tirzepatide, tone: "orange", favorite: true },
          { category: "GLP-1", slug: "semaglutide", name: "Semaglutide", brush: "weight care", description: "GLP-1 analog, in oral or injectable presentation. Choose your form within treatment.", forms: ["Oral", "Injectable"], bundles: ["Month to month", "3 months", "6 months"], image: IMAGES.medicines.semaglutide, tone: "orange" },
        ],
      },
      {
        id: "energia",
        tone: "purple",
        eyebrow: "02 — Vitality",
        title: "Energy & Longevity",
        subtitle: "Cellular and energy support for the days when your body asks for more.",
        products: [
          { category: "NAD+", slug: "nad", name: "NAD+", brush: "live", description: "Recover energy you thought was gone. Nasal or injectable.", forms: ["Nasal", "Injectable"], image: IMAGES.medicines.nad, tone: "purple" },
          { category: "Peptide", slug: "sermorelin", name: "Sermorelin", brush: "renew", description: "Deep rest and muscle support.", forms: ["Injectable"], image: IMAGES.medicines.sermorelin, tone: "purple" },
        ],
      },
      {
        id: "vitaminas",
        tone: "cyan",
        eyebrow: "03 — Wellness",
        title: "Antioxidants & Vitamins",
        subtitle: "Antioxidant and vitamin support for your care routine.",
        products: [
          { category: "Antioxidant", slug: "glutathione", name: "Glutathione", brush: "glow", description: "Master antioxidant, in nasal or injectable presentation.", forms: ["Nasal", "Injectable"], image: IMAGES.medicines.glutathione, tone: "cyan" },
          { category: "Vitamin", slug: "vitamin-d3", name: "Vitamin D3", brush: "strengthen", description: "Vitamin D3 support through intramuscular application.", forms: ["Injectable"], image: IMAGES.medicines.vitaminD3, tone: "cyan" },
          { category: "Vitamin", slug: "vitamin-b12", name: "B12 Methylcobalamin", brush: "energize", description: "Vitamin B12 through intramuscular application.", forms: ["Injectable"], image: IMAGES.medicines.vitaminB12, tone: "cyan" },
        ],
      },
    ],
    note: "All medications require prior clinical evaluation and, if approved, are dispensed through a certified pharmacy.",
    ctaEyebrow: "Start today",
    ctaTitleStart: "Schedule your",
    ctaBrush: "consultation",
    ctaTitleEnd: "in Spanish.",
    ctaButton: "Schedule my consultation",
    whatsapp: "or WhatsApp",
    treatment: "View treatment",
  },
} as const;

function ProductCard({ product, href, label, referenceLabel }: { product: CatalogProduct; href: string; label: string; referenceLabel: string }) {
  return (
    <article className={`pcard pcard--${product.tone}`}>
      <div className="pcard-media">
        {product.image ? <><img className="pc-slot" src={product.image} alt="" /><span className="product-image-reference-label">{referenceLabel}</span></> : <span className="pc-placeholder">{product.name.slice(0, 1)}</span>}
        {product.favorite ? <span className="pc-fav" title="El preferido"><svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M12 2.2l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 16.62 6.34 19.6l1.08-6.3L2.85 8.85l6.32-.92z" fill="currentColor" /></svg></span> : null}
      </div>
      <div className="pcard-body">
        <span className="pc-cat">{product.category}</span>
        <h3 className="pc-name">{product.name}</h3>
        <span className="pc-brush">{product.brush}</span>
        <p className="pc-desc">{product.description}</p>
        <div className="pc-forms">
          {product.forms.map((form) => <span className="pc-tag" key={form}>{form}</span>)}
        </div>
        {product.bundles ? <div className="pc-bundles">{product.bundles.map((bundle) => <span className="pc-chip" key={bundle}>{bundle}</span>)}</div> : null}
        <a className="pc-link" href={href}>{label}<span>→</span></a>
      </div>
    </article>
  );
}

export function CatalogPage({ locale }: { locale: Locale }) {
  const copy = catalogCopy[locale];
  const referenceLabel = locale === "es" ? "* Imagen referencial del medicamento" : "* Reference image of medication";
  const hrefForProduct = (product: CatalogProduct) => product.slug ? productHref(locale, product.slug) : ROUTES[locale].catalog;

  return (
    <div className="catalog-page catalog-page-v2">
      <section className="cat-hero">
        <div className="wrap cat-hero-inner">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1 className="cat-hero-h">{copy.title}</h1>
          <p className="cat-hero-lead">{copy.lead}</p>
          <nav className="cat-jump" aria-label={locale === "es" ? "Secciones del catálogo" : "Catalog sections"}>
            {copy.jumps.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </div>
      </section>

      {copy.sections.map((section) => (
        <section id={section.id} className={`cat-sec cat-sec--${section.tone}`} key={section.id}>
          <div className="wrap">
            <header className="cat-head">
              <span className="eyebrow">{section.eyebrow}</span>
              <h2 className="cat-h">{section.title}</h2>
              <p className="cat-sub">{section.subtitle}</p>
            </header>
            <div className={`pgrid ${section.products.length === 2 ? "pgrid--2" : "pgrid--3"}`}>
              {section.products.map((product) => <ProductCard product={product} href={hrefForProduct(product)} label={copy.treatment} referenceLabel={referenceLabel} key={product.name} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="cat-note-sec">
        <div className="wrap">
          <div className="cat-note" role="note"><strong>{locale === "es" ? "Importante." : "Important."}</strong> {copy.note}</div>
        </div>
      </section>

      <section className="cat-cta">
        <div className="cat-cta-inner">
          <div className="eyebrow on-dark">{copy.ctaEyebrow}</div>
          <h2 className="cat-cta-h">{copy.ctaTitleStart} <span className="brush">{copy.ctaBrush}</span><br />{copy.ctaTitleEnd}</h2>
          <div className="cat-cta-row">
            <a className="btn btn-light btn-lg" href={CTA_URLS.quiz}>{copy.ctaButton}</a>
            <a className="link-soft" href={CTA_URLS.whatsapp}>{copy.whatsapp} →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
