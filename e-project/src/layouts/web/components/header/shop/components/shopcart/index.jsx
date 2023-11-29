import ExList from '~/assets/ex.svg'
import { removeTocard } from '~/stores/cart/actions';


function ShopCart({productcard}) {

    const { qty, img, name, price} = productcard;

    

   
    return(
        <div className="flex items-center justify-between">
            <div>
                <img src={img} alt="" width={80} height={96}/>
                <div className='flex flex-col gap-2 items-start'>
                    <span>{name}</span>
                    <div className='border rounded-md flex items-center gap-2 p-2 '>
                        <button >-</button>
                        <span>{qty}</span>
                        <button >+</button>
                    </div>
                </div>
            </div>
            <div>
                <span>{price}</span>
                <button onClick={() => removeTocard(productcard)}>
                    <img src={ExList} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ShopCart