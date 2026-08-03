import { NextResponse } from 'next/server';
import { logout } from '@/lib/session';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await logout();
  const url = new URL(request.url);
  return NextResponse.redirect(new URL('/login', url.origin));
}
