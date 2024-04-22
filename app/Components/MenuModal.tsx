'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export default function MenuModal({ isOpen, handleClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className='bg-custom-background'>
        <div className=''>menu items here</div>
      </SheetContent>
    </Sheet>
  );
}
