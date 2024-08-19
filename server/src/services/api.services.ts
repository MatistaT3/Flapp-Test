import axios from 'axios';
import { BaseProduct } from '../models/products.models';
import { ApiResponse } from '../models/api.models';

const DUMMY_API_URL = 'https://dummyjson.com/products';

export const fetchProductsFromApi = async (): Promise<BaseProduct[]> => {
  try {
    let productsInStore: BaseProduct[] = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const { data } = await axios.get<ApiResponse>(
        `${DUMMY_API_URL}?page=${page}&limit=100`
      );

      productsInStore = productsInStore.concat(data.products);
      totalPages = data.totalPages;
      page++;
    }

    return productsInStore;
  } catch (error) {
    console.error('Error fetching products from API:', error);
    throw new Error('Unable to fetch products from API');
  }
};
