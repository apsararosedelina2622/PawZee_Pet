import mongoose from 'mongoose';

const dogGroomingsSchema = new mongoose.Schema({
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

const dog_groomings_model = mongoose.model('Dog_Groomings', dogGroomingsSchema);

export default dog_groomings_model;