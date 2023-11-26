import classNames from 'classnames'
import { Link } from 'react-router-dom'
import  PropTypes  from "prop-types";



function Logo({variant}) {
    return(
        <>
            <Link to='/'>
                <span className={classNames('text-[24px] font-medium', 
                {
                    'text-white' : variant === 'footer',
                    'text-black' : variant === 'header'
                })
            }>3legant.</span>
            </Link>
        </>
    )
}

Logo.propTypes = {
    variant: PropTypes.oneOf(['footer' , 'header'])
}


Logo.defaultProps = {
    variant: 'footer',
}

export default Logo