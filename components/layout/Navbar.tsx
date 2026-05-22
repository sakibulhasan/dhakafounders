'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Zap, LayoutDashboard } from 'lucide-react'
import { useAuth, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isSignedIn, isLoaded } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200/40 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl gradient-blue flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 group-hover:shadow-primary/30 transition-all duration-300">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-extrabold text-secondary tracking-tight font-heading">
            Dhaka<span className="text-primary group-hover:text-primary-dark transition-colors duration-200">Founders</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
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

        {/* Desktop CTA — Auth-conditional */}
        <div className="hidden md:flex items-center gap-3">
          {/* Skeleton shimmer while Clerk loads */}
          {!isLoaded && (
            <div className="flex items-center gap-3">
              <div className="h-8 w-16 rounded-lg bg-secondary/5 animate-pulse" />
              <div className="h-8 w-36 rounded-xl bg-primary/10 animate-pulse" />
            </div>
          )}

          {/* Signed Out */}
          {isLoaded && !isSignedIn && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="primary" size="sm">Join the Community</Button>
              </SignUpButton>
            </>
          )}

          {/* Signed In */}
          {isLoaded && isSignedIn && (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === '/dashboard'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-secondary/70 hover:text-secondary hover:bg-secondary/5'
                )}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                Dashboard
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      'w-8 h-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200 rounded-full',
                  },
                }}
              />
            </div>
          )}
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
          <ul className="flex flex-col gap-1 mb-5">
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

          {/* Mobile Signed Out */}
          {isLoaded && !isSignedIn && (
            <div className="flex flex-col gap-2">
              <SignUpButton mode="modal">
                <Button variant="primary" size="md" className="w-full">
                  Join the Community
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button variant="outline" size="md" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          )}

          {/* Mobile Signed In */}
          {isLoaded && isSignedIn && (
            <div className="flex items-center gap-3 px-1 pt-1 border-t border-slate-100 mt-1 pt-4">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-9 h-9 ring-2 ring-primary/20 rounded-full',
                  },
                }}
              />
              <div className="flex flex-col">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-secondary hover:text-primary transition-colors duration-200"
                >
                  Go to Dashboard →
                </Link>
                <span className="text-xs text-secondary/50 mt-0.5">Your founder workspace</span>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
