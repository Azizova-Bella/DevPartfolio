'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)

  // Check for saved theme in localStorage and apply it on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      // Default to dark theme if no saved preference
      setIsDark(true)
    }
  }, [])

  // Apply theme when it changes
  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      className="ml-4 p-2 rounded bg-zinc-700 text-white hover:bg-zinc-600"
      onClick={() => setIsDark(prev => !prev)}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
