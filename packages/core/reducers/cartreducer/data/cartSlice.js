
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalCartValue: 0,
  orderItems: [],
  placedOrderData: {},
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.orderItems = state.cart.flatMap((item) =>
        Array(item.quantity).fill(item.id)
      );
    },
    decreaseQuantity(state, action) {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        }
      }
      state.orderItems = state.cart.flatMap((item) =>
        Array(item.quantity).fill(item.id)
      );
    },
    deleteProduct(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateTotalCartValue(state) {
      state.totalCartValue = state.cart.reduce((acc, item) => {
        return acc + item.itemPrice * item.quantity;
      }, 0);
      state.orderItems = state.cart.flatMap((item) =>
        Array(item.quantity).fill(item.id)
      );
    },
    placedOrderData(state, action) {
      state.placedOrderData = action.payload.result;
      state.cart = [];
      state.totalCartValue = 0;
      state.orderItems = [];
    },
  },
});


export const {
  addToCart,
  decreaseQuantity,
  updateTotalCartValue,
  deleteProduct,
  placedOrderData,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cart;

export const selectTotalCartValue = (state) => state.cart.totalCartValue;

export const selectOrderItems = (state) => state.cart.orderItems;

export const selectPlacedOrderData = (state) => state.cart.placedOrderData;

export { cartSlice };
