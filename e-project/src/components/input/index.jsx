import { ErrorMessage, Field } from "formik"
import classname from 'classnames'
import PropTypes from 'prop-types'

function Input({name , err , ...props}) {
    return(
    <>
    <label>
       
        <Field
         name={name}
         {...props}
         className={classname('w-full text-base placeholder:text-base placeholder:text-[#6C7275] outline-none pb-2 border-b border-[#E8ECEF]' , 
            
         ) }     
        />
        <ErrorMessage name={name} component='small' className="text-sm text-red-500 font-medium"/>
    </label>
    
    </>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    props: PropTypes.object
  }

export default Input