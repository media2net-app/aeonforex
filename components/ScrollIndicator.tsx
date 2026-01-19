'use client';

import { motion } from 'motion/react';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to video</span>
        <svg
          className="w-6 h-6 text-[#D4AF37]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
}
