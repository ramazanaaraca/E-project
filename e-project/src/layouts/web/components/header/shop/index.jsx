import Shopsvg from '~/assets/shop_bag.svg'
import { Popover , Transition} from '@headlessui/react'
import ShopCart from './components/shopcart'
import { useCartItems } from '~/stores/cart/hooks'
import classNames from 'classnames'
import ShopPrice from './components/shopprice'



function Shop() {

  const  cartItems  = useCartItems()

  return (
    <>
        <Popover>
          <Popover.Button className='outline-none flex gap-0.5 items-center relative'>
              <img src={Shopsvg} alt="shop" width={24} height={24} />
              <div className={classNames('w-4 h-4  rounded-full text-[10px] flex bg-black text-white items-center justify-center absolute -top-1 -right-2', 
                {
                  'hidden' : cartItems.length === 0 ,
                }
              )}>{cartItems.length}</div>
            </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-[99] " />
            <Transition className="fixed z-[999] lg:max-w-[413px] max-w-[330px] w-full bg-white top-0 right-0"
            enter="transition duration-300 ease-out"
            enterFrom="transform  opacity-0"
            enterTo="transform  opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform  opacity-0"
            >
               {({ close }) => (
              <Popover.Panel className='h-[100vh] max-w-[413px]  text-black py-10 px-6 '>
                <div className='flex flex-col h-full gap-4'>
                  <div className='text-xl font-medium'>Cart</div>
                  <div className='flex flex-col overflow-auto shop_scroll pe-2'>
                      {
                         cartItems?.map(productcard => <ShopCart key={productcard?.id} productcard={productcard} />) 
                      }
                  </div>
                  <div className='mt-auto'>
                      <ShopPrice
                      shop={true}
                      path='/order'
                      onclick={() => close()}
                      />
                  </div>
                </div>  
              </Popover.Panel>
               )}
            </Transition>
    </Popover>
    </>
  )
}

export default Shop