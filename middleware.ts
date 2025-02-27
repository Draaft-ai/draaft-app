import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/api/auth-checker"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   // Create a Supabase client configured to use cookies
//   const supabase = createMiddlewareClient<any>({ req, res });

//   // Refresh session if expired - required for Server Components
//   await supabase.auth.getSession();

//   return res;
// }

// // Ensure the middleware is only called for relevant paths.
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };
