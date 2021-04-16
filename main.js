const port = 3001
const http = require('http')
const puppy = require('./puppy')

app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(200, {
   "Content-Type": "text/html"
    });
    let responseMessage = puppy.getPuppy();
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
    });
   app.listen(port);
   console.log(`The server has started and is listening on port number:
   ➥ ${port}`);