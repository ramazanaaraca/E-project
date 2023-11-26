import Loginimg from '~/assets/login.png'
import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '~/layouts/web/components/header/logo';


function LogReg() {

    const location = useLocation();

    const currentPath = location.pathname;

  useEffect(() => {

    if (currentPath === '/login') {
      console.log('Login sayfası');
    }
    if (currentPath === '/Register') {
      console.log('Register sayfası');
    }
  }, [location.pathname]);

    

    return (
        <div className="lg:grid grid-cols-2 items-center h-[100vh] w-[100%]">
            <div className='relative'>
                <img src={Loginimg} alt="" className="object-cover w-[100%] h-[100vh]"  />
                <div className='absolute top-6  left-1/2 -translate-x-1/2'><Logo variant='header' /></div>
            </div>
            <div className='lg:mx-20 max-lg:py-10 mx-5 max-w-[456px]  flex flex-col  box-content'>
                <h6 className='text-5xl font-medium mb-6'>
                {location.pathname.substring(1).toLocaleUpperCase()}
                </h6>
                <p className='font-base font-normal text-[#6C7275] mb-8'>
                    {location.pathname === '/login' ? 'Don’t have an accout yet?' : 'Already have an account' }   
                    <Link to={location.pathname === '/login' ? '/register' : '/login' }className='text-[#38CB89] ms-1'>
                    {location.pathname.substring(1)  === 'login' ? 'Register' : 'Login'}
                    </Link>
                    </p>
                <Outlet />
            </div>
           
        </div>
    )
}

export default LogReg   