import { useSelector } from "react-redux";

export const useCartItems = () => useSelector(state => state.productcard?.cartItems)
export const useCartTotalAmount = () => useSelector(state => state.productcard?.cartTotalAmount)

