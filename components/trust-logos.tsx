import { TRUST_LOGOS } from '@/lib/constants'
import { SectionReveal } from './section-reveal'

export function TrustLogos() {
  return (
    <SectionReveal>
      <section className="border-y border-white/10 bg-slate-900/80 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted By Grand Rapids Clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {TRUST_LOGOS.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-slate-400 transition-colors hover:border-white/20 hover:text-slate-200"
              >
                {logo.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
