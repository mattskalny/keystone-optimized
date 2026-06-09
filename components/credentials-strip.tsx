import { Shield, Award, Star } from 'lucide-react'
import { TRUST_BADGES, EA_EXPLANATION } from '@/lib/constants'

const iconMap = { Shield, Award, Star }

interface CredentialsStripProps {
  compact?: boolean
  showEaExplanation?: boolean
}

export function CredentialsStrip({ compact = false, showEaExplanation = false }: CredentialsStripProps) {
  return (
    <div className={compact ? '' : 'border-t border-white/10 bg-slate-900/50'}>
      <div className={`mx-auto max-w-7xl px-4 ${compact ? 'py-4' : 'py-8'} lg:px-8`}>
        {showEaExplanation && (
          <p className="mb-4 text-center text-sm text-slate-400 lg:text-left">
            {EA_EXPLANATION}{' '}
            <a href="#faq" className="text-emerald-400 underline-offset-2 hover:underline">
              Learn more
            </a>
          </p>
        )}
        <div className={`grid gap-4 ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-1 gap-6 sm:grid-cols-3'}`}>
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap]
            return (
              <div
                key={badge.label}
                className={`flex items-center ${compact ? 'flex-col gap-1 text-center' : 'justify-center gap-3 sm:justify-start'}`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg bg-emerald-500/10 ${
                    compact ? 'h-9 w-9' : 'h-12 w-12'
                  }`}
                >
                  <Icon className={`text-emerald-400 ${compact ? 'h-4 w-4' : 'h-6 w-6'}`} />
                </div>
                <div>
                  <p className={`font-semibold text-slate-50 ${compact ? 'text-xs' : ''}`}>{badge.label}</p>
                  {!compact && <p className="text-sm text-slate-400">{badge.sublabel}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
