import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { createClient } from '@/utils/supabase/middleware'

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isDashboardRoute(req)) {
    await auth.protect()
  }

  // Refresh Supabase session
  const { supabase, supabaseResponse } = createClient(req)
  await supabase.auth.getUser()
  return supabaseResponse
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/(.*)',
    '/(api|trpc)(.*)',
  ],
}

