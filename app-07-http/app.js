const http = require('http');

const svr = http.createServer((req, res) => {
    if(req.url == "/") {
        res.write("<html><style>h1 {background-color: red;}</style><h1>Hello - You are at the root page</h1></html>");
        res.end();
    }
});

svr.on('connection', (sckt) => {
    console.log('An attempt to get connection');
});

// The following events cannot be triggered (or simulated) from the browsers. 
// These events are the ones to be done to the svr 

svr.on('close', () => 
{
    console.log('A connection is closed');
});

svr.on('end', () => 
{
    console.log('A connection is ended');
});

svr.on('sigint', () => 
{
    console.log('A connection is finished');
});

svr.listen(3001);

console.log('Server is listening on 3001');