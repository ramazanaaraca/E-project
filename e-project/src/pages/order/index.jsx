import Wrapper from "~/components/Wrapper"
import { Outlet, useLocation } from "react-router-dom"
import Prograssive from "./components/prograssive"

function Order() {

    const location = useLocation()
    const isOrderPage = location.pathname === '/order';
    const isDetailPage = location.pathname === '/order/detail';
    const isComplatePage = location.pathname === '/order/complate';

    return (
        <>
        <Wrapper>
            <h6 className=" text-5xl font-medium text-center py-10">Cart</h6>
                <div className="flex items-center gap-8">
                    <Prograssive
                    isActive={isOrderPage && true}
                    isSucces={(isDetailPage || isComplatePage) && true}
                    name='Shopping cart'
                    number='1'
                    ></Prograssive>
                    <Prograssive
                    isSucces={isComplatePage && true}
                    isActive={isDetailPage && true}
                    name='Checkout details'
                    number='2'
                    ></Prograssive>    
                    <Prograssive
                    isActive={isComplatePage && true}
                    name='Order complete'
                    number='3'
                    ></Prograssive>                    
                </div>
        </Wrapper>
        <Wrapper
        classname='py-20'
        >
            <Outlet />
        </Wrapper>
        </>
    )
}

export default Order