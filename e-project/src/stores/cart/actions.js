import store from '..'
import {_addToCard ,_removeToCard  ,   _decrementQty , _incrementQty, _calcTotalAmount } from '.'

export const addToCard = item => store.dispatch(_addToCard(item));
export const removeTocard = remove => store.dispatch(_removeToCard(remove));
export const decrementQty = () => store.dispatch(_decrementQty());
export const incrementQty = () => store.dispatch(_incrementQty());
export const calcTotalAmount = amount => store.dispatch(_calcTotalAmount(amount));
