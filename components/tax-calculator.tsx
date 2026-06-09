'use client'

import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import { CTA } from '@/lib/constants'

type FilingStatus = 'single' | 'married' | 'hoh'

interface TaxCalculatorProps {
  onBookingClick: () => void
  compact?: boolean
}

function estimateSavings(income: number, status: FilingStatus) {
  if (!income || income <= 0) return null

  const statusMultiplier = status === 'married' ? 1.15 : status === 'hoh' ? 1.1 : 1
  const baseRate = income > 150000 ? 0.045 : income > 75000 ? 0.055 : income > 40000 ? 0.065 : 0.075
  const midpoint = Math.round(income * baseRate * statusMultiplier)
  const low = Math.max(400, Math.round(midpoint * 0.7))
  const high = Math.round(midpoint * 1.35)

  return { low, high }
}

export function TaxCalculator({ onBookingClick, compact = false }: TaxCalculatorProps) {
  const [income, setIncome] = useState('')
  const [status, setStatus] = useState<FilingStatus>('single')

  const estimate = useMemo(() => {
    const parsed = parseFloat(income.replace(/,/g, ''))
    return estimateSavings(parsed, status)
  }, [income, status])

  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm ${
        compact ? 'p-4' : 'rounded-2xl bg-white/5 p-5 backdrop-blur-md'
      }`}
    >
      <div className={`flex items-center gap-2 ${compact ? 'mb-3' : 'mb-4'}`}>
        <Calculator className={`text-emerald-400/80 ${compact ? 'h-4 w-4' : 'h-5 w-5'}`} />
        <h3 className={`font-medium text-slate-300 ${compact ? 'text-sm' : 'text-lg font-semibold text-slate-50'}`}>
          Quick savings estimate
        </h3>
      </div>

      <div className={compact ? 'space-y-2.5' : 'space-y-3'}>
        <div>
          <label htmlFor="income" className={`mb-1 block text-slate-500 ${compact ? 'text-xs' : 'text-sm text-slate-400'}`}>
            Annual income
          </label>
          <input
            id="income"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 75000"
            value={income}
            onChange={(e) => setIncome(e.target.value.replace(/[^0-9,]/g, ''))}
            className={`w-full rounded-lg border border-white/10 bg-slate-900/60 text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 ${
              compact ? 'px-3 py-2 text-sm' : 'px-4 py-2.5'
            }`}
          />
        </div>

        <div>
          <label htmlFor="status" className={`mb-1 block text-slate-500 ${compact ? 'text-xs' : 'text-sm text-slate-400'}`}>
            Filing status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as FilingStatus)}
            className={`w-full rounded-lg border border-white/10 bg-slate-900/60 text-slate-50 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 ${
              compact ? 'px-3 py-2 text-sm' : 'px-4 py-2.5'
            }`}
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="hoh">Head of Household</option>
          </select>
        </div>
      </div>

      {estimate && (
        <div className={`mt-3 rounded-lg bg-emerald-500/5 ${compact ? 'p-3' : 'mt-4 bg-emerald-500/10 p-4'}`}>
          <p className={`text-slate-400 ${compact ? 'text-xs' : 'text-sm text-slate-300'}`}>
            Estimated opportunity
          </p>
          <p className={`font-semibold text-emerald-400 ${compact ? 'mt-0.5 text-lg' : 'mt-1 text-2xl font-bold'}`}>
            ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
          </p>
          {!compact && (
            <p className="mt-2 text-xs text-slate-500">
              Estimate only — not tax advice. A free call confirms your actual savings.
            </p>
          )}
        </div>
      )}

      <button
        onClick={onBookingClick}
        className={`mt-3 w-full rounded-lg border border-emerald-500/30 text-emerald-400 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 active:scale-[0.98] ${
          compact ? 'px-3 py-2 text-xs font-medium' : 'mt-4 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600'
        }`}
      >
        {compact ? 'See your full picture →' : CTA.calculator}
      </button>
    </div>
  )
}
