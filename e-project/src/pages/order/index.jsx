import { Outlet } from "react-router-dom"

function Order() {
    return (
        <>
        <div>Order</div>
        <div><Outlet /></div>
        </>
    )
}

export default Order