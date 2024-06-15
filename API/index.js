const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const express = require("express");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = 8080;
const accessToken = "MyKey";

// Démarrer Express
const app = express();

// Activation de CORS
app.use(cors());
// Activation de Morgan
app.use(morgan('tiny'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connection à la BDD
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hadil",
    database: ""
});

