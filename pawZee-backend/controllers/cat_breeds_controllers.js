import cat_breeds_model from '../models/cat_breeds_model.js';

const add_cat_breeds = async (req, res) => {

  const { name, desc, category, type, price, image } = req.body;

  const newCatBreed = new cat_breeds_model({
    name,
    desc,
    category,
    type,
    price,
    image, 
  });

  try {
    await newCatBreed.save();
    res.status(200).send('Cat Breed added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding product');
  }

};

const cat_breeds_list = async (req,res) => {

  try {
    const cats = await cat_breeds_model.find({});
    res.json({ success : true, pet : cats });
  } 
  catch (error) {  
    res.json({ success : false, message : 'List added failed' });
  }

}

const cat_breeds_update = async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, image } = req.body;
  
  try {
    const updatedCatBreed = await cat_breeds_model.findByIdAndUpdate(
      id,
      { name, desc, price, image },
      { new: true }
    );
  
    if (updatedCatBreed) {
      res.json({ success: true, message: 'Cat breed updated successfully', data: updatedCatBreed });
    } else {
      res.json({ success: false, message: 'Failed to find and update cat breed' });
    }
  } 
  catch (error) {
    console.error('Error updating cat breed:', error);
    res.status(500).json({ success: false, message: 'Error updating cat breed' });
  }
};
  
const cat_breeds_remove = async (req, res) => {

  try {
    const id = req.body.id;
    await cat_breeds_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'Cat breed removed successfully' });
  } 
  catch (error) {
    console.error('Error removing Cat Breed :', error);
    res.json({ success: false, message: 'Failed to remove cat breed' });
  }

};


export { add_cat_breeds, cat_breeds_list, cat_breeds_remove, cat_breeds_update };
