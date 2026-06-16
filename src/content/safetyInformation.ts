import type { Locale } from "@/config/site";

const ENGLISH_SECTIONS = {
  title: "GLP-1 Safety Information",
  description:
    "Medication-related programs require clinical review by an independent licensed provider. This page highlights common risk areas, important warnings, and when to seek urgent medical attention.",
  intro:
    "Medication-related programs require clinical review by an independent licensed provider. This page highlights common risk areas, important warnings, and when to seek urgent medical attention. It is not a substitute for medical advice or the provider's prescribing information.",
  contraindicationsTitle: "Who should not use GLP-1 treatment without provider approval",
  contraindications: [
    "Anyone with a personal or family history of medullary thyroid carcinoma (MTC)",
    "Anyone with Multiple Endocrine Neoplasia syndrome type 2 (MEN2)",
    "Anyone with a known serious allergic reaction to the active medication or its ingredients",
    "Anyone who is pregnant, trying to become pregnant, or breastfeeding should discuss risks and alternatives with the prescribing clinician before treatment",
  ],
  cautionTitle: "Tell the provider before treatment if you have a history of",
  cautionItems: [
    "Pancreatitis or severe abdominal pain",
    "Gallbladder disease or gallstones",
    "Kidney problems, dehydration, or repeated vomiting",
    "Diabetic retinopathy or major vision changes",
    "Other prescription medicines that can affect blood sugar",
  ],
  commonSideEffectsTitle: "Common side effects",
  commonSideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain or indigestion", "Reduced appetite"],
  urgentTitle: "Seek urgent medical care if you develop",
  urgentItems: [
    "Severe or persistent abdominal pain, especially if it radiates to the back",
    "Signs of a serious allergic reaction such as swelling, trouble breathing, or widespread rash",
    "Severe dehydration, fainting, or inability to keep fluids down",
    "Symptoms that feel rapidly worsening or unsafe after a dose",
  ],
  compoundingTitle: "Compounded medication caution",
  compoundingBody:
    "GLP-1 medications, when prescribed, may be compounded formulations prepared by a licensed partner compounding pharmacy. Compounded medications are not reviewed by the FDA for safety, effectiveness, or quality, and are not equivalent or interchangeable with FDA-approved brand-name medications. Follow the dispensing instructions carefully and ask the pharmacy or provider to confirm the exact dose and injection technique.",
  disclaimer:
    "LYT Health Management LLC does not prescribe or dispense medication. Independent providers determine eligibility, clinical appropriateness, and prescribing decisions.",
};

const SPANISH_SECTIONS = {
  title: "Información de seguridad sobre GLP-1",
  description:
    "Los programas con medicación requieren evaluación clínica por parte de un proveedor independiente y licenciado. Esta página resume riesgos frecuentes, advertencias importantes y señales para buscar atención urgente.",
  intro:
    "Los programas con medicación requieren evaluación clínica por parte de un proveedor independiente y licenciado. Esta página resume riesgos frecuentes, advertencias importantes y señales para buscar atención urgente. No reemplaza consejo médico ni la información oficial de prescripción del proveedor.",
  contraindicationsTitle: "Quién no debería usar tratamiento GLP-1 sin aprobación médica",
  contraindications: [
    "Personas con antecedente personal o familiar de carcinoma medular de tiroides (MTC)",
    "Personas con síndrome de neoplasia endocrina múltiple tipo 2 (MEN2)",
    "Personas con antecedente de reacción alérgica grave al medicamento activo o a sus ingredientes",
    "Personas embarazadas, en búsqueda de embarazo o en lactancia deben discutir riesgos y alternativas con el profesional tratante antes de iniciar tratamiento",
  ],
  cautionTitle: "Informa al proveedor antes del tratamiento si tienes antecedentes de",
  cautionItems: [
    "Pancreatitis o dolor abdominal severo",
    "Enfermedad de vesícula o cálculos biliares",
    "Problemas renales, deshidratación o vómitos repetidos",
    "Retinopatía diabética o cambios visuales importantes",
    "Otros medicamentos recetados que puedan afectar el azúcar en sangre",
  ],
  commonSideEffectsTitle: "Efectos secundarios comunes",
  commonSideEffects: ["Náuseas", "Vómitos", "Diarrea", "Estreñimiento", "Dolor abdominal o indigestión", "Disminución del apetito"],
  urgentTitle: "Busca atención médica urgente si presentas",
  urgentItems: [
    "Dolor abdominal intenso o persistente, especialmente si se irradia a la espalda",
    "Señales de reacción alérgica grave como hinchazón, dificultad para respirar o sarpullido extendido",
    "Deshidratación severa, desmayo o incapacidad para retener líquidos",
    "Síntomas que empeoran rápido o se sienten inseguros después de una dosis",
  ],
  compoundingTitle: "Precaución con medicamentos compuestos",
  compoundingBody:
    "Los medicamentos GLP-1, cuando sean prescritos, pueden ser formulaciones compounded preparadas por una farmacia de compounding licenciada asociada. Los medicamentos compounded no son evaluados por la FDA en cuanto a seguridad, eficacia o calidad, y no son equivalentes ni intercambiables con medicamentos de marca aprobados por la FDA. Sigue con precisión las instrucciones de dispensación y pide a la farmacia o al proveedor que te confirme la dosis exacta y la técnica de inyección.",
  disclaimer:
    "LYT Health Management LLC no prescribe ni despacha medicación. Los proveedores independientes determinan elegibilidad, criterio clínico y decisiones de prescripción.",
};

function list(items: readonly string[]) {
  return items.map((item) => `• ${item}`).join("\n");
}

export function getSafetyInformationContent(locale: Locale) {
  const copy = locale === "es" ? SPANISH_SECTIONS : ENGLISH_SECTIONS;

  return {
    title: copy.title,
    description: copy.description,
    content: `${copy.intro}\n\n${copy.contraindicationsTitle}\n${list(copy.contraindications)}\n\n${copy.cautionTitle}\n${list(copy.cautionItems)}\n\n${copy.commonSideEffectsTitle}\n${list(copy.commonSideEffects)}\n\n${copy.urgentTitle}\n${list(copy.urgentItems)}\n\n${copy.compoundingTitle}\n${copy.compoundingBody}\n\n${copy.disclaimer}`,
  };
}
