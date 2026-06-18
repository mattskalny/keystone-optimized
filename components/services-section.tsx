'use client'

import { FileText, Building2, Scale, Laptop } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

const iconMap = { FileText, Building2, Scale, Laptop }

export function ServicesSection() {
  return (
    <SectionReveal>
      <section id="services" className="bg-slate-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

            {/* Left: context + pitch */}
            <div className="lg:sticky lg:top-24">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-emerald-400">
                Services
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-slate-50 lg:text-4xl">
                Tax help for every situation.
              </h2>
              <p className="text-pretty text-lg text-slate-400 leading-relaxed">
                Families, freelancers, and small businesses — one firm, one flat rate, no hourly surprises.
              </p>
              <div className="mt-6 h-px w-16 bg-emerald-500/40" />
            </div>

            {/* Right: icon list */}
            <ul className="space-y-8">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <li key={service.title} className="flex items-start gap-5">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="mb-0.5 inline-block text-xs font-medium text-slate-500 uppercase tracking-wide">
                        {service.audience}
                      </span>
                      <h3 className="text-base font-semibold text-slate-50">{service.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{service.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
