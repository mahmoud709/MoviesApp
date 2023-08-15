import { Schema, model } from "mongoose";

const userModel=new Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},)
export default model('user',userModel);