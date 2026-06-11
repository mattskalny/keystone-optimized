'use client'

import { CTA, SITE } from '@/lib/constants'

interface FooterProps {
  onBookingClick: () => void
}

export function Footer({ onBookingClick }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo-icon.png"
                alt="Keystone Tax Advisory logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-lg font-semibold text-slate-50">Keystone Tax Advisory</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium tax preparation for Grand Rapids families, freelancers, and small businesses.
              Flat-rate pricing. IRS Enrolled Agent on staff.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-50">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href={SITE.phoneHref} className="hover:text-emerald-400">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-emerald-400">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  {SITE.address}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-50">Marcus Vance, EA</h3>
            <p className="mb-4 text-sm text-slate-400">
              Federally licensed Enrolled Agent serving Grand Rapids and clients nationwide.
            </p>
            <button
              onClick={onBookingClick}
              className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 active:scale-[0.98]"
            >
              {CTA.shortLabel}
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Keystone Tax Advisory. All rights reserved. Information on
            this site is for general purposes only and does not constitute tax or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
