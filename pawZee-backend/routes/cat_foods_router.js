import express from 'express';

import { add_cat_foods, cat_foods_list, cat_foods_remove, cat_foods_update } from '../controllers/cat_foods_controllers.js';

const cat_foods_router = express.Router();

cat_foods_router.post('/cat_foods', add_cat_foods);

cat_foods_router.get('/cat_foods_list', cat_foods_list);

cat_foods_router.put('/cat_foods_update/:id', cat_foods_update);

cat_foods_router.post('/cat_foods_list/remove', cat_foods_remove);

export default cat_foods_router;