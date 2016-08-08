//App depencencies -----------------------------------------/
var express         = require('express');
var bodyParser      = require('body-parser');
var exphbs          = require('express-handlebars');
var methodOverride  = require('method-override');
var app             = express();
var connection      = require('./config/connection')
var PORT            = 3000;

//Handlebars configureation
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//ROUTES!!!!!!
app.get('/', function(req, res){
    res.render('index');
});



app.listen(PORT);
