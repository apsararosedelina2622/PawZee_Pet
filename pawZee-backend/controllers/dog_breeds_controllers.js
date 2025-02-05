import dog_breeds_model from '../models/dog_breeds_model.js';

const add_dog_breeds = async (req, res) => {

    const { name, desc, category, type, price, image } = req.body;

    const newDogBreed = new dog_breeds_model({
        name,
        desc,
        category,
        type,
        price,
        image, 
    });

    try {
        await newDogBreed.save();
        res.status(200).send('Dog Breed added successfully');
    } 
    catch (err) {
        console.error(err);
        res.status(500).send('Error adding dog breed');
    }
    
};

const dog_breeds_list = async (req,res) => {

    try {
        const dogs = await dog_breeds_model.find({});
        res.json({ success : true, pet : dogs });
    } 
    catch (error) {  
        res.json({ success : false, message : 'List added failed' });
    }

}

const dog_breeds_update = async (req, res) => {
    const { id } = req.params;
    const { name, desc, price, image } = req.body;
    
    try {
      const updatedDogBreed = await dog_breeds_model.findByIdAndUpdate(
        id,
        { name, desc, price, image },
        { new: true }
      );
    
      if (updatedDogBreed) {
        res.json({ success: true, message: 'Dog breed updated successfully', data: updatedDogBreed });
      } else {
        res.json({ success: false, message: 'Failed to find and update dog breed' });
      }
    } 
    catch (error) {
      console.error('Error updating dog breed:', error);
      res.status(500).json({ success: false, message: 'Error updating dog breed' });
    }
};

const dog_breeds_remove = async (req, res) => {

    try {
        const id = req.body.id;
        await dog_breeds_model.findByIdAndDelete(id);
        res.json({ success: true, message: 'Dog Breed removed successfully' });
    } 
    catch (error) {
        console.error('Error removing dog food:', error);
        res.status(500).json({ success: false, message: 'Failed to remove dog breed' });
    }

};

export { add_dog_breeds, dog_breeds_list, dog_breeds_remove, dog_breeds_update }