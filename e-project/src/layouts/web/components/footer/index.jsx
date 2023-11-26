import Wrapper from "~/components/wrapper"
import Logo from "../header/logo"
import { Link } from "react-router-dom"
import { FOOTER_LINK, FOOTER_SOCIAL, FOOTER_TERM } from "~/utils/consts/footerlink"

function Footer() {
    return (
        <>
           <Wrapper
           classname='bg-black pt-20 pb-8'
           >
            <div className="flex gap-12 flex-col">
                <div className="flex items-center justify-between flex-col lg:flex-row max-lg:gap-5">
                    <div className="flex items-center lg:gap-10 gap-5 flex-col lg:flex-row">
                        <Logo />
                        <div className="lg:w-0.5 lg:h-6 h-0.5 w-6 bg-[#6C7275]"></div>
                        <Link className="text-white font-light" to='/'>Headphone Store</Link>
                    </div>
                    <nav>
                        <ul className="text-white flex items-center gap-10 flex-col lg:flex-row">
                            {
                            FOOTER_LINK.map((link , index) => <li key={index} ><Link to={link.path} className="font-light text-sm">{link.name}</Link></li>)
                            }
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center justify-between border-t border-[#6C7275] py-4 flex-col lg:flex-row max-lg:gap-5">
                    <div className="flex items-center text-white lg:gap-10 gap-5 flex-col lg:flex-row">
                        <p className="text-sm">Copyright © 2023 3legant. All rights reserved</p>
                        <div className=" flex items-center gap-10">
                            {
                            FOOTER_TERM.map((link , index) => <Link to={link.path} key={index} className="font-light text-sm">{link.name}</Link>)
                            }
                        </div>
                    </div>
                    <div className=" flex items-center gap-10 ">
                        {
                        FOOTER_SOCIAL.map((link , index) => <Link to={link.path} key={index}><img src={link.img} alt="" /></Link>)
                        }
                    </div>      
                </div>
            </div>
           </Wrapper> 
        </>
    )
}

export default Footer