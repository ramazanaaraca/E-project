import Input from '~/components/input'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import { BsCreditCardFill } from "react-icons/bs";


function Pay() {

    let [plan, setPlan] = useState('credit')
    
    return(
        <div className='flex flex-start flex-col gap-6 py-10 px-6 border-[#CBCBCB] border rounded-md'>
            <RadioGroup value={plan} onChange={setPlan} className='pb-8 border-b border-[#6C7275]'>
                <RadioGroup.Label>Plan</RadioGroup.Label>
                    <RadioGroup.Option value="credit">
                            {({ checked }) => (
                            <div className={classNames('flex items-center justify-between py-3 px-4  border rounded-md  text-base font-normal mb-4', {
                                'bg-[#F3F5F7] border-[#141718]' : checked
                            })}>
                                <div className='flex items-center gap-3'>
                                    <div className={classNames('inline-block w-5 h-5 border border-[#b0b0b1] rounded-full relative  before:absolute before:h-2.5 before:w-2.5 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-1/2',{
                                        'before:bg-black !border-[#141718]' : checked
                                    })}></div>
                                    <p>Pay by Card Credit</p>
                                </div>
                                <div>{checked && <BsCreditCardFill />}</div>
                            </div>
                            )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="paypal">
                            {({ checked }) => (
                            <div className={classNames('flex items-center justify-between py-3 px-4  border rounded-md  text-base font-normal', {
                                'bg-[#F3F5F7] border-[#141718]' : checked
                            })}>
                                <div className='flex items-center gap-3'>
                                    <div className={classNames('inline-block w-5 h-5 border border-[#b0b0b1] rounded-full relative  before:absolute before:h-2.5 before:w-2.5 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-1/2',{
                                        'before:bg-black !border-[#141718]' : checked
                                    })}></div>
                                    <p>Paypal</p>
                                </div>
                                <div >{checked && <BsCreditCardFill />}</div>
                            </div>
                            )}
                    </RadioGroup.Option>
            </RadioGroup>
            <h6 className='text-xl font-medium'>Shipping Address</h6>
            <Input
                className='w-full'
                name='cardnumber'
                type='text'
                label='CARD NUMBER'
                placeholder='1234 1234 1234'
                border='full'
            />
           
            <div className='flex flex-col lg:flex-row gap-6'>
            <Input
                className='w-full'
                name='expriration'
                type='text'
                label='EXPIRATION DATE'
                placeholder='MM/YY'
                border='full'
            />
                <Input
                className='w-full'
                name='cvc'
                type='text'
                label='CVC'
                placeholder='CVC code'
                border='full'
                />
            </div>
        </div>
    )
}

export default Pay