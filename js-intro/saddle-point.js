// Write a program to search for the "saddle points" in a 5 by 5 array of integers.

// You can generate this array by using the concept of multidimensional arrays and 
// random number generation we learnt earlier.

// A saddle point is a cell whose value is greater than or equal to any in its row, 
// and less than or equal to any in its column. There may be more than one saddle 
// point in the array. Print out the coordinates of any saddle points your program finds.

// Print out "No saddle points" if there are none.

var array = [];

var fillArray = function(arr){
	for(var i = 0; i < 5; i++){
		var x = Math.floor(Math.random() * 9) + 1;
		arr.push([x]);
	}
	return arr;
}

var reFillArray = function(arr){
	for(var i = 0; i < 5; i++){
		var x = Math.floor(Math.random() * 9) + 1;
		arr[i].push(x);
	}
	return arr;
}

// Generates array
var generateArray = function(arr){
	var array1d = fillArray(arr); // gets 1D array
	var arrayMd = [];

	// gets 5D array
	for(var i = 0; i < 4; i++){
		var arrayMd = reFillArray(array1d);
	}
	array = arrayMd;
	return arrayMd;
}
///////

var getColumn = function(arr, j){
	var col = [];

	for (var i = 0; i < arr.length; i++){
		col.push(arr[i][j]);
	}
	return col;
}


// find saddle points
var findSaddle = function(arr){
	var saddlePoints = [];
	var minInRow = 0, columnArray = [], maxInColumn = 0;

	for (var i = 0; i < arr.length; i++){
		minInRow = Math.min.apply(Math, arr[i]);
		//ok
		for (var j = 0; j < arr[i].length; j++){
			if (arr[i][j] >= minInRow){
				columnArray = getColumn(arr, j);
				maxInColumn = Math.max.apply(Math, columnArray);
				// ok in maxInColumn

				if (arr[i][j] <= maxInColumn){
					saddlePoints.push([i,j]);
				}
			}
		}
	}
	return saddlePoints;
}

console.log(generateArray(array));
console.log(findSaddle(array));
