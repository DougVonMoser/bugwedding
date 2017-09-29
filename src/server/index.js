const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '../../dist/')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './layouts/default.html'));
});

app.listen(8080, function(){
    console.log(`listening on port 8080`)
});