import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "~/layouts/private";
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
    }
])

export default routes

