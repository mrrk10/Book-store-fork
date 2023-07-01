import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
 
}

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart:(state, action) =>{
        state.cartItems=action.payload

    
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer