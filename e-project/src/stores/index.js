import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import wishlist from "./wishlist";
import productcard from "./cart";
import order from "./order"

const store = configureStore({
    reducer : {
      auth,
      wishlist,
      productcard,
      order
    }
})

export default store