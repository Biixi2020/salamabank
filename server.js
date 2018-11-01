const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/src'));

// Send all requests to index.html
app.get('/', function(req, res) {
  res.render('index.html');
});

// default Heroku port
app.listen(5000);
console.log("Server is listen on port");
console.log(__dirname);