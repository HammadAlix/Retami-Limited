"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Navbar, { type Panel } from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Technologies from "@/components/Technologies/Technologies";
import WhyRetami from "@/components/WhyRetami/WhyRetami";
import ClientResults from "@/components/ClientResults/ClientResults";
import WhoWeHelp from "@/components/WhoWeHelp/WhoWeHelp";
import ClosingCTA from "@/components/ClosingCTA/ClosingCTA";
import Footer from "@/components/Footer/Footer";
import { assets } from "@/assets/assets";
import "./landing.css";

const slides = [
  { image: assets.emeraldMist, name: "Ribbon", caption: "Ideas, taking shape." },
  { image: assets.landscape, name: "Landscape", caption: "A wider perspective." },
  { image: assets.tree, name: "Tree", caption: "Built for lasting growth." },
];
const panels: Record<Exclude<Panel, "contact">, { eyebrow: string; title: string; text: string; items: string[] }> = {
  about: { eyebrow: "ABOUT RETAMI", title: "Technology with a human purpose.", text: "Retami Limited is an AI agency with software engineering at its core. We bring ideas, technology, and practical thinking together to help businesses take their next step.", items: ["AI and software, working together", "Solutions shaped around your business", "A considered approach from idea to implementation"] },
  ai: { eyebrow: "OUR EXPERTISE / 01", title: "Intelligence, applied to your world.", text: "Explore AI systems that work with your knowledge and existing tools. Start with the problem, then shape the right solution.", items: ["Knowledge assistants and conversational AI", "AI agents and tool integrations", "Document understanding and information retrieval"] },
  automation: { eyebrow: "OUR EXPERTISE / 02", title: "Make room for meaningful work.", text: "Bring disconnected processes together and reduce repetitive tasks with purposeful automation.", items: ["Connected business workflows", "Document and data processing", "Integrations between the tools you use"] },
  software: { eyebrow: "OUR EXPERTISE / 03", title: "Your idea. Thoughtfully engineered.", text: "Custom software gives a good idea somewhere to grow. Explore digital products designed around your users and your business.", items: ["Web applications and SaaS products", "Internal platforms and business tools", "APIs, integrations, and product interfaces"] },
  work: { eyebrow: "POSSIBILITIES / ILLUSTRATIVE CONCEPTS", title: "What could we build together?", text: "These are examples of possible projects, not published client case studies. Your challenge is the starting point.", items: ["A knowledge assistant that helps a team find answers", "A workflow that turns incoming documents into structured data", "A custom platform that brings business operations together"] },
  careers: { eyebrow: "CAREERS", title: "Build things that matter.", text: "Thoughtful engineering starts with curious people. There are no published vacancies on this website yet.", items: ["AI engineering", "Software development", "Product design"] },
};

function FeatureIcon({ kind }: { kind: number }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 0 && <><path d="m4 16 20-11 20 11-20 11L4 16Z" /><path d="m5 24 19 11 19-11M5 32l19 11 19-11" /></>}
    {kind === 1 && <><path d="M6 43V29h7v14H6ZM21 43V17h7v26h-7ZM36 43V5h7v38h-7Z" /></>}
    {kind === 2 && <><circle cx="20" cy="13" r="8" /><path d="M4 42v-6c0-8 6-13 16-13s16 5 16 13v6M35 7a8 8 0 0 1 0 15M40 28c5 2 6 6 6 12" /></>}
    {kind === 3 && <><circle cx="24" cy="24" r="20" /><ellipse cx="24" cy="24" rx="9" ry="20" /><path d="M4 24h40" /></>}
  </svg>;
}

export default function Landing() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [panel, setPanel] = useState<Panel | null>(null);
  const [brief, setBrief] = useState("");
  const [saved, setSaved] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("panel") === "work") {
      returnFocus.current = document.querySelector<HTMLButtonElement>(".landing__button--primary");
      setPanel("work");
      const url = new URL(window.location.href);
      url.searchParams.delete("panel");
      window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
    }
  }, []);

  useEffect(() => {
    const syncVisibility = () => setVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (paused || !visible || panel) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, visible, panel, slide]);

  useEffect(() => {
    if (!panel) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [panel]);

  const openPanel = (next: Panel) => {
    if (next === "contact") { router.push("/contact"); return; }
    returnFocus.current = document.activeElement as HTMLElement;
    setSaved(false);
    setPanel(next);
  };
  const closePanel = () => { dialog.current?.close(); setPanel(null); returnFocus.current?.focus(); };
  const saveBrief = () => {
    const file = new Blob([`Retami Limited — Project Brief\n\n${brief.trim()}\n`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a"); link.href = url; link.download = "retami-project-brief.txt"; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  };

  return (
    <>
    <div className={`landing landing--${slides[slide].name.toLowerCase()}`} id="home">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="landing__backgrounds" aria-hidden="true">
        {slides.map((item, index) => <div className={`landing__slide ${index === slide ? "landing__slide--active" : ""}`} key={item.name}><Image src={item.image} alt="" fill sizes="100vw" priority={index === 0} loading={index === 0 ? undefined : "eager"} className={`landing__image landing__image--${item.name.toLowerCase()}`} /></div>)}
        <div className="landing__wash" />
      </div>
      <Navbar onNavigate={openPanel} />
      <main id="main-content" className="landing__main">
        <div className="landing__copy">
          <p className="landing__eyebrow landing__experience"><strong>12</strong><span>YEARS OF<br />EXPERIENCE</span></p>
          <h1>Turning Ideas Into<br /><span>Meaningful Solutions</span></h1>
          <p className="landing__description">We turn AI and software into your next advantage.<br className="landing__linebreak" /> Intelligent systems. Simpler workflows.<br className="landing__linebreak" /> More room for what matters.</p>
          <div className="landing__actions"><button className="landing__button landing__button--primary" onClick={() => openPanel("work")}>Explore Our Work</button><Link className="landing__button landing__button--secondary" href="/about">Learn More</Link></div>
        </div>
        <div className="landing__bottom">
          <div className="landing__features">
            {[{ title: <>Innovative<br />Approach</>, note: "FRESH PERSPECTIVES" }, { title: <>Technology<br />Driven</>, note: "MODERN SOLUTIONS" }, { title: <>People<br />Focused</>, note: "COLLABORATIVE GROWTH" }, { title: <>Lasting<br />Impact</>, note: "A BRIGHTER TOMORROW" }].map((feature, index) => <div className="landing__feature" key={feature.note}><FeatureIcon kind={index} /><div><h2>{feature.title}</h2><p>{feature.note}</p></div></div>)}
          </div>
          <div className="landing__slideshow" role="group" aria-label="Background slideshow">
            <span className="landing__slide-caption">{slides[slide].caption}</span>
            <div className="landing__slide-controls">{slides.map((item, index) => <button key={item.name} aria-label={`Show ${item.name.toLowerCase()} background`} aria-pressed={slide === index} onClick={() => setSlide(index)} className={slide === index ? "is-active" : ""}><span /></button>)}<button className="landing__pause" aria-label={paused ? "Play background slideshow" : "Pause background slideshow"} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span></button></div>
          </div>
        </div>
      </main>
      <dialog ref={dialog} className="info-dialog" aria-labelledby="dialog-title" onCancel={(event) => { event.preventDefault(); closePanel(); }} onClick={(event) => { if (event.target === event.currentTarget) closePanel(); }}>
        <div className="info-dialog__inner"><button className="info-dialog__close" onClick={closePanel} aria-label="Close dialog">×</button>
          {panel === "contact" ? <><p className="info-dialog__eyebrow">YOUR NEXT CHAPTER</p><h2 id="dialog-title">Start with an idea.</h2><p>What would you like to build, improve, or automate? Capture your thoughts in a project brief.</p><label htmlFor="project-brief">Tell us about your idea</label><textarea id="project-brief" rows={5} value={brief} onChange={(event) => { setBrief(event.target.value); setSaved(false); }} placeholder="The challenge, the people it helps, and what success looks like…" /><p className="info-dialog__note">Contact booking is not available yet. Save your brief to your device; nothing is sent or submitted.</p><button className="landing__button landing__button--primary" disabled={!brief.trim()} onClick={saveBrief}>Save project brief</button><p role="status" className="info-dialog__status">{saved ? "Your brief is ready to download. No inquiry has been sent." : ""}</p></> : panel && <><p className="info-dialog__eyebrow">{panels[panel].eyebrow}</p><h2 id="dialog-title">{panels[panel].title}</h2><p>{panels[panel].text}</p><ul>{panels[panel].items.map((item) => <li key={item}>{item}</li>)}</ul><button className="landing__button landing__button--primary" onClick={() => { closePanel(); router.push("/contact"); }}>Shape your next idea</button></>}
        </div>
      </dialog>
    </div>
    <Technologies />
    <Services onContact={() => openPanel("contact")} />
    <WhyRetami />
    <ClientResults />
    <WhoWeHelp />
    <ClosingCTA onContact={() => openPanel("contact")} />
    <Footer onNavigate={openPanel} />
    </>
  );
}

