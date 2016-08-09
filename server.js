//App depencencies -----------------------------------------/
var express         = require('express');
var bodyParser      = require('body-parser');
var exphbs          = require('express-handlebars');
var methodOverride  = require('method-override');
var app             = express();
var connection      = require('./config/connection');
var PORT            = 3000;
var orm             = require('./config/orm');

//Handlebars configureation
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//ROUTES!!!!!!
app.get('/', function(req, res){
    connection.query('SELECT * FROM burgers;', function(err,rows, data){
        res.render('index', {rows: rows});
    })
});

app.get('/api', function(req, res){
    connection.query('SELECT * FROM burgers;', function(err, data){
        if (err) throw err;
        res.send(data);
    })
})

app.get('/api/test', function(req, res){

})

app.listen(PORT);
