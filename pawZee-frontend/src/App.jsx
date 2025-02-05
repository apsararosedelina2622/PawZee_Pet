import React from 'react'
import Logout from './pages/Logout'
import AOSInit from './pages/AOSInit'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import FormPage from './pages/FormPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './pages/ScrollToTop'
import WishlistPage from './pages/WishlistPage'
import CheckoutPage from './pages/CheckoutPage'
import ThankYouPage from './pages/ThankYouPage'
import MyOrdersPage from './pages/MyOrdersPage'
import SettingsPage from './pages/SettingsPage'
import { ToastContainer } from 'react-toastify'
import AppContextProvider from './context/AppContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProtection from './components/UserComponents/UserProtection'

const App = () => {

  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <AppContextProvider>
          <ScrollToTop/>
          <AOSInit />
          <Routes>

            <Route path='/' element={<FormPage />} />

            <Route path='/logout' element={<Logout />} />

            <Route path='*' element={ <UserProtection> <ErrorPage/> </UserProtection> } />

            <Route path='/home' element={ <UserProtection> <HomePage /> </UserProtection>} />

            <Route path='/cart' element={ <UserProtection> <CartPage/> </UserProtection> } />

            <Route path='/about' element={ <UserProtection> <AboutPage /> </UserProtection> } />

            <Route path='/contact' element={ <UserProtection> <ContactPage /> </UserProtection> } />

            <Route path='/my-orders' element={ <UserProtection> <MyOrdersPage/> </UserProtection> } />

            <Route path='/checkout' element={ <UserProtection> <CheckoutPage/> </UserProtection> } />

            <Route path='/wishlist' element={ <UserProtection> <WishlistPage/> </UserProtection> } />

            <Route path='/thank-you' element={ <UserProtection> <ThankYouPage/> </UserProtection> } />

            <Route path='/settings' element={ <UserProtection> <SettingsPage/> </UserProtection> } />

            <Route path='/shop/:category' element={ <UserProtection> <ShopPage/> </UserProtection> } />

          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
