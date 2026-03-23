'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  blur?: boolean;
}

export function Reveal({ children, className, delay = 0, direction = 'up', blur = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    observer.observe(el);

    const timeout = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  const hidden = { opacity: 0, filter: blur ? 'blur(10px)' : 'blur(0px)', ...directionOffset[direction] };
  const visible = { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isVisible ? visible : hidden}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
