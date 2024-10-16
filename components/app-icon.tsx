import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import React from 'react';

type AppIconProps = {
  id: string;
  name: string;
  image: string;
};

export function AppIcon({ id, name, image }: AppIconProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='flex flex-col items-center space-y-2'
    >
      <div className='w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow'>
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className='rounded-2xl'
        />
      </div>
      <span className='text-sm font-medium text-gray-700'>{name}</span>
    </div>
  );
}
