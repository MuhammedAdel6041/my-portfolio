'use client';

import { socialLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs'; // Added BsArrowDown import

import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center flex-col overflow-hidden px-4 text-[var(--color-PrimaryText)]
  bg-[url('/images/hero.svg')] bg-cover bg-center bg-no-repeat"
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
              src="/images/profile.jpg"
              alt="Profile photo of Muhammed Adel"
              width={200}
              height={200}
              priority
              sizes="(max-width: 768px) 96px, 200px"
              className="w-24 h-24 rounded-full object-cover border-[4px] border-[var(--color-CardBg)] shadow-md"
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
          className="mt-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[var(--color-AccentMuted)] text-[var(--color-Accent)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-Accent)] animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>
      </div>

      {/* Text */}
      <motion.h1
        className="mt-6 text-center text-2xl font-medium leading-relaxed max-w-2xl text-[var(--color-PrimaryText)]"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Muhammed Adel.</span> I'm a{' '}
        <span className="font-bold">Front-End Developer</span> specializing in building
        modern, responsive, and user-focused web interfaces using{' '}
        <span className="underline text-[var(--color-Accent)]">React & Next.js</span>.
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex h-12 items-center justify-center rounded-full 
        bg-[var(--color-Accent)] px-8 font-medium text-[var(--color-BtnText)] 
        transition-all duration-300 hover:shadow-[0_0_20px_var(--color-Accent)] cursor-pointer"
          >
            <span>Let's Talk</span>

            {/* Animated Arrow */}
            <span
              className="ml-2 flex items-center transform -rotate-45 transition-all duration-300 ease-out 
          group-hover:rotate-0 group-hover:translate-x-1"
            >
              <BsArrowRight className="text-[1.2rem]" />
            </span>
          </motion.button>
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-[var(--color-CardBg)] text-[var(--color-PrimaryText)] border border-[var(--color-Border)] 
      px-7 py-3 rounded-full flex items-center gap-2 
      transition-all duration-300
      hover:bg-[var(--color-Accent)] hover:text-white hover:border-[var(--color-Accent)]
      hover:scale-[1.06] active:scale-[0.98]
      hover:shadow-[0_0_20px_var(--color-Accent)]"
        >
          Download CV
          <motion.span
            className="opacity-80 text-xl"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HiDownload />
          </motion.span>
        </a>
      </motion.div>
      {/* Scroll Down Indicator */}
      <Link href="#about" scroll={true}>
        <motion.div
          initial={{ y: 100, x: "-50%", scale: 0.8, opacity: 0 }}
          animate={{ y: 0, x: "-50%", scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 cursor-pointer"
        >
          <div className="w-10 h-20 border-2 border-[var(--color-Accent)] rounded-3xl flex items-start justify-center shadow-[0_0_15px_var(--color-Accent)] overflow-hidden">
            <motion.div
              className="w-4 h-4 bg-[var(--color-Accent)] rounded-full mt-1"
              animate={{
                y: [0, 60],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </Link>
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hidden sm:flex flex-col gap-6 absolute left-6 top-1/2 -translate-y-1/2"
      >
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-[1.6rem] text-[var(--color-PrimaryText)] 
      bg-[var(--color-CardBg)] border border-[var(--color-Border)] 
      p-3 rounded-full transition-all duration-500
      hover:text-[var(--color-Accent)] hover:shadow-[0_0_20px_var(--color-Accent)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0, 4, 0],
              x: [0, 2, 0, -2, 0],
              rotate: [0, 1, -1, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { duration: 0.8, delay: i * 0.2 },
              y: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.3,
              },
              x: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.2,
              },
              rotate: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.4,
              },
              scale: {
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.5,
              },
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--color-Accent)] opacity-0 blur-md"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
            />
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
}
