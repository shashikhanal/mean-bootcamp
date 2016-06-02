// merge two arrays and removes all duplicate elements.

var new_array = [];

var merge_array = function(array1, array2){

	for(var i = 0; i < array1.length; i++){
		if (new_array.indexOf(array1[i]) == -1) {
			new_array.push(array1[i]);
			//console.log(new_array);
		}
	}

	for (var i = 0; i < array2.length; i++){
		if (new_array.indexOf(array2[i]) == -1) {
			new_array.push(array2[i]);
		}
	}
	console.log(new_array);
}
// Test Data
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
