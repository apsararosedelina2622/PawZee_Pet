import React from 'react'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'
import MyOrdersPageBody from '../components/MyOrdersPageComponents/MyOrderPageBody'

const MyOrdersPage = () => {
    return (
        <>
            <NavBar/>
            <MyOrdersPageBody/>
            <Footer/>
        </>
    )
}

export default MyOrdersPage