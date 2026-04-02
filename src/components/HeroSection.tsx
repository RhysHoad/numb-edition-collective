import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: mousePos.x * -15,
          y: mousePos.y * -15,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.03) 2px, hsl(0 0% 100% / 0.03) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          animate={{
            x: mousePos.x * 20,
            y: mousePos.y * 20,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <h1 className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-black leading-none tracking-tighter glitch-text select-none">
            NUMB
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 md:mt-6"
        >
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-muted-foreground">
            Underground Culture · Elevated
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href="#drops"
            className="vibe-tag text-sm px-6 py-2.5 hover:bg-electric hover:text-electric-foreground transition-all duration-300"
          >
            Latest Drop
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Issue 07
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
