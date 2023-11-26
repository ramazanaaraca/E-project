import Card from "~/components/card"
import Slider from "~/components/slider"
import Title from "~/components/title"
import Wrapper from "~/components/wrapper"
import { NEW } from "~/fake-api/new"


function New() {
    return (
    <>
        <Wrapper>
            <Title>
            <div className="swiper-pagination"></div>
            </Title>
            <Slider
                slidesPerView='4'
                
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    991: {
                        slidesPerView: 4,   
                        spaceBetween: 10
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                }}
                items={NEW}
                render={item => <Card item={item}/>}
                    />
        </Wrapper>
    </>
    )
}

export default New