'use client'

import { useState } from 'react'
import { saveCompanyProfile } from './actions'
import { Button } from '@/components/ui/Button'
import { Building2, User, Globe, Tag, FileText, Mail, Linkedin } from 'lucide-react'

export function ProfileForm({ initialData }: { initialData: any }) {
  const [isPending, setIsPending] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setMessage('')
    try {
      await saveCompanyProfile(formData)
      setMessage('Profile updated successfully!')
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded-xl text-sm font-medium ${message.includes('Error') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
          {message}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
          <h2 className="text-lg font-semibold text-[#1F2532] flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
            <Building2 className="w-5 h-5 text-[#2A81C7]" />
            Company Details
          </h2>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
            <input type="text" id="company_name" name="company_name" required defaultValue={initialData?.company_name || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none" placeholder="e.g. Dhaka Founders Inc." />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="website_url" className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5"><Globe className="w-4 h-4 text-slate-400" /> Website URL</label>
              <input type="url" id="website_url" name="website_url" defaultValue={initialData?.website_url || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none" placeholder="https://..." />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5"><Tag className="w-4 h-4 text-slate-400" /> Category</label>
              <select id="category" name="category" defaultValue={initialData?.category || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none bg-white">
                <option value="">Select a category</option>
                <option value="Fintech">Fintech</option>
                <option value="EdTech">EdTech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="E-commerce">E-commerce</option>
                <option value="SaaS">SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-400" /> Description</label>
            <textarea id="description" name="description" rows={4} defaultValue={initialData?.description || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none resize-none" placeholder="Tell us about what you are building..."></textarea>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
          <h2 className="text-lg font-semibold text-[#1F2532] flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
            <User className="w-5 h-5 text-[#2A81C7]" />
            Founder Details
          </h2>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <label htmlFor="founder_name" className="block text-sm font-medium text-slate-700 mb-1">Founder Name *</label>
            <input type="text" id="founder_name" name="founder_name" required defaultValue={initialData?.founder_name || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="founder_email" className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5"><Mail className="w-4 h-4 text-slate-400" /> Email</label>
              <input type="email" id="founder_email" name="founder_email" defaultValue={initialData?.founder_email || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none" placeholder="founder@startup.com" />
            </div>
            <div>
              <label htmlFor="linkedin_url" className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1.5"><Linkedin className="w-4 h-4 text-slate-400" /> LinkedIn URL</label>
              <input type="url" id="linkedin_url" name="linkedin_url" defaultValue={initialData?.linkedin_url || ''} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#2A81C7] focus:ring-2 focus:ring-[#2A81C7]/20 transition-all outline-none" placeholder="https://linkedin.com/in/..." />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" variant="primary" disabled={isPending} className="px-8 py-2.5 shadow-md hover:shadow-lg transition-shadow">
          {isPending ? 'Saving...' : 'Save Profile'}
        </Button>
      </div>
    </form>
  )
}
