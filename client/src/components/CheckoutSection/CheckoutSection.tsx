import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
import { QuoteStatus } from './QuoteStatus';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

export function CheckoutSection() {
  const [cart, setCart] = useState<any>(null);
  const [cartList, setCartList] = useState<any>(null);
  const [quoteStatus, setQuoteStatus] = useState<'success' | 'failure' | null>(
    null
  );

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{}');
    setCart(cartData);
  }, []);

  useEffect(() => {
    const cartListData = localStorage.getItem('cart');
    if (cartListData) {
      setCartList(JSON.parse(cartListData).products);
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart(null);
    setCartList(null);
    setQuoteStatus(null);
  };

  const [loading, setLoading] = useState(false);

  const handleQuoteShipping = async () => {
    if (!cart) {
      console.error('No se ha generado un carrito.');
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/api/cart', {
        products: cartList,
      });
      if (response.data.response.canReceiveCart === true) {
        setQuoteStatus('success');
      } else {
        setQuoteStatus('failure');
      }
    } catch (error) {
      console.error('Error al cotizar despacho:', error);
      setQuoteStatus('failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-3xl mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>
          Resumen del carrito
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {cartList ? (
            <>
              {cartList.map((item: any) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Separator className='my-4' />
              <CartTotal total={cart.discountedTotal} />
            </>
          ) : (
            <div className='text-center text-muted-foreground py-8'>
              <ShoppingCart className='mx-auto mb-4 h-12 w-12 text-muted-foreground/50' />
              <p>El carrito está vacío </p>
            </div>
          )}
        </div>
        {quoteStatus && <QuoteStatus quoteStatus={quoteStatus} />}
      </CardContent>
      <CardFooter className='flex flex-col sm:flex-row gap-4'>
        <Button
          onClick={handleQuoteShipping}
          className='w-full sm:w-auto'
          disabled={loading || !cartList}
        >
          Cotizar despacho
        </Button>
        <Link href={'/'}>
          <Button
            onClick={handleClearCart}
            variant='outline'
            className='w-full sm:w-auto'
          >
            Limpiar carrito
          </Button>
        </Link>
        <Link href={'/'}>
          <Button variant='ghost' className='w-full sm:w-auto'>
            <ArrowLeft className='mr-2 h-4 w-4' /> Volver
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
