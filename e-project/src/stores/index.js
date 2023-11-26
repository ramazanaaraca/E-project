import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import wishlist from "./wishlist";

const store = configureStore({
    reducer : {
      auth,
      wishlist  
    }
})

export default store