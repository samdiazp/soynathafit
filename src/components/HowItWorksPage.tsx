import { CTA_URLS, type Locale } from "@/config/site";
import { getContent } from "@/content/locales";

export function HowItWorksPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const page = content.howItWorks;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{locale === "es" ? "Proceso" : "Process"}</span>
          <h1 className="h1">{page.title}</h1>
          <p className="lead">{page.description}</p>
        </div>
      </section>
      <section className="section section-cream">
        <div className="wrap steps-list">
          {page.steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="number" aria-hidden="true">{step.number}</span>
              <div>
                <h2 className="h3">{step.title}</h2>
                <p className="lead">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-banner gradient-noise">
        <div className="wrap">
          <span className="eyebrow on-dark">{locale === "es" ? "Sin presión" : "No pressure"}</span>
          <h2 className="h2">{locale === "es" ? "Primero entendemos tu caso." : "First we understand your case."}</h2>
          <p className="lead">{locale === "es" ? "El cuestionario inicial nos ayuda a saber si LYT es una buena opción para ti." : "The initial questionnaire helps us understand whether LYT is a good fit for you."}</p>
          <a className="btn btn-light btn-lg" href={CTA_URLS.quiz}>{content.common.startQuiz} →</a>
        </div>
      </section>
    </>
  );
}
