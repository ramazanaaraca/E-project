import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid';

const initialState = {
    orderhistory: localStorage.getItem('orderhistory') ? JSON.parse(localStorage.getItem('orderhistory')) : [],
    orderstatus: 'preparing',
    orderdate:  null,
    orderident:  null,     
}

const order = createSlice({
    name:'order',
    initialState,
    reducers: {
        _orderDate: state => {

            const today = new Date();
            const month = today.getMonth()+1;
            const year = today.getFullYear();
            const date = today. getDate();
            const currentDate = month + "/" + date + "/" + year;

            state.orderdate =   currentDate
        },

        _orderID: state => {
            
            const sixDigitId = uuidv4().slice(0, 6);
            state.orderident =   sixDigitId

        },

        _addOrderHistory: (state, action) => {
            
            const existingOrderHistory = state.orderhistory || [];
            
            const newOrderHistory = [...existingOrderHistory, ...action.payload ];
           
            state.orderhistory = newOrderHistory;
        
            localStorage.setItem("orderhistory", JSON.stringify(newOrderHistory));
        },

        _orderStatus : (state , action) => {
            state.orderhistory = action.payload
            
        }
    }
})

export const {_addOrderHistory , _orderDate , _orderStatus , _orderID} = order.actions
export default order.reducer