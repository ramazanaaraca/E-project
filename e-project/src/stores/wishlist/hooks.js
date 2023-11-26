import { useSelector } from "react-redux/es/hooks/useSelector";

export const useWishlist = () => useSelector(state => state?.wishlist); 