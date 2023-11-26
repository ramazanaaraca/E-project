import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

import  PropTypes  from "prop-types";

function CollectionItem({collection}) {
    return(
        <>
        <Link to={collection.path} className="relative max-lg:mb-6 block group">
                <div className="absolute p-10 bottom-0 left-0 z-10">
                    <h5 className="text-2xl fontm-medium">{collection.name}</h5>
                    <button className="border-b-2 border-black flex items-center gap-x-2 ">
                    Collection
                    <span className="text-sm"><FaArrowRightLong /></span>
                    </button>
                </div>
                <img src={collection.img} alt="" className="w-full object-cover group-hover:opacity-70 transition-all" />
        </Link>
        </>
    )
}


CollectionItem.proptypes = {
    collection: PropTypes.string
}

export default CollectionItem