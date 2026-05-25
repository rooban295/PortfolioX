"use client";

import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/animations/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col justify-between pt-24">
      <div className="max-w-4xl mx-auto w-full px-4 flex-grow flex flex-col items-center justify-center">
        <SectionHeading
          title="Let's Talk"
          subtitle="Ready to build something amazing? Send me a message and let's get started."
          className="mb-12"
          titleClassName="text-5xl md:text-7xl"
        />

        <FadeUp delay={0.2} className="w-full">
          <GlassCard className="p-8 md:p-12">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <input type="text" id="name" suppressHydrationWarning placeholder="Name" className="bg-transparent border-b border-white/20 focus:border-neon-blue outline-none py-3 text-white transition-colors peer placeholder-transparent" required />
                  <label htmlFor="name" className="absolute left-0 -top-3 text-neon-blue text-xs transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon-blue peer-focus:text-xs">Name</label>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <input type="email" id="email" suppressHydrationWarning placeholder="Email" className="bg-transparent border-b border-white/20 focus:border-neon-blue outline-none py-3 text-white transition-colors peer placeholder-transparent" required />
                  <label htmlFor="email" className="absolute left-0 -top-3 text-neon-blue text-xs transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon-blue peer-focus:text-xs">Email</label>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative mt-4">
                <textarea id="message" rows={4} suppressHydrationWarning placeholder="Message" className="bg-transparent border-b border-white/20 focus:border-neon-blue outline-none py-3 text-white transition-colors peer placeholder-transparent resize-none" required />
                <label htmlFor="message" className="absolute left-0 -top-3 text-neon-blue text-xs transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-neon-blue peer-focus:text-xs">Message</label>
              </div>
              <button suppressHydrationWarning className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Send Message <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </FadeUp>
      </div>

      <footer className="w-full py-8 text-center border-t border-white/10 mt-24 z-10 bg-black/50 backdrop-blur-md">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Thison Roban. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
