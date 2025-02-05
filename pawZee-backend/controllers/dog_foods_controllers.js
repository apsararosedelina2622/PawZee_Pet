import dog_foods_model from '../models/dog_foods_model.js';

const add_dog_foods = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;

  const newDogFood = new dog_foods_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });

  try {
    await newDogFood.save();
    res.status(200).send('Dog Food added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error dog adding food');
  }

};

const dog_foods_list = async (req,res) => {

  try {
    const dogs = await dog_foods_model.find({});
    res.json({ success: true, pet: dogs });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }
  
};

const dog_foods_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;

  try {
    const updatedDogFood = await dog_foods_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );

    if (updatedDogFood) {
      res.json({ success: true, message: 'Dog food updated successfully', data: updatedDogFood });
    } else {
      res.json({ success: false, message: 'Failed to find and update dog food' });
    }
  } 
  catch (error) {
    console.error('Error updating dog food :', error);
    res.status(500).json({ success: false, message: 'Error updating dog food', error: error.message });
  }
};

const dog_foods_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await dog_foods_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Dog Food removed successfully' });
  } 

  catch (error) {
    console.error('Error removing dog food:', error);
    res.status(500).json({ success: false, message: 'Failed removing the dog food' });
  }

};

export { add_dog_foods, dog_foods_list, dog_foods_remove, dog_foods_update };
