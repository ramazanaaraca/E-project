import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import { useCartItems } from "~/stores/cart/hooks";



export default function EmptyRoute({children}) {
    
            const cartItems = useCartItems()
            const redirect = useNavigate()

            useEffect(() => {
                if (cartItems.length === 0) {
                    alert('your shopping empty')
                    redirect('/', {
                        replace: true
                    })
                }
            }, [cartItems, redirect])

            if (cartItems) {
                return children
            }
        }