import { useWishlist } from '../../stores/wishlist/hooks'
import Heart from '~/assets/heart.svg'
import HeartWhite from '~/assets/heartwhite.svg'
import Star from '~/assets/black_star.svg'
import Button from '../button'
import { Link, useNavigate } from 'react-router-dom'
import { PropTypes } from "prop-types"
import { addWishList } from '~/stores/wishlist/actions'
import { addToCard } from '../../stores/cart/actions'
import { useAuth } from '../../stores/auth/hooks'
import classNames from 'classnames'



function Card({item , wishlist }) {

    const {favorites} = useWishlist()
    
    const navigate = useNavigate();

    const user  = useAuth();

    const add = (item) => {
        addWishList(item);
        //console.log(favorites)
    };

    const addProduct = (item) => {
        addToCard(item);
    };

    const checkIfIncludes = () => {
        return favorites.map(item => item.id)
      };
      
      const storedWishlist = localStorage.getItem('wishlist');
      //console.log('Stored Wishlist:', storedWishlist);
    
    return(
        <>
            <div className='flex flex-col gap-y-3 items-start group'>
                <div className='relative inline-block w-full'>
                    <Link to={item.path} className='relative z-[9] block'><img src={item.img} alt="product" className='w-full object-cover'  /></Link>
                    <div className='absolute z-1 top-0 p-4 w-full flex flex-col h-full'>
                        <div className='flex items-center justify-between'>
                            <div className='px-4 h-6 lg:text-base text-sm bg-white rounded  font-bold flex items-center shadow-custom relative z-[9]'>{item.sub}</div>
                            <button onClick={() => user ? add(item) : navigate('/login') }
                                className={classNames('p-1.5 rounded-full relative z-[9999] bg-white transition-all opacity-0 duration-300  group-hover:opacity-100 shadow-custom',{
                                    '!bg-black ' : user && checkIfIncludes().includes(item.id) 
                                })}>
                                <img src={ user && checkIfIncludes().includes(item.id) ? HeartWhite : Heart} alt="wishicon" width={20} height={20} /> 
                            </button> 
                        </div> 
                        <div className='mt-auto transition-all relative z-[999] opacity-0 group-hover:opacity-100 duration-300 shadow-custom'>
                            <Button
                            onClick={() =>  addProduct(item) } 
                            
                            size='full'
                            >
                            Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-1.5'>
                    <div className='flex gap-x-1'>
                        <img src={Star} alt="star" width={16} height={16} />
                        <img src={Star} alt="star" width={16} height={16} />
                        <img src={Star} alt="star" width={16} height={16} />
                    </div>
                    <p className='lg:text-base text-sm font-semibold leading-6'>{item.name}</p>
                    <div className='text-sm font-semibold'>{item.price}</div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card