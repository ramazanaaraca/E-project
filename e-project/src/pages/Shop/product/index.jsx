import { Link, useParams } from "react-router-dom"
import Wrapper from "~/components/wrapper"
import { MdArrowForwardIos } from "react-icons/md";


export default function Product() {

  const { slug } = useParams()

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
        <li className="text-black font-medium">
            { Uppercase(url)}
        </li>
      </ul>
    </Wrapper>
  )
}