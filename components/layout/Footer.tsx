import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github, MapPin } from 'lucide-react'
import { FOOTER_LINKS, SITE_META } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1F2532] text-white">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to grow with Bangladesh&apos;s best?
            </h3>
            <p className="text-white/60 text-sm">
              Join 500+ founders already building in the open.
            </p>
          </div>
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2A81C7] hover:bg-[#1e6aab] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#2A81C7]/30 hover:shadow-[#2A81C7]/50 hover:scale-105 shrink-0"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Zap className="w-4 h-4" />
            Explore the Directory
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg gradient-blue flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Dhaka<span className="text-[#2A81C7]">Founders</span>
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              {SITE_META.description}
            </p>

            <div className="flex items-center gap-1 text-white/40 text-xs mb-5">
              <MapPin className="w-3 h-3" />
              <span>Dhaka, Bangladesh 🇧🇩</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter,  href: '#', label: 'Twitter'  },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github,   href: '#', label: 'GitHub'   },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#2A81C7] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/50 hover:text-[#2A81C7] text-sm transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>© {year} Dhaka Founders. All rights reserved.</p>
          <p>Built with ❤️ for Bangladesh&apos;s startup community</p>
        </div>
      </div>
    </footer>
  )
}
