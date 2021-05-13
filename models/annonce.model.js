const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({


    _id: mongoose.Schema.Types.ObjectId,

    eventName : String,

    eventDateFrom : String,

    eventDateTo : String,

    eventGenre : String,

    eventPlaceFrom: String,

    eventPlaceTo : String,

    eventDescription : String,

    phone : String,

    eventPictures : [],

    Verif : String,
    
    userID : String,





});


module.exports = mongoose.model('Annonce' , annonceSchema);