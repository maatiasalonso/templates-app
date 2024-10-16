'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Edit2, Save, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppWindow from '@/components/app-window';
import { AppIcon } from './app-icon';

type App = {
  id: string;
  name: string;
  image: string; // Changed from icon to image
  route: string;
  position: { x: number; y: number };
};

const initialApps: App[] = [
  {
    id: 'style-strider',
    name: 'Style Strider',
    image: '/images/style-strider/style-strider-icon.jpeg',
    route: '/style-strider',
    position: { x: 20, y: 20 },
  },
  {
    id: 'fit-flow',
    name: 'Fit Flow',
    image: '/images/fit-flow/fit-flow-icon.png',
    route: '/fit-flow',
    position: { x: 120, y: 20 },
  },
  // {
  //   id: 'calendar',
  //   name: 'Calendar',
  //   image: '/images/calendar-icon.png',
  //   route: '/calendar',
  //   position: { x: 220, y: 20 },
  // },
  // {
  //   id: 'notes',
  //   name: 'Notes',
  //   image: '/images/file-text-icon.png',
  //   route: '/notes',
  //   position: { x: 320, y: 20 },
  // },
  // {
  //   id: 'settings',
  //   name: 'Settings',
  //   image: '/images/settings-icon.png',
  //   route: '/settings',
  //   position: { x: 420, y: 20 },
  // },
];

const ICON_SIZE = 80;
const GRID_SIZE = 20;

export default function EnhancedDesktop() {
  const [apps, setApps] = useState<App[]>(initialApps);
  const [editMode, setEditMode] = useState(false);
  const [draggedApp, setDraggedApp] = useState<string | null>(null);
  const [newApp, setNewApp] = useState<Omit<App, 'id' | 'position'>>({
    name: '',
    image: '', // Changed from icon to image
    route: '',
  });
  const desktopRef = useRef<HTMLDivElement>(null);
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  useEffect(() => {
    const savedApps = localStorage.getItem('desktopApps');
    if (savedApps) {
      setApps(JSON.parse(savedApps));
    } else {
      setApps(initialApps);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('desktopApps', JSON.stringify(apps));
  }, [apps]);

  const handleDragStart = (
    appId: string,
    e: React.DragEvent<HTMLDivElement>
  ) => {
    if (editMode) {
      setDraggedApp(appId);
      e.dataTransfer.setDragImage(new Image(), 0, 0);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (editMode && draggedApp && desktopRef.current) {
      const rect = desktopRef.current.getBoundingClientRect();
      const x = Math.round((e.clientX - rect.left) / GRID_SIZE) * GRID_SIZE;
      const y = Math.round((e.clientY - rect.top) / GRID_SIZE) * GRID_SIZE;

      setApps((prevApps) =>
        prevApps.map((app) =>
          app.id === draggedApp ? { ...app, position: { x, y } } : app
        )
      );
    }
  };

  const handleDragEnd = () => {
    setDraggedApp(null);
  };

  const handleDeleteApp = (appId: string) => {
    setApps((prevApps) => prevApps.filter((app) => app.id !== appId));
  };

  const handleAddApp = () => {
    const newId = `app-${Date.now()}`;
    const newPosition = findFreePosition();
    setApps((prevApps) => [
      ...prevApps,
      { ...newApp, id: newId, position: newPosition },
    ]);
    setNewApp({ name: '', image: '', route: '' }); // Changed from icon to image
  };

  const findFreePosition = (): { x: number; y: number } => {
    const occupiedPositions = new Set(
      apps.map((app) => `${app.position.x},${app.position.y}`)
    );
    for (let y = 20; y < window.innerHeight; y += GRID_SIZE) {
      for (let x = 20; x < window.innerWidth; x += GRID_SIZE) {
        if (!occupiedPositions.has(`${x},${y}`)) {
          return { x, y };
        }
      }
    }
    return { x: 20, y: 20 };
  };

  const handleOpenApp = (appId: string) => {
    if (!openWindows.includes(appId)) {
      setOpenWindows([...openWindows, appId]);
    }
  };

  const handleCloseApp = (appId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== appId));
  };

  return (
    <div
      ref={desktopRef}
      className='relative min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 overflow-hidden'
      onDragOver={(e) => e.preventDefault()}
    >
      <Button
        className='absolute top-4 right-4 z-10'
        onClick={() => setEditMode(!editMode)}
        variant='outline'
      >
        {editMode ? (
          <Save className='mr-2 h-4 w-4' />
        ) : (
          <Edit2 className='mr-2 h-4 w-4' />
        )}
        {editMode ? 'Save' : 'Edit'}
      </Button>

      {editMode && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className='absolute top-4 right-32 z-10' variant='outline'>
              <Plus className='mr-2 h-4 w-4' />
              Add App
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New App</DialogTitle>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input
                  id='name'
                  value={newApp.name}
                  onChange={(e) =>
                    setNewApp({ ...newApp, name: e.target.value })
                  }
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='image' className='text-right'>
                  {' '}
                  {/* Changed from icon to image */}
                  Image
                </Label>
                <Input
                  id='image'
                  value={newApp.image} // Changed from icon to image
                  onChange={
                    (e) => setNewApp({ ...newApp, image: e.target.value }) // Changed from icon to image
                  }
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='route' className='text-right'>
                  Route
                </Label>
                <Input
                  id='route'
                  value={newApp.route}
                  onChange={(e) =>
                    setNewApp({ ...newApp, route: e.target.value })
                  }
                  className='col-span-3'
                />
              </div>
            </div>
            <Button onClick={handleAddApp}>Add App</Button>
          </DialogContent>
        </Dialog>
      )}

      {apps.map((app) => (
        <ContextMenu key={app.id}>
          <ContextMenuTrigger>
            <div
              draggable={editMode}
              onDragStart={(e) => handleDragStart(app.id, e)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              onClick={() => handleOpenApp(app.id)}
              style={{
                position: 'absolute',
                left: app.position.x,
                top: app.position.y,
                width: ICON_SIZE,
                height: ICON_SIZE,
                transition: draggedApp === app.id ? 'none' : 'all 0.3s ease',
              }}
            >
              <AppIcon id={app.id} name={app.name} image={app.image} />
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => handleDeleteApp(app.id)}>
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}

      <div className='overflow-hidden'>
        {openWindows.map((appId) => {
          const app = apps.find((a) => a.id === appId);
          if (!app) return null;

          return (
            <AppWindow
              key={app.id}
              title={app.name}
              url={app.route}
              onClose={() => handleCloseApp(app.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
