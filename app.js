/* eslint linebreak-style: ["error", "windows"]*/
require('dotenv').config();
const util = require('util');
const consoleStamp = require('console-stamp');
consoleStamp(console, {
  pattern: 'HH:MM:ss.l',
  colors: {
    stamp: 'yellow',
    label: 'blue'
  }
});

const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

const https = require('https');

app.get('/', function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req,res){
  // log("Handling POST request");
  // API key
  const apiKey = process.env.MAILCHIMP_API_KEY;
  // List ID
  const listID = process.env.MAILCHIMP_LIST_ID;
  // Server No.
  const serverNumber = process.env.MAILCHIMP_SERVER_NUMBER;
  // log("API key: ",apiKey);
  // log("list ID: ", listID);
  // log("Server No.: : ", serverNumber);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  // log('First name: ',firstName);
  // log('Last name: ',lastName);
  // log('E-mail: ',email);
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ],
    update_existing: true
  };
  const jsonData = JSON.stringify(data);
  // log("JSON Data: ",jsonData);
  const url = "https://" + serverNumber + ".api.mailchimp.com/3.0/lists/" + listID;
  const options = {
    method: "POST",
    auth: "Newsletter_NodeJS:" + apiKey
  }
  // log("URL: ", url);
  // log("Options: ", options);
  const request = https.request(url,options,function(response){
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data",function(data){
      log("Data: ",JSON.parse(data));
    })
  });
  request.write(jsonData);
  request.end();
})

app.post('/failure',function(req,res){
  res.redirect("/");
})

app.listen(port, () => log('Server is running on http://localhost:' + port));

/**
 * log - colorfull console.log() for "description: object" style logging
 *
 * @param  {string} msg description of the object
 * @param  {any}    obj will be logged using util.inspect()
 * @return {undefined}
 */
function log(msg, obj) {
  if (typeof obj === 'undefined') {
    return console.log('\x1b[36m' + msg + '\x1b[0m');
  }
  return console.log('\x1b[36m' + msg + '\x1b[0m' +
    util.inspect(obj, {
      colors: true
    }));
}
