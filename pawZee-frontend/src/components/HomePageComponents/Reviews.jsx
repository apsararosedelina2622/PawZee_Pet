import React from 'react'
import { review_data, assets, service_data } from '../../assets/assets';

const Reviews = () => {
    return (
        <>

            {/* Google Reviews */}

            <div className='lg:px-20 px-5 pt-10'>

                <div className='text-center py-5 text-3xl md:text-5xl lg:text-5xl lg:h-[100px] md:h-[12vh] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                    <p>What Our Customers Say!</p>
                </div>

                <div className='lg:flex md:flex justify-between items-center bg-gray-100 p-5 mt-8 mb-5'>
                    <div>
                        <div className="flex items-center">
                            <img src={assets.google_logo} alt="" className='w-[40px]'/>
                            <p className='font-semibold text-xl'>Excellent on Google</p>
                        </div>

                        <div>
                            <i className="ri-star-fill text-xl text-yellow-400"></i>
                            <i className="ri-star-fill text-xl text-yellow-400"></i>
                            <i className="ri-star-fill text-xl text-yellow-400"></i>
                            <i className="ri-star-fill text-xl text-yellow-400"></i>
                            <i className="ri-star-half-fill text-xl text-yellow-400"></i>
                            <span className='font-semibold mx-2'>4.8 Out of 5</span>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='btn lg:rounded-s-badge md:rounded-s-badge lg:mt-0 md:mt-0 mt-5 bg-gradient-to-br from-[#6a70d1] to-purple-400 shadow-inner hover:bg-none  hover:bg-gray-200 text-white hover:text-gray-800 border-0'>Review us on Google</button>
                    </div>
                </div>                   

                <div className="flex scrollbar-hide overflow-x-auto gap-5">
                    {review_data.map((data, index) => {
                        return (
                            <div key={index} className="bg-gray-100 p-5 w-60 flex-shrink-0 cursor-pointer">
                                <div className="flex gap-3">
                                    <p className={`w-11 h-11 text-white text-xl flex items-center justify-center rounded-full ${data.profile_bg}`}>
                                    {data.name[0]}
                                    </p>
                                    <div> 
                                        <p className="text-base font-semibold">{data.name} <span><i className="ri-verified-badge-fill text-violet-700"></i></span></p>
                                        <p className="text-sm mb-3">{data.date}</p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-star-fill text-lg text-yellow-400"></i>
                                    <i className="ri-star-fill text-lg text-yellow-400"></i>
                                    <i className="ri-star-fill text-lg text-yellow-400"></i>
                                    <i className="ri-star-fill text-lg text-yellow-400"></i>
                                    <i className="ri-star-fill text-lg text-yellow-400"></i>
                                </div>
                                <p>{data.review}</p>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Services */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 px-5 lg:px-20'>
                {service_data.map((data, index) => {
                    return (
                    <div key={index} className='flex gap-3 items-center py-4'>
                        <img src={data.img} alt="" width={80} className="filter grayscale p-3 bg-white rounded-full"/>
                        <div>
                            <h1 className='font-semibold'>{data.title}</h1>
                            <h2>{data.desc}</h2>
                        </div>
                    </div>
                    );
                })}
            </div>

        </>
    )
}

export default Reviews