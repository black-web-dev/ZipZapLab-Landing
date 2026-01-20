import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient - Black */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated Gradient Orbs with Spectrum */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
          background: [
            'radial-gradient(circle, hsla(220, 80%, 60%, 0.15) 0%, hsla(240, 90%, 70%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(260, 85%, 65%, 0.15) 0%, hsla(220, 80%, 60%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(200, 90%, 65%, 0.15) 0%, hsla(260, 85%, 65%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(220, 80%, 60%, 0.15) 0%, hsla(240, 90%, 70%, 0.1) 50%, transparent 100%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -80, 0],
          y: [0, 100, 0],
          background: [
            'radial-gradient(circle, hsla(260, 85%, 65%, 0.15) 0%, hsla(220, 80%, 60%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(200, 90%, 65%, 0.15) 0%, hsla(260, 85%, 65%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(220, 80%, 60%, 0.15) 0%, hsla(240, 90%, 70%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(260, 85%, 65%, 0.15) 0%, hsla(220, 80%, 60%, 0.1) 50%, transparent 100%)',
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 w-[900px] h-[900px] rounded-full blur-[130px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 50, 0],
          y: [0, -80, 0],
          background: [
            'radial-gradient(circle, hsla(240, 90%, 70%, 0.15) 0%, hsla(220, 80%, 60%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(220, 80%, 60%, 0.15) 0%, hsla(260, 85%, 65%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(200, 90%, 65%, 0.15) 0%, hsla(240, 90%, 70%, 0.1) 50%, transparent 100%)',
            'radial-gradient(circle, hsla(240, 90%, 70%, 0.15) 0%, hsla(220, 80%, 60%, 0.1) 50%, transparent 100%)',
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full blur-[110px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-2/3 right-1/3 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, hsla(260, 85%, 65%, 0.12), hsla(220, 80%, 60%, 0.06), transparent)' }}
      />
      
      {/* Animated SVG Shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#94a3b8', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#cbd5e1', stopOpacity: 0.05 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#64748b', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#94a3b8', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* Floating Circles */}
        <motion.circle
          cx="10%"
          cy="20%"
          r="100"
          fill="url(#grad1)"
          animate={{
            cx: ['10%', '15%', '10%'],
            cy: ['20%', '25%', '20%'],
            r: [100, 120, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="85%"
          cy="40%"
          r="80"
          fill="url(#grad2)"
          animate={{
            cx: ['85%', '80%', '85%'],
            cy: ['40%', '45%', '40%'],
            r: [80, 100, 80],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.circle
          cx="50%"
          cy="70%"
          r="60"
          fill="url(#grad1)"
          animate={{
            cx: ['50%', '55%', '50%'],
            cy: ['70%', '65%', '70%'],
            r: [60, 80, 60],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating Lines */}
        <motion.path
          d="M 0 100 Q 400 150 800 100"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 0 100 Q 400 150 800 100",
              "M 0 120 Q 400 80 800 120",
              "M 0 100 Q 400 150 800 100"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M 200 600 Q 600 550 1000 600"
          stroke="url(#grad2)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 200 600 Q 600 550 1000 600",
              "M 200 580 Q 600 630 1000 580",
              "M 200 600 Q 600 550 1000 600"
            ]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
    </div>
  );
}