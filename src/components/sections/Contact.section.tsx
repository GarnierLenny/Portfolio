"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiMalt } from "react-icons/si";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { SectionPrimaryTitle } from "./Competences.section";
import { BiLogoGmail } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { Analytics } from "@vercel/analytics/react";
import { Mail, ArrowUpRight } from "lucide-react";

type ContactType = {
  text: string;
  label: string;
  callback: () => void;
  icon: ReactNode;
  highlight?: boolean;
};

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);

  // Reset le message "Copied" après 3 secondes
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const contacts: ContactType[] = [
    {
      label: "Professional",
      text: "LinkedIn",
      callback: () => window.open("https://www.linkedin.com/in/lenny-garnier-2ab689199/"),
      icon: <FaLinkedin size={20} />,
      highlight: true
    },
    {
      label: "Freelance",
      text: "Malt",
      callback: () => window.open("https://www.malt.fr/profile/lennygarnier"),
      icon: <SiMalt size={20} />,
    },
    {
      label: "Freelance",
      text: "Upwork",
      callback: () => window.open("https://www.upwork.com/freelancers/~0150a09f0bed821520?viewMode=1"),
      icon: <FaUpwork size={20} />,
    },
    {
      label: "Code",
      text: "Github",
      callback: () => window.open("https://github.com/GarnierLenny"),
      icon: <FaGithub size={20} />,
    },
    {
      label: "Challenge",
      text: "LeetCode",
      callback: () => window.open("https://leetcode.com/u/Lenny00/"),
      icon: <SiLeetcode size={20} />,
    },
    {
      label: "Social",
      text: "X",
      callback: () => window.open("https://x.com/lennygrnr"),
      icon: <FaXTwitter size={20} />,
    },
  ];

  return (
    <section id="contact" className="bg-slate-900 w-full pb-20 px-6">
      <SectionPrimaryTitle title="Let's build something great together" />
      <div className="max-w-4xl mx-auto">
        
        {/* Main Email CTA */}
        <div className="mt-10 mb-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 backdrop-blur-md flex flex-col items-center text-center">
          <div className="p-4 bg-indigo-500/20 rounded-full mb-6">
            <Mail className="text-indigo-400" size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for your next project?</h3>
          <p className="text-slate-400 mb-8 max-w-md">
            Whether you need a Fullstack dev for a SaaS or a Mobile expert for an AI app, I'm just an email away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => window.location.href = "mailto:lenny.garnier00@gmail.com"}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
            >
              Send me an email
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText("lenny.garnier00@gmail.com");
                setCopied(true);
              }}
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {copied ? <ImCheckmark className="text-green-500" /> : <BiLogoGmail className="text-red-500" />}
              {copied ? "Email copied!" : "Copy email"}
            </button>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={contact.callback}
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="text-slate-400 group-hover:text-indigo-400 transition-colors">
                  {contact.icon}
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{contact.label}</p>
                  <p className="text-sm font-bold text-white">{contact.text}</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ))}
        </div>

        <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Lenny Garnier. Built with Next.js & Tailwind.</p>
          <p className="flex items-center gap-2 italic">
            Made with 🤍 in Reunion Island <span className="not-italic">🌴</span>
          </p>
        </footer>
      </div>
      <Analytics />
    </section>
  );
}
