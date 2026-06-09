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
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Services
            </p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">Comprehensive Tax Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              One firm for families, freelancers, and small businesses — flat-rate, no hourly surprises.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <span className="mb-3 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {service.audience}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-50">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
