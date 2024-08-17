const fs = require("fs"); //file system
const path = require("path");

const { text } = require("body-parser");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit?</button></form>'
  );
}); //localhost:3000/

app.post("/store-user", function (req, res) {
  const username = req.body.username;

  const filepath = path.join(__dirname, "data", "users.json"); //absolute path to our directory

  const fileData = fs.readFileSync(filepath); //read
  const existingUsers = JSON.parse(fileData); //translate text to JS object

  existingUsers.push(username); //add new user

  fs.writeFileSync(filepath, JSON.stringify(existingUsers)); //update JSON file

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filepath = path.join(__dirname, "data", "users.json"); //absolute path to our directory

  const fileData = fs.readFileSync(filepath); //read
  const existingUsers = JSON.parse(fileData); //translate text to JS object

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);
