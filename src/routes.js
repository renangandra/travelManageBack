const express = require('express');
const fs = require('fs')

const { adminAuth,authentication } =require('./app/middlewares')

const DefaultControllersUsers =require('./app/controllers/DefaultControllers')
const {
  GetItineraries,
  SetItineraries,
  UpdateItineraries,
  DeleteItineraries,
} =require('./app/controllers/Itineraries')

const {
 GetUsers,
 SetUsers,
 Login,
 DeleteUsers,
 UpdateUsers
} =require('./app/controllers/Users')

const Uploads =require('./app/controllers/Uploads')

const { GetTravelTips,SetTravelTips, UpdateTravelTips, DeleteTravelTips  } =require('./app/controllers/TravelTips')

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers);

//user
router.post('/login', authentication, Login);
router.get('/users', authentication, GetUsers);
router.post('/users', authentication,   SetUsers);
router.put('/users/:id', authentication, UpdateUsers);
router.delete('/users/:id', authentication, DeleteUsers);

//itineraries
router.get('/itineraries', authentication, GetItineraries);
router.post('/itineraries', authentication, SetItineraries);
router.put('/itineraries/:id', authentication, UpdateItineraries);
router.delete('/itineraries/:id', authentication, DeleteItineraries);

//travel tips
router.get('/travel-tips',authentication, GetTravelTips);
router.post('/travel-tips', authentication, SetTravelTips);
router.put('/travel-tips/:id', authentication, UpdateTravelTips);
router.delete('/travel-tips/:id', authentication, DeleteTravelTips);

//uploads
router.post('/upload', authentication, Uploads);

module.exports = router;
