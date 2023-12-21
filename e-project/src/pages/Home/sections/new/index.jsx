import { useEffect, useState } from "react"
import Card from "~/components/card"
import Slider from "~/components/slider"
import Title from "~/components/title"
import Wrapper from "~/components/wrapper"



function New() {
    
    const [bestp , setBest] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/best')
            .then(response => response.json())
            .then(data => setBest(data))
            .catch(error => console.error("Error fetching product:", error));
    }, []);

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
                items={bestp}
                render={item => <Card item={item}/>}
                    />
        </Wrapper>
    </>
    )
}

export default New