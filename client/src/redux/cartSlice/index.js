import { createSlice } from '@reduxjs/toolkit'
import {current } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
  cartTotalQuantity:0,
  cartTotalAmount:0
 
}

export const cartSlice = createSlice({  
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, actions) =>{
      // console.log(actions.payload)
      // console.log(current(state.cartItems));
    let itemIndex=  state.cartItems.findIndex(item=>item._id===actions.payload._id)
    // console.log('<<<',itemIndex)

    if(itemIndex>=0){
      state.cartItems[itemIndex].cartQuantity +=1;
    }
    else{
      const tempProduct={...actions.payload,cartQuantity:1}
      const newArr = [...current(state.cartItems), tempProduct]
    // console.log(newArr)
          state.cartItems=newArr;
    }
   
     
    },
    removeCart:(state,actions)=>{
    // let currentCartItems=current(state.cartItems)
   let nextCartItem= state.cartItems.filter((items=>items._id!=actions.payload))
   state.cartItems=nextCartItem
    },
    clearCart:(state,actions)=>{
      state.cartItems=[]
    }
   
  },

})

export const { addToCart,removeCart,clearCart } = cartSlice.actions

export default cartSlice.reducer