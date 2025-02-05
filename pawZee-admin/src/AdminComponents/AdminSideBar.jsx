import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <>
            <div className='text-white bg-gradient-to-br from-[#6a70d1] to-purple-400'>
                <div className='flex items-center justify-center gap-3 text-2xl py-6'>
                    <p className='hidden sm:block font-medium '>PetZee Admin</p>
                    <p><i className="fa-solid fa-paw "></i></p>
                </div> 

                <div className='ml-3'>

                        <NavLink to="/add-product" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-file-circle-plus"></i>
                                <p className='hidden sm:block'>Add Products</p>
                        </NavLink>

                        <NavLink to="/user-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                            <i className="fa-solid fa-users"></i>
                            <p className='hidden sm:block'>User Details</p>
                        </NavLink>

                        <NavLink to="/order-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                            <i className="fa-solid fa-truck-fast"></i>
                            <p className='hidden sm:block'>Order Details</p>
                        </NavLink>
                    
                        <NavLink to="/cat-food-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-bowl-food"></i>
                                <p className='hidden sm:block'>Cat Food List</p>
                        </NavLink>

                        <NavLink to="/cat-breed-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-cat"></i>
                                <p className='hidden sm:block'>Cat Breed List</p>
                        </NavLink>

                        <NavLink to="/cat-accessory-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-shield-cat"></i>
                                <p className='hidden sm:block'>Cat Accessory List</p>
                        </NavLink>

                        <NavLink to="/cat-grooming-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-paw"></i>
                                <p className='hidden sm:block'>Cat Gromming List</p>
                        </NavLink>

                        <NavLink to="/dog-food-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-bone"></i>
                                <p className='hidden sm:block'>Dog Food List</p>
                        </NavLink>

                        <NavLink to="/dog-breed-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-dog"></i>
                                <p className='hidden sm:block'>Dog Breed List</p>
                        </NavLink>

                        <NavLink to="/dog-accessory-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-shield-dog"></i>
                                <p className='hidden sm:block'>Dog Accessory List</p>
                        </NavLink>

                        <NavLink to="/dog-grooming-list" className={({ isActive }) => `flex items-center gap-4 text-lg cursor-pointer rounded-lg my-3 p-2 pr-[max(6vw,4px)]  
                        ${isActive ? "bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white shadow-lg" : "hover:bg-gradient-to-br hover:shadow-lg"}`}>
                                <i className="fa-solid fa-paw"></i>
                                <p className='hidden sm:block'>Dog Grooming List</p>
                        </NavLink>

                </div>
            </div>
        </>
    )
}

export default AdminSideBar