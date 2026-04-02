import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const events = [
  {
    id: 1,
    name: "VOID: System Override",
    venue: "Printworks, London",
    date: "12 APR 2026",
    genre: "Techno / Industrial",
    flyer: event1,
  },
  {
    id: 2,
    name: "SOFT FOCUS",
    venue: "Corsica Studios, London",
    date: "19 APR 2026",
    genre: "Ambient / Experimental",
    flyer: event2,
  },
  {
    id: 3,
    name: "BASSWEIGHT",
    venue: "Motion, Bristol",
    date: "26 APR 2026",
    genre: "Drum & Bass / Jungle",
    flyer: event1,
  },
  {
    id: 4,
    name: "AFTER HOURS",
    venue: "The White Hotel, Manchester",
    date: "03 MAY 2026",
    genre: "House / Garage",
    flyer: event2,
  },
];

const EventRadar = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="events" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-electric text-xs tracking-[0.3em] uppercase font-medium">
            Event Radar
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-2">
            On the Radar
          </h2>
        </motion.div>

        <div className="relative">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredId(event.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group border-t border-border py-5 md:py-6 cursor-pointer hover:bg-surface transition-colors duration-300 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight group-hover:text-electric transition-colors duration-300 truncate">
                    {event.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={11} /> {event.venue}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={11} /> {event.date}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="vibe-tag text-[10px]">{event.genre}</span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
                />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />

          {/* Hover flyer preview */}
          <AnimatePresence>
            {hoveredId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute right-0 top-0 w-64 pointer-events-none z-10"
                style={{ transform: "translateX(110%)" }}
              >
                <img
                  src={events.find((e) => e.id === hoveredId)?.flyer}
                  alt=""
                  className="w-full shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EventRadar;
