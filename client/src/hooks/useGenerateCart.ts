import { useState } from 'react';

export function useGenerateCart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRandomCartNumber = (): number =>
    Math.floor(Math.random() * 20) + 1;

  const generateCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const cartNumber = generateRandomCartNumber();
      const response = await fetch(`https://dummyjson.com/carts/${cartNumber}`);
      if (!response.ok) throw new Error('Failed to fetch cart data');

      const data = await response.json();
      setCart(data);
      localStorage.setItem('cart', JSON.stringify(data));
    } catch (error) {
      console.error('Error generating cart:', error);
      setError(
        'Hubo un error generando el carrito. Por favor intentalo nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return { cart, loading, error, generateCart };
}
