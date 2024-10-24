import { NextResponse } from 'next/server';

const damagedSystems = {
  navigation: 'NAV-01',
  communications: 'COM-02',
  life_support: 'LIFE-03',
  engines: 'ENG-04',
  deflector_shield: 'SHLD-05',
};

export async function GET() {
  const systems = Object.keys(damagedSystems);
  const currentDamagedSystem =
    systems[Math.floor(Math.random() * systems.length)];

  const response = {
    damaged_system: currentDamagedSystem,
  };


  const cookieOptions = {
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    path: '/',
  };

  const res = NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
  res.cookies.set('damaged_system', currentDamagedSystem, cookieOptions);

  return res;
}
