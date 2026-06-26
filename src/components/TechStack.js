"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { techStack } from "@/config/techConfig";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const categoryColors = {
  Frontend:  { bg: "bg-violet-50",  border: "border-violet-200",  text: "text-violet-800",  dot: "bg-violet-400" },
  Framework: { bg: "bg-sky-50",     border: "border-sky-200",     text: "text-sky-800",     dot: "bg-sky-400" },
  Language:  { bg: "bg-amber-50",   border: "border-amber-200",   text: "text-amber-800",   dot: "bg-amber-400" },
  Styling:   { bg: "bg-cyan-50",    border: "border-cyan-200",    text: "text-cyan-800",    dot: "bg-cyan-400" },
  Animation: { bg: "bg-pink-50",    border: "border-pink-200",    text: "text-pink-800",    dot: "bg-pink-400" },
  "3D Websites": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", dot: "bg-emerald-400" },
  "3D Models":   { bg: "bg-lime-50",    border: "border-lime-200",    text: "text-lime-800",    dot: "bg-lime-400" },
  Backend:   { bg: "bg-orange-50",  border: "border-orange-200",  text: "text-orange-800",  dot: "bg-orange-400" },
  Database:  { bg: "bg-green-50",   border: "border-green-200",   text: "text-green-800",   dot: "bg-green-400" },
  Tools:     { bg: "bg-slate-50",   border: "border-slate-200",   text: "text-slate-800",   dot: "bg-slate-400" },
  Design:    { bg: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-800", dot: "bg-fuchsia-400" },
  Deployment:{ bg: "bg-neutral-50", border: "border-neutral-200", text: "text-neutral-800", dot: "bg-neutral-400" },
  Testing:   { bg: "bg-rose-50",    border: "border-rose-200",    text: "text-rose-800",    dot: "bg-rose-400" },
};

const fallback = { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-700", dot: "bg-gray-400" };

const FlipCard = ({ tech, index }) => {
  const [flipped, setFlipped] = useState(false);
  const color = categoryColors[tech.category] || fallback;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: "900px" }}
      className="w-[88px] h-[88px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 shadow-sm"
        >
          <div className="relative w-9 h-9">
            <Image
              src={tech.icon}
              alt={tech.name}
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>
          <span className="text-[10px] font-medium text-gray-300 text-center leading-tight px-1">
            {tech.name}
          </span>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className={`absolute inset-0 rounded-2xl border ${color.border} ${color.bg} flex flex-col items-center justify-center gap-1.5 px-2`}
        >
          <span className={`text-[11px] font-semibold ${color.text} text-center leading-tight`}>
            {tech.name}
          </span>
          <div className={`flex items-center gap-1 ${color.text} opacity-70`}>
            <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
            <span className="text-[9px] font-medium">{tech.category}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-6 md:px-20 overflow-hidden bg-background"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-16 z-20 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-200 mb-3">
          built with
        </p>
        <div
          className={`${cormorant.className} text-4xl md:text-5xl text-white italic`}
        >
          my stack
        </div>
        <motion.div
          className="mt-10 mx-auto h-px bg-white/10"
          initial={{ width: 0 }}
          animate={isInView ? { width: "120px" } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        
      </motion.div>

      {/* Cards grid */}
      <div className="relative z-20 flex flex-wrap justify-center gap-3 max-w-3xl">
        {techStack.map((tech, index) => (
          <FlipCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
