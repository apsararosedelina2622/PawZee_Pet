import cat_accessories_model from '../models/cat_accessories_model.js';

const add_cat_accessories = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;
  
  const newCatAccessories = new cat_accessories_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });
  
  try {
    await newCatAccessories.save();
    res.status(200).send('Cat Accessories added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding cat accessories');
  }
  
};

const cat_accessories_list = async (req,res) => {

  try {
    const cats = await cat_accessories_model.find({});
    res.json({ success: true, pet: cats });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }

};

const cat_accessories_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  
  try {
    const updatedCatAccessory = await cat_accessories_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );
    if (updatedCatAccessory) {
      res.json({ success: true, message: 'Cat Accessory updated successfully', data: updatedCatAccessory });
    } else {
      res.json({ success: false, message: 'Failed to find and update cat Accessory' });
    }
  } catch (error) {
    console.error('Error updating cat Accessory:', error);
    res.status(500).json({ success: false, message: 'Error updating cat accessory', error: error.message });
  }
};

const cat_accessories_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await cat_accessories_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Cat Accessory removed successfully' });
  } 
  
  catch (error) {
    console.error('Error removing Cat Accessory :', error);
    res.status(500).json({ success: false, message: 'Failed removing the Cat Accessory ' });
  }
  
};

export { add_cat_accessories, cat_accessories_list, cat_accessories_remove, cat_accessories_update }
