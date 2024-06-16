--  ------------------------
--  BDD Restosducoeur_API
--  ------------------------

DROP DATABASE Restosducoeur_API;

CREATE DATABASE Restosducoeur_API;

USE Restosducoeur_API;

--  ------------------------
--  CREATION DES TABLES
--  ------------------------

CREATE TABLE IF NOT EXISTS Association (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_ass VARCHAR(25) NOT NULL,
    date_create DATE NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone CHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    activity_area VARCHAR(25) NOT NULL
);