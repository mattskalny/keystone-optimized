'use client'

import { TaxCalculator } from './tax-calculator'
import { SectionReveal } from './section-reveal'

interface SavingsCalculatorSectionProps {
  onBookingClick: () => void
}

export function SavingsCalculatorSection({ onBookingClick }: SavingsCalculatorSectionProps) {
  return (
    <SectionReveal>
      <section className="border-t border-white/10 bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Free Estimate
              </p>
              <h2 className="text-2xl font-bold text-slate-50 lg:text-3xl">
                How Much Could You Get Back?
              </h2>
              <p className="mt-3 text-slate-400">
                Enter your income below for a quick estimate — no email required.
              </p>
            </div>

            <TaxCalculator onBookingClick={onBookingClick} />
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
