// Print elements of nested array
// Write a JavaScript program which prints the elements of the following array.

// Note : Use nested for loops.

// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output : 
// "row 0" 
// " 1" 
// " 2" 
// " 1"
// " 24"
// "row 1"

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

var printArray = function(arr){
	for (var i = 0; i < arr.length; i++){
		console.log("row " + i);
		for (var j = 0; j < arr[i].length; j++){
			console.log(arr[i][j]);
		}
	}
}

printArray(a);