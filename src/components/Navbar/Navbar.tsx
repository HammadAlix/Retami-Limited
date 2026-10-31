"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import "./navbar.css";

export type Panel = "about" | "ai" | "automation" | "software" | "work" | "careers" | "contact";

const serviceLinks = ["AI Engineering & Automation", "Websites, SaaS & Mobile Apps", "CRM & Marketing Automation", "SEO & Digital Growth", "Branding, Motion & Video", "AI Creative Production"];

export default function Navbar({ onNavigate, currentPage = "home" }: { onNavigate: (panel: Panel) => void; currentPage?: "home" | "about" | "contact" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (servicesOpen) { setServicesOpen(false); servicesButton.current?.focus(); }
      else if (mobileOpen) { setMobileOpen(false); menuButton.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) { setServicesOpen(false); setMobileOpen(false); }
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const resize = () => { setMobileOpen(false); setServicesOpen(false); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [mobileOpen, servicesOpen]);

  const navigate = (panel: Panel) => { onNavigate(panel); setMobileOpen(false); setServicesOpen(false); };
  return (
    <header className="navbar" ref={header}>
      <Link className="navbar__brand" href="/#home" aria-label="Retami Limited home" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
        <span className="navbar__lockup"><Image src={assets.brandLockup} alt="" sizes="220px" priority /></span>
        <Image src={assets.brandMark} alt="" width={46} height={42} className="navbar__mark" priority />
      </Link>
      <button className="navbar__toggle" ref={menuButton} aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? "Close" : "Menu"}<span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
      </button>
      <nav id="main-navigation" aria-label="Main navigation" className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
        <Link className={currentPage === "home" ? "navbar__home" : undefined} href="/#home" aria-current={currentPage === "home" ? "page" : undefined} onClick={() => setMobileOpen(false)}>Home</Link>
        <Link className={currentPage === "about" ? "navbar__home" : undefined} href="/about" aria-current={currentPage === "about" ? "page" : undefined} onClick={() => setMobileOpen(false)}>About Us</Link>
        <div className="navbar__services" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
          <button ref={servicesButton} aria-expanded={servicesOpen} aria-controls="services-dropdown" onClick={() => setServicesOpen(!servicesOpen)}>Services <svg aria-hidden="true" width="13" height="8" viewBox="0 0 13 8"><path d="m1 1 5.5 5.5L12 1" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></button>
          <div id="services-dropdown" className="navbar__dropdown" hidden={!servicesOpen}>
            <span>DESIGN. DEVELOP. AUTOMATE.</span>
            {serviceLinks.map((name, index) => <a key={name} href={`/#service-tab-${index}`} onClick={() => { document.getElementById(`service-tab-${index}`)?.click(); setMobileOpen(false); setServicesOpen(false); }}><span className="navbar__service-number" aria-hidden="true">0{index + 1}</span><span>{name}</span></a>)}
            <Link className="navbar__custom-scope" href="/contact" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>Have a custom project? Let’s talk.</Link>
          </div>
        </div>
        <button onClick={() => navigate("work")}>Our Work</button>
        <button onClick={() => navigate("careers")}>Careers</button>
        <Link className={currentPage === "contact" ? "navbar__home" : undefined} href="/contact" aria-current={currentPage === "contact" ? "page" : undefined} onClick={() => setMobileOpen(false)}>Contact</Link>
      </nav>
      <Link className="navbar__contact" href="/contact">Get in Touch</Link>
    </header>
  );
}
