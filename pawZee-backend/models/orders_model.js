import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
  profile_photo: {
    type: String,
  },
  userid : {
    type : String,
  },
  username: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  order_no: {
    type: String,
    required: true,
  },
  product_quantity: {
    type: [String],
    required: true,
  },
  product_image: {
    type: [String],
    required: true,
  },
  product_name: {
    type: [String],
    required: true,
  },
  product_type: {
    type: [String],
    required: true,
  },
  total_price: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
  
const orders_model = mongoose.model('Orders_Data', OrdersSchema);

export default orders_model;
  