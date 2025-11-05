'use client'

import React from 'react'
import { motion } from 'framer-motion';

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
        text-3xl sm:text-4xl md:text-5xl font-semibold 
        text-center 
        text-[var(--color-PrimaryText)] dark:text-[var(--color-dark-PrimaryText)]
        tracking-wide
        mb-8 md:mb-12
      "
        >
            {children}
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '150px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="
          block mx-auto mt-3 h-[3px] 
          bg-gradient-to-r 
          from-[var(--color-Accent)] 
          to-transparent 
          dark:from-[var(--color-dark-Accent)] 
          rounded-full
        "
            />
        </motion.h2>
    )
}
