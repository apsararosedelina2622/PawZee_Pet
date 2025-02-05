import express from 'express';

import { admin_order_list, order_list, remove_order, get_user_orders } from '../controllers/orders_contorllers.js';

const orders_router = express.Router();

orders_router.get('/admin_order_list', admin_order_list);

orders_router.post('/order_list', order_list);

orders_router.delete('/remove_order/:id', remove_order);

orders_router.get('/user_orders', get_user_orders); 

export default orders_router;