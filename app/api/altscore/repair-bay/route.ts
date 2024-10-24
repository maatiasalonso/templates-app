import { NextResponse } from 'next/server';

const damagedSystems = {
  navigation: 'NAV-01',
  communications: 'COM-02',
  life_support: 'LIFE-03',
  engines: 'ENG-04',
  deflector_shield: 'SHLD-05',
};

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie');
  const cookies = cookieHeader ? Object.fromEntries(cookieHeader.split('; ').map(cookie => cookie.split('='))) : {};
  const currentDamagedSystem = cookies['damaged_system'];

  if (!currentDamagedSystem) {
    return new NextResponse('No damaged system found in cookies', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const code = damagedSystems[currentDamagedSystem as keyof typeof damagedSystems];
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Repair</title>
</head>
<body>
<div class="anchor-point">${code}</div>
</body>
</html>`;
  return new NextResponse(html, {
    status: 200,
    headers: { 'Cache-Control': 'no-store' },
  });
}
