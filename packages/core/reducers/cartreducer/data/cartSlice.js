import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('State är: ', state);
      console.log('Action är: ', action);
      state.push(action.payload);
    },
    increaseQuantity(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      product.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      if (product.quantity === 1) {
        return state.filter((product) => product.id !== action.payload.id);
      }
      product.quantity -= 1;
    },
    deleteProduct(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
