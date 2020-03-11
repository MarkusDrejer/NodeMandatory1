const express = require("express");
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    const htmlFolder = __dirname + '/public/html';
    const htmlFiles = [];
    fs.readdirSync(htmlFolder).forEach(file => {
        htmlFiles.push(file);
      });
    let temp = htmlFiles[Math.floor(Math.random() * htmlFiles.length)];
    let page = temp.substring(0, temp.indexOf("."));

    return res.redirect("/" + page);
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