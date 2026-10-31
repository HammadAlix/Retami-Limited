import "./who-we-help.css";

const audiences = [
  { name: "Startups", stage: "FROM THE FIRST IDEA", title: "Give your idea a strong start.", text: "Shape your concept, design the experience and build a focused first product you can learn from.", tags: ["Product design", "MVP development", "AI integration"] },
  { name: "Growing businesses", stage: "READY FOR THE NEXT CHAPTER", title: "Make room for what comes next.", text: "Connect your tools, simplify repetitive work and build systems that support the way your business is growing.", tags: ["Custom software", "CRM systems", "Automation"] },
  { name: "Ecommerce brands", stage: "FROM DISCOVERY TO CHECKOUT", title: "Turn attention into connection.", text: "Bring your storefront, brand content and customer journey together into a clearer shopping experience.", tags: ["Online stores", "Creative content", "Customer journeys"] },
  { name: "Agencies", stage: "AN EXTENSION OF YOUR TEAM", title: "Bring more capability to the table.", text: "Add design, development and AI support to your delivery team, with a clear scope and a shared direction.", tags: ["Development support", "Design & video", "AI workflows"] },
];
const steps = [
  { name: "Understand", text: "We listen to your goals and the challenge behind them." },
  { name: "Shape", text: "Together, we agree on the scope, approach and next steps." },
  { name: "Build", text: "We design, develop and refine with your feedback." },
  { name: "Launch & support", text: "We help you go live and plan ongoing improvements." },
];

export default function WhoWeHelp() {
  return (
    <section className="who-we-help" id="who-we-help" aria-labelledby="who-we-help-heading">
      <header className="who-we-help__header"><p className="who-we-help__eyebrow">DIFFERENT AMBITIONS. THE SAME COMMITMENT.</p><h2 id="who-we-help-heading">Who we <span>help.</span></h2><p className="who-we-help__tagline">Wherever you are now, let’s build what comes next.</p></header>
      <div className="who-we-help__audiences">
        {audiences.map((audience, index) => <article className="who-we-help__card" key={audience.name}>
          <div className="who-we-help__card-top"><span className="who-we-help__number" aria-hidden="true">0{index + 1}</span><span className="who-we-help__stage">{audience.stage}</span></div>
          <h3>{audience.name}</h3><p className="who-we-help__promise">{audience.title}</p><p className="who-we-help__description">{audience.text}</p>
          <ul className="who-we-help__tags" aria-label={`${audience.name} capabilities`}>{audience.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </article>)}
      </div>
      <div className="who-we-help__process">
        <div className="who-we-help__process-heading"><p className="who-we-help__eyebrow">HOW WE WORK</p><h3>A clear path.<br /><span>Built around you.</span></h3></div>
        <ol className="who-we-help__steps">{steps.map((step, index) => <li key={step.name}><span className="who-we-help__step-number" aria-hidden="true">0{index + 1}</span><h4>{step.name}</h4><p>{step.text}</p></li>)}</ol>
      </div>
    </section>
  );
}
