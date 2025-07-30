// File: src/redux/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = { ...action.payload };
       item.quantity = item.quantity || 1;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (!existing) {
        state.cartItems.push(item);
      } else {
        existing.quantity += item.quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
