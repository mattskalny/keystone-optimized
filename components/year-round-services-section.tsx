'use client'

import { CalendarClock, BookOpen, Briefcase, Users } from 'lucide-react'
import { SectionReveal } from './section-reveal'

interface YearRoundServicesSectionProps {
  onBookingClick: () => void
}

const YEAR_ROUND_SERVICES = [
  {
    icon: CalendarClock,
    title: 'Quarterly Tax Estimates',
    description:
      'Miss a quarterly payment and the IRS charges penalties automatically. We keep you ahead of it.',
  },
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping',
    description:
      'Disorganized books cost the average small business $3,200 in missed deductions. We fix that every month.',
  },
  {
    icon: Briefcase,
    title: 'Business Accounting',
    description:
      "LLCs and S-Corps have tax advantages most owners never claim. We make sure you're not leaving money behind.",
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Payroll mistakes trigger IRS audits. We handle it correctly every time.',
  },
]

export function YearRoundServicesSection({ onBookingClick }: YearRoundServicesSectionProps) {
  return (
    <SectionReveal>
      <section className="border-t border-white/10 bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Year-Round Services
            </p>
            <h2 className="text-balance text-3xl font-bold text-slate-50 lg:text-4xl">
              Your Tax Bill Is Being Decided Right Now — Not in April
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Every month you wait costs deductions. Most Grand Rapids businesses overpay because
              they only talk to their accountant once a year.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {YEAR_ROUND_SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-50">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                  <button
                    onClick={onBookingClick}
                    className="mt-4 self-start pt-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Book Free Call →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
