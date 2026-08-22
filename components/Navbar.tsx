'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="hover:text-blue-400 px-3 py-2 transition">Home</a>
              <a href="#about" className="hover:text-blue-400 px-3 py-2 transition">About</a>
              <a href="#skills" className="hover:text-blue-400 px-3 py-2 transition">Skills</a>
              <a href="#projects" className="hover:text-blue-400 px-3 py-2 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-400 px-3 py-2 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
