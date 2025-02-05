import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContextProvider'

const ShopBody = ( { pet } ) => {

    const { products_length, filteredData, setfilteredData, cat_products, dog_products,  cat_breeds, dog_breeds, cat_food, dog_food, cat_accessory, dog_accessory, cat_grooming, dog_grooming, selectedItem, setSelectedItem, closeModal, cart, handleAddToCart, handleAddToCartIcon, cartNotification, wishlist, wishlistNotification, handleAddToWishlist, handleAddToWishlistIcon, data } = useContext(AppContext);

    let category= pet.category
    useEffect(()=>{
        if(category==="cat"){
            setfilteredData(cat_products)
        }
        else{
            setfilteredData(dog_products)
        }
    },[category])

    const handleFilter = (type) => {
        if (type) {
            const filtered = data.filter(item => item.type === type);
            setfilteredData(filtered);
        } else {
            setfilteredData(data); 
        }
    };

    return (
        <>
            <div className='xl:px-14 lg:px-10 pt-24'>
                
                <div className='text-center text-3xl md:text-5xl lg:text-5xl lg:py-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 lg:h-[15vh] md:h-[10vh]'>
                    <p>PawZee Shop</p>
                </div>
  
                <div className='lg:flex'>

                    {/* Filters for lg */}

                    <div className='px-5 py-10 lg:block hidden'>
                        <div className='pb-3 flex justify-between items-center'>
                            <p className='text-2xl font-semibold '>Filters</p>
                            <button className="text-purple-700" onClick={() => handleFilter('')}>
                            Clear Filters
                            </button>
                        </div>
                        <div className="space-y-5 mt-3">
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cats</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700 cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Breed')}> 
                                            <span className='ri-arrow-right-s-line text-xl'></span>Cats Breeds
                                        </p>
                                    </div>
                                    <div className='py-2'>
                                        <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Food')}> 
                                            <span className='ri-arrow-right-s-line text-xl'></span>Cat Foods
                                        </p>
                                    </div>
                                    <div>
                                        <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Grooming')}> 
                                            <span className='ri-arrow-right-s-line text-xl'></span>Cat Grooming
                                        </p>
                                    </div>
                                    <div className='py-2'>
                                        <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Accessory')}> 
                                            <span className='ri-arrow-right-s-line text-xl'></span>Cat Accessories
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Dogs</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700 cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <p className='hover:text-black hover:font-medium py-2' onClick={() => handleFilter('Dog Breed')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Breeds</p>
                                    <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Dog Food')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Foods</p>
                                    <p className='hover:text-black hover:font-medium py-2' onClick={() => handleFilter('Dog Grooming')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Grooming</p>
                                    <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Dog Accessory')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Accessories</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-2xl font-semibold py-5'>
                            <p>Available Products</p>
                        </div>
                        <div className="space-y-5">
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cat Breeds</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {cat_breeds.map((breeds, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{breeds}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Dog Breeds</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {dog_breeds.map((breeds, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{breeds}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cat Foods</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {cat_food.map((food, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{food}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Dog Foods</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {dog_food.map((food, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{food}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cat Accessories</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {cat_accessory.map((accessory, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{accessory}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Dog Accessories</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {dog_accessory.map((accessory, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{accessory}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="collapse rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cat Groomings</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {cat_grooming.map((grooming, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{grooming}</p>
                                            </div>
                                        ))}
                                    </div>    
                                </div>
                            </div>
                            <div className="collapse  rounded-none shadow-lg w-72">
                                <input type="checkbox" />
                                <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                    <p>Cat Groomings</p>
                                    <p className='relative left-8'>🐾</p>
                                </div>
                                <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                    <hr className='border-gray-300 py-2'/>
                                    <div>
                                        {dog_grooming.map((grooming, index) => (
                                            <div key={index} className='flex items-center'>
                                                <span className='ri-arrow-right-s-line text-xl'></span>
                                                <p className="hover:text-black hover:font-medium py-1.5">{grooming}</p>
                                            </div>
                                        ))}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters for md sm */}

                    <div className="drawer drawer-start lg:hidden z-50">
                        <input id="filters-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="filters-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu bg-white text-base-content shadow-lg rounded-b-lg min-h-full w-80 p-4">
                                <div className='flex justify-between items-center mb-5'>
                                    <button className="text-purple-700 text-lg" onClick={() => handleFilter('')}>
                                        Clear Filters
                                    </button>
                                    <label htmlFor="filters-drawer" className="text-purple-600 font-bold text-lg bg-gray-100 w-10 h-10 p-2 rounded-full flex items-center justify-center">
                                        <i className="ri-close-large-line"></i>
                                    </label>
                                </div>
                                <div className="space-y-5">
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cats</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700 cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Breed')}> 
                                                    <span className='ri-arrow-right-s-line text-xl'></span>Cats Breeds
                                                </p>
                                            </div>
                                            <div className='py-2'>
                                                <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Food')}> 
                                                    <span className='ri-arrow-right-s-line text-xl'></span>Cat Foods
                                                </p>
                                            </div>
                                            <div>
                                                <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Grooming')}> 
                                                    <span className='ri-arrow-right-s-line text-xl'></span>Cat Grooming
                                                </p>
                                            </div>
                                            <div className='py-2'>
                                                <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Cat Accessory')}> 
                                                    <span className='ri-arrow-right-s-line text-xl'></span>Cat Accessories
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Dogs</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700 cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <p className='hover:text-black hover:font-medium py-2' onClick={() => handleFilter('Dog')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Breeds</p>
                                            <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Dog Food')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Foods</p>
                                            <p className='hover:text-black hover:font-medium py-2' onClick={() => handleFilter('Dog Grooming')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Grooming</p>
                                            <p className='hover:text-black hover:font-medium' onClick={() => handleFilter('Dog Accessory')}> <span className='ri-arrow-right-s-line text-xl'></span>Dog Accessories</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-2xl font-semibold py-5'>
                                    <p>Available Products</p>
                                </div>
                                <div className="space-y-5">
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cat Breeds</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {cat_breeds.map((breeds, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{breeds}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Dog Breeds</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {dog_breeds.map((breeds, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{breeds}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cat Foods</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {cat_food.map((food, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{food}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Dog Foods</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {dog_food.map((food, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{food}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cat Accessories</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {cat_accessory.map((accessory, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{accessory}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Dog Accessories</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {dog_accessory.map((accessory, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{accessory}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cat Groomings</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {cat_grooming.map((grooming, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{grooming}</p>
                                                    </div>
                                                ))}
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="collapse  rounded-none shadow-lg w-72">
                                        <input type="checkbox" />
                                        <div className="collapse-title flex justify-between text-xl font-semibold bg-gray-100">
                                            <p>Cat Groomings</p>
                                            <p className='relative left-8'>🐾</p>
                                        </div>
                                        <div className="collapse-content bg-gray-100 text-gray-700  cursor-pointer">
                                            <hr className='border-gray-300 py-2'/>
                                            <div>
                                                {dog_grooming.map((grooming, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <span className='ri-arrow-right-s-line text-xl'></span>
                                                        <p className="hover:text-black hover:font-medium py-1.5">{grooming}</p>
                                                    </div>
                                                ))}
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                                
                    <div className='px-5 md:px-10 py-10'>

                        <div className="flex items-center justify-between mb-5 ml-auto">
                            <label htmlFor="filters-drawer" className="cursor-pointer lg:hidden font-medium text-gray-600 pr-5">
                                <i className="ri-equalizer-line p-2 text-2xl shadow-lg"></i>
                            </label>
                            <p className='font-medium text-gray-600'>Total Results {products_length}</p>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                            {filteredData?filteredData.map((data,index) => ( 
                                <div key={index} className="bg-white shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                                    <div className="relative my-3">
                                        
                                        <img src={data.image} alt="pet-img" className="transition-all duration-300 w-full h-[40vh] lg:h-[30vh] xl:h-[40vh]" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        <p className="absolute bottom-4 text-white text-lg py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {data.name}
                                        </p>

                                        <div className="absolute my-2 top-4 right-2 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <i className={`ri-heart-3-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${wishlist.some(wishItem => wishItem._id === data._id) ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400' : 'text-gray-700 bg-white'}`} onClick={() => handleAddToWishlistIcon(data)}></i>
                                        </div>

                                        <div className="absolute top-16 right-2 mt-4 text-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                            <i className={`ri-shopping-cart-2-line rounded-full w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br from-[#6a70d1] to-purple-400 hover:text-white ${cart.some(cartItem => cartItem._id === data._id) ? 'text-white bg-gradient-to-br from-[#6a70d1] to-purple-400' : 'text-gray-700 bg-white'}`} onClick={() => handleAddToCartIcon(data)}></i>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-gray-700">{data.desc}</p>
                                        <div className="flex justify-between items-center">
                                            <button className="mt-4 bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white rounded-lg px-6 py-2 shadow-md transition-all duration-300 hover:bg-gray-300 hover:bg-none hover:text-gray-800 hover:shadow-lg" onClick={() => setSelectedItem(data)}>
                                                Shop Now
                                            </button>
                                            <p className='text-purple-600 font-semibold text-xl mt-5'>₹ {data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : '' } 
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
        </>
    )
}

export default ShopBody