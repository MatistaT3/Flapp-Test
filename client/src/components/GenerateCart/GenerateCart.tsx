import { useGenerateCart } from '@/hooks/useGenerateCart';
import { Button } from '@/components/ui/button';
import { CheckoutButton } from '@/components/GenerateCart/CheckoutButton';
import Image from 'next/image';
import React, { useEffect } from 'react';

export function GenerateCartSection() {
  const { cart, loading, error, generateCart } = useGenerateCart();

  useEffect(() => {
    if (cart) {
      console.log('Carrito generado:', cart);
    }
  }, [cart]);

  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Bienvenido a Flapp
              </h1>
              <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                Tú comercio de confianza, solo genera un carrito y déjate
                sorprender por nuestros productos
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Button
                onClick={generateCart}
                disabled={loading}
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                {loading ? 'Generando...' : 'Generar Carrito'}
              </Button>
              <CheckoutButton cart={cart} loading={loading} />
            </div>
            {error && <p className='text-sm text-red-500'>{error}</p>}
            {cart && (
              <p className='text-sm text-green-500'>
                ¡Carrito generado con éxito!
              </p>
            )}
          </div>
          <Image
            src='/images/FlappCommerceIA.webp'
            width={550}
            height={550}
            alt='FlappCommerceIA'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square'
          />
        </div>
      </div>
    </section>
  );
}
