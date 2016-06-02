
// function that reverses an array.

var array = [1, 2, 'x', 'a', 9];

var getReverse = function(array) {
	var temp_array = [];
	var length = array.length;
	for (var i = 0; i < length; i++) {
		temp_array[length-i-1] = array[i];
	}
	return temp_array;
}

console.log(getReverse(array));