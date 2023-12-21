import { Link, useParams } from "react-router-dom"
import Wrapper from "~/components/wrapper"
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import IncDec from "../../../layouts/web/components/header/shop/components/shopcart/components/incdec";
import { useCartItems } from '~/stores/cart/hooks'
import WishButton from "../../../components/card/components/wishbutton";
import AddButton from "../../../components/card/components/addbutton";



export default function Product({item}) {

  const { slug , category } = useParams()
  const [product , setProduct] = useState(null)
  const  cartItems  = useCartItems()

  useEffect(() => {
    fetch('http://localhost:3001/best')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(product => product.slug === slug );
        setProduct(foundProduct);
      })
      .catch(error => console.error("error fetching product:", error))
  }, [slug]);
  
  

  const [id, ...urls] = slug.split('-')
  const url = urls.join('-')

  const Uppercase = (e) => {
    const firstLetter = e.charAt(0);
    return  firstLetter.toUpperCase() + e.slice(1);
  };

  return (
    <Wrapper>
      <ul className="flex items-center gap-4 text-[#605F5F] text-sm">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <MdArrowForwardIos size={12}/>

        <li >
            <Link to='/shop'>Shop</Link>
        </li>
        <MdArrowForwardIos size={12}/>

        <li >
            <Link to='/shop'>{Uppercase(category)}</Link>
        </li>
        <MdArrowForwardIos size={12}/>
        <li className="text-black font-medium">
            { Uppercase(url)}
        </li>
      </ul>
       {
        product && (
          <div className="lg:grid lg:grid-cols-2 gap-16 py-4">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-4 gap-6">
                <img className="col-span-2 w-full" src={product.img} alt="" />
                <img className="col-span-2 w-full"  src={product.img} alt="" />
                <img className="col-span-2 w-full"  src={product.img} alt="" />
                <img className="col-span-2 w-full"  src={product.img} alt="" />
                <img className="col-span-2 w-full"  src={product.img} alt="" />
                <img className="col-span-2 w-full"  src={product.img} alt="" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start gap-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-2">
                    <div className="flex items-center ">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                  <span className="text-sm font-medium">{product.reviews} Reviews</span>
                </div>
                <h1 className="font-medium text-4xl">{product.name}</h1>
                <p className="text-sm font-medium text-[#6C7275]">Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-medium">${product.price}</span>
                  <span className="text-base font-normal text-[#6C7275] line-through">${product.discount}</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 py-4">
                  <div>
                    <div className="text-[#6C7275] text-base font-normal mb-1">Property</div>
                    <span>{product.property}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#6C7275] text-base font-normal mb-2">Choose Color <IoIosArrowForward /></div>
                    <div>Black</div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                      <span className="w-16 h-16"><img className="object-cover" src={product.img} alt="" /></span>
                      <span className="w-16 h-16"><img className="object-cover" src={product.img} alt="" /></span>
                      <span className="w-16 h-16"><img className="object-cover" src={product.img} alt="" /></span>
                  </div>
                  <div className="w-full" >
                    <div className="py-6 flex items-center gap-6">
                      <IncDec
                      qty={product.qty}
                      productcard={cartItems}
                      variant='large' 
                      />
                      <WishButton
                      variant='normal'
                      item={product}
                      />
                    </div>
                    <AddButton
                    item={product}
                    />
                  </div>
              </div>
            </div>
          </div>
        )
       }
    </Wrapper>
  )
}