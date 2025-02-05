import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

const Order_List = () => {

  const [data, setData] = useState([]);

  const Fetch_List = async () => {
    try {
      const response = await axios.get(`${url}/admin_order_list`);
      if (response.data.success) {
        setData(response.data.orders)
      }
    } 
    catch (error) {
      toast.error('Order list error')
    }
  }

  const Remove_Order = async (id) => {
    try {
      const response = await axios.delete(`${url}/remove_order/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        await Fetch_List(); 
      }
    } catch (error) {
      toast.error('Error removing order');
      console.error(error); 
    }
  };
       
  useEffect(() => {
    Fetch_List();
  }, [])

  return (
    <>
      <p className='mb-5 font-medium'>Orders List</p>

      <div className="overflow-x-auto mr-5 mb-10">
        <table className="min-w-full border-collapse border border-[#6a70d1]">

          <thead>
            <tr className="bg-purple-100 border-b border-indigo-500">
              <th className="py-3 px-4 text-sm">Profile</th>
              <th className="py-3 px-4 text-sm">Username</th>
              <th className="py-3 px-4 text-sm">Mobile</th>
              <th className="py-3 px-4 text-sm">Order No</th>
              <th className="py-3 px-4 text-sm">Quantity</th>
              <th className="py-3 px-4 text-sm">Image</th>
              <th className="py-3 px-4 text-sm">Name</th>
              <th className="py-3 px-4 text-sm">Type</th>
              <th className="py-3 px-4 text-sm">Address</th>
              <th className="py-3 px-4 text-sm">Price</th>
              <th className="py-3 px-4 text-sm">Status</th>
              <th className="py-3 px-4 text-sm">Action</th>
            </tr>
          </thead>

          { data && data.length > 0 ? (
            data.map((order, index) => (
              <tbody key={index}>
                <tr className='border-b border-[#6a70d1]'>
                  <td>
                    {order && order.username ? (
                      order.profile_photo && order.profile_photo.startsWith('data:image/') ? (
                        <img src={order.profile_photo} alt="Profile" className="w-10 h-10 object-cover rounded-full mx-auto"/>
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400 flex items-center justify-center rounded-full text-white text-xl mx-auto">
                          {order.username.charAt(0).toUpperCase()}
                        </div>
                      )
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                        
                      </div>
                    )}
                  </td>
                  <td className="py-3 text-center  px-5 text-sm">{order.username}</td>
                  <td className="py-3 text-center  px-5 text-sm">{order.mobile}</td>
                  <td className="py-3 text-center  px-5 text-sm">#{order.order_no}</td>
                  <td className="py-3 text-center  px-5 text-sm">{order.product_quantity}</td>

                  <td className="py-3 text-center  px-5 text-sm">
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

                  <td className="py-3 text-center lg:px-3 px-5 text-sm">
                    {order.product_name && order.product_name.length > 0 ? (
                      <span className="flex flex-col gap-3">
                        {order.product_name.map((type, index) => (
                          <span key={index}  > {type}</span>
                        ))}
                      </span>
                    ) : (
                      <p className="text-gray-500 text-sm">No Product name available</p>
                    )}
                  </td>

                  <td className="py-3 text-center lg:px-3 px-5 text-sm">
                    {order.product_type && order.product_type.length > 0 ? (
                      <span className="flex flex-col gap-3">
                        {order.product_type.map((type, index) => (
                          <span key={index}> {type}</span>
                        ))}
                      </span>
                    ) : (
                      <p className="text-gray-500 text-sm">No types available</p>
                    )}
                  </td>

                  <td className="py-3 text-center lg:px-3 px-5 text-sm">{order.address}</td>
                  <td className="py-3 text-center lg:px-3 px-5 text-sm">₹ {order.total_price}</td>
                  <td className="py-3 text-center lg:px-3 px-5 text-sm">
                    <p className='text-green-800 bg-green-300 w-fit px-2 py-1  rounded-2xl text-xs'>
                    <span>●</span> Delivered</p>
                  </td>
                  <td className="py-3 px-5">
                    <i onClick={() => Remove_Order(order._id)} className="fa-solid fa-xmark mx-3 hover:text-red-600 text-lg cursor-pointer"></i>
                  </td> 
                </tr>
              </tbody>
            ))
          ) : (
            <tr className='text-center'>
              <td colSpan="13" className="py-3">
                No Orders Found
              </td>
            </tr>
          )}

        </table>

      </div>
    </>
  );
};

export default Order_List;