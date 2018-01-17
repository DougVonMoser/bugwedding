console.log('holla fo dat dolla!')

const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, './dist/')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './layouts/default.html'));
});

app.get('/accommodations', function(req, res){
    res.sendFile(path.join(__dirname, './layouts/accommodations.html'));
});

app.get('/details', function(req, res){
    res.sendFile(path.join(__dirname, './layouts/details.html'));
});

app.get('/registry', function(req, res){
    res.sendFile(path.join(__dirname, './layouts/registry.html'));
});

app.listen(8081, function(){
    console.log(`listening on port 8081`)
});