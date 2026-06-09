import { Star } from 'lucide-react'
import { SectionReveal } from './section-reveal'

export function ClientOutcomeCard() {
  return (
    <SectionReveal>
      <section className="border-t border-white/10 bg-slate-900/80 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:max-w-3xl lg:p-8">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Client Outcome
                </p>
                <h3 className="text-lg font-semibold text-slate-50 lg:text-xl">
                  James T., Freelance Developer
                </h3>
                <p className="text-sm text-slate-400">Grand Rapids, MI</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Freelancers
              </span>
            </div>

            <p className="mb-3 text-2xl font-bold text-emerald-400 lg:text-3xl">$4,200 recovered</p>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 lg:text-base">
              Missed home-office and mileage deductions on Schedule C — found and filed in one
              consultation.
            </p>

            <div className="absolute -bottom-4 right-4 rounded-lg border border-white/10 bg-slate-800/90 px-4 py-2 shadow-xl backdrop-blur-sm lg:right-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-50">5.0 Rating</p>
                  <p className="text-xs text-slate-400">500+ Reviews</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-500">Individual results vary.</p>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
