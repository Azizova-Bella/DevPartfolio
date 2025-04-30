import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-8 py-4 text-center bg-black border-t border-zinc-700">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/Azizova-Bella" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-white hover:text-grey-900 transition" />
        </a>
        <a href="https://www.linkedin.com/in/bella-azizova-689313334/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-white hover:text-grey-900  transition" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-white hover:text-grey-900  transition" />
        </a>
      </div>
      <p className="mt-2 text-sm text-zinc-400">© 2025 Azizova Rayhona. All rights reserved.</p>
    </footer>
  )
}
