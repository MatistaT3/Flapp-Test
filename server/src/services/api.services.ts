import axios from 'axios';
import { BaseProduct } from '../models/products.models';
import { ApiResponse } from '../models/api.models';

const DUMMY_API_URL = 'https://dummyjson.com/products';

export const fetchProductsFromApi = async (): Promise<BaseProduct[]> => {
  try {
    let productsInStore: BaseProduct[] = [];
    let page = 1;
    let limit = 10;

    const { data } = await axios.get<ApiResponse>(
      `${DUMMY_API_URL}?skip=0&limit=${limit}`
    );

    const totalProducts = data.total;
    const totalPages = Math.ceil(totalProducts / limit);

    productsInStore.push(...data.products);

    while (page < totalPages) {
      page++;
      const { data } = await axios.get<ApiResponse>(
        `${DUMMY_API_URL}?skip=${(page - 1) * limit}&limit=${limit}`
      );
      productsInStore.push(...data.products);
    }

    return productsInStore;
  } catch (error) {
    console.error('Error fetching products from API:', error);
    throw new Error('Unable to fetch products from API');
  }
};
