'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function SplitText({ text, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      {...props}
      style={{ display: 'block' }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.035, delayChildren: 0.15 },
        },
      }}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : undefined }}
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
