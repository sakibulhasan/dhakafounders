// "use client";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Map category to top border color (using brand palette)
const categoryBorderColors: Record<string, string> = {
  'E-Commerce': '#2A81C7',
  'FinTech': '#7c3aed',
  'HealthTech': '#16a34a',
  'EdTech': '#dc2626',
  'AgriTech': '#d97706',
  'Logistics': '#0891b2',
};

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

interface StartupCardProps {
  profile: CompanyProfile;
}

export function StartupCard({ profile }: StartupCardProps) {
  const borderColor = categoryBorderColors[profile.category] ?? '#cbd5e1';
  return (
    <article className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden group">
      {/* Top colored border */}
      <div className="h-1.5 w-full" style={{ background: borderColor }} />
      <div className="p-6">
        <h3 className="font-bold text-[#1F2532] text-base leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
          {profile.company_name}
        </h3>
        <span
          className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            profile.category in categoryBorderColors
              ? `bg-${profile.category.toLowerCase().replace(/\s/g, '-')}/8 text-${profile.category.toLowerCase().replace(/\s/g, '-')}`
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          {profile.category}
        </span>
        {profile.description && (
          <p className="text-[#1F2532]/60 text-sm leading-relaxed mt-3 line-clamp-2">
            {profile.description}
          </p>
        )}
        {profile.created_at && (
          <p className="text-xs text-[#1F2532]/45 mt-4">
            Founded {new Date(profile.created_at).getFullYear()}
          </p>
        )}
        <Link
          href={`/directory/${profile.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2A81C7] hover:text-[#1e6aab] transition-colors mt-4 group/link"
        >
          View Profile
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  );
}
