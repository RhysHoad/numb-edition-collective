import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import drop1 from "@/assets/drop-1.jpg";
import drop2 from "@/assets/drop-2.jpg";
import drop3 from "@/assets/drop-3.jpg";
import drop4 from "@/assets/drop-4.jpg";

const drops = [
  {
    id: 1,
    title: "The Sound of Concrete",
    subtitle: "How UK garage mutated into something unrecognisable — and why that matters.",
    image: drop1,
    vibe: "Underground",
    readTime: "8 min",
    category: "Music",
    featured: true,
  },
  {
    id: 2,
    title: "After Dark",
    subtitle: "Inside the warehouse raves reshaping London's nightlife post-lockdown.",
    image: drop2,
    vibe: "Experimental",
    readTime: "6 min",
    category: "Culture",
  },
  {
    id: 3,
    title: "Dressed in Shadow",
    subtitle: "The new wave of UK designers building anti-fashion from the ground up.",
    image: drop3,
    vibe: "High-Fashion",
    readTime: "5 min",
    category: "Fashion",
  },
  {
    id: 4,
    title: "Night Market Frequencies",
    subtitle: "Where food, music, and community collide in East London's late-night scene.",
    image: drop4,
    vibe: "Underground",
    readTime: "4 min",
    category: "Food",
  },
];

const DropsSection = () => {
  const featured = drops[0];
  const rest = drops.slice(1);

  return (
    <section id="drops" className="py-20 md:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-electric text-xs tracking-[0.3em] uppercase font-medium">
              Issue 07
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mt-2">
              Latest Drops
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-electric transition-colors">
            View Archive <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Featured + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden lg:row-span-2 cursor-pointer"
          >
            <div className="aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="vibe-tag">{featured.vibe}</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">{featured.category}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                {featured.title}
              </h3>
              <p className="font-editorial text-sm md:text-base text-muted-foreground mt-3 max-w-md italic">
                {featured.subtitle}
              </p>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                <Clock size={12} />
                <span className="text-xs tracking-wider">{featured.readTime} read</span>
              </div>
            </div>
          </motion.article>

          {/* Grid articles */}
          {rest.map((drop, i) => (
            <motion.article
              key={drop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer bg-surface"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="vibe-tag text-[10px]">{drop.vibe}</span>
                      <span className="text-[10px] text-muted-foreground tracking-wider uppercase">{drop.category}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-electric transition-colors duration-300">
                      {drop.title}
                    </h3>
                    <p className="font-editorial text-sm text-muted-foreground mt-2 italic line-clamp-2">
                      {drop.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                    <Clock size={11} />
                    <span className="text-[11px] tracking-wider">{drop.readTime} read</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropsSection;
