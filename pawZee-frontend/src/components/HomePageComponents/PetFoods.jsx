import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContextProvider';

import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PetFoods = () => {

    const { selectedItem, setSelectedItem, handleAddToCart, handleAddToCartIcon, cartNotification, closeModal, cart,  wishlist, wishlistNotification, handleAddToWishlist, handleAddToWishlistIcon , food_section } = useContext(AppContext);

    return (
        <>
            <div className='lg:px-20'>
                <div className='text-center pb-5 text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                    <p> PawZee Foods </p>
                </div>
                <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    1200: {
                    slidesPerView: 4,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    576: {
                    slidesPerView: 1,
                    },
                }}
                >
                    {food_section.map((data, index) => (
                        <SwiperSlide key={index}>
                        <div className="m-5 shadow-lg rounded-lg overflow-hidden group hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                            <div className="relative">
                                <img src={data.image} alt="pet-img" className="rounded-t-lg transition-all duration-300 w-full h-[50vh] md:h-[40vh]" />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-t-lg"></div>
                                <p className="absolute bottom-2 text-white text-lg py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {data.name}
                                </p>
                                <div className="absolute my-2 top-4 right-2 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <i className={`ri-heart-3-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${
                                        wishlist.some((wishItem) => wishItem._id === data._id)
                                        ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400'
                                        : 'text-gray-700 bg-white'
                                    }`}onClick={() => handleAddToWishlistIcon(data)}></i>
                                </div>
                                <div className="absolute top-16 right-2 mt-4 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                    <i className={`ri-shopping-cart-2-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${
                                        cart.some((cartItem) => cartItem._id === data._id)
                                        ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400'
                                        : 'text-gray-700 bg-white'
                                     }`} onClick={() => handleAddToCartIcon(data)}></i>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">{data.desc}</p>
                                <div className="flex justify-between items-center">
                                    <button
                                    className="mt-4 bg-gradient-to-r from-[#6a70d1] to-purple-400 font-medium text-white rounded-lg px-6 py-2 shadow-md transition-all duration-300 hover:bg-gray-100 hover:bg-none hover:text-purple-500 hover:shadow-lg"
                                    onClick={() => setSelectedItem(data)}
                                    >
                                    Shop Now
                                    </button>
                                    <p className="text-purple-600 font-semibold text-xl mt-5">₹ {data.price}</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

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
                                <Link to="/cart" onClick={closeModal}>
                                    <p className="hover:underline underline-offset-4 cursor-pointer">View Cart !</p>
                                </Link>
                            </div>
                        )}
                        {wishlistNotification && (
                            <div className="p-2 mt-5 flex justify-between text-sm text-purple-700 bg-purple-100 border border-purple-400 rounded">
                                <div>
                                    <p>{wishlistNotification}</p>
                                </div>
                                <Link to="/wishlist" onClick={closeModal}>
                                    <p className="hover:underline underline-offset-4 cursor-pointer">View Wishlist !</p>
                                </Link>
                            </div>
                        )}
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 gap-5 mt-5">
                            <div>
                                <img src={selectedItem.image}  alt="model_img"className="w-full lg:h-[50vh] md:h-[65vh]"/>
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
                                        {wishlist.some(wishItem => wishItem.id === selectedItem.id) ? 'Added to wishlist' : 'Add to wishlist'}
                                    </p>
                                </div>
                                
                                <div>
                                    <button className='bg-gradient-to-r from-[#6a70d1] to-purple-400 font-medium text-white px-5 py-2 rounded cursor-pointer hover:bg-gray-100 hover:bg-none hover:text-purple-500 shadow-inner transition duration-300' onClick={handleAddToCart}>Add to Cart</button>
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
        </>
    )
}

export default PetFoods