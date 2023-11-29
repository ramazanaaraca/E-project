import { Outlet } from "react-router-dom"
import Wrapper from "~/components/wrapper"
import { PROFILE_LIST } from "~/utils/consts/profilelink"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useEffect, useState   } from "react"
import ImgFıle from "../../components/imgfile"


function Profile() {

    const [userData, setUserData] = useState();

    useEffect(() => {
        
        const storedData = localStorage.getItem('user');
    
        
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        }
      }, []);

      

    return(
        <>
            <Wrapper
            classname='py-20'
            >
                <div >
                    <h6 className="text-center lg:text-5xl text-3xl font-medium">My Account</h6>
                    <div className="lg:grid lg:grid-cols-3 py-20">
                        <div className="lg:col-span-1">
                            <aside className="bg-[#F3F5F7] px-4 py-10 flex flex-col gap-10 rounded-lg">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <ImgFıle />
                                    <div className="text-xl font-medium">
                                    {userData ? (
                                        <>
                                        <p>{userData.username}</p>
                                        </>
                                    ) : (
                                        <p>No user data found in localStorage.</p>
                                    )}
                                    </div>
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
                        <div className="lg:col-span-2 lg:px-16 mt-10">
                            <div className="mb-10 text-xl font-medium">
                            Account Details 
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