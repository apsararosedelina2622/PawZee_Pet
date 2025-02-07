import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContextProvider';

const CartPage = () => {

  const { cart, updateQuantity, removeFromCart,discountAmount, discountPercentage, priceBeforeDiscount, totalAfterDiscount } = useContext(AppContext);

  return (
    <div className="px-5 lg:px-20 pt-28">

      <div className="pb-10 text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6a70d1] to-purple-400">
        <p> Cart </p>
      </div>

      {cart.length === 0 ? (
        <>
            <div className='pt-10 pb-20'>
                <img src={assets.empty_cart_img} alt="Empty Cart" className="w-64 grayscale mx-auto" />
                <div className="text-center text-lg text-gray-500">Your cart is empty. <Link to="/shop/cat" className="text-[#6a70d1] hover:underline">Browse Products</Link></div>
            </div>
        </>
        ) : (
        <div className="lg:flex gap-10 mb-16">

            <div className='border rounded shadow-lg lg:w-[120vh] mt-8 h-fit'>

                <div className="flex justify-between px-5 py-5 border-b">
                    <p className='lg:text-2xl md:text-2xl text-xl font-semibold text-gray-800'>Product</p>
                    <p className='text-2xl font-semibold text-gray-800'>Price</p>
                </div>

                {cart.map((item, index) => (
                    
                    <div key={index} className="flex justify-between lg:gap-10 w-full py-4 px-5">
                        
                        <div className="lg:flex md:flex lg:space-x-5 md:space-x-5">
                            <img src={item.image} alt={item.name} className="lg:w-28 lg:h-28 w-28 h-28 rounded-lg object-cover" />
                            <div className='flex justify-between lg:block md:block pt-4 lg:pt-0 md:pt-0'>
                                <p className="text-lg font-medium text-gray-800 mr-4">{item.name}</p>
                                <p className="text-sm text-gray-600 py-2 hidden lg:block md:block">{item.desc}</p>
                                <button className="text-red-600 hover:underline text-sm" onClick={() => removeFromCart(item._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-end space-y-3">
                            <p className="text-lg font-semibold  text-gray-800">
                                ₹ {item.price * item.quantity}
                            </p>
                            <div className="flex items-center border w-fit">
                                <button onClick={() => updateQuantity(item._id, 'decrease')} className="lg:h-10 lg:w-10 w-8 h-8 hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 hover:text-white">
                                    <i className="ri-subtract-line"></i>
                                </button>
                                <input type="text" value={item.quantity} className="text-center lg:h-10 lg:w-10 w-8 h-8 focus:outline-none" readOnly />
                                <button onClick={() => updateQuantity(item._id, 'increase')} className="hover:bg-gradient-to-r from-[#6a70d1] to-purple-400 hover:text-white lg:h-10 lg:w-10 w-8 h-8">
                                    <i className="ri-add-line"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <div className="border rounded shadow-lg h-fit lg:w-[60vh] mt-8 px-5 pt-5 pb-8">
                    <p className="lg:text-2xl md:text-2xl text-xl font-semibold text-gray-800 border-b pb-5">Order Summary</p>
                    <div className="mt-4 space-y-4">
                        
                        <div className="flex justify-between items-center border-b pb-5">
                            <p className="text-lg text-gray-600">Sub Total</p>
                            <p className="text-lg  text-gray-600">₹ {priceBeforeDiscount.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center border-b pb-5">
                            <p className="text-lg text-gray-600">Discount ({discountPercentage}%)</p>
                            <p className="text-lg font-semibold text-gray-600">- ₹ {discountAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <p className="text-xl text-gray-800">Total Price</p>
                            <p className="text-xl font-semibold text-gray-800">₹ {totalAfterDiscount.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/checkout" className="bg-gradient-to-br from-[#6a70d1] to-purple-400 text-white px-6 py-3 rounded-badge hover:bg-gradient-to-l transition duration-300">
                            Proceed to Checkout
                        </Link>
                    </div>
            </div>
        </div>
        )}
      
    </div>
  );
};

export default CartPage;
