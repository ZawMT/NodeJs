const EventEmitter = require('events');

class Calc extends EventEmitter {
    add(a, b)
    {
        return a + b;
    }

    div(a, b)
    {
        if(b == 0)
            this.emit('DividedByZero', {"number": a});
        else
            return a / b;
    }
}

module.exports = Calc;