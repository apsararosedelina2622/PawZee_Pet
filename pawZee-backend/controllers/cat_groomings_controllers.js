import cat_groomings_model from '../models/cat_groomings_model.js';

const add_cat_groomings = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;

  const newCatGrooming = new cat_groomings_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });

  try {
    await newCatGrooming.save();
    res.status(200).send('Cat Grooming Product added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding Grooming Product');
  }

};

const cat_groomings_list = async (req,res) => {

  try {
    const cats = await cat_groomings_model.find({});
    res.json({ success: true, pet: cats });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }
  
};

const cat_groomings_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  
  try {
    const updatedCatGroomings = await cat_groomings_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );
  
    if (updatedCatGroomings) {
      res.json({ success: true, message: 'Cat groomings updated successfully', data: updatedCatGroomings });
    } else {
      res.json({ success: false, message: 'Failed to find and update cat groomings' });
    }
  } 
  catch (error) {
    console.error('Error updating cat groomings:', error);
    res.status(500).json({ success: false, message: 'Error updating cat groomings', error: error.message });
  }
};

const cat_groomings_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await cat_groomings_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Cat Grooming Product removed successfully' });
  }

  catch (error) {
    console.error('Error removing cat grooming product:', error);
    res.status(500).json({ success: false, message: 'Failed removing the cat grooming product' });
  }

};

export { add_cat_groomings, cat_groomings_list, cat_groomings_remove, cat_groomings_update };
