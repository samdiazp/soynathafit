export type LegalDocumentType =
  | "cookies"
  | "refund"
  | "privacy"
  | "hipaa"
  | "terms"
  | "nda"
  | "nonSolicitation";

export interface LegalDocument {
  id: LegalDocumentType;
  titleEn: string;
  titleEs: string;
  contentEn: string;
  contentEs: string;
}

export type LegalLocale = "en" | "es";

export interface LocalizedLegalDocument {
  id: LegalDocumentType;
  title: string;
  content: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    id: "cookies",
    titleEn: "Cookie Policy",
    titleEs: "Política de Cookies",
    contentEn: `COOKIE POLICY

1. What Are Cookies?
Cookies are small text files placed on your device (computer, phone, or tablet) when you visit a website. They are widely used to make websites function properly, improve user experience, and provide information to website operators.

Cookies may be:
• Session cookies (deleted when you close your browser)
• Persistent cookies (remain until deleted or expired)
• First-party cookies (set by LYT)
• Third-party cookies (set by external providers)

2. How LYT Uses Cookies
LYT Health Management LLC ("LYT," "we," "us") may use cookies and similar technologies to:
• Operate and maintain our website and platform
• Enable essential functionality (checkout, login, security)
• Improve performance and user experience
• Understand how visitors interact with our website
• Support analytics and website optimization
• Support advertising and marketing efforts, where applicable

3. Types of Cookies We May Use

a) Strictly Necessary Cookies
These cookies are required for the website to function properly and cannot be disabled.
Examples:
• Security
• Session management
• Checkout and payments
• Account access

b) Performance & Analytics Cookies
We may use analytics tools (such as Google Analytics or similar services) to understand website usage and improve functionality.
These cookies collect aggregated and anonymized data and do not directly identify you.

c) Advertising & Marketing Cookies
We may use advertising technologies (such as pixels or tags) to:
• Measure the effectiveness of marketing campaigns
• Deliver relevant content or ads
• Enable retargeting, where permitted by law

We do not share protected health information (PHI) with advertising networks.

4. Third-Party Cookies
Some cookies may be placed by third-party service providers, including but not limited to:
• Website hosting providers
• Payment processors (e.g., Shopify, Stripe)
• Analytics providers
• Advertising or marketing platforms

These third parties process data in accordance with their own privacy policies.

5. Do Not Sell or Share My Personal Information (California Residents)
If you are a California resident, you have the right to opt out of the sale or sharing of your personal information under applicable law.

You may exercise this right by contacting us at:
admin@lytmanagement.com
Subject line: "Do Not Sell or Share My Personal Information"

LYT does not sell protected health information.

6. How to Manage Cookies
You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.

Browser instructions:
• Chrome
• Safari
• Firefox
• Edge

7. Updates to This Cookie Policy
We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.

8. Contact Us
If you have questions about this Cookie Policy, contact us at:
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
    contentEs: `POLÍTICA DE COOKIES

1. ¿Qué son las cookies?
Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para que los sitios funcionen correctamente, mejorar la experiencia del usuario y proporcionar información a los operadores del sitio.

Las cookies pueden ser:
• Cookies de sesión (se eliminan al cerrar el navegador)
• Cookies persistentes (permanecen hasta ser eliminadas o expirar)
• Cookies propias (establecidas por LYT)
• Cookies de terceros (establecidas por proveedores externos)

2. Cómo utiliza LYT las cookies
LYT Health Management LLC ("LYT", "nosotros") puede utilizar cookies y tecnologías similares para:
• Operar y mantener el sitio web y la plataforma
• Habilitar funciones esenciales (checkout, acceso, seguridad)
• Mejorar el rendimiento y la experiencia del usuario
• Analizar cómo los usuarios interactúan con el sitio
• Apoyar análisis y optimización del sitio
• Apoyar esfuerzos de publicidad y marketing, cuando aplique

3. Tipos de cookies que podemos utilizar

a) Cookies estrictamente necesarias
Son esenciales para el funcionamiento del sitio y no pueden desactivarse.
Ejemplos:
• Seguridad
• Gestión de sesiones
• Pagos y checkout
• Acceso a cuentas

b) Cookies de rendimiento y analítica
Podemos utilizar herramientas de analítica (como Google Analytics u otras similares) para comprender el uso del sitio y mejorar su funcionamiento.
Los datos recopilados son agregados y no identifican directamente al usuario.

c) Cookies de publicidad y marketing
Podemos utilizar tecnologías publicitarias (como píxeles o etiquetas) para:
• Medir la efectividad de campañas
• Mostrar contenido o anuncios relevantes
• Permitir retargeting cuando la ley lo permita

LYT no comparte información médica protegida con redes publicitarias.

4. Cookies de terceros
Algunas cookies pueden ser instaladas por proveedores externos, incluyendo:
• Proveedores de hosting
• Procesadores de pago (Shopify, Stripe)
• Proveedores de analítica
• Plataformas de publicidad o marketing

Estos terceros procesan la información conforme a sus propias políticas de privacidad.

5. No vender ni compartir mi información personal (California)
Si resides en California, tienes derecho a solicitar que no se venda ni comparta tu información personal.

Puedes ejercer este derecho escribiendo a:
admin@lytmanagement.com
Asunto: "Do Not Sell or Share My Personal Information"

LYT no vende información médica protegida.

6. Cómo gestionar las cookies
Puedes configurar o desactivar cookies desde tu navegador. Ten en cuenta que algunas funciones del sitio pueden verse afectadas.

7. Cambios a esta Política de Cookies
LYT puede actualizar esta política ocasionalmente. Las modificaciones se publicarán con la fecha actualizada.

8. Contacto
Para preguntas sobre esta Política de Cookies:
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
  },
  {
    id: "refund",
    titleEn: "Refund & Subscription Policy",
    titleEs: "Política de Reembolsos y Suscripciones",
    contentEn: `REFUND & SUBSCRIPTION POLICY – LYT HEALTH MANAGEMENT LLC

Refund Policy

All sales are final.

LYT Health Management LLC ("LYT") does not offer refunds, returns, credits, partial refunds, or exchanges under any circumstances.

This policy applies to, including but not limited to:
• Digital programs, memberships, coaching, and community access
• Live or recorded training sessions
• Educational nutrition content
• Wellness coaching and accountability support
• Telehealth coordination, referrals, or administrative services
• Any program that may include potential access to prescription medication

Once payment is successfully processed and access to the Services is granted, the Services are considered delivered and non-refundable, regardless of actual usage.

Failure to use the Services, early withdrawal, lack of participation, personal circumstances, dissatisfaction with results, or perceived lack of progress does not qualify for a refund.

Medical Approval Disclaimer

Access to prescription medication is determined solely by an independent, licensed healthcare Provider.

LYT does not guarantee:
• Medical approval
• Eligibility
• Issuance of a prescription

If a Provider determines that a user is not medically eligible, no refund will be issued.

In such cases, the user may be offered the option to continue with a non-medication program, subject to availability and at LYT's discretion.

Subscriptions & Renewals

LYT currently offers manual renewal plans only.

Subscriptions do not auto-renew unless explicitly stated in writing at the time of purchase.

Users are solely responsible for renewing their plan if they wish to continue accessing the Services.

Failed Payments

If a payment is declined, reversed, or otherwise fails:
• Access to the Services may be immediately suspended or terminated
• LYT is under no obligation to continue providing Services until payment is successfully resolved

Chargebacks & Payment Disputes

Initiating a chargeback, payment dispute, or reversal with a bank or payment processor without first contacting LYT constitutes a violation of this policy and the Terms of Service.

LYT reserves the right to:
• Immediately suspend or terminate access to Services
• Permanently revoke access without refund
• Dispute chargebacks when evidence shows acceptance of Terms and delivery of Services

Policy Acknowledgment

By purchasing, accessing, or using the Services, you acknowledge that you have read, understood, and agreed to this Refund & Subscription Policy.`,
    contentEs: `POLÍTICA DE REEMBOLSOS Y SUSCRIPCIONES – LYT HEALTH MANAGEMENT LLC

Política de Reembolsos

Todas las ventas son finales.

LYT Health Management LLC ("LYT") no ofrece reembolsos, devoluciones, créditos, reembolsos parciales ni cambios bajo ninguna circunstancia.

Esta política aplica, sin limitarse a:
• Programas digitales, membresías, coaching y acceso a comunidad
• Entrenamientos en vivo o grabados
• Contenido educativo de nutrición
• Acompañamiento y soporte de bienestar
• Coordinación o referidos de telemedicina
• Programas que puedan incluir acceso potencial a medicación con receta

Una vez procesado el pago y otorgado el acceso a los Servicios, estos se consideran prestados y no reembolsables, independientemente del uso que el usuario haga de los mismos.

El no uso del servicio, abandono del programa, falta de participación, situaciones personales o inconformidad con los resultados no califican para reembolso.

Descargo sobre Aprobación Médica

La elegibilidad para recibir medicación con receta es determinada exclusivamente por un proveedor médico independiente y licenciado.

LYT no garantiza:
• Aprobación médica
• Elegibilidad
• Emisión de recetas

Si un proveedor determina que el usuario no es médicamente apto, no se emitirá ningún reembolso.

En dichos casos, el usuario podrá optar por continuar en un programa sin medicación, sujeto a disponibilidad y a discreción de LYT.

Suscripciones y Renovaciones

Actualmente, LYT ofrece planes con renovación manual.

Las suscripciones no se renuevan automáticamente, salvo que se indique expresamente por escrito al momento de la compra.

El usuario es responsable de renovar su plan si desea continuar accediendo a los Servicios.

Pagos Fallidos

Si un pago es rechazado, revertido o falla:
• El acceso a los Servicios podrá ser suspendido o cancelado de inmediato
• LYT no tiene obligación de continuar prestando Servicios hasta que el pago sea resuelto correctamente

Contracargos y Disputas de Pago (Chargebacks)

Iniciar un contracargo o disputa de pago sin contactar previamente a LYT constituye una violación de esta política y de los Términos de Servicio.

LYT se reserva el derecho de:
• Suspender o cancelar el acceso de forma inmediata
• Revocar el acceso permanentemente sin reembolso
• Disputar formalmente cualquier contracargo cuando existan registros de aceptación de los Términos y prestación del servicio

Aceptación de la Política

Al comprar, acceder o utilizar los Servicios, el usuario reconoce que ha leído, comprendido y aceptado esta Política de Reembolsos y Suscripciones.`,
  },
  {
    id: "privacy",
    titleEn: "Privacy Policy",
    titleEs: "Política de Privacidad",
    contentEn: `PRIVACY POLICY

LYT Health Management LLC ("LYT," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your information when you access or use our websites, checkout pages, portals, communities, programs, and related services (collectively, the "Platform" or "Services").

By accessing or using the Services, creating an account, purchasing, or otherwise interacting with LYT, you acknowledge that you have read and understand this Privacy Policy.

If you do not agree with this Privacy Policy, please do not use the Services.

1. LEGAL ENTITY & CONTACT INFORMATION

Legal Entity:
LYT Health Management LLC
State of Formation: Florida
Address: 10 SW South River Dr, Miami, FL 33130
Email (Privacy & Support): admin@lytmanagement.com

2. WHAT LYT IS (AND IS NOT)

LYT is not a medical provider and does not provide medical care.

LYT operates as a wellness platform and management services organization (MSO) that provides:
• Fitness and wellness programming
• Educational nutrition content (non-clinical)
• Coaching and accountability support (non-clinical)
• Community access
• Administrative and coordination services

Medical consultations, diagnoses, prescriptions, and clinical decisions are provided solely by independent, licensed healthcare providers ("Providers") operating on their own HIPAA-compliant platforms. Medications, if prescribed, are dispensed and shipped by licensed third-party pharmacies.

LYT does not control medical decision-making.

3. INFORMATION WE COLLECT

A. Information You Provide to Us

Account & Registration Information
• Full name
• Email address
• Phone number
• Physical address
• Date of birth
• Biological sex (used solely to personalize nutrition and wellness plans)

Payment Information
• Payments are processed through Shopify (with Stripe as the underlying processor)
• LYT does not store full credit card numbers
• Only payment tokens and transaction records are retained

Identification & Verification
• For non-medical products: basic identification data may be requested
• For medical services: identity verification (e.g., photo ID) is collected directly by the medical provider, not by LYT

User Content
• Progress tracking data
• Optional before/after photos (for personal progress)
• Messages, communications, and files you submit

Photos, testimonials, or content are never published without explicit user consent.

B. Health-Related Information
• Medical intake forms, symptoms, diagnoses, prescriptions, and treatment data are collected and stored only on the Provider's HIPAA-compliant platform
• LYT may view limited, non-clinical data strictly to:
  - Correct technical errors
  - Ensure proper routing of information to Providers
• LYT does not store or maintain Protected Health Information (PHI)

C. Automatically Collected Information

We may automatically collect:
• IP address
• Device and browser information
• Pages viewed, session duration, interactions
• General location (city/state level)

4. ANALYTICS & ADVERTISING TECHNOLOGIES (MAY USE)

LYT may use analytics, tracking, and advertising technologies, including but not limited to:
• Cookies
• Pixels
• Similar technologies

These may include:
• Analytics tools (e.g., Google Analytics)
• Advertising or retargeting pixels (e.g., Meta, TikTok)

These tools may collect information about your interaction with the Platform to:
• Improve user experience
• Measure performance
• Deliver relevant content or ads

LYT does not share medical or health data with advertising networks.

Do Not Sell or Share
Users may request to opt out of the sale or sharing of personal information by contacting:
admin@lytmanagement.com

5. COMMUNICATIONS

By providing your contact information, you consent to receive communications via:
• Email
• SMS/text messages
• Phone calls
• WhatsApp
• Telegram

These communications may include:
• Account updates
• Program delivery
• Scheduling
• Customer support
• Marketing (where permitted)

Opt-out options are provided for marketing messages (e.g., "STOP" for SMS, unsubscribe links).

6. TESTIMONIALS & USER CONTENT

• Testimonials may be requested voluntarily
• Written, video, or image testimonials are only published with explicit consent
• Before/after photos are used for personal tracking and never shared publicly without authorization
• Social media reposts require consent

7. SHARING OF INFORMATION

We may share information with:
• Service providers (payment processing, hosting, email delivery, customer support)
• Telehealth providers and pharmacies (when applicable)
• Legal or regulatory authorities when required by law

We do not sell personal data and do not share health data for advertising purposes.

8. DATA RETENTION

We retain personal and operational data for up to three (3) years, unless a longer period is required by law.

Upon account closure:
• Data may be deleted, anonymized, or retained for legal, accounting, or compliance purposes

9. DATA SECURITY

We use reasonable administrative, technical, and physical safeguards to protect personal information, including:
• Access controls
• Limited internal access (support, operations, coaches)
• Secure platforms and vendors

No system is 100% secure. Use of the Platform is at your own risk.

10. MINORS & ELIGIBILITY

• Services are intended for individuals 18 years or older
• Medication-related services are not available for minors
• We do not knowingly collect data from children

11. HIPAA & MEDICAL PRIVACY

Medical services are governed by the Provider's Notice of Privacy Practices (NPP), which applies to Protected Health Information collected by Providers.

LYT's Privacy Policy applies only to non-PHI information collected through the Platform.

12. CHANGES TO THIS POLICY

We may update this Privacy Policy periodically. Updates will be posted on the Platform. Continued use constitutes acceptance.

13. CONTACT

Questions or requests regarding privacy may be sent to:
admin@lytmanagement.com`,
    contentEs: `POLÍTICA DE PRIVACIDAD – LYT HEALTH MANAGEMENT LLC

LYT Health Management LLC ("LYT", "nosotros") respeta tu privacidad y se compromete a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos tu información cuando usas nuestra plataforma.

Al acceder o utilizar los Servicios, confirmas que has leído y comprendido esta Política.

1. IDENTIDAD LEGAL

Entidad: LYT Health Management LLC
Estado: Florida
Dirección: 10 SW South River Dr, Miami, FL 33130
Email: admin@lytmanagement.com

2. MODELO DE LYT

LYT no es una clínica ni presta servicios médicos.

LYT actúa como plataforma de bienestar y coordinación.

Los servicios médicos, diagnósticos y prescripciones son provistos exclusivamente por proveedores médicos independientes bajo sus propias plataformas compatibles con HIPAA.

3. DATOS QUE RECOPILAMOS

Información básica
• Nombre
• Email
• Teléfono
• Dirección
• Fecha de nacimiento
• Género biológico (para personalización de planes)

Pagos
• Procesados vía Shopify / Stripe
• No almacenamos tarjetas completas

Datos de salud
• El intake médico y datos clínicos se manejan únicamente en el portal del proveedor
• LYT solo accede a información básica para asegurar el flujo técnico

4. ANALÍTICA Y PUBLICIDAD (PUEDE USARSE)

LYT puede utilizar cookies, píxeles y tecnologías similares para:
• Analítica
• Optimización
• Publicidad y retargeting

Nunca compartimos datos médicos con plataformas publicitarias.

Puedes solicitar Do Not Sell or Share My Information escribiendo a
admin@lytmanagement.com

5. COMUNICACIONES

Aceptas recibir comunicaciones por:
• Email
• SMS
• WhatsApp
• Telegram
• Llamadas

Puedes darte de baja de mensajes de marketing cuando corresponda.

6. TESTIMONIOS Y CONTENIDO

• Testimonios y fotos solo se publican con consentimiento explícito
• Fotos antes/después son privadas salvo autorización expresa

7. TERCEROS

Compartimos información solo con:
• Proveedores técnicos
• Telehealth
• Farmacias
• Procesadores de pago

No vendemos datos personales.

8. RETENCIÓN

Los datos se conservan hasta 3 años, salvo obligación legal.

9. SEGURIDAD

Aplicamos medidas razonables de seguridad y accesos limitados.

10. MENORES

Servicios solo para mayores de 18 años.

11. HIPAA

La información médica está regulada por el Notice of Privacy Practices del proveedor médico.

12. CAMBIOS

Podemos actualizar esta Política. El uso continuo implica aceptación.

13. CONTACTO

admin@lytmanagement.com`,
  },
  {
    id: "hipaa",
    titleEn: "Notice of Privacy Practices",
    titleEs: "Aviso de Prácticas de Privacidad",
    contentEn: `NOTICE OF PRIVACY PRACTICES

Effective Date: April 25, 2026

IMPORTANT
This notice applies to medical services that may be provided through independent, licensed healthcare providers and pharmacies associated with The LYT Method experience. LYT Health Management LLC publishes this notice for transparency, but LYT itself is not a medical provider, does not practice medicine, and does not maintain clinical decision-making authority.

If you receive a medical consultation, prescription review, or medication-related service, your protected health information (PHI) is governed by the applicable independent provider's HIPAA-compliant practices.

1. WHO THIS NOTICE APPLIES TO
This notice applies to PHI created, received, or maintained by:
• Independent licensed healthcare providers who evaluate eligibility, diagnose, or prescribe
• Licensed third-party pharmacies that fulfill prescription products, when applicable

This notice does not expand LYT's role beyond wellness, coaching, administrative coordination, customer support, and platform operations.

2. HOW MEDICAL INFORMATION MAY BE USED OR DISCLOSED
Independent providers and pharmacies may use or disclose PHI for purposes permitted by law, including:
• Treatment
• Payment
• Healthcare operations
• Public health and safety reporting
• Legal, regulatory, or law-enforcement obligations
• Appointment reminders, refill coordination, and care communications

3. WHAT LYT MAY ACCESS
LYT may receive limited non-clinical or operational information necessary to support your experience, such as:
• Whether your intake was submitted
• Whether a consultation has been scheduled or completed
• Whether an order or shipment status needs coordination
• Non-clinical support requests

LYT does not determine diagnoses, prescribe medications, or control the provider's clinical judgment.

4. YOUR RIGHTS
Depending on the provider relationship and applicable law, you may have the right to:
• Request access to your medical records
• Request corrections to inaccurate PHI
• Request limits on certain disclosures
• Request confidential communications
• Receive an accounting of certain disclosures
• Obtain a copy of the provider's current HIPAA notice
• File a complaint without retaliation

5. HOW TO EXERCISE HIPAA RIGHTS
Requests involving PHI must be directed to the independent medical provider or pharmacy that created or maintains the record. If you are unsure who to contact, email admin@lytmanagement.com and LYT will route your request to the appropriate clinical or pharmacy contact when available.

6. COMPLAINTS
If you believe your HIPAA rights were violated, you may file a complaint with the applicable provider or with the U.S. Department of Health and Human Services, Office for Civil Rights.

7. QUESTIONS
For general platform privacy questions, contact:
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
    contentEs: `AVISO DE PRÁCTICAS DE PRIVACIDAD

Fecha de vigencia: 25 de abril de 2026

IMPORTANTE
Este aviso aplica a los servicios médicos que puedan prestarse a través de proveedores de salud independientes, licenciados, y farmacias que participen en la experiencia de The LYT Method. LYT Health Management LLC publica este aviso por transparencia, pero LYT no es un proveedor médico, no practica medicina y no mantiene autoridad sobre decisiones clínicas.

Si recibes una consulta médica, revisión de prescripción o un servicio relacionado con medicación, tu información de salud protegida (PHI) se rige por las prácticas compatibles con HIPAA del proveedor independiente correspondiente.

1. A QUIÉN APLICA ESTE AVISO
Este aviso aplica a la PHI creada, recibida o mantenida por:
• Proveedores de salud independientes y licenciados que evalúan elegibilidad, diagnostican o prescriben
• Farmacias licenciadas de terceros que despachan productos con receta, cuando aplique

Este aviso no amplía el rol de LYT más allá de bienestar, coaching, coordinación administrativa, soporte al cliente y operación de plataforma.

2. CÓMO PUEDE UTILIZARSE O DIVULGARSE LA INFORMACIÓN MÉDICA
Los proveedores independientes y farmacias pueden utilizar o divulgar PHI para fines permitidos por ley, incluyendo:
• Tratamiento
• Pago
• Operaciones de salud
• Reportes de salud pública y seguridad
• Obligaciones legales, regulatorias o de autoridades
• Recordatorios de citas, coordinación de refill y comunicaciones de cuidado

3. A QUÉ PUEDE ACCEDER LYT
LYT puede recibir información limitada, no clínica u operativa, necesaria para apoyar tu experiencia, como por ejemplo:
• Si tu intake fue enviado
• Si una consulta fue agendada o completada
• Si un pedido o envío necesita coordinación
• Solicitudes de soporte no clínico

LYT no determina diagnósticos, no prescribe medicamentos y no controla el criterio clínico del proveedor.

4. TUS DERECHOS
Según la relación con el proveedor y la ley aplicable, podrías tener derecho a:
• Solicitar acceso a tus registros médicos
• Solicitar correcciones de PHI inexacta
• Solicitar límites a ciertas divulgaciones
• Solicitar comunicaciones confidenciales
• Recibir un detalle de ciertas divulgaciones
• Obtener una copia del aviso HIPAA vigente del proveedor
• Presentar una queja sin represalias

5. CÓMO EJERCER TUS DERECHOS HIPAA
Las solicitudes relacionadas con PHI deben dirigirse al proveedor médico independiente o a la farmacia que creó o mantiene el registro. Si no sabes a quién contactar, escribe a admin@lytmanagement.com y LYT intentará canalizar tu solicitud al contacto clínico o farmacéutico correspondiente, cuando esté disponible.

6. QUEJAS
Si crees que se violaron tus derechos HIPAA, puedes presentar una queja ante el proveedor correspondiente o ante la Office for Civil Rights del U.S. Department of Health and Human Services.

7. PREGUNTAS
Para consultas generales sobre privacidad de la plataforma, contacta a:
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
  },
  {
    id: "terms",
    titleEn: "Terms of Use",
    titleEs: "Términos de Servicio",
    contentEn: `LYT – TERMS OF USE

MEDICAL EMERGENCY
IF YOU HAVE A MEDICAL EMERGENCY, IMMEDIATELY DIAL 9-1-1 (OR YOUR LOCAL EMERGENCY NUMBER).

These Terms of Use ("Terms" or "Agreement") govern your access to and use of the website(s), checkout pages, portals, communities, and related services operated by LYT Health Management LLC ("LYT," "we," "us," "our") (collectively, the "Platform"), including any programs, coaching, training content, community access, and customer support (the "Services").

By accessing the Platform, creating an account, purchasing, clicking "I agree," checking any acceptance box, or otherwise using the Services, you acknowledge that you have read and agree to be bound by these Terms, our Privacy Policy, and any additional policies referenced here (including our Refund/Subscription policy, if posted).

Privacy & HIPAA Notice
Your use of the Services is also governed by our Privacy Policy, which explains how LYT collects, uses, and protects personal information. Medical services, when applicable, are provided by independent healthcare providers operating under HIPAA. Any protected health information (PHI) you submit in connection with medical services is governed by the applicable provider's Notice of Privacy Practices, which is made available through the provider's platform and incorporated herein by reference.

1. Not for Emergency Use
The Services do not provide emergency care and are not a substitute for emergency medical treatment or 911 services. LYT has no obligation to monitor or respond to emergency communications.

2. What LYT Is (and Is Not)
LYT provides wellness programming, fitness training, education, coaching support, community access, and administrative platform functionality (e.g., payments, account access, scheduling assistance, customer support).

LYT does not provide medical care, does not practice medicine, and does not prescribe medications. If you choose to pursue medical services (including prescriptions), those services are provided solely by independent, licensed healthcare providers ("Providers") and, when applicable, medications are dispensed and shipped by licensed third-party pharmacies ("Pharmacies"). Providers are not employees or agents of LYT, and LYT does not control clinical decision-making.

No Guarantee of Prescription. A prescription is never guaranteed. Providers determine eligibility and appropriateness in their sole medical judgment.

3. Scope of Services
Depending on what you purchase or access, the Services may include:
• Live and/or recorded workouts and training content
• Educational nutrition guidance (not medical nutrition therapy)
• Coaching and accountability support (non-clinical)
• Community access (e.g., Telegram, Zoom, etc.)
• Administrative support and customer service
• Connection/referral to telehealth Provider(s) when applicable

4. Eligibility; Restrictions
You represent that you are at least 18 years old.

The medication component (if offered) is available U.S. only, subject to Provider approval and applicable law. The online program content may be available worldwide; however, you are responsible for ensuring use is lawful where you live.

Pregnancy and Breastfeeding: Participation in any medication-related program is not available if pregnant or breastfeeding, and you should not enroll in such services.

5. Health Disclaimer (Fitness / Nutrition / Coaching)
All content is provided for general educational and informational purposes only. Coaching, workouts, and nutrition content are not medical advice and do not diagnose, treat, cure, or prevent any disease. Always consult your physician or qualified healthcare professional before starting any fitness program, nutrition changes, or medication.

You understand that any fitness activity carries inherent risks and you assume full responsibility for your participation.

6. Medication Programs; Provider Approval; Fulfillment
If you purchase a program that includes potential medication access:
• Your eligibility must be determined by a Provider.
• LYT does not handle, store, or ship medication.
• After Provider approval and prescription, medication (if prescribed) is fulfilled and shipped by a Pharmacy directly to you.
• If the Provider determines you are not eligible or medication is not appropriate, you may be offered a non-medication program option.

Billing Approach: You will not be charged unless you are medically pre-approved/eligible (as described in your checkout flow).

7. Payments; Renewals; No Refunds
LYT may offer monthly and/or quarterly plans. Renewals are manual at this time unless your checkout states otherwise.

NO REFUNDS. All sales are final. If you stop using the Services or do not participate after purchase, you are not entitled to a refund, credit, or partial refund.

Failed Payments: If a payment fails or is reversed, Services may be suspended or terminated until payment is resolved.

8. Account; Security
You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You may not share access or allow others to use your account.

9. Intellectual Property; Anti-Copy; Anti-Spy Protection
All content and materials provided through the Services (including workouts, videos, PDFs, methods, scripts, protocols, communities, recordings, program structure, branding, and any downloadable assets) are owned by LYT or its licensors and protected by intellectual property laws.

You are granted a limited, non-transferable, revocable license to use the content for personal, non-commercial use only.

You agree you will not:
• Copy, record, reproduce, distribute, publish, resell, or sublicense any content
• Share program materials outside the Services
• Create derivative works or replicate the program/method for competing offerings
• Use the Services to compete with LYT or for commercial purposes
• "Spy," scrape, data-mine, or systematically extract content or member information

Violation may result in immediate termination without refund and may expose you to legal remedies.

10. Non-Solicitation (Members & Community)
You may not solicit, recruit, or attempt to move members, customers, or participants off the Platform for competing services, coaching, programs, or products. This includes direct messages, emails, WhatsApp, Telegram, or any off-platform contact obtained through LYT. Violation may lead to termination and legal action.

11. User Conduct
You agree not to harass, abuse, threaten, impersonate, defraud, or harm others; post illegal content; or disrupt communities. LYT may remove content and suspend/terminate access at its discretion.

12. Communications Consent (Email / SMS / Calls / WhatsApp / Telegram)
By providing your contact information, you consent to receive communications from LYT via email, SMS/text, phone calls, WhatsApp, and Telegram for service delivery, support, account updates, scheduling, and program communications.

For marketing messages, you may opt out where applicable. Message/data rates may apply. You are responsible for keeping your contact information updated.

13. Third-Party Services
The Services may link to or integrate with third-party platforms or services (including telehealth providers, pharmacies, payment processors, messaging platforms). Your use of third-party services may be governed by their own terms. LYT is not responsible for third-party performance, policies, or services.

14. Analytics & Advertising Technologies
LYT may use analytics and advertising technologies to operate, maintain, improve, and market the Services. These technologies may include, without limitation, cookies, pixels, tags, and similar tracking tools.

The information collected through these technologies may include device information, browser type, IP address, general location, pages visited, interactions with the Platform, and usage patterns.

LYT uses this information to:
• Improve functionality and user experience
• Understand how users interact with the Platform
• Measure the effectiveness of marketing and advertising efforts

LYT does not knowingly share protected health information (PHI) with advertising networks and does not use health-related data for targeted advertising.

Where required by applicable law, users may exercise their rights by selecting "Do Not Sell or Share My Personal Information."

15. Disclaimer of Warranties
THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." LYT DISCLAIMS ALL WARRANTIES TO THE MAXIMUM EXTENT PERMITTED BY LAW, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. LYT DOES NOT GUARANTEE RESULTS, OUTCOMES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.

16. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY LAW, LYT WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.

17. Indemnification
You agree to defend, indemnify, and hold harmless LYT from claims arising out of your use of the Services, your violation of these Terms, or your violation of any law or third-party rights.

18. Binding Individual Arbitration; Class Action Waiver
PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.

You and LYT agree that any dispute arising out of or relating to these Terms or the Services will be resolved by binding, individual arbitration, and you waive the right to a jury trial and to participate in any class action.

Arbitration will be administered by a recognized arbitration provider (e.g., JAMS/AAA) under its applicable consumer rules. The Federal Arbitration Act applies.

Venue / Governing Law: Florida law governs these Terms, and arbitration/any permitted court proceedings will be conducted in Florida, unless prohibited by applicable law.

Arbitration Opt-Out (30 Days)
You may opt out of the arbitration and class action waiver provisions of this Agreement by providing written notice to LYT within thirty (30) days of the date you first accept these Terms.

To opt out, you must send an email to admin@lytmanagement.com with your full name, mailing address, email address associated with your account, and a clear statement that you wish to opt out of arbitration. Opting out of arbitration does not affect any other provisions of these Terms.

19. Changes to Terms
We may update these Terms by posting a revised version. Continued use of the Services after changes become effective constitutes acceptance.

20. Termination
We may suspend or terminate access at any time for violations of these Terms. Sections relating to IP, disclaimers, limitation of liability, disputes/arbitration, and indemnification survive termination.

21. NO GUARANTEE OF RESULTS
LYT does not guarantee any specific results of any kind, including, without limitation, weight loss, physical changes, metabolic improvements, lab results, emotional well-being, or program adherence.

Results depend on multiple individual factors, including consistency, personal habits, medical history, genetics, compliance with recommendations, and, where applicable, the independent Provider's medical decisions.

By using the Services, you acknowledge and agree that results vary from person to person, and that LYT makes no promises, guarantees, or representations regarding specific outcomes.

22. CHARGEBACKS, PAYMENT DISPUTES, AND FRAUD
• Initiating a chargeback, payment dispute, or payment reversal with your bank or payment processor without first contacting LYT constitutes a material breach of these Terms.
• In the event of a chargeback, dispute, or suspected payment fraud:
  - Access to the Services may be immediately suspended or terminated, without refund.
  - LYT reserves the right to block future purchases or access.
  - Any fees, penalties, or costs incurred by LYT as a result of the chargeback may be charged back to the user to the fullest extent permitted by law.
  - LYT reserves the right to formally dispute any chargeback where there is evidence of acceptance of these Terms, use of the Services, or delivery of digital content or services.

23. CONTACT
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
    contentEs: `TÉRMINOS DE SERVICIO – THE LYT METHOD

EMERGENCIA MÉDICA
SI TIENES UNA EMERGENCIA MÉDICA, LLAMA DE INMEDIATO AL 9-1-1 (O AL NÚMERO DE EMERGENCIA LOCAL).

Estos Términos de Servicio ("Términos" o "Acuerdo") regulan el acceso y uso de los sitios web, páginas de compra, portales, comunidades y servicios relacionados operados por LYT Health Management LLC ("LYT", "nosotros", "nuestro") (en conjunto, la "Plataforma"), incluyendo programas, coaching, contenido de entrenamiento, acceso a comunidad y soporte al cliente (los "Servicios").

Al acceder a la Plataforma, crear una cuenta, comprar, hacer clic en "Acepto", marcar una casilla de aceptación o utilizar los Servicios, confirmas que leíste y aceptas estos Términos, nuestra Política de Privacidad y cualquier política adicional referenciada aquí (incluyendo la política de reembolsos/suscripciones si está publicada).

Aviso de Privacidad y HIPAA
El uso de los Servicios también se rige por nuestra Política de Privacidad, la cual describe cómo LYT recopila, utiliza y protege la información personal. Los servicios médicos, cuando correspondan, son prestados por proveedores de salud independientes que operan bajo HIPAA. Cualquier información de salud protegida (PHI) que suministres en relación con servicios médicos se rige por el Aviso de Prácticas de Privacidad del proveedor correspondiente, disponible a través de su plataforma y aquí incorporado por referencia.

1. No apto para emergencias
Los Servicios no brindan atención de emergencia y no sustituyen atención médica urgente ni servicios 911. LYT no tiene obligación de monitorear ni responder comunicaciones de emergencia.

2. Qué es LYT (y qué no es)
LYT ofrece programación de bienestar, entrenamiento físico, educación, acompañamiento/coaching, acceso a comunidad y funciones administrativas de plataforma (por ejemplo: pagos, acceso a cuenta, asistencia de agenda, soporte al cliente).

LYT no brinda atención médica, no practica medicina y no prescribe medicamentos. Si eliges acceder a servicios médicos (incluyendo prescripciones), esos servicios son provistos únicamente por proveedores de salud independientes y licenciados ("Proveedores") y, cuando aplique, los medicamentos son dispensados y enviados por farmacias licenciadas de terceros ("Farmacias"). Los Proveedores no son empleados ni agentes de LYT, y LYT no controla decisiones clínicas.

No hay garantía de prescripción. Nunca se garantiza una receta. Los Proveedores determinan elegibilidad y conveniencia bajo su criterio médico.

3. Alcance de los Servicios
Dependiendo de lo que compres o a lo que accedas, los Servicios pueden incluir:
• Entrenamientos en vivo y/o grabados
• Guías de alimentación educativas (no clínicas)
• Coaching y acompañamiento (no clínico)
• Acceso a comunidad (por ejemplo Telegram, Zoom, etc.)
• Soporte administrativo y servicio al cliente
• Conexión/referencia a Proveedor(es) de telehealth cuando aplique

4. Elegibilidad y restricciones
Declaras que tienes 18 años o más.

El componente de medicación (si se ofrece) está disponible solo en EE. UU., sujeto a aprobación del Proveedor y a la ley aplicable. El programa online puede estar disponible globalmente; sin embargo, tú eres responsable de asegurarte de que su uso sea legal donde resides.

Embarazo y lactancia: La participación en cualquier programa relacionado con medicación no está disponible si estás embarazada o en lactancia, y no deberías inscribirte en esos servicios.

5. Descargo (fitness / nutrición / coaching)
Todo el contenido se ofrece con fines educativos e informativos generales. El coaching, entrenamientos y contenido de alimentación no constituyen consejo médico y no diagnostican, tratan, curan o previenen enfermedades. Consulta siempre con un médico o profesional calificado antes de iniciar un programa de ejercicio, cambios de alimentación o medicación.

Entiendes que la actividad física implica riesgos inherentes y asumes toda responsabilidad por tu participación.

6. Programas con medicación; aprobación médica; despacho
Si compras un programa que incluye potencial acceso a medicación:
• Tu elegibilidad debe ser determinada por un Proveedor.
• LYT no manipula, almacena ni envía medicamentos.
• Luego de aprobación y prescripción por el Proveedor, el medicamento (si es prescrito) es despachado y enviado por una Farmacia directamente a tu domicilio.
• Si el Proveedor determina que no eres elegible o que la medicación no es apropiada, se te puede recomendar una opción de programa sin medicación.

Modelo de cobro: No se realiza el cobro a menos que exista pre-aprobación/aptitud médica según el flujo indicado en tu proceso de compra.

7. Pagos; renovaciones; no reembolsos
LYT puede ofrecer planes mensuales y/o trimestrales. Por el momento las renovaciones son manuales, salvo que en tu proceso de compra se indique lo contrario.

NO HAY REEMBOLSOS. Todas las ventas son finales. Si dejas de usar los Servicios o no participas después de comprar, no tienes derecho a reembolso, crédito ni devolución parcial.

Pagos fallidos: Si un pago falla o es revertido, los Servicios pueden ser suspendidos o terminados hasta que se resuelva el pago.

8. Cuenta y seguridad
Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada en tu cuenta. No puedes compartir acceso ni permitir que terceros utilicen tu cuenta.

9. Propiedad intelectual; prohibición de copia; protección anti-espionaje
Todo el contenido y materiales provistos a través de los Servicios (incluyendo entrenamientos, videos, PDFs, métodos, guiones, protocolos, comunidades, grabaciones, estructura del programa, marca y activos descargables) pertenecen a LYT o a sus licenciantes y están protegidos por leyes de propiedad intelectual.

Se te otorga una licencia limitada, no transferible y revocable para uso personal y no comercial.

Aceptas que no vas a:
• Copiar, grabar, reproducir, distribuir, publicar, revender o sublicenciar contenido
• Compartir materiales del programa fuera de los Servicios
• Crear obras derivadas o replicar el programa/método para ofertas competidoras
• Usar los Servicios para competir con LYT o con fines comerciales
• "Espiar", extraer, scrapear, minar datos o recolectar sistemáticamente contenido o datos de miembros

El incumplimiento puede resultar en terminación inmediata sin reembolso y acciones legales.

10. No captación (Non-Solicitation) de miembros y comunidad
No puedes solicitar, reclutar o intentar mover miembros/clientes/participantes fuera de la Plataforma para servicios competidores, coaching, programas o productos. Esto incluye mensajes directos, emails, WhatsApp, Telegram o cualquier contacto fuera de la Plataforma obtenido por LYT.

El incumplimiento puede implicar expulsión/terminación y acciones legales.

11. Conducta del usuario
Aceptas no acosar, abusar, amenazar, suplantar identidad, defraudar o perjudicar a otras personas; no publicar contenido ilegal; ni interrumpir comunidades. LYT puede remover contenido y suspender/terminar acceso a su criterio.

12. Consentimiento de comunicaciones (Email / SMS / llamadas / WhatsApp / Telegram)
Al proporcionar tu información de contacto, aceptas recibir comunicaciones de LYT por email, SMS/texto, llamadas telefónicas, WhatsApp y Telegram para entrega del servicio, soporte, actualizaciones de cuenta, agenda y comunicaciones del programa.

Para mensajes de marketing, puedes darte de baja cuando aplique. Pueden aplicar tarifas de tu operador. Eres responsable de mantener tu información actualizada.

13. Servicios de terceros
Los Servicios pueden incluir enlaces o integraciones con terceros (incluyendo telehealth, farmacias, procesadores de pago y plataformas de mensajería). El uso de servicios de terceros puede regirse por sus propios términos. LYT no es responsable por desempeño, políticas o servicios de terceros.

14. Tecnologías de Analítica y Publicidad
LYT puede utilizar tecnologías de analítica y publicidad para operar, mantener, mejorar y promocionar los Servicios. Estas tecnologías pueden incluir, sin limitarse a, cookies, píxeles, etiquetas y herramientas de rastreo similares.

La información recopilada mediante estas tecnologías puede incluir datos del dispositivo, tipo de navegador, dirección IP, ubicación general, páginas visitadas, interacciones con la Plataforma y patrones de uso.

LYT utiliza esta información para:
• Mejorar la funcionalidad y la experiencia del usuario
• Comprender cómo las personas interactúan con la Plataforma
• Medir la efectividad de esfuerzos de marketing y publicidad

LYT no comparte de forma consciente información de salud protegida (PHI) con redes publicitarias ni utiliza datos relacionados con la salud para publicidad dirigida.

Cuando la ley aplicable lo requiera, los usuarios podrán ejercer sus derechos mediante la opción "No vender ni compartir mi información personal."

15. Renuncia de garantías
LOS SERVICIOS SE PROVEEN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". LYT RECHAZA TODAS LAS GARANTÍAS EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, INCLUYENDO GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO INFRACCIÓN. LYT NO GARANTIZA RESULTADOS, NI QUE EL SERVICIO SEA ININTERRUMPIDO O LIBRE DE ERRORES.

16. Limitación de responsabilidad
EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, LYT NO SERÁ RESPONSABLE POR DAÑOS INDIRECTOS, INCIDENTALES, CONSECUENCIALES, ESPECIALES, EJEMPLARES O PUNITIVOS, NI POR PÉRDIDA DE GANANCIAS, DATOS O INTERRUPCIÓN DEL NEGOCIO, DERIVADOS O RELACIONADOS CON TU USO DE LOS SERVICIOS.

17. Indemnización
Aceptas defender, indemnizar y mantener indemne a LYT ante reclamos derivados de tu uso de los Servicios, tu incumplimiento de estos Términos o tu violación de leyes o derechos de terceros.

18. Arbitraje individual vinculante; renuncia a demanda colectiva
LEE ESTA SECCIÓN CON ATENCIÓN. AFECTA TUS DERECHOS LEGALES.

Tú y LYT acuerdan que cualquier disputa derivada o relacionada con estos Términos o los Servicios se resolverá mediante arbitraje individual vinculante, renunciando al derecho a juicio con jurado y a participar en demandas colectivas o arbitrajes colectivos.

El arbitraje será administrado por una entidad reconocida (por ejemplo JAMS/AAA) bajo sus reglas aplicables de consumidor. Aplica la Federal Arbitration Act (FAA).

Ley aplicable / jurisdicción: Estos Términos se rigen por las leyes del Estado de Florida, y el arbitraje y/o cualquier proceso permitido por ley se llevará a cabo en Florida, salvo que la ley disponga lo contrario.

Exclusión Voluntaria del Arbitraje (30 Días)
Puedes optar por no participar en las disposiciones de arbitraje y renuncia a demandas colectivas notificando por escrito a LYT dentro de los treinta (30) días siguientes a la fecha en que aceptes por primera vez estos Términos.

Para excluirte, debes enviar un correo a admin@lytmanagement.com indicando tu nombre completo, dirección postal, correo electrónico asociado a tu cuenta y una declaración clara de que deseas excluirte del arbitraje. La exclusión del arbitraje no afecta ninguna otra disposición de estos Términos.

19. Cambios a los Términos
Podemos actualizar estos Términos publicando una versión revisada. El uso continuo de los Servicios luego de la vigencia de cambios constituye aceptación.

20. Terminación
Podemos suspender o terminar el acceso en cualquier momento por violaciones de estos Términos. Las secciones de propiedad intelectual, descargos, limitación de responsabilidad, arbitraje y indemnización sobreviven a la terminación.

21. RESULTADOS NO GARANTIZADOS
LYT no garantiza resultados específicos de ningún tipo, incluyendo, sin limitación, pérdida de peso, cambios físicos, mejoras metabólicas, resultados de laboratorio, bienestar emocional o adherencia al programa.

Los resultados dependen de múltiples factores individuales, incluyendo constancia, hábitos personales, historial médico, genética, seguimiento de recomendaciones y decisiones del Proveedor independiente cuando aplique.

Al utilizar los Servicios, reconoces y aceptas que los resultados varían entre personas y que LYT no realiza promesas, garantías ni representaciones sobre resultados específicos.

22. CARGOS REVERSADOS, DISPUTAS Y FRAUDE DE PAGO (CHARGEBACKS)
• Iniciar un chargeback, disputa de pago o reverso con tu banco o procesador de pagos sin antes contactar a LYT constituye una violación material de estos Términos.
• En caso de chargeback, disputa o indicio de fraude:
  - El acceso a los Servicios podrá ser suspendido o terminado de forma inmediata, sin reembolso.
  - LYT se reserva el derecho de bloquear futuras compras o accesos.
  - Cualquier costo, comisión o penalidad generada por el procesador de pagos podrá ser reclamada al usuario en la máxima medida permitida por la ley.
  - LYT se reserva el derecho de disputar formalmente cualquier chargeback cuando existan registros de aceptación de estos Términos, uso del servicio o entrega de contenido.

23. CONTACTO
LYT Health Management LLC
10 SW South River Dr, Miami, FL 33130
admin@lytmanagement.com`,
  },
  {
    id: "nda",
    titleEn: "Non-Disclosure Agreement",
    titleEs: "Acuerdo de Confidencialidad",
    contentEn: `NON-DISCLOSURE, NON-USE & NON-CIRCUMVENTION AGREEMENT (CLIENT)

This Agreement is entered into by and between LYT Health Management LLC, a Florida limited liability company ("LYT"), and the undersigned individual ("Client").

1. Definition of Confidential Information

"Confidential Information" includes any and all non-public information, whether disclosed intentionally or unintentionally, directly or indirectly, including but not limited to:
• Programs, workouts, plans, protocols, methodologies, systems, frameworks
• Coaching strategies, scripts, guidance, prompts, workflows
• Business models, pricing, offers, funnels, marketing strategies
• Community content, discussions, recordings, screenshots, messages
• Documents, files, presentations, videos, audios, and internal communications
• Any derivative notes, summaries, adaptations, or interpretations created by Client

Confidential Information is protected regardless of whether marked as confidential.

2. Non-Disclosure & Non-Use

Client agrees to:
• Maintain strict confidentiality
• Use Confidential Information solely for personal participation in LYT
• Not disclose, share, sell, license, publish, reproduce, record, screenshot, or distribute Confidential Information
• Not use Confidential Information for any commercial, competitive, instructional, or derivative purpose, whether paid or unpaid

3. Non-Circumvention

Client agrees not to use Confidential Information to:
• Replicate or recreate LYT programs, communities, or methodologies
• Train others using LYT concepts or structure
• Create similar programs, challenges, memberships, courses, or coaching offers

4. No Ownership / No License

Client acknowledges that:
• All Confidential Information is the exclusive property of LYT
• No license, ownership, or usage rights are granted
• Participation does not transfer know-how or IP rights

5. Term

This Agreement applies during participation and indefinitely thereafter, to the maximum extent permitted by law.

6. Remedies

Client agrees that breach would cause irreparable harm.

LYT is entitled to:
• Immediate injunctive relief
• Monetary damages
• Recovery of legal fees and costs
• Any equitable or legal remedy available

7. Governing Law & Venue

This Agreement is governed by Florida law, with exclusive venue in Miami-Dade County, Florida.`,
    contentEs: `ACUERDO DE CONFIDENCIALIDAD, NO USO Y NO CIRCUNVENCIÓN (CLIENTE)

Entre LYT Health Management LLC ("LYT") y el Cliente firmante.

1. Información Confidencial

Incluye toda información no pública, divulgada directa o indirectamente, incluyendo:
• Programas, entrenamientos, planes, protocolos y metodologías
• Estrategias de coaching, guías, flujos y sistemas
• Modelos de negocio, precios, ofertas y marketing
• Contenido de comunidad, mensajes, grabaciones, capturas
• Documentos, audios, videos y comunicaciones internas
• Notas, adaptaciones o interpretaciones creadas por el Cliente

No requiere estar marcada como confidencial.

2. Confidencialidad y No Uso

El Cliente se compromete a:
• Mantener confidencialidad estricta
• Usar la información solo para su participación personal
• No copiar, grabar, distribuir ni explotar la información
• No usarla con fines comerciales, educativos o competitivos

3. No Circunvención

El Cliente no podrá:
• Replicar programas o comunidades similares
• Entrenar a terceros usando conceptos de LYT
• Crear retos, membresías, cursos o coaching basados en LYT

4. Sin Derechos de Propiedad

Toda la información es propiedad exclusiva de LYT.
No se otorgan licencias ni derechos implícitos.

5. Vigencia

Aplica durante y después, de forma indefinida, según lo permita la ley.

6. Remedios

LYT podrá solicitar:
• Medidas cautelares inmediatas
• Daños económicos
• Honorarios legales
• Remedios equitativos

7. Ley Aplicable

Estado de Florida, sede en Miami-Dade County.`,
  },
  {
    id: "nonSolicitation",
    titleEn: "Non-Solicitation & Non-Commercial Use",
    titleEs: "No Solicitación y Uso No Comercial",
    contentEn: `NON-SOLICITATION & NON-COMMERCIAL USE

Non-Commercial Use Only (Clients)

All content, materials, programs, methodologies, trainings, recordings, documents, systems, communications, and community access provided by LYT (the "LYT Content") are provided solely for personal, non-commercial use.

Clients may not, directly or indirectly:
• Copy, reproduce, record, distribute, resell, sublicense, or commercially exploit any LYT Content
• Use LYT Content to create, promote, or operate competing fitness, wellness, coaching, weight-loss, telehealth-adjacent, or digital programs
• Replicate, adapt, reverse-engineer, or derive any business model, curriculum, methodology, pricing structure, or delivery system from LYT

Non-Solicitation of LYT Community (Clients)

During participation in any LYT program and for twelve (12) months after termination or completion, clients agree they will not:
• Solicit, recruit, contact, or divert any LYT client, member, lead, or participant for competing or similar services
• Promote external products, services, programs, or businesses within LYT communities (including Telegram, Zoom, WhatsApp, or private groups)
• Send unsolicited private messages for commercial or promotional purposes to other LYT members

Enforcement

Any violation of this section constitutes a material breach of the Terms and may result in:
• Immediate removal from the Services and community
• Permanent account termination
• Loss of access without refund
• Legal remedies as permitted by law

LYT reserves the right to seek injunctive relief and equitable remedies for violations of this section.`,
    contentEs: `NO SOLICITACIÓN Y USO NO COMERCIAL

Uso No Comercial (Clientes)

Todo el contenido, materiales, programas, metodologías, entrenamientos, grabaciones, documentos, sistemas, comunicaciones y acceso a comunidad proporcionados por LYT (el "Contenido LYT") se otorgan exclusivamente para uso personal y no comercial.

El cliente no puede, directa ni indirectamente:
• Copiar, reproducir, grabar, distribuir, revender o explotar comercialmente el Contenido LYT
• Utilizar el Contenido LYT para crear, promover u operar programas de fitness, bienestar, coaching, pérdida de peso o plataformas digitales que compitan con LYT
• Replicar, adaptar o aplicar ingeniería inversa al modelo de negocio, metodología, estructura, precios o sistema operativo de LYT

No Solicitación de la Comunidad LYT (Clientes)

Durante su participación y por doce (12) meses posteriores a la finalización o terminación del programa, el cliente se compromete a no:
• Solicitar, reclutar o desviar clientes, miembros o prospectos de LYT
• Promocionar productos, servicios u ofertas externas dentro de las comunidades de LYT (Telegram, Zoom, WhatsApp u otros grupos privados)
• Enviar mensajes privados con fines comerciales o promocionales a otros miembros de LYT

Ejecución

Cualquier incumplimiento constituye un incumplimiento grave y puede resultar en:
• Expulsión inmediata del programa
• Terminación permanente de la cuenta
• Pérdida de acceso sin reembolso
• Acciones legales permitidas por la ley

LYT podrá solicitar medidas cautelares y otros remedios legales aplicables.`,
  },
];

export function getLegalDocumentsForLocale(
  locale: LegalLocale,
): LocalizedLegalDocument[] {
  const isSpanish = locale === "es";

  return legalDocuments.map((document) => ({
    id: document.id,
    title: isSpanish ? document.titleEs : document.titleEn,
    content: isSpanish ? document.contentEs : document.contentEn,
  }));
}

export function getLegalDocumentForLocale(
  id: LegalDocumentType,
  locale: LegalLocale,
): LocalizedLegalDocument | undefined {
  return getLegalDocumentsForLocale(locale).find((document) => document.id === id);
}

export function getLegalPacketFilename(locale: LegalLocale): string {
  return `lyt-terms-and-conditions-${locale}.pdf`;
}
