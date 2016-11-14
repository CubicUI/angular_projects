var express = require('express'); //express server required
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var app = express(); //variable with that function
var basePath = "/service";
 
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

var getPostObj = { //add
    person: {
        query: "INSERT INTO personinfo SET ?",
        ids: [],
        url: basePath + "/person"
    },
    account: {
        query: "INSERT INTO account SET ?",
        ids: [],
        url: basePath + "/account"
    }
}

var getPutObj = { //edit
    person: {
        query:"UPDATE personinfo SET ? WHERE personinfoid = ?",
        ids: ["personid"],
        url: basePath + "/person/:personid"
    },
    account: {
        query: "UPDATE account SET ? WHERE personid = ?",
        ids: ["personid"],
        url: basePath + "/account/:personid"
    }
}

//json object that contains the parameters for calling the database records
var getServiceObj = { //retrieve
    person: {
        query:"SELECT * FROM personinfo",
        ids:[],
        url:basePath+"/person"
    },
    personID: {
        url: basePath+"/person/:personid",
        ids: ["personid"],
        query: "SELECT * FROM personinfo WHERE personinfoid=?"
    },
    account: {
        query:"SELECT * FROM account",
        ids:[],
        url:basePath+"/account"
    },
    accountPersonID: {
        query: "SELECT * FROM account WHERE personid=?",
        ids: ["personid"],
        url: basePath+"/account/:personid"
    },
    personAccount: {
        query: "SELECT * FROM personinfo a INNER JOIN account b on b.personid = a.personinfoid WHERE a.personinfoid=?",
        ids: ["xid"],
        url: basePath+"/person/:xid/account"
    }
};

var getDeleteObj = { //delete
    person: {
        query: "DELETE FROM personinfo WHERE personinfoid = ?",
        ids: ["personid"],
        url: basePath + "/person/:personid"
    },
    account: {
        query: "DELETE FROM account WHERE accountid = ?",
        ids: ["accountid"],
        url: basePath + "/accound/:accountid"
    }
}

/*var getServiceByIdObj = {
    personID: {
        url: basePath+"/person/:personid",
        ids: ["personid"],
        query: "SELECT * FROM personinfo where personinfoid=?"
    },
    accountPersonID: {
        url: basePath+"/account/:personid",
        ids: ["personid"],
        query: "SELECT * FROM account where personid=?"
    }
};*/

for(var key in getPostObj) {
    postServices(getPostObj[key].url,getPostObj[key].ids,getPostObj[key].query);
}

for(var key in getPutObj) {
    putServices(getPutObj[key].url,getPutObj[key].ids,getPutObj[key].query);
}

//looping through the json object of tables in the databse
for(var key in getServiceObj) {
//    console.log(key);
    getServices(getServiceObj[key].url,getServiceObj[key].ids,getServiceObj[key].query);
}

for(var key in getDeleteObj) {
    deleteServices(getDeleteObj[key].url,getDeleteObj[key].ids,getDeleteObj[key].query);
}

/*for(var key in getServiceByIdObj) {
    getServices(getServiceByIdObj[key].url,getServiceByIdObj[key].ids,getServiceByIdObj[key].query);
}*/

/*var query = "SELECT * FROM personinfo";
var ids = [];
var url = basePath + "/person"
getServices(url,ids,query); //call the function to get the service
//if you want to call another table, copy these 3 variables and call the function again.

var query = "SELECT * FROM account";
var ids = [];
var url = basePath + "/account"
getServices(url,ids,query);*/

//create post 
function postServices(url, ids, query) {
    app.post(url, function(req, res, next) {
        
        var reqObj = req.body;
        
        req.getConnection(function(err, connection) {
            if (err) return next(err);
            
            connection.query(query, reqObj, function(err, results) {
                if (err) {
                console.log(err);
                return next("Mysql error, check post query");
                }
                res.json(results);
            });
        });
    });
}

function putServices(url, ids, query) {
    app.put(url, function(req, res, next) {
        var id = req.params[ids];
        var reqObj = req.body;
        
        req.getConnection(function(err, connection) {
            if (err) return next(err);
            
            connection.query(query, [reqObj, id], function(err, results) {
                if (err) {
                console.log(err);
                return next("Mysql error, check put query");
                }
                res.json(results);
            });
        });
    });
}

//function for creating the rest API to get services
function getServices(url, ids, query) {
    app.get(url, function(req,res,next){
        
        req.getConnection(function(err, connection) {
            if (err) {
                return next(err);
            }
            connection.query(query,req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check get query");
                }
                res.json(results);
            });
        });
    });
}

function deleteServices (url, ids, query) {
    app.delete(url, function(req, res, next) {
        
        req.getConnection(function (err, connection) {
            if (err) {
                return next(err);
            }
            connection.query(query, req.params[ids], function(err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check delete query");
                }
                res.json(results);
            });
        });
    });
}

/*app.get('/service/person', function(req,res,next){
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
});*/

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


//hosting port
app.listen(3000, function(req, res) {
    console.log('listening to port 3000');
});