import {addCat, findCatById, listAllCats, modifyCat, removeCat, } from '../models/cat-model.js';

const getCat = async (req, res) => {
  try {
    const cats = await listAllCats();
    res.json(cats);
  } catch (error) {
    console.error('Error fetching cats:', error);
    res.sendStatus(500);
  }
};

const getCatById = async (req, res) => {
  try {
    const cat = await findCatById(req.params.id);
    if (cat) {
      res.json(cat);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(
      `Error fetching cat by id: ${req.params.id} and error:`,
      error
    );
    res.sendStatus(500);
  }
};

const postCat = (req, res) => {
  console.log('Form data:', req.body);
  console.log('File data:', req.file);

  try {
    const catData = {
      ...req.body,
      filename: req.file ? req.file.filename : null,
    };

    const result = addCat(catData);
    if (result.cat_id) {
      res.status(201);
      res.json({message: 'New cat added.', result});
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.error('Error adding cat:', error);
    res.sendStatus(500);
  }
};

const putCat = async (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  //res.json({message: 'Cat item updated.'});
  
  try {
    const updatedCat = {
      ...req.body,
      filename: req.file ? req.file.filename : undefined,
    };

    const result = await modifyCat(updatedCat, req.params.id);
    if (result) {
      res.json({ message: `Cat id: ${req.params.id} updated`, result });
    } else {
      res.status(404).json({ message: 'Cat not found or update failed' });
    }
  } catch (error) {
    console.error(`Error updating cat (id: ${req.params.id})`, error);
    res.sendStatus(500);
  }
};

const deleteCat = async (req, res) => {
  // not implemented in this example, this is future homework
  //res.sendStatus(200);
  //res.json({message: 'Cat item deleted.'});

  try {
    const result = await removeCat(req.params.id);
    if (result) {
      res.json({ message: `Cat id: ${req.params.id} deleted`, result });
    } else {
      res.status(404).json({ message: 'Cat not found or delete failed' });
    }
  } catch (error) {
    console.error(`Error deleting cat (id: ${req.params.id})`, error);
    res.sendStatus(500);
  }
};

export {getCat, getCatById, postCat, putCat, deleteCat};
