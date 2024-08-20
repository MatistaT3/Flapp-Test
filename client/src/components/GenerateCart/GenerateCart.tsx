import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function GenerateCartSection() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRandomCartNumber = (): number => {
    return Math.floor(Math.random() * 20) + 1;
  };

  const generateCart = async () => {
    setLoading(true);
    setError(null);

    try {
      const cartNumber = generateRandomCartNumber();
      const response = await fetch(`https://dummyjson.com/carts/${cartNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }

      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error generating cart:', error);
      setError(
        'Hubo un error generando el carrito. Por favor intentalo nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

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
                Tú comercio de confianza, solo genera un carrito y dejate
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

              {cart ? (
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
              )}
            </div>
            {error && <p className='text-sm text-red-500'>{error}</p>}
            {cart && (
              <p className='text-sm text-green-500'>
                Carrito generado con éxito!
              </p>
            )}
          </div>
          <Image
            src='/images/FlappCommerceIA.webp'
            width={550}
            height={550}
            alt={'FlappCommerceIA'}
            className='mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square'
          />
        </div>
      </div>
    </section>
  );
}
