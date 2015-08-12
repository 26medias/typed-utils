var utils 		= require('./typed-utils');

var testArray	= new Float32Array(20*20);

utils.seed(testArray);

var min	= utils.min(testArray);
var max	= utils.max(testArray);

console.log("testArray",testArray);
console.log("Range",[min, max]);

utils.pow(testArray, 2);

//utils.normalize(testArray, -255, 255);

var min	= utils.min(testArray);
var max	= utils.max(testArray);
console.log("testArray",testArray);
console.log("Range",[min, max]);
console.log("[2,3]",utils.xy(testArray, 2, 3, 20));