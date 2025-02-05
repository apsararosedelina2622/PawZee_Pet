import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ( { children } ) => {
    
    const navigate = useNavigate(); 

    // Backend URL

    const url =  'http://localhost:5000'

    // Form

    const [showRegister, setShowRegister] = useState(true);
    const [showPassword, setShowPassword] = useState(false);      
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [RegisterData, setRegisterData] = useState({ name: '', email: '', mobile: '', username: '', password: '', address: '' });
    
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/.test(password);
    
    const KeyUp_Login = (e) => setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const KeyUp_Register = (e) => setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
    const toggleForm = () => setShowRegister(!showRegister);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleLoginPasswordVisibility = () => setShowLoginPassword(!showLoginPassword);

    const RegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/add_user`, RegisterData, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                toast.success(`Welcome to PawZee, ${RegisterData.username}! Registration successful. Now Login`, { autoClose: 2000 });
                setTimeout(() => {
                toast.dismiss(); 
                navigate('/home');
                }, 2000);
            } 
            else {
                toast.error('Registration failed. Please try again.', { autoClose: 2000 });
            }
        } 
        catch (error) {
            toast.error('Registration failed. Please try again.', { autoClose: 2000 });
        }
    };
      
    const LoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/user_id`, loginData, {
                headers: { 'Content-Type': 'application/json' },
            });
      
            if (response.data.success) {
                localStorage.setItem('token', response.data.message);
                localStorage.setItem('userId', response.data.message);
        
                toast.success(`Welcome to PawZee, ${loginData.username}!`, { autoClose: 2000 });
        
                navigate('/home');
                setTimeout(() => {
                toast.dismiss();
                window.location.reload(); 
                }, 2000);
            } else {
                toast.error('Invalid username or password. Please try again.', { autoClose: 2000 });
            }
        } 
        catch (error) {
            toast.error('Invalid username or password. Please try again.', { autoClose: 2000 });
        }
    };

    // Navbar Toggle

    const [ MenuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!MenuOpen); 
    };

    // Products Modal

    const [selectedItem, setSelectedItem] = useState(null);
    
    // Close modal and Clear notification
    
    const closeModal = () => {
        setSelectedItem(null);
        setCartNotification('');
        setWishlistNotification('');
    };

    // Add Item to Cart using Button

    const [ cart, setCart ] = useState([]);

    const [ cartNotification, setCartNotification ] = useState("");

    const addToCart = (item) => {
        if (cart.some(cartItem => cartItem._id === item._id)) {
            setCartNotification(<span><b>{item.name}</b> is already added to your cart !</span>);
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]); 
            setCartNotification(<span><b>{item.name}</b> added to your cart !</span>);
        }
    };
    
    const handleAddToCart = () => {
        if (selectedItem) {
            addToCart(selectedItem);
        }
    };

    // Remove product from cart

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item._id !== productId));
    };

    // Add item to cart Icon

    const handleAddToCartIcon = (item) => {
        if (cart.some(cartItem => cartItem._id === item._id)) {
             removeFromCart(item._id);
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    }; 

    // Update product quantity in the cart

    const updateQuantity = (productId, action) => {
        const updatedCart = cart.map((item) => {
            if (item._id === productId) {
                if (action === 'increase') {
                    item.quantity += 1;
                } else if (action === 'decrease' && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
            return item;
        });
        setCart(updatedCart);
    };

    const estimatedDeliveryDate = new Date();

    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 10); 
    
    const formattedDate = estimatedDeliveryDate.toLocaleDateString();

    // Add item to wishlist Btn

    const [wishlist, setWishlist] = useState([]);
        
    const [wishlistNotification, setWishlistNotification] = useState("");

    const addToWishlist = (item) => {
        if (wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
            setWishlistNotification(<span><b>{item.name}</b> is already added to your wishlist !</span>);
        } else {
            setWishlist((prevWishlist) => [...prevWishlist, { ...item, quantity: 1 }]); 
            setWishlistNotification(<span><b>{item.name}</b> added to your wishlist !</span>);
        }
    };

    const handleAddToWishlist = () => {
        if (selectedItem) {
            addToWishlist(selectedItem);
        }
    };

    // Add item to wishlist Icon

    const handleAddToWishlistIcon = (item) => {
        if (wishlist.some(wishlistItem => wishlistItem._id === item._id)) {
            removeFromWishlist(item._id);
        } else {
            setWishlist((prevWishlist) => [...prevWishlist, { ...item, quantity: 1 }]);
        }
    };

    // Remove product from wishlist

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item._id !== productId);
        setWishlist(updatedWishlist);
    };

    // Calculate total price of the cart

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // For Discount Price

    const discountPercentage = 5;

    const priceBeforeDiscount = calculateTotalPrice();

    const discountAmount = (priceBeforeDiscount * discountPercentage) / 100;

    const totalAfterDiscount = priceBeforeDiscount - discountAmount; 

    // Order Number

    const orderNumber = Math.floor(100000 + Math.random() * 900000); 

    // For Filter in Shop Page

    let [filteredData, setfilteredData]=useState(); 

    // Fetching Data 
    
    const [ data , setData ] = useState([])
    
    const Fetch_Data = async () => {
      
        try {
        
            const cat_breed_data = await axios.get(`${url}/cat_breeds_list`);         
            const cat_food_data = await axios.get(`${url}/cat_foods_list`);
            const cat_accessory_data = await axios.get(`${url}/cat_accessories_list`);
            const cat_grooming_data = await axios.get(`${url}/cat_groomings_list`);
            const dog_breed_data = await axios.get(`${url}/dog_breeds_list`);
            const dog_food_data = await axios.get(`${url}/dog_foods_list`);
            const dog_accessory_data = await axios.get(`${url}/dog_accessories_list`);
            const dog_grooming_data = await axios.get(`${url}/dog_groomings_list`);
      
            if (
                cat_breed_data.data.success &&
                cat_food_data.data.success &&
                cat_accessory_data.data.success &&
                cat_grooming_data.data.success &&
                dog_breed_data.data.success &&
                dog_food_data.data.success &&
                dog_accessory_data.data.success &&
                dog_grooming_data.data.success
            ) {
        
            const all_data = [
                ...cat_breed_data.data.pet, 
                ...cat_food_data.data.pet,
                ...cat_accessory_data.data.pet,
                ...cat_grooming_data.data.pet,
                ...dog_breed_data.data.pet,
                ...dog_food_data.data.pet,
                ...dog_accessory_data.data.pet,
                ...dog_grooming_data.data.pet,
            ];
                    
            setData(all_data)
                        
            }
        
        } 
        catch (error) {
            console.log(error);
        }
        
    }

    const cat_products = data.filter( data => data.category === 'Cat'  )

    const dog_products = data.filter( data => data.category === 'Dog'  )

    const cat_breeds = data.filter(breeds => breeds.type === 'Cat Breed').map(breeds => breeds.name); 

    const dog_breeds = data.filter(breeds => breeds.type === 'Dog Breed').map(breeds => breeds.name); 

    const cat_food = data.filter(foods => foods.type === 'Cat Food') .map(foods => foods.name);

    const dog_food = data.filter(foods => foods.type === 'Dog Food') .map(foods => foods.name);

    const cat_accessory = data.filter(accessory => accessory.type === 'Cat Accessory').map(accessory => accessory.name)

    const dog_accessory = data.filter(accessory => accessory.type === 'Dog Accessory').map(accessory => accessory.name)

    const cat_grooming = data.filter(grooming => grooming.type === 'Cat Grooming').map(grooming => grooming.name)

    const dog_grooming = data.filter(grooming => grooming.type === 'Dog Grooming').map(grooming => grooming.name)

    const products_length = data.length;

    // Search Modal
        
    const [query , setQuery ] = useState('');
        
    const handleProductSearch = (e) => {
        setQuery(e.target.value);  
    };
        
    const SearchProducts = query.trim() === '' 
    ? [] 
    : data?.filter((product) => {
        const searchQuery = query.toLowerCase().replace('_', ' '); 
        const type = product.type.toLowerCase().replace('_', ' ');
        const name = product.name.toLowerCase().replace('_', ' '); 
        return (
            type.includes(searchQuery) ||
            name.includes(searchQuery)
        );
    });
 
    // Fetching Current Login User Details

    const [ user, setUser ] = useState(null);
   
    const fetchUserData = async () => {
        const userId = localStorage.getItem('userId');
        try {
          const response = await axios.get(`${url}/user_login/${userId}`);
          if (response.data.success) {
            setUser(response.data.message);
          } else {
            console.error('User not found');
          }
        } catch (error) {
          console.error('Error fetching user data', error);
        }
    };

    // Fetching Cat Breeds Data

    const [catBreedsData, setCatBreedsData] = useState([]);

    const fetchCatBreedsData = async () => {
        try {
            const response = await axios.get(`${url}/cat_breeds_list`);
            if (response.data.success) {
                setCatBreedsData(response.data.pet);
            }
        } 
        catch (error) {
            console.error('Error fetching cat breeds:', error);
        }
    };
    
    // Fetching Dog Breeds Data
    
    const [dogBreedsData, setDogBreedsData] = useState([]);
    
    const fetchDogBreedsData = async () => {
        try {
            const response = await axios.get(`${url}/dog_breeds_list`);
            if (response.data.success) {
                setDogBreedsData(response.data.pet);
            }
    
        } 
        catch (error) {
            console.error('Error fetching dog breeds:', error);
        }
    };

    const pet_section = [ ...catBreedsData.slice(0,3), ...dogBreedsData.slice(0,3) ]

    // Fetching Cat Foods Data

    const [catFoodsData, setCatFoodsData] = useState([]);

    const fetchCatFoodsData = async () => {
        try {
            const response = await axios.get(`${url}/cat_foods_list`);
        
            if (response.data.success) {
                setCatFoodsData(response.data.pet);
            }
        } 
        catch (error) {
            console.error('Error fetching cat foods :', error);
        }
    };

    // Fetching Dog Foods Data

    const [dogFoodsData, setDogFoodsData] = useState([]);

    const fetchDogFoodsData = async () => {
        try {
        const response = await axios.get(`${url}/dog_foods_list`);
        
        if (response.data.success) {
            setDogFoodsData(response.data.pet);
        }
        } catch (error) {
        console.error('Error fetching dog foods :', error);
        }
    };

    const food_section = [ ...catFoodsData.slice(0, 3), ...dogFoodsData.slice(0, 3) ];

    useEffect(() => {
        Fetch_Data()
        fetchUserData()
        fetchCatFoodsData()
        fetchDogFoodsData()
        fetchCatBreedsData()
        fetchDogBreedsData()
    }, []);

    // Fetching Orders

    const [orders, setOrders] = useState([]);  

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${url}/user_orders`);
            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                console.log('No orders found');
            }
        } 
        catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    
    useEffect(() => {
        fetchOrders();
    }, [setOrders]);

    // Removing Orders

    const Remove_Order = async (id) => {
        try {
          const response = await axios.delete(`${url}/remove_order/${id}`);
          if (response.status === 200) {
            toast.success(response.data.message);
          }
        } catch (error) {
          toast.error('Error removing order');
          console.error(error); 
        }
    };

    //Settings Page

    const [selectedSection, setSelectedSection] = useState('details');

    const [newProfilePhoto, setNewProfilePhoto] = useState(null); 
    
    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setNewProfilePhoto(reader.result); 
          };
          reader.readAsDataURL(file);
        }
    };   
  
    const handleRemoveProfileImage = () => {
        setNewProfilePhoto(null);
        setUser({ ...user, profile_photo: null }); 
    };
  
    const handleSaveProfileChanges = async () => {
        try {
          const updatedData = {
            username: user.username,
            email: user.email, 
            name: user.name,
            address: user.address,
            profile_photo: newProfilePhoto === null ? '' : newProfilePhoto || user.profile_photo, 
          };
      
            const userId = localStorage.getItem('userId');
            const response = await axios.patch(`${url}/user_profile_update/${userId}`, updatedData);
        
            if (response.data.success) {
              setUser({ ...user, ...updatedData }); 
              toast.success('Profile updated successfully!');
            } else {
              toast.error('Failed to update profile');
            }
        } 
        catch (error) {
            console.error('Error updating profile', error);
            toast.error('Failed to update profile');
        }
    };
  
    const Title = () => {
      switch (selectedSection) {
        case 'details':
          return 'User Details';
        case 'editProfile':
          return 'Edit Profile';
        default:
          return '';
      }
    };

    // Deleting a account from settings page

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete your account?');
        if (confirmDelete && user && user._id) {
          try {
            const response = await axios.post(`${url}/user_list/remove`, { id: user._id });
            if (response.data.success) {
              toast.success('Account deleted successfully');
              localStorage.removeItem('user'); 
              navigate('/'); 
            } else {
              toast.error(response.data.message || 'Failed to delete account');
            }
          } catch (error) {
            console.error('Error deleting account:', error);
            toast.error('An error occurred while deleting the account');
          }
        }
    };

    // Confirm Order

    const handleConfirmOrder = async () => {

        const product = cart.map((item) => ({
            product_name: item.name,
            product_image: item.image,
            product_type: item.type,
            product_quantity: item.quantity,
        }));
    
        const orderData = {
            profile_photo: user.profile_photo,
            username: user.username,
            userid: user._id,
            mobile: user.mobile,
            email: user.email,
            order_no: orderNumber,
            total_price: totalAfterDiscount,
            product_quantity: product.map((item) => item.product_quantity),
            product_name: product.map((item) => item.product_name),
            product_image: product.map((item) => item.product_image),
            product_type: product.map((item) => item.product_type),
            address: user.address,
        };
      
        try {
            const response = await axios.post(`${url}/order_list`, orderData, {
                headers: { "Content-Type": "application/json" },
            });
            if (response.data.success) {
                setCart([]);
            } else {
                console.error("Failed to confirm order");
            }
        } 
        catch (error) {
            console.error("Error sending order:", error.response ? error.response.data : error.message);
        }

    };

    const contextValue = {

        // Backend URL
        url,

        // Form
        showRegister, RegisterData, KeyUp_Register, showPassword, togglePasswordVisibility, validatePassword, toggleForm, 
        RegisterSubmit, loginData, KeyUp_Login, showLoginPassword, toggleLoginPasswordVisibility, LoginSubmit,
        
        // Navbar Toggle
        MenuOpen, setMenuOpen, toggleMenu,

        // Search Modal
        query, SearchProducts, handleProductSearch,

        // Product Modal
        selectedItem, setSelectedItem, closeModal,

        // Cart
        cart, setCart, cartNotification, handleAddToCart,
        handleAddToCartIcon, removeFromCart,
        updateQuantity, orderNumber, formattedDate, 
        
        // Wishlist
        wishlist, wishlistNotification, handleAddToWishlist, handleAddToWishlistIcon, removeFromWishlist, 
        
        // For Discount Price
        discountPercentage, discountAmount, priceBeforeDiscount, totalAfterDiscount,

        // For Filters
        data, cat_breeds, dog_breeds, cat_food, dog_food, cat_accessory, dog_accessory, cat_grooming, dog_grooming, products_length, cat_products, dog_products, filteredData, setfilteredData,

        // User Data
        user, setUser, fetchUserData,

        //Home Page Pet, Food Section
        pet_section, food_section,

        // Fetching Orders
        orders, Remove_Order,

        // Confirm Orders
        handleConfirmOrder,
     
        // Settings Page
        selectedSection, setSelectedSection, newProfilePhoto, Title, handleProfileImageChange, handleRemoveProfileImage, handleSaveProfileChanges,
        handleDeleteAccount

    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider
