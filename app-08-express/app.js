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