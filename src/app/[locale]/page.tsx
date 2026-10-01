import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Check, CircleHelp, Database,
  Droplets, Fingerprint, Github, Leaf, MapPin, Plus, ScanLine, ShieldCheck,
  Sprout, Trees, Wheat, Wind,
} from "lucide-react";
import { Header } from "@/components/header";
import { Brand } from "@/components/brand";
import { BackToTop } from "@/components/back-to-top";
import { brandName, content, isLocale, type EvidenceId } from "@/lib/content";
import { appLinks, communityLogos } from "@/lib/links";

const evidenceIcons = { harvest: Wheat, soil: Sprout, carbon: Wind, biodiversity: Trees, honey: Droplets, quality: BadgeCheck } satisfies Record<EvidenceId, typeof Wheat>;
const featureIcons = { shield: ShieldCheck, scan: ScanLine, leaf: Leaf };

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale];

  return (
    <>
      <a className="skip-link" href="#main-content">{t.ui.skipToContent}</a>
      <Header locale={locale} copy={t} />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-image" src="/images/farm-landscape.jpg" alt="" fill preload sizes="100vw" quality={90} />
          <div className="hero-shade" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow light"><Sprout size={16} aria-hidden="true" />{t.hero.eyebrow}</span>
              <h1 id="hero-title">{t.hero.title}<br /><span>{t.hero.titleAccent}</span></h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button primary" href={appLinks.explore}>{t.hero.primary}<ArrowUpRight size={19} aria-hidden="true" /></a>
                <a className="button ghost" href="#how-it-works">{t.hero.secondary}<ArrowDown size={17} aria-hidden="true" /></a>
              </div>
              <div className="hero-note"><ShieldCheck size={16} aria-hidden="true" /><span>{t.ui.poweredBy}</span><span className="devnet-pill">DEVNET</span></div>
            </div>
            <aside className="hero-evidence" aria-label={t.demo.label}>
              <div className="record-top">
                <span className="record-icon"><Image src="/logo-icon.png" width={18} height={18} alt="" /></span>
                <span className="record-kicker">OPENAGRIX<br /><strong>{t.demo.label}</strong></span>
                <span className="record-status">{t.demo.status}</span>
              </div>
              <h2>{t.demo.farm}</h2>
              <p className="record-location"><MapPin size={13} aria-hidden="true" />{t.demo.location}</p>
              <div className="record-image">
                <Image src="/images/farm-landscape.jpg" alt={t.ui.farmImageAlt} fill sizes="(max-width: 600px) 80vw, 340px" />
                <span><Wheat size={14} aria-hidden="true" />{t.demo.harvestValue}</span>
              </div>
              <div className="record-data">
                <div><span>{t.demo.recordLabel}</span><strong>{t.demo.recordId}</strong></div>
                <div><span>{t.demo.verificationLabel}</span><strong>{t.demo.verificationValue}</strong></div>
              </div>
              <div className="record-footer"><span className="record-seal"><Database size={16} aria-hidden="true" /></span><span>{t.demo.caption}</span></div>
            </aside>
          </div>
          <div className="hero-bottom"><div className="container"><span>{t.hero.caption}</span><span className="hero-coordinate"><Leaf size={13} aria-hidden="true" />{t.ui.connected}</span></div></div>
        </section>

        <div className="trust-strip"><div className="container trust-inner">
          <span className="trust-title">{t.trust.eyebrow}</span>
          {t.trust.labels.map((label, index) => {
            const Icon = [Database, Sprout, Fingerprint][index] ?? Check;
            return <span className="trust-item" key={label}><Icon size={20} strokeWidth={1.5} aria-hidden="true" />{label}</span>;
          })}
        </div></div>

        <section id="platform" className="section platform-section" aria-labelledby="platform-title">
          <div className="container">
            <div className="section-heading split"><div><span className="eyebrow">{t.platform.eyebrow}</span><h2 id="platform-title">{t.platform.title}</h2></div><p className="section-description">{t.platform.description}</p></div>
            <div className="feature-grid">{t.platform.features.map((feature, index) => {
              const Icon = featureIcons[feature.icon];
              return <article className="feature-card" key={feature.icon}><span className="feature-number">0{index + 1}</span><div className="feature-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></div><h3>{feature.title}</h3><p>{feature.description}</p></article>;
            })}</div>
          </div>
        </section>

        <section id="evidence" className="section evidence-section" aria-labelledby="evidence-title"><div className="container evidence-layout">
          <div className="evidence-intro section-heading"><span className="eyebrow">{t.evidence.eyebrow}</span><h2 id="evidence-title">{t.evidence.title}</h2><p className="section-description">{t.evidence.description}</p><a className="text-link" href={appLinks.guides}>{t.footer.guides}<ArrowUpRight size={18} aria-hidden="true" /></a><div className="evidence-visual" aria-hidden="true"><span className="evidence-orbit orbit-one" /><span className="evidence-orbit orbit-two" /><span className="evidence-core"><Sprout size={55} strokeWidth={1.1} /></span><span className="orbit-node node-one"><Wheat size={21} /></span><span className="orbit-node node-two"><Fingerprint size={21} /></span><span className="orbit-node node-three"><Leaf size={21} /></span><span className="evidence-visual-label">{t.ui.rooted}</span></div></div>
          <div className="evidence-grid">{t.evidence.types.map((evidence) => {
            const Icon = evidenceIcons[evidence.id];
            return <article className="evidence-card" key={evidence.id}><span className="evidence-icon"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></span><h3>{evidence.title}</h3><p>{evidence.description}</p><span className="evidence-detail">{evidence.detail}</span></article>;
          })}</div>
        </div></section>

        <section id="how-it-works" className="section journey-section" aria-labelledby="journey-title"><div className="container">
          <div className="section-heading center"><span className="eyebrow">{t.journey.eyebrow}</span><h2 id="journey-title">{t.journey.title}</h2><p className="section-description">{t.journey.description}</p></div>
          <div className="journey-grid">{t.journey.steps.map((step, index) => <article className="journey-step" key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          <div className="journey-link"><a className="button" href={appLinks.register}>{t.closing.primary}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </div></section>

        <section id="film" className="section film-section" aria-labelledby="film-title">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">{t.film.eyebrow}</span>
              <h2 id="film-title">{t.film.title}</h2>
              <p className="section-description">{t.film.description}</p>
            </div>
            <div className="film-frame">
              <iframe
                src={appLinks.filmEmbed}
                title={t.film.playerTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="film-link"><a className="text-link" href={appLinks.film} rel="noreferrer" target="_blank">{t.film.watch}<ArrowUpRight size={18} aria-hidden="true" /></a></p>
          </div>
        </section>

        <section id="faq" className="section faq-section" aria-labelledby="faq-title"><div className="container faq-layout">
          <div className="section-heading"><span className="eyebrow"><CircleHelp size={16} aria-hidden="true" />{t.faq.eyebrow}</span><h2 id="faq-title">{t.faq.title}</h2><p className="section-description">{t.faq.description}</p><a href={appLinks.email} className="text-link">hello@openagrix.com<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="faq-list">{t.faq.items.map((item, index) => <details className="faq-item" key={item.question} name="openagrix-faq" open={index === 0}><summary><span>{item.question}</span><Plus className="faq-plus" size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
        </div></section>

        <section className="closing-section"><div className="container"><div className="closing-panel"><div className="closing-copy"><span className="eyebrow">{t.closing.eyebrow}</span><h2>{t.closing.title}</h2><p>{t.closing.description}</p></div><div className="closing-actions"><a className="button primary" href={appLinks.register}>{t.closing.primary}<ArrowUpRight size={19} aria-hidden="true" /></a><a className="closing-secondary" href={appLinks.explore}>{t.closing.secondary}<ArrowRight size={17} aria-hidden="true" /></a></div></div></div></section>

        <section id="sponsors" className="sponsors-section" aria-labelledby="sponsors-title">
          <div className="container">
            <h2 id="sponsors-title">{t.sponsors.title}</h2>
            <ul className="sponsors-row">
              {communityLogos.map((logo) => (
                <li key={logo.name}>
                  <a className="sponsor-card" href={logo.href} rel="noreferrer" target="_blank" aria-label={`${logo.name}. ${t.ui.externalLink}`}>
                    <Image src={logo.src} alt="" width={logo.width} height={logo.height} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container">
        <div className="footer-main">
          <div className="footer-brand"><Link href={`/${locale}`} aria-label={brandName}><Brand tagline={t.ui.brandTagline} size="footer" /></Link><p>{t.footer.description}</p><div className="social-links"><a href={appLinks.github} aria-label={`${brandName} GitHub`}><Github size={19} aria-hidden="true" /></a><a href={appLinks.social} aria-label={`${brandName} X`}><svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l8.2-9.4L.8 2h6.5l4.5 6.8L18.9 2ZM17.8 20h1.7L6.4 3.9H4.6L17.8 20Z" /></svg></a></div></div>
          <nav className="footer-column" aria-label={t.footer.product}><h3>{t.footer.product}</h3><a href="#platform">{t.nav.platform}</a><a href={appLinks.explore}>{t.footer.explorer}</a><a href={appLinks.register}>{t.footer.register}</a></nav>
          <nav className="footer-column" aria-label={t.footer.resources}><h3>{t.footer.resources}</h3><a href="#how-it-works">{t.nav.how}</a><a href="#film">{t.nav.film}</a><a href={appLinks.guides}>{t.footer.guides}</a><a href="#faq">{t.nav.faq}</a></nav>
          <div className="footer-column"><h3>{t.footer.contact}</h3><a href={appLinks.email}>hello@openagrix.com</a><a href={appLinks.github}>GitHub<ArrowUpRight size={14} aria-hidden="true" /></a><a href={appLinks.social}>X / Twitter<ArrowUpRight size={14} aria-hidden="true" /></a></div>
        </div>
        <div className="footer-bottom"><span>{t.footer.copyright}</span><span className="footer-devnet"><span />{t.footer.devnet}</span><a href={appLinks.home} aria-label={t.footer.source}>{brandName}<ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </div></footer>
      <BackToTop label={t.ui.backToTop} />
    </>
  );
}
