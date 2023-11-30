import store from '..'
import {_addToCard ,_removeToCard  ,   _decrementQty , _incrementQty, _calcTotalAmount , _calcSubAmount } from '.'

export const addToCard = item => store.dispatch(_addToCard(item));
export const removeTocard = remove => store.dispatch(_removeToCard(remove));
export const decrementQty = decrement => store.dispatch(_decrementQty(decrement));
export const incrementQty = increment => store.dispatch(_incrementQty(increment));
export const calcTotalAmount = amount => store.dispatch(_calcTotalAmount(amount));
export const calcSubAmount = sub => store.dispatch(_calcSubAmount(sub));
