import "./closing-cta.css";

export default function ClosingCTA({ onContact }: { onContact: () => void }) {
  return (
    <section className="closing-cta" id="start-a-project" aria-labelledby="closing-cta-heading">
      <div className="closing-cta__panel">
        <svg className="closing-cta__art" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs><linearGradient id="closing-ribbon" x1="200" y1="0" x2="1100" y2="700" gradientUnits="userSpaceOnUse"><stop stopColor="#A9C8A2" stopOpacity=".5" /><stop offset=".5" stopColor="#668E6E" stopOpacity=".08" /><stop offset="1" stopColor="#EAF2E7" stopOpacity=".3" /></linearGradient></defs>
          <ellipse cx="1030" cy="375" rx="325" ry="490" transform="rotate(-35 1030 375)" stroke="url(#closing-ribbon)" strokeWidth="60" />
          <ellipse cx="1030" cy="375" rx="365" ry="530" transform="rotate(-35 1030 375)" stroke="#A9C8A2" strokeOpacity=".18" />
          <path d="M-140 560C140 320 330 860 650 710" stroke="url(#closing-ribbon)" strokeWidth="90" />
          <path d="M-160 500C160 260 370 800 680 650" stroke="#A9C8A2" strokeOpacity=".2" />
        </svg>
        <div className="closing-cta__topline"><span>RETAMI LIMITED</span><span>IDEAS INTO REAL IMPACT</span></div>
        <div className="closing-cta__content">
          <p className="closing-cta__eyebrow">YOUR NEXT CHAPTER</p>
          <h2 id="closing-cta-heading">You have the ambition.<br /><span>Let’s give it shape.</span></h2>
          <p className="closing-cta__description">A new product. A smarter workflow. A brand ready for more.<br className="closing-cta__break" /> Tell us where you want to go. We’ll help you find the way forward.</p>
          <div className="closing-cta__actions"><button onClick={onContact} className="closing-cta__primary">Let’s talk about your project</button><a href="#services" className="closing-cta__secondary">Explore our services</a></div>
        </div>
        <div className="closing-cta__bottomline"><p>From the first idea to what comes next.</p><ul aria-label="Our approach"><li>Your goals first</li><li>A clear scope</li><li>Built together</li></ul></div>
      </div>
    </section>
  );
}
