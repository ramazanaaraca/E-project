import { useWishlist } from "~/stores/wishlist/hooks"
import Wish from "./item"

function Wishlist() {
    const {favorites} = useWishlist()
    return(
        <>
            
            <ul className="flex items-center justify-between border-b pb-2 ">
                <li className="">Product</li>
                <li className="">Price</li>
                <li className="">Action</li>
            </ul>
            <div className="flex flex-col gap-3 py-6">
            {
                favorites?.map((wishlist) => {
                    return <Wish key={wishlist?.id} wishlist={wishlist} />
                })
            }
            </div>
        </>
    )
}

export default Wishlist