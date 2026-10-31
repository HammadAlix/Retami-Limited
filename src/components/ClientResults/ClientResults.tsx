"use client";

import { useState } from "react";
import "./client-results.css";

// Draft testimonials for layout review. Replace quotes with approved client feedback.
// Ahmed R is owner-supplied; the other five names are fictional placeholders.
const testimonials = [
  { name: "Ahmed R", initials: "AR", category: "WEBSITE DEVELOPMENT", title: "A website that feels like our business.", quote: "The team took the time to understand what we wanted and kept us involved throughout. The result felt clear, polished and true to our brand." },
  { name: "Sarah M", initials: "SM", category: "AI & AUTOMATION", title: "Thoughtful solutions to everyday challenges.", quote: "Retami helped us think through our workflow and identify where automation could be useful. We appreciated the practical approach and clear explanations." },
  { name: "Daniel K", initials: "DK", category: "CRM & MARKETING AUTOMATION", title: "A clearer way to manage our leads.", quote: "From planning our pipeline to connecting the follow-up steps, the team made a complex project easier to understand. Communication was consistent throughout." },
  { name: "Ayesha S", initials: "AS", category: "BRANDING & VIDEO", title: "Our ideas, brought to life with care.", quote: "They listened to our direction and brought thoughtful creative ideas of their own. The attention to the visuals and the story made the collaboration feel personal." },
  { name: "James W", initials: "JW", category: "SOFTWARE & MOBILE", title: "A team that understands the details.", quote: "We needed a product shaped around the way we work. Retami helped us refine the scope, worked through our feedback and kept the experience focused on our users." },
  { name: "Fatima H", initials: "FH", category: "SEO & DIGITAL GROWTH", title: "Clear advice and a shared direction.", quote: "We valued having the technical and creative sides considered together. The team explained their recommendations clearly and helped us prioritise the next steps." },
];

export default function ClientResults() {
  const [active, setActive] = useState(0);
  function move(direction: number) { setActive((current) => (current + direction + testimonials.length) % testimonials.length); }
  return (
    <section className="client-results" aria-labelledby="client-results-heading" id="client-results">
      <header className="client-results__header"><p className="client-results__eyebrow">CLIENT PERSPECTIVES</p><h2 id="client-results-heading">Client <span>Testimonials</span></h2><p className="client-results__notice">Sample testimonials for design preview. Quotes and placeholder identities await approved client feedback.</p></header>
      <div className="client-results__carousel" role="region" aria-roledescription="carousel" aria-label="Sample client testimonials">
        <div className="client-results__stage">
          {testimonials.map((item, index) => {
            const offset = (index - active + testimonials.length) % testimonials.length;
            const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === testimonials.length - 1 ? "previous" : "hidden";
            return <article key={item.category} className={`client-results__card client-results__card--${position}`} aria-hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}: ${item.name}`}>
              <div className="client-results__card-top"><span className="client-results__index">0{index + 1}</span><span className="client-results__badge">SAMPLE TESTIMONIAL</span></div>
              <p className="client-results__category">{item.category}</p><h3>{item.title}</h3><blockquote className="client-results__description">“{item.quote}”</blockquote>
              <footer className="client-results__identity"><span className="client-results__avatar" aria-hidden="true">{item.initials}</span><div><p>{item.name}</p></div></footer>
            </article>;
          })}
        </div>
        <div className="client-results__controls">
          <button className="client-results__arrow" onClick={() => move(-1)} aria-label="Previous testimonial"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg></button>
          <div className="client-results__dots" role="group" aria-label="Choose a testimonial">{testimonials.map((item, index) => <button key={item.category} className={active === index ? "is-active" : ""} aria-label={`Show testimonial ${index + 1}: ${item.name}`} aria-pressed={active === index} onClick={() => setActive(index)} />)}</div>
          <button className="client-results__arrow" onClick={() => move(1)} aria-label="Next testimonial"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg></button>
        </div>
        <p className="client-results__status" aria-live="polite" aria-atomic="true">{active + 1} / {testimonials.length} — {testimonials[active].name}</p>
      </div>
    </section>
  );
}
