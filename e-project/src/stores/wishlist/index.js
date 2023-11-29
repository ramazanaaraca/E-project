import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    favorites : localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []   
}

const wishlist = createSlice({
    name:'wishlist',
    initialState,
    reducers: {
        _addWishList:(state , action) =>  {
            //Var olup olmadığını kontrol eder
            const existItem = state.favorites?.findIndex(item => item?.id === action.payload?.id)
            
            if(existItem >= 0) {
                const updatedWishlists = state.favorites?.filter((item) => item?.id !== action.payload?.id)

                state.favorites = updatedWishlists;
    
                localStorage.setItem("favorites", JSON.stringify(state.favorites));  
            }
            else {
                state.favorites?.push(action.payload)

                localStorage.setItem('favorites', JSON.stringify(state.favorites))
            }



            
        },
        _removeWishList:(state , action) => {
            const updatedWishlists = state.favorites?.filter((item) => item?.id !== action.payload?.id)

            state.favorites = updatedWishlists;

            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
})


export const {_addWishList , _removeWishList} = wishlist.actions
export default wishlist.reducer