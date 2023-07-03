import { createSlice } from '@reduxjs/toolkit'
import {current } from '@reduxjs/toolkit'
const initialState = {
  cartItems:[]
 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, actions) =>{
      // console.log(state.cartItems)
      // console.log(current(state.cartItems));
  const newArr = [...current(state.cartItems), actions.payload]
// console.log(newArr)
      state.cartItems=newArr;
     
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer