var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/AngularFlickr", function(err, response){
    if(err){console.log( err); }
    else{console.log('Connecté à ' + db, ' + ', response); }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'Smb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', true);
    next();
});

var Image = mongo.Schema;

var ImageSchema = new Schema({
    url: { type: String },
    title: { type: String },
    owner: { type: String },
},{ versionKey: false });

var model = mongo.model('image', ImageSchema, 'image');

app.post("/api/SaveImage", function(req,res){
    var mod = new model(req.body);
    if(req.body.mode =="Save")
    {
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Enregistrement mis a jour"});
            }
        });
    }
})

app.post("/api/deleteImage",function(req,res){
    model.remove({ _id: req.body.id }, function(err) {
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Enregistrement supprimé"});
        }
    });
})

app.get("/api/getImage",function(req,res){
    model.find({}, function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

app.listen(8081, function () {
    console.log('App en route sur le port 8081')
})