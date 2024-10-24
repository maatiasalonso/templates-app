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
  const filePath = path.join(process.cwd(), 'data', 'damagedSystem.json');

  try {
    await fs.access(filePath);
  } catch {
    return new NextResponse('File not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData = JSON.parse(data);
  const currentDamagedSystem = parsedData.damaged_system;
  const code =
    damagedSystems[currentDamagedSystem as keyof typeof damagedSystems];
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
    headers: { 'Content-Type': 'text/html' },
  });
}
