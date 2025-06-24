"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.0001 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("py-16 sm:py-20 md:py-24", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
}
