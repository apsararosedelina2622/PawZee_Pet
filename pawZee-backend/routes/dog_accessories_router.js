import express from 'express';

import { add_dog_accessories, dog_accessories_list, dog_accessories_remove, dog_accessories_update  } from '../controllers/dog_accessories_controllers.js';

const dog_accessories_router = express.Router();

dog_accessories_router.post('/dog_accessories', add_dog_accessories); 

dog_accessories_router.get('/dog_accessories_list', dog_accessories_list);

dog_accessories_router.put('/dog_accessories_update/:id', dog_accessories_update);

dog_accessories_router.post('/dog_accessories_list/remove', dog_accessories_remove);

export default dog_accessories_router;