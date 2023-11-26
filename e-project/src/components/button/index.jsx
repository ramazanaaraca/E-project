import classNames from "classnames"
import { createElement } from "react"
import  PropTypes  from "prop-types";

export default function Button({ children , variant , size , as , ...props}) {
        return createElement(as , {
            ...props,
            className:classNames('inline-block py-3 font-medium text-sm  text-white rounded-lg transition-all' ,
            {
                'bg-black  bg-black hover:bg-[#1a1a1a]' : variant === 'primary',
                'bg-black hover:bg-[#1a1a1a]' : variant === 'secondery',
                'px-14' : size === 'normal',
                'px-10' : size === 'tight',
                'px-5' : size === 'small',
                'w-full' : size === 'full',
            }
            ) 
        }, children)
}


Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['primary' , 'secondary']),
    size: PropTypes.oneOf(['normal','full','tight','small']),
    as: PropTypes.oneOfType([PropTypes.object, PropTypes.string ,PropTypes.element ]),
    props: PropTypes.object
}


Button.defaultProps = {
    as: 'button',
    variant: 'primary',
    size: 'normal'
}


