import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add_Products = () => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [type, setProductType] = useState('');
  const [category, setCategory] = useState('');

  // For Dropdown Options

  const options = {
    Cat: ["Cat Breed", "Cat Food", "Cat Grooming", "Cat Accessory"],
    Dog: ["Dog Breed", "Dog Food", "Dog Grooming", "Dog Accessory"]
  };

  // Image Change

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  }

  // Form Submission

  const handleFormSubmit = async (e) => {

    e.preventDefault();

    let products = '';
    if (category === 'Cat') {
      if (type === 'Cat Breed') {
        products = `${url}/cat_breeds`; 
      } else if (type === 'Cat Food') {
        products = `${url}/cat_foods`; 
      } else if (type === 'Cat Accessory') {
        products = `${url}/cat_accessories`; 
      } else if (type === 'Cat Grooming') {
        products = `${url}/cat_groomings`; 
      } 
    } 
    else if (category === 'Dog') {
      if (type === 'Dog Breed') {
        products = `${url}/dog_breeds`; 
      } else if (type === 'Dog Food') {
        products = `${url}/dog_foods`;
      } else if (type === 'Dog Accessory') {
        products = `${url}/dog_accessories`; 
      } else if (type === 'Dog Grooming') {
        products = `${url}/dog_groomings`; 
      } 
    }

    const formData = {
      image: image,  
      name,
      desc,
      category,
      type,
      price,
    };

    try {
      
      const response = await axios.post(products, formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200 || response.status === 201) {
        toast.success(`${type} added successfully!`);
        setImage(false);
        setName('');
        setDesc('');
        setCategory('');
        setProductType('');
        setPrice('');
      } 
      else {
        toast.error('Failed to add product');
      }
    } 
    catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred.');
    }

  };

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>

        <div className="flex flex-col gap-5">
          <p>Upload Image</p>
          <input type="file" id="image" accept="image/*" hidden onChange={handleImageChange} />
          <label htmlFor="image">
            <img src={image ? image : assets.upload_area} alt="Upload_Img"className="h-[150px] w-[150px] cursor-pointer object-cover"/>
          </label>
        </div>

        <div className="flex flex-col gap-5">
          <p>Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" placeholder="Type Here" required />
        </div>

        <div className="flex flex-col gap-5">
          <p>Description</p>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" placeholder="Type Here" required />
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-3.5 gap-5">
          <div className="flex flex-col gap-5">
            <p>Select Category</p>
            <select value={category} onChange={(e) => { setCategory(e.target.value); setProductType(''); }} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 lg:w-[300px] w-[max(40vw,200px)] " required >
              <option value="" disabled>--Select Category--</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            <p>Select Product Type</p>
            <select value={type} onChange={(e) => setProductType(e.target.value)} disabled={!category} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 lg:w-[300px] w-[max(40vw,200px)]" required>
              <option value="" disabled>--Select Product Type--</option>
              {category && options[category].map((data, index) => <option key={index} value={data}>{data}</option>)}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p>Price</p>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(40vw,200px)]" placeholder="Type Here" required />
        </div>
        
        <button type="submit" className="my-10 p-3 w-[max(40vw,200px)] text-lg text-white bg-gradient-to-br from-[#6a70d1] to-purple-400 shadow-xl hover:bg-gradient-to-l">
          Add
        </button>

      </form>
    </div>
  );
};

export default Add_Products;
