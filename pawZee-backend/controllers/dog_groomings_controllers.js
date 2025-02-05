import dog_groomings_model from '../models/dog_groomings_model.js';

const add_dog_groomings = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;

  const newDogGrooming = new dog_groomings_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });

  try {
    await newDogGrooming.save();
    res.status(200).send('Dog Grooming Product added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding Grooming Product');
  }

};

const dog_groomings_list = async (req,res) => {
  try {
    const dogs = await dog_groomings_model.find({});
    res.json({ success: true, pet: dogs });
  } 
  catch (error) {  
    res.json({ success: false, message: 'List added failed' });
  }
};

const dog_groomings_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  
  try {
    const updatedDogGroomings = await dog_groomings_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );
  
    if (updatedDogGroomings) {
      res.json({ success: true, message: 'Dog groomings updated successfully', data: updatedDogGroomings });
    } else {
      res.json({ success: false, message: 'Failed to find and update dog groomings' });
    }
  } 
  catch (error) {
    console.error('Error updating dog groomings:', error);
    res.status(500).json({ success: false, message: 'Error updating dog groomings' });
  }
};

const dog_groomings_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await dog_groomings_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Dog Grooming Product removed successfully' });
  } 

  catch (error) {
    console.error('Error removing dog grooming product:', error);
    res.status(500).json({ success: false, message: 'Failed removing the dog grooming product' });
  }

};


export { add_dog_groomings, dog_groomings_list, dog_groomings_remove, dog_groomings_update };
