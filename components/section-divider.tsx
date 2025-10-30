"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.6 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        hidden sm:block relative w-1 h-24 my-20 rounded-full
        bg-gradient-to-t from-black via-[var(--color-AccentHover)] to-[var(--color-Accent)]
        shadow-[0_0_20px_rgba(78,245,200,0.4)]
        dark:shadow-[0_0_25px_rgba(78,245,200,0.25)]
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t
        before:from-transparent before:via-[var(--color-Accent)] before:to-transparent
        before:animate-pulse before:opacity-60
        transition-all duration-500 ease-out
      "
    />
  );
}
