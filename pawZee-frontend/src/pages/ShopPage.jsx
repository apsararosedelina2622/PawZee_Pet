import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/CommonComponents/NavBar';
import Footer from '../components/CommonComponents/Footer';
import ShopBody from '../components/ShopPageComponents/ShopBody'

const ShopPage = () => {

    let pet_name=useParams(name);
    
    return (
        <>
            <NavBar/>
            <ShopBody pet={pet_name}/>
            <Footer/>
        </>
    )
}

export default ShopPage
