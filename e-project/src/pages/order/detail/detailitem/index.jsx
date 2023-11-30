import  PropTypes  from "prop-types";

function DetailItem({name , plan}) {
    return(
        <div className='flex items-center justify-between py-3 border-t'>
            <span className='text-base font-normal'>{name}</span>
            <div className='text-sm font-semibold'>{plan}</div>     
        </div>
    )
}

DetailItem.propTypes = {
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired
}

export default DetailItem