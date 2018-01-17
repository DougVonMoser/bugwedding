console.log('holla fo dat dolla!')

const express = require('express');
const app = express();
const path = require('path');

let PORT = process.env.NODE_ENV === 'production' ? 80 : 8081;

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

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`)
});