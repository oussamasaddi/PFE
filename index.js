require('./models/db');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
const userController = require('./controllers/userController');
const annonceController = require('./controllers/annonceController');
app.use(bodyparser.urlencoded({
    extended: true 
}))
app.use(bodyparser.json());


app.use('/user',userController);
app.use('/annonce',annonceController);



app.listen(3000 , () => { console.log('Express server is started at port : 3000')});