import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* ---------- RULE 1: "/" → "/www/Home" ---------- */
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/www/Home", request.url));
  }

  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
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
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  /* ---------- RULE 2 + 3: Protect admin routes ---------- */
  if (pathname.startsWith("/admin-site")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  /* ---------- Optional safety: logged-in user shouldn't see login ---------- */
  if (pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/admin-site", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/admin-site/:path*", "/login"],
};
