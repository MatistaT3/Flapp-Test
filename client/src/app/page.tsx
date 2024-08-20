'use client';
import { GenerateCartSection } from '@/components/GenerateCart/GenerateCart';
import { Header } from '@/components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-1'>
        <GenerateCartSection />
      </main>
    </>
  );
}
