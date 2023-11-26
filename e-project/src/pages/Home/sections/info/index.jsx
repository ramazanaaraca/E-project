import InfoBox from "~/components/infobox"
import Wrapper from "~/components/wrapper"
import { INFO_LIST } from "~/utils/consts/info"

function Info() {
    return(
    <>
        <Wrapper
        classname='py-12 '
        >
            <div className="flex flex-col lg:flex-row gap-6 items-center ">
                {
                    INFO_LIST.map((item , index) => <InfoBox key={index} item={item} />)
                }
            </div>
        </Wrapper>
    </>
    )
}

export default Info