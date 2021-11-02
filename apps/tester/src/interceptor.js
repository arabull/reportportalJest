
/**
 * Pulled from https://stackoverflow.com/a/9924463
 * 
 * @param {*} func 
 * @returns 
 */
function getParamNames(func) {
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    var fnStr = func.toString().replace(STRIP_COMMENTS, '');
    var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if(result === null)
        result = [];
    return result;
}

let myObj = {
    multiply(x, y) {
        return x * y;
    },
    squared(x) {
        return x ** x;
    }
};

let myUnchangedObj = {};
Object.assign(myUnchangedObj, myObj);

/**
 * Gets all methods matching the name of the function you want to hijack. 
 * This will execute the original function after executing the injected one.
 * 
 * If a name is not provided, then all functions of the object will be affected.
 * This is useful when you want to add logging or something similar
 * 
 * Does not affect all instances of the object.
 * 
 * Monkey patch logic adapted from: https://javascript.plainenglish.io/javascript-how-to-intercept-function-and-method-calls-b9fd6507ff02
 * 
 * @param {Object} obj Instance of object you wish to hijack
 * @param {Function} fn New function to replace the target with
 * @param {String} nm Name of the function you want to hijack
 */
function interceptMethodCalls(obj, fn, nm) {
    Object.keys(obj).forEach(key => {
        const prop = obj[key];
        if (typeof prop === 'function' && (typeof nm !== "undefined" ? (nm === key):true)) {
            const origProp = prop;
            obj[key] = (...args) => {
                const names = getParamNames(prop);
                fn(key, args, names);
                return Reflect.apply(origProp, obj, args);
            }
        }
    });
}

const handleMethodCall = (fnName, fnArgs, argNames) => {
    console.log(`The parameters are: ${argNames}`);
    fnArgs[0] = 1;
    console.log(`${fnName} called with `, fnArgs);
};
interceptMethodCalls(myObj, handleMethodCall, "multiply");
let firstAnswer = myObj.multiply(2, 7); // "multiply called with [ 2, 7 ], but hijacked to set the first argument to 1"
let secondAnswer = myObj.squared(2); // "squared called with [ 2 ], but not hijacked to set the first argument to 1. Thats because method name does not match"

console.log(`${firstAnswer} and ${secondAnswer}`); // should be "7 and 4"

firstAnswer = myUnchangedObj.multiply(2, 7); // "multiply called with [ 2, 7 ] but no print statement"
secondAnswer = myUnchangedObj.squared(2); // "squared called with [ 2 ] but no print statement"

console.log(`${firstAnswer} and ${secondAnswer}`); //should be "14 and 4"
