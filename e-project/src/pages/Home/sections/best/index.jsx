import Card from "~/components/card"
import Title from "~/components/title"
import Wrapper from "~/components/wrapper"
import { BEST } from "~/fake-api/best"

function Best() {
    return (
        <>
        <Wrapper>
            <Title>

            </Title>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {
                BEST.map((item , index) => (
                    <Card item={item} key={index} />
                ))
            }
            </div>
        </Wrapper>
        </>
    )
}

export default Best