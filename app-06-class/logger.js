class Logger {
    log(src, message)
    {
        if(src === undefined)
            console.log(message);
        else if(message === undefined)
            console.log(src);
        else
            console.log(src, message);
    }
}

module.exports = Logger;