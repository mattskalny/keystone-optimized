'use client'

import { useEffect, useState } from 'react'
import { Lock } from 'lucide-react'
import { BOOKING_TIME_SLOTS, FILING_TYPES, type FilingTypeId } from '@/lib/constants'
import { clearPreselectedFilingType, getPreselectedFilingType } from '@/lib/booking-store'

interface BookingWizardProps {
  onComplete: (data: BookingData) => void
}

export interface BookingData {
  filingType: FilingTypeId
  timeSlot: string
  name: string
  email: string
  phone: string
}

export function BookingWizard({ onComplete }: BookingWizardProps) {
  const [step, setStep] = useState(1)
  const [filingType, setFilingType] = useState<FilingTypeId | null>(null)
  const [timeSlot, setTimeSlot] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const preset = getPreselectedFilingType()
    if (preset) {
      setFilingType(preset)
      clearPreselectedFilingType()
    }
  }, [])

  const canProceedStep1 = filingType !== null
  const canProceedStep2 = timeSlot !== null
  const canSubmit = name.trim() && email.trim() && phone.trim()

  const handleSubmit = () => {
    if (!filingType || !timeSlot || !canSubmit) return
    onComplete({ filingType, timeSlot, name, email, phone })
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-emerald-500' : 'bg-white/10'}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-50">
            What type of tax service do you need?
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {FILING_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilingType(type.id)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  filingType === type.id
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <p className="font-medium text-slate-50">{type.label}</p>
                <p className="mt-1 text-sm text-slate-400">{type.description}</p>
              </button>
            ))}
          </div>
          <button
            disabled={!canProceedStep1}
            onClick={() => setStep(2)}
            className="mt-6 w-full rounded-lg bg-emerald-500 py-3 font-semibold text-white transition-all hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-50">
            Select a convenient time for your call
          </h3>
          <div className="grid gap-2">
            {BOOKING_TIME_SLOTS.map((slot) => {
              const label = `${slot.day}, ${slot.date} at ${slot.time}`
              return (
                <button
                  key={label}
                  onClick={() => setTimeSlot(label)}
                  className={`rounded-lg border px-4 py-3 text-left transition-all ${
                    timeSlot === label
                      ? 'border-emerald-500 bg-emerald-500/10 text-slate-50'
                      : 'border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 rounded-lg border border-white/20 py-3 text-slate-300 hover:bg-white/5"
            >
              Back
            </button>
            <button
              disabled={!canProceedStep2}
              onClick={() => setStep(3)}
              className="flex-1 rounded-lg bg-emerald-500 py-3 font-semibold text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-50">How can we reach you?</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-lg bg-white/5 p-3 text-xs text-slate-400">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <p>
              Encrypted &amp; confidential. Your info is never sold — only used to confirm your
              consultation.
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 rounded-lg border border-white/20 py-3 text-slate-300 hover:bg-white/5"
            >
              Back
            </button>
            <button
              disabled={!canSubmit}
              onClick={handleSubmit}
              className="flex-1 rounded-lg bg-emerald-500 py-3 font-semibold text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
