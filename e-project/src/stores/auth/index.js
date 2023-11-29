import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : localStorage.getItem('user')  ? JSON.parse(localStorage.getItem('cartItems')) :  false 
}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers: {
        _setUser: (state , action) =>  {
            state.user = action.payload

            localStorage.setItem('user', JSON.stringify(state.user));

        },
        _removeUser: state => {
            state.user = false 
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    }
})


export const {_removeUser , _setUser } = auth.actions 
export default auth.reducer 