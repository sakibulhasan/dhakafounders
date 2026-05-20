'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg gradient-blue flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-4 h-4 text-white" fill="currentColor" />
          </div>
          <span
            className="text-lg font-bold text-[#1F2532]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Dhaka<span className="text-[#2A81C7]">Founders</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === href
                    ? 'bg-[#2A81C7]/10 text-[#2A81C7] font-semibold'
                    : 'text-[#1F2532]/70 hover:text-[#1F2532] hover:bg-slate-100'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/directory">Join the Community</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1F2532] hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/60 px-4 pb-6 pt-2 animate-fade-in">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                    pathname === href
                      ? 'bg-[#2A81C7]/10 text-[#2A81C7] font-semibold'
                      : 'text-[#1F2532]/70 hover:text-[#1F2532] hover:bg-slate-100'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="md" className="w-full" asChild>
            <Link href="/directory" onClick={() => setMobileOpen(false)}>
              Join the Community
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
