import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const LOGIN_PATH = "/admin-auth/login";
const ADMIN_DASHBOARD_PATH = "/admin-site/dashboard";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ---------- RULE 1: "/" → "/www/Home" ---------- */
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/www/Home", request.url));
  }

  const response = NextResponse.next();

  // Support both URI and URL env var names; prefer URI since that's what's in `.env.local`.
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URI ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "Supabase env vars missing. Ensure NEXT_PUBLIC_SUPABASE_URI (or NEXT_PUBLIC_SUPABASE_URL) and NEXT_PUBLIC_SUPABASE_ANON_KEY are set."
    );
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name) {
        return request.cookies.get(name)?.value;
      },
      set(name, value, options) {
        response.cookies.set({ name, value, ...options });
      },
      remove(name, options) {
        response.cookies.set({ name, value: "", ...options });
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  /* ---------- RULE 2 + 3: Protect admin routes ---------- */
  if (pathname.startsWith("/admin-site")) {
    if (!session) {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
  }

  /* ---------- Optional safety: logged-in user shouldn't see login ---------- */
  if (pathname === LOGIN_PATH && session) {
    return NextResponse.redirect(new URL(ADMIN_DASHBOARD_PATH, request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/admin-site/:path*", "/admin-auth/login"],
};
