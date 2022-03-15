//create a server
//http enables you to make request to servers
const http = require('http');
//server that listens on port 8080
const port = 8080;

//server object
const server = http.createServer(function(req,res){
  console.log('Received' + req.method + 'request for:' + req.url);

  //1.send headers 
  res.writeHead(200, {'Content-Type':'text/plain'});

  //2.send body response When the Port is accessed, it responds with Hello World
  res.end('Hello World');
})
//Add a listener so that your server will have a way to handle incoming connections.
//Listen for incoming connections.
server.listen(8080, 'localhost', null, function (){
// log a message that the server is listening and port
console.log('Server is listening on localhost:8080');

});