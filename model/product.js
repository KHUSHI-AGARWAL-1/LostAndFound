const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
   ownerid:{
    type:String,
   },

    name : {
       type:String,
       trim:true,
       required:true

    },
    img:{
      type:String,
      trim:true,
      default:"./image/product.js"
    },
    tag:{
      type:String,
      enum:['lost', 'found'],
      required:true
    },
    dec:{
        type:String,
        trim:true

    },
    contactphone:{
      type:Number,
      required:true,
    },
    contactemail:{
      type:String,
      required:true,
    }

})

const Product=mongoose.model("Product",productSchema);
module.exports=Product;