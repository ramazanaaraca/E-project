import classNames from "classnames";
import  PropTypes  from "prop-types";
import { FaCheck } from "react-icons/fa6";

function Prograssive({name , number , isActive , isSucces }) {
    return (
        <>
        <div className={classNames("border-b-2  pb-6 w-full " ,
        {
            'border-[#23262F] ' : isActive,
            'border-[#38CB89]' : isSucces 
        }
        )}>
                <div className="flex items-center gap-4">
                    <div className={classNames("w-10 h-10 flex items-center justify-center rounded-full bg-[#B1B5C3] text-white  text-base" , {
                        '!bg-[#23262F] !text-white' : isActive,
                        '!bg-[#38CB89]' : isSucces
                    })}>{isSucces ? <FaCheck /> : number}</div>
                    <p className={classNames("text-base font-medium text-[#B1B5C3]" , {
                        'text-[#23262F]' : isActive,
                        '!text-[#38CB89]' : isSucces
                    })}>{name}</p>
                </div>
        </div>
        </>
    )
}

Prograssive.propTypes = {
    name:PropTypes.string,
    number:PropTypes.string,
    isActive:PropTypes.bool
}

Prograssive.defaultProps = {
    isActive : false,
    isSucces : false
}

export default Prograssive