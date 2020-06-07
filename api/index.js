let express = require('express')
let app = express();
let apiRoutes = require("./api-routes")
let bodyParser = require ('body-parser');
let mongoose = require ('mongoose');
var port = process.env.PORT || 8000;
var conectionUrl = 'mongodb://localhost:27017/ageectDB';

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
 mongoose.connect(conectionUrl, { useNewUrlParser: true});
 var db = mongoose.connection;

 // Added check for DB connection
if(!db)
console.log("Error connecting ageectDB")
else
console.log("AgeectDB connected successfully")

app.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});