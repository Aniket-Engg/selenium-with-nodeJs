const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + '/client'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
    res.send("Server is running");
});

app.get('/jsonfile', function(req, res){
    let rawdata = fs.readFileSync('record.json');  
    let records = JSON.parse(rawdata); 
    records['aniket@gmail.com'].push({"name" : "ani"}); 
    console.log(records);
    fs.writeFileSync('record.json', JSON.stringify(records));
    console.log(records); 
    res.json(records);  
})

app.post('/record', function(req, res){
    req.on('data', chunk => {
        var obj = chunk.toString();
        obj = JSON.parse(obj);
        let rawdata = fs.readFileSync('record.json');  
        let allData = JSON.parse(rawdata); 
        allData['records'].push(obj); 
        fs.writeFileSync('record.json', JSON.stringify(allData));
    });
    res.send(true);
})

app.listen('3000', function() {
    console.log("server is running on localhost:3000");
})