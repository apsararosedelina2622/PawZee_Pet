import express from 'express';

import { add_cat_groomings, cat_groomings_list, cat_groomings_remove, cat_groomings_update } from '../controllers/cat_groomings_controllers.js';

const cat_groomings_router = express.Router();

cat_groomings_router.post('/cat_groomings', add_cat_groomings); 

cat_groomings_router.get('/cat_groomings_list', cat_groomings_list);

cat_groomings_router.put('/cat_groomings_update/:id', cat_groomings_update);

cat_groomings_router.post('/cat_groomings_list/remove', cat_groomings_remove);

export default cat_groomings_router;