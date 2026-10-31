"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar, { type Panel } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { assets } from "@/assets/assets";
import "./about.css";

export default function About() {
  const router = useRouter();
  const careers = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  function navigate(panel: Panel) {
    if (panel === "contact") router.push("/contact");
    else if (panel === "careers") { trigger.current = document.activeElement as HTMLElement; careers.current?.showModal(); }
    else if (panel === "work") router.push("/?panel=work");
    else if (panel === "about") router.push("/about");
    else router.push("/#services");
  }
  function closeCareers() { careers.current?.close(); trigger.current?.focus(); }

  return <div className="about-page" id="about-top">
    <a className="skip-link" href="#about-main">Skip to content</a>
    <Navbar currentPage="about" onNavigate={navigate} />
    <main id="about-main">
      <section className="about-hero" aria-labelledby="about-title">
        <p className="about-eyebrow">ABOUT RETAMI LIMITED</p>
        <h1 id="about-title">Experience that shapes<br /><span>ideas into impact.</span></h1>
        <p className="about-hero__intro">Technology, design and storytelling.<br />Connected by purpose. Built with care.</p>
        <div className="about-hero__visual">
          <Image src={assets.emeraldMist} alt="Retami's sculpted emerald ribbon emblem" fill sizes="100vw" priority />
          <div className="about-hero__visual-label"><span>THE RETAMI PERSPECTIVE</span><span>Ambition meets experience.</span></div>
          <div className="about-hero__stats"><div><strong>12</strong><span>years of experience</span></div><div><strong>800<span>+</span></strong><span>projects delivered</span></div><p>Different disciplines.<br />One shared standard.</p></div>
        </div>
      </section>
      <section className="about-story" aria-labelledby="about-story-title">
        <p className="about-eyebrow">OUR STORY</p><h2 id="about-story-title">A broad perspective.<br /><span>A practical understanding.</span></h2>
        <div className="about-story__copy"><p>Retami Limited brings together technology, design and storytelling to help businesses build, operate and communicate better. With <strong>12 years of experience and more than 800 projects delivered</strong>, we bring a practical understanding of what it takes to turn an ambitious idea into a carefully executed digital experience.</p><p>Whether you are launching something new or improving an established business, our focus remains the same: create work that serves a clear purpose, reflects your standards and gives you a stronger foundation for what comes next.</p></div>
      </section>
      <section className="about-expertise" aria-labelledby="about-expertise-title">
        <div className="about-expertise__heading"><p className="about-eyebrow">CONNECTED CAPABILITIES</p><h2 id="about-expertise-title">The systems behind you.<br /><span>The experiences ahead.</span></h2><p>Our expertise spans AI engineering and automation, websites, SaaS and mobile applications, CRM and marketing automation, SEO, branding, motion graphics and AI creative production. This breadth allows us to connect the systems behind a business with the experiences its customers see—creating consistency from the first interaction to the final delivery.</p><Link href="/#services" className="about-link">Explore our services</Link></div>
        <div className="about-expertise__disciplines">{[
          { title: "Technology", note: "BUILD & CONNECT", text: "AI engineering, automation, websites, SaaS, mobile applications and CRM systems." },
          { title: "Design", note: "SHAPE & REFINE", text: "Branding, digital interfaces and visual experiences that reflect your standards." },
          { title: "Storytelling", note: "COMMUNICATE & ENGAGE", text: "Motion graphics, AI creative production and content that makes your message clear." },
        ].map((item, index) => <article key={item.title}><span className="about-expertise__number">0{index + 1}</span><div><p>{item.note}</p><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>
      <section className="about-approach" aria-labelledby="about-approach-title">
        <p className="about-eyebrow">THE WAY WE THINK</p><h2 id="about-approach-title">We begin <span>by listening.</span></h2>
        <p className="about-approach__intro">Understanding your goals, audience and challenges helps us make better decisions about what to build and how to present it. From there, we combine thoughtful design, technical execution and clear communication, giving each detail the attention it deserves.</p>
        <div className="about-approach__values"><article><span>01 / UNDERSTANDING</span><h3>Your context comes first.</h3><p>We take the time to understand what matters to your business and the people it serves.</p></article><article><span>02 / CRAFT</span><h3>Care in every detail.</h3><p>Thoughtful design and technical execution work together, from the big picture to the small interactions.</p></article><article><span>03 / CLARITY</span><h3>A shared direction.</h3><p>Clear communication keeps the work connected to your goals throughout the project.</p></article></div>
      </section>
      <section className="about-contact" id="about-contact" aria-labelledby="about-contact-title"><p className="about-eyebrow">LET’S BUILD WHAT COMES NEXT</p><h2 id="about-contact-title">Your ambition. Our experience.<br /><span>Built into every detail.</span></h2><div className="about-contact__links"><a id="about-email" href="mailto:hammadfiver5@gmail.com">hammadfiver5@gmail.com</a><a href="tel:+447877195925">+44 7877 195925</a></div></section>
    </main>
    <Footer topHref="#about-top" onNavigate={navigate} />
    <dialog className="about-dialog" ref={careers} aria-labelledby="about-careers-title" onCancel={event => { event.preventDefault(); closeCareers(); }} onClick={event => { if (event.target === event.currentTarget) closeCareers(); }}><button onClick={closeCareers} aria-label="Close careers dialog">×</button><p className="about-eyebrow">CAREERS</p><h2 id="about-careers-title">Build things that matter.</h2><p>There are no published vacancies on this website yet. You can reach us by email to introduce yourself.</p><a href="mailto:hammadfiver5@gmail.com?subject=Career%20enquiry">Email Retami</a></dialog>
  </div>;
}
