import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Drops", "Square Eyes", "Events", "Mixtapes", "About"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <a href="/" className="flex items-center gap-1.5">
          <span className="text-lg md:text-xl font-black tracking-tighter text-foreground">
            NUMB
          </span>
          <span className="text-electric text-lg md:text-xl font-black">.</span>
          <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            EDITION
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-electric transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-1"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glassmorphism border-t border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-electric transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
