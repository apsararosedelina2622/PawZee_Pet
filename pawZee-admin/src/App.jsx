import React, { useState } from 'react';
import User_Details from './Pages/User_Details';
import Add_Products from './Pages/Add_Products';
import { ToastContainer } from 'react-toastify';
import Order_Details from './Pages/Order_Details';
import Cat_Food_List from './Pages/Cat_Food_List';
import Dog_Food_List from './Pages/Dog_Food_List';
import Cat_Breed_List from './Pages/Cat_Breed_List';
import Dog_Breed_List from './Pages/Dog_Breed_List';
import AdminNavBar from './AdminComponents/AdminNavBar';
import AdminSideBar from './AdminComponents/AdminSideBar';
import Cat_Grooming_List from './Pages/Cat_Grooming_List';
import Dog_Grooming_List from './Pages/Dog_Grooming_List';
import Cat_Accessory_List from './Pages/Cat_Accessory_List';
import Dog_Accessory_List from './Pages/Dog_Accessory_List';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export const url = 'https://pawzee-pet-shop-backend.onrender.com';

const App = () => {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="flex h-screen">
          <AdminSideBar />
          <div className="flex-1 h-screen overflow-y-scroll">
            <AdminNavBar />
            <div className="lg:pt-12 md:pt-12 lg:pl-12 md:pl-12 pt-5 pl-5">
              <Routes>
                <Route path="/add-product" element={<Add_Products />} />
                <Route path="/user-list" element={<User_Details />} />
                <Route path="/order-list" element={<Order_Details />} />
                <Route path="*" element={<Navigate to="/add-product" />} />
                <Route path="/cat-food-list" element={<Cat_Food_List />} />
                <Route path="/dog-food-list" element={<Dog_Food_List />} />
                <Route path="/cat-breed-list" element={<Cat_Breed_List />} />
                <Route path="/dog-breed-list" element={<Dog_Breed_List />} />
                <Route path="/cat-grooming-list" element={<Cat_Grooming_List />} />
                <Route path="/dog-grooming-list" element={<Dog_Grooming_List />} />
                <Route path="/cat-accessory-list" element={<Cat_Accessory_List />} />
                <Route path="/dog-accessory-list" element={<Dog_Accessory_List />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
