var http = require('http');
var url = require("url");
var fs = require("fs");
var path = require("path");

let serverDir = path.join(__dirname, "../server");
let clientDir = path.join(__dirname, "../client");

let objArray = [];

var server = http.createServer(function(req, res) {
    let parsedUrl = url.parse(req.url);
    let parsedJSON = '/server/data.json';
    fs.readFile('index.html', function(err, data){
        if(parsedUrl.pathname === '/'){
            res.writeHead(200, {"Content-Type": "text/html"});
            let rs = fs.createReadStream(path.join(clientDir, "index.html"));
            rs.pipe(res);
        }
        else if(parsedUrl.pathname === '/api/chrips'){
            if(req.method === "GET"){
                let rs = fs.createReadStream(path.join(serverDir, "data.json"));
                rs.pipe(res);
                res.write(200, {"Content-Type": "text/json"});
                return res.end();
            }
            else if(req.method === "POST"){
                let rs = fs.createReadStream(path.join(serverDir, "data.json"));
                var obj = JSON.parse(text);
                obj.push(objArray);
                var jsonArray = JSON.stringify(objArray);
                fs.writeFile('data.json', json, 'utf8', callback);
                res.write(201, {"Content-Type": "text/json"});
                return res.end();
            }
        }else if(parsedUrl.pathname === '/styles.css'){
            res.writeHead(200, {"Content-Type": "text/css"});
            let rs = fs.createReadStream(path.join(clientDir, "styles.css"));
            rs.pipe(res);
        }else if(err){
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found");
        }
    });
});
server.listen(3000);