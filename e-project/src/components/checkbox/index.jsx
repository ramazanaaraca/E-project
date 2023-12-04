import { useField } from "formik"
import { FiCheck } from "react-icons/fi"
import classNames from 'classnames'

const Checkboxx = ({  label , ...props}) => {

  const [field , helpers , meta ] = useField(props); 

  
  return (

    <label  className='flex gap-2 items-center cursor-pointer'>
         <button type="button" 
         onClick={() => {
          meta.setValue(!field.value)
         }}
         className={classNames({
          "w-5 h-5 rounded border flex items-center justify-center transition-all" : true ,
          "bg-gray-600 border-gray-200" : field.value
         })}>
            <FiCheck size={16} className='text-white' />
         </button>
         {label}
    </label>
  )
}

export default Checkboxx