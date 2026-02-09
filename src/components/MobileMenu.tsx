'use client'

import { useState } from 'react'

export function MobileMenu({ aboutLabel, insightsLabel, contactLabel }: { aboutLabel: string; insightsLabel: string; contactLabel: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-balestra-black absolute w-full left-0 top-full shadow-2xl">
          <div className="flex flex-col p-6 gap-4 text-center">
            <a href="/about" className="text-gray-300 hover:text-balestra-red py-2">{aboutLabel}</a>
            <a href="/blog" className="text-gray-300 hover:text-balestra-red py-2">{insightsLabel}</a>
            <a href="/contact" className="text-balestra-red font-bold py-2">{contactLabel}</a>
          </div>
        </div>
      )}
    </>
  )
}
