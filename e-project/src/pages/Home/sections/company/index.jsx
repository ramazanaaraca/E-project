import 'swiper/css';
import { COMPANY } from '~/fake-api/company';
import Wrapper from '~/components/wrapper';
import Slider from '~/components/slider';

function Company() {
    return (
        <>
            <Wrapper>
                <div className='py-10'>
                    <Slider
                    slidesPerView='6'
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                          },
                          480: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          1024: {
                            slidesPerView: 6,
                          },
                        
                    }}
                    items={COMPANY}
                    render={item => <img src={item.img} alt="" />}
                     />
                    
                </div>
            </Wrapper>
        </>
    )
}

export default Company