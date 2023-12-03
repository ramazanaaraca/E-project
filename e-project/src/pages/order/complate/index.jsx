import classNames from 'classnames';
import { useCartItems } from '~/stores/cart/hooks'
import { useDiscount } from '~/stores/cart/hooks'
import Button from '~/components/button'
import {Link} from 'react-router-dom'
import { useMethod } from '~/stores/cart/hooks';
import { useOrderDate } from '~/stores/order/hooks'
import { clerAll } from '~/stores/cart/actions'
import { useOrderID } from '~/stores/order/hooks';

function Complate() {
    const  cartItems  = useCartItems();
    const discountedTotalAmount = useDiscount();
    const method = useMethod()
    const orderdate = useOrderDate()
    
    const orderident = useOrderID()

    const DisAmount = `$${discountedTotalAmount}`;

    
    
    return (
        <>
        <div className=" shadow-custom text-center lg:px-24 px-6 py-20 flex flex-col items-center justify-center gap-10">
            <div>
                <h6 className="text-2xl font-normal">Thank you! 🎉</h6>
                <p className="lg:text-4xl text-2xl font-medium text-center max-w-[400px]">Your order has been received</p>
            </div>
            <div className='relative flex items-center justify-center gap-10'>
                {cartItems.map((item , key) => (
                    <div className='relative inline-block'>
                        <div className={classNames('w-6 h-6 rounded-full text-[10px] flex bg-black text-white items-center justify-center absolute -top-2    -right-2', 
                        {
                        'hidden' : cartItems.length === 0 ,
                        }
                        )}>{item.qty}</div>
                        <img src={item.img} alt="" width={80} height={96} />
                    </div>
                ))}
            </div>
            <div className='lg:max-w-[350px] max-w-[500px] w-full flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Status:</div>
                    <div className='text-sm font-semibold'>#{orderident}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Date:</div>
                    <div className='text-sm font-semibold'>{orderdate}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Total:</div>
                    <div className='text-sm font-semibold'>{DisAmount}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Payment method:</div>
                    <div className='text-sm font-semibold'>{method}</div>
                </div>
            </div>
            <Button
            onClick={() => clerAll()}
            as={Link}
            to='/profile/orders'
            corner='full'
            >Purchase history</Button>
            
        </div>
        </>
    )
}

export default Complate