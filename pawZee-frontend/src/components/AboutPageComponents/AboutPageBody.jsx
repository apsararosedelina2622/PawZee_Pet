import React from 'react';
import { about_data, assets } from '../../assets/assets'

const AboutPageBody = () => {
    return (
        <>
            {/* About Content */}
            <div className='px-5 lg:px-24 pt-16 lg:pt-20'>
                <div className='text-center text-3xl md:text-5xl lg:text-5xl pt-8 lg:py-10 h-[13vh] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400'>
                    <p> About Us </p>
                </div>
                <div className='grid lg:grid-cols-2 gap-10 py-5 lg:py-14'>

                    <div className='overflow-hidden rounded-tl-3xl rounded-br-3xl'>
                        <img src={assets.about_img} alt="about_img" className='h-[30vh] lg:h-full md:h-[65vh] w-full shadow-lg rounded-tl-3xl rounded-br-3xl object-cover transition-transform duration-500 ease-in-out hover:scale-110'/>
                    </div>

                    <div className='lg:py-6'>

                        <div className="flex items-center">
                            <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400 relative bottom-1 leading-none">At PawZee,
                                <span className="absolute w-10 h-8 bg-purple-800 rounded-full bottom-0 -right-2 blur-md opacity-40"></span>
                            </p>
                        </div>
                            
                        <p className='text-lg mt-4'>we believe that pets are family. Our mission is to provide high-quality, comfortable, and stylish products that will make your pets feel loved, happy, and pampered. From cozy beds and fashionable accessories to nutritious treats, we are committed to offering everything your pet needs to live their best life.</p>
                        <p className='text-lg my-3'>We understand the unique bond between pets and their owners, and we strive to bring you only the best in pet care, ensuring safety, comfort, and fun for your furry friends. Whether you're a cat lover, dog enthusiast, or anything in between, PawZee is here to enhance your pet’s life with products that are both practical and fun.</p>
                        <p className='text-lg'>Join us at PawZee, where your pet’s happiness is our priority!</p>

                    </div>

                </div>
            </div>

            {/* Our Services */}
            <div className='p-5 lg:px-20 lg:py-10'>
                <div className='text-center text-3xl md:text-5xl lg:text-5xl pb-10 lg:pb-14 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400'>
                    <p>Our Services</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {about_data.map((data, index) => {
                        return (
                            <div key={index} className="relative shadow-xl rounded-xl overflow-hidden">
                                <img src={data.img} alt='service-img' className="w-full h-[400px] object-cover rounded-xl transform transition-transform duration-700 ease-in-out hover:scale-110" />
                                <div className="absolute bottom-5 left-0 right-0 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg text-center p-6 mx-5 lg:mx-10 shadow-xl">
                                    <p className="text-lg font-bold text-black">{data.title}</p>
                                    <p className="text-sm text-black font-medium">{data.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FAQS */}
            <div className="px-5 lg:px-40 py-8 lg:py-14">
                <div className='text-center text-4xl md:text-5xl lg:text-5xl pb-8 lg:pb-14 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400'>
                    <p> FAQs </p>
                </div>
                <div className="collapse bg-base-200 my-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="flex justify-between collapse-title text-xl font-medium">
                        <h2 className='text-black'>What types of dogs and cats do you have available ?</h2>
                        <p className='relative left-8'>🐾</p>
                    </div>
                    <div className="collapse-content">
                        <p className='text-lg'>We offer a variety of breeds and sizes of dogs and cats. Visit our store or check our website for details on available pets.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200 my-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="flex justify-between  collapse-title text-xl font-medium">
                        <h2 className='text-black'>Do you provide food and accessories for dogs and cats?</h2>
                        <p className='relative left-8'>🐾</p>
                    </div>
                    <div className="collapse-content">
                        <p className='text-lg'>Yes, we stock a wide range of premium food, toys, grooming tools, bedding, and accessories designed specifically for dogs and cats.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200 my-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="flex justify-between collapse-title text-xl font-medium">
                        <h2 className='text-black'>Can I adopt a dog or cat from your shop ?</h2>
                        <p className='relative left-8'>🐾</p>
                    </div>
                    <div className="collapse-content">
                        <p className='text-lg'>Yes, we partner with local shelters and breeders to help dogs and cats find loving homes. Contact us or visit our adoption section to learn more.</p>
                    </div>
                </div>  
                <div className="collapse bg-base-200 my-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="flex justify-between collapse-title text-xl font-medium">
                        <h2 className='text-black'>Do you offer grooming services for dogs and cats ?</h2>
                        <p className='relative left-8'>🐾</p>
                    </div>
                    <div className="collapse-content">
                        <p className='text-lg'>Yes, we provide grooming services including bathing, nail trimming, haircuts, and more to keep your pets looking and feeling their best.</p>
                    </div>
                </div>  
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="flex justify-between collapse-title text-xl font-medium">
                        <h2 className='text-black'>What types of food do you offer for dogs and cats ?</h2>
                        <p className='relative left-8'>🐾</p>
                    </div>
                    <div className="collapse-content">
                        <p className='text-lg'>We offer a variety of high-quality food options, including dry kibble, wet food, raw food, and treats for both dogs and cats. We stock food for all breeds, ages, and dietary needs.</p>
                    </div>
                </div>  
            </div>
        </>
    );
};

export default AboutPageBody;
