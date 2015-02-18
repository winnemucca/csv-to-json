var fs = require('fs');
var _ = require('underscore');
var inputText = fs.readFileSync(process.argv[2],'utf-8');
// console.log(process.argv[2]);
console.log(inputText);

var splitByLines = inputText.split('\n');
console.log("one", splitByLines);
// var array1 = splitByLines.shift().split(',');
splitByLines[0] = splitByLines[0].split(',');
splitByLines[1] = splitByLines[1].split(',');
splitByLines[2] = splitByLines[2].split(',');
splitByLines[3] = splitByLines[3].split(',');
// console.log('array1',array1);
// console.log('split',splitByLines);

var jsonList = [];
for (var i =1; i<splitByLines.length;i++) {
	var newObject = _.object(splitByLines[0],splitByLines[i]);
	jsonList.push(newObject);
}
console.log('jsonlist',jsonList);
console.log(process.argv[3]);
var newFile = fs.writeFileSync(process.argv[3],JSON.stringify(jsonList, null,' '),'utf-8');

// var array2 =one;
// console.log(typeof array2);

// var jsonList = [];
// for(var i =0; i<one.length;i++) {
// 	var newObject = _.object(one,)
// }


// var newArray = [];
// for(var value in array2) {
// 	if(array2.hasOwnProperty(value)){
// 		console.log('key',array2)
// 		console.log('value',value);
// 		array1.push(array2);
// 	}
// }
// console.log('new array',array1);


// var newArray = _.object(array1,array2);

// var push = _.map('array2',function() {

// });
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