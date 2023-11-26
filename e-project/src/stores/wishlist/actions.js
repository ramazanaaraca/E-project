import store from "..";
import { _addWishList , _removeWishList } from ".";

export const addWishList = item => store.dispatch(_addWishList(item))
export const removeWishList = item => store.dispatch(_removeWishList(item))