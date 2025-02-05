import mongoose from 'mongoose';

const catGroomingsSchema = new mongoose.Schema({
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

const cat_groomings_model = mongoose.model('Cat_Groomings', catGroomingsSchema);

export default cat_groomings_model;