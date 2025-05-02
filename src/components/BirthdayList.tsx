import { Gift, Trash2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import type { Birthday } from '~/app/page';

type BirthdayProps = {
  birthday: Birthday,
  deleteBirthday: (id: string) => void,
  isLoading: boolean
  formatBirthday: (date: Date | string) => string
}

export default function BirthdayList({ birthday, deleteBirthday, isLoading, formatBirthday }: BirthdayProps) {
  return (
    <li key={birthday.id} className="flex items-center justify-between p-3 rounded-lg border">
      <div className="flex items-center gap-3">
        <Gift className="h-5 w-5 text-pink-500"/>
        <div>
          <p className="font-medium">{birthday.name}</p>
          <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date)}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteBirthday(birthday.id)}
        disabled={isLoading}
      >
        <Trash2 className="h-4 w-4 text-muted-foreground"/>
      </Button>
    </li>
  );
}
