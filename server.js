var express = require('express'); //express server required
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var app = express(); //variable with that function
 
app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
    extended: true
}));

//Create SQL Connection
app.use(connection(mysql, {
    host: 'localhost',
    user: 'personuser',
    password: 'personuser123',
    database: 'persontable'
}, 'request'));

app.get('/service/person', function(req,res,next){
    var ids = [];
    var query = "SELECT * FROM personinfo";
    
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        
        connection.query(query,ids, function (err, results) {
            if (err) {
                console.log(err);
                return next("Myssql error, check query)");
            }
            res.json(results);
        });
    });
});



//Hosting static files
app.use(express.static(__dirname + '/'));


/*app.get('/', function(req, res) {
  res.send('Hello World');
});*/
 
//you need at least 1 router - this will be your home page. You can use the 
//send is for string messages. redirect can be used for links
app.get('/', function(req, res) {
    res.redirect('/views/index2.html');
})

/*app.get('/landing', function(req, res) {
    res.send('This is from the landing');
});

app.get('/landing/person', function(req, res) {
    res.send('This is from the person landing');
});*/

//hosting port
app.listen(3000, function(req, res) {
    console.log('listening to port 3000');
});