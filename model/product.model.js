import mongoose from "mongoose"

const ProductSchema= new mongoose.Schema({
name:  {
    type: String
},
image: {
    type: Array,
    default:[]
},
category:[
    {
    type: mongoose.Schema.ObjectId,
    ref: 'category'
}
],
subcategory:[
    {
        type: mongoose.Schema.ObjectId,
        ref:'subcategroy'
    }
],
unit:{
    type:String,
    default:""
},
stock:{
    type: Number,
    default: 0
},
price:{
    type: Number,
    default: null
},
discount:{
    type:Number,
    default:null
},
description:{
    type:string,
    default:""
},
more_details:{
    type:object,
    default:{}
},
public:{
    type: Boolean,
    default: true
},

},{
    timestamps:true
})

const ProductModel=mongoose.model('Product',ProductSchema)

export default ProductModel