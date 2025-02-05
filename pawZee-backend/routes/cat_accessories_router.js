import express from 'express';

import { add_cat_accessories, cat_accessories_list, cat_accessories_remove, cat_accessories_update, } from '../controllers/cat_accessories_controllers.js'

const cat_accessories_router = express.Router();

cat_accessories_router.post('/cat_accessories', add_cat_accessories); 

cat_accessories_router.get('/cat_accessories_list', cat_accessories_list);

cat_accessories_router.put('/cat_accessories_update/:id', cat_accessories_update);

cat_accessories_router.post('/cat_accessories_list/remove', cat_accessories_remove);

export default cat_accessories_router;