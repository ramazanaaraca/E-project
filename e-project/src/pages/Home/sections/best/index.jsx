import { useEffect, useState } from "react"
import Card from "~/components/card"
import Title from "~/components/title"
import Wrapper from "~/components/wrapper"



function Best() {

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

            </Title>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {
                bestp?.map((item , index) => (
                    <Card item={item} key={index} />
                ))
            }
            </div>
        </Wrapper>
        </>
    )
}

export default Best