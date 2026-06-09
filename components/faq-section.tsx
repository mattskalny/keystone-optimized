'use client'

import { FAQ_ITEMS } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

export function FAQSection() {
  return (
    <SectionReveal>
      <section id="faq" className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-50 lg:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-400">
              For families, freelancers, and small businesses — straight answers, no jargon.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                id={'id' in item ? item.id : undefined}
                className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-medium text-slate-50 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-emerald-400 transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <div className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed text-slate-400">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
