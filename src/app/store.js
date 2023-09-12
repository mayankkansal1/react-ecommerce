import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product-list/ProductSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
