//Load Data

var notesData = require("../data/notes");

//Routing
module.exports = function(app){
    //api get request
    app.get("api/notes", function(req, res){
        //res.json(notesData);
    });

    // api post request
    app.post("/api/notes", function(req, res){
        notesData.push(req);
        //res.json(true);
    });

    //api delete request
    app.delete("api/notes/", function(req, res){
        
    });
}