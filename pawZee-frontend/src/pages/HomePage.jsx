import React from 'react'
import Pets from '../components/HomePageComponents/Pets'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'
import Reviews from '../components/HomePageComponents/Reviews'
import Magazine from '../components/HomePageComponents/Magazine'
import PetFoods from '../components/HomePageComponents/PetFoods'
import Carousel from '../components/HomePageComponents/Carousel'
import HomeContent from '../components/HomePageComponents/HomeContent'
import { lg_md_carousel_data, sm_carousel_data } from '../assets/assets'

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Carousel lg_md_carousel_slides={lg_md_carousel_data} sm_carousel_slides={sm_carousel_data} />
            <HomeContent/>
            <Pets />
            <Magazine/>
            <PetFoods/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default HomePage