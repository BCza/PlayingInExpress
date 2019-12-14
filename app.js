var express = require('express');
var app = express();
const callDarkSky = require('./dark_sky_api/dark_sky_helper');

app.get('/', function(req, res) {
  const response = callDarkSky.callDarkSky().then((value) => {
    res.json(value);
  }, (error) => {
    res.json(error.json);
  });
  console.log(response);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
