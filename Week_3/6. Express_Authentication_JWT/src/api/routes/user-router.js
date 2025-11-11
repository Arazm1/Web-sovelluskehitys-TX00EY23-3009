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


// GET user info - Anyone can do this
userRouter.get('/', getUser);

userRouter.get('/:id', authenticateToken, getUserById);

userRouter.get('/:id', authenticateToken, authorizeUserUpdate, getUser);

// Post - Use the lower add another account and theres no admin.
userRouter.post('/:id', authenticateToken, authorizeUserUpdate, postUser);
//userRouter.post('/', postUser);

// PUT user info
userRouter.put('/:id', authenticateToken, authorizeUserUpdate, putUser);

// DELETE user
userRouter.delete('/:id', authenticateToken, authorizeUserUpdate, deleteUser);




export default userRouter;