import Heart from '~/assets/heart.svg'
import HeartWhite from '~/assets/heartwhite.svg'
import classNames from 'classnames'
import { addWishList } from '~/stores/wishlist/actions'
import { useAuth } from '~/stores/auth/hooks'
import { useNavigate } from 'react-router-dom'   
import { useWishlist } from '~/stores/wishlist/hooks'
import  PropTypes  from "prop-types";

function WishButton({item , variant}) {

    const add = (item) => {
        addWishList(item);
        //console.log(favorites)
    };

    const {favorites} = useWishlist()
    
    const navigate = useNavigate();

    const user  = useAuth();

    const checkIfIncludes = () => {
        return favorites.map(item => item.id)
    };

    const storedWishlist = localStorage.getItem('wishlist');

    return(
    <>
        <button onClick={() => user ? add(item) : navigate('/login') }
            className={classNames(' transition-all duration-300 shadow-custom',{
                'bg-black' : user && checkIfIncludes().includes(item.id),
                'bg-white' : !user && checkIfIncludes().includes(item.id),
                'opacity-0 p-1.5 group-hover:opacity-100 relative rounded-full z-[9999]' : variant === 'hover',
                'w-full flex items-center justify-center rounded-lg h-[42px] gap-2 border-[#141718] border' : variant === 'normal'
            })}>
            <img src={ user && checkIfIncludes().includes(item.id) ? HeartWhite : Heart} alt="wishicon" width={20} height={20} />
            {variant === 'normal' && <div
             className={classNames('text-base font-normal',{
                'text-white' : user && checkIfIncludes().includes(item.id),
                'text-black' : !user && checkIfIncludes().includes(item.id),
            })}
             >Wishlist</div>} 
        </button> 
    </>
    )
}

WishButton.propTypes = {
    variant: PropTypes.oneOf(['hover' , 'normal']),
}


WishButton.defaultProps = {
    variant: 'hover',
}

export default WishButton