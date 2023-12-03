import { useSelector } from "react-redux";

export const useWishlist = () => useSelector(state => state?.wishlist); 