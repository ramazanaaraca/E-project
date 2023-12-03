import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "~/layouts/private";
import EmptyRoute from "~/layouts/empty";
import WebLayout from "~/layouts/web";
import Home from "~/pages/Home";
import Shop from "~/pages/Shop";
import LogReg from "~/pages/log-reg";
import Login from "~/pages/log-reg/login";
import Register from "~/pages/log-reg/register";
import Profile from "~/pages/profile";
import Account from "~/pages/profile/account";
import Address from "~/pages/profile/address";
import EditProfile from "~/pages/profile/edit-profile";
import Orders from "~/pages/profile/orders";
import Wishlist from "~/pages/profile/wishlist";
import Order from "~/pages/order";
import Shopping from "~/pages/order/shopping";
import Detail from "~/pages/order/detail";
import Complate from "~/pages/order/complate";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<WebLayout/>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path:'/shop',
                element:<Shop/>,
            },
            {
                path:'/contact',
                element:<Shop/>
            },
            {
                path:'/profile',
                element:<PrivateRoute> <Profile /> </PrivateRoute>,
                children:[
                    {
                        index:true,
                        element:<EditProfile />
                    },
                    {
                        path: 'account',
                        element: <Account />                    
                    },  
                    {
                        path: 'address',
                        element: <Address />                    
                    },
                    {
                        path: 'orders',
                        element: <Orders />                    
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist />                    
                    },
                ]
            },
            {   path : '/order',
                element: <PrivateRoute> <EmptyRoute> <Order /> </EmptyRoute> </PrivateRoute> ,
                children: [
                    {
                        index : true ,
                        element : <Shopping />
                    },
                    {
                        index : true ,
                        path : 'detail',
                        element : <Detail />
                    },
                    {
                        index : true ,
                        path : 'complate',
                        element : <Complate />
                    }
        
                ]
            }   
        ],
            
    },
    {
        element:<LogReg/>,
        children: [
            {
                index : true,
                path : '/login',
                element: <Login />  
            },
            {
                path : '/register',
                element: <Register />  
            },
        ]
    },
    
])

export default routes

