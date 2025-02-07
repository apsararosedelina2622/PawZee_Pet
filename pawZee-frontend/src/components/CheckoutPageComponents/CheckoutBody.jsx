import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContextProvider';

 const CheckoutBody = () => {

  const { cart, totalAfterDiscount, discountAmount, priceBeforeDiscount, user,  orderNumber, formattedDate, handleConfirmOrder } = useContext(AppContext);
  
  return (
    <div className="pt-28">
      <div className="text-2xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400 text-center lg:h-[8vh]">
        <p> Order Confirmation </p>
      </div>
      <div className="rounded-lg shadow-xl lg:mx-28 xl:mx-64 mx-5 my-10">
        {cart.length === 0 ? (
          <div className="text-center space-y-3 py-5">
            <p className="text-2xl font-semibold text-gray-800">You haven't added any products to your cart!</p>
            <p className="text-lg text-gray-500">
              Please <Link to="/shop/cat" className="text-[#6a70d1] hover:underline">browse products</Link> and add them to your cart before proceeding.
            </p>
            <img src={assets.empty_cart_img} alt="Empty Cart" className="lg:w-1/3 md:w-1/2 w-1/2 mx-auto grayscale" />
          </div>
        ) : (
          <div className="p-5 lg:px-10">
            <div className="text-center space-y-4">
              <p className="text-2xl font-semibold text-gray-800 mb-2">Your Order Has Been Confirmed!</p>
              <p className="text-lg text-gray-500">Thank you for shopping with us! Here's your order summary.</p>
              <p className="text-lg text-gray-600 mb-3">
                Order Number: <span className="font-semibold text-[#6a70d1]">#{orderNumber}</span>
              </p>
            </div>
            <div className="lg:flex md:flex justify-between bg-gray-50 my-8">
              <div className="p-6 rounded-lg">
                <p className="text-xl font-semibold mb-2 text-gray-700">Shipping Information</p>
                <div className="text-gray-600">
                  <p>{user.name}</p>
                  <p>{user.mobile}</p>
                  <p>{user.address}</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="p-6 rounded-lg lg:text-end md:text-end">
                <p className="text-xl text-gray-700">Cash on Delivery*</p>
                <p className="text-xl font-semibold text-gray-700">Estimated Delivery Date</p>
                <p className="text-lg text-gray-600">
                  Your order is expected to arrive on <span className="font-semibold text-[#6a70d1]">{formattedDate}</span>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="lg:flex md:flex justify-between items-center bg-gray-50 rounded-lg shadow-sm p-4 space-y-2">
                  <div className="lg:flex md:flex lg:space-x-5 md:space-x-5">
                    <img src={item.image} alt={item.name} className="mb-3 w-20 h-20 object-cover rounded-lg" />
                    <div className="text-sm space-y-3">
                      <p className="font-semibold text-gray-700">{item.name}</p>
                      <p className="text-gray-500">{item.type}</p>
                      <p className="text-gray-600 font-semibold">Quantity : {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-sm md:text-lg text-gray-800">₹ {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="my-8 border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">Subtotal :</p>
                <p className="text-lg text-gray-800">₹ {priceBeforeDiscount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">Discount Applied (5%) :</p>
                <p className="text-lg text-green-600">- ₹ {discountAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center font-semibold text-lg">
                <p className="text-xl text-gray-800">Total Price :</p>
                <p className="text-xl text-[#6a70d1]">₹ {totalAfterDiscount.toFixed(2)}</p>
              </div>
            </div>
            <div className="pb-8 text-center">
              <Link
                to="/thank-you"
                className="bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white text-lg px-8 py-3 rounded-full hover:bg-gradient-to-l transition duration-300"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutBody;
