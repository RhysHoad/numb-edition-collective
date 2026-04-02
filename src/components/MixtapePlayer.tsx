import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, Volume2 } from "lucide-react";

const MixtapePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glassmorphism border-t border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[68px] gap-4">
          {/* Track info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Visualizer bars */}
            <div className="flex items-end gap-[2px] h-8 flex-shrink-0">
              {[0.6, 1, 0.4, 0.8, 0.5, 0.9, 0.3].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] bg-electric rounded-full"
                  animate={
                    isPlaying
                      ? {
                          height: [`${h * 32}px`, `${h * 12}px`, `${h * 28}px`],
                        }
                      : { height: "4px" }
                  }
                  transition={
                    isPlaying
                      ? {
                          duration: 0.5 + Math.random() * 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }
                      : { duration: 0.3 }
                  }
                />
              ))}
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-medium truncate">
                NUMB.MIX — Vol. 07
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground truncate">
                Curated by DJ Null
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-full bg-electric flex items-center justify-center text-electric-foreground hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Volume (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Volume2 size={14} className="text-muted-foreground" />
            <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-electric rounded-full" />
            </div>
          </div>

          {/* Progress bar */}
          <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[200px]">
            <span className="text-[10px] text-muted-foreground tabular-nums">12:34</span>
            <div className="flex-1 h-0.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-electric rounded-full"
                animate={isPlaying ? { width: "100%" } : {}}
                transition={isPlaying ? { duration: 180, ease: "linear" } : {}}
                style={{ width: "35%" }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground tabular-nums">58:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixtapePlayer;
