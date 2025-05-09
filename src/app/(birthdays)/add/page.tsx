import type { Metadata } from 'next';
import Link from 'next/link';
import { AddBirthdayForm } from '~/app/(birthdays)/BirthdayForm';
import { ChevronLeft } from 'lucide-react';
import { Button } from '~/components/ui/button';

export const metadata: Metadata = {
  title: 'Add birthday',
}

function AddBirthdayPage() {
  return (
    <div className="flex flex-col items-center px-5 justify-center gap-10 w-full pt-10">
      <div className="grid w-full max-w-[500px] items-center justify-center relative">
        <Link href="/" prefetch={true} passHref className="flex items-center gap-2 w-20 absolute left-0">
          <Button variant="outline" className="cursor-pointer">
            <ChevronLeft/>
            <span>Back</span>
          </Button>
        </Link>
        <h1>Add birthday</h1>
      </div>
      <div className="grid gap-8 w-full max-w-[500px]">
        <AddBirthdayForm/>
      </div>
    </div>
  );
}

export default AddBirthdayPage;
