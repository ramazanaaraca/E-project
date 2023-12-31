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
      
    cartTotalAmount: localStorage.getItem('cartTotalAmount') ? JSON.parse(localStorage.getItem('cartTotalAmount')) : 0,
    cartSubAmount: localStorage.getItem('cartSubAmount') ? JSON.parse(localStorage.getItem('cartSubAmount')) : 0,
    discountedTotalAmount: localStorage.getItem('discountedTotalAmount') ? JSON.parse(localStorage.getItem('discountedTotalAmount')) : 0,
    plan: localStorage.getItem('plan') ? JSON.parse(localStorage.getItem('plan')) : 'free',
    method: localStorage.getItem('method') ? JSON.parse(localStorage.getItem('method')) : 'credit'    
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

        _setPlan:(state , action) => {
            state.plan = action.payload
            
            localStorage.setItem('plan', JSON.stringify(state.plan)); 
        },

        _setMethod:(state , action) => {
            state.method = action.payload

            localStorage.setItem('method', JSON.stringify(state.method))
        },

        _removeToCard: (state, action) => {
            const updatedCart = state.cartItems?.filter(item => item?.id !== action.payload?.id);
        
            state.cartItems = updatedCart;
        
            
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        },

        _calcTotalAmount: state => {
            state.cartTotalAmount = state.cartItems?.reduce((total, item) => total + (item?.price * item?.qty ), 0)

            localStorage.setItem('cartTotalAmount', JSON.stringify(state.cartTotalAmount));
        },

        _calcDiscountedTotalAmount: (state) => {
            const fifteenPercentMore = state.cartTotalAmount * 1.15;
            const twentyPercentLess = state.cartTotalAmount * 0.79;
      
            if (state.plan === "express") {
              state.discountedTotalAmount = Number(fifteenPercentMore.toFixed(2));
            } else if (state.plan === "pickup") {
              state.discountedTotalAmount = Number(twentyPercentLess.toFixed(2));
            } else {
              state.discountedTotalAmount = state.cartTotalAmount.toFixed(2);
            }
            
            localStorage.setItem('discountedTotalAmount', JSON.stringify(state.discountedTotalAmount));    

        },

        _calcSubAmount: state => {
            state.cartSubAmount = state.cartItems?.reduce((total, item) => {
                const itemPrice = parseFloat(item?.price) || 0;
                return total + itemPrice
            }, 0)

            localStorage.setItem('cartSubAmount', JSON.stringify(state.cartSubAmount));  

        },

        
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
                if(state.cartItems[existCartIndex].qty > 1)
                {state.cartItems[existCartIndex].qty -= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));}
            } 
        },

        _clearAll: state  => {
            state.cartItems = []

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }

        
    }
})

export const {_addToCard , _decrementQty , _incrementQty , _removeToCard , _calcTotalAmount , _calcSubAmount , _setPlan , _calcDiscountedTotalAmount , _setMethod , _clearAll } = productcard.actions
export default productcard.reducer