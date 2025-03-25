import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PATHNAMES } from "@/constants/routes";
import { ACCES_TOKEN } from "@/constants/cookiesKeys";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(ACCES_TOKEN)?.value;
  const { pathname } = req.nextUrl;

  if (pathname === PATHNAMES.HOME) {
    if (token) {
      return NextResponse.redirect(new URL(PATHNAMES.DASHBOARD, req.url));
    } else {
      return NextResponse.redirect(new URL(PATHNAMES.LOGIN, req.url));
    }
  }

  if (pathname === PATHNAMES.DASHBOARD && !token) {
    return NextResponse.redirect(new URL(PATHNAMES.LOGIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [PATHNAMES.HOME],
};
