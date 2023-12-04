import { Popover , Transition } from "@headlessui/react"
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../logo";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import {PRODUCT_LINK } from "~/utils/consts/menu"
import Shop from "../shop";
import Button from "~/components/button"
import { useAuth } from "~/stores/auth/hooks"
import User from "../user";
import SearchInput from "../search/searchInput";

function Menu() {
    const user = useAuth()
    return(
        <>
        <Popover>
          <Popover.Button className='outline-none flex gap-0.5 items-center relative'>
            <BiMenuAltLeft className="lg:hidden block cursor-pointer" size={24}  />
            </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-[99] " />
            <Transition className="fixed z-[999] lg:max-w-[413px] max-w-[330px] w-full bg-white top-0 right-0"
            enter="transition duration-300 ease-out"
            enterFrom="transform  opacity-0"
            enterTo="transform  opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform  opacity-0"
            >
              {({ close }) => (
              <Popover.Panel className='h-[100vh] max-w-[413px]  text-black py-10 px-6 flex flex-col '>
                <div className='flex items-center justify-between'>
                  <Logo variant='header'/>
                </div>
                <div>
                  <SearchInput />
                </div>
                <div>
                    <ul className="flex flex-col gap-4 mt-6">
                        <li className="border-b pb-4 text-sm border-[#E8ECEF]">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="border-b pb-4 text-sm border-[#E8ECEF]">
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li className="border-b pb-4 text-sm border-[#E8ECEF]">
                        <Dropdown 
                            name='Product'
                            >
                            {
                                PRODUCT_LINK.map((shop , index) => (
                                    <Link
                                    key={index}
                                    to={shop.path}
                                    className="hover:bg-[#FFAB00] transition-colors w-full block rounded py-1 px-1"
                                    >{shop.title}
                                    </Link>
                                ))
                            }
                            </Dropdown>
                        </li>
                        <li className="border-b pb-4 text-sm border-[#E8ECEF]">
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto flex flex-col gap-2">
                    <div className="flex items-center justify-between border-b  border-[#E8ECEF] py-2">
                        <span>Cart</span>
                        <Shop />
                    </div>
                    {
                        user 
                        ?
                        <div className="flex items-center justify-between border-b  border-[#E8ECEF] py-2">
                        <span>Profile</span>
                        <User to='/profile' />
                        </div> 
                         : <Button
                        size='flex'
                        as={Link}
                        to='/login'
                        > 
                        Sign In                       
                    </Button>
                    }
                </div>
              </Popover.Panel>
              )}
            </Transition>
        </Popover>
      </>      
    )
}

export default Menu