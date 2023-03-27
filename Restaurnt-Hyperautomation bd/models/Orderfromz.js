const mongoose = require("mongoose")

const schema = mongoose.Schema({
    orderid: String,
	contact: String,
    source: {
        data: Buffer,
        contentType: String
    },
    pickuptype:String,
    items:String,
    Amount:Number,
    Gst:Number,
    discount:Number,
    netamount:Number,
    paymenttype:String,
    paymentstatus:String,
    orderStatus:String,
    customerid:String,

    createdAt: {type: Date, default: Date.now},
   
})

module.exports = mongoose.model("Orderfromz", schema)