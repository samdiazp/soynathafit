import type { Locale } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { IMAGES } from "@/config/images";

export const PRODUCT_SLUGS = ["tirzepatide", "semaglutide", "nad", "sermorelin", "glutathione", "vitamin-d3", "vitamin-b12"] as const;

export type ProductSlug = typeof PRODUCT_SLUGS[number];

export type ProductCard = {
  slug: ProductSlug;
  category: string;
  name: string;
  also?: string;
  tagline: string;
  price: string;
  href: string;
  bg: string;
  image?: string;
  featured?: boolean;
};

export type ProductDetail = ProductCard & {
  title: string;
  brush: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  chips: string[];
  heroPrice: string;
  heroPriceNote: string;
  theme: "orange" | "purple" | "cyan" | "navy";
  benefitsTitle: string;
  benefitsLead: string;
  benefits: Array<{ title: string; text: string }>;
  presentations: Array<{ badge?: string; name: string; tag: string; text: string; image?: string }>;
  steps: Array<{ title: string; text: string }>;
  pricingLead: string;
  pricePlans: Array<{ badge?: string; name: string; subtitle: string; price: string; per?: string; note: string; features: string[]; featured?: boolean }>;
  assurance: string[];
  faq: Array<{ question: string; answer: string }>;
  safetyNote: string;
};

const commonFaq = {
  es: [
    {
      question: "¿Necesito receta médica?",
      answer: "Sí. Todo tratamiento se aprueba después de una evaluación con una doctora con licencia en tu estado. Si no es seguro para ti, no se receta.",
    },
    {
      question: "¿Cómo llega el medicamento?",
      answer: "Una vez aprobado tu tratamiento, tu medicamento se envía de forma discreta y suele llegar de 3 a 5 días hábiles, directo a tu puerta.",
    },
    {
      question: "¿Qué incluye el precio?",
      answer: "Tu pago cubre la consulta médica, el medicamento y el envío a tu casa. Sin costos escondidos ni cargos sorpresa.",
    },
  ],
  en: [
    {
      question: "Do I need a prescription?",
      answer: "Yes. Every treatment is approved only after an evaluation with a doctor licensed in your state. If it is not safe for you, it is not prescribed.",
    },
    {
      question: "How does the medication arrive?",
      answer: "Once approved, your medication ships discreetly and usually arrives in 3 to 5 business days, directly to your door.",
    },
    {
      question: "What does the price include?",
      answer: "Your payment covers the medical consultation, medication and shipping to your home. No hidden costs or surprise charges.",
    },
  ],
};

const sharedAssurance = {
  es: ["Sin costos escondidos", "Cancela cuando quieras", "Incluye consulta, medicamento y envío"],
  en: ["No hidden costs", "Cancel anytime", "Consultation, medication and shipping included"],
};

const sharedSafety = {
  es: "La información de esta página es educativa y no sustituye una consulta médica. Los tratamientos compounded no son medicamentos terminados aprobados por la FDA. Los resultados varían entre personas.",
  en: "This page is educational and does not replace medical consultation. Compounded treatments are not FDA-approved finished drugs. Results vary by person.",
};

const details = {
  es: {
    tirzepatide: {
      slug: "tirzepatide",
      category: "Peso & metabólico",
      name: "Tirzepatide",
      title: "Tirzepatide doble acción",
      brush: "baja de peso",
      eyebrow: "Peso & metabólico",
      tagline: "Tratamiento de doble acción GLP-1 + GIP con evaluación médica.",
      description: "Tratamiento de doble acción (GLP-1 + GIP) disponible únicamente tras evaluación médica. Plan personalizado y acompañamiento clínico durante todo el proceso.",
      metaDescription: "Tirzepatide online con evaluación médica en español, receta si calificas, medicamento y envío a casa.",
      price: "desde $276/mes",
      heroPrice: "Desde $276",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["GLP-1 + GIP", "Inyección o sublingual", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#F15822 0%,#C03F12 42%,#966EF0 100%)",
      image: IMAGES.medicines.tirzepatide,
      theme: "orange",
      featured: true,
      benefitsTitle: "Diseñado para una pérdida de peso real",
      benefitsLead: "Tirzepatide actúa sobre dos hormonas, GLP-1 y GIP, que regulan el apetito y azúcar en sangre. Pensado para mujeres con sobrepeso u obesidad, siempre bajo evaluación y seguimiento médico.",
      benefits: [
        { title: "Doble acción GLP-1 + GIP", text: "Actúa sobre dos receptores que regulan el apetito." },
        { title: "Para que comer deje de ser una batalla", text: "Apoya señales de saciedad y control del hambre." },
        { title: "Apoyo metabólico", text: "También interviene en la regulación del azúcar en sangre." },
        { title: "A tu ritmo", text: "Inyección semanal o gotas diarias: tú eliges con tu doctora." },
      ],
      presentations: [
        { badge: "Más popular", name: "Inyección", tag: "Fuerza clínica", text: "Inyección subcutánea semanal que tú misma aplicas en casa. Te enseñamos paso a paso.", image: IMAGES.medicines.tirzepatide },
        { name: "Sublingual", tag: "Sin agujas", text: "Gotas sublinguales de toma diaria. Una opción cómoda si prefieres evitar la aguja.", image: IMAGES.medicines.tirzepatide },
      ],
      steps: [
        { title: "Elige tu medicamento", text: "Selecciona el tratamiento y la presentación que prefieres: inyección semanal o gotas sublinguales." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Elige tu presentación y tu plan. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { name: "1 mes", subtitle: "Para empezar sin compromiso", price: "$276", per: "/mes", note: "Facturado cada mes · el monto puede variar según la dosis", features: ["Consulta médica con doctora en español", "Medicamento en vial inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"] },
        { badge: "Más elegido", name: "3 meses", subtitle: "El equilibrio entre precio y resultados", price: "$244", per: "/mes", note: "$747 facturado cada 3 meses", features: ["Todo lo del plan mensual", "Ahorras $97 vs. mes a mes", "Envíos programados sin interrupción", "Soporte prioritario por WhatsApp"], featured: true },
        { name: "6 meses", subtitle: "Máximo ahorro y acompañamiento", price: "$202", per: "/mes", note: "$1,210 facturado cada 6 meses", features: ["Todo lo del plan de 3 meses", "Ahorras $446 vs. mes a mes", "El plan de mejor valor", "Acompañamiento completo de tu transformación"] },
        { name: "Gotas · toma diaria", subtitle: "Plan mensual sublingual", price: "$256.67", per: "/mes", note: "Facturado cada mes · el precio puede cambiar según la dosis de cada mes.", features: ["Consulta médica con doctora en español", "Medicamento sublingual en gotas", "Solo plan mensual · sin paquetes de 3 o 6 meses"] },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Inyección o sublingual?", answer: "La inyección semanal es la opción más usada; la sublingual diaria es una opción cómoda sin agujas. Tu doctora te ayuda a elegir según tu caso y preferencias." },
      ],
      safetyNote: sharedSafety.es,
    },
    semaglutide: {
      slug: "semaglutide",
      category: "Peso & metabólico",
      name: "Semaglutide",
      title: "Semaglutide GLP-1",
      brush: "baja de peso",
      eyebrow: "Peso & metabólico",
      tagline: "El análogo GLP-1 más estudiado para pérdida de peso.",
      description: "El análogo GLP-1 más estudiado para pérdida de peso. Disponible únicamente tras evaluación médica, con plan personalizado y acompañamiento clínico durante todo el proceso.",
      metaDescription: "Semaglutide online con evaluación médica en español, receta si calificas, medicamento y envío a casa.",
      price: "desde $160/mes",
      heroPrice: "Desde $160",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["GLP-1", "Inyección o sublingual", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#F15822 0%,#C03F12 42%,#966EF0 100%)",
      image: IMAGES.medicines.semaglutide,
      theme: "orange",
      benefitsTitle: "Diseñado para una pérdida de peso real",
      benefitsLead: "Semaglutide imita al GLP-1, una hormona que regula el apetito y la saciedad. Pensado para mujeres con sobrepeso u obesidad, siempre bajo evaluación y seguimiento médico.",
      benefits: [
        { title: "El GLP-1 más estudiado", text: "Años de evidencia clínica respaldando su uso para pérdida de peso." },
        { title: "Para que comer deje de ser una batalla", text: "El GLP-1 participa en las señales de saciedad y hambre." },
        { title: "Apoyo metabólico", text: "También interviene en la regulación del azúcar en sangre." },
        { title: "A tu ritmo", text: "Inyección semanal o gotas diarias: tú eliges con tu doctora." },
      ],
      presentations: [
        { badge: "Más popular", name: "Inyección", tag: "Fuerza clínica", text: "Inyección subcutánea semanal que tú misma aplicas en casa. Te enseñamos paso a paso.", image: IMAGES.medicines.semaglutide },
        { name: "Sublingual", tag: "Sin agujas", text: "Gotas sublinguales de toma diaria. Una opción cómoda si prefieres evitar la aguja.", image: IMAGES.medicines.semaglutide },
      ],
      steps: [
        { title: "Elige tu medicamento", text: "Selecciona el tratamiento y la presentación que prefieres: inyección semanal o gotas sublinguales." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Elige tu presentación y tu plan. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { name: "1 mes", subtitle: "Para empezar sin compromiso", price: "$160", per: "/mes", note: "Facturado cada mes · el monto puede variar según la dosis", features: ["Consulta médica", "Medicamento en vial inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"] },
        { badge: "Más elegido", name: "3 meses", subtitle: "El equilibrio entre precio y resultados", price: "$122", per: "/mes", note: "$366 facturado cada 3 meses", features: ["Todo lo del plan mensual", "Ahorras $114 vs. mes a mes", "Soporte prioritario por WhatsApp"], featured: true },
        { name: "6 meses", subtitle: "Máximo ahorro y acompañamiento", price: "$109", per: "/mes", note: "$656 facturado cada 6 meses", features: ["Todo lo del plan de 3 meses", "Ahorras $304 vs. mes a mes", "El plan de mejor valor", "Acompañamiento completo de tu transformación"] },
        { name: "Gotas · toma diaria", subtitle: "Plan mensual sublingual", price: "$263", per: "/mes", note: "Facturado cada mes · el precio puede cambiar según la dosis de cada mes.", features: ["Consulta médica con doctora en español", "Medicamento sublingual en gotas", "Solo plan mensual · sin paquetes de 3 o 6 meses"] },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Inyección o sublingual?", answer: "La inyección semanal es la opción más usada; la sublingual diaria es una opción cómoda sin agujas. Tu doctora te ayuda a elegir según tu caso y preferencias." },
      ],
      safetyNote: sharedSafety.es,
    },
    nad: {
      slug: "nad",
      category: "Energía & longevidad",
      name: "NAD+",
      title: "NAD+ vive",
      brush: "vive",
      eyebrow: "Energía & longevidad",
      tagline: "La coenzima que impulsa la energía de cada célula de tu cuerpo.",
      description: "La coenzima que impulsa la energía de cada célula de tu cuerpo. Recupera la vitalidad que creías perdida y apoya el envejecimiento saludable. Disponible en spray nasal o inyección, siempre tras evaluación médica.",
      metaDescription: "NAD+ online con evaluación médica en español, presentación nasal o inyectable y envío a casa.",
      price: "desde $191/mes",
      heroPrice: "$191",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["Energía celular", "Spray nasal o inyección", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#966EF0 0%,#6E45D8 48%,#22DBF0 100%)",
      image: IMAGES.medicines.nad,
      theme: "purple",
      benefitsTitle: "El combustible de tus células",
      benefitsLead: "NAD+ es una coenzima esencial para producir energía en cada célula. Sus niveles bajan con la edad; reponerlos apoya la energía, el enfoque y el envejecimiento saludable.",
      benefits: [
        { title: "Energía celular", text: "Participa en la producción de energía dentro de cada célula." },
        { title: "Enfoque y claridad mental", text: "Asociado a mayor concentración y menos niebla mental." },
        { title: "Envejecimiento saludable", text: "Apoya los procesos de reparación celular del cuerpo." },
        { title: "A tu ritmo", text: "Spray nasal diario o inyección: tú eliges con tu doctora." },
      ],
      presentations: [
        { badge: "Más popular", name: "Inyección", tag: "Absorción directa", text: "Inyección que tú misma aplicas en casa. Te enseñamos paso a paso, sin complicaciones.", image: IMAGES.medicines.nad },
        { name: "Spray nasal", tag: "Sin agujas", text: "Aplicación nasal diaria, cómoda y rápida. Ideal si prefieres evitar la aguja.", image: IMAGES.medicines.nad },
      ],
      steps: [
        { title: "Elige tu presentación", text: "Selecciona cómo prefieres tu NAD+: spray nasal diario o inyección." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Elige tu presentación. Un solo precio mensual, sin paquetes. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { badge: "Más elegido", name: "Absorción directa · mes a mes", subtitle: "NAD+ inyectable", price: "$191", per: "/mes", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "NAD+ en vial inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"], featured: true },
        { name: "Cómodo y rápido · mes a mes", subtitle: "NAD+ nasal", price: "$165", per: "/mes", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "NAD+ en spray nasal", "Envío a la puerta de tu casa"] },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Inyección o spray nasal?", answer: "La inyección ofrece absorción directa; el spray nasal es una opción cómoda y sin agujas. Tu doctora te ayuda a elegir según tu caso y preferencias." },
        { question: "¿Hay paquetes?", answer: "No. El NAD+ se ofrece mes a mes y puedes cancelar cuando quieras. Sin paquetes ni suscripciones forzadas." },
      ],
      safetyNote: sharedSafety.es,
    },
    sermorelin: {
      slug: "sermorelin",
      category: "Hormonal · anti-edad",
      name: "Sermorelin",
      title: "Sermorelin renueva",
      brush: "renueva",
      eyebrow: "Hormonal · anti-edad",
      tagline: "El péptido que estimula a tu cuerpo a producir su propia hormona de crecimiento.",
      description: "El péptido que estimula a tu cuerpo a producir su propia hormona de crecimiento (HGH). Apoya el descanso profundo, la recuperación y la fortaleza física. En inyección subcutánea, siempre tras evaluación médica.",
      metaDescription: "Sermorelin online con evaluación médica en español, aplicación subcutánea y envío a casa.",
      price: "desde $197/mes",
      heroPrice: "$197",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["Estimula tu HGH", "Inyección subcutánea", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#244159 0%,#155AF6 52%,#966EF0 100%)",
      image: IMAGES.medicines.sermorelin,
      theme: "navy",
      benefitsTitle: "Tu hormona de crecimiento",
      benefitsLead: "El sermorelin es un péptido que le indica a tu cuerpo que produzca más hormona de crecimiento (HGH) de forma natural. Sus niveles bajan con la edad; reponerlos apoya el descanso, la recuperación y la composición corporal.",
      benefits: [
        { title: "Descanso profundo", text: "Apoya un sueño más reparador y un mejor ritmo de descanso." },
        { title: "Recuperación y músculo", text: "Acompaña la recuperación física y el mantenimiento de la masa muscular." },
        { title: "Energía y vitalidad", text: "Asociado a más energía diaria y mejor ánimo." },
        { title: "HGH natural", text: "Estimula tu propia hormona de crecimiento, sin reemplazarla." },
      ],
      presentations: [
        { badge: "Única presentación", name: "Inyección subcutánea", tag: "Aplicación diaria", text: "Pequeña inyección subcutánea que tú misma aplicas en casa, normalmente antes de dormir. Te enseñamos paso a paso.", image: IMAGES.medicines.sermorelin },
      ],
      steps: [
        { title: "Elige tu tratamiento", text: "Selecciona tu tratamiento de Sermorelin en inyección subcutánea." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Un solo precio mensual, sin paquetes. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { badge: "Mes a mes", name: "Sermorelin", subtitle: "Inyección subcutánea · aplicación diaria", price: "$197", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "Sermorelin en vial inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"], featured: true },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Cómo se aplica?", answer: "Tu doctora define la frecuencia y la dosis según tu caso. Suele aplicarse en una pequeña inyección subcutánea diaria, normalmente antes de dormir." },
        { question: "¿Hay paquetes?", answer: "No. El Sermorelin se ofrece mes a mes y puedes cancelar cuando quieras. Sin paquetes ni suscripciones forzadas." },
      ],
      safetyNote: sharedSafety.es,
    },
    glutathione: {
      slug: "glutathione",
      category: "Antioxidante",
      name: "Glutatión",
      title: "Glutatión brilla",
      brush: "brilla",
      eyebrow: "Antioxidante",
      tagline: "El antioxidante maestro de tu cuerpo.",
      description: "El antioxidante maestro de tu cuerpo. Apoya la desintoxicación, la energía y la salud de tu piel. Disponible en spray nasal o inyección, siempre tras evaluación médica.",
      metaDescription: "Glutatión online con evaluación médica en español, presentación nasal o inyectable y envío a casa.",
      price: "desde $211/mes",
      heroPrice: "$211",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["Antioxidante maestro", "Spray nasal o inyección", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#22DBF0 0%,#155AF6 52%,#966EF0 100%)",
      image: IMAGES.medicines.glutathione,
      theme: "cyan",
      benefitsTitle: "El antioxidante maestro",
      benefitsLead: "El glutatión es el principal antioxidante que tu cuerpo produce. Ayuda a neutralizar el estrés oxidativo, apoyar la desintoxicación del hígado y mantener tu piel luminosa.",
      benefits: [
        { title: "Defensa antioxidante", text: "Ayuda a neutralizar los radicales libres y el estrés oxidativo." },
        { title: "Apoyo a la desintoxicación", text: "Acompaña los procesos naturales de limpieza del hígado." },
        { title: "Piel luminosa", text: "Asociado a una piel más uniforme y con mejor aspecto." },
        { title: "A tu ritmo", text: "Spray nasal diario o inyección: tú eliges con tu doctora." },
      ],
      presentations: [
        { badge: "Más popular", name: "Inyección", tag: "Absorción directa", text: "Inyección que tú misma aplicas en casa. Te enseñamos paso a paso, sin complicaciones.", image: IMAGES.medicines.glutathione },
        { name: "Spray nasal", tag: "Sin agujas", text: "Aplicación nasal diaria, cómoda y rápida. Ideal si prefieres evitar la aguja.", image: IMAGES.medicines.glutathione },
      ],
      steps: [
        { title: "Elige tu presentación", text: "Selecciona cómo prefieres tu glutatión: spray nasal diario o inyección." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Elige tu presentación. Un solo precio mensual, sin paquetes. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { badge: "Más elegido", name: "Absorción directa · mes a mes", subtitle: "Glutatión inyectable", price: "$211", per: "/mes", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "Glutatión en vial inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"], featured: true },
        { name: "Cómodo y rápido · mes a mes", subtitle: "Glutatión nasal", price: "$129", per: "/mes", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "Glutatión en spray nasal", "Envío a la puerta de tu casa"] },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Inyección o spray nasal?", answer: "La inyección ofrece absorción directa; el spray nasal es una opción cómoda y sin agujas. Tu doctora te ayuda a elegir según tu caso y preferencias." },
        { question: "¿Hay paquetes?", answer: "No. El Glutatión se ofrece mes a mes y puedes cancelar cuando quieras. Sin paquetes ni suscripciones forzadas." },
      ],
      safetyNote: sharedSafety.es,
    },
    "vitamin-d3": {
      slug: "vitamin-d3",
      category: "Vitamina",
      name: "Vitamina D3",
      title: "Vitamina D3 fortalece",
      brush: "fortalece",
      eyebrow: "Vitamina",
      tagline: "La vitamina del sol, en dosis de refuerzo de 50,000 IU.",
      description: "La vitamina del sol, en dosis de refuerzo de 50,000 IU. Apoya tus huesos, tu sistema inmune y tu energía diaria. En aplicación intramuscular, siempre tras evaluación médica.",
      metaDescription: "Vitamina D3 online con evaluación médica en español, dosis de refuerzo de 50,000 IU y envío a casa.",
      price: "desde $110/mes",
      heroPrice: "$110",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["50,000 IU", "Aplicación intramuscular", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#22DBF0 0%,#155AF6 52%,#966EF0 100%)",
      image: IMAGES.medicines.vitaminD3,
      theme: "cyan",
      benefitsTitle: "La vitamina del sol",
      benefitsLead: "La vitamina D3 es clave para absorber el calcio, mantener huesos fuertes y un sistema inmune sano. Muchas mujeres tienen niveles bajos sin saberlo; una dosis de refuerzo de 50,000 IU ayuda a recuperarlos.",
      benefits: [
        { title: "Huesos fuertes", text: "Ayuda a absorber el calcio y mantener tus huesos sanos." },
        { title: "Sistema inmune", text: "Apoya las defensas naturales de tu cuerpo." },
        { title: "Ánimo y energía", text: "Niveles adecuados se asocian a mejor ánimo y vitalidad." },
        { title: "Dosis de refuerzo", text: "50,000 IU intramuscular para reponer niveles bajos." },
      ],
      presentations: [
        { badge: "Única presentación", name: "Inyección intramuscular", tag: "50,000 IU", text: "Aplicación intramuscular de 50,000 IU. Tu doctora define la frecuencia según tus niveles.", image: IMAGES.medicines.vitaminD3 },
      ],
      steps: [
        { title: "Elige tu tratamiento", text: "Selecciona la Vitamina D3 de 50,000 IU en aplicación intramuscular." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Un solo precio mensual, sin paquetes. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { badge: "Mes a mes", name: "Vitamina D3", subtitle: "Inyección intramuscular · 50,000 IU", price: "$110", per: "/mes", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "Vitamina D3 50,000 IU inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"], featured: true },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Cada cuánto se aplica?", answer: "Tu doctora define la frecuencia según tus niveles de vitamina D. La dosis de refuerzo de 50,000 IU suele aplicarse de forma semanal o mensual; recibirás indicaciones claras paso a paso." },
        { question: "¿Hay paquetes?", answer: "No. La Vitamina D3 se ofrece mes a mes y puedes cancelar cuando quieras. Sin paquetes ni suscripciones forzadas." },
      ],
      safetyNote: sharedSafety.es,
    },
    "vitamin-b12": {
      slug: "vitamin-b12",
      category: "Vitamina",
      name: "Vitamina B12 Metilcobalamina",
      title: "Vitamina B12",
      brush: "energiza",
      eyebrow: "Vitamina",
      tagline: "Metilcobalamina, la forma activa de la B12 que tu cuerpo aprovecha al instante.",
      description: "Metilcobalamina, la forma activa de la B12 que tu cuerpo aprovecha al instante. Combate el cansancio, apoya tu sistema nervioso y devuelve el impulso a tus días. En aplicación intramuscular, siempre tras evaluación médica.",
      metaDescription: "Vitamina B12 Metilcobalamina online con evaluación médica en español, aplicación intramuscular y envío a casa.",
      price: "desde $205/mes",
      heroPrice: "$205",
      heroPriceNote: "/ mes · todo incluido",
      chips: ["Metilcobalamina activa", "Aplicación intramuscular", "Solo con receta médica"],
      bg: "linear-gradient(158deg,#22DBF0 0%,#155AF6 52%,#966EF0 100%)",
      image: IMAGES.medicines.vitaminB12,
      theme: "cyan",
      benefitsTitle: "Energía que se siente",
      benefitsLead: "La B12 es esencial para producir energía, mantener sano tu sistema nervioso y formar glóbulos rojos. La metilcobalamina es su forma activa, lista para que tu cuerpo la use de inmediato.",
      benefits: [
        { title: "Adiós al cansancio", text: "Apoya la producción de energía y combate la fatiga." },
        { title: "Sistema nervioso sano", text: "Esencial para el buen funcionamiento de tus nervios." },
        { title: "Forma activa", text: "Metilcobalamina: lista para usarse, sin conversiones." },
        { title: "Absorción directa", text: "La vía intramuscular asegura que tu cuerpo la aproveche." },
      ],
      presentations: [
        { badge: "Única presentación", name: "Inyección intramuscular", tag: "Absorción directa", text: "Aplicación intramuscular indicada por tu doctora según tus niveles y objetivos.", image: IMAGES.medicines.vitaminB12 },
      ],
      steps: [
        { title: "Elige tu tratamiento", text: "Selecciona la Vitamina B12 metilcobalamina en aplicación intramuscular." },
        { title: "Evaluación médica y pago", text: "Una doctora revisa tu formulario. Si el tratamiento es seguro para ti, se aprueba y realizas el pago." },
        { title: "Envío a tu casa", text: "Recibes tu medicamento en la puerta de tu casa, de forma discreta y con instrucciones de uso." },
      ],
      pricingLead: "Un solo precio mensual, sin paquetes. Todo incluido: consulta médica, medicamento y envío a tu casa.",
      pricePlans: [
        { badge: "Mes a mes", name: "Vitamina B12", subtitle: "Metilcobalamina intramuscular", price: "$205", note: "Facturado cada mes · sin permanencia", features: ["Consulta médica con doctora en español", "B12 metilcobalamina inyectable", "Envío a la puerta de tu casa", "Seguimiento y ajuste de dosis"], featured: true },
      ],
      assurance: sharedAssurance.es,
      faq: [
        ...commonFaq.es,
        { question: "¿Cada cuánto se aplica?", answer: "Tu doctora define la frecuencia según tus niveles y tus objetivos. Por lo general la B12 intramuscular se aplica de forma semanal o mensual." },
        { question: "¿Hay paquetes?", answer: "No. La Vitamina B12 se ofrece mes a mes y puedes cancelar cuando quieras. Sin paquetes ni suscripciones forzadas." },
      ],
      safetyNote: sharedSafety.es,
    },
  },
} satisfies Record<"es", Record<ProductSlug, Omit<ProductDetail, "href">>>;

const englishOverrides = {
  tirzepatide: {
    category: "Weight & metabolic",
    title: "Dual-action Tirzepatide",
    brush: "weight care",
    eyebrow: "Weight & metabolic",
    tagline: "Dual-action GLP-1 + GIP treatment with medical evaluation.",
    description: "Dual-action treatment (GLP-1 + GIP) available only after medical evaluation. Personalized plan and clinical support throughout the process.",
    metaDescription: "Tirzepatide online with medical evaluation, prescription if eligible, medication and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["GLP-1 + GIP", "Injection or sublingual", "Prescription only"],
    benefitsTitle: "Designed for real weight loss",
    benefitsLead: "Tirzepatide acts on two hormones, GLP-1 and GIP, that regulate appetite and blood sugar. Designed for women with overweight or obesity, always under medical evaluation and follow-up.",
    benefits: [
      { title: "Dual GLP-1 + GIP action", text: "Acts on two receptors that help regulate appetite." },
      { title: "So eating stops feeling like a battle", text: "Supports satiety signals and hunger control." },
      { title: "Metabolic support", text: "Also participates in blood sugar regulation." },
      { title: "At your pace", text: "Weekly injection or daily drops: you choose with your doctor." },
    ],
    presentations: [
      { badge: "Most popular", name: "Injection", tag: "Clinical strength", text: "Weekly subcutaneous injection you apply at home. We teach you step by step.", image: IMAGES.medicines.tirzepatide },
      { name: "Sublingual", tag: "No needles", text: "Daily sublingual drops. A comfortable option if you prefer to avoid needles.", image: IMAGES.medicines.tirzepatide },
    ],
    steps: [
      { title: "Choose your medication", text: "Select the treatment and presentation you prefer: weekly injection or sublingual drops." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "Choose your presentation and plan. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { name: "1 month", subtitle: "Start with no commitment", price: "$276", per: "/month", note: "Billed monthly · amount may vary by dose", features: ["Medical consultation with a Spanish-speaking doctor", "Injectable vial medication", "Shipping to your door", "Follow-up and dose adjustment"] },
      { badge: "Most chosen", name: "3 months", subtitle: "The balance between price and results", price: "$244", per: "/month", note: "$747 billed every 3 months", features: ["Everything in the monthly plan", "Save $97 vs. month to month", "Scheduled shipments without interruption", "Priority WhatsApp support"], featured: true },
      { name: "6 months", subtitle: "Maximum savings and support", price: "$202", per: "/month", note: "$1,210 billed every 6 months", features: ["Everything in the 3-month plan", "Save $446 vs. month to month", "Best value plan", "Complete support for your transformation"] },
      { name: "Drops · daily use", subtitle: "Monthly sublingual plan", price: "$256.67", per: "/month", note: "Billed monthly · price may change based on each month’s dose.", features: ["Medical consultation with a Spanish-speaking doctor", "Sublingual drops medication", "Monthly plan only · no 3 or 6 month packages"] },
    ],
    faq: [
      ...commonFaq.en,
      { question: "Injection or sublingual?", answer: "The weekly injection is the most commonly used option; daily sublingual is a comfortable no-needle option. Your doctor helps you choose based on your case and preferences." },
    ],
  },
  semaglutide: {
    category: "Weight & metabolic",
    title: "Semaglutide GLP-1",
    brush: "weight care",
    eyebrow: "Weight & metabolic",
    tagline: "The most studied GLP-1 analog for weight loss.",
    description: "The most studied GLP-1 analog for weight loss. Available only after medical evaluation, with a personalized plan and clinical support throughout the process.",
    metaDescription: "Semaglutide online with medical evaluation, prescription if eligible, medication and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["GLP-1", "Injection or sublingual", "Prescription only"],
    benefitsTitle: "Designed for real weight loss",
    benefitsLead: "Semaglutide mimics GLP-1, a hormone that regulates appetite and satiety. Designed for women with overweight or obesity, always under medical evaluation and follow-up.",
    benefits: [
      { title: "The most studied GLP-1", text: "Years of clinical evidence supporting its use for weight loss." },
      { title: "So eating stops feeling like a battle", text: "GLP-1 participates in satiety and hunger signals." },
      { title: "Metabolic support", text: "Also participates in blood sugar regulation." },
      { title: "At your pace", text: "Weekly injection or daily drops: you choose with your doctor." },
    ],
    presentations: [
      { badge: "Most popular", name: "Injection", tag: "Clinical strength", text: "Weekly subcutaneous injection you apply at home. We teach you step by step.", image: IMAGES.medicines.semaglutide },
      { name: "Sublingual", tag: "No needles", text: "Daily sublingual drops. A comfortable option if you prefer to avoid needles.", image: IMAGES.medicines.semaglutide },
    ],
    steps: [
      { title: "Choose your medication", text: "Select the treatment and presentation you prefer: weekly injection or sublingual drops." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "Choose your presentation and plan. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { name: "1 month", subtitle: "Start with no commitment", price: "$160", per: "/month", note: "Billed monthly · amount may vary by dose", features: ["Medical consultation", "Injectable vial medication", "Shipping to your door", "Follow-up and dose adjustment"] },
      { badge: "Most chosen", name: "3 months", subtitle: "The balance between price and results", price: "$122", per: "/month", note: "$366 billed every 3 months", features: ["Everything in the monthly plan", "Save $114 vs. month to month", "Priority WhatsApp support"], featured: true },
      { name: "6 months", subtitle: "Maximum savings and support", price: "$109", per: "/month", note: "$656 billed every 6 months", features: ["Everything in the 3-month plan", "Save $304 vs. month to month", "Best value plan", "Complete support for your transformation"] },
      { name: "Drops · daily use", subtitle: "Monthly sublingual plan", price: "$263", per: "/month", note: "Billed monthly · price may change based on each month’s dose.", features: ["Medical consultation with a Spanish-speaking doctor", "Sublingual drops medication", "Monthly plan only · no 3 or 6 month packages"] },
    ],
    faq: [
      ...commonFaq.en,
      { question: "Injection or sublingual?", answer: "The weekly injection is the most commonly used option; daily sublingual is a comfortable no-needle option. Your doctor helps you choose based on your case and preferences." },
    ],
  },
  nad: {
    category: "Energy & longevity",
    title: "NAD+ live",
    brush: "live",
    eyebrow: "Energy & longevity",
    tagline: "The coenzyme that powers energy in every cell of your body.",
    description: "The coenzyme that powers energy in every cell of your body. Recover vitality you thought was gone and support healthy aging. Available as nasal spray or injection, always after medical evaluation.",
    metaDescription: "NAD+ online with medical evaluation, nasal or injectable presentation and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["Cellular energy", "Nasal spray or injection", "Prescription only"],
    benefitsTitle: "Fuel for your cells",
    benefitsLead: "NAD+ is an essential coenzyme for producing energy in every cell. Levels decline with age; replenishing them may support energy, focus and healthy aging.",
    benefits: [
      { title: "Cellular energy", text: "Participates in energy production inside every cell." },
      { title: "Focus and mental clarity", text: "Associated with better concentration and less brain fog." },
      { title: "Healthy aging", text: "Supports the body’s cellular repair processes." },
      { title: "At your pace", text: "Daily nasal spray or injection: you choose with your doctor." },
    ],
    presentations: [
      { badge: "Most popular", name: "Injection", tag: "Direct absorption", text: "Injection you apply at home. We teach you step by step, without complications.", image: IMAGES.medicines.nad },
      { name: "Nasal spray", tag: "No needles", text: "Daily nasal application, comfortable and quick. Ideal if you prefer to avoid needles.", image: IMAGES.medicines.nad },
    ],
    steps: [
      { title: "Choose your presentation", text: "Select how you prefer your NAD+: daily nasal spray or injection." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "Choose your presentation. One monthly price, no packages. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { badge: "Most chosen", name: "Direct absorption · month to month", subtitle: "Injectable NAD+", price: "$191", per: "/month", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "NAD+ injectable vial", "Shipping to your door", "Follow-up and dose adjustment"], featured: true },
      { name: "Comfortable and quick · month to month", subtitle: "Nasal NAD+", price: "$165", per: "/month", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "NAD+ nasal spray", "Shipping to your door"] },
    ],
    faq: [
      ...commonFaq.en,
      { question: "Injection or nasal spray?", answer: "The injection offers direct absorption; nasal spray is a comfortable no-needle option. Your doctor helps you choose based on your case and preferences." },
      { question: "Are there packages?", answer: "No. NAD+ is offered month to month and you can cancel anytime. No forced packages or subscriptions." },
    ],
  },
  sermorelin: {
    category: "Hormonal · healthy aging",
    title: "Sermorelin renew",
    brush: "renew",
    eyebrow: "Hormonal · healthy aging",
    tagline: "The peptide that stimulates your body to produce its own growth hormone.",
    description: "The peptide that stimulates your body to produce its own growth hormone (HGH). Supports deep rest, recovery and physical strength. Subcutaneous injection, always after medical evaluation.",
    metaDescription: "Sermorelin online with medical evaluation, subcutaneous application and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["Stimulates your HGH", "Subcutaneous injection", "Prescription only"],
    benefitsTitle: "Your growth hormone",
    benefitsLead: "Sermorelin is a peptide that tells your body to naturally produce more growth hormone (HGH). Levels decline with age; replenishing them may support rest, recovery and body composition.",
    benefits: [
      { title: "Deep rest", text: "Supports more restorative sleep and a better rest rhythm." },
      { title: "Recovery and muscle", text: "Supports physical recovery and maintenance of muscle mass." },
      { title: "Energy and vitality", text: "Associated with more daily energy and better mood." },
      { title: "Natural HGH", text: "Stimulates your own growth hormone, without replacing it." },
    ],
    presentations: [
      { badge: "Single presentation", name: "Subcutaneous injection", tag: "Daily application", text: "Small subcutaneous injection you apply at home, usually before bed. We teach you step by step.", image: IMAGES.medicines.sermorelin },
    ],
    steps: [
      { title: "Choose your treatment", text: "Select your Sermorelin treatment in subcutaneous injection." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "One monthly price, no packages. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { badge: "Month to month", name: "Sermorelin", subtitle: "Subcutaneous injection · daily application", price: "$197", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "Sermorelin injectable vial", "Shipping to your door", "Follow-up and dose adjustment"], featured: true },
    ],
    faq: [
      ...commonFaq.en,
      { question: "How is it applied?", answer: "Your doctor defines frequency and dose based on your case. Sermorelin is usually applied as a small daily subcutaneous injection, normally before bed." },
      { question: "Are there packages?", answer: "No. Sermorelin is offered month to month and you can cancel anytime. No forced packages or subscriptions." },
    ],
  },
  glutathione: {
    category: "Antioxidant",
    name: "Glutathione",
    title: "Glutathione glow",
    brush: "glow",
    eyebrow: "Antioxidant",
    tagline: "Your body’s master antioxidant.",
    description: "Your body’s master antioxidant. Supports detoxification, energy and skin health. Available as nasal spray or injection, always after medical evaluation.",
    metaDescription: "Glutathione online with medical evaluation, nasal or injectable presentation and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["Master antioxidant", "Nasal spray or injection", "Prescription only"],
    benefitsTitle: "The master antioxidant",
    benefitsLead: "Glutathione is the main antioxidant your body produces. It helps neutralize oxidative stress, support liver detoxification and maintain luminous skin.",
    benefits: [
      { title: "Antioxidant defense", text: "Helps neutralize free radicals and oxidative stress." },
      { title: "Detoxification support", text: "Supports the liver’s natural cleansing processes." },
      { title: "Luminous skin", text: "Associated with more even, healthier-looking skin." },
      { title: "At your pace", text: "Daily nasal spray or injection: you choose with your doctor." },
    ],
    presentations: [
      { badge: "Most popular", name: "Injection", tag: "Direct absorption", text: "Injection you apply at home. We teach you step by step, without complications.", image: IMAGES.medicines.glutathione },
      { name: "Nasal spray", tag: "No needles", text: "Daily nasal application, comfortable and quick. Ideal if you prefer to avoid needles.", image: IMAGES.medicines.glutathione },
    ],
    steps: [
      { title: "Choose your presentation", text: "Select how you prefer your glutathione: daily nasal spray or injection." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "Choose your presentation. One monthly price, no packages. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { badge: "Most chosen", name: "Direct absorption · month to month", subtitle: "Injectable glutathione", price: "$211", per: "/month", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "Glutathione injectable vial", "Shipping to your door", "Follow-up and dose adjustment"], featured: true },
      { name: "Comfortable and quick · month to month", subtitle: "Nasal glutathione", price: "$129", per: "/month", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "Glutathione nasal spray", "Shipping to your door"] },
    ],
    faq: [
      ...commonFaq.en,
      { question: "Injection or nasal spray?", answer: "The injection offers direct absorption; nasal spray is a comfortable no-needle option. Your doctor helps you choose based on your case and preferences." },
      { question: "Are there packages?", answer: "No. Glutathione is offered month to month and you can cancel anytime. No forced packages or subscriptions." },
    ],
  },
  "vitamin-d3": {
    category: "Vitamin",
    name: "Vitamin D3",
    title: "Vitamin D3 strengthen",
    brush: "strengthen",
    eyebrow: "Vitamin",
    tagline: "The sunshine vitamin, in a 50,000 IU booster dose.",
    description: "The sunshine vitamin, in a 50,000 IU booster dose. Supports your bones, immune system and daily energy. Intramuscular application, always after medical evaluation.",
    metaDescription: "Vitamin D3 online with medical evaluation, 50,000 IU booster dose and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["50,000 IU", "Intramuscular application", "Prescription only"],
    benefitsTitle: "The sunshine vitamin",
    benefitsLead: "Vitamin D3 is key for absorbing calcium, maintaining strong bones and supporting a healthy immune system. Many women have low levels without knowing it; a 50,000 IU booster dose helps replenish them.",
    benefits: [
      { title: "Strong bones", text: "Helps absorb calcium and maintain healthy bones." },
      { title: "Immune system", text: "Supports your body’s natural defenses." },
      { title: "Mood and energy", text: "Adequate levels are associated with better mood and vitality." },
      { title: "Booster dose", text: "50,000 IU intramuscular application to replenish low levels." },
    ],
    presentations: [
      { badge: "Single presentation", name: "Intramuscular injection", tag: "50,000 IU", text: "50,000 IU intramuscular application. Your doctor defines frequency based on your levels.", image: IMAGES.medicines.vitaminD3 },
    ],
    steps: [
      { title: "Choose your treatment", text: "Select Vitamin D3 50,000 IU in intramuscular application." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "One monthly price, no packages. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { badge: "Month to month", name: "Vitamin D3", subtitle: "Intramuscular injection · 50,000 IU", price: "$110", per: "/month", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "Injectable Vitamin D3 50,000 IU", "Shipping to your door", "Follow-up and dose adjustment"], featured: true },
    ],
    faq: [
      ...commonFaq.en,
      { question: "How often is it applied?", answer: "Your doctor defines frequency based on your vitamin D levels. The 50,000 IU booster dose is usually applied weekly or monthly; you will receive clear step-by-step instructions." },
      { question: "Are there packages?", answer: "No. Vitamin D3 is offered month to month and you can cancel anytime. No forced packages or subscriptions." },
    ],
  },
  "vitamin-b12": {
    category: "Vitamin",
    name: "B12 Methylcobalamin",
    title: "Vitamin B12",
    brush: "energize",
    eyebrow: "Vitamin",
    tagline: "Methylcobalamin, the active B12 form your body can use right away.",
    description: "Methylcobalamin, the active B12 form your body can use right away. Helps fight tiredness, supports your nervous system and brings momentum back to your days. Intramuscular application, always after medical evaluation.",
    metaDescription: "Vitamin B12 Methylcobalamin online with medical evaluation, intramuscular application and home shipping.",
    heroPriceNote: "/ month · all included",
    chips: ["Active methylcobalamin", "Intramuscular application", "Prescription only"],
    benefitsTitle: "Energy you can feel",
    benefitsLead: "B12 is essential for producing energy, maintaining a healthy nervous system and forming red blood cells. Methylcobalamin is its active form, ready for your body to use.",
    benefits: [
      { title: "Goodbye fatigue", text: "Supports energy production and helps fight fatigue." },
      { title: "Healthy nervous system", text: "Essential for proper nerve function." },
      { title: "Active form", text: "Methylcobalamin: ready to use, no conversions needed." },
      { title: "Direct absorption", text: "The intramuscular route helps your body use it." },
    ],
    presentations: [
      { badge: "Single presentation", name: "Intramuscular injection", tag: "Direct absorption", text: "Intramuscular application indicated by your doctor based on your levels and goals.", image: IMAGES.medicines.vitaminB12 },
    ],
    steps: [
      { title: "Choose your treatment", text: "Select Vitamin B12 methylcobalamin in intramuscular application." },
      { title: "Medical evaluation and payment", text: "A doctor reviews your form. If treatment is safe for you, it is approved and you complete payment." },
      { title: "Shipping to your home", text: "Your medication arrives discreetly at your door with usage instructions." },
    ],
    pricingLead: "One monthly price, no packages. Everything included: medical consultation, medication and shipping to your home.",
    pricePlans: [
      { badge: "Month to month", name: "Vitamin B12", subtitle: "Intramuscular methylcobalamin", price: "$205", note: "Billed monthly · no commitment", features: ["Medical consultation with a Spanish-speaking doctor", "Injectable B12 methylcobalamin", "Shipping to your door", "Follow-up and dose adjustment"], featured: true },
    ],
    faq: [
      ...commonFaq.en,
      { question: "How often is it applied?", answer: "Your doctor defines frequency based on your levels and goals. Intramuscular B12 is usually applied weekly or monthly." },
      { question: "Are there packages?", answer: "No. Vitamin B12 is offered month to month and you can cancel anytime. No forced packages or subscriptions." },
    ],
  },
} satisfies Record<ProductSlug, Partial<ProductDetail>>;

const enDetails = Object.fromEntries(
  PRODUCT_SLUGS.map((slug) => {
    const es = details.es[slug];
    const override = englishOverrides[slug];
    return [slug, {
      ...es,
      ...override,
      href: productHref("en", slug),
      price: es.price.replace(/^desde/i, "from").replace("/mes", "/month"),
      heroPrice: es.heroPrice.replace(/^Desde/i, "From"),
      assurance: sharedAssurance.en,
      safetyNote: sharedSafety.en,
    }];
  })
) as Record<ProductSlug, ProductDetail>;

export function productHref(locale: Locale, slug: ProductSlug) {
  if (slug === "vitamin-d3") return ROUTES[locale].vitaminD3;
  if (slug === "vitamin-b12") return ROUTES[locale].vitaminB12;
  return ROUTES[locale][slug];
}

export function getProducts(locale: Locale): ProductCard[] {
  return PRODUCT_SLUGS.map((slug) => {
    const product = getProductDetail(locale, slug)!;
    return {
      slug,
      category: product.category,
      name: product.name,
      tagline: product.tagline,
      price: product.price,
      href: product.href,
      bg: product.bg,
      image: product.image,
      featured: product.featured,
    };
  });
}

export function getProductDetail(locale: Locale, slug: string): ProductDetail | undefined {
  const normalizedSlug = slug === "glp-1" ? "tirzepatide" : slug;
  if (!PRODUCT_SLUGS.includes(normalizedSlug as ProductSlug)) return undefined;

  const productSlug = normalizedSlug as ProductSlug;
  if (locale === "en") return enDetails[productSlug];

  return {
    ...details.es[productSlug],
    href: productHref(locale, productSlug),
  };
}
