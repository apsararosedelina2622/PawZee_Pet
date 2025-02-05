import mongoose from 'mongoose';

const dogFoodsSchema = new mongoose.Schema({
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

const dog_foods_model = mongoose.model('Dog_Foods', dogFoodsSchema);

export default dog_foods_model;