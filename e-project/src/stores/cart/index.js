import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: (() => {
        try {
          const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
          return Array.isArray(storedCartItems) ? storedCartItems : [];
        } catch (error) {
          console.error('Error parsing cart items from localStorage:', error);
          return [];
        }
      })(),
      
    cartTotalAmount: 0
}

const productcard = createSlice({
    name:'productcard',
    initialState,
    reducers:{

        

        _addToCard:(state , action) => {
                //cart is exist

                const existCartIs = state.cartItems?.findIndex(item => item?.id === action.payload?.id)

                if (existCartIs >= 0)   {

                    state.cartItems[existCartIs].qty += 1;

                }
                else  {

                    if(action.payload.qty > 1) {
                        state.cartItems?.push({ ...action.payload , qty: action.payload.qty})
                    } else {
                        state.cartItems?.push( { ...action.payload , qty: 1})

                        localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
                    }

                }
        },

        _removeToCard: (state, action) => {
            const updatedCart = state.cartItems?.filter(item => item?.id !== action.payload?.id);
        
            state.cartItems = updatedCart;
        
            
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        },

        _calcTotalAmount: state => {
            state.cartTotalAmount = state.cartItems?.reduce((total, item) => total + (item?.price * item?.qty ), 0)
        },

        //Şuan İçin Çalışmıyor Hatanın nedenini anlayamadım
        _incrementQty: (state, action) => { 
            const existCartIndex = state.cartItems?.findIndex(item => item?.id === action.payload?.id);
            if (existCartIndex >= 0) {
                state.cartItems[existCartIndex].qty += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        
        _decrementQty: (state, action) => {
            const existCartIndex = state.cartItems?.findIndex(item => item?.id === action.payload?.id);
            if (existCartIndex >= 0) {
                state.cartItems[existCartIndex].qty -= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            } 
        },
    }
})

export const {_addToCard , _decrementQty , _incrementQty , _removeToCard , _calcTotalAmount } = productcard.actions
export default productcard.reducer