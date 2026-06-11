'use client'

import { CTA, SITE, URGENCY } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

interface BookingSectionProps {
  onBookingClick: () => void
}

export function BookingSection({ onBookingClick }: BookingSectionProps) {
  return (
    <SectionReveal>
      <section id="booking" className="bg-slate-800 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Free Consultation
            </p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">
              The IRS Doesn&rsquo;t Wait. Neither Should You.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Grand Rapids families and businesses recover an average of $3,200 in missed
              deductions. Your free 15-minute call takes less time than your morning coffee.
            </p>

            <button
              onClick={onBookingClick}
              className="mt-8 w-full rounded-lg bg-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] sm:w-auto"
            >
              {CTA.label}
            </button>

            <p className="mt-4 text-sm text-amber-400/90">{URGENCY.audit}</p>

            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:justify-center sm:gap-6">
              <a href={SITE.phoneHref} className="hover:text-emerald-400">
                {SITE.phone}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400"
              >
                {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
