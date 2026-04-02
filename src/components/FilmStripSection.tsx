import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import film1 from "@/assets/film-1.jpg";
import film2 from "@/assets/film-2.jpg";

const films = [
  {
    id: 1,
    title: "Liminal Hours",
    director: "Aisha Deveraux",
    rating: 4.5,
    image: film1,
    genre: "Psychological Drama",
    year: "2026",
    blurb: "A fever dream about memory, loss, and the spaces between waking and sleep.",
  },
  {
    id: 2,
    title: "Concrete Hymns",
    director: "Marcus Obi",
    rating: 4,
    image: film2,
    genre: "Documentary",
    year: "2025",
    blurb: "Brutalist architecture as spiritual refuge in post-industrial Britain.",
  },
  {
    id: 3,
    title: "Nightcrawl",
    director: "Zoe Kim",
    rating: 3.5,
    image: film1,
    genre: "Thriller",
    year: "2026",
    blurb: "Underground racing meets existential dread in this neon-soaked debut.",
  },
  {
    id: 4,
    title: "Soft Machine",
    director: "Jude Atlas",
    rating: 5,
    image: film2,
    genre: "Sci-Fi",
    year: "2026",
    blurb: "What happens when AI learns to grieve? A quietly devastating masterpiece.",
  },
];

const FilmStripSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < Math.floor(rating) ? "fill-electric text-electric" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section id="square-eyes" className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-electric text-xs tracking-[0.3em] uppercase font-medium">
              Square Eyes
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-2">
              Film & Screen
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-electric hover:text-electric transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-electric hover:text-electric transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Film strip sprocket decoration */}
      <div className="w-full h-px bg-border mb-4" />
      <div className="flex gap-6 px-4 mb-4">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="w-3 h-3 rounded-full border border-muted-foreground/30 flex-shrink-0" />
        ))}
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4"
      >
        {films.map((film, i) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
          >
            <div className="aspect-[2/3] overflow-hidden relative">
              <img
                src={film.image}
                alt={film.title}
                loading="lazy"
                width={640}
                height={960}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 vibe-tag text-[10px]">{film.genre}</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-1 mb-2">
                {renderStars(film.rating)}
              </div>
              <h3 className="text-base font-bold tracking-tight group-hover:text-electric transition-colors">
                {film.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Dir. {film.director} · {film.year}
              </p>
              <p className="font-editorial text-sm text-muted-foreground mt-2 italic line-clamp-2">
                {film.blurb}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom sprocket */}
      <div className="flex gap-6 px-4 mt-4">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="w-3 h-3 rounded-full border border-muted-foreground/30 flex-shrink-0" />
        ))}
      </div>
      <div className="w-full h-px bg-border mt-4" />
    </section>
  );
};

export default FilmStripSection;
