import { removeUser } from "~/stores/auth/actions";

export const PROFILE_LIST = [
    {
      path:'/profile',
      name:'Account',
      
    },
    {
        path:'/profile/address',
        name:'Address'
    },
    {
        path:'/profile/orders',
        name:'Orders'
    },
    {
        path:'/profile/wishlist',
        name:'Wishlist'
    },
    {
        onClick: () => removeUser(), //logout işlemi
        path:'/',
        name:'Log Out'
    },
    
  ]