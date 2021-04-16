const port = 3001
const http = require('http')
const puppy = require('./views/puppy')
const intro = require('./views/home')
const navigation = require('./components/navigation')
const allPuppies = require('./views/dogs')

httpStatus = require("http-status-codes")
app = http.createServer()

const routesMapping = {
    '/puppy' : puppy,
    '/all-puppies': allPuppies,
    '/' : intro
}
app.on('request', (req, res) => {
    let body = []
    req.on('data', (bodyData) => {
        body.push(bodyData)
    })
    req.on("end", () => {
        // TODO: use body contents
        body = Buffer.concat(body).toString();
    });

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let response = `<!DOCTYPE html>
    <html>
     <head>
     <meta charset="utf-8">
     <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐶 </text></svg>">
     <title>Pupper Companion</title>
     </head>
     <body>`
    response += navigation.get()
    if (routesMapping[req.url]) response += routesMapping[req.url].get()
    else response += intro.get()
    response += `
    </body>
   </html>`
    res.end(response);
});
app.listen(port);
console.log(`The server has started and is listening on port number:
   ➥ ${port}`);