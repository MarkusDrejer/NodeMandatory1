const express = require("express");
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    return res.redirect("/theory")
});

app.get("/commands", (req, res) => {
    return res.sendFile(__dirname + "/public/html/commands.html");
});

app.get("/tools", (req, res) => {
    return res.sendFile(__dirname + "/public/html/tools.html");
});

app.get("/theory", (req, res) => {
    return res.sendFile(__dirname + "/public/html/theory.html");
});

app.get("/imgFiles", (req, res) => {
    const imgFolder = __dirname + '/public/img';
    const imgFiles = [];
    fs.readdirSync(imgFolder).forEach(file => {
        imgFiles.push(file);
      });
      return res.send(imgFiles);
});

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error ocurred while trying to run server");
    }
    console.log("Server running on port:", server.address().port);
});