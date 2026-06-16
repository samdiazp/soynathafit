import { getNavigation } from "@/config/navigation";
import { CTA_URLS, SITE, type Locale } from "@/config/site";

export function Footer({ locale }: { locale: Locale }) {
  const nav = getNavigation(locale);
  const year = new Date().getFullYear();
  const disclaimer =
    locale === "es"
      ? "LYT Health Management LLC. es una compañía de telesalud que conecta pacientes con proveedores médicos independientes con licencia en su estado. Los tratamientos compounded son preparados por farmacias 503A autorizadas y se ofrecen solo después de una evaluación clínica adecuada. Los resultados varían entre personas. La información en este sitio es educativa y no sustituye la consulta médica. Si experimentas una emergencia médica, llama al 911. Nuestros servicios están disponibles solo en estados donde nuestros proveedores tienen licencia activa. Semaglutide, tirzepatide y otros medicamentos compounded no son aprobados por la FDA como medicamentos terminados. Discutiremos beneficios, riesgos y alternativas durante tu consulta."
      : "LYT Health Management LLC is a telehealth company that connects patients with independent medical providers licensed in their state. Compounded treatments are prepared by authorized 503A pharmacies and are offered only after an appropriate clinical evaluation. Results vary between people. Information on this site is educational and does not replace medical consultation. If you experience a medical emergency, call 911. Our services are available only in states where our providers hold an active license. Semaglutide, tirzepatide and other compounded medications are not FDA-approved as finished drugs. Benefits, risks and alternatives will be discussed during your consultation.";

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href={locale === "es" ? "/es" : "/en"} aria-label="LYT - Live Your Transformation">
              <img src="/logos/lyt-white.png" width="150" height="46" alt="LYT" />
            </a>
            <p>
              {locale === "es"
                ? "Telesalud para mujeres latinas. Medicina seria, cuidado familiar, en tu idioma."
                : "Telehealth for Latina women. Serious medicine, familiar care, in your language."}
            </p>
          </div>
          <div className="footer-cols">
            {nav.footer.map((column) => (
              <section key={column.heading} aria-label={column.heading}>
                <h2>{column.heading}</h2>
                {column.links.map((link) => (
                  <a key={link.href + link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                    {link.label}
                  </a>
                ))}
                {column.heading === (locale === "es" ? "Legal" : "Legal") ? (
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                ) : null}
              </section>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {SITE.legalName} · Miami, FL</span>
          <span className="hipaa-pill">HIPAA compliant</span>
          <span>
            <a href={CTA_URLS.instagram}>Instagram</a>
          </span>
        </div>
        <div className="footer-legal-row">
          <p className="footer-disclaimer">{disclaimer}</p>
          <a
            className="legitscript-seal"
            href="https://www.legitscript.com/websites/?checker_keywords=thelytmethod.com"
            target="_blank"
            rel="noreferrer"
            title="Verify LegitScript certification for www.thelytmethod.com"
          >
            <img src="https://static.legitscript.com/seals/48418877.png" alt="Verify LegitScript certification for www.thelytmethod.com" width="73" height="79" />
          </a>
        </div>
      </div>
    </footer>
  );
}
