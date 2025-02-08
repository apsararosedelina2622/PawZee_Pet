import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContextProvider';

const NavBar = () => {

  const { MenuOpen, setMenuOpen, toggleMenu, query, SearchProducts, handleProductSearch, selectedItem, setSelectedItem, closeModal, cart, handleAddToCart, cartNotification, handleAddToCartIcon,  updateQuantity, removeFromCart,discountAmount, discountPercentage, priceBeforeDiscount, totalAfterDiscount, wishlist, wishlistNotification, handleAddToWishlist, handleAddToWishlistIcon, removeFromWishlist, user } = useContext(AppContext);

  return (
    <>
      <div className='w-[95%] lg:mx-9 md:mx-5 mx-2 px-6 py-2 bg-white bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-lg fixed top-3 z-10'>

        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div>
            {!MenuOpen &&(
              <div className="font-bold text-xl cursor-pointer">
                <div className="flex items-center mt-2">
                    <Link to={'/home'} className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400 relative bottom-2 leading-none">
                    PawZee
                    <span className="absolute w-10 h-8 bg-purple-900 rounded-full bottom-0 -right-2 blur-md opacity-40"></span>
                    <span className="absolute rounded w-16 h-[3px] bg-gradient-to-r from-[#6a70d1] to-purple-400 -bottom-1 left-0 transform -skew-x-10 "></span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* MENUS */}
          <div className='lg:pl-16 xl:pl-48 lg:inline md:inline hidden '>

            <NavLink to="/home" className={({ isActive }) => `py-2 mx-1 lg:px-6 md:px-2 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
              ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
              : "hover:text-white"}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => `py-2 lg:px-6 md:px-2 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
              ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
              : "hover:text-white"}`}>
              About
            </NavLink>

            <NavLink to="/shop/cat" className={({ isActive }) => `py-2 mx-1 lg:px-6 md:px-2 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
              ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
              : "hover:text-white"}`}>
              Cats
            </NavLink>

            <NavLink to="/shop/dog" className={({ isActive }) => `py-2 lg:px-6 md:px-2 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
              ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
              : "hover:text-white"}`}>
              Dogs
            </NavLink> 

            <NavLink to="/contact" className={({ isActive }) => `py-2 mx-1 lg:px-6 md:px-2 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
              ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
              : "hover:text-white"}`}>
              Contact
            </NavLink>
            
          </div>
              
          <div className='hidden lg:flex md:flex gap-3 justify-end items-center'>

            {/* ICONS */}
            <div className='cursor-pointer flex items-center '>

              <label htmlFor="search-drawer" className="cursor-pointer">
                <i className="ri-search-line lg:text-xl md:text-lg"></i>
              </label>

              <div className="relative lg:mx-5 md:mx-3">
                <label htmlFor="wishlist-drawer" className="cursor-pointer">
                  <i className="ri-heart-3-line lg:text-xl md:text-lg"></i>
                </label>
                {wishlist.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>

              <div className="relative">
                <label htmlFor="cart-drawer" className="cursor-pointer">
                  <i className="ri-shopping-cart-2-line lg:text-xl md:text-lg"></i>
                </label>
                {cart.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>

            </div>

            {/* PROFILE */}
            <div className="dropdown dropdown-hover lg:mx-3">
              {user && user.username ? (
                user.profile_photo && user.profile_photo.startsWith('data:image/') ? (
                  <img
                    src={user.profile_photo}
                    alt="Profile"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                )
              ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                  
                </div>
              )}

              <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow">
                <li><Link to={'/cart'}><i className="ri-shopping-cart-2-line"></i>Cart</Link></li>
                <li><Link to={'/my-orders'}><i className="ri-shopping-bag-line"></i>Orders</Link></li>
                <li><Link to={'/wishlist'}><i className='ri-heart-3-line'></i>Wishlist</Link></li>
                <li><Link to={'/settings'}><i className="ri-settings-3-line"></i>Settings</Link></li>
                <li><Link to={'/logout'}><i className="ri-logout-box-line"></i>Logout</Link></li>
              </ul>
            </div>

            {/* LOGOUT BTN */}
            <div>
              <button className='flex gap-1 rounded-full text-white bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:bg-gradient-to-l px-4 py-2'>
                <Link to={'/logout'}>Log out</Link>
                <i className="ri-logout-box-line text-xl"></i>
              </button>
            </div>

          </div>

          {!MenuOpen && (
            <div className="flex justify-end lg:hidden md:hidden fixed right-5">
              <button onClick={toggleMenu}>
                {user && user.username ? (
                  user.profile_photo && user.profile_photo.startsWith('data:image/') ? (
                  <img src={user.profile_photo} alt="Profile" className="w-10 h-10 object-cover rounded-full" />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                  )) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                    
                  </div>
                )}
              </button>
            </div>
          )}

        </div>

        {/* Small Screen Navbar */}

        {MenuOpen && (
          <div className="lg:hidden md:hidden flex flex-col "> 
      
            <div className="flex gap-3 items-center justify-end">
  
              {/* Logout Btn */}
              <div>
                <button className='flex gap-1 rounded-full text-white bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:bg-gradient-to-ltext-white px-4 py-2'>
                  <Link to={'/logout'}>Log out</Link>
                  <i className="ri-logout-box-line text-xl"></i>
                </button>
              </div>

              {/* Close Btn */}
              <i className="ri-close-large-line font-bold w-9 h-9 flex items-center justify-center rounded-full text-red-800 bg-[#feeded]" onClick={() => setMenuOpen(false)}></i>

            </div>

            {/* Icons */}

            <div className='mt-4 flex items-end justify-end'>

              <label htmlFor="search-drawer" className="cursor-pointer">
                <i className="ri-search-line text-xl"></i>
              </label>

              <div className="relative mx-4">
                <label htmlFor="wishlist-drawer" className="cursor-pointer">
                  <i className="ri-heart-3-line text-xl"></i>
                </label>
                {wishlist.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>

              <div className="relative">
                <label htmlFor="cart-drawer" className="cursor-pointer">
                  <i className="ri-shopping-cart-2-line text-xl"></i>
                </label>
                {cart.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>

              <Link to={'/my-orders'}><i className="ri-shopping-bag-line text-xl mx-4"></i></Link>

              <Link to={'/settings'}><i className="ri-settings-3-line text-xl"></i></Link>

            </div>

            {/* MENUS */}
            <div className='flex flex-col my-5'>
              <NavLink to="/home" className={({ isActive }) => `py-2 px-6 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
                ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
                : "hover:text-white"}`}>
                Home
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => `py-2 px-6 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
                ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
                : "hover:text-white"}`}>
                About
              </NavLink>

              <NavLink to="/shop/cat" className={({ isActive }) => `py-2 px-6 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
                ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
                : "hover:text-white"}`}>
                Cats
              </NavLink>

              <NavLink to="/shop/dog" className={({ isActive }) => `py-2 px-6 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
                ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
                : "hover:text-white"}`}>
                Dogs
              </NavLink> 

              <NavLink to="/contact" className={({ isActive }) => `py-2 px-6 rounded-full hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 ${isActive
                ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white"
                : "hover:text-white"}`}>
                Contact
              </NavLink>
              
            </div> 

          </div> 
        )}

      </div>

      {/* Search Drawer */}

      <div className="drawer drawer-top z-50">
        <input id="search-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div>
        <div className="drawer-side h-full w-full">

          <label htmlFor="search-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

          <div className="bg-white text-base-content w-full h-full lg:px-64 md:px-10 px-5 py-10 shadow-lg rounded-b-lg">

            <label htmlFor="search-drawer" className="text-purple-600 font-bold text-lg bg-gray-100 w-10 h-10 p-2 rounded-full flex items-center justify-center ml-auto">
              <i className="ri-close-large-line cursor-pointer"></i>
            </label>

            <div className='pt-5'>
              <input value={query} onChange={handleProductSearch} type="text" placeholder="Type to search..." className="cursor-pointer input shadow-inner rounded-3xl w-full focus:outline-none focus:border-t drop-shadow-[3px_3px_#9333EA] focus:border-purple-400"/>
            </div>

            <div className='text-end relative -top-10 -left-5'>
              <i className='ri-search-line text-xl text-purple-600 cursor-pointer'></i>
            </div>

            {SearchProducts?.length > 0 && <p className='text-purple-600 font-semibold pb-5'>Search Results</p>}

            {SearchProducts?.length === 0 && query.trim() === '' && (
              <div className='flex items-center flex-col justify-center'>
                <img src={assets.search_img} alt="Search Image" className='w-80' />
                <p className="text-center text-gray-500">Search Products Here...</p>
              </div>
            )}

            {SearchProducts?.length === 0 && query.trim() !== '' && (
              <div className='flex items-center flex-col justify-center'>
                <img src={assets.no_product_img} alt="No products found" className='w-80'/>
                <p className="text-center text-gray-500">No products found</p>
              </div>
            )}

            <div className="overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-hide">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {SearchProducts?.length > 0 ? (
                  SearchProducts.map((data, index) => {
                    return (
                      <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                        <div className="relative">
                          <img src={data.image} alt="pet-img" className="rounded-t-lg transition-all duration-300 w-full lg:h-[260px] md:h-[260px] h-[240px]" />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-t-lg"></div>
                          <p className="absolute bottom-3 text-white text-lg py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {data.name}
                          </p>
                          <div className="absolute my-2 top-4 right-2 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <i className={`ri-heart-3-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${wishlist.some(wishItem => wishItem.id === data.id) ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400' : 'text-gray-700 bg-white'}`} onClick={() => handleAddToWishlistIcon(data)}></i>
                          </div>
                          <div className="absolute top-16 right-2 mt-4 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                            <i className={`ri-shopping-cart-2-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${cart.some(cartItem => cartItem.id === data.id) ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400' : 'text-gray-700 bg-white'}`} onClick={() => handleAddToCartIcon(data)}></i>
                          </div>
                        </div>
  
                        <div className="p-4">
                          <p className="text-gray-700">{data.desc}</p>
                          <div className="flex justify-between items-center">
                            <button className="mt-4 bg-gradient-to-r from-[#6a70d1] to-purple-400 font-medium text-white rounded-lg px-6 py-2 shadow-md transition-all duration-300 hover:bg-gray-100 hover:bg-none hover:text-purple-500 hover:shadow-lg" onClick={() => setSelectedItem(data)} >
                              Shop Now
                            </button>
                            <p className='text-purple-600 font-semibold text-lg mt-5'>₹ {data.price}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : ( '' )}

                { selectedItem && (
                  <div className="modal modal-open">
                   <div className="modal-box relative w-11/12 max-w-5xl">
                    <div className="flex justify-between">
                      <div className="font-medium w-fit text-2xl text-purple-600">
                        <p>Shop Now</p>
                      </div>
                      <button onClick={closeModal}>
                        <i className="ri-close-large-line font-bold p-3 text-purple-700 bg-gray-100 rounded-full"></i>
                      </button>
                    </div>
                    {cartNotification && (
                      <div className="p-2 my-5 flex justify-between text-sm text-purple-700 bg-purple-100 border border-purple-400 rounded">
                        <div>
                          <p>{cartNotification}</p>
                        </div>
                        <Link to="/cart">
                          <p className="hover:underline underline-offset-4 cursor-pointer">View Cart !</p>
                        </Link>
                      </div>
                    )}
                    {wishlistNotification && (
                      <div className="p-2 mt-5 flex justify-between text-sm text-purple-700 bg-purple-100 border border-purple-400 rounded">
                        <div>
                          <p>{wishlistNotification}</p>
                        </div>
                        <Link to="/wishlist">
                          <p className="hover:underline underline-offset-4 cursor-pointer">View Wishlist !</p>
                        </Link>
                      </div>
                    )}
                      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5 mt-5">
                        <div className='border rounded'>
                          <img src={selectedItem.image} alt="model_img"className="w-full lg:h-[50vh] md:h-[50vh]"/>
                        </div>
                        <div>
                          <div className="text-2xl font-medium text-purple-600">
                            <p>{selectedItem.name}</p>
                          </div>
                
                          <div className="border-l-4 border-purple-600 pl-4 italic text-gray-700 relative my-4">
                            {selectedItem.desc}
                          </div>
                
                          <p className="text-2xl text-purple-600 font-semibold">₹ {selectedItem.price}</p>
                
                          <div className="flex cursor-pointer my-4 w-fit" onClick={handleAddToWishlist}>
                            {wishlist.some(wishItem => wishItem.id === selectedItem.id) 
                            ? ( <i className="ri-heart-3-fill text-purple-600"></i> )
                            : ( <i className="ri-heart-3-line text-gray-800"></i> )}
                            <p className='ml-2 text-gray-600 '>
                              {wishlist.some(wishItem => wishItem.id === selectedItem.id) ? 'Added' : 'Add wishlist'}
                            </p>
                          </div>
                
                          <div>
                            <button className='bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white px-5 py-2 rounded cursor-pointer hover:bg-gray-300 hover:bg-none hover:text-gray-800 shadow-inner transition duration-300' onClick={handleAddToCart}>Add to Cart</button>
                          </div>
                
                          <div>
                            <p className="text-lg font-semibold text-purple-700 my-4">Recommended Products</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-purple-100 text-purple-700 cursor-pointer text-sm font-medium px-3 py-1 rounded-full">Cats</span>
                              <span className="bg-purple-100 text-purple-700 cursor-pointer text-sm font-medium px-3 py-1 rounded-full">Dogs</span>
                              <span className="bg-purple-100 text-purple-700 cursor-pointer text-sm font-medium px-3 py-1 rounded-full">Foods</span>
                              <span className="bg-purple-100 text-purple-700 cursor-pointer text-sm font-medium px-3 py-1 rounded-full">Accessroies</span>
                              <span className="bg-purple-100 text-purple-700 cursor-pointer text-sm font-medium px-3 py-1 rounded-full">Groomings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Drawer */}

      <div className="drawer drawer-end z-50">
        <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        </div>
        <div className="drawer-side">
          <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu bg-white text-base-content shadow-lg rounded-b-lg min-h-full xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
            {wishlist.length === 0 ? (
              <> 
                {/* For Empty Wishlist */}

                <div className="flex items-center sticky top-0 bg-white z-10 py-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400">Shopping Wishlist</span>
                    {wishlist.length > 0 && (
                      <span className="relative -top-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{wishlist.reduce((total, item) => total + item.quantity, 0)}</span>
                    )}
                  </div>
                  <label htmlFor="wishlist-drawer" className="text-purple-600 font-bold  bg-gray-100 w-8 h-8 p-2 rounded-full flex items-center justify-center ml-auto">
                    <i className="ri-close-large-line cursor-pointer"></i>
                  </label>
                </div>
                <hr className="my-3" />
                <div className="m-auto relative bottom-10">
                  <img src={assets.empty_wishlist_img} alt="Empty Cart" className="w-64 grayscale mb-5" />
                  <div className="text-center text-lg text-gray-500">Your wishlist is empty. <Link to="/shop/cat" className="text-[#6a70d1] hover:underline">Browse Products</Link></div>
                </div>

              </>
              ) : ( 

                // For Wishlist

                <div className="flex flex-col h-screen px-1">

                  <div className="flex items-center sticky top-0 bg-white z-10">
                    <div className="flex items-center">
                      <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400">Shopping Wistlist</span>
                      {cart.length > 0 && (
                        <span className="relative -top-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                          {cart.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                      )}
                    </div>
                    <label htmlFor="wishlist-drawer" className="text-purple-600 font-bold text-lg bg-gray-100 w-10 h-10 p-2 rounded-full flex items-center justify-center ml-auto">
                      <i className="ri-close-large-line cursor-pointer"></i>
                    </label>
                  </div>
                  <hr className="my-3" />

                  <div className='overflow-y-auto flex-grow scrollbar-hide'>   
                    {wishlist.map((item, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 overflow-hidden">

                        <div className="my-3 w-32">
                          <img src={item.image} alt={item.name} className="shadow-md lg:w-[15vh] lg:h-[13.5vh] md:w-[20vh] md:h-[15vh] w-[15vh] h-[15vh] object-cover rounded-md" />
                        </div>

                        <div className="space-y-2 my-3 2xl:ml-4 xl:ml-8 lg:ml-4 md:ml-8 ml-4 w-40">
                          <p className="text-lg font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600"><span className='font-semibold'>Price :</span> ₹ {item.price}</p>
                        </div>

                        <div className="mt-3 flex flex-col items-end">
                          <button className="text-red-600 text-sm relative" onClick={() => removeFromWishlist(item._id)}><i className="ri-close-circle-line text-lg"></i></button>
                        </div>

                      </div>
                    ))}
                  </div> 

                  <div className="sticky bottom-0 z-10 py-4">
                    <div className="mt-6 flex gap-5">
                      <Link to="/wishlist" className="text-center btn-block bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-lg px-6 py-3 hover:bg-gradient-to-l transition duration-300">Browse Wishlist</Link>
                    </div>
                  </div>

                </div>
              )}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}

      <div className="drawer drawer-end z-50">
        <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu bg-white text-base-content shadow-lg rounded-b-lg min-h-full xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">

            {cart.length === 0 ? (
              <>
                {/* For Empty Cart */}
                
                <div className="flex items-center sticky top-0 bg-white z-10 py-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400">Shopping Cart</span>
                    {cart.length > 0 && (
                      <span className="relative -top-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                    )}
                  </div>
                  <label htmlFor="cart-drawer" className="text-purple-600 font-bold  bg-gray-100 w-8 h-8 p-2 rounded-full flex items-center justify-center ml-auto">
                    <i className="ri-close-large-line cursor-pointer"></i>
                  </label>
                </div>
                <hr className="my-3" />
                <div className="m-auto relative bottom-10">
                  <img src={assets.empty_cart_img} alt="Empty Cart" className="w-64 mb-5 grayscale" />
                  <div className="text-center text-lg text-gray-500">Your cart is empty. <Link to="/shop/cat" className="text-[#6a70d1] hover:underline">Browse Products</Link></div>
                </div>

              </>
            ) : ( 

              // For carts  

              <div className="flex flex-col h-screen px-1">

                <div className="flex items-center sticky top-0 bg-white z-10">
                  <div className="flex items-center">
                    <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400">Shopping Cart</span>
                    {cart.length > 0 && (
                      <span className="relative -top-3 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                      </span>
                    )}
                  </div>
                  <label htmlFor="cart-drawer" className="text-purple-600 font-bold text-lg bg-gray-100 w-10 h-10 p-2 rounded-full flex items-center justify-center ml-auto">
                    <i className="ri-close-large-line cursor-pointer"></i>
                  </label>
                </div>

                <hr className="my-3" />

                <div className='overflow-y-auto flex-grow scrollbar-hide'>   
                  {cart.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 overflow-hidden">

                      <div className="my-3 w-32">
                        <img src={item.image} alt={item.name} className="shadow-md lg:w-[15vh] lg:h-[13.5vh] md:w-[20vh] md:h-[15vh] w-[15vh] h-[15vh] object-cover rounded-md" />
                      </div>

                      <div className="space-y-2 my-3 2xl:ml-4 xl:ml-8 lg:ml-4 md:ml-8 ml-4 w-40">
                        <p className="text-lg font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">₹ {item.price}</p>
                        <div className="flex items-center border w-fit">
                          <button onClick={() => updateQuantity(item._id, 'decrease')} className="hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white w-8 h-8"><i className="ri-subtract-line"></i></button>
                          <input type="text" value={item.quantity} className="text-center w-10 h-8 focus:outline-none" readOnly />
                          <button onClick={() => updateQuantity(item._id, 'increase')} className="hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white w-8 h-8"><i className="ri-add-line"></i></button>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col items-end">
                        <button className="text-red-600 text-sm relative" onClick={() => removeFromCart(item._id)}><i className="ri-close-circle-line text-lg"></i></button>
                      </div>

                    </div>
                  ))}
                </div> 

                <div className="sticky bottom-0 z-10 pt-6 pb-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">Sub Total</p>
                      <p className="text-gray-600">₹ {priceBeforeDiscount.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <p className="text-gray-600">Discount ({discountPercentage}%)</p>
                      <p className="text-gray-600">- ₹ {discountAmount.toFixed(2)}</p>
                    </div>
                          
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <p className="text-gray-800">Total Price</p>
                      <p className="text-gray-800">₹ {totalAfterDiscount.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-5">
                    <Link to="/cart" className="text-center btn-block bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white px-6 py-3 hover:bg-gradient-to-l transition duration-300">View Cart</Link>
                    <Link to="/checkout" className="text-center btn-block bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white px-6 py-3 hover:bg-gradient-to-l transition duration-300">Proceed</Link>
                  </div>
                </div>

              </div>
              
            )}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default NavBar