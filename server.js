//Dependencies
var express = require("express");

//Express server set up
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router - server map to respond to users request/visits
require("./routes/route1")(app);

//Listener to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  