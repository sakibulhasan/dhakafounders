import { auth } from '@clerk/nextjs/server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { ProfileForm } from './ProfileForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Update Company Profile | Dhaka Founders',
  description: 'Update your company and founder details on Dhaka Founders.',
}

export default async function ProfilePage() {
  const { userId } = await auth()
  
  if (!userId) {
    return <div className="p-10 text-center">Unauthorized. Please log in.</div>
  }

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: existingProfile } = await supabase
    .from('company_profile')
    .select('*')
    .eq('clerk_auth_key', userId)
    .single()

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-extrabold text-[#1F2532]" style={{ fontFamily: 'var(--font-heading)' }}>
            Company Profile
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Update your startup&apos;s information. This helps investors and other founders discover you in the directory.
          </p>
        </div>

        <ProfileForm initialData={existingProfile} />
      </div>
    </div>
  )
}
