import { CTA_URLS, type Locale } from "@/config/site";
import { ROUTES } from "@/config/routes";
import type { ProductDetail } from "@/content/products";
import type { CSSProperties } from "react";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SyringeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="m18 2 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m17 7 3-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 11 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m5 19-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 4 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIcon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (index === 0) {
    return <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" {...common} /><path d="m8.5 8.5 7 7" {...common} /></svg>;
  }
  if (index === 1) {
    return <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" {...common} /><rect width="8" height="4" x="8" y="3" rx="1" {...common} /><path d="m9 14 2 2 4-4" {...common} /></svg>;
  }
  return <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" {...common} /><path d="M15 18H9" {...common} /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" {...common} /><circle cx="7" cy="18" r="2" {...common} /><circle cx="17" cy="18" r="2" {...common} /></svg>;
}

export function ProductPage({ locale, product }: { locale: Locale; product: ProductDetail }) {
  const referenceLabel = locale === "es" ? "* Imagen referencial del medicamento" : "* Reference image of medication";
  const backLabel = locale === "es" ? "Volver al catálogo" : "Back to catalog";
  const startLabel = locale === "es" ? "Comenzar" : "Start";
  const evaluationLabel = locale === "es" ? "Comenzar evaluación" : "Start evaluation";
  const consultLabel = locale === "es" ? "Agendar mi consulta" : "Schedule my consultation";
  const hasPriceTabs = product.presentations.length > 1 && product.pricePlans.length > 1;
  const isAlternativePlan = (plan: ProductDetail["pricePlans"][number]) => {
    const text = `${plan.name} ${plan.subtitle} ${plan.note}`.toLowerCase();
    return /sublingual|gotas|drops|spray|nasal|cómodo|comodo|comfortable/.test(text);
  };
  const primaryPlans = hasPriceTabs ? product.pricePlans.filter((plan) => !isAlternativePlan(plan)) : product.pricePlans;
  const alternativePlans = hasPriceTabs ? product.pricePlans.filter(isAlternativePlan) : [];
  const priceGridClass = (plans: ProductDetail["pricePlans"]) => [
    "pp-price-plans-grid",
    plans.length === 1 ? "pp-price-plans-grid--single" : "",
    plans.length <= 2 ? "pp-price-plans-grid--compact" : "",
    plans.length === 3 ? "pp-price-plans-grid--three" : "",
  ].filter(Boolean).join(" ");
  const renderPlans = (plans: ProductDetail["pricePlans"]) => plans.map((plan) => (
    <article className={`pp-plan ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
      {plan.badge ? <span className="pp-plan-badge">{plan.badge}</span> : null}
      <h3>{plan.name}</h3>
      <p className="pp-plan-sub">{plan.subtitle}</p>
      <div className="pp-price-amount"><span className="pp-price-from">USD</span><span className="pp-price-num">{plan.price}</span>{plan.per ? <span className="pp-price-per">{plan.per}</span> : null}</div>
      <p className="pp-plan-note">{plan.note}</p>
      <ul className="pp-incl">
        {plan.features.map((feature) => <li key={feature}><CheckIcon /> {feature}</li>)}
      </ul>
      <a className={`btn ${plan.featured ? "btn-light" : "btn-primary"}`} href={CTA_URLS.quiz}>{evaluationLabel}</a>
    </article>
  ));

  return (
    <main className={`product-page-v2 product-page-v2--${product.theme}`}>
      <section className="cat-hero pp-hero">
        <div className="pp-hero-grid">
          <div className="pp-hero-text">
            <a className="pp-back" href={ROUTES[locale].catalog}>← {backLabel}</a>
            <span className="eyebrow">{product.eyebrow}</span>
            <h1 className="pp-hero-h">
              {product.title}
              <span className="pp-hero-brush">{product.brush}</span>
            </h1>
            <p className="pp-hero-lead">{product.description}</p>
            <div className="pp-chips" aria-label={locale === "es" ? "Detalles del tratamiento" : "Treatment details"}>
              {product.chips.map((chip) => <span className="pp-chip" key={chip}>{chip}</span>)}
            </div>
            <div className="pp-hero-foot">
              <a className="btn btn-primary btn-lg" href={CTA_URLS.quiz}>{startLabel}</a>
              <div className="pp-hero-price"><b>{product.heroPrice}</b><span>{product.heroPriceNote}</span></div>
            </div>
          </div>
          <div className="pp-hero-media" style={{ "--product-bg": product.bg } as CSSProperties}>
            {product.image ? <><img src={product.image} alt="" /><span className="product-image-reference-label">{referenceLabel}</span></> : null}
          </div>
        </div>
      </section>

      <section className="cat-sec cat-sec--orange pp-present-sec" id="presentacion">
        <div className="wrap pp-present-grid">
          <div className="pp-present-info">
            <span className="eyebrow">{locale === "es" ? "Para qué sirve" : "What it is for"}</span>
            <h2 className="pp-present-h">{product.benefitsTitle}</h2>
            <p className="pp-present-lead">{product.benefitsLead}</p>
            <ul className="pp-benefits">
              {product.benefits.map((benefit) => (
                <li key={benefit.title}>
                  <span className="pp-benefit-ic"><CheckIcon /></span>
                  <span className="pp-benefit-tx"><strong>{benefit.title}</strong><span>{benefit.text}</span></span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary btn-lg" href={CTA_URLS.quiz}>{locale === "es" ? "Comenzar mi evaluación" : "Start my evaluation"}</a>
          </div>
          <div className={`pp-forms ${product.presentations.length === 1 ? "pp-forms--stack" : ""}`}>
            {product.presentations.map((presentation, index) => (
              <article className={`pp-form ${index > 0 ? "pp-form--alt" : "is-selected"}`} key={presentation.name}>
                {presentation.badge ? <span className="pp-form-badge">{presentation.badge}</span> : null}
                <div className="pp-form-top">
                  <span className="pp-form-icon"><SyringeIcon /></span>
                  <span className="pp-form-name">{presentation.name}</span>
                  <span className="pp-form-tag">{presentation.tag}</span>
                </div>
                <div className="pp-form-media">
                  {presentation.image ? <><img src={presentation.image} alt="" /><span className="product-image-reference-label">{referenceLabel}</span></> : null}
                </div>
                <p className="pp-form-note">{presentation.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream pp-section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">{locale === "es" ? "Cómo funciona" : "How it works"}</span>
            <h2 className="h2">{locale === "es" ? "Tu tratamiento en tres pasos" : "Your treatment in three steps"}</h2>
            <p>{locale === "es" ? "Sin filas, sin papeleo y sin salir de casa. Así de simple." : "No lines, no paperwork and no leaving home. That simple."}</p>
          </div>
          <div className="pp-steps">
            {product.steps.map((step, index) => (
              <article className="pp-step" key={step.title}>
                <span className="pp-step-num">{index + 1}</span>
                <span className="pp-step-ic"><StepIcon index={index} /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pp-price-sec">
        <div className="wrap">
          <div className="pp-price-head section-head center">
            <span className="eyebrow">{locale === "es" ? "Precios" : "Pricing"}</span>
            <h2 className="h2">{locale === "es" ? "Un precio claro, sin sorpresas" : "Clear pricing, no surprises"}</h2>
            <p>{product.pricingLead}</p>
          </div>
          {hasPriceTabs ? (
            <div className="pp-price-tabs">
              <input className="pp-price-radio pp-price-radio--primary" type="radio" name={`price-${product.slug}`} id={`price-${product.slug}-primary`} defaultChecked />
              <input className="pp-price-radio pp-price-radio--alt" type="radio" name={`price-${product.slug}`} id={`price-${product.slug}-alt`} />
              <div className="pp-price-toggle" role="tablist" aria-label={locale === "es" ? "Presentación" : "Presentation"}>
                <label className="pp-ptab pp-ptab--primary" role="tab" htmlFor={`price-${product.slug}-primary`}>{product.presentations[0]?.name}</label>
                <label className="pp-ptab pp-ptab--alt" role="tab" htmlFor={`price-${product.slug}-alt`}>{product.presentations[1]?.name}</label>
              </div>
              <div className="pp-price-panels">
                <div className={`${priceGridClass(primaryPlans)} pp-price-panel pp-price-panel--primary`}>{renderPlans(primaryPlans)}</div>
                <div className={`${priceGridClass(alternativePlans)} pp-price-panel pp-price-panel--alt`}>{renderPlans(alternativePlans)}</div>
              </div>
            </div>
          ) : (
            <div className={priceGridClass(primaryPlans)}>{renderPlans(primaryPlans)}</div>
          )}
          <div className="pp-price-assure">
            {product.assurance.map((item) => <span className="pp-assure-pill" key={item}><CheckIcon /> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-warm pp-section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">{locale === "es" ? "Preguntas frecuentes" : "FAQ"}</span>
            <h2 className="h2">{locale === "es" ? "Resolvemos tus dudas" : "Answers to common questions"}</h2>
          </div>
          <div className="pp-faq">
            {product.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span className="pp-faq-plus">+</span></summary>
                <div className="pp-faq-body">{item.answer}</div>
              </details>
            ))}
          </div>
          <div className="note-box pp-note" role="note">
            <span className="icon" aria-hidden="true">i</span>
            <span>{product.safetyNote}</span>
          </div>
        </div>
      </section>

      <section className="cat-cta pp-final-cta">
        <div className="cat-cta-inner">
          <div className="eyebrow on-dark">{locale === "es" ? "Empieza hoy" : "Start today"}</div>
          <h2 className="cat-cta-h">{locale === "es" ? "Agenda tu" : "Schedule your"} <span className="brush">{locale === "es" ? "consulta" : "consultation"}</span><br />{locale === "es" ? "en español." : "in Spanish."}</h2>
          <div className="cat-cta-row">
            <a className="btn btn-light btn-lg" href={CTA_URLS.quiz}>{consultLabel}</a>
            <a className="link-soft" style={{ marginLeft: 4 }} href={CTA_URLS.whatsapp}>{locale === "es" ? "o por WhatsApp" : "or WhatsApp"} →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
