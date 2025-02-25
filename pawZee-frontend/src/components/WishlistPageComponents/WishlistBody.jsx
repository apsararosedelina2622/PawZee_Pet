import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContextProvider'

const WishlistBody = () => {

    const { wishlist, removeFromWishlist } = useContext(AppContext)
 
    return (
        <>
            <div className="px-5 lg:px-20 pt-28">

                <div className="pb-10 text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#6a70d1] to-purple-400">
                    <p> Wishlist </p>
                </div>

                { wishlist.length === 0 ? (
                    <>
                        <div className='pt-10 pb-20'>
                            <img src={assets.empty_wishlist_img} alt="Empty Cart" className="w-64 mx-auto grayscale" />
                            <div className="text-center text-lg text-gray-500">Your cart is empty. <Link to="/shop/cat" className="text-indigo-500 hover:underline">Browse Products</Link></div>
                        </div>
                    </>
                ) : (
                    <div className='shadow-lg xl:mx-64 my-10'>
                        { wishlist.map((item,index) => (
                            <div key={index} className="lg:flex md:flex items-center justify-between border-b py-4 px-5">

                                <div className="flex-shrink-0">
                                    <img src={`${item.image}`} alt="wishlist_img" className="object-cover w-32 h-24" />
                                </div>

                                <div className="flex flex-col lg:ml-4 md:ml-4 flex-grow my-4">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>

                                <div className="flex">
                                    <div className="lg:flex items-center justify-center w-24">
                                        <p className="font-semibold text-gray-800">₹ {item.price}</p>
                                    </div>

                                    <div className="lg:flex items-center justify-end lg:mx-5">
                                        <button className="text-red-600 hover:underline text-sm" onClick={() => removeFromWishlist(item._id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                ) }
                
            </div>
        </>
    )
}

export default WishlistBody
