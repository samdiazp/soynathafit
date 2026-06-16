import type { Locale } from "@/config/site";

export const CONTENT = {
  es: {
    seo: {
      homeTitle: "LYT · Tu doctora. Tu idioma. Tu cultura.",
      homeDescription:
        "Telesalud creada por y para latinas en EE.UU. Medicamentos con receta, doctoras con licencia, atención en español y envío de farmacia certificada.",
    },
    common: {
      startQuiz: "Empezar cuestionario",
      qualify: "¿Califico para el tratamiento?",
      login: "Iniciar sesión",
      learnMore: "Conocer más",
      viewCatalog: "Ver catálogo completo",
      whatsapp: "Hablar por WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "Tu espacio · tu tiempo · tu turno",
        title: ["Medicina", "seria", "cuidado", "familiar"],
        lead: "Telesalud creada por y para latinas en EE.UU. Tu doctora, tu receta y tu seguimiento, en español, desde tu celular.",
        stats: [
          { value: "<24h", label: "Respuesta médica" },
          { value: "100%", label: "En español" },
          { value: "50", label: "Estados cubiertos" },
        ],
        cardTitle: "Telesalud · GLP-1 · Comunidad",
        cardSubtitle: "Cuidado médico para tu vida real",
      },
      trust: [
        "Doctoras con licencia",
        "Atención HIPAA compliant",
        "Recetas sólo si calificas",
        "Sin promesas milagro",
      ],
      medicines: {
        eyebrow: "Medicamentos",
        title: "Tratamientos que se ajustan a tu cuerpo.",
        lead: "Todo medicamento se receta sólo después de evaluación clínica. Priorizamos seguridad, claridad y seguimiento.",
        note: "Importante: los precios indicados son desde y pueden variar según dosis, estado, farmacia y plan personalizado. No vendemos suplementos ni atajos.",
      },
      process: {
        eyebrow: "Cómo funciona",
        title: "Sin sala de espera. Sin tener que traducirte.",
        lead: "Llenas tu cuestionario, una doctora revisa tu caso y recibes un plan escrito. Si aplica, tu medicamento llega a tu puerta.",
        steps: [
          {
            title: "Cuestionario médico",
            text: "Tu historia clínica, síntomas, medicamentos actuales y objetivos, todo en español.",
          },
          {
            title: "Revisión de tu doctora",
            text: "Evaluamos riesgos, alternativas y si el tratamiento tiene sentido para ti.",
          },
          {
            title: "Plan y seguimiento",
            text: "Recibes instrucciones claras y revisiones para ajustar de forma segura.",
          },
        ],
      },
      results: {
        eyebrow: "Testimonios",
        title: "Cuidado que se siente cercano.",
        stories: [
          {
            quote:
              "Por primera vez sentí que mi doctora entendía mi vida, no sólo mis laboratorios.",
            name: "Paciente LYT",
            label: "Seguimiento metabólico",
          },
          {
            quote:
              "Me explicaron riesgos y opciones sin venderme una solución mágica.",
            name: "Paciente LYT",
            label: "Consulta en español",
          },
          {
            quote:
              "Poder escribir mis dudas y recibir guía clara cambió mi experiencia médica.",
            name: "Paciente LYT",
            label: "Plan GLP-1",
          },
        ],
      },
      founder: {
        eyebrow: "La fundadora",
        title: "LYT nació para que no tengas que pedir permiso para cuidarte.",
        body: "Diseñamos una experiencia médica para mujeres latinas que viven entre dos culturas y necesitan claridad, cercanía y responsabilidad clínica.",
      },
      faq: {
        eyebrow: "Preguntas frecuentes",
        title: "lo que querias preguntar.",
        items: [
          {
            question: "¿LYT es solo para perder peso?",
            answer:
              "No. LYT es una clínica de telesalud integral para mujeres latinas. Cubrimos pérdida de peso, salud hormonal, salud mental, piel y cabello según disponibilidad y evaluación clínica.",
          },
          {
            question: "¿Necesito tener seguro médico para usar LYT?",
            answer:
              "No. LYT trabaja con precios transparentes y no depende de tu insurance ni de copays escondidos. Si tienes HSA o FSA, puedes consultar si aplica para tu plan.",
          },
          {
            question: "¿Las doctoras hablan español?",
            answer:
              "Si. Nuestras doctoras son bilingues, tienen licencia activa en EE.UU. y conocen la cultura latina. No traducimos: hablamos contigo desde el primer mensaje.",
          },
          {
            question: "¿Que pasa si vivo en un estado donde LYT aun no opera?",
            answer:
              "Cubrimos la mayoria de estados con tratamientos compounded. Si tu estado no esta cubierto, te avisamos durante el cuestionario y te ponemos en lista de espera sin cobrarte.",
          },
          {
            question: "¿De donde viene el medicamento que me envian?",
            answer:
              "De farmacias compounding certificadas en EE.UU., reguladas por la FDA y los boards estatales de farmacia. Cada tratamiento se ofrece solo después de una evaluación clínica adecuada.",
          },
          {
            question: "¿Cuanto cuesta empezar?",
            answer:
              "El cuestionario inicial no tiene compromiso. Solo pagas si tu doctora aprueba el plan y tu decides continuar. Los precios mensuales varian por medicamento, dosis, estado y farmacia.",
          },
          {
            question: "¿Y si tengo dudas en la noche o un fin de semana?",
            answer:
              "Puedes escribir por el canal de soporte indicado. Para urgencias reales, como dolor agudo o dificultad para respirar, siempre debes llamar al 911.",
          },
          {
            question: "¿Como cancelo o pauso mi tratamiento?",
            answer:
              "Puedes pausar o cancelar tu plan sin llamadas de retención. Tu equipo médico puede ayudarte a hacer una pausa segura si lo prefieres.",
          },
        ],
      },
      cta: {
        eyebrow: "Empieza con claridad",
        title: "Tu próxima decisión médica puede sentirse tranquila.",
        lead: "Completa el cuestionario inicial. Te diremos si LYT puede acompañarte y cuál sería el siguiente paso.",
      },
    },
    catalog: {
      title: "Catálogo de tratamientos",
      description:
        "Explora las áreas de cuidado médico disponibles en LYT. Cada plan inicia con evaluación clínica.",
      seoTitle: "Catálogo de tratamientos · LYT",
      seoDescription:
        "Catálogo LYT de tratamientos médicos online para mujeres latinas en EE.UU., con evaluación clínica y atención en español.",
    },
    howItWorks: {
      title: "Cómo funciona LYT",
      description:
        "Un proceso claro: cuestionario médico, revisión clínica, plan y seguimiento.",
      seoTitle: "Cómo funciona · LYT",
      seoDescription:
        "Conoce cómo funciona LYT: cuestionario médico en español, revisión por doctora con licencia y seguimiento online.",
      steps: [
        {
          number: "01",
          title: "Cuestionario en español",
          text: "Te preguntamos por síntomas, historia clínica, medicamentos y contexto real. No checkboxes genéricos.",
        },
        {
          number: "02",
          title: "Revisión médica",
          text: "Una doctora revisa tu caso y define si necesitas consulta, laboratorios o alternativas.",
        },
        {
          number: "03",
          title: "Plan escrito",
          text: "Recibes instrucciones, riesgos, alternativas y próximos pasos por escrito.",
        },
        {
          number: "04",
          title: "Seguimiento",
          text: "Ajustamos el plan si algo no funciona, sin que tengas que volver a contar todo desde cero.",
        },
      ],
    },
    legal: {
      intro:
        "Este contenido es una guía inicial. Reemplázalo con el documento legal revisado por tu equipo.",
      pages: {
        "terms-of-use": {
          title: "Términos de uso",
          description:
            "Condiciones generales para acceder y usar los servicios de LYT.",
        },
        "privacy-policy": {
          title: "Políticas de privacidad",
          description:
            "Cómo LYT recopila, usa, comparte y protege tu información.",
        },
        "notice-of-privacy-practices": {
          title: "Aviso HIPAA",
          description:
            "Aviso de prácticas de privacidad para servicios médicos y datos de salud protegidos.",
        },
        "safety-information": {
          title: "Información de seguridad",
          description:
            "Información importante sobre seguridad, elegibilidad, riesgos y uso apropiado de tratamientos.",
        },
        "terms-and-conditions": {
          title: "Términos y condiciones",
          description:
            "Paquete legal y condiciones aplicables a los servicios de LYT.",
        },
        "terminos-y-condiciones": {
          title: "Términos y condiciones",
          description: "Condiciones generales de uso de LYT.",
        },
        privacidad: {
          title: "Política de privacidad",
          description: "Cómo LYT recopila, usa y protege tu información.",
        },
        "consentimiento-telesalud": {
          title: "Consentimiento de telesalud",
          description:
            "Información sobre atención médica remota y consentimiento del paciente.",
        },
      },
    },
  },
  en: {
    seo: {
      homeTitle: "LYT · Your doctor. Your language. Your culture.",
      homeDescription:
        "Telehealth created by and for Latinas in the U.S. Prescription medication, licensed doctors, Spanish support and certified pharmacy shipping.",
    },
    common: {
      startQuiz: "Start questionnaire",
      qualify: "Do I qualify?",
      login: "Log in",
      learnMore: "Learn more",
      viewCatalog: "View full catalog",
      whatsapp: "Talk on WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "Your space · your time · your turn",
        title: ["Serious", "medicine", "familiar", "care"],
        lead: "Telehealth created by and for Latinas in the U.S. Your doctor, prescription and follow-up, in Spanish, from your phone.",
        stats: [
          { value: "<24h", label: "Medical response" },
          { value: "100%", label: "In Spanish" },
          { value: "50", label: "States covered" },
        ],
        cardTitle: "Telehealth · GLP-1 · Community",
        cardSubtitle: "Medical care for real life",
      },
      trust: [
        "Licensed doctors",
        "HIPAA compliant care",
        "Prescriptions only if eligible",
        "No miracle claims",
      ],
      medicines: {
        eyebrow: "Treatments",
        title: "Care that adjusts to your body.",
        lead: "Medication is prescribed only after clinical evaluation. We prioritize safety, clarity and follow-up.",
        note: "Important: prices shown are starting ranges and may vary by dose, state, pharmacy and personalized plan. We do not sell supplements or shortcuts.",
      },
      process: {
        eyebrow: "How it works",
        title: "No waiting room. No translating yourself.",
        lead: "You complete your questionnaire, a doctor reviews your case and you receive a written plan. When applicable, medication ships to your door.",
        steps: [
          {
            title: "Medical questionnaire",
            text: "Your history, symptoms, current medications and goals, all in Spanish.",
          },
          {
            title: "Doctor review",
            text: "We evaluate risks, alternatives and whether treatment makes sense for you.",
          },
          {
            title: "Plan and follow-up",
            text: "You receive clear instructions and reviews to adjust safely.",
          },
        ],
      },
      results: {
        eyebrow: "Testimonials",
        title: "Care that feels close.",
        stories: [
          {
            quote:
              "For the first time, I felt my doctor understood my life, not just my labs.",
            name: "LYT patient",
            label: "Metabolic follow-up",
          },
          {
            quote:
              "They explained risks and options without selling me a magic solution.",
            name: "LYT patient",
            label: "Care in Spanish",
          },
          {
            quote:
              "Being able to ask questions and receive clear guidance changed my medical experience.",
            name: "LYT patient",
            label: "GLP-1 plan",
          },
        ],
      },
      founder: {
        eyebrow: "The founder",
        title:
          "LYT was built so you do not need permission to care for yourself.",
        body: "We designed a medical experience for Latina women living between two cultures who need clarity, warmth and clinical responsibility.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "you wanted to ask.",
        items: [
          {
            question: "Is LYT only for weight loss?",
            answer:
              "No. LYT is an integrated telehealth clinic for Latina women. We cover weight care, hormonal health, mental health, skin and hair depending on availability and clinical evaluation.",
          },
          {
            question: "Do I need insurance to use LYT?",
            answer:
              "No. LYT works with transparent pricing and does not depend on insurance or hidden copays. If you have HSA or FSA funds, you can check whether they apply to your plan.",
          },
          {
            question: "Do the doctors speak Spanish?",
            answer:
              "Yes. Our doctors are bilingual, licensed in the U.S. and understand Latina culture. We do not translate care; we speak with you from the first message.",
          },
          {
            question: "What if LYT does not operate in my state yet?",
            answer:
              "We cover most states with compounded treatments. If your state is not covered, we tell you during the questionnaire and add you to the waitlist without charging you.",
          },
          {
            question: "Where does the medication come from?",
            answer:
              "From certified U.S. compounding pharmacies regulated by the FDA and state pharmacy boards. Every treatment is offered only after appropriate clinical evaluation.",
          },
          {
            question: "How much does it cost to start?",
            answer:
              "The initial questionnaire has no commitment. You only pay if your doctor approves a plan and you choose to continue. Monthly prices vary by medication, dose, state and pharmacy.",
          },
          {
            question: "What if I have questions at night or on a weekend?",
            answer:
              "You can write through the support channel provided. For real emergencies, such as acute pain or difficulty breathing, always call 911.",
          },
          {
            question: "How do I cancel or pause treatment?",
            answer:
              "You can pause or cancel without retention calls. Your medical team can guide you through a safe pause if you prefer.",
          },
        ],
      },
      cta: {
        eyebrow: "Start with clarity",
        title: "Your next medical decision can feel calm.",
        lead: "Complete the initial questionnaire. We will tell you whether LYT can support you and what comes next.",
      },
    },
    catalog: {
      title: "Treatment catalog",
      description:
        "Explore medical care areas available at LYT. Every plan starts with clinical evaluation.",
      seoTitle: "Treatment catalog · LYT",
      seoDescription:
        "LYT treatment catalog for online medical care for Latina women in the U.S., with clinical evaluation and care in Spanish.",
    },
    howItWorks: {
      title: "How LYT works",
      description:
        "A clear process: medical questionnaire, clinical review, plan and follow-up.",
      seoTitle: "How it works · LYT",
      seoDescription:
        "Learn how LYT works: medical questionnaire in Spanish, review by a licensed doctor and online follow-up.",
      steps: [
        {
          number: "01",
          title: "Questionnaire in Spanish",
          text: "We ask about symptoms, medical history, medications and real-life context. No generic checkboxes.",
        },
        {
          number: "02",
          title: "Medical review",
          text: "A doctor reviews your case and defines whether you need a visit, labs or alternatives.",
        },
        {
          number: "03",
          title: "Written plan",
          text: "You receive instructions, risks, alternatives and next steps in writing.",
        },
        {
          number: "04",
          title: "Follow-up",
          text: "We adjust your plan if something is not working, without making you retell your story.",
        },
      ],
    },
    legal: {
      intro:
        "This content is a starter guide. Replace it with the legal document reviewed by your team.",
      pages: {
        "terms-of-use": {
          title: "Terms of Use",
          description: "General terms for accessing and using LYT services.",
        },
        "privacy-policy": {
          title: "Privacy Policy",
          description:
            "How LYT collects, uses, shares and protects your information.",
        },
        "notice-of-privacy-practices": {
          title: "HIPAA Notice",
          description:
            "Notice of privacy practices for medical services and protected health information.",
        },
        "safety-information": {
          title: "Safety Information",
          description:
            "Important safety, eligibility, risk and appropriate-use information for treatments.",
        },
        "terms-and-conditions": {
          title: "Terms and Conditions",
          description:
            "Legal packet and conditions applicable to LYT services.",
        },
        privacy: {
          title: "Privacy policy",
          description: "How LYT collects, uses and protects your information.",
        },
        "telehealth-consent": {
          title: "Telehealth consent",
          description:
            "Information about remote medical care and patient consent.",
        },
      },
    },
  },
} satisfies Record<Locale, unknown>;

export function getContent(locale: Locale) {
  return CONTENT[locale];
}
