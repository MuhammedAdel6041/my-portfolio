'use client';
import clsx from "clsx";
import { socialLinks } from '@/lib/data';
import { useSectionInView } from "@/hooks/hooks";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiDownload } from 'react-icons/hi';
 


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { activeSection } = useActiveSectionContext();
   
   
  return (
    <section
      ref={ref}
      className="
    scroll-mt-[100rem]
    relative w-full h-screen flex items-center justify-center flex-col overflow-hidden px-4
    text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
    bg-[url('/images/background-light.svg')] dark:bg-[url('/images/background-dark.svg')]
    bg-cover bg-center bg-no-repeat
    bg-[var(--color-PrimaryBg)] dark:bg-[var(--color-dark-PrimaryBg)]
    transition-all duration-75 ease-in-out
  "
    >

      {/* Avatar + Status */}
      <div className="flex items-center justify-center flex-col text-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="/images/avataaars.png"
              alt="Profile photo of Muhammed Adel"
              width={200}
              height={200}
              priority
              sizes="(max-width: 768px) 96px, 200px"
              className="
                w-24 h-24 rounded-full object-cover border-4 
                border-[var(--color-CardBg)] dark:border-[var(--color-dark-CardBg)]
                shadow-md
              "
            />
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-1 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          >
            👋
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="animate-pulse"
        >
          <span
            className="
              inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
              bg-[var(--color-AccentMuted)] dark:bg-[var(--color-dark-AccentMuted)]
              text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]
              shadow-sm
            "
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-Accent)] dark:bg-[var(--color-dark-Accent)]" />
            Available for opportunities
          </span>
        </motion.div>
      </div>

      {/* Text */}
      <motion.h1
        className="
          mt-3 text-center text-2xl font-medium leading-relaxed max-w-2xl
          text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
        "
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Muhammed Adel.</span> I'm a{' '}
        <span className="font-bold">Front-End Developer</span> specializing in building
        modern, responsive, and user-focused web interfaces using{' '}
        <span className="underline text-[var(--color-Accent)] dark:text-[var(--color-dark-Accent)]">
          React & Next.js
        </span>.
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg font-medium"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              group relative inline-flex h-12 items-center justify-center rounded-full
              bg-white/5 dark:bg-[var(--color-dark-CardBg)] backdrop-blur-md
              border border-white/10 dark:border-[var(--color-dark-Border)]
              text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
              px-8 font-medium overflow-hidden
              transition-all duration-300 ease-out
              hover:border-[var(--color-Accent)] dark:hover:border-[var(--color-dark-Accent)]
              hover:text-[var(--color-Accent)] dark:hover:text-[var(--color-dark-Accent)]
              cursor-pointer
            "
          >
            <span
              className="
                absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-500 ease-out
              "
            />
            <span className="relative z-10 flex items-center gap-2">
              Let’s Talk
              <BsArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </span>
          </motion.button>
        </Link>

        <a
          href="/CV.pdf"
          download
          className="
            group relative overflow-hidden 
            bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)]
            text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
            border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)]
            px-7 py-3 rounded-full flex items-center gap-2
            transition-all duration-500 ease-out
            hover:text-[var(--color-Accent)] dark:hover:text-[var(--color-dark-Accent)]
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            Download CV
            <motion.span
              className="opacity-80 text-xl"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiDownload />
            </motion.span>
          </span>
          <span
            className="
              absolute inset-0 bg-linear-to-r from-transparent via-[var(--color-Accent)] dark:via-[var(--color-dark-Accent)] to-transparent
              opacity-0 group-hover:opacity-10 group-hover:translate-x-full 
              transition-all duration-700 ease-out
            "
          />
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: activeSection === "Contact" ? 0 : 1,
          y: activeSection === "Contact" ? 30 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="
          hidden sm:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2
          transition-opacity duration-700 z-60
        "
      >
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.25,
              rotate: 5,
              backgroundColor: "var(--color-Accent)",
              color: "var(--color-PrimaryBg)",
              boxShadow: "0 0 20px rgba(78, 245, 200, 0.6)",
              borderColor: "var(--color-AccentHover)",
            }}
            whileTap={{ scale: 0.95, rotate: -3 }}
            className="
              flex items-center justify-center text-[1.5rem]
              bg-[var(--color-CardBg)] dark:bg-[var(--color-dark-CardBg)]
              text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
              border border-[var(--color-Border)] dark:border-[var(--color-dark-Border)]
              p-3 rounded-full
              transition-all duration-300 ease-out
              hover:border-[var(--color-Accent)] dark:hover:border-[var(--color-dark-Accent)]
              hover:shadow-[0_0_10px_rgba(78,245,200,0.4)]
              cursor-pointer
            "
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              {item.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
