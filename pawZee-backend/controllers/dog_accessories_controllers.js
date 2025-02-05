import dog_accessories_model from '../models/dog_accessories_model.js';

const add_dog_accessories = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;
  
  const newDogAccessories = new dog_accessories_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });
  
  try {
    await newDogAccessories.save();
    res.status(200).send('Dog Accessories added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding dog accessories');
  }
  
};

const dog_accessories_list = async (req,res) => {
  try {
    const dogs = await dog_accessories_model.find({});
    res.json({ success: true, pet: dogs });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }
};

const dog_accessories_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  
  try {
    const updatedDogAccessory = await dog_accessories_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );
  
    if (updatedDogAccessory) {
      res.json({ success: true, message: 'Dog Accessory updated successfully', data: updatedDogAccessory });
    } else {
      res.json({ success: false, message: 'Failed to find and update dog Accessory' });
    }
  } 
  catch (error) {
    console.error('Error updating dog Accessory:', error);
    res.status(500).json({ success: false, message: 'Error updating dog accessory', error: error.message });
  }
};
  
const dog_accessories_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await dog_accessories_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Dog Accessory removed successfully' });
  } 
  catch (error) {
    console.error('Error removing Dog Accessory :', error);
    res.status(500).json({ success: false, message: 'Failed removing the Dog Accessory ' });
  }
  
};

export { add_dog_accessories, dog_accessories_list,dog_accessories_update, dog_accessories_remove }