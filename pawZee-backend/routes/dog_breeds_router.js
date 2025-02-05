import express from 'express';

import { add_dog_breeds, dog_breeds_list, dog_breeds_remove, dog_breeds_update } from '../controllers/dog_breeds_controllers.js';

const dog_breeds_router = express.Router();

dog_breeds_router.post('/dog_breeds', add_dog_breeds);

dog_breeds_router.get('/dog_breeds_list', dog_breeds_list);

dog_breeds_router.put('/dog_breeds_update/:id', dog_breeds_update);

dog_breeds_router.post('/dog_breeds_list/remove', dog_breeds_remove);

export default dog_breeds_router;