//Dependencies
const fs = require("fs").promises;
const express = require('express');
const app = express();

//Global array to push notes to
const notesArray = [];

//Routing
module.exports = function(app){
    //api get request
    app.get("/api/notes", async function(req, res){
        const newnotesData = await fs.readFile("db/db.json", "utf8");
        res.json(JSON.parse(newnotesData));
    });

    // api post request
    app.post("/api/notes", async function(req, res){
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            //uuid module to create unique ids - make part of the process 
            id: ""
        }
        notesArray.push(JSON.stringify(newNote));

        //Adds data to the db.json file
        await fs.writeFile("db/db.json", "[" + notesArray + "]");
        res.json(true);
    });

    //api delete request
    app.delete("api/notes/", function(req, res){

    });
}