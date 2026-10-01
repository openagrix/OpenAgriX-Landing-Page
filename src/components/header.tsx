"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { brandName, locales, type Content, type Locale } from "@/lib/content";
import { appLinks } from "@/lib/links";

export function Header({ locale, copy }: { locale: Locale; copy: Content }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const links = [
    ["platform", copy.nav.platform], ["evidence", copy.nav.evidence],
    ["how-it-works", copy.nav.how], ["film", copy.nav.film], ["faq", copy.nav.faq],
  ];

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link href={`/${locale}`} aria-label={brandName}><Brand tagline={copy.ui.brandTagline} /></Link>
        <nav className="desktop-nav" aria-label={copy.ui.mainNavigation}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={copy.ui.language}>
            <Globe2 size={15} aria-hidden="true" />
            {locales.map((language) => (
              <Link key={language} href={`/${language}`} lang={language} hrefLang={language}
                className={locale === language ? "active" : ""}
                aria-current={locale === language ? "page" : undefined}
                aria-label={language === "vi" ? copy.ui.vietnamese : copy.ui.english}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                  event.preventDefault(); setOpen(false);
                  router.push(`/${language}${window.location.hash}`, { scroll: !window.location.hash });
                }}>{language.toUpperCase()}</Link>
            ))}
          </nav>
          <a className="button button-small" href={appLinks.explore}>{copy.nav.cta}<ArrowUpRight size={16} aria-hidden="true" /></a>
          <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? copy.ui.closeMenu : copy.ui.openMenu}
            aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label={copy.ui.mainNavigation}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a href={appLinks.explore}>{copy.nav.cta}<ArrowUpRight size={18} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
