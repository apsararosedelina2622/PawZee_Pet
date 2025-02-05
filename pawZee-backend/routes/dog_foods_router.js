import express from 'express';

import { add_dog_foods, dog_foods_list, dog_foods_remove, dog_foods_update, } from '../controllers/dog_foods_controllers.js';

const dog_foods_router = express.Router();

dog_foods_router.post('/dog_foods', add_dog_foods); 

dog_foods_router.get('/dog_foods_list', dog_foods_list);

dog_foods_router.put('/dog_foods_update/:id', dog_foods_update);

dog_foods_router.post('/dog_foods_list/remove', dog_foods_remove);

export default dog_foods_router;