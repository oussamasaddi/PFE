const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


    _id: mongoose.Schema.Types.ObjectId,

    fullName: String,
         
   
    email : String,
         
   
    phone: String,
         
    
    State : String,

    CIN : String,

    picture : String ,


    Role : String , 

    job : String , 

    userID : String , 





    






         
    
    

});


module.exports = mongoose.model('User' , userSchema);