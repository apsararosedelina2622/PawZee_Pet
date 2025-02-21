import React from 'react'
import { assets } from '../../assets/assets'

const ContactPageBody = () => {
    return (
        <>
            <div>

                {/* Content */}

                <div className='px-5 lg:px-20 pt-24'>
                    <div className='w-fit mx-auto text-3xl md:text-5xl lg:text-5xl h-[8vh] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400'>
                        <p> Contact Us </p>
                    </div>
                    <p className='text-center py-5'>We’re here to help you and your furry friends! Reach out to us for any queries.</p> 
                    <div className='overflow-hidden'>
                        <img src={assets.contact_img} alt="contact_img" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                    </div>
                </div>

                {/* Address & Message Box */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 py-8 lg:px-20 lg:py-14'>

                    <div className='shadow-lg rounded-lg p-4 lg:p-8 md:p-8'>
                        <div className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#6a70d1]'>
                            <p>Get In Touch</p>
                        </div>

                        <p className='py-3'>Feel free to reach out through any of the methods below :</p>

                        <div className="flex gap-4">
                            <i className="ri-map-pin-2-fill text-2xl text-purple-500"></i>
                            <p>123 Pet Street, <br /> Near Central Park, <br />Trichy, TamilNadu,<br /> India.</p>
                        </div>

                        <div className="flex items-center gap-4 py-3">
                            <i className="ri-phone-fill text-2xl text-purple-500"></i>
                            <p>+91 98765 43210</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <i className="ri-mail-line text-2xl text-purple-500"></i>
                            <p>contact@PawZee.com</p>
                        </div>

                        <div className='pt-6 space-x-4'>
                            <i className="ri-facebook-fill text-xl cursor-pointer text-purple-500 hover:text-white hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 border border-purple-600 p-2 rounded-full"></i>
                            <i className="ri-twitter-x-line text-xl cursor-pointer text-purple-500 hover:text-white hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 border border-purple-600 p-2 rounded-full"></i>
                            <i className="ri-instagram-line text-xl cursor-pointer text-purple-500 hover:text-white hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 border border-purple-600 p-2 rounded-full"></i>
                            <i className="ri-whatsapp-line text-xl cursor-pointer text-purple-500 hover:text-white hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 border border-purple-600 p-2 rounded-full"></i>
                        </div>
                    </div>

                    <div className='shadow-lg rounded-lg p-4 lg:p-8 md:p-8'>
                        <div className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#6a70d1]'>
                            <p>Send Message</p>
                        </div>

                        <div className='py-3'>
                            <input type="text" placeholder="Your Name" className="w-full my-2 px-4 py-2 border bg-gray-200 shadow-inner rounded-md focus:outline-purple-500"/>
                            <input type="email" placeholder="Your Email Address" className="w-full my-2 px-4 py-2 border bg-gray-200 shadow-inner rounded-md focus:outline-purple-500"/>
                            <textarea placeholder='Your Message' className='w-full h-[80px] my-2 px-4 py-2 border bg-gray-200 shadow-inner rounded-md focus:outline-purple-500'></textarea>
                        </div>

                        <div className='flex justify-center'>
                            <button className='btn btn-wide bg-gradient-to-r from-[#6a70d1] to-purple-400 hover:shadow-inner hover:bg-none hover:bg-gray-200 text-white border-none hover:text-gray-800'>Send Message</button>
                        </div>
                    </div>

                </div>

                {/* Google Map */}

                <div className='px-5 lg:px-20 pb-8 lg:pb-14'>
                    <iframe className='w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.29617161595!2d77.18217857528401!3d28.50073567573695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fabe604b215%3A0xa4da693f05955d99!2sPawZee%20Pet%20Food!5e0!3m2!1sen!2sin!4v1734660986848!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                
            </div>

        </>
    )
}

export default ContactPageBody


