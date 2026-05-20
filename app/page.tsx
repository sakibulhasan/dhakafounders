import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { MOCK_STARTUPS } from '@/lib/constants'
import { StartupCard } from '@/components/directory/StartupCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dhaka Founders — Bangladesh\'s Premier Startup Directory',
  description:
    'Discover the builders shaping Bangladesh\'s tech ecosystem. Connect with founders, investors, and startups across Dhaka and beyond.',
}

export default function HomePage() {
  const featuredStartups = MOCK_STARTUPS.slice(0, 3)

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />

      {/* Featured Startups Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p
                className="text-sm font-semibold text-[#2A81C7] uppercase tracking-widest mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Featured Startups
              </p>
              <h2
                className="text-3xl font-extrabold text-[#1F2532]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Startups to Watch in 2025
              </h2>
            </div>
            <Link
              href="/directory"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#2A81C7] hover:text-[#1e6aab] transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              View all startups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A81C7]"
            >
              View all startups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#1F2532]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Support each other&apos;s growth.{' '}
            <span className="text-[#2A81C7]">Together.</span>
          </h2>
          <p className="text-white/55 mb-8 text-base leading-relaxed">
            Join a vibrant community of founders who believe the best startups
            are built with the support of a strong local ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/directory"
              id="bottom-explore-cta"
              className="px-8 py-4 rounded-xl bg-[#2A81C7] hover:bg-[#1e6aab] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#2A81C7]/30 hover:shadow-[#2A81C7]/50 hover:scale-105 inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Explore Directory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard"
              id="bottom-join-cta"
              className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 text-white font-semibold text-base transition-all duration-200 hover:bg-white/5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Join as Founder
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
