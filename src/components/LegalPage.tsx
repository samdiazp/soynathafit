import type { Locale } from "@/config/site";

type LegalPageData = {
  title: string;
  description: string;
  content: string;
};

export function LegalPage({ locale, page }: { locale: Locale; page: LegalPageData }) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 className="h1">{page.title}</h1>
          <p className="lead">{page.description}</p>
        </div>
      </section>
      <section className="section section-cream">
        <article className="legal-content">
          <p className="legal-context">
            {locale === "es"
              ? "Este documento forma parte de la infraestructura legal pública de LYT Health Management LLC. Los servicios médicos, cuando apliquen, son prestados por proveedores independientes."
              : "This document is part of LYT Health Management LLC's public legal infrastructure. Medical services, when applicable, are provided by independent providers."}
          </p>
          <div className="legal-document">{page.content}</div>
        </article>
      </section>
    </>
  );
}
