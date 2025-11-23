import mongoose from "mongoose"

const subcategorySchema= new mongoose.Schema({
name:  {
    type: string,
    default: ""
},
image: {
    type: string,
    default:""
},
category:[
    {
     type: mongoose.Schema.ObjectId,
     ref:"category"   
    }
]
},{ 
    timestamps:true
})
const subcategoryModel= mongoose.model('subcategory', subcategorySchema )
export default subcategoryModel

