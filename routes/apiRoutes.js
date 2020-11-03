//Load Data
var notesData = require("../db/db.json");
//Dependencies
var fs = require("fs");
var express = require('express');

// express server set up? do we need this here and in the server.js?
var app = express();

//Routing
module.exports = function(app){
    //api get request
    app.get("api/notes", function(req, res){
        res.json(notesData);
    });

    // api post request
    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        //need to add data to the db.json
        fs.appendFile('db.json', JSON.stringify(newNote), function(err){
            if (err) {
                return console.log(err);
              }
        });
    });

    //api delete request
    // app.delete("api/notes/", function(req, res){

    // });
}