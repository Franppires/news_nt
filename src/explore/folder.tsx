'use client' 
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

  const handleContentClick = () => {
    // Fechar o colapso quando o conteúdo for clicado
    setIsOpen(false);
  };

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className='relative'>
        <div className='flex align-items-center hover:underline'>
          <span>{title}</span>
          <Collapsible.Trigger>
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </Collapsible.Trigger>
        </div>
        
        {isOpen && (
          <Collapsible.Content className={`left-0 mt-2 w-full`} onClick={handleContentClick}>
            <div className='flex flex-col'>
              {children}
            </div>
          </Collapsible.Content>
        )}
      </div>
    </Collapsible.Root>
  );
}



