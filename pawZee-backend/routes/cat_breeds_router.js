import express from 'express';

import { add_cat_breeds, cat_breeds_list, cat_breeds_remove, cat_breeds_update } from '../controllers/cat_breeds_controllers.js';

const cat_breeds_router = express.Router();

cat_breeds_router.post('/cat_breeds', add_cat_breeds);

cat_breeds_router.get('/cat_breeds_list', cat_breeds_list);

cat_breeds_router.put('/cat_breeds_update/:id', cat_breeds_update);

cat_breeds_router.post('/cat_breeds_list/remove', cat_breeds_remove);

export default cat_breeds_router;
