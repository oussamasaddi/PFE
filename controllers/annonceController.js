const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var Annonce = require('../models/annonce.model');

  router.post('/',(req, res , next) =>{
    
    var annoncee = new Annonce({
        _id: new mongoose.Types.ObjectId(),
        
        eventName : req.body.eventName,
        eventDateFrom : req.body.eventDateFrom,
        eventDateTo : req.body.eventDateTo,
        eventGenre : req.body.eventGenre,
        eventPlaceFrom: req.body.eventPlaceFrom,
        eventPlaceTo : req.body.eventPlaceTo,
        eventDescription : req.body.eventDescription,
        phone : req.body.phone,
        eventPictures : req.body.eventPictures,
        Verif : req.body.Verif ,
        userID : req.body.userID,
        
        
      });
      console.log(req.body.eventPictures)
      annoncee.save().then(result =>{
        console.log(result);
      }).catch(err => console.log(err));
  
      res.status(201).json({
        message : "annonce added",
        createdEvent: annoncee
      });
      
  });
  router.get('/:id' , (req , res) => {
    const userId = req.params.id;
    Annonce.find({userID : userId} , 
      (err , data) => {
        res.send(data);
      })
  } , );

  router.get('/', function(req, res, next) {
    Annonce.find(function(err,data){
      res.json(data);
  });
  
});



module.exports= router;