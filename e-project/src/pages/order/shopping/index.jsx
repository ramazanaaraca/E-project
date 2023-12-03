import { useCartItems } from '~/stores/cart/hooks'
import ShopCart from '~/layouts/web/components/header/shop/components/shopcart'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import ShopPrice from '~/layouts/web/components/header/shop/components/shopprice'
import { usePlan } from '~/stores/cart/hooks'
import { setPlan } from '~/stores/cart/actions'

function Shopping() {

    const  cartItems  = useCartItems()

    const plan = usePlan();

    return (
        <>
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 flex flex-col gap-3">
            <div className="lg:col-span-2">
            {
                cartItems?.map(productcard => <ShopCart key={productcard?.id} productcard={productcard} />) 
            }
            </div>
            <div className="lg:col-span-1">
                <div className='p-6 border border-[#6C7275] rounded-md'>
                    <RadioGroup value={plan} onChange={setPlan} className='flex flex-col gap-3 mb-4'>
                        <RadioGroup.Label className='text-base font-medium'>Cart summary</RadioGroup.Label>
                        <RadioGroup.Option value="free">
                            {({ checked }) => (
                            <div className={classNames('flex items-center justify-between py-3 px-4  border rounded-md  text-base font-normal', {
                                'bg-[#F3F5F7] border-[#141718]' : checked
                            })}>
                                <div className='flex items-center gap-3'>
                                    <div className={classNames('inline-block w-5 h-5 border border-[#b0b0b1] rounded-full relative  before:absolute before:h-2.5 before:w-2.5 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-1/2',{
                                        'before:bg-black !border-[#141718]' : checked
                                    })}></div>
                                    <p>Free shipping</p>
                                </div>
                                <div >$0.00</div>
                            </div>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="express">
                            {({ checked }) => (
                            <div className={classNames('flex items-center justify-between py-3 px-4  border rounded-md  text-base font-normal', {
                                'bg-[#F3F5F7] border-[#141718]' : checked
                            })}>
                                <div className='flex items-center gap-3'>
                                    <div className={classNames('inline-block w-5 h-5 border border-[#b0b0b1] rounded-full relative  before:absolute before:h-2.5 before:w-2.5 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-1/2',{
                                        'before:bg-black !border-[#141718]' : checked
                                    })}></div>
                                    <p>Express shipping</p>
                                </div>
                                <div >+$15.00</div>
                            </div>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="pickup">
                            {({ checked }) => (
                            <div className={classNames('flex items-center justify-between py-3 px-4  border rounded-md  text-base font-normal', {
                                'bg-[#F3F5F7] border-[#141718]' : checked
                            })}>
                                <div className='flex items-center gap-3'>
                                    <div className={classNames('inline-block w-5 h-5 border border-[#b0b0b1] rounded-full relative  before:absolute before:h-2.5 before:w-2.5 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-1/2',{
                                        'before:bg-black !border-[#141718]' : checked
                                    })}></div>
                                    <p>Pick Up</p>
                                </div>
                                <div >%21.00</div>
                            </div>
                            )}
                        </RadioGroup.Option>
                    </RadioGroup>
                    <ShopPrice
                    path='/order/detail'
                    checked={plan}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Shopping