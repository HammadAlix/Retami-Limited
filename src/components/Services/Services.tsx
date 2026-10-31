"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import "./services.css";

const services = [
  {
    "name": "AI Engineering & Automation",
    "short": "Intelligence that works for you.",
    "title": "Smarter systems. More room to grow.",
    "description": "We build AI agents, knowledge assistants and automated workflows that connect your tools and simplify everyday operations.",
    "capabilities": [
      "AI agents & chatbots",
      "Document processing",
      "n8n, Make & Zapier",
      "AI consulting & integration"
    ],
    "inputs": [
      "Knowledge",
      "Business tools",
      "Daily tasks"
    ],
    "engine": "AI + automation",
    "output": "Connected work"
  },
  {
    "name": "Websites, SaaS & Mobile Apps",
    "short": "From first idea to working product.",
    "title": "Digital products built around you.",
    "description": "From websites and online stores to custom software and mobile apps, we bring design and engineering together. Launch something new, improve an existing platform or keep your product running smoothly.",
    "capabilities": [
      "Websites & ecommerce",
      "SaaS & custom software",
      "Android & Flutter",
      "UI/UX design",
      "APIs & integrations",
      "Maintenance & modernisation"
    ],
    "inputs": [
      "User needs",
      "Business goals",
      "Product ideas"
    ],
    "engine": "Design + engineering",
    "output": "Your next product"
  },
  {
    "name": "CRM & Marketing Automation",
    "short": "Connect your customer journey.",
    "title": "From a first enquiry to the next conversation.",
    "description": "Bring lead capture, follow-ups and booking into one connected system. We configure GoHighLevel and CRM workflows around your sales process.",
    "capabilities": [
      "GoHighLevel setup",
      "Sales funnels & pipelines",
      "Email & SMS workflows",
      "Appointment booking",
      "CRM integrations"
    ],
    "inputs": [
      "New leads",
      "Customer data",
      "Sales process"
    ],
    "engine": "Connected CRM",
    "output": "Timely follow-ups"
  },
  {
    "name": "SEO & Digital Growth",
    "short": "Help the right people find you.",
    "title": "A stronger presence. A clearer path to action.",
    "description": "Make your website easier to discover and use. We combine technical, on-page and local SEO with content strategy, analytics and conversion improvements shaped around your audience.",
    "capabilities": [
      "Technical & on-page SEO",
      "Local SEO",
      "Content strategy",
      "Analytics",
      "Conversion optimisation"
    ],
    "inputs": [
      "Search intent",
      "Site insights",
      "Your audience"
    ],
    "engine": "SEO + optimisation",
    "output": "Better discovery"
  },
  {
    "name": "Branding, Motion & Video",
    "short": "Make your story worth watching.",
    "title": "Distinctive identities. Stories that connect.",
    "description": "From animated logos and SaaS explainers to product demos and UGC-style ads, we create visuals around your message and audience.",
    "capabilities": [
      "Visual branding & logo design",
      "Motion graphics",
      "Explainer & promotional videos",
      "Product demos",
      "UGC-style & social ads"
    ],
    "inputs": [
      "Brand identity",
      "Your message",
      "Your audience"
    ],
    "engine": "Design + storytelling",
    "output": "Branded content"
  },
  {
    "name": "AI Creative Production",
    "short": "Give your imagination a new canvas.",
    "title": "Your creative vision. New possibilities.",
    "description": "We combine AI-powered image and video production with editing, compositing and creative direction to shape product visuals and campaign content with a consistent brand look.",
    "capabilities": [
      "Custom AI images",
      "Cinematic AI video",
      "Product visuals",
      "Campaign content",
      "Editing & compositing"
    ],
    "inputs": [
      "Creative brief",
      "Brand direction",
      "Visual ideas"
    ],
    "engine": "AI + creative direction",
    "output": "Original visuals"
  }
];

export default function Services({ onContact }: { onContact: () => void }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const selectFromHash = () => {
      const match = window.location.hash.match(/^#service-tab-(\d+)$/);
      if (!match) return;
      const index = Number(match[1]);
      if (index < services.length) setSelected(index);
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % services.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + services.length - 1) % services.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = services.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__intro">
        <div><p className="services__eyebrow">DESIGN. DEVELOP. AUTOMATE.</p><h2 id="services-heading">Our <span>Services</span></h2><p className="services__tagline">Less complexity. More possibility.</p></div>
      </div>
      <div className="services__workspace">
        <div className="services__tabs" role="tablist" aria-label="Our expertise" aria-orientation="vertical">
          {services.map((item, index) => (
            <button key={item.name} ref={(node) => { tabs.current[index] = node; }} className="services__tab" role="tab" id={`service-tab-${index}`} aria-selected={selected === index} aria-controls={`service-panel-${index}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => onKeyDown(event, index)}>
              <span className="services__number">0{index + 1}</span><span><span className="services__name">{item.name}</span><span className="services__short">{item.short}</span></span><span className="services__indicator" aria-hidden="true" />
            </button>
          ))}
        </div>
        {services.map((item, index) => (
          <div key={item.name} className="services__panel" role="tabpanel" id={`service-panel-${index}`} aria-labelledby={`service-tab-${index}`} hidden={selected !== index} tabIndex={0}>
            <div className="services__panel-top"><span>THE POSSIBILITIES</span><span>0{index + 1} / {String(services.length).padStart(2, "0")}</span></div>
            <h3>{item.title}</h3><p className="services__description">{item.description}</p>
            <ul className="services__capabilities">{item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            <div className="services__flow" aria-label={`${item.inputs.join(", ")} through ${item.engine} to ${item.output}`}>
              <div className="services__sources">{item.inputs.map((input) => <span key={input}>{input}</span>)}</div>
              <span className="services__connector" aria-hidden="true" />
              <div className="services__engine"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m24 5 19 11-19 11L5 16 24 5Z" /><path d="m5 24 19 11 19-11M5 32l19 11 19-11" /></svg><span>{item.engine}</span></div>
              <span className="services__connector" aria-hidden="true" /><span className="services__output">{item.output}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="services__custom">
        <div><p className="services__eyebrow">HAVE SOMETHING ELSE IN MIND?</p><h3>Your idea. A custom solution.</h3><p>Need something beyond our listed services? Tell us what you’re building, fixing or exploring—we’ll help define the scope and next steps.</p></div>
        <button className="services__contact" onClick={onContact}>Let’s talk</button>
      </div>
      <div className="services__foot"><span>One partner. From the first question to the working solution.</span><span>BUILT AROUND YOU</span></div>
    </section>
  );
}
