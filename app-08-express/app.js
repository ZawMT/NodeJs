// Install express first => npm install express

const express = require('express');
const appExpress = express();

appExpress.get('/', (req, res) => {
    res.send("<html><style>h1 {background-color: red;}</style><h1>Hello - You are at the root page</h1></html>");
});

appExpress.get('/api/functions', (req, res) => {
    res.send("<html><style>h2 {background-color: blue;}</style><h2>List of API functions</h2></html>");
});

appExpress.get('/posts/:yr/:mnth', (req, res) => {
    var ret = { "params": req.params, "query": req.query};
    res.send(ret);

    // For http://localhost:3099/posts/, browser will show
    /*
        Cannot GET /posts/
    */ 
    
    // For http://localhost:3099/posts/2023/02, browser will show
    /*
        {"params":{"yr":"2023","mnth":"02"},"query":{}}
    */ 

    // For http://localhost:3099/posts/2022/1?testParam=TTTT, browser will show
    /*
        {"params":{"yr":"2022","mnth":"1"},"query":{"testParam":"TTTT"}}
    */
});

console.log(`HOST => ${process.env.HOST}`)
console.log(`PORT => ${process.env.PORT}`)

const portNo = process.env.PORT || 3030;
appExpress.listen(portNo, () => {
    console.log(`Express app is listening @ port ${portNo} ...`)
});

// Note 1
// Take note that there is no checking what the path is as we did in http.createServer

// Note 2
// To have the changes reflect in the testing browser, normally we need to stop the running by Ctrl + C, then rerun again (node app.js)
// To avoid this, to have all the changes automatically reflect, we can use nodemon => Node monitor
// npm install nodemon
// Then run instead => nodemon app.js
// Any changes to the files in this location will make the server automatically restart 

// Note 3
// By using the backtick character, we can use a string referring to the variable => `Express app is listening @ port ${portNo} ...`

// Note 4
// process.env.PORT is the environmental variable called PORT
// it can be set like this in Mac => export PORT=3030
// in Windows Command Prompt => set PORT=3030 
// in Windows Powershell => $env:PORT=3030 
// in Windows Command Bash => export PORT=3030 
// And these values are independent values in different environments, commands are working on/off so be careful about these