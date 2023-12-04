import Wrapper from "~/components/wrapper"
import Breadcumb from "~/components/breadcumb"
import { useLocation } from 'react-router-dom';
import { BEST } from "~/fake-api/best";
import { LuSettings2 } from "react-icons/lu";
import { CATEGORIES } from "~/fake-api/filter/produt";
import { PRICE } from "~/fake-api/filter/price";
import { useEffect, useState } from "react";
import Newsletter from "../Home/sections/newsletter";
import Card from "../../components/card";
  

function Shop() {
    const { pathname } = useLocation();
    const formattedPathname = (pathname.replace(/^\/+/, ''));

   
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);

    const addCategory = (category) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories(prev => ([...prev, category]));
        }
    }

    const removeCategory = (category) => {
        if (selectedCategories.includes(category)) {
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const addPrice = (price) => {
        if (!selectedPrices.includes(price)) {
            setSelectedPrices(prev => ([...prev, price]));
        }
    }

    const removePrice = (price) => {
        if (selectedPrices.includes(price)) {
            const removedList = selectedPrices.filter((item) => (item !== price));
            setSelectedPrices(removedList);
        }
    }

    const getCategory = () => {
        setCategories(CATEGORIES);
    }

    const getPrice = () => {
        setPrice(PRICE);
    }

    const getProducts = () => {
        setProductList(BEST);
        setFilteredProductList([...BEST]);
    }

    useEffect(() => {
        getPrice();
        getProducts();
        getCategory();
    }, []);

    useEffect(() => {
        let filteredList = [...productList];

        if (selectedCategories.length > 0) {
            filteredList = filteredList.filter((item) => selectedCategories.includes(item.category));
        }

        if (selectedPrices.length > 0) {
            filteredList = filteredList.filter((item) => selectedPrices.includes(item.price));
        }

        setFilteredProductList(filteredList);
    }, [selectedCategories, selectedPrices, productList]);

    
    
    // Diğer kısımlar aynı kaldı.
    const combineTitleSelected = selectedCategories.map((item, index) => {
        const separator = index < selectedCategories.length - 1 ? ' , ' : '';
        return `${item}${separator}`;
    });

    const formattedSelectedCategories = combineTitleSelected.join('');
    //console.log(formattedSelectedCategories);

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
                <div className="lg:grid lg:grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 text-xl font-medium mb-8">
                            <LuSettings2  size={24}/>
                            Filter
                        </div>
                        <aside>
                           <div className="mb-6">
                                <h6 className="text-xl font-medium mb-6">CATEGORIES</h6>
                                <ul className="max-h-[226px] overflow-auto flex flex-col gap-2 text-[#807E7E]  items-start">
                                    {categories.map((category,key) => (
                                    <li
                                    key={key}
                                    className={`border-b  cursor-pointer transition-all duration-300 ${(selectedCategories.includes(category))?' border-black text-black ':'  border-white bg-white text-[#807E7E]'} `}  
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
                                    {price.map((prices , key) => (
                                        <li 
                                        key={key} className="flex items-center justify-between cursor-pointer"
                                        onClick={() => {
                                            if(selectedPrices.includes(prices)){
                                                removePrice(prices);
                                            } else{
                                                addPrice(prices);
                                            }
                                        }} 
                                        >
                                        ${prices}
                                        <button className={`w-6 h-6 rounded-lg border border-black inline-block   ${(selectedPrices.includes(prices))? 'bg-gray-200' :'  '} `}></button>
                                         </li>
                                    ))}
                                </ul>
                           </div>
                        </aside>
                    </div>
                    <div className="col-span-3">
                    <h6 className="mb-6 text-xl font-medium max-lg:mt-6">{combineTitleSelected.length > 0 ? combineTitleSelected : 'All Product'}</h6>   
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
            <Newsletter />
        </>
    )
}

export default Shop