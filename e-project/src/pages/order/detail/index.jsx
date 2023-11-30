import { Form, Formik } from 'formik'
import { useCartItems } from '~/stores/cart/hooks'
import ShippingAddress from '../components/shoppingitem/shippingaddress'
import ContactInfo from '../components/shoppingitem/contactinformation'
import Pay from '../components/shoppingitem/pay'
import { usePlan } from '~/stores/cart/hooks'
import ShopCart from '~/layouts/web/components/header/shop/components/shopcart'
import DetailItem from './detailitem'
import { useDiscount } from '~/stores/cart/hooks'
import { useCartSubAmount } from '~/stores/cart/hooks'
import Button from '../../../components/button'
import { useNavigate } from 'react-router-dom'

function Detail() {
    const navigate = useNavigate();
    const  cartItems  = useCartItems();
    const discountedTotalAmount = useDiscount();
    const cartSubAmount = useCartSubAmount();
    const plan = usePlan();



    const SubAmount = `$${cartSubAmount}`;
    const DisAmount = `$${discountedTotalAmount}`;

    return (
        <>
        <div className="lg:grid lg:grid-cols-3 lg:gap-16" >
            <div className="lg:col-span-2">
            <Formik
            initialValues={{
            firstname:'',
            lastname:'',
            phonenumber:'',
            email:'',
            streetaddress:'',
            country:'',
            city:'',
            state:'',
            zipcode:'',
            expriration:'',
            cardnumber:'',
            cvc:'',
            }}

            onSubmit={(values) => {
                console.log(values)
                navigate('/order/complate')
            }}
            >
                <Form className='flex flex-start flex-col gap-6'>
                    <ContactInfo />
                    <ShippingAddress />
                    <Pay />
                    <Button
                    type='submit'
                    >Place Order</Button>
                </Form>
            </Formik>
            </div>
            <div className="lg:col-span-1">
                <div className='py-4 px-6 border-[#CBCBCB] border rounded-md'>
                    <h6 className='text-base font-medium'>Order summary</h6>
                    
                    {
                        cartItems?.map(productcard => <div className='pt-4'key={productcard?.id}> <ShopCart productcard={productcard} /> </div>) 
                    }
                    
                    <DetailItem 
                    plan={plan}
                    name='Shipping'
                    />
                    <DetailItem 
                    plan={SubAmount}
                    name='Subtotal'
                    />
                    <DetailItem 
                    plan={DisAmount}
                    name='Total'
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail