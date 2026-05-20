'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO_HEADLINES } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % HERO_HEADLINES.length)
        setIsAnimating(false)
      }, 400)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden gradient-hero min-h-[92vh] flex items-center">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#2A81C7]/12 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#2A81C7]/10 blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2A81C7]/5 blur-3xl" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #2A81C7 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A81C7]/10 border border-[#2A81C7]/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#2A81C7] animate-pulse" />
          <span
            className="text-sm font-semibold text-[#2A81C7]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Bangladesh&apos;s #1 Founder Directory
          </span>
        </div>

        {/* Rotating Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1F2532] leading-tight mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-heading)', minHeight: '5rem' }}
        >
          <span
            className="block transition-all duration-400 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(-12px)' : 'translateY(0)',
            }}
          >
            {HERO_HEADLINES[activeIndex].split(' ').map((word, i) => (
              <span
                key={i}
                className={
                  word === 'Builders' ||
                  word === 'Connect,' ||
                  word === 'Gateway' ||
                  word === 'Bangladesh\'s' ||
                  word === 'Innovative'
                    ? 'gradient-text'
                    : ''
                }
              >
                {word}{' '}
              </span>
            ))}
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl text-[#1F2532]/60 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A vibrant community where founders, investors, and builders grow and
          fund their dreams together. Join Bangladesh&apos;s most supportive
          startup ecosystem.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-300">
          <Button variant="primary" size="lg" asChild>
            <Link href="/directory" id="hero-explore-cta">
              Explore Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/dashboard" id="hero-join-cta">
              Join as Founder
            </Link>
          </Button>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex items-center justify-center gap-3 animate-fade-in-up animation-delay-400">
          <div className="flex -space-x-3">
            {['SK', 'RH', 'AM', 'NI', 'FR'].map((initials, i) => (
              <div
                key={initials}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md"
                style={{
                  background: `hsl(${200 + i * 25}, 70%, 45%)`,
                  zIndex: 5 - i,
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#1F2532]/60">
            <span className="font-semibold text-[#1F2532]">500+ founders</span> already building in the open
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#1F2532]/40 animate-float animation-delay-500">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Headline dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_HEADLINES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-[#2A81C7] w-6' : 'bg-[#2A81C7]/30'
            }`}
            aria-label={`Headline ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
