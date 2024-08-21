import { Truck, AlertTriangle } from 'lucide-react';

interface QuoteStatusProps {
  quoteStatus: 'success' | 'failure';
}

export function QuoteStatus({ quoteStatus }: QuoteStatusProps) {
  return (
    <div className='mt-6'>
      {quoteStatus === 'success' ? (
        <div className='flex items-center text-green-600'>
          <Truck className='mr-2' />
          <span>Envío Flapp ⚡️ - $3670</span>
        </div>
      ) : (
        <div className='flex items-center text-red-600'>
          <AlertTriangle className='mr-2' />
          <span>{'No hay envíos disponibles :('}</span>
        </div>
      )}
    </div>
  );
}
