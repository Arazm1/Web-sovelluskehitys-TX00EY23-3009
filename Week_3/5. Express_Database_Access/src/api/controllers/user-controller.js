import {
  addUser,
  findUserById,
  listAllUsers,
  modifyUser,
  removeUser,
} from '../models/user-model.js';

const getUser = async (req, res) => {
  //res.json(listAllUsers());
  try {
    const users = await listAllUsers();
    res.json(users);
  } catch (error) {
    console.log('Error fetching all users:', error);
    res.status(500).json({error: 'Database error'});
  }
};

const getUserById = async (req, res) => {
  /*
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }*/
  try {
    const user = await findUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.sendStatus(500);
  }
};

const postUser = async (req, res) => {
  /*
  const result = addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }*/

    //temp
    console.log("POST /api/v1/user body:", req.body);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }

  try {
    const result = await addUser(req.body);
    if (result.user_id) {
      res.status(201);
      res.json({message: 'New user added.', result});
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.error('Error adding user:', error);
    res.sendStatus(500);
  }
};

/*
const putUser = (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  res.json({ message: 'User item updated.' });
};
*/
const putUser = async (req, res) => {
  try {
    const result = await modifyUser(req.body, req.params.id);
    if (result) {
      res.json({message: 'User item updated.', result});
    } else {
      return res.status(404).json({message: 'User not found'});
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await removeUser(req.params.id);
    if (result) {
      res.json({message: 'User item deleted.', result});
    } else {
      return res.status(404).json({message: 'User not found'});
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.sendStatus(500);
  }
};

/*
const deleteUser = (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  res.json({ message: 'User item deleted.' });
};
*/

export {getUser, getUserById, postUser, putUser, deleteUser};
