import { ErrorMessage, Field } from "formik"
import classname from 'classnames'
import PropTypes from 'prop-types'

function Input({name , err , label , variant , border , children, ...props}) {
    return(
    <>
    <label htmlFor={name} {...props}>
       {border === 'full' && <div className="text-[#6C7275] text-xs font-bold mb-3" >{label}*</div>}
        <Field
        id={name}
         name={name}
         {...props}
         className={classname('w-full text-base placeholder:text-base placeholder:text-[#6C7275] outline-none pb-2  border-[#E8ECEF]' , 
            {
                'border px-4 !py-1.5 rounded-md placeholder:text-sm' : border === 'full' ,
                'border-b' : border === 'bottom'
            }
         ) }     
        />
        <ErrorMessage name={name} component='small' className="text-sm text-red-500 font-medium"/>
        {children}
    </label>
    
    </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary' , 'secondary']),
    border: PropTypes.oneOf(['bottom','full']),
    label: PropTypes.string,
    props: PropTypes.object
}

Input.defaultProps = {
    variant: 'primary',
    border: 'bottom'
}

export default Input