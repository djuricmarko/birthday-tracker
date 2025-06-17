'use client';

import { useState } from 'react';
import { useToast } from '~/components/context/ToastContext';
import { deleteBirthdayAction } from '~/app/actions';
import { Button } from '~/components/ui/button';
import { LoadingSpinner } from '~/components/ui/spinner';
import { Trash2 } from 'lucide-react';

function DeleteBirthday({ id }: { id: string }) {
  const { showSuccessToast, showErrorToast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete() {
    try {
      setDeletingId(id);
      const result = await deleteBirthdayAction(id);

      if (result.success) {
        showSuccessToast(result.message);
      } else {
        showErrorToast(result.message);
      }
    } catch (error) {
      showErrorToast(`Failed to delete birthday ${error}`);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDelete}
      disabled={deletingId === id}
    >
      {deletingId === id ? <LoadingSpinner/> : (
        <Trash2 className="h-4 w-4 text-muted-foreground"/>
      )}
    </Button>
  );
}

export { DeleteBirthday };
