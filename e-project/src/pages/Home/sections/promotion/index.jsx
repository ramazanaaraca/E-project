import Wrapper from "~/components/wrapper"
import Promotionimg from '~/assets/promotion.png'
import Count from "./counts"
import Button from "~/components/button";

function Promotion() {
    return(
    <>
    <div className="mt-[100px] relative bg-promotion flex items-center flex-col lg:flex-row">
        <img src={Promotionimg} alt="" className="lg:w-[50%] w-full"/>
        <Wrapper classname='max-lg:py-10 ' classcon='max-lg:!p-0'>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h5 className="text-base font-bold text-[#377DFF]"> PROMOTION </h5>
                    <div className="text-5xl font-medium ">Hurry up! 40% OFF</div>
                    <p className="text-xl font-normal">Thousands of high tech are waiting for you</p>
                </div>
                <div>
                    <Count />
                </div>
                <div>
                    <Button
                    variant='primary'
                    size='tight'
                    >
                        Shop now
                    </Button>
                </div>
            </div>
        </Wrapper>     
    </div>   
    </>
    )
}

export default Promotion