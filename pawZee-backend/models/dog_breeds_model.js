import mongoose from 'mongoose';

const dogBreedsSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true 
    },
    desc : {
        type: String,
        required: true 
    },
    category : {
        type: String,
        required: true 
    },
    type : {
        type: String,
        required: true 
    },
    price : {
        type: String,
        required: true 
    },
    image : {
        type: String,
        required: true 
    }
});

const dog_breeds_model = mongoose.model('Dog_Breeds', dogBreedsSchema);

export default dog_breeds_model;