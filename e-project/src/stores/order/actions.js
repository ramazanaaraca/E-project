import store from '..'
import { _addOrderHistory , _orderDate , _orderStatus , _orderID } from '.'

export const addOrderHistory = ordered => store.dispatch(_addOrderHistory(ordered))
export const orderDate = date => store.dispatch(_orderDate(date))
export const orderStatus = status => store.dispatch(_orderStatus(status))
export const orderID = ıd => store.dispatch(_orderID(ıd))