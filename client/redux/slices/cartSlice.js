import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = {
  products: [],
  cartValue: [],
  isLoggedIn: true,
  token: "",
  user: {
    _id: "678e6a45e88a07be726a3257",
    firstName: "Ashab",
    lastName: "Abidi",
    email: "as@g.com",
    password: "$2b$10$4XBmSbaE5fGIJpWRGwct1OBirCg5cmNfL7s9CtK53TYxfzL6QChKe",
    history: [],
    wishlist: [],
    cart: [],
    __v: 0,
  },
  wishlist:[],
};

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      state.token = action.payload;
      if (state.token !== "") {
        state.isLoggedIn = true;
      }
    },
    userData: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      const { id, title, price, qty, img } = action.payload;
      const existingVal = state.cartValue.find((item) => item.id === id);
      if (!existingVal) {
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
    increaseQty: (state, action) => {
      const cartId = action.payload;
      const val = state.cartValue.find((item) => item.id === cartId);
      if (val) {
        val.qty += 1;
      }
    },
    decreaseQty: (state, action) => {
      const cartId = action.payload;
      const val = state.cartValue.find((item) => item.id === cartId);
      if (val && val.qty > 1) {
        val.qty -= 1;
      }
    },
    productsData: (state, action) => {
      const { id, title, price, qty, img } = action.payload;
      state.products.push({ id, title, price, qty, img });
    },
    addToWishlist: (state, action) => {
      const { productId } = action.payload;
      const existingVal = state.wishlist.find((item) => item.id === productId);
      if (!existingVal) {
        state.wishlist.push({ productId });
      }
    },
    removeFromWishlist: (state, action) => {
      const{ productId }= action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== productId);
    },
  },
});

//export the reducers(actions)
export const {
  loggedInUser,
  userData,
  addToCart,
  removeFromCart,
  productsData,
  increaseQty,
  decreaseQty,
  clearCart,
  addToWishlist,
  removeFromWishlist
} = cartSlice.actions;
export default cartSlice.reducer;
