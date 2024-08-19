import { Request, Response } from 'express';
import { processCart, checkCartAvailability } from '../services/cart.services';
import { Products, ProductDetails } from '../models/products.models';

export const addToCart = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { products }: { products: Products[] } = req.body;

  try {
    const productsDetails: ProductDetails[] = await processCart(products);

    logCartDetails(productsDetails);

    const canReceiveCart = checkCartAvailability(productsDetails);

    if (!canReceiveCart) {
      return res.status(400).json({
        message: 'No hay suficiente stock para completar la compra',
        response: { canReceiveCart },
      });
    }

    return res.status(200).json({
      message: 'Productos recibidos correctamente',
      response: { canReceiveCart },
    });
  } catch (error) {
    console.error('Error processing cart:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const logCartDetails = (productsDetails: ProductDetails[]): void => {
  console.log('Detalles del carrito recibido:');
  productsDetails.forEach(
    ({ id, name, price, discount, quantity, stock, rating, stockReal }) => {
      console.log(`
      ID: ${id}
      Nombre: ${name}
      Precio por unidad: ${price}
      Descuento total: ${discount}
      Cantidad solicitada: ${quantity}
      Stock obtenido: ${stock}
      Rating: ${rating}
      Stock real: ${stockReal}
    `);
    }
  );
};
