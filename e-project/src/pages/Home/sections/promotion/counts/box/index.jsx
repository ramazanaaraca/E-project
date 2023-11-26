import  PropTypes  from "prop-types";


function CountBox({children , name}) {
    return(
        <>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center bg-white text-5xl font-medium tracking-[-0.6px]">
                    {children}
                </div>
                <span className="text-sm font-normal">
                    {name}
                </span>
            </div>        
        </>
    )
}

CountBox.propTypes = {
    children : PropTypes.node,
    name : PropTypes.string
}

export default CountBox