// here we assume both arrays are of the same length
var array1 = ['a', 'b', 'c'];
var array2 = [1, 2, 3];

var joinArray = function(arr1, arr2){
	var joinedArray = [];

	for(var i = 0; i < arr1.length; i++){
		joinedArray.push(arr1[i]);
		joinedArray.push(arr2[i]);
	}
	return joinedArray;
}

console.log(joinArray(array1, array2));