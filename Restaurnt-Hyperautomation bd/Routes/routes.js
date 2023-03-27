const express = require("express")

const router = express.Router()
const customer = require("./customer/customer")
const render =require("./customer/render")
// Get all posts
router.use("/customer",customer)
router.use("/render",render)
module.exports = router