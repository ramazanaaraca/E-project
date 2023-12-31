import classNames from "classnames"
import { createElement } from "react"
import  PropTypes  from "prop-types";

export default function Button({ children , corner , variant , size , as , ...props}) {
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
                'flex items-center justify-center w-full' : size === 'flex',
                '!rounded-full' : corner === 'full'
            }
            ) 
        }, children)
}


Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['primary' , 'secondary']),
    size: PropTypes.oneOf(['normal','full','tight','small' ,'flex']),
    as: PropTypes.oneOfType([PropTypes.object, PropTypes.string ,PropTypes.element ]),
    props: PropTypes.object,
    corner: PropTypes.oneOf(['full']),
}


Button.defaultProps = {
    as: 'button',
    variant: 'primary',
    size: 'normal',
}


