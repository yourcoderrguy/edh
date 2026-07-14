import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // Get the current user session
  const { data: { user } } = await supabase.auth.getUser()

  // 🛡️ STRICT ROUTE PROTECTION
  // If the user tries to access any /admin page (but not the login page itself)
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    // If there is no logged-in user, kick them back to the login screen
    if (!user) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // If the user is logged in, but tries to go to the login page, push them to the dashboard
  if (request.nextUrl.pathname.startsWith('/admin/login') && user) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return response
}

// Add this at the absolute bottom of lib/supabase/middleware.ts

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any image extension (.svg, .png, .jpg, .jpeg, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}