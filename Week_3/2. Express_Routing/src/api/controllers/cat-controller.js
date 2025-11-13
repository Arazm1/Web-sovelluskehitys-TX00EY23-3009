import {addCat, findCatById, listAllCats} from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    //res.json('This wont work Ig, kinda does.. Actually it gives 200, so no')
    //res.sendStatus(404);
    res.status(404).json({ message: 'The cat was not found.. sad'})
  }
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New cat added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  res.json({ message: 'Cat item updated.' });
};

const deleteCat = (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  res.json({ message: 'Cat item deleted.' });
};

export {getCat, getCatById, postCat, putCat, deleteCat};