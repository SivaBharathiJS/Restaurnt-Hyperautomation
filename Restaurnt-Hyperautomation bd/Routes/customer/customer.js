const express = require("express")
const userlogverifyed = require("../../models/Customerlogverify")
const customerlog = require("../../models/Optv")
const Menulog = require("../../models/Menu")
const cart = require("../../models/Cart")
const router = express.Router()
const bodyParser = require('body-parser');
        router.use(bodyParser.urlencoded({ extended: false }));
        router.use(bodyParser.json());
        const cors = require('cors');
const { response } = require("express")
router.use(cors())

// Get all posts
router.get("/customerlogview", async (req, res) => {
	const logs = await customerlog.find()
	res.send(logs)
})

router.get("/otpview/:id", async (req, res) => {
  try {
    const foundData = await customerlog.findById(req.params.id);
    res.send(foundData);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.get("/menulogview", async (req, res) => {
	const logs = await Menulog.find()
	res.send(logs)
})

router.post("/menulogadd", async (req, res) => {
	// const logs = new Menulog({
  //   name: 'Chicken Fried Rice' ,
  //   type: "Fried Rice",
  //   description:"This little gem of a recipe was born from leftover veggies. It is beautiful, tasty, and nutritious. For a vegetarian option, substitute tofu or edamame for the chicken.",
  //      price: "170",
  //   category: "Non veg",
  // })
  // await logs.save()
  console.log("done")
  res.send("done")
})


 
router.post("/customerlogsave", async (req, res) => {
  var array = ["Colachel" ,"Marthandam", "Mondikadu" ,"Thackalay", "Mondaymarket","Nagercoil"];
  const randomotp = Math.floor(Math.random() * 900000) + 100000;
  const randomid = Math.floor(Math.random() * 900000000000) + 100000;
  const name = req.body.name
  const location = req.body.loc
  const phonenumber =req.body.num
  var a="0"
  var b=""
  const name1 = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const locate1 = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
                   
    if (array.includes(locate1)) {
              if (phonenumber.length ==10)       {

                  console.log('success');
                  const logs = new customerlog({
                    name:name1,
                    location: locate1,
                    phonenumber:phonenumber,
                    otp:randomotp,
                    _id:randomid
                  })
                  console.log(logs)
                  await logs.save()
                  a="1"
                  b=randomid
                 
                } else {
                  a="2"
                }

                                    }
    else{
     a="3"
    }
         var s={a:a,b:b}       
	res.send(s)

})
router.post("/cart", async (req, res) => {
  const itemname = req.body.itemname
  const userid = req.body.userid
  const Q = req.body.Q

  var a=""
  const Am = await Menulog.findOne({ name: itemname });

  const price = Am["price"]
  
  const logs = new cart({
    itemname:itemname,
    quantity:Q,
    discount: Q,
    price:price,
    Totalamount: Q*price,
    gst:Q,
    userid:userid,
  })
  const ca = await cart.find({ itemname: itemname });
console.log(ca);

try {
  let found = false;
  for (let i = 0; i < ca.length; i++) {
    const item = ca[i];
    if (item.itemname === itemname && item.userid === userid) {
      console.log("update");
      found = true;
      break;
    }
  }

  if (!found) {
    await logs.save();
    console.log("save");
  }

  res.send(found ? "2" : "1");
} catch (err) {
  console.log(err);
  res.send("error");
}
  

})
 


router.get("/cartview/:userid", async (req, res) => {
  try {
    const foundData = await cart.find({userid:req.params.userid});
    if (foundData[0]["status"]=="0"){res.send(foundData);}
    else{
      res.send([])
    }
    
  } catch (err) {
    res.status(500).send(err);
  }
})


router.put('/cartupdate/:id', async (req, res) => {
  try {
    const itemname = req.body.itemname
    const Q = req.body.quantity
    const Am = await Menulog.findOne({ name: itemname });

    const price = Am["price"]
    
    const logs = {
      itemname:itemname,
      quantity:Q,
      discount: Q,
      price:price,
      Totalamount: Q*price,
      gst:Q,
    }
    console.log(logs)
    const cartput = await cart.findOneAndUpdate(
      { _id: req.params.id }, // find the user with the given ID
      logs, // update the user with the data in the request body
      { new: true } // return the updated user object
    );
    res.json(cartput); // send the updated user object as the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post("/dboysave", async (req, res) => {
	const logs = new dboysave({
		name: req.body.name,
		phonenumber:req.body.num,
    customerid :req.body.customerid,
    orderid :req.body.orderid,
	})
	await logs.save()
	res.send("1")
})






module.exports = router