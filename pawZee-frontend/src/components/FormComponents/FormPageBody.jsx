import { assets } from '../../assets/assets';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContextProvider';

const FormPageBody = () => {

  const { showRegister, RegisterData, KeyUp_Register, showPassword, togglePasswordVisibility, validatePassword, toggleForm, RegisterSubmit, loginData, KeyUp_Login, showLoginPassword, toggleLoginPasswordVisibility, LoginSubmit } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full">
        {showRegister ? (
          // Register Form
          <div className='lg:flex md:flex items-center justify-center border rounded shadow-xl lg:mx-auto mx-5 p-5 xl:w-7/12 lg:w-8/12 bg-white'>
            <img src={assets.register_animation} alt="register_animation" className='lg:block md:block hidden w-1/2' />
            <div className='w-full py-5'>
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#6a70d1] to-purple-400 mb-5">Register</h2>
              <form onSubmit={RegisterSubmit} className="space-y-5">
                <input type="text" placeholder="Name" name="name" value={RegisterData.name} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                <input type="email" placeholder="Email" name="email" value={RegisterData.email} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                <input type="number" placeholder="Mobile" name="mobile" value={RegisterData.mobile} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                <input type="text" placeholder="Username" name="username" value={RegisterData.username} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={RegisterData.password} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                  <i className={`absolute right-3 top-3 cursor-pointer text-purple-600 ${showPassword ? "ri-eye-off-fill" : "ri-eye-fill"}`} onClick={togglePasswordVisibility}></i>
                </div>
                {!validatePassword(RegisterData.password) && RegisterData.password && <p className="text-red-500 text-sm">Password must contain a capital letter, number, and special character.</p>}
                <textarea placeholder="Address" name="address" value={RegisterData.address} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]"></textarea>
                <button type="submit" className="w-full py-2 bg-gradient-to-r from-[#6a70d1] to-purple-400 text-white rounded-md">Register</button>
              </form>
              <p className="mt-5 text-center">Already have an account ? <span onClick={toggleForm} className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400 cursor-pointer">Login</span></p>
            </div>
          </div>
        ) : (
          // Login Form
          <div className='lg:flex md:flex items-center justify-center border rounded shadow-xl lg:mx-auto mx-5 p-5 xl:w-7/12 lg:w-8/12 bg-white'>
            <img src={assets.login_animation} alt="login_animation" className='lg:block md:block hidden w-1/2' />
            <div className='lg:p-5 w-full'>
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#6a70d1] to-purple-400 mb-5">Login</h2>
              <form onSubmit={LoginSubmit} className="space-y-5">
                <input type="text" placeholder="Username" name="username" value={loginData.username} onChange={KeyUp_Login} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                <div className="relative">
                  <input type={showLoginPassword ? "text" : "password"} placeholder="Password" name="password" value={loginData.password} onChange={KeyUp_Login} className="w-full px-4 py-2 border rounded-full focus:outline-[#6a70d1]" />
                  <i className={`absolute right-3 top-3 cursor-pointer text-purple-600 ${showLoginPassword ? "ri-eye-off-fill" : "ri-eye-fill"}`} onClick={toggleLoginPasswordVisibility}></i>
                </div>
                <button type="submit" className="w-full py-2 bg-gradient-to-r from-[#6a70d1] to-purple-400 text-white rounded-md">Login</button>
              </form>
              <p className="mt-5 text-center">Don’t have an account ? <span onClick={toggleForm} className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a70d1] to-purple-400 cursor-pointer">Register</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default FormPageBody;