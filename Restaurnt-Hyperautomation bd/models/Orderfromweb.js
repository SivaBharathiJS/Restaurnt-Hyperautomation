const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
      customerid: {
        type: String,
        required: true,
        
      },
      orderItems: [
        {
          itemname: { type: String, required: true },
        quantity: { type: String, required: true },
        discount: { type: String, required: true },
        price: { type: String, required: true },
        Totalamount:{ type: String, required: true },
        gst:{ type: String, required: true },
        },
      ],
      shippingAddress: {
        address: { type: String, required: true },
        phone: { type: String, required: true },
        
      },
      paymentMethod: {
        type: String,
      },
      paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
      taxPrice: {
        type: Number,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        default: 0.0,
      },
      isPaid: {
        type: Boolean,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );
  
module.exports = mongoose.model("Orderfromweb", orderSchema);
