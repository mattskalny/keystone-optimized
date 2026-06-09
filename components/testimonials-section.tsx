'use client'

import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

export function TestimonialsSection() {
  return (
    <SectionReveal>
      <section id="testimonials" className="bg-slate-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">
              Trusted by Grand Rapids Families & Businesses
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <span className="mb-3 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  {t.audience}
                </span>

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
