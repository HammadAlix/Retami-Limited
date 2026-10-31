"use client";

import { useEffect, useRef, useState } from "react";
import catalog from "./catalog.json";
import "./technologies.css";

const rows = [catalog.filter((_, index) => index % 2 === 0), catalog.filter((_, index) => index % 2 === 1)];

export default function Technologies() {
  const section = useRef<HTMLElement>(null);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let inView = false;
    const sync = () => setRunning(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio > 0;
      sync();
    }, { threshold: [0, 0.01] });
    if (section.current) observer.observe(section.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return (
    <section ref={section} className={`technologies${running ? "" : " technologies--paused"}`} aria-labelledby="technologies-heading">
      <div className="technologies__header">
        <div><p className="technologies__eyebrow">TECHNOLOGIES WE WORK WITH</p><h2 id="technologies-heading">The technology behind <span>your next idea.</span></h2></div>
      </div>
      <div className="technologies__rows">
        {rows.map((row, index) => (
          <div className={`technologies__row technologies__row--${index}`} key={index}>
            <div className="technologies__track">
              {[0, 1].map((copy) => (
                <ul className="technologies__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {row.map((technology) => <li className="technologies__item" key={technology.name}>
                    {technology.icon && <img src={`/technologies/${technology.icon}.svg`} alt="" width="32" height="32" decoding="async" />}
                    <span>{technology.name}</span>
                  </li>)}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
