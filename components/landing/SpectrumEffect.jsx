import React from 'react';
import { motion } from 'framer-motion';

export default function SpectrumEffect() {
  return (
    <>
      {/* Main vertical beam - bright blue/purple */}
      <motion.div
        className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[3px] h-[550px]"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500" style={{ boxShadow: '0 0 40px 8px rgba(96, 165, 250, 0.8)' }} />
      </motion.div>

      {/* Beam glow */}
      <motion.div
        className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[20px] h-[550px]"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/60 via-blue-500/50 to-purple-500/40 blur-xl" />
      </motion.div>

      {/* Impact point - bright concentrated glow */}
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8"
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-200 to-transparent blur-md" style={{ boxShadow: '0 0 60px 20px rgba(147, 197, 253, 0.6)' }} />
      </motion.div>

      {/* Radial spread from impact - curved outward */}
      <motion.div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[400px] h-40"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/40 via-blue-500/20 to-transparent blur-3xl" style={{ background: 'radial-gradient(ellipse at center top, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)' }} />
      </motion.div>

      {/* Left side cascade glow */}
      <motion.div
        className="absolute -left-6 top-0 w-32 h-64"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Right side cascade glow */}
      <motion.div
        className="absolute -right-6 top-0 w-32 h-64"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/30 via-purple-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-3xl"
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent blur-2xl rounded-3xl" />
      </motion.div>
    </>
  );
}