import cat_foods_model from '../models/cat_foods_model.js';

const add_cat_foods = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;

  const newCatFood = new cat_foods_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });

  try {
    await newCatFood.save();
    res.status(200).send('Cat Food added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error cat adding food');
  }

};

const cat_foods_list = async (req,res) => {

  try {
    const cats = await cat_foods_model.find({});
    res.json({ success: true, pet: cats });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }

};

const cat_foods_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;

  try {
    const updatedCatFood = await cat_foods_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );

    if (updatedCatFood) {
      res.json({ success: true, message: 'Cat food updated successfully', data: updatedCatFood });
    } else {
      res.json({ success: false, message: 'Failed to find and update cat food' });
    }
  } 
  catch (error) {
    console.error('Error updating cat food :', error);
    res.status(500).json({ success: false, message: 'Error updating cat food', error: error.message });
  }
};

const cat_foods_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await cat_foods_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Cat Food removed successfully' });
  } 
  catch (error) {
    console.error('Error removing cat food:', error);
    res.status(500).json({ success: false, message: 'Failed removing the cat food' });
  }

};

export { add_cat_foods, cat_foods_list, cat_foods_remove, cat_foods_update };
