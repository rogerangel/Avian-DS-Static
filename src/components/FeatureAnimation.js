"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FeatureAnimation({ className, children, delay, duration }) {
  // Animation
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration: duration ?? 0.8,
        delay: delay ?? 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FeatureAnimation;
