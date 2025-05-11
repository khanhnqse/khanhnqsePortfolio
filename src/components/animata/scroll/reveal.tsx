"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function RevealOnScroll({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration, delay, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {!isVisible && <div style={{ opacity: 0 }}>{children}</div>}
    </div>
  );
}
