const mongoose = require("mongoose")

const schema = mongoose.Schema({
    userid:String,
    createdAt: {type: Date, default: Date.now},
   
})

module.exports = mongoose.model("Customerlogverify", schema)