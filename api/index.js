let express = require('express')
let app = express();
let apiRoutes = require("./api-routes")
let bodyParser = require ('body-parser');
let mongoose = require ('mongoose');
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
 mongoose.connect('mongodb://localhost:27017/ageectDB', { useNewUrlParser: true});
 var db = mongoose.connection;

 // Added check for DB connection
if(!db)
console.log("Error connecting db")
else
console.log("Db connected successfully")

app.use('/api', apiRoutes)
app.get('/', (req, res) => res.send('Hello World with Express'));
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});