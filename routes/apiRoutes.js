//Load Data - a nightmare :)
var notesData = require("../db/db.json");
//Dependencies
var fs = require("fs");
var express = require('express');

// express server set up? do we need this here and in the server.js?
var app = express();
const notesArray = [];
//Routing
module.exports = function(app){
    //api get request
    app.get("/api/notes", function(req, res){
        res.json(notesData);
    });

    // api post request
    app.post("/api/notes", function(req, res){
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            //uuid module to create unique ids - make part of the process 
            id: ""
        }
        notesArray.push(JSON.stringify(newNote));
        //data adding to the db.json file
        fs.writeFile("db/db.json", "[" + notesArray + "]", 'utf-8', function(err) {
            if (err) throw err
            console.log('Note Added');
        });
        
    
       
    });

    //api delete request
    app.delete("api/notes/", function(req, res){

    });
}