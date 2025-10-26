"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lines } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 text-white relative"
    >
      {/* Soft Glow */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[var(--color-Accent)] opacity-[0.12] blur-[180px] left-0 top-1/2 -translate-y-1/2" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-semibold mb-10 text-center relative w-full md:absolute md:top-10 md:left-1/2 md:transform md:-translate-x-1/2"
      >
        About Me
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block mx-auto mt-2 h-[3px] bg-gradient-to-r from-[var(--color-Accent)] to-transparent rounded-full"
        />
      </motion.h2>

      {/* Image Shape */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-w-[340px] w-[360px] h-[420px] overflow-hidden bg-[#111] shadow-[0_0_30px_var(--color-Accent)] rounded-[20px]"
        style={{
          clipPath:
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={600}
          height={700}
          className="object-cover w-full h-full scale-[1.05]"
        />
      </motion.div>

      {/* Code Editor Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-gradient-to-br from-[#0E1419] to-[#121A1F] border border-[var(--color-Border)] rounded-xl shadow-[0_0_30px_rgba(78,245,200,0.1)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-Border)] bg-[rgba(20,25,30,0.9)] backdrop-blur-md">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-xs text-gray-500 ml-3">aboutMe.js</span>
        </div>

        {/* Code Content */}
        <div className="p-6 space-y-1 text-[15px] md:text-[17px] font-mono text-[var(--color-SecondaryText)]">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`whitespace-pre ${line.color}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Glow Border Accent */}
        <div className="absolute inset-0 pointer-events-none rounded-xl border border-[rgba(78,245,200,0.12)] shadow-[inset_0_0_25px_rgba(78,245,200,0.05)]" />
      </motion.div>
    </section>
  );
}
