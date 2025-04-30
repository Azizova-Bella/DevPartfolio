'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { name: 'About', href: '/', exact: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-lg shadow-md border-b border-zinc-800 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:text-primary transition-colors"
        >
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ name, href, exact }) => {
            const active = isActive(href, exact)
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  active
                    ? 'text-white bg-primary/10'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                )}
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navLinks.map(({ name, href, exact }) => {
                const active = isActive(href, exact)
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      'w-full block px-4 py-2 rounded-md transition-all duration-200 text-base',
                      active
                        ? 'text-white bg-primary/10'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                    )}
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
