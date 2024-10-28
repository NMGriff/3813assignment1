var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');
var path = require('path');

//cors
app.use(cors());
//Use path.join to saftely access directory outside project root
app.use(express.static(path.join(__dirname, '../dist/assignment1/browser')));

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
});

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: " + host + 'port:' + port);
});

