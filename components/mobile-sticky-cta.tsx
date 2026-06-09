'use client'

import { useEffect, useState } from 'react'
import { CTA } from '@/lib/constants'

interface MobileStickyCtaProps {
  onBookingClick: () => void
}

export function MobileStickyCta({ onBookingClick }: MobileStickyCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('section')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-900/95 p-3 backdrop-blur-md md:hidden">
      <button
        onClick={onBookingClick}
        className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 active:scale-[0.98]"
      >
        {CTA.shortLabel}
      </button>
    </div>
  )
}
