import mongoose from "mongoose";

const CartproductSchema= new mongoose.Schema({
productId:{
    type: mongoose.Schema.ObjectId,
    ref: 'product'
    
},
quantity: {
    type :Number,
    default:1
},
UserId:{
    type: mongoose.Schema.ObjectId,
    ref:'user'
}

},{
    timestamps:true
})

const CartproductModel=mongoose.model('Cartproduct',CartproductSchema)

export default CartproductModel