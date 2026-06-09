'use client'

import { Shield } from 'lucide-react'
import { CLIENT_PROOF, CTA, URGENCY } from '@/lib/constants'
import { CredentialsStrip } from './credentials-strip'
import { TaxCalculator } from './tax-calculator'

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12)_0%,_transparent_50%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-12 pt-20 lg:flex-row lg:items-start lg:gap-8 lg:px-8 lg:py-20">
        {/* Primary focus: headline + CTA */}
        <div className="w-full min-w-0 flex-1 text-center lg:text-left">
          <div className="mb-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              <Shield className="h-4 w-4" />
              <span>IRS Enrolled Agent · Grand Rapids, MI</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-gradient-to-br from-slate-700 to-slate-800 text-sm font-bold text-emerald-400"
                role="img"
                aria-label="Marcus Vance, Enrolled Agent — photo placeholder"
              >
                MV
              </div>
              <p className="text-left text-xs font-medium text-slate-400">
                Marcus Vance, EA
              </p>
            </div>
          </div>

          <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Stop Overpaying the IRS —{' '}
            <span className="text-emerald-400">Before an Audit or Notice Forces Your Hand</span>
          </h1>

          <p className="mb-6 w-full text-pretty text-base leading-relaxed text-slate-300 lg:text-lg">
            Every week you wait costs deductions, increases audit risk, and shrinks your refund
            window. Grand Rapids families, freelancers, and small businesses get a flat-rate plan in
            one free 15-minute call.
          </p>

          <p className="mb-5 text-sm text-amber-400/90">{URGENCY.deadline}</p>

          <button
            onClick={onBookingClick}
            className="w-full rounded-lg bg-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] sm:w-auto"
          >
            {CTA.label}
          </button>

          <p className="mt-4 hidden text-sm text-slate-500 sm:block">
            {CLIENT_PROOF}{' '}
            <a href="#testimonials" className="text-emerald-400 underline-offset-2 hover:underline">
              Read reviews →
            </a>
          </p>

          <div className="mt-6 lg:hidden">
            <CredentialsStrip compact showEaExplanation />
          </div>
        </div>

        {/* Secondary: compact calculator */}
        <div className="mt-8 w-full shrink-0 lg:mt-2 lg:w-80">
          <TaxCalculator onBookingClick={onBookingClick} compact />
        </div>
      </div>

      <div className="relative hidden lg:block">
        <CredentialsStrip showEaExplanation />
      </div>
    </section>
  )
}
