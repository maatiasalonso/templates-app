'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AppWindowProps {
  title: string;
  url: string;
  onClose: () => void;
}

export default function AppWindow({ title, url, onClose }: AppWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 800, height: 600 });
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && windowRef.current) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        setPosition({ x: newX, y: newY });
      } else if (isResizing && windowRef.current) {
        const rect = windowRef.current.getBoundingClientRect();
        const newWidth = resizeDirection.includes('right')
          ? e.clientX - rect.left
          : resizeDirection.includes('left')
          ? rect.right - e.clientX
          : size.width;
        const newHeight = resizeDirection.includes('bottom')
          ? e.clientY - rect.top
          : resizeDirection.includes('top')
          ? rect.bottom - e.clientY
          : size.height;

        // Allow diagonal resizing
        if (
          resizeDirection.includes('right') ||
          resizeDirection.includes('left')
        ) {
          setSize((prevSize) => ({
            width: newWidth,
            height: resizeDirection.includes('bottom')
              ? newHeight
              : prevSize.height,
          }));
        } else if (
          resizeDirection.includes('bottom') ||
          resizeDirection.includes('top')
        ) {
          setSize((prevSize) => ({
            width: resizeDirection.includes('right')
              ? newWidth
              : prevSize.width,
            height: newHeight,
          }));
        } else {
          setSize({ width: newWidth, height: newHeight });
        }

        setPosition((prevPos) => ({
          x: resizeDirection.includes('left') ? e.clientX : prevPos.x,
          y: resizeDirection.includes('top') ? e.clientY : prevPos.y,
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      document.body.style.pointerEvents = 'auto';
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.pointerEvents = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.pointerEvents = 'auto';
    };
  }, [isDragging, isResizing, dragOffset, resizeDirection]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current && !(e.target as HTMLElement).closest('button')) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleResizeMouseDown =
    (direction: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      setResizeDirection(direction);
      setIsResizing(true);
    };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <motion.div
      ref={windowRef}
      className={cn(
        'absolute bg-white rounded-lg shadow-lg overflow-hidden z-50',
        {
          'h-10': isMinimized,
          'w-full h-full left-0 top-0': isMaximized,
        }
      )}
      style={{
        width: isMaximized ? '100%' : `${size.width}px`,
        height: isMaximized ? '100%' : `${size.height}px`,
        left: isMaximized ? 0 : `${position.x}px`,
        top: isMaximized ? 0 : `${position.y}px`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isClosing ? 0 : 1,
        scale: isClosing ? 0.5 : 1,
        width: isMaximized ? '100%' : `${size.width}px`,
        height: isMaximized ? '100%' : `${size.height}px`,
        left: isMaximized ? 0 : `${position.x}px`,
        top: isMaximized ? 0 : `${position.y}px`,
        transition: {
          duration: isDragging || isResizing ? 0.01 : 0.3,
          ease: 'easeInOut',
        },
      }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div
        className='bg-gray-200 p-2 flex justify-between items-center cursor-move'
        onMouseDown={handleMouseDown}
      >
        <div className='font-semibold'>{title}</div>
        <div className='flex space-x-2'>
          <Button size='sm' variant='ghost' onClick={handleMinimize}>
            <Minus className='h-4 w-4' />
          </Button>
          <Button size='sm' variant='ghost' onClick={handleMaximize}>
            <Square className='h-4 w-4' />
          </Button>
          <Button size='sm' variant='ghost' onClick={handleClose}>
            <X className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <div className={`w-full h-full ${isMinimized ? 'hidden' : ''}`}>
        <iframe src={url} className='w-full h-full border-none' />
      </div>
      {!isMaximized && (
        <>
          <div
            className='absolute bottom-0 right-0 w-4 h-4 cursor-se-resize'
            onMouseDown={handleResizeMouseDown('bottom-right')}
          />
          <div
            className='absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize'
            onMouseDown={handleResizeMouseDown('bottom-left')}
          />
          <div
            className='absolute top-0 right-0 w-4 h-4 cursor-ne-resize'
            onMouseDown={handleResizeMouseDown('top-right')}
          />
          <div
            className='absolute top-0 left-0 w-4 h-4 cursor-nw-resize'
            onMouseDown={handleResizeMouseDown('top-left')}
          />
          <div
            className='absolute top-0 left-0 w-full h-4 cursor-ns-resize'
            onMouseDown={handleResizeMouseDown('top')}
          />
          <div
            className='absolute bottom-0 left-0 w-full h-4 cursor-ns-resize'
            onMouseDown={handleResizeMouseDown('bottom')}
          />
          <div
            className='absolute top-0 left-0 w-4 h-full cursor-ew-resize'
            onMouseDown={handleResizeMouseDown('left')}
          />
          <div
            className='absolute top-0 right-0 w-4 h-full cursor-ew-resize'
            onMouseDown={handleResizeMouseDown('right')}
          />
        </>
      )}
    </motion.div>
  );
}
