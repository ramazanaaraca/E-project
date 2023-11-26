import { Outlet } from "react-router-dom"
import Wrapper from "~/components/wrapper"
import { useAuth } from "~/stores/auth/hooks"
import Avatar from "~/assets/avatar.png"
import Camera from "~/assets/camera.svg"
import { PROFILE_LIST } from "~/utils/consts/profilelink"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { exact } from "prop-types"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function Profile() {

    const user = useAuth()

    return(
        <>
            <Wrapper
            classname='py-20'
            >
                <div >
                    <h6 className="text-center text-5xl font-medium">My Account</h6>
                    <div className="lg:grid lg:grid-cols-3  py-20">
                        <div className="col-span-1">
                            <aside className="bg-[#F3F5F7] px-4 py-10 flex flex-col gap-10 rounded-lg">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <div className="relative">
                                        <img src={Avatar} alt="" className="max-w-18 max-h-18" />
                                        <div className="absolute right-0 -bottom-1">
                                            <label className="bg-black p-1.5 rounded-full border-2 border-white block cursor-pointer">
                                                <img src={Camera} alt="" width={20} height={20}/>
                                                <input type="file" className="hidden"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-xl font-medium">{user.username}</div>
                                </div>
                                <nav>
                                    <ul className="flex flex-col gap-3">
                                        {
                                            PROFILE_LIST.map((list , index) => (
                                                <li  key={index}>
                                                    <NavLink
                                                    onClick={list.onClick}
                                                    end={true}
                                                    to={list.path}
                                                    className={({ isActive }) => classNames("text-black border-transparent block border-b py-2", {
                                                    " !border-black" : isActive   
                                                    })}
                                                    >
                                                    {list.name}
                                                    </NavLink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </aside>
                        </div>
                        <div className="col-span-2 px-16">
                        <div className="mb-10 text-xl font-medium">
                            Your 
                        </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Wrapper>
            
        </>
    )
}

export default Profile