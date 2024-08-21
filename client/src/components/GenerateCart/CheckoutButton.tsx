import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CheckoutButtonProps {
  cart: any;
  loading: boolean;
}

export function CheckoutButton({ cart, loading }: CheckoutButtonProps) {
  return cart ? (
    <Link href='/checkout'>
      <Button
        disabled={loading || !cart}
        className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
      >
        Finalizar Compra
      </Button>
    </Link>
  ) : (
    <Button
      disabled={loading || !cart}
      className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
    >
      Finalizar Compra
    </Button>
  );
}
