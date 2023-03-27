const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema(
    {
        itemname: { type: String, required: true },
        quantity: { type: String, required: true },
        discount: { type: String, required: true },
        price: { type: String, required: true },
        Totalamount:{ type: String, required: true },
        gst:{ type: String, required: true },
        userid:{type: String, required: true },
        status:{type: String, default: "0" }
    }
)

module.exports = mongoose.model('Cart', CartSchema);