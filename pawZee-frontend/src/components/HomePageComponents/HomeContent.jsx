import React from 'react'
import { assets } from '../../assets/assets'

const HomeContent = () => {
    return (
        <>
            <div className='px-5 py-5 lg:px-20 grid lg:grid-cols-2 gap-10 md:px-10'>
                <div className='overflow-hidden rounded-tl-3xl rounded-br-3xl'>
                    <img src={assets.home_content_img} alt="content_img" className='h-[30vh] lg:h-full md:h-full w-full shadow-lg rounded-tl-3xl rounded-br-3xl object-cover transition-transform duration-500 ease-in-out hover:scale-110'/>
                </div>
                <div className='py-0'>

                    <div className="flex items-center">
                        <p className="lg:text-3xl md:text-3xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400 relative bottom-1 leading-none">Join the PawZee Zone,
                            <span className="absolute w-10 h-8 bg-purple-900 rounded-full lg:bottom-0 md:bottom-0 xl:bottom-0 bottom-18 left-44 blur-md opacity-40 "></span>
                        </p>
                    </div>

                    <div className='py-6 text-gray-700'>
                        <p className="lg:text-lg md:text-lg font-medium">🐾 Exclusive Offers and Discounts for Pet Lovers</p>
                        <p className="lg:text-lg md:text-lg font-medium">🐾 Expert Advice from Veterinarians and Pet Specialists</p>
                        <p className="lg:text-lg md:text-lg font-medium">🐾 Early Access to New and Trending Products</p>
                        <p className="lg:text-lg md:text-lg font-medium">🐾 Exciting Pet Events and Community Meetups Near You</p>
                        <p className="lg:text-lg md:text-lg font-medium">🐾 Heartwarming Pet Adoption Opportunities for a Better Home</p>
                    </div>

                    <p className="lg:text-lg md:text-lg text-gray-600 lg:hidden xl:block">
                        At PawZee, we’re more than just a pet store – we’re a vibrant and supportive community of passionate pet lovers, dedicated to enhancing the lives of our furry, feathery, and scaly friends. From expert advice and guidance to exclusive offers and events, we ensure that you and your pet are always supported in every way possible. With PawZee, you’re not just shopping – you’re investing in a happier, more fulfilling life for your pet, surrounded by a caring and passionate network of fellow pet lovers.
                    </p>
                    
                </div> 
            </div>
        </>
    )
}

export default HomeContent