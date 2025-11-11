import express from 'express';
import multer from 'multer';

import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../../middlewares/upload.js';
import { authenticateToken } from '../../middlewares/authentication.js';
import { authorizeCatOwner } from '../../middlewares/authorization.js';


const catRouter = express.Router();
const upload = multer({ dest: 'src/uploads/' });


//catRouter.route('/').get(getCat).post(postCat);
/*
catRouter
  .route('/')
  .get(getCat)
  .post(upload.single('file'), createThumbnail, postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);
*/

//GET - All
catRouter.route('/').get(getCat);

//POST - Logged in
catRouter.post('/', authenticateToken, upload.single('file'), createThumbnail, postCat);

//PUT/DELETE - Admins
catRouter.route('/:id')
  .get(getCatById)
  .put(authenticateToken, authorizeCatOwner, putCat)
  .delete(authenticateToken, authorizeCatOwner, deleteCat);



export default catRouter;