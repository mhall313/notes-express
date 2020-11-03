//Dependencies - include path package to get correct file path for html 
var path = require("path");


//HTML get requests - handles when user "visits" a page
module.exports = function(app){
    //Get request for notes html page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    //Get request for any other route - aka home/index
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}