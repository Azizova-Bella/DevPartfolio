'use client';

import React from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Globe } from '@/components/magicui/globe';

const Resume = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-neutral-950">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      <div className="absolute -z-20 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-400/15 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-end">
        {/* Globe on the Left Bottom */}
       



        {/* Resume Card on the Right */}
        <CardContainer className="w-full cursor-pointer">
          <CardBody className="relative group/card bg-gradient-to-br from-black via-zinc-900 to-black border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 p-8 rounded-2xl shadow-2xl">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    opacity: [0, 0.3, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                  }}
                />
              ))}
            </div>

            {/* Title */}
            <CardItem translateZ={80} className="text-5xl p-2 md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-cyan-400">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                MY RESUME
                <Sparkles className="inline-block w-8 h-8 ml-3 text-yellow-300 animate-pulse" />
              </motion.div>
            </CardItem>

            {/* Description */}
            <CardItem translateZ={60} className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                Explore my <span className="text-accent font-semibold">frontend mastery</span> through this interactive CV. 
                Contains <span className="text-purple-300">cutting-edge projects</span>, professional journey, 
                and <span className="text-cyan-300">technical expertise</span>.
              </motion.p>
            </CardItem>

            {/* Download Button */}
            <CardItem translateZ={100} className="w-full">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                <div className="absolute inset-0 bg-accent rounded-full blur-md group-hover/card:blur-lg transition-all duration-500" />
                <a
                  href="/my cv.pdf"
                  download
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-white text-xl font-bold rounded-full hover:shadow-[0_0_30px_-5px_theme('colors.accent')] transition-all duration-300"
                >
                  <FileText className="w-6 h-6" />
                  DOWNLOAD CV
                  <span className="absolute right-6 opacity-0 group-hover/card:opacity-100 group-hover/card:right-5 transition-all duration-300">→</span>
                </a>
              </motion.div>
            </CardItem>
          </CardBody>
        </CardContainer>
         <div className="hidden md:flex items-start justify-start">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="w-[150px] max-w-md h-[150px]"
  >
    <Globe
      className="w-[400px] h-[400px] mr-40 mt-30"
      // @ts-ignore
      globeConfig={{
        pointSize: 4, // Smaller points for a better compact view
        globeColor: '#1e293b',
        showAtmosphere: true,
        atmosphereColor: '#9333ea',
        atmosphereAltitude: 0.15,
        emissive: '#9333ea',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: 'rgba(255,255,255,0.07)',
        ambientLightIntensity: 0.4,
        directionalLeftLight: { intensity: 0.5, color: '#c084fc' },
        directionalTopLight: { intensity: 0.3, color: '#38bdf8' },
        pointLight: { intensity: 0.6, color: '#22d3ee' },
        autoRotate: true,
        autoRotateSpeed: 1.2,
      }}
    />
  </motion.div>
</div>
      </div>
    </section>
  );
};

export default Resume;
