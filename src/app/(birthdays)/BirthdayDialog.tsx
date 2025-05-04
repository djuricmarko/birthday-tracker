'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { AddBirthdayForm } from '~/app/(birthdays)/BirthdayForm';

export function BirthdayDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer flex w-fit">
          <PlusIcon className="h-5 w-5"/>
          Dodaj rođendan
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dodaj rođendan</DialogTitle>
          <DialogDescription>
            Unesite ime i datum rođendana
          </DialogDescription>
        </DialogHeader>
        <AddBirthdayForm/>
      </DialogContent>
    </Dialog>
  );
}
