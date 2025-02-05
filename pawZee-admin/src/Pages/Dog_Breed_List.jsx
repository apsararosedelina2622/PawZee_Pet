import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'

const Dog_Breed_List = () => {

  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const Fetch_Dog_Breeds = async () => {
    try {
      const response = await axios.get(`${url}/dog_breeds_list`);
      if (response.data.success) {
        setData(response.data.pet)
      }
    } 
    catch (error) {
      toast.error('Dog breed list error')
    }
  }

  const Remove_Dog_Breeds = async (id) => {
    const Confirmation = window.confirm('Are you sure you want to delete this dog breed ?');
    if (Confirmation) {
      try {
        const response = await axios.post(`${url}/dog_breeds_list/remove`, { id });
        if (response.data.success) {
          toast.success(response.data.message);
          await Fetch_Dog_Breeds();
        }
      } 
      catch (error) {
        toast.error('Error occurred while removing the dog breed');
      }
    } else {
      toast.info('Delete action canceled');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    document.getElementById('view_modal').showModal();
  };

  const handleUpdateModal = (product) => {
    setName(product.name);
    setDesc(product.desc);
    setPrice(product.price);
    setImage(product.image);
    setSelectedProduct(product);
    document.getElementById('update_modal').showModal();
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
  
    if (!selectedProduct) {
      toast.error("No product selected for update");
      return;
    }
  
    const updatedProduct = {
      name,
      desc,
      price,
      image,
    };
  
    try {
      const response = await axios.put(`${url}/dog_breeds_update/${selectedProduct._id}`, updatedProduct);
      if (response.data.success) {
        toast.success(response.data.message || 'Dog Breed updated successfully');
        document.getElementById('update_modal').close(); 
        Fetch_Dog_Breeds();
      } else {
        toast.error(response.data.message || 'Failed to update dog breed');
      }
    } catch (error) {
      toast.error('Error occurred while updating the dog breed');
    }
  };

  useEffect(()=>{
    Fetch_Dog_Breeds()
  },[])

  return (
    <>
      <p className='mb-5 font-medium'>Dog Breed List</p>

      <div className="overflow-x-auto mr-5 mb-10">
        <table className="min-w-full border-collapse border border-indigo-500">
          <thead>
            <tr className="bg-purple-100 border border-indigo-500">
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Image</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Name</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Category</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Type</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Price</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">View</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Update</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Remove</th>
            </tr>
          </thead>

          { data && data.length > 0 ? (
            data.map((product, index) => (
              <tbody key={index}>
                <tr className='border border-indigo-500'>
                  <td className="py-3 lg:px-3 px-5">
                    <img src={product.image} alt="Product_img" className="w-14 h-14 object-cover" />
                  </td>
                  <td className="py-3 lg:px-3 px-5">{product.name}</td>
                  <td className="py-3 lg:px-3 px-5">{product.category}</td>
                  <td className="py-3 lg:px-3 px-5">{product.type}</td>
                  <td className="py-3 lg:px-3 px-5">₹ {product.price}</td>
                  <td className="py-3 lg:px-3 px-5">
                    <i className="fa-solid fa-eye text-purple-600 cursor-pointer" 
                      onClick={() => handleViewProduct(product)}
                    ></i>
                  </td>
                  <td className="py-3 lg:px-3 px-5">
                    <button className='text-white py-1 px-3 rounded-lg bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400' 
                      onClick={() => handleUpdateModal(product)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="py-3 px-5 text-start">
                    <i className="fa-solid fa-xmark hover:text-red-600 text-lg cursor-pointer" onClick={() => Remove_Dog_Breeds(product._id)} ></i>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tr className='text-center'>
              <td colSpan="10" className="py-3">
                No Dog Breeds Found
              </td>
            </tr>
          )}

        </table>
      </div>

      {/* View Modal */}
      <dialog id="view_modal" className="modal w-11/12 max-w-4xl">
        <div className="modal-box p-6 rounded-lg shadow-lg bg-white">
          <form method="dialog">
            <div className="flex justify-between mb-5">
              <p className='text-purple-600 text-xl font-medium'>Product Details</p>
              <button className="btn bg-purple-600 text-white rounded-full w-8 h-8">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </form>
          {selectedProduct && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <img src={selectedProduct.image} alt="Product" className="h-80 w-full object-cover rounded-md border" />
              </div>
              <table className='flex'>
                <thead>
                  <tr className='flex flex-col'>
                    <th className="py-3 text-start lg:px-3 px-5">Name</th>
                    <th className="py-3 text-start lg:px-3 px-5">Category</th>
                    <th className="py-3 text-start lg:px-3 px-5">Type</th>
                    <th className="py-3 text-start lg:px-3 px-5">Price</th>
                    <th className="py-3 text-start lg:px-3 px-5">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='flex flex-col'>
                    <td className="py-3 text-start lg:px-3 px-5">{selectedProduct.name}</td>
                    <td className="py-3 text-start lg:px-3 px-5">{selectedProduct.category}</td>
                    <td className="py-3 text-start lg:px-3 px-5">{selectedProduct.type}</td>
                    <td className="py-3 text-start lg:px-3 px-5">{selectedProduct.price}</td>
                    <td className="py-3 text-start lg:px-3 px-5">{selectedProduct.desc}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </dialog>

      {/* Update Modal */}
      <dialog id="update_modal" className="modal w-full lg:w-fit md:w-fit">
        <div className="modal-box p-6 rounded-lg shadow-lg bg-white">
          <form onSubmit={handleUpdateProduct}>

            <div className="flex justify-between">
              <p className='text-purple-600 text-xl font-medium'>Update Product</p>
              <button type="button" onClick={() => document.getElementById('update_modal').close()} className="btn bg-purple-600 text-white rounded-full w-8 h-8">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="flex flex-col gap-4 my-4">
              <p>Upload Image</p>
              <input type="file" id="image" accept="image/*" hidden onChange={handleImageChange} />
              <label htmlFor="image">
                <img src={image} alt="Upload_Img" className="h-[150px] w-[150px] cursor-pointer object-cover" />
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <p>Name</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" required />
            </div>

            <div className="flex flex-col gap-4 my-4">
              <p>Description</p>
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" required />
            </div>

            <div className="flex flex-col gap-4">
              <p>Price</p>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" required />
            </div>

            <button type="submit" className="mt-8 p-3 w-[max(40vw,200px)] text-lg text-white bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400 shadow-xl hover:bg-gradient-to-l">
              Update
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}
export default Dog_Breed_List

