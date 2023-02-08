const EventEmitter = require('events');
const evtEmitter = new EventEmitter();

console.log('Line 4');

evtEmitter.addListener('TestEvent', 
    function(args)
    {
        console.log('Line 9 - TestEvent is triggered');
        console.log('Line 10 - Event has these parameters =>', args);
    }
);

console.log('Line 14');
evtEmitter.emit('TestEvent', 9, 'testing');
console.log('Line 16');

// Output is will be as follows:
/*
Line 4
Line 14
Line 9 - TestEvent is triggered
Line 10 - Event has these parameters => 9        
Line 16
*/

// Lines (9 and 10) from the listener's callback function were executed because of the call at line 15.