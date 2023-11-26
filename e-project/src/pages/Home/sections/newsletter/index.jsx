import Wrapper from "~/components/wrapper"
import Email from '~/assets/email.svg'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { emailSchema } from "~/validations"

 
function Newsletter() {
    return(
    <>
        <Wrapper
        classname='bg-newsletter bg-no-repeat bg-cover bg-center'
        >
            <div className="flex flex-col items-center justify-center h-[360px] gap-8 text-center">
                <div>
                    <h6 className="lg:text-4xl text-3xl font-medium mb-2">Join Our Newsletter</h6>
                    <p className="lg:text-lg text-base font-normal ">Sign up for deals, new products and promotions</p>
                </div>
                <Formik
                validationSchema={emailSchema}
                initialValues={{
                    email:''
                }}

                onSubmit={values => {
                    console.log(values)
                }}

                >
                    <Form className="flex flex-col gap-2 max-w-[488px] w-full ">
                        <div className="flex items-center  justify-between border-b border-[#6C7275]">
                            <div className="flex items-center gap-2 flex-1">
                                <img src={Email} alt="" width={24} height={24} />
                                <Field
                                name='email'
                                type='email'
                                className='!bg-transparent py-2 px-2 outline-none placeholder:text-[#6C7275] flex-1 inline-block'
                                placeholder='Email address'
                                />
                            </div>
                            <button type="submit" className="text-base text-[#6C7275] font-medium">Signup</button>
                        </div>
                        <ErrorMessage name='email' component='small' className="text-sm text-red-500 font-medium"/>
                    </Form>
                </Formik>
            </div>
        </Wrapper>
    </>
    )
}

export default Newsletter