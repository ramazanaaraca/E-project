import classNames from "classnames";
import  PropTypes  from "prop-types";

function DetailItem({name , plan , corner}) {
    return(
        <div className={classNames('flex items-center justify-between py-3' , {
            'border-b' : corner === 'bottom'
        })}>
            <span className='text-base font-normal'>{name}</span>
            <div className='text-sm font-semibold'>{plan}</div>     
        </div>
    )
}

DetailItem.propTypes = {
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    corner : PropTypes.string
}

export default DetailItem