


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { socialLinks } from "@/lib/data";




// export default function FooterSection() {
//   return (
//     <section className="bg-[var(--color-PrimaryBg)] text-[var(--color-PrimaryText)] py-20 flex flex-col items-center text-center font-mono">
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-xl md:text-2xl font-semibold text-[var(--color-Accent)] tracking-wider mb-6"
//       >
//         SEE IT LIVE
//       </motion.h2>

//       {/* Credits */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.1 }}
//         className="text-sm md:text-base mb-4 text-[var(--color-SecondaryText)]"
//       >
//         <span className="font-semibold text-[var(--color-PrimaryText)]">Development by</span>{" "}
//         <a
//           href="#"
//           className="text-[var(--color-Accent)] hover:text-[var(--color-AccentHover)] transition-all duration-200 hover:underline"
//         >
//           Muhammed Adel
//         </a>
//       </motion.p>

//       {/* Quote */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="italic text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed text-[var(--color-SectionText)]"
//       >
//         I bring value to web development projects by merging technical expertise
//         with creativity and aesthetics.
//       </motion.p>

//       {/* Social Links */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="flex gap-6 mt-6"
//       >
//         {socialLinks.map((link, i) => (
//           <motion.a
//             key={i}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative text-[var(--color-Accent)] hover:text-[var(--color-AccentHover)] text-2xl transition-all duration-300"
//           >
//             {/* Icon */}
//             <motion.span
//               initial={{ y: 0 }}
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//               className="inline-block"
//             >
//               {link.icon}
//             </motion.span>

//             {/* Animated Arrow (appears on hover) */}
//             <motion.span
//               initial={{ opacity: 0, x: -5, y: 5 }}
//               whileHover={{ opacity: 1, x: 0, y: -5 }}
//               transition={{ duration: 0.25 }}
//               className="absolute -right-4 -top-1 opacity-0 group-hover:opacity-100 text-[var(--color-AccentHover)]"
//             >
//               <ArrowUpRight size={14} />
//             </motion.span>
//           </motion.a>
//         ))}
//       </motion.div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function FooterSection() {
  return (
    <section className="bg-[var(--color-PrimaryBg)] dark:bg-[var(--color-PrimaryBg)] text-[var(--color-PrimaryText)] dark:text-[var(--color-PrimaryText)] py-20 flex flex-col items-center text-center font-mono">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-semibold text-[var(--color-Accent)] dark:text-[var(--color-Accent)] tracking-wider mb-6"
      >
        SEE IT LIVE
      </motion.h2>

      {/* Credits */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-sm md:text-base mb-4 text-[var(--color-SecondaryText)] dark:text-[var(--color-SecondaryText)]"
      >
        <span className="font-semibold text-[var(--color-PrimaryText)] dark:text-[var(--color-PrimaryText)]">Development by</span>{" "}
        <a
          href="#"
          className="text-[var(--color-Accent)] dark:text-[var(--color-Accent)] hover:text-[var(--color-AccentHover)] dark:hover:text-[var(--color-AccentHover)] transition-all duration-200 hover:underline"
        >
          Muhammed Adel
        </a>
      </motion.p>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="italic text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed text-[var(--color-SectionText)] dark:text-[var(--color-SectionText)]"
      >
        I bring value to web development projects by merging technical expertise
        with creativity and aesthetics.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex gap-6 mt-6"
      >
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-[var(--color-Accent)] dark:text-[var(--color-Accent)] hover:text-[var(--color-AccentHover)] dark:hover:text-[var(--color-AccentHover)] text-2xl transition-all duration-300"
          >
            {/* Icon */}
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="inline-block"
            >
              {link.icon}
            </motion.span>

            {/* Animated Arrow (appears on hover) */}
            <motion.span
              initial={{ opacity: 0, x: -5, y: 5 }}
              whileHover={{ opacity: 1, x: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="absolute -right-4 -top-1 opacity-0 group-hover:opacity-100 text-[var(--color-AccentHover)] dark:text-[var(--color-AccentHover)]"
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
