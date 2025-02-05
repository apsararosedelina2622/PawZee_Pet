import orders_model from "../models/orders_model.js";

const order_list = async (req, res) => {
    
  const { profile_photo, username, mobile, order_no, product_quantity, product_image, product_name, product_type, address, total_price, userid, email } = req.body;

  if (!username || !mobile || !order_no || !product_quantity || !product_name || !product_image || !product_type || !address || !total_price || !email || !userid) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
  
  const newOrder = new orders_model({
    email,
    mobile,
    userid,
    address,
    username,
    order_no,
    product_quantity,
    total_price,
    product_name,
    product_type,
    product_image,
    profile_photo,
  });    
    
  try {
    await newOrder.save();
    res.status(200).json({ success: true, message: 'Order confirmed' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
};    

const admin_order_list = async (req, res) => {

  try {
    const orders = await orders_model.find();
    return res.status(200).json({ success: true, orders : orders });
  } 
  catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }

}

const remove_order = async (req, res) => {

  try {
    const deletedOrder = await orders_model.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } 
  catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }

};

const get_user_orders = async (req, res) => {

  try {
    const orders = await orders_model.find();
    return res.status(200).json({ success: true, orders: orders });
  } 
  catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch user orders' });
  }
  
};


export { order_list, admin_order_list, remove_order, get_user_orders }