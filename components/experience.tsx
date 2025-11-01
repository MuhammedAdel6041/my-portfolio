 




"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {   CardContent } from "@/components/ui/card";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-Heading";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="py-32   ">
      <div className="container mx-auto px-4">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-Accent shadow-[0_0_20px_#4EF5C8,0_0_40px_#4EF5C8] opacity-80" />

          <div className="flex flex-col gap-16">
            {experiencesData.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "brightness(0.3) blur(6px)", scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    filter: "brightness(1) blur(0px)",
                    scale: 1,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative flex w-full items-start ${isLeft ? "justify-start" : "justify-end"
                    }`}
                >
                  <div
                    className={`w-full sm:w-1/2 mx-auto sm:mx-0 ${isLeft
                        ? "pr-4 sm:pr-12 text-left"
                        : "pl-4 sm:pl-12 text-left"
                      }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="
                            relative overflow-hidden rounded-xl
                            bg-CardBg/70 backdrop-blur-lg shadow-md
                            border border-[var(--color-Accent)]/30
                            hover:border-[var(--color-Accent)]/70
                            transition-all duration-500
                          "
                        >


                          <CardContent className="p-4 sm:p-6 flex flex-col gap-3 relative z-10">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-4">
                                <div className="text-Accent text-2xl sm:text-3xl">
                                  {entry.icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-PrimaryText">
                                  {entry.title}
                                </h4>
                              </div>
                              <span className="text-xs sm:text-sm text-SecondaryText whitespace-nowrap">
                                {entry.date}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-SecondaryText font-medium">
                              {entry.location}
                            </p>
                            <div className="my-2 h-px w-full bg-AccentMuted opacity-40"></div>
                            <p className="text-PrimaryText leading-relaxed text-justify text-sm sm:text-base">
                              {entry.description}
                            </p>
                          </CardContent>

                          {/* ✨ تأثير الهوفر المتحرك القديم */}
                          <span
                            className="
                              absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-Accent)] to-transparent
                              opacity-0 group-hover:opacity-10 group-hover:translate-x-full 
                              transition-all duration-700 ease-out
                            "
                          />
                        </motion.div>
                  
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 top-8 flex -translate-x-1/2 transform items-center justify-center">
                    <motion.div
                      className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-Accent shadow-lg"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
