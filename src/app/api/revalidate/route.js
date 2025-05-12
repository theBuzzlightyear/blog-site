import { revalidateTag } from 'next/cache';
import {  NextResponse } from 'next/server';

export async function POST(req) {
  const token = req.headers.get('x-revalidate-token');

  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    revalidateTag('blog');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Revalidation error', error: err }, { status: 500 });
  }
}
