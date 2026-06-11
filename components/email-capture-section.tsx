'use client'

import { useState } from 'react'
import { CheckCircle2, Mail } from 'lucide-react'
import { SectionReveal } from './section-reveal'

export function EmailCaptureSection() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    setSubmitted(true)
  }

  return (
    <SectionReveal>
      <section className="border-t border-white/10 bg-slate-900 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md lg:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
              <Mail className="h-4 w-4" />
              Free Checklist
            </div>

            <h2 className="text-balance text-2xl font-bold text-slate-50 lg:text-3xl">
              12 Deductions Most Grand Rapids Residents Miss
            </h2>
            <p className="mt-3 text-pretty text-slate-400">
              Get the free 2025 Tax Savings Checklist — used by 500+ local families.
            </p>

            {submitted ? (
              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-emerald-400">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p className="font-medium">
                  Thanks, {firstName.trim()}! Your checklist is on its way to your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="capture-first-name">
                    First name
                  </label>
                  <input
                    id="capture-first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    autoComplete="given-name"
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 sm:flex-1"
                  />
                  <label className="sr-only" htmlFor="capture-email">
                    Email address
                  </label>
                  <input
                    id="capture-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    autoComplete="email"
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 sm:flex-1"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]"
                >
                  Send Me the Checklist
                </button>
                <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
