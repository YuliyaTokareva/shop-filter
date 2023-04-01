import axios from 'axios';
import { dataProducts } from '../productsData';

// export const getProducts = async () => {
//   try {
//     const response = await axios.get(`https://dummyjson.com/products`);

//     return response.data.products;
//     return dataProducts;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const getProducts = async () => {
  return dataProducts;
};
