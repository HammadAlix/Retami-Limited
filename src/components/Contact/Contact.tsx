"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Navbar, { type Panel } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./contact.css";

const services = ["AI engineering & automation", "Websites, SaaS & mobile apps", "CRM & marketing automation", "SEO & digital growth", "Branding, motion & video", "AI creative production", "Custom scope / not sure yet"];

export default function Contact() {
  const router = useRouter();
  const [draft, setDraft] = useState<{ text: string; href: string } | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const result = useRef<HTMLDivElement>(null);
  const careers = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  function navigate(panel: Panel) {
    if (panel === "contact") { document.getElementById("contact-name")?.focus(); }
    else if (panel === "careers") { returnFocus.current = document.activeElement as HTMLElement; careers.current?.showModal(); }
    else router.push(panel === "work" ? "/?panel=work" : panel === "about" ? "/about" : "/#services");
  }
  function closeCareers() { careers.current?.close(); returnFocus.current?.focus(); }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const value = (key: string) => String(fields.get(key) || "").trim();
    const name = value("name");
    const text = `Hello Retami,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${value("email")}\nCompany: ${value("company") || "Not specified"}\nService: ${value("service")}\nTimeline: ${value("timeline") || "Flexible / to discuss"}\n\nProject details:\n${value("message")}\n\nThank you,\n${name}`;
    setDraft({ text, href: `mailto:hammadfiver5@gmail.com?subject=${encodeURIComponent(`Project enquiry: ${value("service")}`)}&body=${encodeURIComponent(text)}` });
    setCopyStatus("");
    requestAnimationFrame(() => result.current?.focus());
  }
  async function copyDraft() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft.text); setCopyStatus("Copied. You can paste your enquiry into an email to hammadfiver5@gmail.com."); }
    catch { setCopyStatus("Copy was unavailable. Select and copy the draft below instead."); }
  }
  return <div className="contact-page" id="contact-top">
    <a className="skip-link" href="#contact-main">Skip to content</a>
    <Navbar currentPage="contact" onNavigate={navigate} />
    <main id="contact-main">
      <header className="contact-hero"><p className="contact-eyebrow">CONTACT RETAMI LIMITED</p><h1>Good things start<br /><span>with a conversation.</span></h1><p>A first idea, a fresh challenge or a project ready to move.<br />Tell us what you have in mind.</p></header>
      <div className="contact-layout">
        <aside className="contact-details" aria-labelledby="contact-details-title"><div className="contact-details__top"><span>LET’S CONNECT</span><span aria-hidden="true">01 / HELLO</span></div><h2 id="contact-details-title">Your next chapter.<br /><span>Our full attention.</span></h2><p>Choose the way that works for you. Start with a message, a call or a few details about your project.</p>
          <address><a href="mailto:hammadfiver5@gmail.com"><span>EMAIL US</span><strong>hammadfiver5@gmail.com</strong></a><a href="tel:+447877195925"><span>CALL US</span><strong>+44 7877 195925</strong></a><a href="https://wa.me/447877195925" target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span><strong>Chat with us on WhatsApp</strong></a></address>
          <div className="contact-details__guide"><h3>A useful starting point</h3><ul><li>What you want to build or improve</li><li>Who it’s for and what success looks like</li><li>Any timeline or scope you have in mind</li></ul><p>Still figuring it out? That’s a good place to start, too.</p></div>
          <span className="contact-details__signature">YOUR AMBITION. OUR EXPERIENCE.</span>
        </aside>
        <section className="contact-form-section" aria-labelledby="contact-form-title"><p className="contact-eyebrow">A LITTLE CONTEXT GOES A LONG WAY</p><h2 id="contact-form-title">Tell us about your project.</h2><p className="contact-form-section__intro">Fields marked * are required.</p>
          <form className="contact-form" onSubmit={prepare} onChange={() => { if (draft) setDraft(null); setCopyStatus(""); }}>
            <div className="contact-form__pair"><label htmlFor="contact-name">Your name *<input id="contact-name" name="name" autoComplete="name" required maxLength={80} pattern=".*\S.*" placeholder="Your full name" /></label><label htmlFor="contact-email">Email address *<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@company.com" /></label></div>
            <label htmlFor="contact-company">Company <span>(optional)</span><input id="contact-company" name="company" autoComplete="organization" maxLength={120} placeholder="Your business or brand" /></label>
            <div className="contact-form__pair"><label htmlFor="contact-service">What can we help with? *<select id="contact-service" name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service => <option key={service}>{service}</option>)}</select></label><label htmlFor="contact-timeline">Timeline <span>(optional)</span><select id="contact-timeline" name="timeline" defaultValue=""><option value="">Let’s discuss</option><option>As soon as practical</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just exploring</option></select></label></div>
            <label htmlFor="contact-message">Your project *<textarea id="contact-message" name="message" onChange={event => event.currentTarget.setCustomValidity(event.currentTarget.value.trim() ? "" : "Please describe your project.")} rows={6} required maxLength={1500} placeholder="The idea, the challenge, and what you’d like to achieve…" /></label>
            <p className="contact-form__note" id="contact-delivery-note">This form prepares an email draft. Nothing is sent until you send it from your email app.</p><button className="contact-form__submit" type="submit" aria-describedby="contact-delivery-note">Prepare my enquiry</button>
          </form>
          {draft && <div className="contact-draft" ref={result} tabIndex={-1} aria-labelledby="contact-draft-title"><h3 id="contact-draft-title">Your enquiry is ready.</h3><p>Open your email app to review and send it to Retami, or copy the text below. No message has been sent yet.</p><div className="contact-draft__actions"><a href={draft.href} className="contact-draft__email">Open email draft</a><button type="button" onClick={copyDraft}>Copy enquiry</button></div><details><summary>Review your draft</summary><pre>{draft.text}</pre></details><p role="status">{copyStatus}</p></div>}
        </section>
      </div>
      <section className="contact-next" aria-labelledby="contact-next-title"><p className="contact-eyebrow">FROM HELLO TO A CLEAR NEXT STEP</p><h2 id="contact-next-title">A conversation with purpose.</h2><ol><li><span>01</span><div><h3>Share your direction</h3><p>Tell us about your goals, your audience and the problem you want to solve.</p></div></li><li><span>02</span><div><h3>Explore the possibilities</h3><p>We discuss the context and identify an approach that fits your needs.</p></div></li><li><span>03</span><div><h3>Define the next step</h3><p>We clarify the scope and priorities before moving into delivery.</p></div></li></ol></section>
    </main>
    <Footer topHref="#contact-top" onNavigate={navigate} />
    <dialog ref={careers} className="contact-careers" aria-labelledby="contact-careers-title" onCancel={event => { event.preventDefault(); closeCareers(); }} onClick={event => { if (event.target === event.currentTarget) closeCareers(); }}><button onClick={closeCareers} aria-label="Close careers dialog">×</button><h2 id="contact-careers-title">Careers at Retami</h2><p>There are no published vacancies on this website yet. Email us to introduce yourself.</p><a href="mailto:hammadfiver5@gmail.com?subject=Career%20enquiry">Email Retami</a></dialog>
  </div>;
}
