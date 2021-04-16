const port = 3001
const http = require('http')
const puppy = require('./puppy')
const intro = require('./introPage')
httpStatus = require("http-status-codes")
app = http.createServer()

const routesMapping = {
    '/puppy' : puppy.getPuppy,
    '/' : intro.getIntro
}
app.on('request', (req, res) => {
    let body = []
    req.on('data', (bodyData) => {
        body.push(bodyData)
    })
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let response = ""
    if (routesMapping[req.url]) response = routesMapping[req.url]()
    else response = intro.getIntro()
    res.end(response);
});
app.listen(port);
console.log(`The server has started and is listening on port number:
   ➥ ${port}`);