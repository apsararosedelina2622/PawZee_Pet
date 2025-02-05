import mongoose from 'mongoose';

const catBreedsSchema = new mongoose.Schema({
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
    },
});

const cat_breeds_model = mongoose.model('Cat_Breeds', catBreedsSchema);

export default cat_breeds_model;