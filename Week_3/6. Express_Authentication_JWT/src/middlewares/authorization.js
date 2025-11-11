import { findCatById } from '../api/models/cat-model.js';

const authorizeCatOwner = async (req, res, next) => {
  const catId = req.params.id;
  const cat = await findCatById(catId);

  if (!cat) {
    return res.status(404).json({ message: 'Cat not found' });
  }

  // Admins can modify cat
  if (res.locals.user.role === 'admin') {
    return next();
  }

  // Regular users unable to modify cat
  if (cat.owner !== res.locals.user.user_id) {
    return res.status(403).json({ message: 'You are not authorized to modify cat' });
  }

  next();
};


const authorizeUserUpdate = (req, res, next) => {
  const userId = parseInt(req.params.id);
  if (res.locals.user.user_id !== userId && res.locals.user.role !== 'admin') {
    return res.status(403).json({ message: 'You cannot modify this user' });
  }
  next();
};


export { authorizeCatOwner, authorizeUserUpdate };
