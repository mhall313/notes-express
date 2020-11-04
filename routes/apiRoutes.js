//Dependencies
const fs = require("fs").promises;
const express = require('express');
const { stringify } = require("querystring");
const app = express();

//Global array to push notes to
const notesArray = [];
let i = 1;

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
            //Future state to use uuid module to create unique ids
            id: i
        }
        notesArray.push(JSON.stringify(newNote));
        i++;

        //Adds data to the db.json file
        await fs.writeFile("db/db.json", "[" + notesArray + "]");
        res.json(true);
    });

    //api delete request
    app.delete("/api/notes/:id", async function(req, res){
        const id = req.params.id;
        const getData = await fs.readFile("db/db.json", "utf8");
        const parsedData = JSON.parse(getData);
        for (let j = 0; j < parsedData.length; j ++){
            if(id == parsedData[j].id){
                const deleteIndex = (parsedData[j].id - 1);
                parsedData.splice(deleteIndex, 1); 
                const stringifyData = JSON.stringify(parsedData);
                await fs.writeFile("db/db.json", stringifyData);
            }
        }
        res.json(true);
    });
}