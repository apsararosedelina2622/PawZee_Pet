import React from 'react';
import { assets } from '../../assets/assets';

const ThankYouPageBody = () => {

  return (
    <div className="pt-28">

      <div className="text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 text-center h-[12vh] lg:h-[8vh] md:h-[8vh]">
        <p> Thank You for Your Order ! </p>
      </div>

      <div className="mx-5 my-12 rounded-lg shadow-xl max-w-xl lg:mx-auto md:mx-auto">

        <div className="text-center space-y-8 pt-4 px-2">
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Order placed Successfully !</p>
          <img src={assets.order_success} alt="order-confirm-img" className='mx-auto lg:w-1/2  md:w-6/12 w-8/12' />
        </div>

        <div className="text-center py-8">
          <button onClick={() => window.location.href = '/my-orders'} className="bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white px-8 py-3 rounded-badge hover:bg-gradient-to-l transition duration-300">
            View Orders
          </button>
        </div>

      </div>
      
    </div>
  );
};

export default ThankYouPageBody;
