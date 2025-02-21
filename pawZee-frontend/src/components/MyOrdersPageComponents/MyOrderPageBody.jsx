import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContextProvider';

const MyOrdersPage = () => {

  const { orders, formattedDate, Remove_Order } = useContext(AppContext); 
  
  if (!orders || orders.length === 0) {
    return (
      <div className="mt-28 mb-10 mx-5 flex flex-col gap-5 py-5 items-center justify-center max-w-xl lg:mx-auto md:mx-auto rounded-lg">

        <div className="">
          <img src={assets.empty_cart_img} alt=""  className='mx-auto w-1/2 grayscale'/>
        </div>

        <p className="text-2xl font-semibold text-gray-700">
          No Orders Found
        </p>

        <p className="text-gray-500 text-center">
          You haven't placed any orders yet. <br /> Browse our products and add them to your cart to get started!
        </p>

        <Link to={'/'}>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-[#6a70d1] hover:bg-gradient-to-l text-white text-sm font-medium rounded-lg shadow-md transition-transform transform hover:scale-105">
            Start Shopping
          </button>
        </Link>

      </div>
    );
  }

  return (
    <div className="pt-28 px-4 md:px-10 lg:px-15 xl:px-28">
      
      <div className="w-fit mx-auto text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-[#6a70d1] text-center h-[10vh]">
        <p> My Orders </p>
      </div>
      
      {orders.map((order, index) => {
        if(order.userid == localStorage.userId) {
          return  (
            <div key={index} className="mb-10">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-end" onClick={() => Remove_Order(order._id)}>
                  <button className='bg-gradient-to-r from-[#6a70d1] to-purple-400 hover:bg-gradient-to-l text-white py-2 px-4 rounded-full'>Remove</button>
                </div>
                {/* Order Summary */}
                <table className="min-w-full table-auto mb-6">

                  <thead>
                    <tr className="border-b hidden lg:table-row md:table-row">
                      <th className="text-left px-4 py-2 font-semibold text-gray-600">Order Number</th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-600">Status</th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-600">Delivery Date</th>
                      <th className="text-left px-4 py-2 font-semibold text-gray-600">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
  
                      {/* Larger screens table */}
                      <td className="p-4 hidden lg:table-cell md:table-cell">#{order.order_no}</td>
                      <td className="p-4 hidden lg:table-cell md:table-cell">Delivered</td>
                      <td className="p-4 hidden lg:table-cell md:table-cell">{formattedDate}</td>
                      <td className="p-4 font-semibold hidden lg:table-cell md:table-cell">
                        ₹ {order.total_price}
                      </td>
  
                      {/* Smaller screens table */}
                      <td className="py-2 space-y-2 lg:hidden md:hidden">
                        <div className="flex justify-between">
                          <p className="font-semibold text-gray-600">Order Number :</p>
                          <p>#{order.order_no}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold text-gray-600">Status :</p>
                          <p>Delivered</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold text-gray-600">Delivery Date :</p>
                          <p>{formattedDate}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold text-gray-600 mb-4">Total Price :</p>
                          <p>₹ {order.total_price}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
  
                {/* Order Details for Sm Screen */}
  
                <div className="my-6">
                  <table className="min-w-full table-auto">
                    <tbody>
                      <tr className="border-b text-end">
                        <td className="lg:hidden md:hidden space-y-2 py-2">
                          <div className="flex justify-between">
                            <p className="font-semibold text-gray-600">Name :</p>
                            {order.product_name && order.product_name.length > 0 ? (
                              <span className="flex flex-col gap-3">
                                {order.product_name.map((type, index) => (
                                  <span key={index}  > {type}</span>
                                ))}
                              </span>
                            ) : (
                              <p className="text-gray-500 text-sm">No product name available</p>
                            )}
                          </div>
                          <div className="flex justify-between">
                            <p className="font-semibold text-gray-600">Quantity :</p>
                            <p>{order.product_quantity}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="font-semibold text-gray-600 mb-4">Total :</p>
                            <p>₹ {order.total_price}</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Shipping Info for Sm Screen */}

                <div className='lg:hidden md:hidden '>
                  <h3 className="text-xl font-semibold text-gray-700 mb-5">Shipping Information</h3>
                  <div className="flex justify-between">
                    <div className='space-y-3 font-semibold text-gray-700'>
                      <p>Name</p>
                      <p>Mobile</p>
                      <p>Email</p>
                      <p>Address</p>
                    </div>
                    <div className='text-end space-y-3'>
                      <p>{order.username}</p>
                      <p>{order.mobile}</p>
                      <p>{order.email}</p>
                      <p>{order.address}</p>
                    </div>
                  </div>
                </div>
  
                {/* Order Details and Shipping Info for lg md */}
  
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Order Details for lg md */}

                  <div className="hidden lg:block md:block mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Order Details</h3>
                    <table className="table-auto border-collapse border-spacing-2">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left xl:px-10 md:px-20 py-4 font-semibold text-gray-600">Product</th>
                          <th className="text-center xl:px-10 md:px-20 py-4 font-semibold text-gray-600">Name</th>
                          <th className="text-left xl:px-10 md:px-20 py-4 font-semibold text-gray-600">Quantity</th>
                          <th className="text-left xl:px-10 md:px-20 py-4 font-semibold text-gray-600">Total</th>
                        </tr>
                      </thead>
  
                      <tbody>
                        <tr key={index} className="border-b">
                          <td className="px-6 py-2 flex justify-center">
                            {order.product_image && order.product_image.length > 0 ? (
                              <span className="flex flex-col gap-3">
                                {order.product_image.map((image, index) => (
                                  <img key={index} src={image} alt='product-img' className="w-12 h-12 object-cover" />
                                ))}
                              </span>
                            ) : (
                              <p>No images available</p>
                            )}
                          </td>
                          <td className="xl:px-6 py-2 text-gray-700 text-center">
                            {order.product_name && order.product_name.length > 0 ? (
                              <span className="flex flex-col gap-3">
                                {order.product_name.map((type, index) => (
                                  <span key={index}  > {type}</span>
                                ))}
                              </span>
                            ) : (
                              <p className="text-gray-500 text-sm">No product name available</p>
                            )}
                          </td>
                          <td className="xl:px-6 py-2 text-gray-700 text-center">{order.product_quantity}</td>
                          <td className="xl:px-6 py-2 text-gray-700 text-center">₹ {order.total_price}</td>
                        </tr>
                      </tbody>
  
                    </table>
                  </div>

                  {/* Shipping Info  for lg md */}
  
                  <div className=" hidden lg:block md:block">
                    <h3 className="text-xl font-semibold text-gray-700 mb-5">Shipping Information</h3>
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="border-b">
                          <th className="xl:px-10 md:px-6 py-4 font-semibold text-gray-600">Name</th>
                          <th className="xl:px-10 md:px-6 py-4 font-semibold text-gray-600">Mobile</th>
                          <th className="xl:px-10 md:px-6 py-4 font-semibold text-gray-600">Email</th>
                          <th className="xl:px-10 md:px-6 py-4 font-semibold text-gray-600">Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b text-center">
                          <td className="px-6 py-3">{order.username}</td>
                          <td className="px-6 py-3">{order.mobile}</td>
                          <td className="px-6 py-3">{order.email}</td>
                          <td className="px-6 py-3 text-center">{order.address}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
                
              </div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default MyOrdersPage;