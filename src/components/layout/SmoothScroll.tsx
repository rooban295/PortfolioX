"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      lerp: 0.07,
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTicker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: 0, duration: 1.6 });
    };
    document.addEventListener("click", onAnchorClick);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(onTicker);
      lenis.destroy();
      root.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <>{children}</>;
}
