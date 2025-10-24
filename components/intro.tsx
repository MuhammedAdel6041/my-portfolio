'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import { HiDownload } from 'react-icons/hi';
import { SiGmail } from 'react-icons/si';

export default function Intro() {

  return (
    //     <section className="relative w-full h-screen flex items-center justify-center flex-col overflow-hidden px-4">

    //       {/* Avatar + Status */}
    //       <div className="flex items-center justify-center flex-col text-center">
    //         <div className="relative">
    //           <motion.div
    //             initial={{ opacity: 0, scale: 0 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ type: "tween", duration: 0.2 }}
    //           >
    //             <Image
    //               src="/images/profile.jpg"
    //               alt="Profile photo"
    //               width={200}
    //               height={200}
    //               priority
    //               className="w-24 h-24 rounded-full object-cover border-[4px] border-white shadow-lg dark:border-white/20 dark:shadow-black/40"
    //             />
    //           </motion.div>

    //           <motion.span
    //             className="absolute bottom-1 right-1 text-4xl"
    //             initial={{ opacity: 0, scale: 0 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
    //           >
    //             👋
    //           </motion.span>
    //         </div>

    //         <div className="mt-3">
    //           <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[#0C1F16] text-[#6ABE5E] shadow-lg shadow-black/20 dark:bg-[#16281E]">
    //             <span className="h-2 w-2 rounded-full bg-[#6ABE5E] animate-pulse" />
    //             Available for opportunities
    //           </span>
    //         </div>
    //       </div>

    //       {/* Text Section */}
    //       <motion.h1
    //         className="mt-6 text-center text-2xl font-medium leading-relaxed max-w-2xl dark:text-white"
    //         initial={{ opacity: 0, y: 80 }}
    //         animate={{ opacity: 1, y: 0 }}
    //       >
    //         <span className="font-bold">Hi, I'm Muhammed Adel.</span> I'm a{" "}
    //         <span className="font-bold">Front-End Developer</span> specializing in building
    //         modern, responsive, and user-focused web interfaces using{" "}
    //         <span className="underline">React & Next.js</span>.
    //       </motion.h1>

    //       {/* Buttons */}
    //       <motion.div
    //         className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg font-medium"
    //         initial={{ opacity: 0, y: 80 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.1 }}
    //       >
    //         <Link
    //           href="#contact"
    //           className="group bg-[var(--color-PrimaryText)] text-white px-7 py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition"
    //         >
    //           Let&apos;s Talk
    //           <BsArrowRight className="transition group-hover:translate-x-1" />
    //         </Link>

    //         <a
    //           href="/CV.pdf"
    //           download
    //           className="group bg-white dark:bg-white/10 dark:text-white border border-[var(--color-Border)] px-7 py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition"
    //         >
    //           Download CV
    //           <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
    //         </a>


    //       </motion.div>

    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ delay: 0.4 }}
    //   className="hidden sm:flex flex-col gap-6 absolute left-6 top-1/2 -translate-y-1/2"
    // >
    //   {[
    //     {
    //       icon: <FaLinkedin />,
    //       href: "https://www.linkedin.com/in/muhammed-el-menshawy-165b2135b",
    //       label: "LinkedIn",
    //     },
    //     {
    //       icon: <FaGithub />,
    //       href: "https://github.com/MuhammedAdel6041",
    //       label: "GitHub",
    //     },
    //     {
    //       icon: <SiGmail />,
    //       href: "mailto:muhammad.a.elmenshawy@gmail.com",
    //       label: "Email",
    //     },
    //     {
    //       icon: <FaWhatsapp />,
    //       href: "https://wa.me/201122249273",
    //       label: "WhatsApp",
    //     },
    //   ].map((item, i) => (
    //     <motion.a
    //       key={item.label}
    //       href={item.href}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-[1.6rem] text-[var(--color-PrimaryText)] dark:text-[var(--color-PrimaryText)]
    //                  p-3 rounded-full bg-[var(--color-CardBg)] border border-[var(--color-Border)]
    //                  hover:text-[var(--color-Accent)] hover:shadow-[0_0_12px_var(--color-Accent)]
    //                  transition cursor-pointer flex items-center justify-center"

    //       initial={{ opacity: 0, y: 8 }}
    //       animate={{
    //         opacity: 1,
    //         y: [0, -6, 0, 6, 0], // ← فقط طلوع ونزول بسيط
    //       }}

    //       transition={{
    //         opacity: { duration: 0.6, delay: i * 0.25 }, // ← كل واحدة تظهر بعد اللي قبلها
    //         y: {
    //           duration: 3,
    //           repeat: Infinity,
    //           repeatType: "mirror",
    //           ease: "easeInOut",
    //         },
    //       }}

    //       title={item.label}
    //     >
    //       {item.icon}
    //     </motion.a>
    //   ))}
    // </motion.div>

    //     </section>
    <section className="relative w-full h-screen flex items-center justify-center flex-col overflow-hidden px-4 bg-[var(--color-PrimaryBg)] text-[var(--color-PrimaryText)]">

      {/* Avatar + Status */}
      <div className="flex items-center justify-center flex-col text-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              width={200}
              height={200}
              priority
              className="w-24 h-24 rounded-full object-cover border-[4px] border-[var(--color-CardBg)] shadow-md dark:border-[var(--color-CardBg)]"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-1 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          >
            👋
          </motion.span>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }} className="mt-3">
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
        <span className="font-bold">Hi, I'm Muhammed Adel.</span> I'm a{" "}
        <span className="font-bold">Front-End Developer</span> specializing in building
        modern, responsive, and user-focused web interfaces using{" "}
        <span className="underline text-[var(--color-Accent)]">React & Next.js</span>.
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg font-medium"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-[var(--color-Accent)] text-[var(--color-BtnText)] px-7 py-3 rounded-full flex items-center gap-2 hover:bg-[var(--color-AccentHover)] transition"
        >
          Let&apos;s Talk
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-[var(--color-CardBg)] text-[var(--color-PrimaryText)] border border-[var(--color-Border)] px-7 py-3 rounded-full flex items-center gap-2 hover:bg-[var(--color-Accent)] hover:text-white transition"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hidden sm:flex flex-col gap-6 absolute left-6 top-1/2 -translate-y-1/2"
      >
        {[
          { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muhammed-el-menshawy-165b2135b" },
          { icon: <FaGithub />, href: "https://github.com/MuhammedAdel6041" },
          { icon: <SiGmail />, href: "mailto:muhammad.a.elmenshawy@gmail.com" },
          { icon: <FaWhatsapp />, href: "https://wa.me/201122249273" },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            className="text-[1.6rem] text-[var(--color-PrimaryText)] bg-[var(--color-CardBg)] border border-[var(--color-Border)] p-3 rounded-full hover:text-[var(--color-Accent)] hover:shadow-[0_0_12px_var(--color-Accent)] transition"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [0, -6, 0, 6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: i * 0.25 },
              y: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

    </section>

  );
}
