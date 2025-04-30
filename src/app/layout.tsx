import { Pointer } from '@/components/magicui/pointer'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground dark:bg-background dark:text-foreground`}>
        <Pointer />
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}