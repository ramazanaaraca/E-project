import Searchsvg from '~/assets/search.svg';
import { Popover, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import Logo from '../logo';
import SearchInput from './searchInput';


function Search() {
  return (
    <>
      <Popover>
        <Popover.Button className='outline-none flex gap-0.5 items-center relative'>
          <img src={Searchsvg} alt='search' width={24} height={24} />
        </Popover.Button>
        <Popover.Overlay className='fixed inset-0 bg-black opacity-30 z-[99] ' />
        <Transition
          className='fixed z-[999] lg:max-w-[413px] max-w-[330px] w-full bg-white top-0 right-0'
          enter='transition duration-300 ease-out'
          enterFrom='transform  opacity-0'
          enterTo='transform  opacity-100'
          leave='transition duration-300 ease-out'
          leaveFrom='transform  opacity-100'
          leaveTo='transform  opacity-0'
        >
          {({ close }) => (
            <Popover.Panel className='h-[100vh] max-w-[413px]  text-black py-10 px-6 '>
              <div className='flex items-center justify-between'>
                <Logo variant='header' />
                <button onClick={close}>
                  <IoClose size={24} />
                </button>
              </div>
              <SearchInput onClick={close}/>              
            </Popover.Panel>
          )}
        </Transition>
      </Popover>
    </>
  );
}

export default Search;
