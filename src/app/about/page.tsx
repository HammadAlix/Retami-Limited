import type { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "About Retami Limited | Experience Into Impact",
  description: "Meet Retami Limited: 12 years of experience and more than 800 projects delivered across technology, design and storytelling.",
};

export default function AboutPage() { return <About />; }
