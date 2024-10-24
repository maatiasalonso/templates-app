import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse("I'm a teapot", { status: 418 });
}