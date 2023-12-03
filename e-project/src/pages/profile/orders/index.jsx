import { useOrderHistory } from "../../../stores/order/hooks"



function Orders() {

    const orderhistory = useOrderHistory();

    

    return(
        <>
        <table className="w-full text-left">
        <thead className="text-[#6C7275] lg:text-sm text-xs border-b border-[#E8ECEF]" >
            <tr className="">
                <th className="!font-medium py-3">Number ID</th>
                <th className="!font-medium py-3">Dates</th>
                <th className="!font-medium py-3">Status</th>
                <th className="!font-medium py-3">Price</th>
            </tr>
        </thead>
        <tbody className=" w-full">
            {
                orderhistory.map((item , index ) => (
                    <tr key={index} className="lg:text-sm text-xs text-[#141718] border-b border-[#E8ECEF]"> 
                        <td className="py-6">#{item.orderident}</td>
                        <td>{item.orderdate}</td>
                        <td>{item.orderstatus}</td>
                        <td>${item.discountedTotalAmount}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </>
    )
}

export default Orders