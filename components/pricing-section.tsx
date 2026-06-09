'use client'

import { Check } from 'lucide-react'
import { PRICING_TIERS, CTA } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

interface PricingSectionProps {
  onBookingClick: () => void
}

export function PricingSection({ onBookingClick }: PricingSectionProps) {
  return (
    <SectionReveal>
      <section id="pricing" className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Pricing
            </p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">Flat-Rate Pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Know your cost upfront. No hourly billing. No penalty for asking questions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-white/5 p-8 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 ${
                  tier.popular ? 'border-emerald-500/50' : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {tier.audience}
                </span>
                <h3 className="text-xl font-bold text-slate-50">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{tier.description}</p>

                <div className="my-6">
                  <span className="text-4xl font-bold text-slate-50">{tier.price}</span>
                  <span className="text-slate-400">/return</span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onBookingClick}
                  className={`w-full rounded-lg px-6 py-3 font-semibold transition-all active:scale-[0.98] ${
                    tier.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg'
                      : 'border border-white/20 text-slate-50 hover:border-emerald-500/50 hover:bg-white/5'
                  }`}
                >
                  {CTA.shortLabel}
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">{CTA.micro}</p>
        </div>
      </section>
    </SectionReveal>
  )
}
