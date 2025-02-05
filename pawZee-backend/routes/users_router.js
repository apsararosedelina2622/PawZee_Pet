import express from 'express';
import { add_user, user_list, user_remove, user_login, user_id, user_profile_update } from '../controllers/users_controllers.js';

const user_router = express.Router();

user_router.post('/user_id', user_id);

user_router.post('/add_user', add_user);

user_router.get('/user_list', user_list);

user_router.get('/user_login/:id', user_login);

user_router.post('/user_list/remove', user_remove);

user_router.patch('/user_profile_update/:id', user_profile_update);

export default user_router;


