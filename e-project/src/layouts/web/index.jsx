import {Outlet} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import PromotionBar from './components/promotion_bar'

function WebLayout() {
    return (
        <>
            <PromotionBar/>
            <Header/>

            <Outlet/>
            
            <Footer/>
        </>
    )
}

export default WebLayout