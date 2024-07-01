const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const express = require("express");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = 8080;
const mysecret = "MyKey";

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
    database: "Restosducoeur_API"
});

// Ouvrir la connection à mysql
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// Récupération du header bearer
const extractBearerToken = headerValue =>
{
    if (typeof headerValue !== "string") 
    {
        return false;
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}

// Vérification du token user
const checkTokenMiddleware = (req, res, next) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);

    // Présence du token
    if (!accessToken) 
    {
        return res.status(401).json
        ({
            message: "Error. Need a token"
        });    
    }

    // Véracité du token
    jsonwebtoken.verify(accessToken, mysecret, (err, decoded) =>
    {
        if (err) 
        {
            return res.status(401).json
            ({
                message: "Invalid Token..."
            });
        }
        else
        {
            return next();
        }
    })
}