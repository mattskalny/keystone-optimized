'use client'

import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES, CTA } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

interface CaseStudiesSectionProps {
  onBookingClick: () => void
}

export function CaseStudiesSection({ onBookingClick }: CaseStudiesSectionProps) {
  return (
    <SectionReveal>
      <section id="case-studies" className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Real Client Results
            </p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">Problem → Solution → Outcome</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Grand Rapids clients who stopped overpaying and started getting clarity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.client}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {study.audience}
                </span>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/80">
                      Problem
                    </p>
                    <p className="text-slate-300">{study.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-amber-400/80">
                      Solution
                    </p>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Outcome
                    </p>
                    <p className="font-medium text-slate-100">{study.outcome}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-500">{study.client}</p>

                <button
                  onClick={onBookingClick}
                  className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {CTA.shortLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">Individual results vary.</p>
        </div>
      </section>
    </SectionReveal>
  )
}
