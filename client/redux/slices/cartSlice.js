import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = {
  products:[],
  cartValue:[],
  isLoggedIn: true,
  token:'',
  user: {}
}

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loggedInUser : (state, action)=>{
      state.token = action.payload;
      if(state.token !== ""){
          state.isLoggedIn = true;
      }
    },
    userData : (state , action)=>{  
        state.user = action.payload    
    },
    addToCart: (state, action) => {
      const { id, title, price, qty, img } = action.payload;
     const existingVal = state.cartValue.find((item)=> item.id===id);
     if(!existingVal){
       state.cartValue.push({ id, title, price, qty, img });
     }        
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.cartValue = state.cartValue.filter((item) => item.id !== cartId);
    },
    clearCart: (state, action) => {
        state.cartValue = [];
    },
    increaseQty: (state, action) =>{
      const cartId = action.payload;
      const val = state.cartValue.find((item)=> item.id===cartId);
      if(val){
          val.qty += 1;
      }
    },
    decreaseQty: (state, action) =>{
      const cartId = action.payload;
      const val = state.cartValue.find((item)=> item.id===cartId);
      if(val && val.qty>1){
          val.qty -= 1;
    }
  },
  productsData: (state, action) => {
    const { id, title, price, qty, img } = action.payload;
    state.products.push({ id, title, price, qty, img })
  }
  },
});

//export the reducers(actions)
export const { loggedInUser, userData, addToCart, removeFromCart, productsData, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
