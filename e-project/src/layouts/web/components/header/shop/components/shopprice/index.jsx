import Button from '~/components/button'
import { Link } from 'react-router-dom'
import { calcTotalAmount } from '~/stores/cart/actions'
import { useEffect } from 'react'
import { useCartTotalAmount } from '~/stores/cart/hooks'
import { useCartSubAmount } from '~/stores/cart/hooks'
import { calcSubAmount } from '~/stores/cart/actions'
import { useCartItems } from '~/stores/cart/hooks'
import  PropTypes  from "prop-types";
import { useDiscount } from '~/stores/cart/hooks'
import { calcDiscountedTotalAmount } from '~/stores/cart/actions'
import { usePlan } from '~/stores/cart/hooks'

function ShopPrice({onclick , path , shop}) {

    const  cartItems  = useCartItems()
    const  plan = usePlan()
    const  cartTotalAmount  = useCartTotalAmount()
    const  cartSubAmount  = useCartSubAmount()
    const  discountedTotalAmount = useDiscount()
  
    useEffect(() => {
      calcTotalAmount()
      calcSubAmount()
      calcDiscountedTotalAmount()
    }, [cartItems , plan ])
    
    return(
        <div className='flex flex-col items-center gap-4'>
            <div className='w-full'>
                <div className='flex items-center justify-between border-b py-3 text-base font-normal'>
                <span>Subtotal</span>
                <div>${Number(cartSubAmount)}</div>
                </div>
                <div className='flex items-center justify-between py-3 text-base font-medium'>
                <span>Total</span>
                <div>
                ${shop ? Number(cartTotalAmount) : Number(discountedTotalAmount)}
               </div>
                </div>
            </div>
            <Button
            onClick={onclick}
            as={Link}
            to={path}
            size='flex'
            >Checkout</Button>
            <div className='text-center'>
                View Cart
            </div>
        </div>
    )
}

ShopPrice.propTypes = {
    onclick: PropTypes.func,
    path : PropTypes.string
}

ShopPrice.defaultProps = {
    shop: false
}

export default ShopPrice