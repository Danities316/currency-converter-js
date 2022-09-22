const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const convertedCurrency = require('./route/currency.route')

// require('dotenv').config();
const app = express();

//Parse application
app.use(bodyParser.urlencoded({ extended: false}))
// Parse application/json
app.use(bodyParser.json());
//static files
app.use(express.static('public'));


//Templating Engine using Handlebars
app.engine('hbs', exphbs.engine( {extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs');


//home page
app.get('/', (req, res) =>{
    res.render('home');
})



app.use('/', convertedCurrency)



module.exports = app;

