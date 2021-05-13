const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PFEproject',{useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    if(!err) {console.log('MongoDB connection succedd.')}
    else{console.log('Error in DB connection :' + err)}
});
require('./user.model');
require('./annonce.model');