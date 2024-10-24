import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

  const filePath = path.join(process.cwd(), 'data', 'damagedSystem.json');

  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(response, null, 2), { flag: 'w', encoding: 'utf-8' });
  } catch (error) {
    console.error('Error writing to file:', error);
    return NextResponse.json(
      { error: 'Failed to store damaged system.' },
      { status: 500 }
    );
  }

  return NextResponse.json(response);
}
