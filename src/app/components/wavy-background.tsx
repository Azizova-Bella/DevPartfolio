'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WavyBackgroundProps {
  children?: React.ReactNode
  className?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'normal' | 'fast'
  waveOpacity?: number
  waveCount?: number
}

export const WavyBackground = ({
  children,
  className,
  colors = ['#7c3aed', '#9333ea', '#a855f7'], // Updated wave colors for a purple theme
  waveWidth = 100,
  backgroundFill = '#1e1b4b', // Dark purple background
  blur = 12,
  speed = 'fast',
  waveOpacity = 0.4,
  waveCount = 5,
}: WavyBackgroundProps) => {
  const [waves, setWaves] = useState<
    { id: number; y: number; delay: number }[]
  >([])

  useEffect(() => {
    const generatedWaves = Array.from({ length: waveCount }, (_, i) => ({
      id: i,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setWaves(generatedWaves)
  }, [waveCount])

  const getSpeedDuration = () =>
    speed === 'fast' ? 4 : speed === 'slow' ? 8 : 6

  return (
    <div
      className={cn(
        'absolute inset-0 w-full h-full overflow-hidden -z-10',
        className
      )}
      style={{ backgroundColor: backgroundFill }}
    >
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          initial={{ x: 0 }}
          animate={{
            x: [-waveWidth * 2, 0, -waveWidth * 2],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: getSpeedDuration(),
            ease: 'linear',
            delay: wave.delay,
          }}
          style={{
            position: 'absolute',
            top: `${wave.y}%`,
            left: 0,
            right: 0,
            height: `${waveWidth}px`,
            background: `linear-gradient(90deg, ${colors.join(', ')})`,
            opacity: waveOpacity,
            filter: `blur(${blur}px)`,
          }}
        />
      ))}
      {children}
    </div>
  )
}
