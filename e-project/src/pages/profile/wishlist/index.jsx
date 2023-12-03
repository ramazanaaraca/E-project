import { useWishlist } from "~/stores/wishlist/hooks"
import Wish from "./item"
import { useAuth } from "../../../stores/auth/hooks"

function Wishlist() {
    const user = useAuth()
    const {favorites} = useWishlist()
    return(
        <>
            
            <table className="w-full text-left">
            <thead className="text-[#6C7275] lg:text-sm text-xs border-b border-[#E8ECEF]">
                <tr>
                    <th className="py-3 font-medium">Product</th>
                    <th className="py-3 font-medium">Price</th>
                    <th className="py-3 font-medium">Action</th>
                </tr>
            </thead>
            <tbody className="w-full">
            {
                user && favorites?.map((wishlist) => {
                    return <tr className="text-[#6C7275] lg:text-sm text-xs border-b border-[#E8ECEF]"><Wish key={wishlist?.id} wishlist={wishlist} /></tr>
                })
            }
            </tbody>
            </table>
        </>
    )
}

export default Wishlist