import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-100 p-5 md:px-14 lg:px-0'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20 lg:gap-16'>

                    <div className='my-3'>
                        <div>
                            <Link to={'/home'} className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400 relative bottom-1 leading-none cursor-pointer">
                                PawZee
                                <span className="absolute w-10 h-8 bg-purple-800 rounded-full bottom-0 -right-2 blur-md opacity-40"></span>
                                <span className="absolute rounded w-16 h-[3px] bg-gradient-to-br from-[#6a70d1] to-purple-400 -bottom-0 left-0 transform -skew-x-10 "></span>
                            </Link>
                        </div>
                        <p className="text-base leading-relaxed mt-3">At PawZee, we specialize in providing premium pet food, stylish accessories, and expert grooming services to ensure your pets live their happiest, healthiest lives.</p>
                    </div>

                    <div className='md:ml-14 lg:ml-0'>
                        <div className='text-2xl my-3 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                            <p>Quick Links</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className='flex'>
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <Link to={'/'} className='w-fit hover:underline hover:font-medium'>Home</Link>
                            </div>
                            <div className='flex'>
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <Link to={'/about'} className='w-fit hover:underline hover:font-medium'>About Us</Link>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <Link to={'/shop/cat'} className='w-fit hover:underline hover:font-medium'>Shop</Link>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <Link to={'/about'} className='w-fit hover:underline hover:font-medium'>Our Services</Link>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <Link to={'/contact'} className='w-fit hover:underline hover:font-medium'>Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='text-2xl my-3 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                            <p>Our Services</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className='flex'>
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <p className='w-fit'>Pet Grooming</p>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <p className='w-fit'>Pet Supplies</p>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <p className='w-fit'>Pet Training</p>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <p className='w-fit'>Pet Adoption</p>
                            </div>
                            <div className="flex">
                                <i className="ri-arrow-right-s-fill text-lg text-[#6a70d1]"></i>
                                <p className='w-fit'>Pet Food & Accessories</p>
                            </div>
                        </div>
                    </div>

                    <div className='md:ml-14 lg:ml-0'>
                        <div className='text-2xl my-3 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                            <p>Contact Us</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ri-phone-fill text-xl text-[#6a70d1]"></i>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="flex items-center gap-3 py-2">
                            <i className="ri-mail-line text-xl text-[#6a70d1]"></i>
                            <p>contact@PawZee.com</p>
                        </div>
                        <div className='flex gap-3'>
                            <i className="ri-map-pin-2-fill text-xl text-[#6a70d1]"></i>
                            <div>
                                <p>123 Pet Street,</p>
                                <p>Trichy, TamilNadu, India.</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 cursor-pointer">
                            <i className="ri-facebook-fill text-xl text-[#6a70d1] hover:text-white hover:bg-[#6a70d1] border border-[#6a70d1] rounded-full w-10 h-10 flex items-center justify-center mt-3"></i>
                            <i className="ri-twitter-x-line text-xl text-[#6a70d1] hover:text-white hover:bg-[#6a70d1] border border-[#6a70d1] rounded-full w-10 h-10 flex items-center justify-center mt-3"></i>
                            <i className="ri-instagram-line text-xl text-[#6a70d1] hover:text-white hover:bg-[#6a70d1] border border-[#6a70d1] rounded-full w-10 h-10 flex items-center justify-center mt-3"></i>
                            <i className="ri-whatsapp-line text-xl text-[#6a70d1] hover:text-white hover:bg-[#6a70d1] border border-[#6a70d1] rounded-full w-10 h-10 flex items-center justify-center mt-3"></i>
                        </div>
                    </div>

                </div>
                
                <div className="text-base hidden lg:block md:block text-center mt-10 mb-2 space-y-2">
                    <p>&copy; 2025 PawZee. All Rights Reserved.</p>
                    <p>Designed and Developed By <a href="mailto:anishfathima0808@gmail.com" className="text-purple-700 font-medium hover:underline">Anish Fathima</a></p>
                </div>

                <div className="text-base lg:hidden md:hidden text-center mt-5 space-y-2">
                    <p>&copy; 2025 PawZee. All Rights Reserved.</p>
                    <p>Designed and Developed </p> 
                    <p>By <a href="mailto:anishfathima0808@gmail.com" className="text-purple-700 font-medium hover:underline mt-5">Anish Fathima</a></p>
                </div>

            </footer>
        </>
    )
}

export default Footer