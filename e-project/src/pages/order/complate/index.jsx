import classNames from 'classnames';
import { useCartItems } from '~/stores/cart/hooks'
import { useDiscount } from '~/stores/cart/hooks'

function Complate() {
    const  cartItems  = useCartItems();
    const discountedTotalAmount = useDiscount();

    const DisAmount = `$${discountedTotalAmount}`;
    console.log(cartItems)
    return (
        <>
        <div className=" shadow-custom text-center px-24 py-20 ">
            <h6 className="text-2xl font-normal">Thank you! 🎉</h6>
            <p className="text-4xl font-medium mb-14">Your order has been received</p>
            <div className='relative flex items-center justify-center gap-3'>
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
            <div>
                {DisAmount}
            </div>
        </div>
        </>
    )
}

export default Complate