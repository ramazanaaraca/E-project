import Title from "~/components/title"
import Wrapper from "~/components/wrapper"
import CollectionItem from "./collectionitem"
import { COLLECTION } from "~/fake-api/collection"



function Collection() {
    return (
    <>
     <Wrapper>
        <Title />
        <div className="lg:grid lg:grid-cols-2 gap-7">
                <CollectionItem collection={COLLECTION[0]}/>
            <div className="flex flex-col justify-between gap-6">
                <CollectionItem collection={COLLECTION[1]}/>
                <CollectionItem collection={COLLECTION[2]}/>
            </div>
        </div>    
    </Wrapper>   
    </>
    )
}

export default Collection