import { createSlice } from '@reduxjs/toolkit'
import {current } from '@reduxjs/toolkit'
const initialState = {
  cartItems:[],
  countCart:0
 
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
    increaseCartPrice:(state,action)=>{
      if(action.payload===state.cartItems.id){
        state.countCart+=1  
      }
        
    },
    decreaseCartPrice:(state,action)=>{
     state.countCart=0? state.countCart:state.countCart-=1
    }
  },

})

export const { addToCart,increaseCartPrice,decreaseCartPrice } = cartSlice.actions

export default cartSlice.reducer