import { CTA_URLS, type Locale } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { IMAGES } from "@/config/images";
import { getContent } from "@/content/locales";
import { productHref, type ProductSlug } from "@/content/products";
import { FaqList } from "./FaqList";
import { Fragment, type CSSProperties } from "react";

const pageCopy = {
  es: {
    hero: {
      title: "Salud que te",
      titleBrush: "entiende",
      whatsapp: "Hablar por WhatsApp",
    },
    marquee: [
      "cuidado familiar",
      "en español",
      "aquí perteneces",
      "hecho por mujeres latinas",
      "te entendemos",
    ],
    trust: [
      "HIPAA Compliant",
      "Doctoras con licencia en EE.UU.",
      "Soporte 100% en español",
      "Farmacia compounding certificada",
      "Envío discreto a tu puerta",
    ],
    medicines: {
      eyebrow: "Lo que recetamos",
      titleBrush: "medicina",
      title: "personalizada.",
      lead: "Tratamientos con receta para metabolismo, energía y bienestar hormonal. Formulados por farmacias certificadas y prescritos por un médico licenciado.",
      strong: "Sin suscripciones. Sin costos extras.",
      catalog: "Conoce el catálogo completo",
      meta: "MEDICAMENTOS · FARMACIAS CERTIFICADAS",
      note: "Todo medicamento aquí mostrado se receta solo después de la evaluación clínica de una doctora con licencia. Los precios indicados son desde y pueden variar según tu plan personalizado. No vendemos suplementos ni atajos.",
      items: [
        {
          star: "Producto estrella",
          slug: "tirzepatide",
          category: "PESO & METABÓLICO",
          name: "Tirzepatide",
          desc: "Diseñado para una pérdida de peso real con doble acción GLP-1 + GIP: actúa sobre dos receptores que regulan el apetito y participa en las señales de saciedad y hambre. También interviene en la regulación del azúcar en sangre. Inyección semanal o gotas diarias: tú eliges con tu doctora.",
          price: "Desde $276",
          sub: "/mes. Ahorra hasta un extra|42% con paquetes de 6 meses. Pagalo en cuotas",
          image: IMAGES.medicines.tirzepatide,
          featured: true,
        },
        {
          category: "PESO & METABÓLICO",
          slug: "semaglutide",
          name: "Semaglutide",
          desc: "El GLP-1 más estudiado, con años de evidencia clínica que respaldan su uso. Participa en las señales de saciedad y hambre y también interviene en la regulación del azúcar en sangre. Inyección semanal o gotas diarias, a tu ritmo y ajustado por tu doctora.",
          price: "Desde $160",
          sub: "/mes. Ahorra hasta un extra 42%|con paquetes de 6 meses. Pagalo en cuotas",
          image: IMAGES.medicines.semaglutide,
        },
        {
          category: "ENERGÍA & LONGEVIDAD",
          slug: "nad",
          name: "NAD+ Inyectable",
          desc: "El combustible de tus células. Participa en la producción de energía dentro de cada célula, se asocia con mayor concentración y menos niebla mental, y apoya los procesos de reparación celular del cuerpo. Spray nasal diario o inyección: tú eliges con tu doctora.",
          price: "Por solo $191",
          sub: "/mes. Ahorra hasta un extra 42%|con paquetes de 6 meses. Pagalo en cuotas",
          image: IMAGES.medicines.nad,
        },
        {
          category: "HORMONAL · ANTI-EDAD",
          slug: "sermorelin",
          name: "Sermorelin",
          desc: "Estimula tu propia hormona de crecimiento (HGH), sin reemplazarla. Apoya un descanso más reparador, acompaña la recuperación física y la masa muscular, y se asocia con más energía y vitalidad. Inyección subcutánea, ajustada por tu doctora.",
          price: "Por solo $198",
          sub: "/mes. Ahorra hasta un extra 42%|con paquetes de 6 meses. Pagalo en cuotas",
          image: IMAGES.medicines.sermorelin,
        },
      ],
    },
    process: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos y",
      brush: "empezamos",
      end: "juntas.",
      lead: "Sin sala de espera. Sin pedir el día libre. Sin llevar a alguien que te traduzca. Llenas tu cuestionario, te evaluamos, y el medicamento llega a tu puerta.",
      steps: [
        [
          "01",
          "Cuestionario virtual",
          "15 minutos. Tu historia clínica, síntomas y medicamentos actuales. Todo en español, desde tu celular, sin papeles ni filas.",
          "15 min · 100% online",
        ],
        [
          "02",
          "Evaluación de tu doctora",
          "Una doctora con licencia en EE.UU. revisa tu caso, te llama si necesita más información, y te propone el plan. Tienes derecho a decir no.",
          "Respuesta en menos de 24 h",
        ],
        [
          "03",
          "Envío a tu puerta",
          "Tu medicamento sale de una farmacia certificada y llega discreto a tu casa. Sin etiquetas que delaten, sin que el vecino sepa nada.",
          "3 a 5 días · empaque discreto",
        ],
      ],
      cta: "¿Este tratamiento es para mí?",
    },
    pillars: {
      eyebrow: "Tu LYT, contigo",
      title: "No es un ticket.|Es una",
      brush: "relación",
      lead: "En LYT no recibes solo una receta. Recibes tres capas de apoyo, diseñadas para que tu transformación se sostenga.",
      cta: "Tres capas, una decisión:",
      items: [
        [
          "Capa 1",
          "Tu cuidado médico",
          "Tu doctora con licencia en EE.UU., contigo durante todo tu plan.",
          [
            "Cuestionario inicial revisado por tu doctora",
            "Mensajes vía portal seguro",
            "Ajustes de dosis cuando los necesites",
          ],
        ],
        [
          "Capa 2",
          "Tu acompañamiento LYT",
          "Lo no-médico, lo humano, lo cultural: eso lo manejamos nosotras.",
          [
            "Atención por WhatsApp en español",
            "Cita personal con LYT",
            "Motivación y apoyo de proceso",
          ],
        ],
        [
          "Capa 3",
          "Comunidad Reto Masivo",
          "La transformación deja de ser solitaria. Incluida en cualquier plan.",
          [
            "Sugerencias alimenticias con sabor latino",
            "Rutinas gratuitas",
            "Clases en vivo y comunidad",
          ],
        ],
      ],
    },
    results: {
      eyebrow: "Resultados reales",
      titleBrush: "Mujeres",
      title: "que ya lo lograron.",
      lead: "Empezamos con la transformación de Nathaly y de cientos de mujeres del Reto Masivo. Ahora seguimos sumando con respaldo médico, en EE.UU., en tu idioma.",
      cards: [
        [
          "El cambio es una decisión.",
          "Resultado real · Clienta LYT",
          IMAGES.results.nathalyBefore,
          IMAGES.results.nathalyAfter,
        ],
        [
          "Elegirte también es cuidar de tu familia.",
          "Resultado real · Clienta LYT",
          IMAGES.results.secondBefore,
          IMAGES.results.secondAfter,
        ],
        [
          "Si yo pude, tú también puedes.",
          "Nathaly Díaz · Fundadora LYT",
          IMAGES.results.thirdBefore,
          IMAGES.results.thirdAfter,
        ],
      ],
      quotesLead:
        "Estas son cosas reales que nos han escrito. Todas con el mismo agradecimiento: por fin alguien que las escucha en su idioma.",
      quotes: [
        [
          "Este proceso ha hecho que mi relación de pareja mejore, me siento mejor conmigo misma y eso se proyecta.",
          "E. T · 38",
          "Atlanta · USA",
        ],
        [
          "Me siento en control de mi salud nuevamente. Mi energía volvió. Amo cómo me veo y siento.",
          "N. D · 36",
          "Miami · USA",
        ],
        [
          "Atravesar este proceso de la mano de expertos me hizo sentir segura. Gracias.",
          "A. S. · 41",
          "Orlando · USA",
        ],
      ],
    },
    community: {
      eyebrow: "La comunidad",
      brush: "familia",
      title: "que entrena, come y celebra junta.",
      lead: "LYT no termina cuando recibes tu medicamento. Compartimos alimentación, rutinas, recetas latinas saludables, eventos en vivo y celebraciones de cada logro.",
      accounts: [
        [
          "CUENTA MADRE · THE LYT METHOD",
          "@thelytmethod · Contenido educativo, transformaciones y promociones",
        ],
        [
          "COMUNIDAD ACTIVA · RETO MASIVO",
          "@retomasivo · Contenido gratuito, eventos y lives de la comunidad",
        ],
      ],
    },
    founder: {
      eyebrow: "La fundadora",
      title: "Yo viví lo mismo que tú vives",
      body: [
        "Soy Nathaly Díaz. Durante más de una década dirigí programas donde más de dos mil mujeres transformaron su cuerpo y, sobre todo, su forma de quererse.",
        "Cuando me mudé a Estados Unidos, me impactó la diferencia en el sistema de salud: avanzado, pero muchas veces frío para mujeres como nosotras.",
        "LYT nace para que ninguna tenga que recorrer este camino sola. No solo necesitamos doctores. Necesitamos comunidad, cultura y cuidado real.",
      ],
    },
    cta: {
      eyebrow: "Empieza hoy",
      title: "Tu cuerpo está pidiendo algo",
      brush: "vamos",
      end: "a entenderlo.",
      lead: "15 minutos de cuestionario. Cero compromiso. Tu doctora te responde en menos de 24 horas.",
      video: "Agenda una videollamada",
    },
  },
  en: {
    hero: {
      title: "Health that",
      titleBrush: "gets you",
      whatsapp: "Talk on WhatsApp",
    },
    marquee: [
      "familiar care",
      "in Spanish",
      "you belong here",
      "made by Latina women",
      "we understand you",
    ],
    trust: [
      "HIPAA Compliant",
      "U.S. licensed doctors",
      "100% Spanish support",
      "Certified compounding pharmacy",
      "Discreet delivery to your door",
    ],
    medicines: {
      eyebrow: "What we prescribe",
      titleBrush: "medicine",
      title: "personalized.",
      lead: "Prescription treatments for metabolism, energy and hormonal wellbeing. Prepared by certified pharmacies and prescribed by a licensed clinician.",
      strong: "No hidden subscriptions. No extra costs.",
      catalog: "See the full catalog",
      meta: "MEDICATIONS · CERTIFIED PHARMACIES",
      note: "Every medication shown here is prescribed only after clinical evaluation by a licensed doctor. Starting prices may vary by your personalized plan. We do not sell supplements or shortcuts.",
      items: [
        {
          star: "Featured product",
          slug: "tirzepatide",
          category: "WEIGHT & METABOLIC",
          name: "Tirzepatide",
          desc: "Designed for real weight loss with dual GLP-1 + GIP action: it acts on two receptors that regulate appetite and takes part in satiety and hunger signals. It also helps regulate blood sugar. Weekly injection or daily drops: you choose with your doctor.",
          price: "From $276",
          sub: "/month. Save up to an extra|42% with 6-month packages. Pay in installments",
          image: IMAGES.medicines.tirzepatide,
          featured: true,
        },
        {
          category: "WEIGHT & METABOLIC",
          slug: "semaglutide",
          name: "Semaglutide",
          desc: "The most studied GLP-1, with years of clinical evidence behind it. It takes part in satiety and hunger signals and also helps regulate blood sugar. Weekly injection or daily drops, at your pace and adjusted by your doctor.",
          price: "From $160",
          sub: "/month. Save up to an extra 42%|with 6-month packages. Pay in installments",
          image: IMAGES.medicines.semaglutide,
        },
        {
          category: "ENERGY & LONGEVITY",
          slug: "nad",
          name: "Injectable NAD+",
          desc: "The fuel for your cells. It takes part in producing energy inside every cell, is associated with sharper focus and less brain fog, and supports your body's cellular repair. Daily nasal spray or injection: you choose with your doctor.",
          price: "Only $191",
          sub: "/month. Save up to an extra 42%|with 6-month packages. Pay in installments",
          image: IMAGES.medicines.nad,
        },
        {
          category: "HORMONAL · HEALTHY AGING",
          slug: "sermorelin",
          name: "Sermorelin",
          desc: "Stimulates your own growth hormone (HGH) without replacing it. Supports more restful sleep, accompanies physical recovery and muscle mass, and is associated with more energy and vitality. Subcutaneous injection, adjusted by your doctor.",
          price: "Only $198",
          sub: "/month. Save up to an extra 42%|with 6-month packages. Pay in installments",
          image: IMAGES.medicines.sermorelin,
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Three steps and",
      brush: "we start",
      end: "together.",
      lead: "No waiting room. No taking the day off. No bringing someone to translate. You complete your questionnaire, we evaluate you, and medication ships to your door when appropriate.",
      steps: [
        [
          "01",
          "Virtual questionnaire",
          "15 minutes. Your medical history, symptoms and current medications, all in Spanish from your phone.",
          "15 min · 100% online",
        ],
        [
          "02",
          "Doctor evaluation",
          "A U.S. licensed doctor reviews your case, contacts you if needed and proposes a plan. You can always say no.",
          "Response in under 24 h",
        ],
        [
          "03",
          "Delivery to your door",
          "Medication ships from a certified pharmacy and arrives discreetly at home.",
          "3 to 5 days · discreet packaging",
        ],
      ],
      cta: "Is this treatment for me?",
    },
    pillars: {
      eyebrow: "Your LYT, with you",
      title: "Not a ticket.|A",
      brush: "relationship",
      lead: "At LYT you receive more than a prescription: three layers of support designed to make your transformation sustainable.",
      cta: "Three layers, one decision:",
      items: [
        [
          "Layer 1",
          "Your medical care",
          "Your U.S. licensed doctor stays with you through the plan.",
          [
            "Doctor-reviewed questionnaire",
            "Secure portal messaging",
            "Dose adjustments when needed",
          ],
        ],
        [
          "Layer 2",
          "Your LYT support",
          "The human, cultural and process support is handled by us.",
          [
            "Spanish WhatsApp support",
            "Personal LYT check-in",
            "Motivation and process support",
          ],
        ],
        [
          "Layer 3",
          "Reto Masivo community",
          "Transformation stops being lonely. Included in every plan.",
          [
            "Latina-flavored food suggestions",
            "Free workout routines",
            "Live classes and community",
          ],
        ],
      ],
    },
    results: {
      eyebrow: "Real results",
      titleBrush: "Women",
      title: "who already did it.",
      lead: "We started with Nathaly and hundreds of Reto Masivo women. Now we keep adding clinical support in the U.S., in your language.",
      cards: [
        [
          "Change is a decision.",
          "Real result · LYT client",
          IMAGES.results.nathalyBefore,
          IMAGES.results.nathalyAfter,
        ],
        [
          "Choosing yourself also cares for your family.",
          "Real result · LYT client",
          IMAGES.results.secondBefore,
          IMAGES.results.secondAfter,
        ],
        [
          "If I could, you can too.",
          "Nathaly Diaz · LYT founder",
          IMAGES.results.thirdBefore,
          IMAGES.results.thirdAfter,
        ],
      ],
      quotesLead:
        "These are real messages women have sent us. All with the same gratitude: finally, someone listens in their language.",
      quotes: [
        [
          "This process improved my relationship. I feel better with myself and it shows.",
          "E. T · 38",
          "Atlanta · USA",
        ],
        [
          "I feel in control of my health again. My energy is back. I love how I look and feel.",
          "N. D · 36",
          "Miami · USA",
        ],
        [
          "Going through this process guided by experts made me feel safe. Thank you.",
          "A. S. · 41",
          "Orlando · USA",
        ],
      ],
    },
    community: {
      eyebrow: "The community",
      brush: "family",
      title: "that trains, eats and celebrates together.",
      lead: "LYT does not end when you receive medication. We share food ideas, workouts, healthy Latina recipes, live events and celebrations for every win.",
      accounts: [
        [
          "MOTHER ACCOUNT · THE LYT METHOD",
          "@thelytmethod · Education, transformations and promotions",
        ],
        [
          "ACTIVE COMMUNITY · RETO MASIVO",
          "@retomasivo · Free content, events and community lives",
        ],
      ],
    },
    founder: {
      eyebrow: "The founder",
      title: "I lived what you are living",
      body: [
        "I am Nathaly Diaz. For more than a decade I led programs where over two thousand women transformed their bodies and how they cared for themselves.",
        "When I moved to the U.S., I felt how advanced but cold healthcare could be for women like us.",
        "LYT was born so none of us has to walk this road alone. We need doctors, community, culture and real care.",
      ],
    },
    cta: {
      eyebrow: "Start today",
      title: "Your body is asking for something",
      brush: "let's",
      end: "understand it.",
      lead: "15 minutes of questionnaire. Zero commitment. Your doctor responds in under 24 hours.",
      video: "Book a video call",
    },
  },
} as const;

const renderMedicineSub = (sub: string) =>
  sub.split("|").map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {index > 0 ? <br /> : null}
      {part}
    </Fragment>
  ));

const referenceImageLabel = (locale: Locale) => locale === "es" ? "* Imagen referencial del medicamento" : "* Reference image of medication";

function TrustIcon({ index }: { index: number }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;
  const icons = [
    <svg {...common}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    <svg {...common}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>,
    <svg {...common}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 11l3 3 5-5" />
    </svg>,
    <svg {...common}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

function InfoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ProcessIcon({ index }: { index: number }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;
  const icons = [
    <svg {...common}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>,
    <svg {...common}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>,
    <svg {...common}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

function PillarIcon({ index }: { index: number }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;
  const icons = [
    <svg {...common}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>,
    <svg {...common}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>,
    <svg {...common}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

function InstagramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LandingPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = pageCopy[locale];
  const routes = ROUTES[locale];

  return (
    <div className="landing-v2">
      <section
        className="hero"
        aria-labelledby="home-hero-title"
        style={{ "--hero-image": `url(${IMAGES.hero})` } as CSSProperties}
      >
        <div className="wrap hero-grid">
          <div className="hero-content">
            <h1 id="home-hero-title">
              {copy.hero.title}{" "}
              <span className="brush">{copy.hero.titleBrush}</span>
            </h1>
            <div className="hero-ctas">
              <a href={CTA_URLS.quiz} className="btn btn-primary btn-lg">
                {content.common.qualify} →
              </a>
              <a href={CTA_URLS.whatsapp} className="btn btn-dark btn-lg">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.6 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.7 2.7 4.2 3.8.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-.9.1-1.1 0-.1-.2-.2-.5-.4z" />
                  <path d="M20.5 3.5C18.2 1.3 15.2 0 12 0 5.4 0 .1 5.3.1 11.8c0 2.1.5 4.1 1.5 5.9L0 24l6.5-1.7c1.7.9 3.6 1.4 5.5 1.4 6.6 0 11.9-5.3 11.9-11.8 0-3.2-1.2-6.1-3.4-8.4zm-8.5 18.2c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.5-1.5-3.3-1.5-5.1 0-5.3 4.3-9.6 9.7-9.6 2.6 0 5 1 6.8 2.8 1.8 1.8 2.8 4.2 2.8 6.8.1 5.3-4.2 9.6-9.6 9.6z" />
                </svg>
                {copy.hero.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-row soft reverse">
          <div className="marquee-track">
            {[...copy.marquee, ...copy.marquee].map((item, index) => (
              <Fragment key={`${item}-${index}`}>
                <span>{item}</span>
                <span className="dot" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <section
        className="trust-strip"
        aria-label={locale === "es" ? "Confianza" : "Trust"}
      >
        <div className="wrap trust-strip-inner">
          {copy.trust.map((item, index) => (
            <span className="trust-item" key={item}>
              <TrustIcon index={index} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="medicamentos" className="sec sec-cream">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow-bold">{copy.medicines.eyebrow}</span>
              <h2>
                <span className="brush">{copy.medicines.titleBrush}</span>
                {copy.medicines.title}
              </h2>
            </div>
            <p className="lead-col">
              {copy.medicines.lead}
              <br />
              <strong>{copy.medicines.strong}</strong>
            </p>
          </div>

          <div className="meds-feature">
            {copy.medicines.items
              .filter((item) => "featured" in item && item.featured)
              .map((item) => (
                <a className="med-card med-feature" href={productHref(locale, item.slug as ProductSlug)} key={item.name}>
                  <div className="med-vial med-vial-photo">
                    <img src={item.image} alt="" />
                    <span className="product-image-reference-label">{referenceImageLabel(locale)}</span>
                  </div>
                  <div className="med-body">
                    {"star" in item && item.star ? (
                      <span className="med-star">★ {item.star}</span>
                    ) : null}
                    <span className="med-cat">{item.category}</span>
                    <h3 className="med-name">{item.name}</h3>
                    <p className="med-desc">{item.desc}</p>
                    <div className="med-foot">
                      <div className="from">
                        {item.price}
                        <small>{renderMedicineSub(item.sub)}</small>
                      </div>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          <div className="meds-grid meds-grid-3">
            {copy.medicines.items
              .filter((item) => !("featured" in item && item.featured))
              .map((item) => (
                <a className="med-card" href={productHref(locale, item.slug as ProductSlug)} key={item.name}>
                  <div className="med-vial med-vial-photo">
                    <img src={item.image} alt="" />
                    <span className="product-image-reference-label">{referenceImageLabel(locale)}</span>
                  </div>
                  <div className="med-body">
                    <span className="med-cat">{item.category}</span>
                    <h3 className="med-name">{item.name}</h3>
                    <p className="med-desc">{item.desc}</p>
                    <div className="med-foot">
                      <div className="from">
                        {item.price}
                        <small>{renderMedicineSub(item.sub)}</small>
                      </div>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          <div className="meds-catalog-cta">
            <a href={routes.catalog} className="catalog-link">
              {copy.medicines.catalog}
              <span className="arrow">→</span>
            </a>
            <span className="catalog-meta">{copy.medicines.meta}</span>
          </div>
          <div className="meds-note">
            <div className="ic">
              <InfoIcon />
            </div>
            <span>
              <strong>{locale === "es" ? "Importante." : "Important."}</strong>{" "}
              {copy.medicines.note}
            </span>
          </div>
        </div>
      </section>

      <section id="proceso" className="sec sec-dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow-bold">{copy.process.eyebrow}</span>
              <h2>
                {copy.process.title}
                <span className="brush">{copy.process.brush}</span>
                {copy.process.end}
              </h2>
            </div>
            <p className="lead-col">{copy.process.lead}</p>
          </div>
          <div className="proc-grid">
            {copy.process.steps.map(([num, title, text, badge], index) => (
              <article
                className={`proc-card ${index === 0 ? "is-orange" : index === 2 ? "is-violet" : ""}`}
                key={num}
              >
                <span className="num">{num}</span>
                <span
                  className={`proc-icon ${index === 0 ? "orange" : index === 1 ? "cyan" : "violet"}`}
                >
                  <ProcessIcon index={index} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="badge">
                  <span className="dot" />
                  {badge}
                </span>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <a href={CTA_URLS.quiz} className="btn btn-primary btn-lg">
              {copy.process.cta} →
            </a>
          </div>
        </div>

        <hr className="grad-rule" />

        <div className="wrap pillars-wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow-bold">{copy.pillars.eyebrow}</span>
              <h2>
                {copy.pillars.title.split("|").map((line, i) => (
                  <Fragment key={i}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </Fragment>
                ))}
                <span className="brush">{copy.pillars.brush}</span>
              </h2>
            </div>
            <p className="lead-col">{copy.pillars.lead}</p>
          </div>
          <div className="pillars">
            {copy.pillars.items.map(([layer, title, desc, points], index) => (
              <article
                className={`pillar-card ${index === 0 ? "is-med" : index === 1 ? "is-team" : "is-comm"}`}
                key={layer}
              >
                <span className="pillar-chip">
                  <PillarIcon index={index} />
                </span>
                <span className="pillar-capa">{layer}</span>
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-desc">{desc}</p>
                <ul className="pillar-list">
                  {points.map((point) => (
                    <li key={point}>
                      <span className="pc-check">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="pillars-cta">
            <span className="pc-line">
              {copy.pillars.cta}{" "}
              <span className="brush">
                {locale === "es" ? "empezar" : "start"}
              </span>
            </span>
            <a href={CTA_URLS.quiz} className="btn btn-primary btn-lg">
              {content.common.qualify} →
            </a>
          </div>
        </div>
      </section>

      <section id="resultados" className="sec sec-cream">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow-bold orange">
                {copy.results.eyebrow}
              </span>
              <h2>
                <span className="brush">{copy.results.titleBrush}</span>
                {copy.results.title}
              </h2>
            </div>
            <p className="lead-col">{copy.results.lead}</p>
          </div>

          <div className="transform-grid">
            {copy.results.cards.map(([quote, meta, before, after]) => (
              <article className="transform-card" key={quote}>
                <div className="transform-img">
                  <img src={before} alt="" loading="lazy" />
                  <img src={after} alt="" loading="lazy" />
                  <span className="transform-badge">Antes · Despues</span>
                  <span className="vs">VS</span>
                </div>
                <div className="transform-body">
                  <p className="transform-quote">{quote}</p>
                  <div className="transform-meta">{meta}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <a href={CTA_URLS.quiz} className="btn btn-primary btn-lg">
              {locale === "es" ? "Yo también quiero" : "I want this too"} →
            </a>
          </div>

          <hr className="grad-rule" />

          <div className="sec-head compact">
            <div>
              <span className="eyebrow-bold">
                {locale === "es" ? "Lo que dicen ellas" : "What they say"}
              </span>
              <h2>
                {locale === "es"
                  ? "Mas que un tratamiento..."
                  : "More than a treatment..."}
                <span className="brush">
                  {locale === "es" ? "una familia" : "a family"}
                </span>
              </h2>
            </div>
            <p className="lead-col">{copy.results.quotesLead}</p>
          </div>
          <div className="quotes-grid">
            {copy.results.quotes.map(([quote, who, sub]) => (
              <article className="quote-card" key={quote}>
                <div className="stars">★★★★★</div>
                <blockquote>"{quote}"</blockquote>
                <div className="byline">
                  <span className="quote-avi">{who.slice(0, 1)}</span>
                  <span>
                    <span className="who">{who}</span>
                    <span className="sub">{sub}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <hr className="grad-rule" />

          <div id="comunidad" className="community-block">
            <div className="sec-head compact">
              <div>
                <span className="eyebrow-bold">{copy.community.eyebrow}</span>
                <h2>
                  <span className="brush">{copy.community.brush}</span>
                  {copy.community.title}
                </h2>
              </div>
              <p className="lead-col">{copy.community.lead}</p>
            </div>
            {copy.community.accounts.map(([name, handle]) => (
              <div className="ig-cta-card" key={name}>
                <div className="left">
                  <span className="ig-ic">
                    <InstagramIcon />
                  </span>
                  <div>
                    <h4>{name}</h4>
                    <span className="handle">{handle}</span>
                  </div>
                </div>
                <div className="ig-actions">
                  <a href={CTA_URLS.instagram} className="btn btn-dark btn-sm">
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@thelytmethod"
                    className="btn btn-dark btn-sm"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://facebook.com/thelytmethod"
                    className="btn btn-dark btn-sm"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="sec sec-warm">
        <div className="wrap">
          <div className="sec-head single">
            <span className="eyebrow-bold">{content.home.faq.eyebrow}</span>
            <h2>
              <span className="brush">
                {locale === "es" ? "Todo" : "Everything"}
              </span>
              {content.home.faq.title}
            </h2>
          </div>
          <FaqList items={content.home.faq.items} />
          <p className="faq-contact">
            {locale === "es"
              ? "No encontraste tu pregunta? Escribenos a"
              : "Did not find your question? Write us at"}{" "}
            <a href="mailto:admin@lytmanagement.com">admin@lytmanagement.com</a>
          </p>
        </div>
      </section>

      <section id="founder" className="sec sec-cream">
        <div className="wrap founder-grid">
          <div className="founder-img-wrap">
            <img src={IMAGES.founder} alt="Nathaly Díaz" loading="lazy" />
            <div className="founder-tag">
              <div className="name">Nathaly Díaz</div>
              <div className="role">
                {locale === "es"
                  ? "Fundadora · 10+ años acompañando mujeres latinas"
                  : "Founder · 10+ years supporting Latina women"}
              </div>
            </div>
          </div>
          <div className="founder-content">
            <span className="eyebrow-bold orange">{copy.founder.eyebrow}</span>
            <h2>
              {copy.founder.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="brush">
                {copy.founder.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
            {copy.founder.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="founder-stats">
              <div className="founder-stat">
                <div className="num">10+</div>
                <div className="lbl">
                  {locale === "es" ? "Años acompañando" : "Years supporting"}
                </div>
              </div>
              <div className="founder-stat">
                <div className="num">2000+</div>
                <div className="lbl">
                  {locale === "es"
                    ? "Mujeres transformadas"
                    : "Women transformed"}
                </div>
              </div>
              <div className="founder-stat">
                <div className="num">1</div>
                <div className="lbl">
                  {locale === "es"
                    ? "Mision: pertenecer"
                    : "Mission: belonging"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cuestionario" className="final-cta">
        <div className="wrap final-cta-inner">
          <span className="eyebrow-bold">{copy.cta.eyebrow}</span>
          <h2>
            {copy.cta.title}
            <span className="brush">{copy.cta.brush}</span>
            {copy.cta.end}
          </h2>
          <p>{copy.cta.lead}</p>
          <div className="ctas">
            <a href={CTA_URLS.quiz} className="btn btn-light btn-lg">
              {content.common.startQuiz} →
            </a>
            <a
              href={CTA_URLS.whatsapp}
              className="btn btn-outline-light btn-lg"
            >
              {copy.cta.video}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
