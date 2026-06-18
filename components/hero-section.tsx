'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Search, DollarSign, CheckCircle2 } from 'lucide-react'
import { URGENCY } from '@/lib/constants'

interface HeroSectionProps {
  onBookingClick: () => void
}

function CountUpAmount({ target, durationMs }: { target: number; durationMs: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, durationMs])

  return <>${value.toLocaleString()}</>
}

function CountUp({ target, durationMs }: { target: number; durationMs: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, durationMs])

  return <>{value}</>
}

function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-slate-800/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-amber-500/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs text-slate-500">2024 Tax Summary — Marcus Vance, EA</span>
      </div>

      <div className="p-6">
        {/* Top label */}
        <p className="mb-5 text-xs font-medium uppercase tracking-widest text-slate-500">
          Client overview
        </p>

        {/* Three stat rows */}
        <div className="space-y-4">
          {/* Refund Estimate */}
          <div className="flex items-center justify-between rounded-xl bg-emerald-500/8 px-4 py-3.5 ring-1 ring-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Refund Estimate</p>
                <p className="text-lg font-bold text-slate-50">
                  $<CountUp target={3847} durationMs={1800} />
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-400">
              +18%
            </span>
          </div>

          {/* Deductions Found */}
          <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3.5 ring-1 ring-white/8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-700">
                <Search className="h-4 w-4 text-slate-300" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Deductions Found</p>
                <p className="text-lg font-bold text-slate-50">
                  <CountUp target={14} durationMs={1400} /> items
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">value</p>
              <p className="text-sm font-semibold text-slate-300">$8,240</p>
            </div>
          </div>

          {/* Tax Savings */}
          <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3.5 ring-1 ring-white/8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-700">
                <DollarSign className="h-4 w-4 text-slate-300" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Tax Savings</p>
                <p className="text-lg font-bold text-slate-50">
                  $<CountUp target={1420} durationMs={2000} />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              confirmed
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-xs text-slate-500">
            <span>Return filed</span>
            <span className="text-emerald-400">Complete</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.10)_0%,_transparent_55%)]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pb-16 pt-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-20 lg:pt-28">

        {/* Left: headline + subtext + CTA */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            The IRS Kept{' '}
            <span className="inline-block min-w-[3.2ch] text-emerald-400">
              <CountUpAmount target={3200} durationMs={2400} />
            </span>{' '}
            That Belongs to You.
          </h1>

          <p className="mb-8 max-w-lg text-pretty text-lg leading-relaxed text-slate-300 lg:text-xl">
            A licensed Enrolled Agent finds every deduction you've missed — flat-rate, no hourly surprises.
          </p>

          <button
            onClick={onBookingClick}
            className="rounded-lg bg-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/30 active:scale-[0.98]"
          >
            Book Your Free 15-Min Call
          </button>

          <p className="mt-4 text-sm text-amber-400/80">{URGENCY.deadline}</p>
        </div>

        {/* Right: dashboard mockup */}
        <div className="w-full shrink-0 lg:w-[440px]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
