'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal, MapPin } from 'lucide-react'
import { MOCK_STARTUPS, STARTUP_CATEGORIES, FUNDING_STAGES } from '@/lib/constants'
import { StartupCard } from '@/components/directory/StartupCard'

export default function DirectoryPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeStage, setActiveStage] = useState('All Stages')

  const filtered = MOCK_STARTUPS.filter((s) => {
    const matchesQuery =
      query.trim() === '' ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.tagline.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase())
    const matchesCategory =
      activeCategory === 'All' || s.category === activeCategory
    const matchesStage =
      activeStage === 'All Stages' || s.stage === activeStage
    return matchesQuery && matchesCategory && matchesStage
  })

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Page Header */}
      <div className="bg-[#1F2532] pt-16 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex items-center gap-2 text-[#2A81C7] text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span style={{ fontFamily: 'var(--font-heading)' }}>
              Dhaka, Bangladesh
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Startup Directory
          </h1>
          <p className="text-white/55 text-base max-w-xl">
            Discover and connect with the most innovative startups shaping
            Bangladesh&apos;s tech ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        {/* Search + Filters Card */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-lg p-4 mb-10">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F2532]/35" />
            <input
              id="directory-search"
              type="text"
              placeholder="Search by name, tagline, or city…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[#1F2532] placeholder:text-[#1F2532]/35 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A81C7]/30 focus:border-[#2A81C7] transition-all duration-200"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-[#1F2532]/40 shrink-0" />
            <div className="flex flex-wrap gap-2">
              {STARTUP_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  id={`filter-category-${cat.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#2A81C7] text-white shadow-md shadow-[#2A81C7]/25'
                      : 'bg-[#f8fafc] text-[#1F2532]/60 hover:bg-[#2A81C7]/10 hover:text-[#2A81C7] border border-[#e2e8f0]'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-[#e2e8f0] mx-1 hidden sm:block" />

            <div className="flex flex-wrap gap-2">
              {FUNDING_STAGES.map((stage) => (
                <button
                  key={stage}
                  id={`filter-stage-${stage.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setActiveStage(stage)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeStage === stage
                      ? 'bg-[#1F2532] text-white'
                      : 'bg-[#f8fafc] text-[#1F2532]/60 hover:bg-[#1F2532]/10 hover:text-[#1F2532] border border-[#e2e8f0]'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p
            className="text-sm text-[#1F2532]/50"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Showing{' '}
            <span className="font-semibold text-[#1F2532]">{filtered.length}</span>{' '}
            startup{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-[#2A81C7]/10 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-[#2A81C7]" />
            </div>
            <h3
              className="text-lg font-bold text-[#1F2532] mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              No startups found
            </h3>
            <p className="text-[#1F2532]/50 text-sm">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
