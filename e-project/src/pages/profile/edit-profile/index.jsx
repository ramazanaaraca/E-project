import { Form, Formik } from 'formik'
import Input from '~/components/input'
import Button from '~/components/button'
function EditProfile() {
    return(
        <div>
            <Formik
            initialValues={{
            firstname:'',
            lastname:'',
            displayname:'',
            email:'',
            oldpassword:'',
            newpassword:'',
            repeatnewpassword:''
            }}

            onSubmit={(values) => {
                console.log(values)
            }}
            >
                <Form className='flex flex-start flex-col gap-10'>
                    <div className='flex flex-start flex-col gap-5'>
                        <Input
                        name='firstname'
                        type='text'
                        label='FIRST NAME'
                        placeholder='First name'
                        border='full'
                        />
                        <Input
                        name='lastname'
                        type='text'
                        label='LAST NAME'
                        placeholder='Last name'
                        border='full'
                        />
                        <Input
                        name='displayname'
                        type='text'
                        label='DISPLAY NAME'
                        placeholder='Display name'
                        border='full'
                        >
                        <small className='mt-3'>This will be how your name will be displayed in the account section and in reviews</small>
                        </Input>
                        
                        <Input
                        name='email'
                        type='email'
                        label='EMAIL'
                        placeholder='Email'
                        border='full'
                        />
                    </div>
                    
                    <div className='flex flex-start flex-col gap-5'>
                        <h6 className='text-xl font-medium'>Password</h6>
                        <Input
                        name='oldpassword'
                        type='text'
                        label='OLD PASSWORD'
                        placeholder='Old password'
                        border='full'
                        />
                        <Input
                        name='newpassword'
                        type='text'
                        label='NEW PASSWORD'
                        placeholder='News password'
                        border='full'
                        />
                        <Input
                        name='repeatnewpassword'
                        type='text'
                        label='REPEAT NEW PASSWORD'
                        placeholder='Repeat new password'
                        border='full'
                        />
                        <div>
                            <Button
                            type='submit'
                            size='tight'
                            >
                                Save changes
                            </Button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default EditProfile