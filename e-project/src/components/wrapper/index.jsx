import { PropTypes } from "prop-types"

function Wrapper({children , classname , classcon}) {
    return(
    <div className={classname}>
        <div className={`max-container ${classcon}`}>
            {children}    
        </div>
    </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node,
    classname: PropTypes.string, 
    classcon: PropTypes.string, 
}

export default Wrapper