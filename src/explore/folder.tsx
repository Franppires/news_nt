'use client';

import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface Folder {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Folder({
  title,
  children,
  defaultOpen = false,
}: Folder) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className='flex align-items-center'>
        <span>{title}</span>
        <Collapsible.Trigger>
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className='flex gap-2'>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
