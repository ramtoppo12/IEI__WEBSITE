const express = require("express");

const app = express();

const bodyParser = require("body-parser");

global.__basedir = __dirname;

const db = require("./Database/db.config");

const router = require("./Router/router.js");

const cors = require("cors");

const CorsOptions = {
    origin:"https://localhost:4200",
    optionSucessStatus:200
}

app.use(cors(CorsOptions));

app.use(bodyParser.json());

app.use(express.static("resources"));
app.use('/',router);

const server = app.listen(8000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});
