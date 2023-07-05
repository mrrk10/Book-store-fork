const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    } ,
    description: {
      type:String,
      required:true,
    },
    pic:{
      type:String,
    },
    categories:{
        type:String,
        required:true

    },
      price:{
        type:Number,
        required:true,
        // default:'Rs.100'
      },
      amount:{
        type:Number,
        default:1
      },

    
    createdAt : { 
      type : Date, default: Date.now
     }
    
  
  
 
});
  
  const Blogs = mongoose.model('Blogs', blogSchema);

  module.exports=Blogs
  