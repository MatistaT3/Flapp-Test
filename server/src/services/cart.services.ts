import {
  Products,
  ProductDetails,
  BaseProduct,
} from '../models/products.models';
import { fetchProductsFromApi } from './api.services';

export const processCart = async (
  products: Products[]
): Promise<ProductDetails[]> => {
  const productsInStore: BaseProduct[] = await fetchProductsFromApi();

  return products.map((product) => {
    const productInStore = productsInStore.find(
      (storeProduct) => storeProduct.id === product.id
    );

    if (productInStore) {
      return mapProductToProductDetails(product, productInStore);
    } else {
      return mapProductToNotFound(product);
    }
  });
};

export const checkCartAvailability = (
  productDetails: ProductDetails[]
): boolean => {
  return productDetails.every(
    (product) => product.stockReal >= product.quantity
  );
};

const mapProductToProductDetails = (
  product: Products,
  productInStore: BaseProduct
): ProductDetails => {
  return {
    id: product.id,
    name: productInStore.name,
    price: product.price,
    discount: product.discountPercentage,
    quantity: product.quantity,
    stock: productInStore.stock,
    rating: productInStore.rating,
    stockReal: Math.floor(productInStore.stock / productInStore.rating),
  };
};

const mapProductToNotFound = (product: Products): ProductDetails => {
  return {
    id: product.id,
    name: 'Producto no encontrado',
    price: product.price,
    discount: product.discountPercentage,
    quantity: product.quantity,
    stock: 0,
    rating: 0,
    stockReal: 0,
  };
};
