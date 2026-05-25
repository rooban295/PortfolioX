"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/animations/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "AI-Based Code Review Assistant",
      desc: "An intelligent platform that automatically reviews code and suggests improvements.",
      tech: ["Next.js", "OpenAI", "Tailwind"],
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Dashboard",
      desc: "A comprehensive analytics dashboard for managing online retail operations.",
      tech: ["React", "TypeScript", "GSAP"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Portfolio Website",
      desc: "An award-winning futuristic portfolio experience.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Task Management System",
      desc: "A collaborative Kanban board for enterprise teams.",
      tech: ["Spring Boot", "MySQL", "React"],
      img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth > 768;

      if (isDesktop) {
        const totalWidth = scrollRef.current!.scrollWidth - window.innerWidth;

        gsap.to(scrollRef.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            end: () => "+=" + totalWidth,
          },
        });

        gsap.from(".project-card", {
          y: 100,
          opacity: 0.4,
          scale: 0.88,
          rotateY: 12,
          transformOrigin: "center center",
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-black w-full overflow-hidden">
      <div className="md:h-screen flex flex-col justify-center pt-24 pb-12">
        <div className="px-8 md:px-24 mb-12 shrink-0">
          <SectionHeading
            align="left"
            title="Featured Work"
            subtitle="A selection of my most recent and impactful projects, blending robust engineering with premium design."
            className="mb-0"
          />
        </div>

        <div ref={scrollRef} className="flex flex-col md:flex-row gap-8 px-8 md:px-24 w-fit pb-12">
          {projects.map((project, i) => (
            <div key={i} className="project-card w-full md:w-[600px] shrink-0 group">
              <GlassCard className="h-[500px] flex flex-col p-6">
                <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs rounded-full border border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="flex gap-2 items-center text-sm font-bold hover:text-neon-blue transition-colors cursor-none z-20 relative">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="flex gap-2 items-center text-sm font-bold hover:text-neon-purple transition-colors cursor-none z-20 relative">
                    <Code size={16} /> GitHub
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
