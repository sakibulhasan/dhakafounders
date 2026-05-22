// app/page.tsx
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { MOCK_STARTUPS } from '@/lib/constants';
import { StartupCard } from '@/components/directory/StartupCard';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Dhaka Founders — Bangladesh's Premier Startup Directory",
  description:
    "Discover the builders shaping Bangladesh's tech ecosystem. Connect with founders, investors, and startups across Dhaka and beyond.",
};

// Ensure this page is rendered dynamically because it uses cookies (Supabase auth)
export const dynamic = 'force-dynamic';

// Test Supabase connection (auth service)
async function testSupabaseConnection(): Promise<{ ok: boolean; message: string }> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.getSession();
    if (!error) {
      console.log('✅ Supabase connection successful');
      return { ok: true, message: 'Supabase connection successful' };
    }
    console.error('❌ Supabase auth error:', error.message);
    return { ok: false, message: error.message };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('❌ Supabase connection failed:', msg);
    return { ok: false, message: msg };
  }
}

interface CompanyProfile {
  id: string;
  clerk_auth_key: string;
  company_name: string;
  website_url?: string | null;
  category: string;
  description?: string | null;
  founder_name?: string | null;
  founder_email?: string | null;
  linkedin_url?: string | null;
  created_at?: string | null;
}

export default async function HomePage() {
  // Map mock startups to the shape expected by StartupCard
  const featuredProfiles: CompanyProfile[] = MOCK_STARTUPS.slice(0, 3).map((s) => ({
    id: s.id,
    clerk_auth_key: '', // placeholder for mock data
    company_name: s.name,
    website_url: null,
    category: s.category,
    description: s.tagline,
    founder_name: '',
    founder_email: '',
    linkedin_url: null,
    created_at: null,
  }));

  const dbStatus = await testSupabaseConnection();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />

      {/* Supabase connection status badge (dev only) */}
      <div className="flex justify-center py-4 bg-white">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border ${
            dbStatus.ok ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'
          }`}
        >
          {dbStatus.ok ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
          Supabase: {dbStatus.message}
        </div>
      </div>

      {/* Featured Startups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-[#2A81C7] uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Featured Startups
              </p>
              <h2 className="text-3xl font-extrabold text-[#1F2532]" style={{ fontFamily: 'var(--font-heading)' }}>
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
            {featuredProfiles.map((profile) => (
              <StartupCard key={profile.id} profile={profile} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/directory" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A81C7]">
              View all startups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#1F2532]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Support each other's growth. <span className="text-[#2A81C7]">Together.</span>
          </h2>
          <p className="text-white/55 mb-8 text-base leading-relaxed">
            Join a vibrant community of founders who believe the best startups are built with the support of a strong local ecosystem.
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
  );
}
