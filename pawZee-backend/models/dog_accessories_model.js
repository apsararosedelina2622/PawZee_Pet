import mongoose from 'mongoose';

const dogAccessoriesSchema = new mongoose.Schema({
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

const dog_accessories_model = mongoose.model('Dog_Accessories', dogAccessoriesSchema);

export default dog_accessories_model;