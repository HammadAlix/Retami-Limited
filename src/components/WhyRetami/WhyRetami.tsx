import Image from "next/image";
import { assets } from "@/assets/assets";
import "./why-retami.css";

const reasons = [
  { title: "One connected team", text: "Design, software, AI and automation work best together. We connect the creative and technical sides of your project around one shared direction.", note: "CREATIVE + TECHNICAL" },
  { title: "Built around your business", text: "Your goals come first. We shape the solution around your audience, your processes and the tools you already use, with a scope that makes sense for you.", note: "YOUR GOALS COME FIRST" },
  { title: "From idea to ongoing support", text: "From planning and development to launch and improvements, we help you move through each stage with clear next steps and support as your needs evolve.", note: "BUILT FOR WHAT COMES NEXT" },
];

export default function WhyRetami() {
  return (
    <section className="why-retami" id="why-retami" aria-labelledby="why-retami-heading">
      <Image src={assets.whyRetamiBackground} alt="" fill unoptimized className="why-retami__background" />
      <div className="why-retami__header">
        <div><h2 id="why-retami-heading">WHY <span>RETAMI?</span></h2><p className="why-retami__tagline">Different disciplines. One shared vision.</p></div>
      </div>
      <p className="why-retami__experience">With 12 years of experience building websites, software and digital experiences, we help businesses turn ideas into products that work. Today, we bring that experience to AI and automation, with a focus on client satisfaction, stronger customer experiences and opportunities to grow revenue.</p>
      <ol className="why-retami__reasons">
        {reasons.map((reason, index) => <li key={reason.title}>
          <div className="why-retami__card-top"><span className="why-retami__number" aria-hidden="true">0{index + 1}</span>
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {index === 0 && <><rect x="5" y="5" width="16" height="16" rx="4" /><rect x="27" y="27" width="16" height="16" rx="4" /><path d="M29 7h8a4 4 0 0 1 4 4v8M7 29v8a4 4 0 0 0 4 4h8M16 16l16 16" /></>}
              {index === 1 && <><circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="8" /><path d="M24 3v10M24 35v10M3 24h10M35 24h10" /></>}
              {index === 2 && <><path d="M9 35V15a7 7 0 0 1 7-7h16a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7H20" /><path d="m4 30 5 5 5-5M33 13l6-6 5 6" /><circle cx="9" cy="40" r="2" /></>}
            </svg>
          </div><h3>{reason.title}</h3><p>{reason.text}</p><span className="why-retami__card-note">{reason.note}</span>
        </li>)}
      </ol>
    </section>
  );
}
