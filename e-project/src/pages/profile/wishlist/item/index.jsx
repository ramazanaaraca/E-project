import Button from "~/components/button";
import { removeWishList } from "~/stores/wishlist/actions";
import ExList from '~/assets/ex.svg'

function Wish({wishlist}) {

    const { img, name, price } = wishlist;

    return(
        <>
        <div className="flex items-center gap-2 border-b pb-2">
            <div>
                <button onClick={() => removeWishList(wishlist)}>
                    <img src={ExList} alt="ex" width={24} height={24} />
                </button>
            </div>
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-3">
                    <img src={img} alt="" width={60} height={72} />
                    <div className="flex flex-col gap-2">
                        <div className="max-w-[200px] text-xs">{name}</div>
                        <div className="text-xs">Color: Black</div>
                    </div>
                </div>
                <div>
                    <span className="text-sm">{price}</span>
                </div>
                <div>
                    <Button size='small'>Add To Cart</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Wish