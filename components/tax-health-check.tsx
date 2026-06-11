'use client'

import { useMemo, useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import { type FilingTypeId } from '@/lib/constants'
import { setPreselectedFilingType } from '@/lib/booking-store'
import { SectionReveal } from './section-reveal'

interface TaxHealthCheckProps {
  onBookingClick: () => void
}

export function TaxHealthCheck({ onBookingClick }: TaxHealthCheckProps) {
  const [selfEmployed, setSelfEmployed] = useState<boolean | null>(null)
  const [missedDeductions, setMissedDeductions] = useState<boolean | null>(null)
  const [irsNotices, setIrsNotices] = useState<boolean | null>(null)

  const allAnswered = selfEmployed !== null && missedDeductions !== null && irsNotices !== null
  const anyYes = selfEmployed === true || missedDeductions === true || irsNotices === true

  const filingType = useMemo(() => {
    let type: FilingTypeId = 'personal'
    if (selfEmployed) type = 'freelancer'
    if (irsNotices) type = 'irs'
    return type
  }, [selfEmployed, irsNotices])

  const handleBook = () => {
    if (allAnswered) setPreselectedFilingType(filingType)
    onBookingClick()
  }

  const Question = ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: boolean | null
    onChange: (v: boolean) => void
  }) => (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
      <p className="mb-3 text-sm font-medium text-slate-200">{label}</p>
      <div className="flex gap-2">
        {(['Yes', 'No'] as const).map((option) => {
          const boolVal = option === 'Yes'
          const selected = value === boolVal
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(boolVal)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                selected
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <SectionReveal>
      <section className="bg-slate-800 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
              <ClipboardCheck className="h-4 w-4" />
              60-Second Tax Health Check
            </div>
            <h2 className="text-3xl font-bold text-slate-50">Could You Be Overpaying?</h2>
            <p className="mt-2 text-slate-400">Three quick questions — see if a consultation is worth your time.</p>
          </div>

          <div className="space-y-4">
            <Question
              label="Are you self-employed or do you have 1099 income?"
              value={selfEmployed}
              onChange={setSelfEmployed}
            />
            <Question
              label="Did you miss deductions or credits last year?"
              value={missedDeductions}
              onChange={setMissedDeductions}
            />
            <Question
              label="Have you received IRS notices or owe back taxes?"
              value={irsNotices}
              onChange={setIrsNotices}
            />
          </div>

          {allAnswered && (
            <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center">
              {anyYes ? (
                <p className="text-slate-200">
                  Based on your answers, you likely qualify for a{' '}
                  <span className="font-bold text-emerald-400">free tax audit review</span> — most
                  clients in your situation recover{' '}
                  <span className="font-bold text-emerald-400">$2,000–$4,000</span>.
                </p>
              ) : (
                <p className="text-slate-200">
                  Good news — you may still be leaving money on the table. A free 15-minute call
                  costs nothing and could save you thousands.
                </p>
              )}
              <button
                onClick={handleBook}
                className="mt-4 w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-600 active:scale-[0.98] sm:w-auto"
              >
                Claim Your Free Audit Review →
              </button>
            </div>
          )}
        </div>
      </section>
    </SectionReveal>
  )
}
