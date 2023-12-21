import { decrementQty, incrementQty } from '~/stores/cart/actions';
import classNames from "classnames"
import  PropTypes  from "prop-types";

function IncDec({qty , isOrderPage , productcard , variant}) {
    
    return (
        <>
           <div className={classNames('border rounded-md flex items-center p-2' , {
                'gap-6' : variant === 'large',
                'gap-2' : variant === 'normal'
           })}>
                <button onClick={!isOrderPage  ? () => decrementQty(productcard) : null}>-</button>
                <span>{qty}</span>
                <button onClick={!isOrderPage  ? () => incrementQty(productcard) : null}>+</button>
            </div> 
        </>
    )
}

IncDec.propTypes = {
    variant: PropTypes.oneOf(['normal' , 'large']),
}


IncDec.defaultProps = {
    variant: 'normal',
}

export default IncDec