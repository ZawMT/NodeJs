const moduleFs = require('fs');

// Reading dir info in a synchronous way
var resultSync = moduleFs.readdirSync('./');
console.log("ReadDir Sync => ", resultSync); // => List of files and folder in this file's directory will be listed as an array of strings

// Reading dir info in a asynchronous way
// Second parameter is a callback function which will be called when the reading is done
moduleFs.readdir('./', 
    function(err, resultAsync)
    {
        if(err)
            console.log("ReadDir got error=> ", err);
        else
            console.log("ReadDir Async => ", resultAsync);
    }
);