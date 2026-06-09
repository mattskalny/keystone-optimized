'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { NAV_ITEMS, CTA } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onBookingClick: () => void
}

export function MobileMenu({ isOpen, onClose, onBookingClick }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleBooking = () => {
    onClose()
    onBookingClick()
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-slate-900 p-6 shadow-2xl">
        <div className="mb-8 flex justify-end">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-slate-50"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-lg px-4 py-3 text-left text-lg font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-slate-50"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8">
          <button
            onClick={handleBooking}
            className="w-full rounded-lg bg-emerald-500 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-[0.98]"
          >
            {CTA.label}
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">{CTA.micro}</p>
        </div>
      </div>
    </div>
  )
}
