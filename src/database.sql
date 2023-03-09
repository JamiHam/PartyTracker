--Creating a database called partyevents
CREATE DATABASE IF NOT EXISTS partyevents;
--Go to the new database
USE partyevents;

--Create table to database
CREATE TABLE party (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    date VARCHAR(50) NOT NULL,
    time VARCHAR(5) NOT NULL,
    address VARCHAR (50),
    city VARCHAR (25),
    x DOUBLE,
    y DOUBLE,
    PRIMARY KEY(id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(150) NOT NULL,
    creation_time TIMESTAMP NOT NULL,
    role VARCHAR(25) NOT NULL,
    PRIMARY KEY(id)
);

--Insert base information to database
INSERT INTO party (name, date, time, address, city, x, y)
VALUES ("Tuska", "220701", "14:00", "Suvilahti", "Helsinki", 60.166640739, 24.943536799);
INSERT INTO party (name, date, time, address, city, x, y)
VALUES ("Flow Festival", "220812", "14:00", "Suvilahti", "Helsinki", 60.166640739, 24.943536799);
INSERT INTO party (name, date, time, address, city, x, y)
VALUES ("Ruisrock", "220708", "14:00", "Ruissalo", "Turku", 60.43296293296505, 22.155743924106414);

--If you want to check data from tables:
SELECT * FROM party;