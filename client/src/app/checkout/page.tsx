'use client';
import { CheckoutSection } from '@/components/CheckoutSection/CheckoutSection';
import { Header } from '@/components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center min-h-screen'>
        <main className='flex-1'>
          <CheckoutSection />
        </main>
      </div>
    </>
  );
}
