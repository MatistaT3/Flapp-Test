import { BaseProduct } from './products.models';

export interface ApiResponse {
  products: BaseProduct[];
  total: number;
  skip: number;
  limit: number;
}
