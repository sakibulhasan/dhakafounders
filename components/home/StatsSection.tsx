'use client'

import { useEffect, useRef, useState } from 'react'
import { COMMUNITY_STATS } from '@/lib/constants'

function useCountUp(target: string, duration = 1800, start = false) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!start) return
    const numeric = parseInt(target.replace(/\D/g, ''), 10)
    const suffix = target.replace(/[0-9]/g, '')
    if (isNaN(numeric)) { setDisplay(target); return }
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * numeric) + suffix)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return display
}

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const count = useCountUp(value, 1600, hasStarted)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-white border border-[#2A81C7]/15 shadow-lg shadow-[#2A81C7]/8 group-hover:shadow-[#2A81C7]/20 group-hover:border-[#2A81C7]/30 group-hover:-translate-y-1 transition-all duration-300 mx-auto mb-3">
        <span
          className="text-4xl font-extrabold gradient-text leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {count}
        </span>
      </div>
      <p
        className="text-sm font-semibold text-[#1F2532]/60 tracking-wide uppercase"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {label}
      </p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-[#2A81C7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-semibold text-[#2A81C7] uppercase tracking-widest mb-10"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Community at a Glance
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {COMMUNITY_STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
