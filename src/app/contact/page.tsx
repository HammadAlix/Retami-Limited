import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Retami Limited | Start a Conversation",
  description: "Tell Retami Limited about your next website, software, AI, automation or creative project. Contact us by email or phone, or prepare a project enquiry.",
};

export default function ContactPage() { return <Contact />; }
