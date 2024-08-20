import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CheckoutButton: React.FC = () => {
  return (
    <Link href='/checkout'>
      <Button>Finalizar Compra</Button>
    </Link>
  );
};

export default CheckoutButton;
