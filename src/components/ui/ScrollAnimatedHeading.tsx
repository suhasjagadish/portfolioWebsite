"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimatedHeadingProps = {
  children: React.ReactNode;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  amount?: number;
};

export default function ScrollAnimatedHeading({ children, el = 'h2', className, amount = 0.3 }: ScrollAnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const MotionEl = motion[el];

  return (
    <MotionEl
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </MotionEl>
  );
}
