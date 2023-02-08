// Trying out the build nodejs modules

const modulePath = require('path');

// __filename => Name of this current file app.js together with the path
var pathObj1 = modulePath.parse(__filename);
console.log("Checking pathObj1");
console.log(pathObj1);

// __dirname => Path in which this app.js resides
var pathObj2 = modulePath.parse(__dirname);
console.log("Checking pathObj2");
console.log(pathObj2);

// Output will be as follows:
/*
Checking pathObj1
{
  root: 'D:\\',
  dir: 'D:\\Learning\\Repo\\Nodejs\\NodeJs\\app-02',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
Checking pathObj2
{
  root: 'D:\\',
  dir: 'D:\\Learning\\Repo\\Nodejs\\NodeJs',        
  base: 'app-02',
  ext: '',
  name: 'app-02'
}
*/