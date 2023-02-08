// Install express first => npm install express

const express = require('express');
const appExpress = express();

appExpress.get('/', (req, res) => {
    res.send("<html><style>h1 {background-color: red;}</style><h1>Hello - You are at the root page</h1></html>");
});

appExpress.get('/api/functions', (req, res) => {
    res.send("<html><style>h2 {background-color: blue;}</style><h2>List of API functions</h2></html>");
});

appExpress.listen(3000, () => {
    console.log("Express app is listening @ port 3000 ...")
});

// Take note that there is no checking what the path is as we did in http.createServer

// To have the changes reflect in the testing browser, normally we need to stop the running by Ctrl + C, then rerun again (node app.js)
// To avoid this, to have all the changes automatically reflect, we can use nodemon => Node monitor
// npm install nodemon
// Then run instead => nodemon app.js
// Any changes to the files in this location will make the server automatically restart 