import Wrapper from "~/components/wrapper"
import Hero from "./sections/hero"
import Company from "./sections/company"
import New from "./sections/new"
import Collection from "./sections/collection"
import Best from "./sections/best"
import Promotion from "./sections/promotion"
import Info from "./sections/info"
import Newsletter from "./sections/newsletter"

function Home() {
    return (
        <>
            
        <Hero />
        <Company /> 
        <New />
        <Collection />
        <Best />
        <Promotion />
        <Info />
        <Newsletter />
            
        </>
    )
}

export default Home