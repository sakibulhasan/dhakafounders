import { Users, TrendingUp, Zap } from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap = {
  Users,
  TrendingUp,
  Zap,
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-semibold text-[#2A81C7] uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Dhaka Founders?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#1F2532] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Everything you need to{' '}
            <span className="gradient-text">scale your startup</span>
          </h2>
          <p className="text-[#1F2532]/55 text-base leading-relaxed">
            From funding support and founder resources to direct connections
            with investors — we give you the tools to build in the open.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div
                key={feature.title}
                className="card-hover bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feature.color}18` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-[#1F2532] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#1F2532]/55 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle accent line */}
                <div
                  className="mt-6 h-0.5 w-12 rounded-full group-hover:w-24 transition-all duration-300"
                  style={{ background: feature.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
