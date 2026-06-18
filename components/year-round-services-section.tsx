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
    description: 'Missed payments trigger automatic IRS penalties. We keep you ahead of every deadline.',
  },
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping',
    description: 'Disorganized books cost deductions every month. We close that gap on a regular cycle.',
  },
  {
    icon: Briefcase,
    title: 'Business Accounting',
    description: 'Most LLC and S-Corp owners never claim all their advantages. We make sure you do.',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description: 'Payroll errors trigger audits. We handle it correctly, every time.',
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
              Your Tax Bill Is Decided Every Month — Not in April
            </h2>
          </div>

          <div className="grid gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden sm:grid-cols-2">
            {YEAR_ROUND_SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="flex flex-col gap-3 bg-slate-900 p-7 transition-colors hover:bg-slate-800/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-slate-50">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                  </div>
                  <button
                    onClick={onBookingClick}
                    className="self-start text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
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
