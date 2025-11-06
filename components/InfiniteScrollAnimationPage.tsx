"use client";

import { motion } from "framer-motion";
import { Scroll } from "@/lib/data";

export default function InfiniteScrollAnimationPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30, skewY: "0deg" }}
      whileInView={{ opacity: 1, y: 0, skewY: "2deg" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        w-full overflow-hidden shadow-lg z-50
        bg-gradient-to-r from-[var(--color-PrimaryBg)] to-[var(--color-AccentMuted)]
        dark:from-[var(--color-dark-PrimaryBg)] dark:to-[var(--color-dark-AccentMuted)]
        py-3 sm:py-4 md:py-6
      "
    >
      <motion.ul
        className="
          flex gap-6 sm:gap-8 md:gap-10 items-center 
          text-[var(--color-PrimaryText)] 
          dark:text-[var(--color-dark-PrimaryText)] 
          min-w-max
        "
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {[...Scroll, ...Scroll, ...Scroll, ...Scroll].map((message, index) => (
          <li
            key={`${message.text}-${index}`}
            className="
              flex items-center gap-2 sm:gap-3 whitespace-nowrap 
              transition-colors duration-300 
              hover:text-[var(--color-Accent)] 
              dark:hover:text-[var(--color-dark-Accent)]
            "
          >
            <span
              className="
                text-[var(--color-Accent)] 
                dark:text-[var(--color-dark-Accent)] 
                font-bold text-sm sm:text-base md:text-lg 
                drop-shadow-[0_0_6px_var(--color-AccentMuted)] 
                dark:drop-shadow-[0_0_6px_var(--color-dark-AccentMuted)]
              "
            >
              {message.icon}
            </span>
            <p
              className="
                font-medium text-sm sm:text-base md:text-lg 
                text-[var(--color-PrimaryText)] 
                dark:text-[var(--color-dark-PrimaryText)] 
                drop-shadow-[0_0_4px_var(--color-Border)] 
                dark:drop-shadow-[0_0_4px_var(--color-dark-Border)]
              "
            >
              {message.text}
            </p>
          </li>
        ))}
        
      </motion.ul>

      
    </motion.section>
  );
}
