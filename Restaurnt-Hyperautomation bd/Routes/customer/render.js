const express = require("express")
const render = require("../../models/Render")
const orderfromz = require("../../models/Orderfromz")
const orderfroms = require("../../models/Orderfroms")
const orderfromweb = require("../../models/Orderfromweb")
const customerlog = require("../../models/Optv")
const cart = require("../../models/Cart")
const axios=require("axios")
const cheerio =require("cheerio")
var fs = require('fs');
var path = require('path');



const router = express.Router()
const bodyParser = require('body-parser');
        router.use(bodyParser.urlencoded({ extended: false }));
        router.use(bodyParser.json());
        const cors = require('cors')
        router.use(cors())
// https://www.section.io/engineering-education/build-a-web-scraper-using-cheerio/

// order render view

router.get("/orderfromzview", async (req, res) => {

    const logs = await orderfromz.find()
    res.send(logs)
})
router.get("/orderfromsview", async (req, res) => {

  const logs = await orderfroms.find()
  res.send(logs)
})
router.get("/orderfromwebview", async (req, res) => {

  const logs = await orderfromweb.find()
  res.send(logs)
})
router.post("/orderfromwebsave/:iduser", async (req, res) => {
 const c1 = await customerlog.find({_id:req.params.iduser})
 const c2 = await cart.find({userid:req.params.iduser})

 await cart.updateMany(
  { userid: req.params.iduser }, // Filter for documents with matching userid
  { $set: { status: "1" } } // Update status field to "1"

);
 console.log(c1)
 const loc=c1[0]['location']
 const con=c1[0]["phonenumber"]
 console.log(loc,con)
 console.log(req.body)
 const logs = new orderfromweb({
    customerid:req.params.iduser,
    customername:c1["name"],
    orderItems: req.body,
    shippingAddress: {
      address: loc,
      phone:con,
    },
    
  
 })
    if (c2[0]["status"]=="1"){
      res.send("2")
    }else{
    await logs.save()
    res.send("1")}
  })


  
router.post("/orderfromssave", async (req, res) => {

    // const logs = new orderfroms({
        
    //   contact: "98765975554",
    //     source: {
    //       data: fs.readFileSync(path.join(__dirname + '/uploads/' + "n.jpg")),
    //       contentType: 'image/png/jpg'
    //   },
    //     pickuptype:"sdb",
    //     items:"grill chicken",
    //     Amount:250,
    //     Gst:10,
    //     discount:10,
    //     netamount:250,
    //     paymenttype:"online",
    //     paymentstatus:"paid",
    //     orderStatus:"preparing",
    //     customerid:"63fef8f65f57599221ce37cbuy",
    //         // status accept deny
    //         // available 
    //   })
    //   await logs.save()
      res.send("1")
    })
  
  


// render app

router.get("/rendersave", async (req, res) => {
        const url = "http://localhost:3000/s";
        axios(url).then((response) => {
        const html_data = response.data;
        console.log(response.data)
        const $ = cheerio.load(html_data);
        console.log($)
        
        $('.tr1').each((i,el)=>{
          const iii=$(el)
          .find('.td1')
          .text()
          
        })
      });
      
	// const logs = new render({
	// // 	orderid: "8765ou",
	// // contact: "987654321",
  // //   source:"ads",
  // //   pickuptype:"family",
  // //   items:"icecream",
  // //   Amount:230,
  // //   Gst:10,
  // //   discount:3,
  // //   netamount:237,
  // //   paymenttype:"online",
  // //   paymentstatus:"done",
  // //   orderStatus:"preparing",
  // //   customerid:"63fef8f65f57599221ce37cb",
  //       // status accept deny
  //       // available 
	// })
	// await logs.save()
	
})
router.get("/renderappview", async (req, res) => {
    const logs = await render.find()
    res.send(logs)
  })

router.put("/renderappupdate", async (req, res) => {
    res.send("update order status from render app")
  })



module.exports = router