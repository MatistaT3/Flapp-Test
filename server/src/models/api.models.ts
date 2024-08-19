import { BaseProduct } from './products.models';

export interface ApiResponse {
  products: BaseProduct[];
  totalPages: number;
}
