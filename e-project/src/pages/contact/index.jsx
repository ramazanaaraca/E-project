import { MdArrowForwardIos } from "react-icons/md"
import {  Link } from "react-router-dom"
import Wrapper from "~/components/wrapper"
import ContactImg from '~/assets/contact.png'
import InfoBox from "~/components/infobox"
import { CONTACT } from "~/utils/consts/contact"
import Google from "../../components/googlemap"
import Input from '~/components/input'
import Button from '~/components/button'
import { Formik , Form } from "formik"

function Contact() {
    return(
        <>
            <Wrapper>
                <div>
                    <ul className="flex items-center gap-4 text-[#605F5F] text-sm pb-10">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <MdArrowForwardIos size={12}/>
                        <li className="text-black font-medium">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="max-w-[760px] text-[#141718]">
                    <h6 className="lg:text-5xl text-4xl font-medium pb-6">We believe in sustainable decor. We’re passionate about life at home.</h6>
                    <p className="text-base font-normal">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
                </div>
                <div className="lg:grid lg:grid-cols-2 py-12">
                    <div className="col-span-1">
                        <img src={ContactImg} alt="contact" width='100%' height='100%' />
                    </div>
                    <div className="col-span-1 bg-[#F3F5F7]">
                        <div className="flex items-start justify-center flex-col h-full lg:ps-14 py-10 lg:pe-5 px-10">
                            <h5 className="lg:text-4xl text-3xl font-medium mb-4">About Us</h5>
                            <p className="text-base font-normal mb-6">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                            Our customer service is always prepared to support you 24/7</p>
                            <Link>Shop Now </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h1 className="lg:text-4xl text-2xl text-center font-medium">Contact Us</h1>
                    <div className="flex lg:flex-row flex-col items-center gap-6">
                        {
                            CONTACT.map((box , index) => <InfoBox item={box} ></InfoBox>)
                        }
                    </div>
                    <div className="lg:grid lg:grid-cols-2 mb-20">
                    <div className="col-span-1">
                        <div className="flex items-start justify-center flex-col h-full lg:pe-10 p-2 py-4">
                            <Formik
                            initialValues={{
                                firstname:'',
                                email:'',
                                message:'',    
                            }}
                            onSubmit={(values) => {
                                console.log(values)
                              }}
                            >
                                <Form className="w-full flex flex-col gap-6">
                                <Input
                                    name='firstname'
                                    type='text'
                                    label='FIRST NAME'
                                    placeholder='First name'
                                    border='full'
                                />
                                <Input
                                    name='email'
                                    type='email'
                                    label='EMAIL ADDRESS'
                                    placeholder='Your Mail'
                                    border='full'
                                />
                                <Input
                                    as='textarea'
                                    name='message'
                                    type='text'
                                    label='MESSAGE'
                                    placeholder='Your message'
                                    border='full'
                                />
                                <Button type='submit'>Send Message</Button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Google/>
                    </div>
                </div>
                </div>

            </Wrapper>
        </>
    )
}

export default Contact