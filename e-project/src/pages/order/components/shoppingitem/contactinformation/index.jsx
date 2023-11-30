import Input from '~/components/input'


function ContactInfo() {
    return(
        <div className='flex flex-start flex-col gap-6 py-10 px-6 border-[#CBCBCB] border rounded-md'>
            <h6 className='text-xl font-medium'>Contact Infomation</h6>
            <div className='flex flex-col lg:flex-row gap-6'>
                <Input
                className='w-full'
                name='firstname'
                type='text'
                label='FIRST NAME'
                placeholder='First name'
                border='full'
                />
                <Input
                className='w-full'
                name='lastname'
                type='text'
                label='LAST NAME'
                placeholder='Last name'
                border='full'
                />
            </div>
            <Input
                className='w-full'
                name='phonenumber'
                type='text'
                label='PHONE NUMBER '
                placeholder='Phone number'
                border='full'
            />
            <Input
                className='w-full'
                name='email'
                type='text'
                label='EMAIL ADDRESS'
                placeholder='EMAİL'
                border='full'
            />
        </div>
    )
}

export default ContactInfo