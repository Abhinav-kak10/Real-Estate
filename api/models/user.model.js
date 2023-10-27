import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,  // it must contain username
        unique: true,  //username must unique
    },
    email:{
        type:String,
        require:true, 
        unique: true, 
    },
    password:{
        type:String,
        require:true, 
        
    },
    avatar:{
        type:String,
        default: "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"
    },

}, {timestamps:true})  //update time of creation and updation of user

const User=mongoose.model('User',userSchema);

export default User;