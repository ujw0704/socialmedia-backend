import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,


    },
    email:{
        type:String,
        required:true,
        trim:true,
    },

    password:{
        type:String,
        required: true , minlength : 6

    },

    role:{
        type: String, 
        default:"user",
         enum:[ 'admin', 'editor','subscriber']
    }

});
 const user1= mongoose.model("user1",userSchema)

 export default user1