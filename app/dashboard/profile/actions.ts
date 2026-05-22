'use server'

import { auth } from '@clerk/nextjs/server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function saveCompanyProfile(formData: FormData) {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const rawFormData = {
    clerk_auth_key: userId,
    company_name: formData.get('company_name') as string,
    website_url: formData.get('website_url') as string | null,
    category: formData.get('category') as string | null,
    description: formData.get('description') as string | null,
    founder_name: formData.get('founder_name') as string,
    founder_email: formData.get('founder_email') as string | null,
    linkedin_url: formData.get('linkedin_url') as string | null,
  }

  // Check if profile exists
  const { data: existingProfile } = await supabase
    .from('company_profile')
    .select('id')
    .eq('clerk_auth_key', userId)
    .single()

  let result;

  if (existingProfile) {
    result = await supabase
      .from('company_profile')
      .update({
        company_name: rawFormData.company_name,
        website_url: rawFormData.website_url,
        category: rawFormData.category,
        description: rawFormData.description,
        founder_name: rawFormData.founder_name,
        founder_email: rawFormData.founder_email,
        linkedin_url: rawFormData.linkedin_url,
      })
      .eq('clerk_auth_key', userId)
  } else {
    result = await supabase
      .from('company_profile')
      .insert([rawFormData])
  }

  if (result.error) {
    console.error('Supabase Error:', result.error)
    throw new Error(`Failed to save profile: ${result.error.message}`)
  }

  revalidatePath('/dashboard/profile')
  revalidatePath('/dashboard')
  
  return { success: true }
}
