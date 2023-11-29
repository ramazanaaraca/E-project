import Wrapper from "~/components/wrapper"
import Breadcumb from "~/components/breadcumb"
import { useLocation } from 'react-router-dom';
import Card from '~/components/Card'
import { BEST } from "~/fake-api/best";
import { LuSettings2 } from "react-icons/lu";
import { CATEGORIES } from "~/fake-api/categories/produt";
import { useEffect, useState } from "react";
  

function Shop() {
    const { pathname } = useLocation();
    const formattedPathname = (pathname.replace(/^\/+/, ''));

   
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);

    const addCategory = (category) => {
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }     
    }

    const removeCategory = (category) => {
        if(selectedCategories.includes(category)){
            console.log(selectedCategories)
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const getCategory = () => {
        setCategories(CATEGORIES)
    }

    const getProducts = () => {
        setProductList(BEST);
        setFilteredProductList([...BEST]);
    }

    useEffect(() => {
        getProducts();
        getCategory();
    }, [])
  

    useEffect(() => {
        if(selectedCategories.length === 0){
            setFilteredProductList(productList);
        } else{
            setFilteredProductList(productList.filter((item)=>(selectedCategories.includes(item.category))));
        }
    }, [selectedCategories, productList])

    return (
        <>
            <Wrapper>
                <div className="flex items-center justify-center flex-col py-[115px] text-center gap-4">
                    <Breadcumb>{formattedPathname}</Breadcumb>
                    <h1 className="text-5xl font-medium">Shop Page</h1>
                    <p className="text-xl font-normal">Let’s design the place you always imagined.</p>
                </div>
            </Wrapper>
            <Wrapper
            classname='pt-14 pb-24'
            >
                <div className="lg:grid lg:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 text-xl font-medium mb-8">
                            <LuSettings2  size={24}/>
                            Filter
                        </div>
                        <aside>
                           <div className="mb-6">
                                <h6 className="text-xl font-medium mb-6">CATEGORIES</h6>
                                <ul className="max-h-[226px] overflow-auto flex flex-col gap-2 text-[#807E7E] items-start">
                                    {categories.map(category => (
                                    <li
                                    className={` border-b  cursor-pointer transition-all duration-300 ${(selectedCategories.includes(category))?' border-black text-black ':'  border-white bg-white text-[#807E7E]'} `}  
                                    onClick={() => {
                                        if(selectedCategories.includes(category)){
                                            removeCategory(category);
                                        } else{
                                            addCategory(category);
                                        }
                                    }} 
                                    >
                                    {category}
                                    </li>
                                    ))}
                                </ul>
                           </div>
                           <div>
                                <h6 className="text-xl font-medium mb-6">PRICE</h6>
                                <ul className="max-h-[226px] overflow-auto flex flex-col gap-2 text-[#807E7E]">
                                    {CATEGORIES.map(category => <li >{category} </li>)}
                                </ul>
                           </div>
                        </aside>
                    </div>
                    <div className="col-span-2">
                    <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-6">
                        {
                        filteredProductList.length === 0 ? (
                            <p className="text-center w-full col-span-3 text-red-600 text-2xl">Warning!: No Matches</p>
                        ) : (
                            filteredProductList.map((item, index) => (
                            <Card item={item} key={index} />
                            ))
                        )
                        }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Shop