'use client'

import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'
import { cn } from '@/lib/utils'

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  particleColor?: string
  particleDensity?: number
  minSize?: number
  maxSize?: number
}

export const SparklesCore = ({
  id = 'tsparticles',
  className,
  background = 'transparent',
  particleColor = '#ffffff',
  particleDensity = 100,
  minSize = 0.5,
  maxSize = 1.5,
}: SparklesProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const options = {
    background: {
      color: {
        value: background,
      },
    },
    particles: {
      number: {
        value: particleDensity,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: particleColor,
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: minSize,
        random: {
          enable: true,
          minimumValue: minSize,
          maximumValue: maxSize,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    detectRetina: true,
    fullScreen: false,
  }

  return (
    <div
      className={cn('absolute inset-0 z-0', className)}
      style={{ background }}
    >
      <Particles id={id} init={particlesInit} options={options} />
    </div>
  )
}
