"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lines } from "@/lib/data";
import SectionHeading from "./section-Heading";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="
        scroll-mt-12
        relative min-h-screen flex flex-col items-center justify-center 
        text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
        overflow-hidden 
        px-4 sm:px-6 md:px-10 lg:px-20
        bg-[var(--color-PrimaryBg)] dark:bg-[var(--color-dark-PrimaryBg)]
      "
    >
      {/* Background glow */}
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_center,rgba(78,245,200,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(78,245,200,0.05),transparent_70%)] blur-3xl" />

      <SectionHeading>About Me</SectionHeading>

      <div
        className="
          flex flex-col md:flex-row items-center justify-center 
          gap-10 sm:gap-14 md:gap-16 lg:gap-20 
          w-full mt-10
          perspective-1000
        "
      >
        {/* Floating image */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="
            relative 
            w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] 
            h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] 
            rounded-2xl overflow-hidden 
            shadow-[0_0_40px_rgba(78,245,200,0.4)] dark:shadow-[0_0_40px_rgba(78,245,200,0.2)]
            flex-shrink-0
          "
        >
          <Image
            src='/images/profile.jpg'
            alt='Profile'
            width={600}
            height={700}
            className='w-full h-full object-cover'
            priority
          />
        </motion.div>

        {/* Floating code window */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateY: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="
            relative w-full 
            max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
            bg-gradient-to-br from-[var(--color-CardBg)] to-[var(--color-SectionBg)] 
            dark:from-[var(--color-dark-CardBg)] dark:to-[var(--color-dark-SectionBg)]
            border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)]
            rounded-xl 
            shadow-[0_0_40px_rgba(78,245,200,0.15)] dark:shadow-[0_0_40px_rgba(78,245,200,0.1)] 
            overflow-hidden
          "
        >
          {/* Window header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-Border)] dark:border-[var(--color-dark-Border)] bg-[#151A1F] dark:bg-[#0E1318]">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-xs text-[var(--color-SecondaryText)] dark:text-[var(--color-dark-SecondaryText)] ml-3">
              aboutMe.js
            </span>
          </div>

          {/* Code content */}
          <div
            className="
              p-4 sm:p-5 md:p-6 
              font-mono 
              text-[var(--color-SecondaryText)] dark:text-[var(--color-dark-SecondaryText)] 
              text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] 
              space-y-1 overflow-x-auto
            "
          >
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${line.color} whitespace-pre-wrap`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
