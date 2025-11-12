import express from 'express';
import {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';

import { authenticateToken } from '../../middlewares/authentication.js';
import { authorizeUserUpdate } from '../../middlewares/authorization.js';



const userRouter = express.Router();



//userRouter.route('/').get(getUser).post(postUser);

//userRouter.route('/:id').get(getUserById).put(putUser).delete(deleteUser);


// GET user info - Admin
userRouter.get('/', authenticateToken, authorizeUserUpdate, getUser);

// GET user/id - Admin
userRouter.get('/:id', authenticateToken, authorizeUserUpdate, getUser);

// Post - Use the lower to add another account if there's no admin/known pw for admin.
userRouter.post('/', authenticateToken, authorizeUserUpdate, postUser);
//userRouter.post('/', postUser);

// PUT user info
userRouter.put('/:id', authenticateToken, authorizeUserUpdate, putUser);

// DELETE user
userRouter.delete('/:id', authenticateToken, authorizeUserUpdate, deleteUser);




export default userRouter;