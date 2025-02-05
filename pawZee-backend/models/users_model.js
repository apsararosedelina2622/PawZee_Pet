import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true 
    },
    email : {
        type: String,
        required: true 
    },
    mobile : {
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true 
    },
    address : {
        type: String,
        required: true 
    },
    profile_photo: {
        type: String,  
        default: null,   
    },
});

const users_model = mongoose.model('User_Data', userSchema);

export default users_model;


