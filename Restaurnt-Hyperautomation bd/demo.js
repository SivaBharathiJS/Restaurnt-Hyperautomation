
// const port=5000


// const express = require('express');
// const app = express();
// const geocoder = require('geocoder');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const cors = require('cors')

// app.use(cors())

// const mongoose = require('mongoose');

// app.post('/', (req,res) => {
//   res.send("Hello");
// });
// // Function to calculate the distance between two points in kilometers using the Haversine formula
// function calculateDistance(lat1, lng1, lat2, lng2) {
//   const earthRadiusKm = 6371;

//   const dLat = degreesToRadians(lat2 - lat1);
//   const dLng = degreesToRadians(lng2 - lng1);

//   const lat1Rad = degreesToRadians(lat1);
//   const lat2Rad = degreesToRadians(lat2);

//   const a =
//     Math.sin(dLat / 2) ** 2 +
//     Math.sin(dLng / 2) ** 2 * Math.cos(lat1Rad) * Math.cos(lat2Rad);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return earthRadiusKm * c;
// }

// // Function to convert degrees to radians
// function degreesToRadians(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// app.post('/api/location', (req, res) => {
  
//   const { loc } = req.body;
//   console.log(loc)
//   const { address2 } = 'Nagercoil';
//   const { num } =req.body;
//   console.log(num)
//   const { name } =req.body;
//   console.log(name)
//   mongoose.connect('mongodb://localhost/merndb');
  


//   // Geocode address 1
// //   geocoder.geocode(loc, async (err, data1) => {
// //     if (err || !data1.results.length) {
// //       return res.status(400).send(`Unable to find location: ${loc}`);
// //     }
// //     const { lat: lat1, lng: lng1 } = data1.results[0].geometry.location;

// //     // Geocode address 2
// //  geocoder.geocode(address2, async (err, data2) => {
// //     if (err || !data2.results.length) {
// //         return res.status(400).send(`Unable to find location: ${address2}`);
// //       }
// //       const { lat: lat2, lng: lng2 } = data2.results[0].geometry.location;

// //       // Calculate distance between the two places
// //       const distance = calculateDistance(lat1, lng1, lat2, lng2);
// //       res.send(
// //         `The distance between ${loc} and ${address2} is ${distance.toFixed(
// //           2
// //         )} kilometers.`
// //       );
// //     });

// //   });

//   // backend db connection

// });



// // 











// app.listen(port,() => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })

const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/merndb');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!');
});