'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ProjectsShowcase } from '../components/MagicCard'
import { Boxes } from '../components/Boxes'
import { SparklesCore } from '../components/sparkles'
import { WavyBackground } from '../components/wavy-background'

export default function ProjectsPage() {
  return (
    <div className="relative">
      {/* Animated background layers */}
      <div className="fixed inset-0 -z-20">
  <WavyBackground 
    backgroundFill="black"
    colors={["#18181b", "#3f3f46", "#71717a"]}
    waveOpacity={0.3}
    blur={10}
  />
</div>

      {/* Sparkles effect */}
      <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden">
  <SparklesCore
    id="tsparticlesfullpage"
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={50}
    className="w-full h-full"
    particleColor="#FFFFFF"
  />
</div>

      {/* Boxes grid */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <Boxes />
      </div>

      {/* Main content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "min-h-screen w-full text-white",
          "relative overflow-hidden",
          "px-6 py-24 md:py-32"
        )}
      >
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Animated title */}
            <motion.h2 
              className={cn(
                "text-4xl md:text-6xl font-bold mb-12 text-center",
                "bg-clip-text text-transparent",
                "bg-gradient-to-r from-white via-gray-300 to-gray-500",
                "drop-shadow-lg"
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              My <span className="text-purple-400">Projects</span>
            </motion.h2>

            {/* Projects showcase with floating animation */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse" />
              <ProjectsShowcase />
            </motion.div>

            {/* Animated call-to-action */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
                View All Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}