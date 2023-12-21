import Star from '~/assets/black_star.svg'
import { Link} from 'react-router-dom'
import { PropTypes } from "prop-types"
import WishButton from './components/wishbutton'
import AddButton from './components/addbutton'




function Card({item}) {


    
    //console.log('Stored Wishlist:', storedWishlist);
    
    return(
        <>
            <div className='flex flex-col relative gap-y-3 items-start group'>
                <div className='relative inline-block w-full'>
                    <Link to={`/shop/${item.category}/${item.slug}`} className='relative z-[9] block'><img src={item.img} alt={item.name} className='w-full object-cover'  /></Link>
                    <div className='absolute z-1 top-0 p-4 w-full flex flex-col h-full'>
                        <div className='flex items-center justify-between'>
                            <div className='px-4 h-6 lg:text-base text-sm bg-white rounded  font-bold flex items-center shadow-custom relative z-[9]'>{item.sub}</div>
                            <WishButton
                            item={item}
                            />
                        </div> 
                        <div className='mt-auto transition-all relative z-[999] opacity-0 group-hover:opacity-100 duration-300 shadow-custom'>
                            <AddButton 
                            item={item}
                            />
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
                    <div className='text-sm font-semibold'>${item.price}</div>
                </div>
            </div>                
        </>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card