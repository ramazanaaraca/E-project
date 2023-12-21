import { useLocation } from 'react-router-dom';
import ExList from '~/assets/ex.svg'
import { removeTocard } from '~/stores/cart/actions';
import IncDec from './components/incdec';



function ShopCart({productcard}) {

    const { qty , img, name, price} = productcard;

    const location = useLocation();

    const isOrderPage = location.pathname === '/order/detail';
    const isComplatePage = location.pathname === '/order/complate';

   
    return(
        <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
                <div className='flex flex-col lg:flex-row  gap-2 lg:items-center items-start'>
                    <img src={img} alt="" width={80} height={96}/>
                    <div className='flex flex-col items-start gap-2'>
                        <IncDec
                        qty={qty}
                        isOrderPage={isOrderPage}
                        productcard={productcard}
                        />
                        <span className='inline-block text-sm font-medium'>{name}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-end flex-col gap-2'> 
                <span>${price}</span>
                {!isOrderPage  && <button onClick={() => removeTocard(productcard)}>
                    <img src={ExList} alt="" />
                </button> }
            </div>
        </div>
    )
}

export default ShopCart