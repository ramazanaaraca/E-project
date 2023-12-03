import { useSelector } from "react-redux";

export const useOrderHistory = () => useSelector(state => state.order?.orderhistory)
export const useOrderStatus = () => useSelector(state => state.order?.orderstatus)
export const useOrderDate = () => useSelector(state => state.order?.orderdate)
export const useOrderID = () => useSelector(state => state.order?.orderident)

