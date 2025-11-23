import mongoose from "mongoose";

const OrderSchema= new mongoose.Schema({
userId:{
    type: mongoose.Schema.ObjectId,
    ref: 'user'
    
},
orderId: {
    type :String,
    required: [true,"provide orderId"],
    unique:true
},

productId: {
    type: mongoose.Schema.ObjecctId,
    ref: "product"

},

product_details:{
    name: String,
    image: Array,

},
paymentId:{
    type: String,
    default: ""
},
payment_status:{
    type:String,
    default: ""
},
delivery_address:{
    type: mongoose.Schema.ObjectId,
    ref: 'address'
},
subTotalAmt:{
    type:Number,
    default:0
},
totalAmt:{
    type:Number,
    default:0
},
invoice_receipt:{
    type: String,
    default:""
}


},{
    timestamps:true
})

const OrderModel=mongoose.model('Order',OrderSchema)

export default OrderModel