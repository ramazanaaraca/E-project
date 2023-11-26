import Free from '~/assets/free.svg'
import PropTypes from 'prop-types'

function InfoBox({item}) {
    return(
    <>
    <div className="px-5 py-12 bg-[#F3F5F7] flex flex-col items-center gap-2 w-full">
        <img src={item.img} alt="info" />
        <div className='text-xl font-medium'>{item.title}</div>
        <span className='text-sm font-normal text-[#6C7275]'>{item.rule}</span>
    </div>
    </>
    )
}

InfoBox.propTypes = {
    item: PropTypes.object 
}

export default InfoBox