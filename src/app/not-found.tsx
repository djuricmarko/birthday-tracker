import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Not found</h2>
      <p className="text-gray-600 mb-6">Could not find the requested page</p>
      <Button className="cursor-pointer">
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
