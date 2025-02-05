import express from 'express';

import { add_dog_groomings, dog_groomings_list, dog_groomings_remove, dog_groomings_update } from '../controllers/dog_groomings_controllers.js';

const dog_groomings_router = express.Router();

dog_groomings_router.post('/dog_groomings', add_dog_groomings); 

dog_groomings_router.get('/dog_groomings_list', dog_groomings_list);

dog_groomings_router.put('/dog_groomings_update/:id', dog_groomings_update);

dog_groomings_router.post('/dog_groomings_list/remove', dog_groomings_remove);

export default dog_groomings_router;