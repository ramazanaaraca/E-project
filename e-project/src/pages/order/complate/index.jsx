import classNames from 'classnames';
import { useCartItems } from '~/stores/cart/hooks'
import { useDiscount } from '~/stores/cart/hooks'
import Button from '~/components/button'
import {Link} from 'react-router-dom'
import { useMethod } from '~/stores/cart/hooks';
import { useOrderStatus } from '~/stores/order/hooks'
import { useOrderDate } from '~/stores/order/hooks'
import { clerAll } from '~/stores/cart/actions'

function Complate() {
    const  cartItems  = useCartItems();
    const discountedTotalAmount = useDiscount();
    const method = useMethod()
    const orderdate = useOrderDate()
    const orderStatus = useOrderStatus()

    const DisAmount = `$${discountedTotalAmount}`;

    
    
    return (
        <>
        <div className=" shadow-custom text-center px-24 py-20 flex flex-col items-center justify-center gap-10">
            <div>
                <h6 className="text-2xl font-normal">Thank you! 🎉</h6>
                <p className="lg:text-4xl text-2xl font-medium text-center">Your order has been received</p>
            </div>
            <div className='relative flex items-center justify-center gap-10'>
                {cartItems.map((item , key) => (
                    <div className='relative inline-block'>
                        <div className={classNames('w-6 h-6 rounded-full text-[10px] flex bg-black text-white items-center justify-center absolute right-0', 
                        {
                        'hidden' : cartItems.length === 0 ,
                        }
                        )}>{item.qty}</div>
                        <img src={item.img} alt="" width={80} height={96} />
                    </div>
                ))}
            </div>
            <div className='max-w-[500px] w-full'>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Total:</div>
                    <div className='text-sm font-semibold'>{DisAmount}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Payment method:</div>
                    <div className='text-sm font-semibold'>{method}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Date:</div>
                    <div className='text-sm font-semibold'>{orderdate}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[#6C7275] font-medium text-base'>Status:</div>
                    <div className='text-sm font-semibold'>{orderStatus}</div>
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