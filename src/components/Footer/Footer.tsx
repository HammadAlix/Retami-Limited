import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import type { Panel } from "@/components/Navbar/Navbar";
import "./footer.css";

const capabilities = ["AI engineering & automation", "Websites, SaaS & mobile apps", "CRM & marketing automation", "SEO & digital growth", "Branding, motion & video", "AI creative production"];

export default function Footer({ onNavigate, topHref = "#home" }: { onNavigate: (panel: Panel) => void; topHref?: string }) {
  return (
    <footer className="site-footer" aria-label="Retami Limited footer">
      <div className="site-footer__main">
        <div className="site-footer__brand-column">
          <a className="site-footer__brand" href="/#home" aria-label="Retami Limited home"><Image src={assets.brandMark} alt="" width={58} height={53} sizes="58px" /><span>RETAMI<small>LIMITED</small></span></a>
          <p className="site-footer__description">Creative thinking.<br />Thoughtful engineering.<br /><span>Real possibilities.</span></p>
          <p className="site-footer__about">We bring design, software and AI together to help businesses build their next chapter.</p>
          <address className="site-footer__contact-details"><a href="mailto:hammadfiver5@gmail.com"><span>Email</span>hammadfiver5@gmail.com</a><a href="tel:+447877195925"><span>Call</span>+44 7877 195925</a><a href="https://wa.me/447877195925" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span>Chat with us</a></address>
          <button className="site-footer__conversation" onClick={() => onNavigate("contact")}>Start a conversation<span className="site-footer__link-line" aria-hidden="true" /></button>
        </div>
        <nav className="site-footer__navigation" aria-label="Footer navigation"><h2>Explore</h2><a href="/#home">Home</a><Link href="/about">About us</Link><a href="/#why-retami">Why Retami</a><a href="/#who-we-help">Who we help</a><button onClick={() => onNavigate("work")}>Our work</button><button onClick={() => onNavigate("careers")}>Careers</button><button onClick={() => onNavigate("contact")}>Contact</button></nav>
        <div className="site-footer__expertise"><h2>What we do</h2><ul>{capabilities.map(capability => <li key={capability}>{capability}</li>)}</ul><a className="site-footer__services-link" href="/#services">Explore our services<span className="site-footer__link-line" aria-hidden="true" /></a></div>
        <div className="site-footer__perspective"><p className="site-footer__eyebrow">EXPERIENCE. APPLIED.</p><div className="site-footer__experience"><strong>12</strong><span>years of<br />experience</span></div><p>A fresh perspective.<br />An experienced team.</p><div className="site-footer__disciplines"><span>DESIGN</span><span>DEVELOPMENT</span><span>AI</span></div></div>
      </div>
      <div className="site-footer__bottom"><p>© {new Date().getFullYear()} Retami Limited. All rights reserved.</p><span className="site-footer__signature">Ideas. Technology. Real impact.</span><a className="site-footer__top" href={topHref}>Back to top<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5m-5 5 5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a></div>
      <div className="site-footer__wordmark" aria-hidden="true">RETAMI<span>LIMITED</span></div>
    </footer>
  );
}
