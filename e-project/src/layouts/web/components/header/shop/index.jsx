import Shopsvg from '~/assets/shop_bag.svg'
import { Popover , Transition} from '@headlessui/react'

function Shop() {
  return (
    <>
        <Popover>
          <Popover.Button className='block outline-none'><img src={Shopsvg} alt="shop" width={24} height={24} /></Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-[99]" />
            <Transition className="fixed z-[999] max-w-[413px] w-full bg-white top-0 right-0  py-10"
            enter="transition duration-300 ease-out"
            enterFrom="transform  opacity-0"
            enterTo="transform  opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform  opacity-0"
            >
              <Popover.Panel className='h-[100vh] max-w-[413px] text-black  px-6 '>
                Shop
              </Popover.Panel>
            </Transition>
    </Popover>
    </>
  )
}

export default Shop