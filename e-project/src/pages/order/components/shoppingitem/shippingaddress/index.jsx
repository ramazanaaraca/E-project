import Input from '~/components/input'


function ShippingAddress() {
    return(
        <div className='flex flex-start flex-col gap-6 py-10 px-6 border-[#CBCBCB] border rounded-md'>
            <h6 className='text-xl font-medium'>Shipping Address</h6>
            <Input
                className='w-full'
                name='streetaddress'
                type='text'
                label='STREET ADDRESS'
                placeholder='Stress Address'
                border='full'
            />
            <Input
                className='w-full'
                name='country'
                type='text'
                label='COUNTRY'
                placeholder='Country'
                border='full'
            />
            <Input
                className='w-full'
                name='city'
                type='text'
                label='TOWN / CITY'
                placeholder='Town / City'
                border='full'
            />
            <div className='flex flex-col lg:flex-row gap-6'>
                <Input
                className='w-full'
                name='state'
                type='text'
                label='STATE'
                placeholder='State'
                border='full'
                />
                <Input
                className='w-full'
                name='zipcode'
                type='text'
                label='ZIP CODE'
                placeholder='Zip Code'
                border='full'
                />
            </div>
        </div>
    )
}

export default ShippingAddress