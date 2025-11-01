"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "./section-Heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-28   text-center px-4 max-w-[53rem]   mt-16 text-[var(--color-PrimaryText)]"
    >
      <SectionHeading>My Skills</SectionHeading>

      <motion.ul
         className="
    flex flex-wrap justify-center gap-3 mt-12
    text-base sm:text-lg md:text-xl
    max-w-full sm:max-w-[45rem] md:max-w-[53rem]
  "
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            className="
  relative group 
  px-5 py-3 rounded-xl 
  backdrop-blur-lg 
  border border-[var(--color-Border)] 
  bg-[var(--color-CardBg)] 
  shadow-md 
  hover:shadow-[0_0_15px_var(--color-AccentHover)] 
  hover:scale-105 
  active:scale-95 
  transition-all duration-300 ease-out 
  cursor-pointer 
  overflow-hidden
"
          >
             

             <span
              className="
                relative z-10 
                font-medium 
                text-[var(--color-PrimaryText)] 
                group-hover:text-[var(--color-Accent)] 
                transition-colors duration-300
              "
            >
              {skill}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}



