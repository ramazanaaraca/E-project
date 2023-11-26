import Ticket from '~/assets/free_ticket.svg'
import Arrow from '~/assets/Arrow.svg'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function PromotionBar() {

    const[close , setClose]=useState(false)
    
    return (
        <>
            {!close && 
            <div className='flex items-center justify-center  bg-black text-white py-2 px-4'>
                <div className='flex justify-center items-center gap-x-3 flex-1'>
                    <img src={Ticket} alt="ticket" width={24} height={24} />
                    <p className='font-semibold lg:text-sm text-xs'>30% off storewide — Limited time!</p>
                    <Link
                    to='/' 
                    className='hover:text-[#f5cc7a] hover:border-[#f5cc7a] transition-all font-medium lg:text-sm text-xs flex items-center gap-x-1 text-[#FFAB00] border-b border-[#FFAB00] pb-0.5'>
                    Shop Now 
                    <img src={Arrow} alt="arrow" width={18} height={18}/>
                    </Link>
                </div>
                <div
                onClick={() => setClose(true)} 
                className='ml-auto cursor-pointer text-sm'
                >X</div>
            </div>
            }
        </>
    )
}

export default PromotionBar