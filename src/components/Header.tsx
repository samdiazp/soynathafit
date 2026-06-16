import { getNavigation } from "@/config/navigation";
import { alternateLocale, alternateRouteForPath, ROUTES } from "@/config/routes";
import { CTA_URLS, type Locale } from "@/config/site";
import { getContent } from "@/content/locales";

type HeaderProps = {
  locale: Locale;
  currentPath: string;
};

function isCurrent(currentPath: string, href: string) {
  return href !== "#" && !href.startsWith("http") && currentPath.replace(/\/$/, "") === href.replace(/\/$/, "");
}

export function Header({ locale, currentPath }: HeaderProps) {
  const content = getContent(locale);
  const nav = getNavigation(locale);
  const alt = alternateLocale(locale);
  const altPath = alternateRouteForPath(locale, currentPath);
  const homePath = ROUTES[locale].home;

  return (
    <>
      <div className="brandbar" aria-hidden="true" />
      <div className="topbar" aria-label={locale === "es" ? "Información de servicio" : "Service information"}>
        {nav.topbar.map((item, index) => (
          <span key={item}>
            {index > 0 ? <span className="topbar-dot">· </span> : null}
            {item}
          </span>
        ))}
      </div>
      <header className="site-header">
        <nav className="site-nav" aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
          <a className="site-logo" href={homePath} aria-label="LYT - Live Your Transformation">
            <img src="/logos/lyt-darkblue.png" width="140" height="42" alt="LYT" />
          </a>
          <div className="nav-links">
            {nav.primary.map((item) => (
              <a key={item.href} href={item.href} aria-current={isCurrent(currentPath, item.href) ? "page" : undefined}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a href={CTA_URLS.login}>{content.common.login}</a>
            <a href={altPath} className="lang-switch" hrefLang={alt}>
              {alt.toUpperCase()}
            </a>
            <a className="btn btn-primary btn-sm" href={CTA_URLS.quiz}>
              {content.common.startQuiz}
            </a>
          </div>
          <details className="mobile-nav">
            <summary>{locale === "es" ? "Menú" : "Menu"}</summary>
            <div className="mobile-panel">
              {nav.primary.map((item) => (
                <a key={item.href} href={item.href} aria-current={isCurrent(currentPath, item.href) ? "page" : undefined}>
                  {item.label}
                </a>
              ))}
              <a href={CTA_URLS.login}>{content.common.login}</a>
              <a href={altPath} hrefLang={alt}>
                {alt.toUpperCase()}
              </a>
              <a className="btn btn-primary btn-sm" href={CTA_URLS.quiz}>
                {content.common.startQuiz}
              </a>
            </div>
          </details>
        </nav>
      </header>
    </>
  );
}
