const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var User = require('../models/user.model');


  router.post('/',(req, res , next) =>{
    
    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        
        fullName : req.body.fullName,
        email : req.body.email,
        phone : req.body.phone,
        State : req.body.State,
        CIN : req.body.CIN,
        picture : req.body.picture,
        Role : req.body.Role,
        job : req.body.job,
        userID : req.body.userID,
        
        
      });
      user.save().then(result =>{
        console.log(result);
      }).catch(err => console.log(err));
  
      res.status(201).json({
        message : "user added",
        createdEvent: user
      });
      //const token = jwt.sign({employeeId : employee._id },jwtkey);
      //res.send({token});
    });



  router.get('/:id' , (req , res) => {
    const userId = req.params.id;
    User.find({userID : userId} , 
      (err , data) => {
        res.send(data);
      })
  } , );


  router.get('/' , (req , res) => {
    
    User.find(
      (err , data) => {
        
        res.json(data);
      })
  } , );



  









module.exports= router;