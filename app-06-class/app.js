const Logger = require('./logger');
const Calc = require('./calc');

const logger = new Logger();
const calc = new Calc();

logger.log("Testing Logger Class");

calc.on('DividedByZero', 
    function(args){
        logger.log('DividedByZero is triggerd => ', args)
    }
);

logger.log('Testing calc functions');
logger.log('calc.add(4,5)');
logger.log('Result =>', calc.add(4,5));
logger.log('calc.div(4,5)');
logger.log('Result =>', calc.div(4,5));
logger.log('calc.div(4,0)');
logger.log('Result =>', calc.div(4,0));