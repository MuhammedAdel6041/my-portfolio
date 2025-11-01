'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Header() {

   const { activeSection, setActiveSection, setTimeOfLastClick } =
      useActiveSectionContext();


   return (
      <header className="z-[999] relative">

         {/* Background Blurred Container */}
         <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full 
        rounded-none border border-[var(--color-Border)] 
        bg-[var(--color-NavBg)] 
        shadow-lg shadow-black/[0.03] 
        backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: 100, x: "-50%", scale: 0.8, opacity: 0 }}
            animate={{ y: 0, x: "-50%", scale: 1, opacity: 1 }}
            transition={{
               duration: 1.2,
               ease: [0.22, 1, 0.36, 1],
            }}
         />

         {/* Navigation */}
         <nav className="flex fixed top-[0.15rem] left-1/2 h-12 
      -translate-x-1/2 py-2 
      sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
        text-[0.9rem] font-medium 
        text-[var(--color-NavText)] 
        sm:w-[initial] sm:flex-nowrap sm:gap-5">

               {links.map((link, i) => (
                  <motion.li
                     className={"h-3/4 flex items-center justify-center relative"}
                     key={link.hash}
                     initial={{ y: -40, opacity: 0, rotateX: 30 }}
                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
                     transition={{
                        duration: 0.7,
                        delay: 0.3 + i * 0.08,
                        ease: [0.25, 0.1, 0.25, 1],
                     }}
                  >
                     <Link
                        className={clsx(`flex w-full items-center justify-center px-3 py-3      transition   
                              text-[var(--color-NavText)] 
                             hover:text-[var(--color-NavHover)]
               dark:text-[color:var(--color-NavText)]
                dark:hover:text-[var(--color-NavHover)]`, { " text-[var(--color-Accent)] dark:text-[var(--color-Accent)]": activeSection === link.name })}
                        href={link.hash}
                        onClick={() => {
                           setActiveSection(link.name);
                           setTimeOfLastClick(Date.now());
                        }}

                     >
                        {link.name}
                        {link.name === activeSection && (
                           <motion.span
                              className="absolute inset-0 -z-10 rounded-full 
             bg-[var(--color-AccentHover)]/20 
             dark:bg-[var(--color-AccentHover)]/30 
             backdrop-blur-[6px] shadow-[0_0_10px_var(--color-AccentHover)]/25"
                              layoutId="activeSection"
                              transition={{
                                 type: "spring",
                                 stiffness: 380,
                                 damping: 30,
                              }}
                           ></motion.span>
                        )}
                     </Link>
                  </motion.li>
               ))}

            </ul>
         </nav>

      </header>
   )
}
