import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@yygs/api';
import { cartSlice } from '@yygs/cartreducer';

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };