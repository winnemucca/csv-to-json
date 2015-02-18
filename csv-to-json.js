var fs = require('fs');
var inputText = fs.readFileSync(process.argv[2],'utf-8');
// console.log(process.argv[2]);
// console.log(inputText);

var one = inputText.split('\n');
console.log("one", one);
var array1 = one.shift().split(',');
console.log('array1',array1);
console.log('one',one);

var array2 =one;
console.log(typeof array2);
var newArray = [];
// _.pluck(array2,'name');

// var inputArrayByLine = inputText.slice(0,inputText.search(/\n/)).split(' ');
// console.log('inputArrayByLine',inputArrayByLine);

// var array1= one.split(',');
// var key = one.splice(0,1);

// for(var i =0; i<one.length;i++) {
// 	one[i].split(',');
// 	console.log()
// }
// console.lg(array1);
// var array1 = _.toArray(key);
// console.log(typeof key);

// var value = split.splice(0,3);
// console.log('value',value);



// var object = _.object(key,value[0]);
// console.log(typeof value);

// console.log('key',key);

// var newArray = [];

// for(var value in key) {
// 	if(key.hasOwnProperty(value)){
// 		console.log('key',key)
// 		console.log('value',value);
// 		newArray.push(key);
// 	}
// }
// console.log('new array',newArray);

