import { Link } from "react-router-dom"
import Button from "~/components/button"
import Wrapper from "~/components/wrapper"

function Hero() {
    return(
        <>
            <Wrapper
            classname='hero_img'
            classcon='h-full'
            >
                <div className="flex items-center lg:justify-end justify-center lg:text-start text-center  h-full">
                    <div className="xl:w-[620px] lg:w-[500px] w-full flex lg:items-start items-center flex-col">
                        <h1 className="lg:text-5xl text-4xl xl:text-7xl font-medium lg:max-w-full max-w-[300px] ">Listen to 
                        the <span className="text-[#377DFF]">amazing</span> music sound.</h1>
                        <p className="lg:text-xl text-base font-normal mb-4 mt-2">Experience music like never before</p>
                        <Button
                        as={Link}
                        to='/'
                        > 
                            Shop Now                        
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Hero