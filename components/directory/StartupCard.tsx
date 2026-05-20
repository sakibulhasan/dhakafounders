import Link from 'next/link'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import type { Startup } from '@/lib/constants'

const stageBadgeColors: Record<string, string> = {
  'Pre-Seed': 'bg-orange-50 text-orange-600 border-orange-200',
  'Seed':     'bg-emerald-50 text-emerald-600 border-emerald-200',
  'Series A': 'bg-blue-50 text-blue-600 border-blue-200',
  'Series B': 'bg-purple-50 text-purple-600 border-purple-200',
}

const categoryBadgeColors: Record<string, string> = {
  'E-Commerce': 'bg-[#2A81C7]/8 text-[#2A81C7]',
  'FinTech':    'bg-purple-50 text-purple-600',
  'HealthTech': 'bg-emerald-50 text-emerald-600',
  'EdTech':     'bg-red-50 text-red-600',
  'AgriTech':   'bg-amber-50 text-amber-600',
  'Logistics':  'bg-cyan-50 text-cyan-600',
}

interface StartupCardProps {
  startup: Startup
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <article className="card-hover bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden group">
      {/* Top stripe */}
      <div className="h-1.5 w-full" style={{ background: startup.logoColor }} />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo Avatar */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md"
            style={{ background: startup.logoColor, fontFamily: 'var(--font-heading)' }}
          >
            {startup.logoInitials}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className="font-bold text-[#1F2532] text-base leading-snug truncate"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {startup.name}
            </h3>
            <span
              className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                categoryBadgeColors[startup.category] ?? 'bg-slate-100 text-slate-600'
              }`}
            >
              {startup.category}
            </span>
          </div>

          {/* Stage Badge */}
          <span
            className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg border ${
              stageBadgeColors[startup.stage] ?? 'bg-slate-50 text-slate-600 border-slate-200'
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {startup.stage}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[#1F2532]/60 text-sm leading-relaxed mb-5 line-clamp-2">
          {startup.tagline}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-[#1F2532]/45 mb-5">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {startup.city}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Founded {startup.foundedYear}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/directory/${startup.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2A81C7] hover:text-[#1e6aab] transition-colors group/link"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          View Profile
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  )
}
