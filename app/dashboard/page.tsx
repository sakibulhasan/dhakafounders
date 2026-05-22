import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Bell,
  Settings,
  PlusCircle,
  ArrowUpRight,
  Building2,
  DollarSign,
  Eye,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Manage your Dhaka Founders profile, track visibility, and connect with investors.',
}

const quickStats = [
  { label: 'Profile Views',    value: '1,248', change: '+12%', icon: Eye,          color: '#2A81C7' },
  { label: 'Investor Matches', value: '24',    change: '+3',   icon: DollarSign,   color: '#16a34a' },
  { label: 'Network Connects', value: '87',    change: '+8',   icon: Users,        color: '#7c3aed' },
  { label: 'Community Rank',   value: '#42',   change: '↑ 5',  icon: TrendingUp,   color: '#d97706' },
]

const recentActivity = [
  { action: 'Investor viewed your profile',    time: '2 min ago',   type: 'view'    },
  { action: 'New founder connected with you',  time: '1 hour ago',  type: 'connect' },
  { action: 'Your startup was featured',       time: '3 hours ago', type: 'feature' },
  { action: 'Funding round update reminder',   time: 'Yesterday',   type: 'alert'   },
]

const sidebarLinks = [
  { label: 'Overview',   href: '/dashboard',           icon: LayoutDashboard },
  { label: 'Directory',  href: '/directory',           icon: Building2       },
  { label: 'Network',    href: '#',                    icon: Users           },
  { label: 'Analytics',  href: '#',                    icon: TrendingUp      },
  { label: 'Notifications', href: '#',                 icon: Bell            },
  { label: 'Settings',   href: '#',                    icon: Settings        },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#1F2532] fixed top-16 bottom-0 left-0 z-40 pt-6 pb-4">
        <div className="px-4 mb-8">
          <span
            className="text-xs font-semibold text-white/30 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Founder Portal
          </span>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {sidebarLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                label === 'Overview'
                  ? 'bg-[#2A81C7] text-white shadow-lg shadow-[#2A81C7]/30'
                  : 'text-white/50 hover:text-white hover:bg-white/8'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Profile Card */}
        <div className="mx-3 mt-4 p-3 rounded-xl bg-white/8 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2A81C7] flex items-center justify-center text-white text-sm font-bold shrink-0">
              SK
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                Sakibul Hasan
              </p>
              <p className="text-white/40 text-xs truncate">Founder & CEO</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6 lg:p-10">
        {/* Welcome Banner */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-[#1F2532]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Good morning, Sakibul 👋
            </h1>
            <p className="text-[#1F2532]/50 text-sm mt-1">
              Here&apos;s what&apos;s happening with your startup today.
            </p>
          </div>
          <Link
            href="/dashboard/profile"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A81C7] hover:bg-[#1e6aab] text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-[#2A81C7]/25 hover:scale-105 shrink-0"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Settings className="w-4 h-4" />
            Update Company Profile
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map(({ label, value, change, icon: Icon, color }) => (
            <div
              key={label}
              className="card-hover bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <span
                  className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {change}
                </span>
              </div>
              <p
                className="text-2xl font-extrabold text-[#1F2532] mb-0.5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {value}
              </p>
              <p className="text-xs text-[#1F2532]/50">{label}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2
                className="font-bold text-[#1F2532] text-base"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Recent Activity
              </h2>
              <button className="text-xs text-[#2A81C7] font-semibold hover:underline" style={{ fontFamily: 'var(--font-heading)' }}>
                View all
              </button>
            </div>
            <ul className="space-y-4">
              {recentActivity.map(({ action, time }) => (
                <li key={action} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2A81C7] mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1F2532] leading-snug">{action}</p>
                    <p className="text-xs text-[#1F2532]/40 mt-0.5">{time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6">
            <h2
              className="font-bold text-[#1F2532] text-base mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Actions
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Update startup profile', href: '#' },
                { label: 'Browse investor list',   href: '/directory' },
                { label: 'Post a co-founder need', href: '#' },
                { label: 'Schedule a demo day',    href: '#' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between p-3 rounded-xl border border-[#e2e8f0] hover:border-[#2A81C7]/30 hover:bg-[#2A81C7]/5 transition-all duration-200 group"
                >
                  <span
                    className="text-sm font-medium text-[#1F2532] group-hover:text-[#2A81C7] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#1F2532]/30 group-hover:text-[#2A81C7] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Completion Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#2A81C7] to-[#1e6aab] text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p
                className="font-bold text-lg mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Complete your founder profile
              </p>
              <p className="text-white/75 text-sm">
                Profiles with all fields completed get <strong>3x more</strong> investor views.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 max-w-xs h-2 rounded-full bg-white/25">
                  <div className="h-2 rounded-full bg-white w-[65%]" />
                </div>
                <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>65%</span>
              </div>
            </div>
            <button
              id="dashboard-complete-profile-btn"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#2A81C7] font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
