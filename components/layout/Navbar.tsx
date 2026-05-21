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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200/40 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl gradient-blue flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 group-hover:shadow-primary/30 transition-all duration-300">
            <Zap className="w-4.5 h-4.5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-extrabold text-secondary tracking-tight font-heading">
            Dhaka<span className="text-primary group-hover:text-primary-dark transition-colors duration-200">Founders</span>
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
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-secondary/70 hover:text-secondary hover:bg-secondary/5'
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
          className="md:hidden p-2 rounded-lg text-secondary hover:bg-secondary/5 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg px-4 pb-6 pt-2 animate-fade-in">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                    pathname === href
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-secondary/70 hover:text-secondary hover:bg-secondary/5'
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
