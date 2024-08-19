export interface BaseProduct {
  id: string;
  name: string;
  stock: number;
  rating: number;
}

export interface ProductDetails extends BaseProduct {
  discount: number;
  quantity: number;
  stockReal: number;
  price: number;
}

export interface Products {
  id: string;
  price: number;
  quantity: number;
  discountPercentage: number;
}
