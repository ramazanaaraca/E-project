import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


function Breadcumb({children}) {
    return(
    <>
    <ul className='flex items-center gap-1'>
        <li className='flex items-center gap-1'>
            <Link to='/'>Home</Link>
            <IoIosArrowForward />
        </li>
        <li>{children}</li>
    </ul>    
    </>
    )
}

export default Breadcumb