import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import wishlist from "./wishlist";
import productcard from "./cart";

const store = configureStore({
    reducer : {
      auth,
      wishlist,
      productcard 
    }
})

export default store