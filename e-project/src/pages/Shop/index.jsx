import Wrapper from "~/components/wrapper"
import Breadcumb from "~/components/breadcumb"
import { useLocation , Link, useParams } from 'react-router-dom';
import { BEST } from "~/fake-api/best";
import { LuSettings2 } from "react-icons/lu";
import { CATEGORIES } from "~/fake-api/filter/produt";
import Newsletter from "../Home/sections/newsletter";
import Card from "../../components/card";
import { useEffect, useState } from "react";
  

function Shop() {
    const [product , setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/best')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("error fetching product:", error))
  }, []);
    // const { category } = useParams();
    // const { pathname } = useLocation();
    // const formattedPathname = (pathname.replace(/^\/+/, ''));

   
    // const [productList, setProductList] = useState([]);
    // const [prices, setPrices] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [selectedCategories, setSelectedCategories] = useState([]);
    // const [filteredProductList, setFilteredProductList] = useState([]);
    // // const [selectedPriceRange , setselectedPriceRange] = useState([])

    // const addCategory = (category) => {
    //     if(!selectedCategories.includes(category)){
    //         setSelectedCategories(prev => ([...prev, category]))
    //     }     
    // }

    // const removeCategory = (category) => {
    //     if(selectedCategories.includes(category)){
    //         //console.log(selectedCategories)
    //         const removedList = selectedCategories.filter((item) => (item !== category));
    //         setSelectedCategories(removedList);
    //     }
    // }
    

    // const getCategory = () => {
    //     setCategories(CATEGORIES)
    // }

    // const getPrice = () => {
    //     setPrices(PRICE)
    // }

    // const getProducts = () => {
        
    //     setProductList(BEST);
    //    // setselectedPriceRange([...BEST])
    //     setFilteredProductList([...BEST]);
    // }

    // useEffect(() => {
    //     getProducts();
    //     getCategory();
    //     getPrice();
    // }, [])
  

    // useEffect(() => {
    //     if(selectedCategories.length === 0){
    //         setFilteredProductList(productList);
    //     } else {
    //         setFilteredProductList(productList.filter((item)=>(selectedCategories.includes(item.category))));
    //         // setselectedPriceRange(productList.filter((item)=>(selectedCategories.includes(item.price))));
    //     } 
       
    // }, [selectedCategories, productList])

    // const combineTitleSelected = selectedCategories.map((item, index) => {
    //     const separator = index < selectedCategories.length - 1 ? ' , ' : ''; 
      
    //     return `${item}${separator}`;
    //   });
      
    //   const formattedSelectedCategories = combineTitleSelected.join('');
    //   //console.log(formattedSelectedCategories);
      

    return (
        <>
            <Wrapper>
                <div className="flex items-center justify-center flex-col py-[115px] text-center gap-4">
                    <Breadcumb></Breadcumb>
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
                                    {CATEGORIES.map((categorys,key) => (
                                    <li
                                    key={key}
                                    >
                                    <Link
                                     className={`border-b  cursor-pointer transition-all duration-300  `}  
                                    >
                                        {categorys.category}
                                    </Link>
                                    </li>
                                    ))}
                                </ul>
                           </div>
                           <div>
                                <h6 className="text-xl font-medium mb-6">PRICE</h6>
                                <ul className="max-h-[226px] overflow-auto flex flex-col gap-2 text-[#807E7E]">
                                    
                                </ul>
                           </div>
                        </aside>
                    </div>
                    <div className="col-span-3">
                    <h6 className="mb-6 text-xl font-medium max-lg:mt-6"></h6>   
                    <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-6">
                        {
                         (
                            product?.map((item, index) => (
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