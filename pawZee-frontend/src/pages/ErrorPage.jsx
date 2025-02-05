import React from 'react'
import NavBar from '../components/CommonComponents/NavBar'
import Footer from '../components/CommonComponents/Footer'
import ErrorPageBody from '../components/ErrorPageComponents/ErrorPageBody'

const ErrorPage = () => {
    return (
        <>
            <NavBar/>
            <ErrorPageBody/>
            <Footer/>
        </>
    )
}

export default ErrorPage