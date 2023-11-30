import Button from "~/components/button";
import { removeWishList } from "~/stores/wishlist/actions";
import ExList from '~/assets/ex.svg'
import { useBreakpoint } from '~/hooks/use-breakpoint';
import  PropTypes  from "prop-types";
import { addToCard } from "../../../../stores/cart/actions";

function Wish({wishlist , item}) {

    const {   img, name, price } = wishlist;

    const { breakpoint } = useBreakpoint();

    const addProduct = (item) => {
        addToCard(item);
    };

    return(
        <>
        <div className="flex items-center gap-2 border-b pb-2">
            <div>
                <button onClick={() => removeWishList(wishlist)}>
                    <img src={ExList} alt="ex" width={24} height={24} />
                </button>
            </div>
            <div className="flex lg:flex-row flex-col lg:items-center justify-between flex-1">
                <div className="flex items-center gap-3">
                    <img src={img} alt="" width={60} height={72} />
                    <div className="flex flex-col gap-2">
                        <div className="max-w-[200px] text-xs">{name}</div>
                        <div className="text-xs">Color: Black</div>
                    </div>
                </div>
                <div>
                    <span className="text-sm">${price}</span>
                </div>
                <div className="">
                    <Button 
                    onClick={() => addProduct(wishlist)}
                    size={breakpoint === 'desktop' ? 'small' : 'full' }  >Add To Cart</Button>
                </div>
            </div>
        </div>
        </>
    )
}

Wish.propTypes = {
    children: PropTypes.array,
}

export default Wish