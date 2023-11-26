import { Menu , Transition } from "@headlessui/react"
import classNames from "classnames"
import DownArrow from '~/assets/down_arrow.svg'

function Dropdown({name , children}) {
    return (
        <>
            <Menu >
            {({open}) => (
                <>
                <Menu.Button className='flex items-center'>
                    {name}
                    <img 
                    src={DownArrow} 
                    alt="arrow" 
                    width={18} 
                    height={18}
                    className={classNames({
                        'gap-x-0.5 transition-all duration-300': true,
                        'rotate-180 ' : open === true
                    })} 
                        />
                </Menu.Button>
                <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                <Menu.Items className='absolute flex items-start flex-col gap-y-2 top-full bg-[#1a1a1a] text-white py-1.5 px-2 w-[180px] rounded-md'>
                    {children}
                </Menu.Items>
                </Transition>
                </>
                    )}
            </Menu>
        </>
    )
}

export default Dropdown