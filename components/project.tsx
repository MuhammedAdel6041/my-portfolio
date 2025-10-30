'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from "react";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    demoLink,
    gitHubRepo,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.section
            ref={ref}
            style={{
                scale: scale,
                opacity: opacity
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="
              group relative flex flex-col sm:flex-row items-center gap-8 sm:gap-16 
              even:sm:flex-row-reverse
            "
        >
            {/* 🖼 Project Image */}
            <div className="relative flex-shrink-0 w-full sm:w-[50%] flex justify-center items-center">
                <motion.div
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="
                      relative w-full h-[230px] sm:h-[300px] rounded-2xl overflow-hidden 
                      shadow-2xl transition-all duration-500
                      group-hover:scale-[1.03]
                      group-hover:shadow-[0_0_25px_var(--color-Accent)/30]
                    "
                >
                    <Image
                        src={imageUrl}
                        alt={`Screenshot of ${title}`}
                        fill
                        className="
                          object-cover transition-all duration-500
                          group-hover:-translate-x-3
                          group-hover:translate-y-3
                          group-hover:-rotate-2

                          even:group-hover:translate-x-3
                          even:group-hover:translate-y-3
                          even:group-hover:rotate-2
                        "
                    />
                </motion.div>

                {/* Soft background glow */}
                <div className="absolute inset-0 -z-10 flex justify-center items-center">
                    <div
                        className="
                          w-[70%] h-[80%] blur-[100px] rounded-full
                          bg-[var(--color-Accent)]/20
                          transition-all duration-700
                          group-hover:bg-[var(--color-Accent)]/30
                        "
                    />
                </div>
            </div>

            {/* 📄 Project Info */}
            <div className="flex flex-col w-full sm:w-[50%]">
                <motion.h3
                    whileHover={{ color: 'var(--color-Accent)' }}
                    className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--color-ProjectTitle)]"
                >
                    {title}
                </motion.h3>

                <p className="text-[var(--color-ProjectText)] leading-relaxed mb-5">
                    {description}
                </p>

                {/* 🏷 Tags */}
                <ul className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <li
                            key={index}
                            className="
                              px-3 py-1 text-[0.75rem] rounded-full uppercase tracking-wide
                              bg-[var(--color-AccentMuted)]/30
                              text-[var(--color-SecondaryText)]
                            "
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                {/* 🔗 Buttons */}
                <div className="flex gap-4">
                    {gitHubRepo && (
                        <a
                            href={gitHubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center gap-2 
                              bg-[var(--color-CardBg)] border border-[var(--color-Border)] 
                              px-4 py-2 rounded-lg text-[var(--color-PrimaryText)] 
                              transition-all duration-300 
                              hover:bg-[var(--color-AccentMuted)] hover:text-[var(--color-PrimaryText)]
                              hover:border-[var(--color-Accent)]
                              hover:shadow-[0_6px_0_0_var(--color-Accent)/35]
                              hover:-translate-y-[3px]
                            "
                        >
                            <FaGithub className="text-lg text-[var(--color-Accent)] transition-colors duration-300" />
                            GitHub
                        </a>
                    )}

                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center gap-2 bg-[var(--color-BtnBg)] text-[var(--color-BtnText)] 
                              font-semibold px-4 py-2 rounded-lg hover:bg-[var(--color-BtnHoverBg)] 
                              transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_var(--color-Accent)/25]
                            "
                        >
                            <FaExternalLinkAlt className="text-lg" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
