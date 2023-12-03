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
import Button from '~/components/button'
import { useNavigate } from 'react-router-dom'
import { orderDate } from '~/stores/order/actions'
import { useOrderStatus } from '~/stores/order/hooks'
import { addOrderHistory } from '~/stores/order/actions'
import { useOrderDate } from '~/stores/order/hooks'
import { orderID } from '~/stores/order/actions'
import { useOrderID } from '~/stores/order/hooks'
import { OrderSchema } from '~/validations/order'



function Detail() {
    const navigate = useNavigate();
    
    const cartItems  = useCartItems();
    const discountedTotalAmount = useDiscount();
    const orderident = useOrderID()
    const cartSubAmount = useCartSubAmount();
    const plan = usePlan();
    const orderdate = useOrderDate();
    const orderstatus = useOrderStatus()

    const SubAmount = `$${cartSubAmount}`;
    const DisAmount = `$${discountedTotalAmount}`;

    return (
        <>
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 flex flex-col gap-4" >
            <div className="lg:col-span-2 max-lg:order-2">
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
            validationSchema={OrderSchema}
            onSubmit={async (values) => {
                try {
                    addOrderHistory([{discountedTotalAmount, cartSubAmount , orderdate, orderstatus , orderident  }]);
                    navigate('/order/complate');
                } catch (error) {
                    console.error('An error occurred:', error);
                }
            }}
            >
                <Form className='flex flex-start flex-col gap-6'>
                    <ContactInfo />
                    <ShippingAddress />
                    <Pay />
                    <Button
                    onClick = {
                        () => {orderID() ,orderDate()}
                    }
                    type='submit'
                    >Place Order</Button>
                </Form>
            </Formik>
            </div>
            <div className="lg:col-span-1 max-lg:order-1">
                <div className='py-4 px-6 border-[#CBCBCB] border rounded-md'>
                    <h6 className='text-base font-medium mb-4 '>Order summary</h6>
                    
                    {
                        cartItems?.map(productcard => <ShopCart key={productcard?.id} productcard={productcard} />) 
                    }
                    
                    <DetailItem 
                    plan={plan}
                    name='Shipping'
                    corner='bottom'
                    />
                    <DetailItem 
                    plan={SubAmount}
                    name='Subtotal'
                    corner='bottom'
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