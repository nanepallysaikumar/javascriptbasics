const http = require('http');
const fs = require('fs');



const site = http.createServer(function(req,res) {
    fs.readFile('data.json', function(error,data) {
        res.setHeader('Content-Type','application/json');
        res.write(data);
        console.log("hi i am listening to the port");
        res.end();
    });
    /*console.log("hi i am listening to the port");
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(data));
    res.end();*/
});

site.listen(3333);